#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int TestCases[4][6][3];
int RecordTable[6][3] = {
    0,
};
int MatchSchedule[2][15] = {
    {1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5, 4, 5, 5},
    {0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4}};
int Result[4];

void MatchRecording(int MatchDay)
{
    if (MatchDay == 15)
    {
        for (int t = 0; t < 4; t++)
        {
            if (Result[t] == 1)
                continue;
            bool Comparing = true;
            for (int i = 0; i < 6; i++)
            {
                if (!Comparing)
                    break;
                for (int j = 0; j < 3; j++)
                {
                    if (TestCases[t][i][j] != RecordTable[i][j])
                    {
                        Comparing = false;
                        break;
                    }
                }
            }

            if (Comparing)
            {
                Result[t] = 1;
                return;
            }
        }

        return;
    }

    int HomeTeam = MatchSchedule[0][MatchDay];
    int AwayTeam = MatchSchedule[1][MatchDay];

    //Case1: Home Win
    RecordTable[HomeTeam][0]++;
    RecordTable[AwayTeam][2]++;
    MatchRecording(MatchDay + 1);
    RecordTable[HomeTeam][0]--;
    RecordTable[AwayTeam][2]--;

    //Case2: Draw
    RecordTable[HomeTeam][1]++;
    RecordTable[AwayTeam][1]++;
    MatchRecording(MatchDay + 1);
    RecordTable[HomeTeam][1]--;
    RecordTable[AwayTeam][1]--;

    //Case3: Away Win
    RecordTable[HomeTeam][2]++;
    RecordTable[AwayTeam][0]++;
    MatchRecording(MatchDay + 1);
    RecordTable[HomeTeam][2]--;
    RecordTable[AwayTeam][0]--;
}

int main(int argc, const char *argv[])
{

    for (int t = 0; t < 4; t++)
    {
        for (int i = 0; i < 6; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                cin >> TestCases[t][i][j];
            }
        }
    }

    MatchRecording(0);

    for (int i = 0; i < 4; i++)
    {
        cout << Result[i] << " ";
    }
    cout << "\n";

    return 0;
}
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int p;
vector<int> table;
int dp[1000][1000];
int main(int argc, const char *argv[])
{

    cin >> p;
    for (int i = 0; i < p; i++)
    {
        int temp;
        cin >> temp;
        table.push_back(temp);
    }

    for (int i = 0; i < p; i++)
    {
        for (int j = 0; j < p; j++)
        {
            dp[i][j] = dp[i - 1][j - 1];
        }
    }

    for (int i = 0; i < p; i++)
    {
        cout << table[i] << " ";
    }
    cout << "\n";

    return 0;
}
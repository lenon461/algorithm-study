class Solution {
public:
    vector<vector<int>> reconstructMatrix(int upper, int lower, vector<int>& colsum) {
        int C = colsum.size(), i, can = 1;
        vector<vector<int>> ans, candidate(2, vector<int>(C, 0));
        for(i=0;i<C;i++) if(colsum[i] == 2) {
            upper--;
            lower--;
            candidate[0][i] = candidate[1][i] = 1;
            can &= upper >= 0 && lower >= 0;
        }
        if(can) {
            for(i=0;i<C;i++) if(colsum[i] == 1) {
                if(upper > 0 || lower > 0) {
                    candidate[lower > 0][i] = 1;
                    (lower > 0 ? lower : upper)--;
                }
                else can = 0;
            }
            if(can && lower + upper == 0)
                return candidate;
        }
        return ans;
    }
};
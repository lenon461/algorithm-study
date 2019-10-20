class Solution {
public:
    int dp[6][15][5000];
    const int MOD = 1000000007;
    
    int go(int d, int cnt, int num, vector<int>& rollMax) {
        if (num == 0) return 1;
        
        int &ret = dp[d][cnt][num];
        if (ret != -1) return ret;
        
        ret = 0;
        for (int i = 0; i < 6; ++i) {
            if (d != i) ret = (ret + go(i, 0, num - 1, rollMax)) % MOD;
            else if (cnt + 1 < rollMax[i]) ret = (ret + go(i, cnt + 1, num - 1, rollMax)) % MOD;
        }
        
        return ret;
    }
    int dieSimulator(int n, vector<int>& rollMax) {
        memset(dp, -1, sizeof(dp));
        
        int ans = 0;
        for (int i = 0; i < 6; ++i)
            ans = (ans + go(i, 0, n - 1, rollMax)) % MOD;
        
        return ans;
    }
};
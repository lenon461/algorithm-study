class Solution {
public:
    vector<vector<int>> queensAttacktheKing(vector<vector<int>>& queens, vector<int>& king) {
        vector<vector<int>> ret;
        const int dx[] = { -1, -1, 0, 1, 1, 1, 0, -1 };
        const int dy[] = { 0, 1, 1, 1, 0, -1, -1, -1 };
        
        bool bo[8][8]{};
        for (auto &it : queens) bo[it[0]][it[1]] = 1;
        
        for (auto &it : queens) {
            int x = it[0], y = it[1];
            for (int i = 0; i < 8; ++i) {
                for (int k = 1; k <= 7; ++k) {
                    int nx = x + dx[i] * k;
                    int ny = y + dy[i] * k;
                    if (nx < 0 || nx >= 8 || ny < 0 || ny >= 8 ||
                        bo[nx][ny]) break;
                    
                    if (nx == king[0] && ny == king[1]) {
                        ret.push_back({x, y});
                        break;
                    }
                }
            }
        }
        
        return ret;
    }
};
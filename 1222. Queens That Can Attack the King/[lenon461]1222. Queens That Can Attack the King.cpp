class Solution {
public:
    vector<vector<int>> queensAttacktheKing(vector<vector<int>>& queens, vector<int>& king) {
        
        vector<vector<int>> result;
        //(y,x)
        int chessboard[8][8] = {0, };
        int directions[8][2] = {
            {1, 0}, // up 
            {0, 1}, // right
            {-1, 0}, // down
            {0, -1}, // left
            {1, 1},  // up-right 
            {1, -1}, // up-left 
            {-1, 1}, // down-right 
            {-1, -1}, // down-left 
        };
        for(int n = 0; n < queens.size(); n++){
            chessboard[queens[n][0]][queens[n][1]] = 1;
        }
        for(int i = 0; i < 8; i++){
            int dy = directions[i][0];
            int dx = directions[i][1];
            int ky = king[0];
            int kx = king[1];
            ky += dy;
            kx += dx;
            // in chessboard
            while(ky >= 0 && ky < 8 && kx >= 0 && kx < 8){
                if(chessboard[ky][kx] == 1) {
                    vector<int> pos;
                    pos.push_back(ky);
                    pos.push_back(kx);
                    result.push_back(pos);
                    break;
                }
                ky += dy;
                kx += dx;
            }
        }
//         showchessboard()
//         for(int i = 0; i < 8; i++){
//             for(int j = 0; j < 8; j++){
//                 cout << chessboard[i][j] << " ";
//             }   
//             cout << endl;
//         }
        return result;
    }
};
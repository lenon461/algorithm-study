const int MAX_N = 10000;
class Solution {
    int p[MAX_N], invalid[MAX_N];
    int find(int u){ return u == p[u] ? u : (p[u] = find(p[u]));}
    void merge(int u, int v){
        u = find(u), v = find(v);
        if(u == v) return;
        p[u] = v;
        invalid[v] |= invalid[u];
    }
    int gv(int y, int x, const int& M){ return y*M + x; }
public:
    int closedIsland(vector<vector<int>>& grid) {
        int N = grid.size(), M = grid[0].size(), i, j, k, dy[]={0,0,1,-1}, dx[]={1,-1,0,0}, can, u, ans = 0;
        for(i=0;i<N;i++) for(j=0;j<M;j++) {
            u = gv(i, j, M);
            p[u] = u;
            invalid[u] = 0;
        }
        
        for(i=0;i<N;i++) for(j=0;j<M;j++) if(!grid[i][j]) {
            can = 1;
            for(k=0;k<4;k++){
                int ty = i + dy[k], tx = j + dx[k];
                can &= 0 <= ty && ty < N && 0 <= tx && tx < M;
                if(0 <= ty && ty < N && 0 <= tx && tx < M && !grid[ty][tx])
                    merge(gv(i, j, M), gv(ty, tx, M));
            }
            if(!can) {
                u = find(gv(i, j, M));
                invalid[u] = 1;
            }
        }
                
        for(i=0;i<N;i++) for(j=0;j<M;j++) if(!grid[i][j]) {
            u = find(gv(i, j, M));
            if(!invalid[u]) {
                invalid[u] = 1;
                ans += 1;
            }
        }
        
        return ans;
    }
};
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
void rot(vector<vector<int>>& key, int M){
	int i, j;
	for (i = 0; i < M / 2; i++) { 
		for (j = i; j < M - i - 1; j++) {
			int temp = key[i][j];
			key[i][j] = key[M - 1 - j][i];
			key[M - 1 - j][i] =key[M - 1 - i][M - 1 - j];
			key[M - 1 - i][M - 1 - j] = key[j][M - 1 - i];
			key[j][M - 1 - i] = temp;
		}
	}
}
bool solution(vector<vector<int>> key, vector<vector<int>> lock) {
	int M = key.size(), N = lock.size(),i ,j, can, x, a, b, e_cnt = 0,te_cnt, L;
	L = 2*M+N;
	vector<vector<int>> m(L, vector<int>(L, 0));
	for(i=0;i<N;i++) for(j=0;j<N;j++){
		e_cnt += !lock[i][j];
		m[i+M][j+M] = lock[i][j];
	}
	for(x=0;x<4;x++) {
		for(i=0;i<L;i++) for(j=0;j<L;j++) {
			can = 1;
			te_cnt = 0;
			for(a = 0;a<M;a++) for(b=0;b<M;b++) if(M <= i+a && i + a< M+N && M <= j+b && j+b < M+N) {
				can &= m[i+a][j+b] ^ key[a][b];
				te_cnt += !m[i+a][j+b];
			}
			if(can && e_cnt == te_cnt)
				return true;
		}
		rot(key, M);
	}	
	return false;
}
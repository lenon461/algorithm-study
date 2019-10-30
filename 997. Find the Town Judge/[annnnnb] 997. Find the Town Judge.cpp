const int MAX_N = 1001;
class Solution {
public:
	int findJudge(int N, vector<vector<int>>& trust) {
		int M, indegree[MAX_N] = {}, outdegree[MAX_N] = {}, i;
		for(vector<int>& e : trust) {
			outdegree[e[0]] += 1;
			indegree[e[1]] += 1;
		}
		for (i = 1; i <= N; i++) if (!outdegree[i])
			return indegree[i] == N - 1 ? i : -1;
		return -1;
	}
};
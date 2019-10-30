#include<queue>
using namespace std;
class Solution {
public:
	bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
		int courses = 0, i;
		vector<vector<int>> adj(numCourses);
		vector<int> indegree(numCourses, 0);
		queue<int> q;
		for(vector<int>& e : prerequisites) {
			indegree[e[0]]++;
			adj[e[1]].push_back(e[0]);
		}
		for(i=0;i<numCourses;i++) if(!indegree[i])
			q.push(i);
		while(!q.empty()){
			courses++;
			int u = q.front(); q.pop();
			for(int& v : adj[u]) {
				indegree[v]--;
				if(!indegree[v])
					q.push(v);
			}
		}
		return courses == numCourses;
	}
};
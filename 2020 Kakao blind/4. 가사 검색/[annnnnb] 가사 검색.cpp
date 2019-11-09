#include<iostream>
#include<vector>
#include<algorithm>
#include<cmath>
#include<cstring>
#include<map>
#include<queue>
#include<set>
#include<string>
#include<stack>
using namespace std;
vector<int> solution(vector<string> words, vector<string> queries) {
   vector<int> answer(queries.size(), -1);
   map<string, vector<pair<int, int>>> prefix, suffix;
   map<string, map<int, int>> prefixCnt, suffixCnt;
   int i, j, len;
   for (i = 0; i < queries.size(); i++) {
      string& q = queries[i];
      len = q.length();
      if (q[0] == '?') { // suffix
         for (j = 1; j < len; j++) if (q[j] != '?') {
            break;
         }
         q = q.substr(j);
         reverse(q.begin(), q.end());
         suffix[q].push_back({ i, len });
      }
      else { // prefix
         for (j = 0; j < len; j++) if (q[j] == '?') {
            break;
         }
         q = q.substr(0, j);
         prefix[q].push_back({ i, len });
      }
   }
   string t;
   for (string& w : words) {
      len = w.length();

      t = "";
      for (i = 0; i < w.size(); i++) { // prefix
         t += w[i];
         if (prefix.find(t) != prefix.end())
            prefixCnt[t][len]++;
      }
      
      reverse(w.begin(), w.end());
      t = "";
      if (suffix.find(t) != suffix.end())
         suffixCnt[t][len]++;
      for (i = 0; i < w.size(); i++) { // suffix
         t += w[i];
         if (suffix.find(t) != suffix.end())
            suffixCnt[t][len]++;
      }
   }
   for (auto it = prefix.begin(); it != prefix.end(); it++) {
      const string& q = it->first;
      sort(it->second.begin(), it->second.end());
      for (auto& pi : it->second)
         answer[pi.first] = prefixCnt[q][pi.second];
   }
   for (auto it = suffix.begin(); it != suffix.end(); it++) {
      const string& q = it->first;
      for (auto& pi : it->second)
         answer[pi.first] = suffixCnt[q][pi.second];
   }
   return answer;
}
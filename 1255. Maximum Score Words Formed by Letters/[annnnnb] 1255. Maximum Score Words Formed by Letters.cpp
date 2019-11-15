#include<algorithm>
using namespace std;
class Solution {
private:
    int ls[26] = {}, w[14][26]={}, N, s[14] = {};
    int back(int p) {
        if(p == N) return 0;
        
        int ret = 0, can = 1, i;
        for(i=0;can && i<26;i++)
            can &= w[p][i] <= ls[i];
        if(can){
            for(i=0;i<26;i++)
                ls[i] -= w[p][i];
            ret = back(p + 1) + s[p];
            for(i=0;i<26;i++)
                ls[i] += w[p][i];
        }
        return max(ret, back(p + 1));
    }
public:
    int maxScoreWords(vector<string>& words, vector<char>& letters, vector<int>& score) {
        int i;
        N = words.size();
        for(char l : letters)
            ls[l-'a']++;
        for(i=0;i<N;i++) {
            for(char ch : words[i]) {
                w[i][ch-'a']++;
                s[i] += score[ch-'a'];
            }
        }
        return back(0);
    }
};
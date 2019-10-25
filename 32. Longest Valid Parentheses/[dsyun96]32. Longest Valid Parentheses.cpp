//Runtime: 8 ms, faster than 60.35% of C++ online submissions for Longest Valid Parentheses.
//Memory Usage: 9.7 MB, less than 39.29% of C++ online submissions for Longest Valid Parentheses.

class Solution {
public:
    int longestValidParentheses(string s) {
        vector<int> v;
        vector<pair<int, int>> cnt;
        for (int i = 0; i < s.size(); ++i) {
            if (s[i] == '(') v.push_back(i);
            else if (!v.empty()) {
                while (!cnt.empty() && cnt.back().first > v.back()) cnt.pop_back();
                if (!cnt.empty() && cnt.back().second + 1 == v.back()) cnt.back().second = i;
                else cnt.push_back({ v.back(), i });
                v.pop_back();
            }
        }
        
        int ret = 0;
        for (auto &it : cnt) ret = max(ret, it.second - it.first + 1);
        
        return ret;
    }
};
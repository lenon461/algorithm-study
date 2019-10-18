class Solution {
public:
    int balancedStringSplit(string s) {
        int ret = 0, cnt = 0;
        for (char ch : s) ret += !(cnt += ch == 'L' ? 1 : -1);
        return ret;
    }
};
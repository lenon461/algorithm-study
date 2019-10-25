//Runtime: 16 ms, faster than 85.69% of C++ online submissions for Longest Palindromic Substring.
//Memory Usage: 15.8 MB, less than 37.93% of C++ online submissions for Longest Palindromic Substring.

class Solution {
public:
    string longestPalindrome(string s) {
        string ret;
        for (int j, i = 0; i < s.size(); ++i) {
            for (j = 0; i - j - 1 >= 0 && i + j + 1 < s.size() && s[i + j + 1] == s[i - j - 1]; ++j);
            if (j * 2 + 1 > ret.size()) ret = s.substr(i - j, j * 2 + 1);
            
            for (j = 0; i - j >= 0 && i + j + 1 < s.size() && s[i - j] == s[i + j + 1]; ++j);
            if (j * 2 > ret.size()) ret = s.substr(i - j + 1, j * 2);
        }
        
        return ret;
    }
};
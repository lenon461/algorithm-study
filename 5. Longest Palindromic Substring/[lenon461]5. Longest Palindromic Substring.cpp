// Runtime: 16 ms, faster than 85.72% of C++ online submissions for Longest Palindromic Substring.
// Memory Usage: 16 MB, less than 37.93% of C++ online submissions for Longest Palindromic Substring.

class Solution {
public:
    string longestPalindrome(string s) {
        if(s == "" || s.length() == 1) return s;
        string result;
        for(int i = 0; i < s.length(); i++){
            int start = i;
            int end = i;
            int len = 1;
            
            while(start >= 0 && end < s.length() && s[start] == s[end]){
                start--;
                end++;
                len += 2;
            }
            if(len - 2 > result.length()){
               result = s.substr(start + 1, len - 2);
            }
            
            start = i;
            end = i+1;
            len = 2;
            
            while(start >= 0 && end < s.length() && s[start] == s[end]){
                start--;
                end++;
                len += 2;
            }
            if(len - 2 > result.length()){
               result = s.substr(start + 1, len - 2);
            }
        }
        return result;
    
    }
};
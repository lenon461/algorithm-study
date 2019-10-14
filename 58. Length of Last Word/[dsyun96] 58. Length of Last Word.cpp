class Solution {
public:
    int lengthOfLastWord(string s) {
        int i, len;
        for (i = s.size() - 1; ~i && s[i] == ' '; --i);
        len = i;
        for ( ; ~i; --i) if (s[i] == ' ') break;
        
        return len - i;
    }
};
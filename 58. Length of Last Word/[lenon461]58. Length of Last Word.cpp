class Solution {
public:
    int lengthOfLastWord(string s) {
        int prev = 0;
        int result = 0;
        for(int i = 0; i < s.size(); i++){
            
            if(s[i] == ' ') {
                if(result != 0) prev = result;
                result = 0;
            }
            else {
                result++;
            }

        }
        if(prev && result == 0) return prev;
        return result;
    }
};
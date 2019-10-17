class Solution {
public:
    int balancedStringSplit(string s) {
        int lh = 0, rh = 0, result = 0;
        
        for(int i = 0; i < s.length(); i++){
            if(s[i] == 'L'){
                lh++;
            }
            else{
                rh++;
            }
            
            if(lh == rh) {
                result++;
                lh = rh = 0;   
            }
            
        }
        return result;
    }
};
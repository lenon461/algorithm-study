Runtime: 4 ms, faster than 96.02% of C++ online submissions for Longest Valid Parentheses.
Memory Usage: 9.6 MB, less than 67.86% of C++ online submissions for Longest Valid Parentheses.
    
class Solution {
public:
    int longestValidParentheses(string s) {
        
        return ValidMaxLength(s);
    }
    bool isValid(string s){
        
        stack<char> st;
        
        int temp = 0;
        int result = 0;
        
        for(int i = 0 ; i < s.length(); i++){
            char c = s[i];
            if(c == '('){
                st.push('(');
            }
            else if(c == ')' && !st.empty()){
                st.pop();
            }
            else{
                return false;
            }
        }
        if(!st.empty()) return false;
        return true;
    }
    int ValidMaxLength(string s){
        
        stack<int> st;
        int result = 0;
        st.push(-1);
        for(int i = 0 ; i < s.length(); i++){
            char c = s[i];
            if(c == '('){
                st.push(i);
            }
            else{
                st.pop();
                if (st.empty()) {
                    st.push(i);
                } else {
                    result = max(result, i - st.top());
                }
            }
        }
        return result;
    }
};
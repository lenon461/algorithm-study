class Solution {
public:
    
    int largestRectangleArea(vector<int>& heights) {
        stack<int> S;
        int ret = 0, len = heights.size();
        
        for (int i = 0; i <= len; ++i) {
            int cur = i == len ? 0 : heights[i];
            while (!S.empty() && cur < heights[S.top()]) {
                int h = heights[S.top()];
                S.pop();
                
                int w = S.empty() ? i : i - 1 - S.top();
                ret = max(ret, h * w);
            }
            S.push(i);
        }
        
        return ret;
    }
};
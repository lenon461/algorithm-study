class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int result = 0;
        for(int i = 0; i < heights.size(); i++){
            result = max(result, maxArea(heights, i));
        }
        return result;
    }
    int maxArea(vector<int>& heights, int i){
        int height = heights[i];
        if(i != 0 && height == heights[i-1]) return -1;
        int width = 1;
        for(int j = i+1; j < heights.size(); j++){
            if(height > heights[j]) break;
            else width++;

        }
        for(int j = i-1; j >= 0; j--){
            if(height > heights[j]) break;
            else width++;
        }
        // cout << width << " " << height << endl;

        return width * height;
        
    }
};
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        vector<int> v;
        v.push_back(nums[0]);
        int result = nums[0];
        for(int i = 1; i < nums.size(); i++){
            v.push_back(max(v[i-1]+ nums[i], nums[i]));
            result = max(result, v.back());
        }
        
        return result;
    }
};
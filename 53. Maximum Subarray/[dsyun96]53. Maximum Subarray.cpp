//Runtime: 8 ms, faster than 71.11% of C++ online submissions for Maximum Subarray.
//Memory Usage: 9.1 MB, less than 99.02% of C++ online submissions for Maximum Subarray.

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int sum = nums[0], ret = sum;
        for (int i = 1; i < nums.size(); ++i) {
            sum = max(sum + nums[i], nums[i]);
            ret = max(ret, sum);
        }
        return ret;
    }
};
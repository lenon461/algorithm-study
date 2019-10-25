//Runtime: 140 ms, faster than 29.70% of C++ online submissions for Two Sum.
//Memory Usage: 9.1 MB, less than 100.00% of C++ online submissions for Two Sum.

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); ++i) {
            for (int j = i + 1; j < nums.size(); ++j) {
                if (nums[i] + nums[j] == target) return { i, j };
            }
        }
        return { -1, -1 };
    }
};
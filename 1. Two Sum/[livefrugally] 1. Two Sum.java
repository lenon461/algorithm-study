// Runtime: 3 ms, faster than 51.64% of Java online submissions for Two Sum.
// Memory Usage: 37.4 MB, less than 98.95% of Java online submissions for Two Sum.

class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; ++i){
            if (map.containsKey(nums[i])){
                int value = map.get(nums[i]);
                result[0] = value;
                result[1] = i;
            } else {
                map.put(target-nums[i], i);
            }
        }
        return result;
    }
}
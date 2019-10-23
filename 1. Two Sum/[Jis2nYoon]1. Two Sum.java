/*
 * Runtime: 14 ms, faster than 43.31% of Java online submissions for Two Sum.
 * Memory Usage: 36.5 MB, less than 99.48% of Java online submissions for Two Sum.
 * 29 / 29 test cases passed.
 */
class Solution {
  public int[] twoSum(int[] nums, int target) {
    
    int[] answer = new int[2];
    int num1;
    int num2;
    for (int i = 0; i < nums.length; i++) {
      num1 = nums[i];
      num2 = target - num1;
      for (int j = i + 1; j < nums.length; j++) {
        if (nums[j] == num2) {
          answer[0] = i;
          answer[1] = j;
          return answer;
        }
      }
    }
    return answer;
  }
}

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] answer = new int[2];
        //1.for문 돌려서 target 나오면 return i, j 값
        for(int i = 0; i<nums.length -1 ; i++) {
            for(int j = 1; j< nums.length ; j++) {
                if(i != j) {
                    if(nums[i] + nums[j] == target) {
                    answer[0] = i;
                    answer[1] = j;

                    return answer;
                    }
                }
            }
        }
        return answer;
    }
}

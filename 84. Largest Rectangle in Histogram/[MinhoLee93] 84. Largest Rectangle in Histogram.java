
/**
 * Runtime: 803 ms, faster than 5.08% of Java online submissions for Largest Rectangle in Histogram.
 * Memory Usage: 41.1 MB, less than 68.18% of Java online submissions for Largest Rectangle in Histogram.
 */

class Solution {
    public int largestRectangleArea(int[] heights) {
        int N = heights.length;
        int MAX = 0;
        
		for (int i = 0; i < N; i++) {
			int temp = heights[i];
			// ¿Þ
			for (int left = 1; i - left >= 0; left++) {
				if (heights[i - left] < heights[i]) {
					break;
				} else {
					temp += heights[i];
				}
			}

			// ¿À
			for (int right = 1; i + right < N; right++) {
				if (heights[i + right] < heights[i]) {
					break;
				} else {
					temp += heights[i];
				}
			}

			if (temp > MAX) {
				MAX = temp;
			}
		}
		
		return MAX;
    }
}
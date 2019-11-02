class Solution {
	public int findJudge(int N, int[][] trust) {
		int result = -1;
		int[] peoplePoint = new int[N+1];
		int[] judgePoint = new int[N+1];
		for(int i=0; i<trust.length; i++) {
			peoplePoint[trust[i][0]] = -1;
			judgePoint[trust[i][1]]++;
		}
		for(int i=1; i<judgePoint.length; i++) {
			if(judgePoint[i]==N-1 && peoplePoint[i]!=-1) {
				return i;
			}
		}
		
		return result;
	}
}

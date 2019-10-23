
class Solution {
  
  /*
   * 84. Largest Rectangle in Histogram 문제 2019-10-23
   * 
   * n의 양의 정수로 histogram's bar 높이를 나타낸다 폭은 1 고정
   * histogram중에서 가장 넓은 넓이를 가진 직사각형을 찾아라
   * 배열이 주어지면 히스토그램을 그린다.
   * 1. 연속된 수여야한다. 연속된 수인가 true,false로 체크하는걸로 하면 되지 않을까?
   * 2. 처음 연속된 두수의 차이 길이랑 1의 true,false로 끌고 가서 체크. 3번째 수 이후부터는 
   *     처음 연속된 두수의 차이 길이보다 수가 같거나크면 됨.
   * 3. 변수 중에는 width도 있어야함. width=1로 시작해서 수가 늘어날수록 width를 1씩 증가해주고.
   * 4. index 기준으로 오른쪽 왼쪽으로 연속되서 width를 증가할 수 있는지 체크했음...
   * 
   * 근데 개똥망...ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
   * 오래 걸렸고 메모리도 많이쓰고...에효...개어려워 ㅠㅠㅠㅠㅠㅠㅠㅠㅠ
   * 답지나 보고 와야지...ㅜㅠㅠㅜㅜㅜㅜ 헐 이민호93님이랑 나랑 방법 비슷한거 같애
   * 
   * Runtime: 563 ms, faster than 5.01% of Java online submissions.
   * Memory Usage: 41.3 MB, less than 63.64% of Java online submissions.
   * 96 / 96 test cases passed.
   * 
   */
  public int largestRectangleArea(int[] heights) {
    boolean isContinuous = false; // 연속된 숫자인가
    int width = 1;
    int answer = 0;
    int area;
    int height;
    
    if( heights.length == 0 ) {
      return 0;
    }
    if( heights.length == 1) {
      return heights[0] * width;
    }
    
    // heights 배열에 수가 두개 이상 들어왔을때만 체크
    if( heights.length > 1) {
      for(int index = 0;  index < heights.length; index++) {
        height = heights[index];
        area = 0;
        isContinuous = true;
        width = 1;
        //index 기준으로 오른쪽으로 체크
        for(int i = index+1 ; i < heights.length; i++) {
          if(isContinuous) {
            if( height >heights[i]) {
              isContinuous = false;
              width--;
            }
            width++;
          } 
        }
        isContinuous=true;
      //index 기준으로 왼쪽으로 체크
        for(int i = index-1 ; i >= 0; i--) {
          if(isContinuous) {
            if( height >heights[i]) {
              isContinuous = false;
              width--;
            }
            width++;
          } 
        }
        area = height * width;
        if(answer < area) {
          answer = area;
        }
      }
    }
    return answer;
  }
  
}
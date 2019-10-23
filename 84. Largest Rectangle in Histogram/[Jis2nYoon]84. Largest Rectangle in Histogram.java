
class Solution {
  
  /*
   * 84. Largest Rectangle in Histogram ���� 2019-10-23
   * 
   * n�� ���� ������ histogram's bar ���̸� ��Ÿ���� ���� 1 ����
   * histogram�߿��� ���� ���� ���̸� ���� ���簢���� ã�ƶ�
   * �迭�� �־����� ������׷��� �׸���.
   * 1. ���ӵ� �������Ѵ�. ���ӵ� ���ΰ� true,false�� üũ�ϴ°ɷ� �ϸ� ���� ������?
   * 2. ó�� ���ӵ� �μ��� ���� ���̶� 1�� true,false�� ���� ���� üũ. 3��° �� ���ĺ��ʹ� 
   *     ó�� ���ӵ� �μ��� ���� ���̺��� ���� ���ų�ũ�� ��.
   * 3. ���� �߿��� width�� �־����. width=1�� �����ؼ� ���� �þ���� width�� 1�� �������ְ�.
   * 4. index �������� ������ �������� ���ӵǼ� width�� ������ �� �ִ��� üũ����...
   * 
   * �ٵ� ���˸�...����������������������������������������������������������
   * ���� �ɷȰ� �޸𸮵� ���̾���...��ȿ...������� �ФФФФФФФФ�
   * ������ ���� �;���...�̤ФФ̤̤̤� �� �̹�ȣ93���̶� ���� ��� ����Ѱ� ����
   * 
   * Runtime: 563 ms, faster than 5.01% of Java online submissions.
   * Memory Usage: 41.3 MB, less than 63.64% of Java online submissions.
   * 96 / 96 test cases passed.
   * 
   */
  public int largestRectangleArea(int[] heights) {
    boolean isContinuous = false; // ���ӵ� �����ΰ�
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
    
    // heights �迭�� ���� �ΰ� �̻� ���������� üũ
    if( heights.length > 1) {
      for(int index = 0;  index < heights.length; index++) {
        height = heights[index];
        area = 0;
        isContinuous = true;
        width = 1;
        //index �������� ���������� üũ
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
      //index �������� �������� üũ
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
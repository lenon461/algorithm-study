/**
 * Runtime: 1 ms, faster than 46.96% of Java online submissions for Length of Last Word.
 * Memory Usage: 35.7 MB, less than 100.00% of Java online submissions for Length of Last Word.
 */

class Solution {
    public int lengthOfLastWord(String s) {
        
        if (s.length() == 0) {
			return 0;
		} else {
		    String[] ss = s.split(" ");
            if(ss.length==0){
                return 0;
            }else{
                  return ss[ss.length-1].length();
            }
		}
    }
}
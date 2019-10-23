//Runtime: 1 ms, faster than 46.74% of Java online submissions for Length of Last Word.
//Memory Usage: 36.3 MB, less than 100.00% of Java online submissions for Length of Last Word.

class Solution {
    public int lengthOfLastWord(String s) {
        String[] arr = s.split(" ");
        if (arr.length == 0){
            return 0;
        } else {
            return arr[arr.length-1].length();
        }
    }
}
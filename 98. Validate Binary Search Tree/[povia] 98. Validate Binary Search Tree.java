class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode(int x) { val = x; }
 }
 
class Solution {
	
	private boolean check(TreeNode t, int low, int high) {
		boolean checker = true;

		if(low!=-1 && t.val<=low) return false;
		if(high!=-1 && t.val>=high) return false;
		if(t.left==null && t.right==null) return true;
		else {
			if(t.left!=null) {
				if(t.val <= t.left.val) return false;
				else {
					checker = check(t.left, low, t.val);
				}
			} 
			
			if(t.right!=null && checker) {
				if(t.val>=t.right.val) checker = false;
				else checker = check(t.right, t.val, high);
			}
		}
		
		return checker;
	}
	
    public boolean isValidBST(TreeNode root) {
    	if(root==null) return true;
        return this.check(root,-1,-1);
    }
}

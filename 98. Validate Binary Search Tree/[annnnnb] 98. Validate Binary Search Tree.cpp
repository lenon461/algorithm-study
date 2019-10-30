/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
#include<algorithm>
using namespace std;
class Solution {
private:
	bool validation = 1;
	pair<int, int> dfs(TreeNode* u){
		if(u == NULL) return {-1, -1};
		pair<int, int> ret{u->val, u->val}, child;
		if(u->left != NULL) {
			child = dfs(u->left);
			validation &= child.second < u->val;
			ret.first = min(ret.first, child.first);
		}
		if(u->right != NULL) {
			child = dfs(u->right);
			validation &= u->val < child.first;
			ret.second = max(ret.second, child.second);
		}
		return ret;
	}
public:
	bool isValidBST(TreeNode* root) {
		dfs(root);
		return validation;
	}
};
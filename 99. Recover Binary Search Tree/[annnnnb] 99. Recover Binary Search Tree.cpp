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
struct _d {
	TreeNode* u, * mini, * maxi;
	_d(TreeNode* u) : u(u), mini(u), maxi(u), l(NULL), r(NULL) {}
	_d* l, * r;
};
class Solution {
public:
	_d* gv(TreeNode* u) {
		_d* node = new _d(u), * c;
		if (u->left) {
			c = node->l = gv(u->left);
			node->mini = node->mini->val < c->mini->val ? node->mini : c->mini;
			node->maxi = node->maxi->val > c->maxi->val ? node->maxi : c->maxi;
		}
		if (u->right) {
			c = node->r = gv(u->right);
			node->mini = node->mini->val < c->mini->val ? node->mini : c->mini;
			node->maxi = node->maxi->val > c->maxi->val ? node->maxi : c->maxi;
		}
		return node;
	}
	bool find(_d* node) {
		if (node == NULL || (node->l == NULL && node->r == NULL)) return 0;
		//printf("%d : %d %d\n", node->u->val, node->l != NULL ? node->l->maxi->val : -1, node->r != NULL ? node->r->mini->val : -1);
		if (node->l != NULL && node->r != NULL) {
			if(node->l->maxi->val < node->u->val&& node->u->val < node->r->mini->val) { // this node doesn't be swapped.
				if (find(node->l)) return 1;
				return find(node->r);
			}
			else if(node->l->maxi->val > node->u->val&& node->u->val > node->r->mini->val) { // swap the maximum node in left subtree and the minimum node in right subtree.
				swap(node->l->maxi->val, node->r->mini->val);
				return 1;
			}
		}

		if (node->l != NULL && node->l->maxi->val > node->u->val && (node->r == NULL || node->u->val < node->r->mini->val)) { // swap maxi node in left subtree and current node.
			swap(node->u->val, node->l->maxi->val);
			return 1;
		}
		if (node->r != NULL && (node->l == NULL || node->l->maxi->val < node->u->val) && node->u->val > node->r->mini->val) { // swap mini node in right subtree and current node.
			swap(node->u->val, node->r->mini->val);
			return 1;
		}
        
        if (find(node->l)) return 1;
		return find(node->r);
	}
	void recoverTree(TreeNode* root) {
		if (root == NULL) return;
		puts(find(gv(root)) ? "done" : "no");
	}
};
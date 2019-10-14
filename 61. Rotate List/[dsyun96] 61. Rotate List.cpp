/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == NULL || head->next == NULL) return head;
        
        int cnt = 1;
        ListNode* tail = head;
        while (tail->next != NULL) ++cnt, tail = tail->next;
        
        k %= cnt;
        if (k == 0) return head;
        
        k = cnt - k;
        while (k--) {
            tail->next = head;
            tail = head;
            head = head->next;
            tail->next = NULL;
        }
        
        return head;
    }
};
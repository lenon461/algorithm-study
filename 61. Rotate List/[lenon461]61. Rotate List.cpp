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
        if(k <= 0) return head;
        else {
            int size = 2;
            
            if(head == nullptr || head -> next == nullptr) return head;
            ListNode* prevtail = head;
            ListNode* tail = head -> next;
            
            
            while(tail -> next != nullptr){
                prevtail = prevtail -> next;
                tail = tail -> next;
                size++;
            }

            if(k > size) return rotateRight(head, k%size);

            prevtail -> next = NULL;
            tail -> next = head;
            
            
            
            return rotateRight(tail, k - 1);
        }
    }
};
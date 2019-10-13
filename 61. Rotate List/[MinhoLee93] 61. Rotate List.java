/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
/**
 * Runtime: 1 ms, faster than 24.03% of Java online submissions for Rotate List.
 * Memory Usage: 35.7 MB, less than 100.00% of Java online submissions for Rotate List.
 */

class Solution {
    public ListNode rotateRight(ListNode head, int k) {
    
        if(head==null || head.next==null){
            return head;
        }
        
        //count 
        int cnt = 1;
        ListNode check = head;
        while(check.next!=null){
            cnt++;
            check = check.next;
        }
        cnt = k%cnt;
        
        for(int i=0; i<cnt; i++){
            ListNode node = head;
            while(node.next.next!= null){
                node = node.next;
            }
            
            node.next.next = head;
            head = node.next;
            node.next = null;
        }
        
        return head;
    }
}
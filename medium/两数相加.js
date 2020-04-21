//给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。 
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。 
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。 
//
// 示例： 
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 0 -> 8
//原因：342 + 465 = 807
// 
// Related Topics 链表 数学


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let listNode = tempListNode = {},
        carry = 0;
    while(l1 || l2) {
        let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
        carry = parseInt(sum / 10);
        sum = sum % 10;
        tempListNode.val = sum;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;

        if (l1 || l2 || carry) {
            tempListNode.next = {
                val: carry
            };
        } else {
            tempListNode.next = null
        }

        tempListNode = tempListNode.next
    }

    return listNode;
};


let l1 = {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    },
    l2 = {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 4,
                next: null
            }
        }
    };

// console.log(addTwoNumbers(l1, l2))
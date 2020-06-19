/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val, children) {
    this.val = val;
    this.children = children;
};
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    return Array.prototype.concat.apply([root.val], root.children.map(child => preorder(child)));
};

// 栈 - 先进后出  reverse 先进先出
var preorder = function(root) {
    if (!root) return [];
    let res = [],
        arr = [root];
    while (arr.length) {
        let current = arr.pop();
        if (!current) continue;
        res.push(current.val);
        arr.push(...current.children.reverse());
    }
    return res;
};
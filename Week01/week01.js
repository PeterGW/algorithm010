// 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）
var plusOne = function(digits) {
    for(let i = digits.length - 1;i >= 0;i--){
        if(digits[i] == 9){
            digits[i] = 0;
        }else{
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

// 零移动
var moveZeroes = function(nums) {
    // let i = 0, j = 0;
    // for (; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         let temp = nums[j];
    //         nums[j] = nums[i];
    //         nums[i] = temp;
    //         j++;
    //     }
    // }
    // let j = nums.length;
    for (var j = nums.length; j--;) {
        if (nums[j] === 0) {
            nums.splice(j, 1);
            nums.push(0);
        }
    }
};

// 两数之和
var twoSum = function(nums, target) {
    let temArr = [];
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temArr[dif] != undefined){
            return [temArr[dif],i];
        }
        temArr[nums[i]] = i;
    }
};

// 合并两个有序数组（Facebook 在半年内面试常考）
var merge = function(nums1, m, nums2, n) {
    for (var i = 0;i<nums2.length;i++) {
        nums1[m+i] = nums2[i];
    }
    nums1.sort(function (a,b) {
        return a-b
    })
};

// 合并两个有序链表  1->2->4, 1->3->4
var mergeTwoLists = function(l1, l2) {
    let pHead = null;
    let pHead1 = l1;   // 此处l1是指1->2->4中的1  还是  1->2->4  ？？
    let pHead2 = l2;
    let p1 = l1;  
    let p2 = l2;
    let p = null;
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    if (l1.val < l2.val) {
        pHead = p1;
        p = p1;
        p1 = p1.next;
    } else {
        pHead = p2;
        p = p2;
        p2 = p2.next;
    }

    while (p1 && p2) {
        if (p1.val < p2.val) {
            p.next = p1;
            p = p.next;
            p1 = p1.next;
        } else {
            p.next = p2;
            p = p.next;
            p2 = p2.next;
        }
    }

    if (p1) {
        p.next = p1;
    } else if (p2) {
        p.next = p2;
    }

    return pHead;
};


// 旋转数组
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
};

// 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
var removeDuplicates = function(nums) {
    let index = 0;
    for(let i = 0; i< nums.length; i++) {
       if( nums[i] != nums[i+1] ) {
            nums[index] = nums[i]
            index++
        }
    }
    return index
};

//  双端循环队列   （还需继续加强）
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.arr = [];
    this.k = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isEmpty()) {
        this.arr[0] = value;
        return true;
    } else if (this.isFull()) {
        return false;
    } else {
        this.arr.unshift(value);
        return true;
    }
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isEmpty()) {
        this.arr[0] = value;
        return true;
    } else if (this.isFull()) {
        return false;
    } else {
        this.arr.push(value);
        return true;
    }
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) {
        return false;
    } else {
        this.arr.shift();
        return true;
    }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) {
        return false;
    } else {
        this.arr.pop();
        return true;
    }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) {
        return -1;
    } else {
        return this.arr[0];
    }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) {
        return -1;
    } else {
        return this.arr[this.arr.length - 1];
    }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.arr.length == 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.arr.length >= this.k;
};


 // 接雨水

 var trap = function(height) {
    let max = 0;
    let volumn = 0;
    const leftMax = [];
    const rightMax = [];

    for(let i = 0; i < height.length; i++) {
        leftMax[i] = max = Math.max(height[i], max);
    }

    max = 0;

    for(let i = height.length - 1; i >= 0; i--) {
        rightMax[i] = max = Math.max(height[i], max);
    }

    for(let i = 0; i < height.length; i++) {
        volumn = volumn +  Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return volumn;

};

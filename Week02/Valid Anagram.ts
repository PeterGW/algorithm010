// answer
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s: string, t:string): boolean {
    let tempS = s.toLowerCase().split('').sort().join('');
    let tempT = t.toLowerCase().split('').sort().join('');
    return tempS === tempT;
}

// answer2  思路 创建一个map存储一个字符串的变量 判断是否有key,有则计数+1
// 另一个字符串通过i对比 存储-1
// 最后计算 想加为0
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s: string, t:string): boolean {
    if(s.length !== t.length) {
        return false;
    }
    let map = new Map();
    s.split('').map((item, i) => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
        map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1);
    });

    return Array.from(map.values()).reduce((cur,pre) => {
        cur && pre === 0;
    }, true);
}


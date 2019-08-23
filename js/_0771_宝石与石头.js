/**
 * https://leetcode-cn.com/problems/jewels-and-stones/submissions/
 * @param {string} J
 * @param {string} S
 * @return {number}
 * 给定字符串J 代表石头中宝石的类型和字符串 S代表你拥有的石头。 
 * S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/jewels-and-stones

 */
var numJewelsInStones = function(J, S) {
    var result=0;
    for(var i=0;i<S.length;i++){
        if(J.indexOf(S[i])!=-1){   //将S中的各字母分别在J中进行顺序查找，若结果存在，则result+1
            result+=1;
        }
    }
    return result;
}


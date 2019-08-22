/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定 nums = [2, 7, 11, 15], target = 9

 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/two-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var twoSum = function(nums, target) {
    let the=[];
    for(let i=0;i<nums.length;i++){
        if(the.indexOf(nums[i])!=-1)         //判断数组nums提供的值 是否存在于数组the
            return [the.indexOf(nums[i]),i];   //如果存在则输入the所在位置下标与此时的i

        else{
            the.push(target-nums[i]);   // 将与目标值相差的值传入数组the
        }
    }




};
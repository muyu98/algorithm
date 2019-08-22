/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums，
 * @param {number} target
 * @return {number[]}
 * 给定 nums = [2, 7, 11, 15], target = 9

 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]

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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
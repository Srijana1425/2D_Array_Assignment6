let nums1 = [5,3,4,2], nums2 = [4,2,2,5]
var minProductSum = function(nums1, nums2) 
{
    nums1.sort();
    nums2.sort();
    let sum = 0;
    let length = nums1.length;
    for (let i = 0; i < length; i++)
        sum += nums1[i] * nums2[length - 1 - i];
    return sum;
}
console.log(minProductSum(nums1,nums2))
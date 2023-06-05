let nums = [0,1]
var MaxLength = function(nums) 
{
    var n = nums.length;
    if (n < 2) return 0;
    var map = new Map();
    map.set(0, -1);
    var sum = 0;
    var max = 0;
    for (var i = 0; i < n; i++) 
    {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) 
        {
            max = Math.max(max, i - map.get(sum));
        } 
        else 
        {
            map.set(sum, i);
        }
    }
    return max;
};
console.log( MaxLength(nums))
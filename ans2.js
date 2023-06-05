let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
var Matrix = function(matrix, target) 
{
    for(let ele of matrix)
    {
        if(ele[0]<=target&&ele[ele.length-1]>=target)
        {
            for(let i=0;i<ele.length;i++){
                if(ele[i]==target)
                {
                    return true
                }
            }
        }
    }
    return false
};
console.log(Matrix(matrix, target))
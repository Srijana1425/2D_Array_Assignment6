let s = "IDID"
var permutationperm = function(s)
{
    const arr = []
    let I = 0
    let D = s.length
    for (let i = 0; i <= s.length; i++) 
    {
      if (s[i] === 'I') 
      {
        arr.push(I)
        I++
      } 
      else 
      {
        arr.push(D)
        D--
      }
    }
    return arr
};
console.log(permutationperm(s))
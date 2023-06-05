let mat1 = [[1,0,0],[-1,0,3]], mat2= [[7,0,0],[0,0,0],[0,0,1]]
const multiply = function(mat1, mat2) {
     const m = mat1.length
    
    if (m === 0) return []
  
    const n =mat1[0].length
    const p = mat2[0].length
    
    const result = new Array(m).fill(0).map(_ => new Array(p).fill(0))
    
    
    const crushedA = new Array(m).fill(0).map(_ => new Map())
    const crushedB = new Array(p).fill(0).map(_ => new Map())
   
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat1[i][j] !== 0) {
          crushedA[i].set(j, mat1[i][j])
        }
      }
    }
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < p; j++) {
        if (mat2[i][j] !== 0) {
          crushedB[j].set(i, mat2[i][j])
        }
      }
    }
  
    const mapMultiply = (mapA, mapB) => {
      if (mapA.size === 0 || mapB.size === 0) return 0
      
      let sum = 0
      let first = mapA
      let second = mapB
      if (mapA.size > mapB.size) {
        first = mapB
        second = mapA
      }
      
      for (let [index, num] of first) {
        if (second.has(index)) {
          sum += num * second.get(index)
        }
      }
      return sum
    }
 
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < p; j++) {
        result[i][j] = mapMultiply(crushedA[i], crushedB[j])
      }
    }
  
    return result
};
console.log(multiply(mat1, mat2))
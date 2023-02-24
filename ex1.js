// Avem un array de numere numit nums și o variabilă target. Să se returneze indexul a două elemente consecutive care adunate dau valoarea stocată în variabila target.

// Exemplu:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function isTarget (nums, target){
    
    for ( let i = 0; i < nums.length - 1 ; i++){
           if (nums[i] + nums[i+1] == target){
           return [i, i + 1];
          
        }
    }
      return [];
    
    
}
console.log(isTarget([3, 2, 4], 6))

// Avem un array de numere numit nums și o variabilă target. Să se returneze indexul a două elemente consecutive care adunate dau valoarea stocată în variabila target.

// Exemplu:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function isTarget (nums, target){
    let arr = [];
    for ( let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++ ){
           if (nums[i] + nums[j] == target){
             arr.push(i, j);
           }
        }
    }
    return arr;
}
console.log(isTarget([3, 2, 5], 6))
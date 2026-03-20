let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }else if (direction === 'descending') {
       return  nums.sort((a, b) => b - a);
    }
}
let nums = [11,21,3]
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
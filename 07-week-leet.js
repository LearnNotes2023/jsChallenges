console.log("==========================================")

// 1665. Minimum Initial Energy to Finish Tasks
// Hard
// You are given an array tasks where tasks[i] = [actuali, minimumi]:
// actuali is the actual amount of energy you spend to finish the ith task.
// minimumi is the minimum amount of energy you require to begin the ith task.
// For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. 
// However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it.
// You can finish the tasks in any order you like.
// Return the minimum initial amount of energy you will need to finish all the tasks.

// Example 1:
// Input: tasks = [[1,2],[2,4],[4,8]]
// Output: 8
// Explanation:
// Starting with 8 energy, we finish the tasks in the following order:
//     - 3rd task. Now energy = 8 - 4 = 4.
//     - 2nd task. Now energy = 4 - 2 = 2.
//     - 1st task. Now energy = 2 - 1 = 1.
// Notice that even though we have leftover energy, starting with 7 energy does not work because we cannot do the 3rd task.

// Example 2:
// Input: tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]]
// Output: 32
// Explanation:
// Starting with 32 energy, we finish the tasks in the following order:
//     - 1st task. Now energy = 32 - 1 = 31.
//     - 2nd task. Now energy = 31 - 2 = 29.
//     - 3rd task. Now energy = 29 - 10 = 19.
//     - 4th task. Now energy = 19 - 10 = 9.
//     - 5th task. Now energy = 9 - 8 = 1.

// Example 3:
// Input: tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]
// Output: 27
// Explanation:
// Starting with 27 energy, we finish the tasks in the following order:
//     - 5th task. Now energy = 27 - 5 = 22.
//     - 2nd task. Now energy = 22 - 2 = 20.
//     - 3rd task. Now energy = 20 - 3 = 17.
//     - 1st task. Now energy = 17 - 1 = 16.
//     - 4th task. Now energy = 16 - 4 = 12.
//     - 6th task. Now energy = 12 - 6 = 6.

// @param {number[][]} tasks
// @return {number}

var minimumEffort = function(tasks) {
    // Sort by (minimum - actual) descending
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));

    let totalSpent = 0;
    let ans = 0;

    for (let [actual, minimum] of tasks) {
        ans = Math.max(ans, totalSpent + minimum);
        totalSpent += actual;
    }

    return ans;
};

console.log("==========================================")

// 1674. Minimum Moves to Make Array Complementary
// Medium
// You are given an integer array nums of even length n and an integer limit. 
// In one move, you can replace any integer from nums with another integer between 1 and limit, inclusive.
// The array nums is complementary if for all indices i (0-indexed), nums[i] + nums[n - 1 - i] equals the same number. 
// For example, the array [1,2,3,4] is complementary because for all indices i, nums[i] + nums[n - 1 - i] = 5.
// Return the minimum number of moves required to make nums complementary.

// Example 1:
// Input: nums = [1,2,4,3], limit = 4
// Output: 1
// Explanation: In 1 move, you can change nums to [1,2,2,3] (underlined elements are changed).
// nums[0] + nums[3] = 1 + 3 = 4.
// nums[1] + nums[2] = 2 + 2 = 4.
// nums[2] + nums[1] = 2 + 2 = 4.
// nums[3] + nums[0] = 3 + 1 = 4.
// Therefore, nums[i] + nums[n-1-i] = 4 for every i, so nums is complementary.

// Example 2:
// Input: nums = [1,2,2,1], limit = 2
// Output: 2
// Explanation: In 2 moves, you can change nums to [2,2,2,2]. You cannot change any number to 3 since 3 > limit.

// Example 3:
// Input: nums = [1,2,1,2], limit = 2
// Output: 0
// Explanation: nums is already complementary.

// @param {number[]} nums
// @param {number} limit
// @return {number}

var minMoves = function(nums, limit) {
    const n = nums.length;
    const diff = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        let a = nums[i];
        let b = nums[n - 1 - i];

        let low = Math.min(a, b) + 1;
        let high = Math.max(a, b) + limit;
        let sum = a + b;

        // Default: +2 moves everywhere
        diff[2] += 2;

        // Reduce to 1 move in [low, high]
        diff[low] -= 1;
        diff[high + 1] += 1;

        // Reduce to 0 moves at exact sum
        diff[sum] -= 1;
        diff[sum + 1] += 1;
    }

    let ans = Infinity;
    let current = 0;

    for (let s = 2; s <= 2 * limit; s++) {
        current += diff[s];
        ans = Math.min(ans, current);
    }

    return ans;
};



console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")



// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"


// document.querySelector('textarea').value = 'your code here';


// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"
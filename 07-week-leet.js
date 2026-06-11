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

// 2784. Check if Array is Good
// Easy
// You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].
// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, 
// plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].
// Return true if the given array is good, otherwise return false.
// Note: A permutation of integers represents an arrangement of these numbers.

// Example 1:
// Input: nums = [2, 1, 3]
// Output: false
// Explanation: Since the maximum element of the array is 3, 
// the only candidate n for which this array could be a permutation of base[n], 
// is n = 3. However, base[3] has four elements but array nums has three. 
// Therefore, it can not be a permutation of base[3] = [1, 2, 3, 3]. So the answer is false.

// Example 2:
// Input: nums = [1, 3, 3, 2]
// Output: true
// Explanation: Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. It can be seen that nums is a permutation of base[3] = [1, 2, 3, 3] (by swapping the second and fourth elements in nums, we reach base[3]). Therefore, the answer is true.

// Example 3:
// Input: nums = [1, 1]
// Output: true
// Explanation: Since the maximum element of the array is 1, the only candidate n for which this array could be a permutation of base[n], is n = 1. It can be seen that nums is a permutation of base[1] = [1, 1]. Therefore, the answer is true.

// Example 4:
// Input: nums = [3, 4, 4, 1, 2, 1]
// Output: false
// Explanation: Since the maximum element of the array is 4, the only candidate n for which this array could be a permutation of base[n], is n = 4. However, base[4] has five elements but array nums has six. Therefore, it can not be a permutation of base[4] = [1, 2, 3, 4, 4]. So the answer is false.

// @param {number[]} nums
// @return {boolean}

var isGood = function(nums) {
    nums.sort((a, b) => a - b);

    let n = nums[nums.length - 1];

    // Length must be n + 1
    if (nums.length !== n + 1) return false;

    // Check 1 to n-1
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== i + 1) return false;
    }

    // Last two must both be n
    return nums[n - 1] === n && nums[n] === n;
};

console.log("==========================================")

// 153. Find Minimum in Rotated Sorted Array
// Medium
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
// For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

// @param {number[]} nums
// @return {number}

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // minimum is on right side
            left = mid + 1;
        } else {
            // minimum is at mid or left side
            right = mid;
        }
    }

    return nums[left];
};

console.log("==========================================")

// 154. Find Minimum in Rotated Sorted Array II
// Hard
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
// For example, the array nums = [0,1,4,4,5,6,7] might become:
// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
// You must decrease the overall operation steps as much as possible.

// Example 1:
// Input: nums = [1,3,5]
// Output: 1

// Example 2:
// Input: nums = [2,2,2,0,1]
// Output: 0

// @param {number[]} nums
// @return {number}

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[right]) {
            // minimum is at mid or to the left
            right = mid;
        } 
        else if (nums[mid] > nums[right]) {
            // minimum is to the right
            left = mid + 1;
        } 
        else {
            // duplicates, can't tell
            right--;
        }
    }

    return nums[left];
};

console.log("==========================================")

// 1306. Jump Game III
// Medium
// Given an array of non-negative integers arr, you are initially positioned at start index of the array. 
// When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.
// Notice that you can not jump outside of the array at any time.

// Example 1:
// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation: 
// All possible ways to reach at index 3 with value 0 are: 
// index 5 -> index 4 -> index 1 -> index 3 
// index 5 -> index 6 -> index 4 -> index 1 -> index 3 

// Example 2:
// Input: arr = [4,2,3,0,3,1,2], start = 0
// Output: true 
// Explanation: 
// One possible way to reach at index 3 with value 0 is: 
// index 0 -> index 4 -> index 1 -> index 3

// Example 3:
// Input: arr = [3,0,2,1,2], start = 2
// Output: false
// Explanation: There is no way to reach at index 1 with value 0.
 
// @param {number[]} arr
// @param {number} start
// @return {boolean}

var canReach = function(arr, start) {
    const visited = new Set();

    function dfs(i) {
        // Out of bounds
        if (i < 0 || i >= arr.length) return false;

        // Already visited
        if (visited.has(i)) return false;

        // Found zero
        if (arr[i] === 0) return true;

        visited.add(i);

        // Try both directions
        return dfs(i + arr[i]) || dfs(i - arr[i]);
    }

    return dfs(start);
};

console.log("==========================================")

// 1345. Jump Game IV
// Hard
// Given an array of integers arr, you are initially positioned at the first index of the array.
// In one step you can jump from index i to index:
// i + 1 where: i + 1 < arr.length.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.
// Return the minimum number of steps to reach the last index of the array.
// Notice that you can not jump outside of the array at any time.

// Example 1:
// Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
// Output: 3
// Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

// Example 2:
// Input: arr = [7]
// Output: 0
// Explanation: Start index is the last index. You do not need to jump.

// Example 3:
// Input: arr = [7,6,9,6,9,6,9,7]
// Output: 1
// Explanation: You can jump directly from index 0 to index 7 which is last index of the array.

// @param {number[]} arr
// @return {number}

var minJumps = function(arr) {
    const n = arr.length;
    if (n === 1) return 0;

    // value -> indices
    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }
        map.get(arr[i]).push(i);
    }

    const visited = new Set([0]);
    const queue = [[0, 0]];
    let head = 0;   // queue pointer

    while (head < queue.length) {
        const [i, steps] = queue[head++];

        if (i === n - 1) return steps;

        // same-value jumps
        if (map.has(arr[i])) {
            for (const next of map.get(arr[i])) {
                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push([next, steps + 1]);
                }
            }

            // critical: remove so we don't process again
            map.delete(arr[i]);
        }

        // i - 1
        if (i - 1 >= 0 && !visited.has(i - 1)) {
            visited.add(i - 1);
            queue.push([i - 1, steps + 1]);
        }

        // i + 1
        if (i + 1 < n && !visited.has(i + 1)) {
            visited.add(i + 1);
            queue.push([i + 1, steps + 1]);
        }
    }

    return -1;
};

console.log("==========================================")

// 29. Divide Two Integers
// Medium
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. 
// For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: 
// [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, 
// and if the quotient is strictly less than -231, then return -231.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

// @param {number} dividend
// @param {number} divisor
// @return {number}

var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine sign
    const negative = (dividend < 0) !== (divisor < 0);

    // Convert to positive
    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let result = 0;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;

        // Double using addition instead of <<
        while (dvd >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }

        dvd -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};

console.log("==========================================")

// 30. Substring with Concatenation of All Words
// Hard
// You are given a string s and an array of strings words. All the strings of words are of the same length.
// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.
// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" 
// are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation:
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Explanation:
// There is no concatenated substring.

// Example 3:
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]

// @param {string} s
// @param {string[]} words
// @return {number[]}

var findSubstring = function(s, words) {
    if (!s || !words.length) return [];

    const wordLen = words[0].length;
    const totalWords = words.length;
    const totalLen = wordLen * totalWords;
    const result = [];

    // Count target words
    const target = new Map();
    for (let word of words) {
        target.set(word, (target.get(word) || 0) + 1);
    }

    // Try each possible offset
    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let count = 0;
        let window = new Map();

        for (let right = offset; right + wordLen <= s.length; right += wordLen) {
            const word = s.slice(right, right + wordLen);

            // Valid word
            if (target.has(word)) {
                window.set(word, (window.get(word) || 0) + 1);
                count++;

                // Too many occurrences → shrink window
                while (window.get(word) > target.get(word)) {
                    const leftWord = s.slice(left, left + wordLen);
                    window.set(leftWord, window.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // Found valid concatenation
                if (count === totalWords) {
                    result.push(left);

                    // Move left to continue searching
                    const leftWord = s.slice(left, left + wordLen);
                    window.set(leftWord, window.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

            } else {
                // Reset if invalid word
                window.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
};


console.log("==========================================")

// 3043. Find the Length of the Longest Common Prefix
// Attempted
// Medium
// You are given two arrays with positive integers arr1 and arr2.
// A prefix of a positive integer is an integer formed by one or more of its digits, starting from its leftmost digit. 
// For example, 123 is a prefix of the integer 12345, while 234 is not.
// A common prefix of two integers a and b is an integer c, such that c is a prefix of both a and b.
// For example, 5655359 and 56554 have common prefixes 565 and 5655 while 1223 and 43456 do not have a common prefix.
// You need to find the length of the longest common prefix between all pairs of integers (x, y)
// such that x belongs to arr1 and y belongs to arr2.
// Return the length of the longest common prefix among all pairs. If no common prefix exists among them, return 0.

// Example 1:
// Input: arr1 = [1,10,100], arr2 = [1000]
// Output: 3
// Explanation: There are 3 pairs (arr1[i], arr2[j]):
// - The longest common prefix of (1, 1000) is 1.
// - The longest common prefix of (10, 1000) is 10.
// - The longest common prefix of (100, 1000) is 100.
// The longest common prefix is 100 with a length of 3.

// Example 2:
// Input: arr1 = [1,2,3], arr2 = [4,4,4]
// Output: 0
// Explanation: There exists no common prefix for any pair (arr1[i], arr2[j]), hence we return 0.
// Note that common prefixes between elements of the same array do not count.

// @param {number[]} arr1
// @param {number[]} arr2
// @return {number}

var longestCommonPrefix = function(arr1, arr2) {
    const prefixes = new Set();

    // Store all prefixes from arr1
    for (let num of arr1) {
        const str = num.toString();

        for (let i = 1; i <= str.length; i++) {
            prefixes.add(str.slice(0, i));
        }
    }

    let maxLen = 0;

    // Check prefixes from arr2
    for (let num of arr2) {
        const str = num.toString();

        for (let i = 1; i <= str.length; i++) {
            const prefix = str.slice(0, i);

            if (prefixes.has(prefix)) {
                maxLen = Math.max(maxLen, i);
            }
        }
    }

    return maxLen;
};

console.log("==========================================")

// 33. Search in Rotated Sorted Array
// Medium
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) 
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., 
// nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// @param {number[]} nums
// @param {number} target
// @return {number}

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Found target
        if (nums[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            // Target is inside left half
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            // Target is inside right half
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

console.log("==========================================")

// 31. Next Permutation
// Medium
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. 
// More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, 
// then the next permutation of that array is the permutation that follows it in the sorted container. 
// If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]


// @param {number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.

var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Step 1: find first decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: if found, swap with next bigger element
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: reverse suffix
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};

console.log("==========================================")

// 1340. Jump Game V
// Hard
// Given an array of integers arr and an integer d. In one step you can jump from index i to index:
// i + x where: i + x < arr.length and  0 < x <= d.
// i - x where: i - x >= 0 and  0 < x <= d.
// In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] 
// for all indices k between i and j 
// (More formally min(i, j) < k < max(i, j)).
// You can choose any index of the array and start jumping. Return the maximum number of indices you can visit.
// Notice that you can not jump outside of the array at any time.

// Example 1:
// Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
// Output: 4
// Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
// Note that if you start at index 6 you can only jump to index 7. 
// You cannot jump to index 5 because 13 > 9. 
// You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
// Similarly You cannot jump from index 3 to index 2 or index 1.

// Example 2:
// Input: arr = [3,3,3,3,3], d = 3
// Output: 1
// Explanation: You can start at any index. You always cannot jump to any index.

// Example 3:
// Input: arr = [7,6,5,4,3,2,1], d = 1
// Output: 7
// Explanation: Start at index 0. You can visit all the indicies. 

// @param {number[]} arr
// @param {number} d
// @return {number}

var maxJumps = function(arr, d) {
    const n = arr.length;
    const memo = new Array(n).fill(0);

    function dfs(i) {
        if (memo[i] !== 0) return memo[i];

        let best = 1; // count current index

        // check right
        for (let j = i + 1; j <= Math.min(i + d, n - 1); j++) {
            if (arr[j] >= arr[i]) break;
            best = Math.max(best, 1 + dfs(j));
        }

        // check left
        for (let j = i - 1; j >= Math.max(i - d, 0); j--) {
            if (arr[j] >= arr[i]) break;
            best = Math.max(best, 1 + dfs(j));
        }

        memo[i] = best;
        return best;
    }

    let ans = 1;

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, dfs(i));
    }

    return ans;
};

console.log("==========================================")

// 1871. Jump Game VII
// Medium
// You are given a 0-indexed binary string s and two integers minJump and maxJump. 
// In the beginning, you are standing at index 0, which is equal to '0'. 
// You can move from index i to index j if the following conditions are fulfilled:
// i + minJump <= j <= min(i + maxJump, s.length - 1), and
// s[j] == '0'.
// Return true if you can reach index s.length - 1 in s, or false otherwise.

// Example 1:
// Input: s = "011010", minJump = 2, maxJump = 3
// Output: true
// Explanation:
// In the first step, move from index 0 to index 3. 
// In the second step, move from index 3 to index 5.

// Example 2:
// Input: s = "01101110", minJump = 2, maxJump = 3
// Output: false

// @param {string} s
// @param {number} minJump
// @param {number} maxJump
// @return {boolean}

var canReach = function(s, minJump, maxJump) {
    const n = s.length;
    const dp = new Array(n).fill(false);
    
    dp[0] = true;
    let reachable = 0; // how many reachable positions in current window
    
    for (let i = 1; i < n; i++) {
        // add left side of window
        if (i - minJump >= 0 && dp[i - minJump]) {
            reachable++;
        }
        
        // remove right side of window
        if (i - maxJump - 1 >= 0 && dp[i - maxJump - 1]) {
            reachable--;
        }
        
        // can land here if:
        // 1. current char is '0'
        // 2. at least one reachable index in window
        if (s[i] === '0' && reachable > 0) {
            dp[i] = true;
        }
    }
    
    return dp[n - 1];
};

console.log("==========================================")

// 3120. Count the Number of Special Characters I
// Easy
// You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.
// Return the number of special letters in word.

// Example 1:
// Input: word = "aaAbcBC"
// Output: 3
// Explanation:
// The special characters in word are 'a', 'b', and 'c'.

// Example 2:
// Input: word = "abc"
// Output: 0
// Explanation:
// No character in word appears in uppercase.

// Example 3:
// Input: word = "abBCab"
// Output: 1
// Explanation:
// The only special character in word is 'b'.

// @param {string} word
// @return {number}

var numberOfSpecialChars = function(word) {
    let lower = new Set();
    let upper = new Set();

    for (let char of word) {
        if (char >= 'a' && char <= 'z') {
            lower.add(char);
        } else {
            upper.add(char.toLowerCase());
        }
    }

    let count = 0;

    for (let char of lower) {
        if (upper.has(char)) {
            count++;
        }
    }

    return count;
};

console.log("==========================================")

// 3121. Count the Number of Special Characters II
// Medium
// You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, 
// and every lowercase occurrence of c appears before the first uppercase occurrence of c.
// Return the number of special letters in word.

// Example 1:
// Input: word = "aaAbcBC"
// Output: 3
// Explanation:
// The special characters are 'a', 'b', and 'c'.

// Example 2:
// Input: word = "abc"
// Output: 0
// Explanation:
// There are no special characters in word.

// Example 3:
// Input: word = "AbBCab"
// Output: 0
// Explanation:
// There are no special characters in word.
 
// @param {string} word
// @return {number}

var numberOfSpecialChars = function(word) {
    let lastLower = new Array(26).fill(-1);
    let firstUpper = new Array(26).fill(Infinity);

    for (let i = 0; i < word.length; i++) {
        let ch = word[i];

        if (ch >= 'a' && ch <= 'z') {
            lastLower[ch.charCodeAt(0) - 97] = i;
        } else {
            firstUpper[ch.charCodeAt(0) - 65] = Math.min(
                firstUpper[ch.charCodeAt(0) - 65],
                i
            );
        }
    }

    let count = 0;

    for (let i = 0; i < 26; i++) {
        if (
            lastLower[i] !== -1 &&
            firstUpper[i] !== Infinity &&
            lastLower[i] < firstUpper[i]
        ) {
            count++;
        }
    }

    return count;
};

console.log("==========================================")

// 3093. Longest Common Suffix Queries
// Hard
// You are given two arrays of strings wordsContainer and wordsQuery.
// For each wordsQuery[i], you need to find a string from wordsContainer that has the longest common suffix with wordsQuery[i]. 
// If there are two or more strings in wordsContainer that share the longest common suffix, find the string that is the smallest in length. 
// If there are two or more such strings that have the same smallest length, find the one that occurred earlier in wordsContainer.
// Return an array of integers ans, 
// where ans[i] is the index of the string in wordsContainer that has the longest common suffix with wordsQuery[i].

// Example 1:
// Input: wordsContainer = ["abcd","bcd","xbcd"], wordsQuery = ["cd","bcd","xyz"]
// Output: [1,1,1]
// Explanation:
// Let's look at each wordsQuery[i] separately:
// For wordsQuery[0] = "cd", strings from wordsContainer that share the longest common suffix "cd" are at indices 0, 1, and 2. 
// Among these, the answer is the string at index 1 because it has the shortest length of 3.
// For wordsQuery[1] = "bcd", strings from wordsContainer that share the longest common suffix "bcd" are at indices 0, 1, and 2. 
// Among these, the answer is the string at index 1 because it has the shortest length of 3.
// For wordsQuery[2] = "xyz", there is no string from wordsContainer that shares a common suffix. 
// Hence the longest common suffix is "", that is shared with strings at index 0, 1, and 2. 
// Among these, the answer is the string at index 1 because it has the shortest length of 3.

// Example 2:
// Input: wordsContainer = ["abcdefgh","poiuygh","ghghgh"], wordsQuery = ["gh","acbfgh","acbfegh"]
// Output: [2,0,2]
// Explanation:
// Let's look at each wordsQuery[i] separately:
// For wordsQuery[0] = "gh", strings from wordsContainer that share the longest common suffix "gh" are at indices 0, 1, and 2. 
// Among these, the answer is the string at index 2 because it has the shortest length of 6.
// For wordsQuery[1] = "acbfgh", only the string at index 0 shares the longest common suffix "fgh". 
// Hence it is the answer, even though the string at index 2 is shorter.
// For wordsQuery[2] = "acbfegh", strings from wordsContainer that share the longest common suffix "gh" are at indices 0, 1, and 2. 
// Among these, the answer is the string at index 2 because it has the shortest length of 6.

// @param {string[]} wordsContainer
// @param {string[]} wordsQuery
// @return {number[]}

var stringIndices = function(wordsContainer, wordsQuery) {
    class TrieNode {
        constructor() {
            this.children = {};
            this.bestIndex = -1;
            this.bestLength = Infinity;
        }

        update(index, length) {
            if (
                length < this.bestLength ||
                (length === this.bestLength && index < this.bestIndex)
            ) {
                this.bestLength = length;
                this.bestIndex = index;
            }
        }
    }

    const root = new TrieNode();

    // Build reversed trie
    for (let i = 0; i < wordsContainer.length; i++) {
        const word = wordsContainer[i];
        const len = word.length;

        let node = root;
        node.update(i, len);

        for (let j = len - 1; j >= 0; j--) {
            const ch = word[j];

            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }

            node = node.children[ch];
            node.update(i, len);
        }
    }

    const ans = [];

    // Query
    for (const query of wordsQuery) {
        let node = root;

        for (let j = query.length - 1; j >= 0; j--) {
            const ch = query[j];

            if (!node.children[ch]) break;

            node = node.children[ch];
        }

        ans.push(node.bestIndex);
    }

    return ans;
};

console.log("==========================================")

// 3300. Minimum Element After Replacement With Digit Sum
// Easy
// You are given an integer array nums.
// You replace each element in nums with the sum of its digits.
// Return the minimum element in nums after all replacements.

// Example 1:
// Input: nums = [10,12,13,14]
// Output: 1
// Explanation:
// nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 1
// Explanation:
// nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.

// Example 3:
// Input: nums = [999,19,199]
// Output: 10
// Explanation:
// nums becomes [27, 10, 19] after all replacements, with minimum element 10.

// @param {number[]} nums
// @return {number}

var minElement = function(nums) {
    let min = Infinity;

    for (let num of nums) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        min = Math.min(min, sum);
    }

    return min;
};

console.log("==========================================")

// 3161. Block Placement Queries
// Hard
// There exists an infinite number line, with its origin at 0 and extending towards the positive x-axis.
// You are given a 2D array queries, which contains two types of queries:
// For a query of type 1, queries[i] = [1, x]. Build an obstacle at distance x from the origin. 
// It is guaranteed that there is no obstacle at distance x when the query is asked.
// For a query of type 2, queries[i] = [2, x, sz]. 
// Check if it is possible to place a block of size sz anywhere in the range [0, x] on the line, such that the block entirely lies in the range [0, x]. 
// A block cannot be placed if it intersects with any obstacle, but it may touch it. 
// Note that you do not actually place the block. Queries are separate.
// Return a boolean array results, where results[i] is true if you can place the block specified in the ith query of type 2, 
// and false otherwise.

// Example 1:
// Input: queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]
// Output: [false,true,true]
// Explanation:
// For query 0, place an obstacle at x = 2. A block of size at most 2 can be placed before x = 3.

// Example 2:
// Input: queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]
// Output: [true,true,false]
// Explanation:
// Place an obstacle at x = 7 for query 0. A block of size at most 7 can be placed before x = 7.
// Place an obstacle at x = 2 for query 2. Now, a block of size at most 5 can be placed before x = 7, 
// and a block of size at most 2 before x = 2.
 
// @param {number[][]} queries
// @return {boolean[]}

var getResults = function(queries) {
    // Collect all coordinates
    const coords = new Set([0]);
    for (const q of queries) {
        coords.add(q[1]);
    }
    const sorted = [...coords].sort((a, b) => a - b);
    const index = new Map();
    for (let i = 0; i < sorted.length; i++) {
        index.set(sorted[i], i);
    }
    const n = sorted.length;
    // segment tree for maximum free gap
    const seg = new Array(4 * n).fill(0);
    function update(node, l, r, idx, val) {
        if (l === r) {
            seg[node] = val;
            return;
        }
        const mid = (l + r) >> 1;
        if (idx <= mid) {
            update(node * 2, l, mid, idx, val);
        } else {
            update(node * 2 + 1, mid + 1, r, idx, val);
        }
        seg[node] = Math.max(seg[node * 2], seg[node * 2 + 1]);
    }
    function query(node, l, r, ql, qr) {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return seg[node];
        const mid = (l + r) >> 1;
        return Math.max(
            query(node * 2, l, mid, ql, qr),
            query(node * 2 + 1, mid + 1, r, ql, qr)
        );
    }
    // ordered obstacle
    const obstacles = [0];
    function lowerBound(arr, target) {
        let l = 0, r = arr.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (arr[m] < target) l = m + 1;
            else r = m;
        }
        return l;
    }
    const ans = [];
    for (const q of queries) {
        // add obstacle
        if (q[0] === 1) {
            const x = q[1];
            const pos = lowerBound(obstacles, x);
            const left = obstacles[pos - 1];
            const right = pos < obstacles.length ? obstacles[pos] : null;
            obstacles.splice(pos, 0, x);
            // gap left -> x
            update(1, 0, n - 1, index.get(x), x - left);
            // gap x -> right
            if (right !== null) {
                update(1, 0, n - 1, index.get(right), right - x);
            }
        } else {
            const [, x, sz] = q;
            const pos = lowerBound(obstacles, x + 1);
            let best = x;
            if (pos > 0) {
                const lastObstacle = obstacles[pos - 1];
                best = x - lastObstacle;
                const idx = index.get(lastObstacle);
                best = Math.max(
                    best,
                    query(1, 0, n - 1, 0, idx)
                );
            }

            ans.push(best >= sz);
        }
    }

    return ans;
};

console.log("==========================================")

// 2126. Destroying Asteroids
// Medium
// You are given an integer mass, which represents the original mass of a planet. 
// You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.
// You can arrange for the planet to collide with the asteroids in any arbitrary order. 
// If the mass of the planet is greater than or equal to the mass of the asteroid, 
// the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.
// Return true if all asteroids can be destroyed. Otherwise, return false.

// Example 1:
// Input: mass = 10, asteroids = [3,9,19,5,21]
// Output: true
// Explanation: One way to order the asteroids is [9,19,5,3,21]:
// - The planet collides with the asteroid with a mass of 9. New planet mass: 10 + 9 = 19
// - The planet collides with the asteroid with a mass of 19. New planet mass: 19 + 19 = 38
// - The planet collides with the asteroid with a mass of 5. New planet mass: 38 + 5 = 43
// - The planet collides with the asteroid with a mass of 3. New planet mass: 43 + 3 = 46
// - The planet collides with the asteroid with a mass of 21. New planet mass: 46 + 21 = 67
// All asteroids are destroyed.

// Example 2:
// Input: mass = 5, asteroids = [4,9,23,4]
// Output: false
// Explanation: 
// The planet cannot ever gain enough mass to destroy the asteroid with a mass of 23.
// After the planet destroys the other asteroids, it will have a mass of 5 + 4 + 9 + 4 = 22.
// This is less than 23, so a collision would not destroy the last asteroid.

// @param {number} mass
// @param {number[]} asteroids
// @return {boolean}

var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);

    let currentMass = BigInt(mass);

    for (let asteroid of asteroids) {
        if (currentMass < BigInt(asteroid)) {
            return false;
        }

        currentMass += BigInt(asteroid);
    }

    return true;
};


console.log("==========================================")

// 2144. Minimum Cost of Buying Candies With Discount
// Easy
// A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free.
// The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than 
// or equal to the minimum cost of the two candies bought.
// For example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3, 
// they can take the candy with cost 1 for free, but not the candy with cost 4.
// Given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy, 
// return the minimum cost of buying all the candies.

// Example 1:
// Input: cost = [1,2,3]
// Output: 5
// Explanation: We buy the candies with costs 2 and 3, and take the candy with cost 1 for free.
// The total cost of buying all candies is 2 + 3 = 5. This is the only way we can buy the candies.
// Note that we cannot buy candies with costs 1 and 3, and then take the candy with cost 2 for free.
// The cost of the free candy has to be less than or equal to the minimum cost of the purchased candies.

// Example 2:
// Input: cost = [6,5,7,9,2,2]
// Output: 23
// Explanation: The way in which we can get the minimum cost is described below:
// - Buy candies with costs 9 and 7
// - Take the candy with cost 6 for free
// - We buy candies with costs 5 and 2
// - Take the last remaining candy with cost 2 for free
// Hence, the minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.

// Example 3:
// Input: cost = [5,5]
// Output: 10
// Explanation: Since there are only 2 candies, we buy both of them. There is not a third candy we can take for free.
// Hence, the minimum cost to buy all candies is 5 + 5 = 10.
 
// @param {number[]} cost
// @return {number}

var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);

    let total = 0;

    for (let i = 0; i < cost.length; i++) {
        // every 3rd candy is free
        if ((i + 1) % 3 !== 0) {
            total += cost[i];
        }
    }

    return total;
};

console.log("==========================================")

// 3633. Earliest Finish Time for Land and Water Rides I
// Easy
// You are given two categories of theme park attractions: land rides and water rides.
// Land rides
// landStartTime[i] – the earliest time the ith land ride can be boarded.
// landDuration[i] – how long the ith land ride lasts.
// Water rides
// waterStartTime[j] – the earliest time the jth water ride can be boarded.
// waterDuration[j] – how long the jth water ride lasts.
// A tourist must experience exactly one ride from each category, in either order.
// A ride may be started at its opening time or any later moment.
// If a ride is started at time t, it finishes at time t + duration.
// Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.
// Return the earliest possible time at which the tourist can finish both rides.

// Example 1:
// Input: landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]
// Output: 9
// Explanation:​​​​​​​
// Plan A (land ride 0 → water ride 0):
// Start land ride 0 at time landStartTime[0] = 2. Finish at 2 + landDuration[0] = 6.
// Water ride 0 opens at time waterStartTime[0] = 6. Start immediately at 6, finish at 6 + waterDuration[0] = 9.
// Plan B (water ride 0 → land ride 1):
// Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
// Land ride 1 opens at landStartTime[1] = 8. Start at time 9, finish at 9 + landDuration[1] = 10.
// Plan C (land ride 1 → water ride 0):
// Start land ride 1 at time landStartTime[1] = 8. Finish at 8 + landDuration[1] = 9.
// Water ride 0 opened at waterStartTime[0] = 6. Start at time 9, finish at 9 + waterDuration[0] = 12.
// Plan D (water ride 0 → land ride 0):
// Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
// Land ride 0 opened at landStartTime[0] = 2. Start at time 9, finish at 9 + landDuration[0] = 13.
// Plan A gives the earliest finish time of 9.

// Example 2:
// Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]
// Output: 14
// Explanation:​​​​​​​
// Plan A (water ride 0 → land ride 0):
// Start water ride 0 at time waterStartTime[0] = 1. Finish at 1 + waterDuration[0] = 11.
// Land ride 0 opened at landStartTime[0] = 5. Start immediately at 11 and finish at 11 + landDuration[0] = 14.
// Plan B (land ride 0 → water ride 0):
// Start land ride 0 at time landStartTime[0] = 5. Finish at 5 + landDuration[0] = 8.
// Water ride 0 opened at waterStartTime[0] = 1. Start immediately at 8 and finish at 8 + waterDuration[0] = 18.
// Plan A provides the earliest finish time of 14.

// @param {number[]} landStartTime
// @param {number[]} landDuration
// @param {number[]} waterStartTime
// @param {number[]} waterDuration
// @return {number}

var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {

            // Land -> Water
            let landFinish = landStartTime[i] + landDuration[i];
            let waterStart = Math.max(landFinish, waterStartTime[j]);
            ans = Math.min(ans, waterStart + waterDuration[j]);

            // Water -> Land
            let waterFinish = waterStartTime[j] + waterDuration[j];
            let landStart = Math.max(waterFinish, landStartTime[i]);
            ans = Math.min(ans, landStart + landDuration[i]);
        }
    }

    return ans;
};

console.log("==========================================")

// 3635. Earliest Finish Time for Land and Water Rides II
// Medium
// You are given two categories of theme park attractions: land rides and water rides.
// Land rides
// landStartTime[i] – the earliest time the ith land ride can be boarded.
// landDuration[i] – how long the ith land ride lasts.
// Water rides
// waterStartTime[j] – the earliest time the jth water ride can be boarded.
// waterDuration[j] – how long the jth water ride lasts.
// A tourist must experience exactly one ride from each category, in either order.
// A ride may be started at its opening time or any later moment.
// If a ride is started at time t, it finishes at time t + duration.
// Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.
// Return the earliest possible time at which the tourist can finish both rides.

// Example 1:
// Input: landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]
// Output: 9
// Explanation:​​​​​​​
// Plan A (land ride 0 → water ride 0):
// Start land ride 0 at time landStartTime[0] = 2. Finish at 2 + landDuration[0] = 6.
// Water ride 0 opens at time waterStartTime[0] = 6. Start immediately at 6, finish at 6 + waterDuration[0] = 9.
// Plan B (water ride 0 → land ride 1):
// Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
// Land ride 1 opens at landStartTime[1] = 8. Start at time 9, finish at 9 + landDuration[1] = 10.
// Plan C (land ride 1 → water ride 0):
// Start land ride 1 at time landStartTime[1] = 8. Finish at 8 + landDuration[1] = 9.
// Water ride 0 opened at waterStartTime[0] = 6. Start at time 9, finish at 9 + waterDuration[0] = 12.
// Plan D (water ride 0 → land ride 0):
// Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
// Land ride 0 opened at landStartTime[0] = 2. Start at time 9, finish at 9 + landDuration[0] = 13.
// Plan A gives the earliest finish time of 9.

// Example 2:
// Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]
// Output: 14
// Explanation:​​​​​​​
// Plan A (water ride 0 → land ride 0):
// Start water ride 0 at time waterStartTime[0] = 1. Finish at 1 + waterDuration[0] = 11.
// Land ride 0 opened at landStartTime[0] = 5. Start immediately at 11 and finish at 11 + landDuration[0] = 14.
// Plan B (land ride 0 → water ride 0):
// Start land ride 0 at time landStartTime[0] = 5. Finish at 5 + landDuration[0] = 8.
// Water ride 0 opened at waterStartTime[0] = 1. Start immediately at 8 and finish at 8 + waterDuration[0] = 18.
// Plan A provides the earliest finish time of 14.

// @param {number[]} landStartTime
// @param {number[]} landDuration
// @param {number[]} waterStartTime
// @param {number[]} waterDuration
// @return {number}

var earliestFinishTime = function (
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
) {

    function solve(firstStart, firstDur, secondStart, secondDur) {

        const second = [];

        for (let i = 0; i < secondStart.length; i++) {
            second.push([secondStart[i], secondDur[i]]);
        }

        second.sort((a, b) => a[0] - b[0]);

        const m = second.length;

        // suffix minimum of (start + duration)
        const suffix = Array(m);

        suffix[m - 1] = second[m - 1][0] + second[m - 1][1];

        for (let i = m - 2; i >= 0; i--) {
            suffix[i] = Math.min(
                suffix[i + 1],
                second[i][0] + second[i][1]
            );
        }

        // sort first rides by finish time
        const first = [];

        for (let i = 0; i < firstStart.length; i++) {
            first.push(firstStart[i] + firstDur[i]);
        }

        first.sort((a, b) => a - b);

        let ans = Infinity;

        let ptr = 0;
        let bestDur = Infinity;

        for (const finish of first) {

            while (ptr < m && second[ptr][0] <= finish) {
                bestDur = Math.min(bestDur, second[ptr][1]);
                ptr++;
            }

            // already opened rides
            if (bestDur !== Infinity) {
                ans = Math.min(ans, finish + bestDur);
            }

            // future rides
            if (ptr < m) {
                ans = Math.min(ans, suffix[ptr]);
            }
        }

        return ans;
    }

    return Math.min(
        solve(
            landStartTime,
            landDuration,
            waterStartTime,
            waterDuration
        ),
        solve(
            waterStartTime,
            waterDuration,
            landStartTime,
            landDuration
        )
    );
};

console.log("==========================================")

// 3751. Total Waviness of Numbers in Range I
// Medium
// You are given two integers num1 and num2 representing an inclusive range [num1, num2].
// The waviness of a number is defined as the total count of its peaks and valleys:
// A digit is a peak if it is strictly greater than both of its immediate neighbors.
// A digit is a valley if it is strictly less than both of its immediate neighbors.
// The first and last digits of a number cannot be peaks or valleys.
// Any number with fewer than 3 digits has a waviness of 0.
// Return the total sum of waviness for all numbers in the range [num1, num2].

// Example 1:
// Input: num1 = 120, num2 = 130
// Output: 3
// Explanation:
// In the range [120, 130]:
// 120: middle digit 2 is a peak, waviness = 1.
// 121: middle digit 2 is a peak, waviness = 1.
// 130: middle digit 3 is a peak, waviness = 1.
// All other numbers in the range have a waviness of 0.
// Thus, total waviness is 1 + 1 + 1 = 3.

// Example 2:
// Input: num1 = 198, num2 = 202
// Output: 3
// Explanation:
// In the range [198, 202]:
// 198: middle digit 9 is a peak, waviness = 1.
// 201: middle digit 0 is a valley, waviness = 1.
// 202: middle digit 0 is a valley, waviness = 1.
// All other numbers in the range have a waviness of 0.
// Thus, total waviness is 1 + 1 + 1 = 3.

// Example 3:
// Input: num1 = 4848, num2 = 4848
// Output: 2
// Explanation:
// Number 4848: the second digit 8 is a peak, and the third digit 4 is a valley, giving a waviness of 2.

// @param {number} num1
// @param {number} num2
// @return {number}

var totalWaviness = function(num1, num2) {

    function solve(n) {
        if (n < 0) return 0;

        const s = String(n);
        const memo = new Map();

        function dfs(pos, prev2, prev1, len, tight, started) {
            if (pos === s.length) {
                return [1, 0]; // one valid number, waviness sum = 0
            }

            const key = `${pos},${prev2},${prev1},${len},${tight},${started}`;

            if (!tight && memo.has(key)) {
                return memo.get(key);
            }

            let ways = 0;
            let total = 0;

            const limit = tight ? Number(s[pos]) : 9;

            for (let d = 0; d <= limit; d++) {
                const nextTight = tight && (d === limit);

                // still skipping leading zeros
                if (!started && d === 0) {
                    const [cnt, wav] = dfs(
                        pos + 1,
                        -1,
                        -1,
                        0,
                        nextTight,
                        false
                    );

                    ways += cnt;
                    total += wav;
                    continue;
                }

                let add = 0;

                // check whether prev1 becomes a peak or valley
                if (len >= 2) {
                    if (
                        (prev1 > prev2 && prev1 > d) ||
                        (prev1 < prev2 && prev1 < d)
                    ) {
                        add = 1;
                    }
                }

                const [cnt, wav] = dfs(
                    pos + 1,
                    prev1,
                    d,
                    len + 1,
                    nextTight,
                    true
                );

                ways += cnt;
                total += wav + add * cnt;
            }

            const res = [ways, total];

            if (!tight) {
                memo.set(key, res);
            }

            return res;
        }

        return dfs(0, -1, -1, 0, true, false)[1];
    }

    return solve(num2) - solve(num1 - 1);
};

console.log("==========================================")

// 3753. Total Waviness of Numbers in Range II
// Hard
// You are given two integers num1 and num2 representing an inclusive range [num1, num2].
// The waviness of a number is defined as the total count of its peaks and valleys:
// A digit is a peak if it is strictly greater than both of its immediate neighbors.
// A digit is a valley if it is strictly less than both of its immediate neighbors.
// The first and last digits of a number cannot be peaks or valleys.
// Any number with fewer than 3 digits has a waviness of 0.
// Return the total sum of waviness for all numbers in the range [num1, num2].

// Example 1:
// Input: num1 = 120, num2 = 130
// Output: 3
// Explanation:
// In the range [120, 130]:
// 120: middle digit 2 is a peak, waviness = 1.
// 121: middle digit 2 is a peak, waviness = 1.
// 130: middle digit 3 is a peak, waviness = 1.
// All other numbers in the range have a waviness of 0.
// Thus, total waviness is 1 + 1 + 1 = 3.

// Example 2:
// Input: num1 = 198, num2 = 202
// Output: 3
// Explanation:
// In the range [198, 202]:
// 198: middle digit 9 is a peak, waviness = 1.
// 201: middle digit 0 is a valley, waviness = 1.
// 202: middle digit 0 is a valley, waviness = 1.
// All other numbers in the range have a waviness of 0.
// Thus, total waviness is 1 + 1 + 1 = 3.

// Example 3:
// Input: num1 = 4848, num2 = 4848
// Output: 
// Explanation:
// Number 4848: the second digit 8 is a peak, and the third digit 4 is a valley, giving a waviness of 2.

// @param {number} num1
// @param {number} num2
// @return {number}

var totalWaviness = function(num1, num2) {

    function solve(n) {
        if (n < 100) return 0;

        const s = String(n);
        const len = s.length;

        // pos, prev1, prev2, tight, started
        // returns [countNumbers, totalWaviness]
        const memo = new Map();

        function dfs(pos, prev1, prev2, tight, started) {
            if (pos === len) {
                return [started ? 1 : 0, 0];
            }

            const key = `${pos},${prev1},${prev2},${tight},${started}`;
            if (!tight && memo.has(key)) {
                return memo.get(key);
            }

            const limit = tight ? Number(s[pos]) : 9;

            let totalCount = 0;
            let totalWave = 0;

            for (let d = 0; d <= limit; d++) {
                const nextTight = tight && d === limit;

                // still leading zeros
                if (!started && d === 0) {
                    const [cnt, wav] = dfs(
                        pos + 1,
                        -1,
                        -1,
                        nextTight,
                        false
                    );

                    totalCount += cnt;
                    totalWave += wav;
                    continue;
                }

                let add = 0;

                // We can determine whether prev1 is peak/valley
                // once we know prev2, prev1, d
                if (started && prev2 !== -1) {
                    if (
                        (prev1 > prev2 && prev1 > d) ||
                        (prev1 < prev2 && prev1 < d)
                    ) {
                        add = 1;
                    }
                }

                const [cnt, wav] = dfs(
                    pos + 1,
                    d,
                    started ? prev1 : -1,
                    nextTight,
                    true
                );

                totalCount += cnt;
                totalWave += wav + add * cnt;
            }

            const res = [totalCount, totalWave];

            if (!tight) {
                memo.set(key, res);
            }

            return res;
        }

        return dfs(0, -1, -1, true, false)[1];
    }

    return solve(num2) - solve(num1 - 1);
};

console.log("==========================================")

// 2574. Left and Right Sum Differences
// Easy
// You are given a 0-indexed integer array nums of size n.
// Define two arrays leftSum and rightSum where:
// leftSum[i] is the sum of elements to the left of the index i in the array nums. 
// If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. 
// If there is no such element, rightSum[i] = 0.
// Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

// Example 1:
// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// Example 2:
// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

// @param {number[]} nums
// @return {number[]}

var leftRightDifference = function(nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);
    
    let leftSum = 0;
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        total -= nums[i]; // now total becomes rightSum
        
        result.push(Math.abs(leftSum - total));
        
        leftSum += nums[i];
    }
    
    return result;
};

console.log("==========================================")

// 32. Longest Valid Parentheses
// Hard
// Given a string containing just the characters '(' and ')', 
// return the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0

// @param {string} s
// @return {number}

var longestValidParentheses = function(s) {
    let maxLen = 0;
    let stack = [-1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
};

console.log("==========================================")

// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
 
// @param {number[]} nums
// @param {number} target
// @return {number[]}

var searchRange = function(nums, target) {

    function findFirst() {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                right = mid - 1; // keep searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    function findLast() {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                left = mid + 1; // keep searching right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    return [findFirst(), findLast()];
};


console.log("==========================================")

// 3689. Maximum Total Subarray Value I
// Medium
// You are given an integer array nums of length n and an integer k.
// You need to choose exactly k non-empty subarrays nums[l..r] of nums. Subarrays may overlap, and the exact same subarray (same l and r) can be chosen more than once.
// The value of a subarray nums[l..r] is defined as: max(nums[l..r]) - min(nums[l..r]).
// The total value is the sum of the values of all chosen subarrays.
// Return the maximum possible total value you can achieve.

// Example 1:
// Input: nums = [1,3,2], k = 2
// Output: 4
// Explanation:
// One optimal approach is:
// Choose nums[0..1] = [1, 3]. The maximum is 3 and the minimum is 1, giving a value of 3 - 1 = 2.
// Choose nums[0..2] = [1, 3, 2]. The maximum is still 3 and the minimum is still 1, so the value is also 3 - 1 = 2.
// Adding these gives 2 + 2 = 4.

// Example 2:
// Input: nums = [4,2,5,1], k = 3
// Output: 12
// Explanation:
// One optimal approach is:
// Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, giving a value of 5 - 1 = 4.
// Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, so the value is also 4.
// Choose nums[2..3] = [5, 1]. The maximum is 5 and the minimum is 1, so the value is again 4.
// Adding these gives 4 + 4 + 4 = 12.

// @param {number[]} nums
// @param {number} k
// @return {number}

var maxTotalValue = function(nums, k) {
    let mn = Infinity;
    let mx = -Infinity;

    for (const num of nums) {
        mn = Math.min(mn, num);
        mx = Math.max(mx, num);
    }

    return k * (mx - mn);
};

console.log("==========================================")

// 3691. Maximum Total Subarray Value II
// Hard
// You are given an integer array nums of length n and an integer k.
// You must select exactly k distinct subarrays nums[l..r] of nums. 
// Subarrays may overlap, but the exact same subarray (same l and r) cannot be chosen more than once.
// The value of a subarray nums[l..r] is defined as: max(nums[l..r]) - min(nums[l..r]).
// The total value is the sum of the values of all chosen subarrays.
// Return the maximum possible total value you can achieve.

// Example 1:
// Input: nums = [1,3,2], k = 2
// Output: 4
// Explanation:
// One optimal approach is:
// Choose nums[0..1] = [1, 3]. The maximum is 3 and the minimum is 1, giving a value of 3 - 1 = 2.
// Choose nums[0..2] = [1, 3, 2]. The maximum is still 3 and the minimum is still 1, so the value is also 3 - 1 = 2.
// Adding these gives 2 + 2 = 4.

// Example 2:
// Input: nums = [4,2,5,1], k = 3
// Output: 12
// Explanation:
// One optimal approach is:
// Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, giving a value of 5 - 1 = 4.
// Choose nums[1..3] = [2, 5, 1]. The maximum is 5 and the minimum is 1, so the value is also 4.
// Choose nums[2..3] = [5, 1]. The maximum is 5 and the minimum is 1, so the value is again 4.
// Adding these gives 4 + 4 + 4 = 12.

// @param {number[]} nums
// @param {number} k
// @return {number}

var maxTotalValue = function(nums, k) {
    const n = nums.length;

    // Sparse table logs
    const lg = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        lg[i] = lg[i >> 1] + 1;
    }

    const m = lg[n] + 1;

    const stMax = Array.from({ length: m }, () => new Array(n));
    const stMin = Array.from({ length: m }, () => new Array(n));

    for (let i = 0; i < n; i++) {
        stMax[0][i] = nums[i];
        stMin[0][i] = nums[i];
    }

    for (let j = 1; j < m; j++) {
        const len = 1 << j;
        const half = len >> 1;

        for (let i = 0; i + len <= n; i++) {
            stMax[j][i] = Math.max(
                stMax[j - 1][i],
                stMax[j - 1][i + half]
            );

            stMin[j][i] = Math.min(
                stMin[j - 1][i],
                stMin[j - 1][i + half]
            );
        }
    }

    function value(l, r) {
        const len = r - l + 1;
        const p = lg[len];

        const mx = Math.max(
            stMax[p][l],
            stMax[p][r - (1 << p) + 1]
        );

        const mn = Math.min(
            stMin[p][l],
            stMin[p][r - (1 << p) + 1]
        );

        return mx - mn;
    }

    class MaxHeap {
        constructor() {
            this.h = [];
        }

        push(x) {
            const h = this.h;
            h.push(x);

            let i = h.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (h[p][0] >= h[i][0]) break;

                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        }

        pop() {
            const h = this.h;
            const top = h[0];
            const last = h.pop();

            if (h.length) {
                h[0] = last;

                let i = 0;

                while (true) {
                    let largest = i;
                    const l = i * 2 + 1;
                    const r = l + 1;

                    if (l < h.length && h[l][0] > h[largest][0]) {
                        largest = l;
                    }

                    if (r < h.length && h[r][0] > h[largest][0]) {
                        largest = r;
                    }

                    if (largest === i) break;

                    [h[i], h[largest]] = [h[largest], h[i]];
                    i = largest;
                }
            }

            return top;
        }

        size() {
            return this.h.length;
        }
    }

    const heap = new MaxHeap();

    for (let l = 0; l < n; l++) {
        heap.push([value(l, n - 1), l, n - 1]);
    }

    let ans = 0n;

    for (let t = 0; t < k; t++) {
        const [val, l, r] = heap.pop();
        ans += BigInt(val);

        if (r > l) {
            heap.push([value(l, r - 1), l, r - 1]);
        }
    }

    return Number(ans);
};


console.log("==========================================")

3558. Number of Ways to Assign Edge Weights I
Medium
Topics
premium lock icon
Companies
Hint
There is an undirected tree with n nodes labeled from 1 to n, rooted at node 1. The tree is represented by a 2D integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi.

Initially, all edges have a weight of 0. You must assign each edge a weight of either 1 or 2.

The cost of a path between any two nodes u and v is the total weight of all edges in the path connecting them.

Select any one node x at the maximum depth. Return the number of ways to assign edge weights in the path from node 1 to x such that its total cost is odd.

Since the answer may be large, return it modulo 109 + 7.

Note: Ignore all edges not in the path from node 1 to x.

 

Example 1:



Input: edges = [[1,2]]

Output: 1

Explanation:

The path from Node 1 to Node 2 consists of one edge (1 → 2).
Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.
Example 2:



Input: edges = [[1,2],[1,3],[3,4],[3,5]]

Output: 2

Explanation:

The maximum depth is 2, with nodes 4 and 5 at the same depth. Either node can be selected for processing.
For example, the path from Node 1 to Node 4 consists of two edges (1 → 3 and 3 → 4).
Assigning weights (1,2) or (2,1) results in an odd cost. Thus, the number of valid assignments is 2.




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



// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"


// document.querySelector('textarea').value = 'your code here';


// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"
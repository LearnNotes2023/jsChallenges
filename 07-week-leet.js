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



// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"


// document.querySelector('textarea').value = 'your code here';


// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"
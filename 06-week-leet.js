// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

// Constraints:

// -1000 <= n <= 1000
// 0 <= calls.length <= 1000
// calls[i] === "call"

//   @param {number} n
//   @return {Function}

var createCounter = function(n) {
    
    var createCounter = function(n) {
        return function() {
            let result = n;
            n++;
            return result;
        };
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

console.log("==========================================")


// Code
// Testcase
// Testcase
// Test Result
// 2704. To Be Or Not To Be
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.


//  @param {string} val
//  @return {Object}

var expect = function(val) {
    
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log("==========================================")
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
 

// Constraints:

// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"

// @param {integer} init
// @return { increment: Function, decrement: Function, reset: Function }

var createCounter = function(init) {
    let counter = init;

    return {
        increment: function() {
            return ++counter;
        },
        decrement: function() {
            return --counter;
        },
        reset: function() {
            counter = init;
            return counter;
        }
    };
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.log("==========================================")

// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Example 1:
var arr1 = [1,2,3]
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:
var arr2 = [1,2,3]
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:
var arr3 = [10,20,30]
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
 
// Constraints:
// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns a number


// @param {number[]} arr
//  @param {Function} fn
// @return {number[]}

var map = function(arr, fn) {
    console.log(arr, fn)
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    } 
   return returnedArray
};

console.log("==========================================")

// 2634. Filter Elements from Array
// Easy
// Companies
// Hint
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

 

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out
 

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109


// @param {number[]} arr
// @param {Function} fn
// @return {number[]}

var filter = function(arr, fn) {
    const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const passesFilter = fn(currentValue, i);

    if (passesFilter) {
      filteredArr.push(currentValue);
    }
  }

  return filteredArr;
}


console.log("==========================================")

// 2626. Array Reduce Transformation
// Easy
// Companies
// Hint
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

// Example 1:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.
// Example 2:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.
// Example 3:

// Input: 
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.


// @param {number[]} nums
// @param {Function} fn
// @param {number} init
// @return {number}

var reduce = function(nums, fn, init) {
    // console.log(nums, fn, init)
    let returnedArray = init;
    for (let i = 0; i < nums.length; i++) {
        returnedArray = fn(returnedArray, nums[i]);
    } 
    return returnedArray
};

console.log("==========================================")

// 2629. Function Composition
// Easy
// Companies
// Hint
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function


// @param {Function[]} functions
// @return {Function}

var compose = function(functions) {
    // console.log("functions:", functions);
    return function(x) {
        // console.log("x:", x); 
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

// const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9

// The line result = functions[i](result); is the core of the function composition. Let's break it down:
// functions[i]: This accesses the i-th function in the array of functions.
// functions[i](result): This calls the i-th function with the current value of result as its argument. In other words, it applies the i-th function to the current result.
// result = functions[i](result);: This assigns the result of applying the i-th function to the variable result. 
// So, after this line, result now holds the value produced by applying the i-th function to the previous result.

console.log("==========================================")

// 2703. Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

// @param {...(null|boolean|number|string|Array|Object)} args
// @return {number}

var argumentsLength = function(...args) {
    return args.length
};


// argumentsLength(1, 2, 3); // 3


console.log("==========================================")

// 2666. Allow One Function Call
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 
// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called


// @param {Function} fn
// @return {Function}

var once = function(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    };
};

// let fn = (a,b,c) => (a + b + c)
// let onceFn = once(fn)

// onceFn(1,2,3); // 6
// onceFn(2,3,6); // returns undefined without calling fn


console.log("==========================================")

// 647. Palindromic Substrings
// Medium
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.


// @param {string} s
// @return {number}

function countSubstrings(s) {
    const n = s.length;
    let count = 0;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }

    for (let start = n - 1; start >= 0; start--) {
        for (let end = start + 1; end < n; end++) {
            if (s[start] === s[end]) {
                if (end - start === 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true;
                    count++;
                }
            }
        }
    }

    return count;
}

console.log("==========================================")

// 2623. Memoize
// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1
 

// @param {Function} fn
// @return {Function}

function memoize(fn) {
    const cache = {}; // Cache to store function results
    
    return function(...args) {
        const key = JSON.stringify(args); // Generate a unique key based on arguments

        if (cache[key] === undefined) { // Check if result is already cached
            cache[key] = fn(...args); // If not, calculate and cache the result
        }

        return cache[key]; // Return cached result
    };
}



// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//  callCount += 1;
//   return a + b;
// })
// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1 


console.log("==========================================")

// 2723. Add Two Promises
// Easy
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
// Example 1:
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 
// Constraints:
// promise1 and promise2 are promises that resolve with a number


// @param {Promise} promise1
// @param {Promise} promise2
// @return {Promise}

var addTwoPromises = async function(promise1, promise2) {
    try {
        const result1 = await promise1;
        const result2 = await promise2;
        return result1 + result2;
    } catch (error) {
        throw error; // Re-throw the error if any of the promises reject
    }
};

// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//  .then(console.log); // 4


console.log("==========================================")

// 2621. Sleep
// Easy
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:  Input: millis = 100  Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => { console.log(Date.now() - t); // 100 });

// Example 2: Input: millis = 200  Output: 200
// Explanation: It should return a promise that resolves after 200ms.



// @param {number} millis
// @return {Promise}

async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100


console.log("==========================================")

// 2149. Rearrange Array Elements by Sign
// Medium
// Hint
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:
// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
// Example 2:
// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].


// @param {number[]} nums
// @return {number[]}

var rearrangeArray = function(nums) {
    let positives = [];
    let negatives = [];
    
    // Separate positive and negative integers into separate arrays
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) { positives.push(nums[i]); } 
        else { negatives.push(nums[i]); }
    }
    // Merge positive and negative arrays alternatively
    let result = [];
    let i = 0, j = 0;
    let isPositiveTurn = true;
    while (i < positives.length && j < negatives.length) {
        if (isPositiveTurn) { result.push(positives[i++]); } 
        else { result.push(negatives[j++]); }
        isPositiveTurn = !isPositiveTurn;
    }
    // Append remaining elements, if any
    while (i < positives.length) { result.push(positives[i++]); }
    while (j < negatives.length) { result.push(negatives[j++]); }
    return result;
};

console.log("==========================================")

// 2715. Timeout Cancellation
// Easy
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

// Example 1:
// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);
// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

// Example 2:
// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);
// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

// Example 3:
// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
// Output: [{"time": 30, "returned": 8}]
// Explanation: 
// const cancelTimeMs = 100;
// const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
// setTimeout(cancelFn, cancelTimeMs);
// The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.

// @param {Function} fn
// @param {Array} args
// @param {number} t
// @return {Function}

var cancellable = function(fn, args, t) {
    console.log(fn, args, t)
     // This line declares a variable named cancellable and assigns it a function value.
    // The function takes three parameters: fn, args, and t.
    // fn is another function that we want to call later.
    // args is an array of arguments that we want to pass to fn when we call it.
    // t is a number of milliseconds that we want to wait before calling fn.

    let timer = setTimeout(() => {
    // This line creates a variable named timer and assigns it the result of calling setTimeout.
    // setTimeout is a built-in function that can execute another function after a delay.
    // The first argument of setTimeout is a function that we want to execute later.
    // The second argument of setTimeout is the delay in milliseconds.
    // In this case, we are using an arrow function as the first argument, which is a shorthand way of writing a function.
    // The arrow function has no parameters and no curly braces, which means it will execute one statement and return its value.
    fn(...args); // This is the statement that the arrow function will execute. It calls fn with the args as parameters.
    // The ... operator is called the spread operator, which can expand an array into individual elements.
    // For example, if args is [2, 3], then fn(...args) is equivalent to fn(2, 3).
    }, t);
     // The result of calling setTimeout is a numeric value that represents the timer ID. We can use this ID to cancel the timer later.
 
    return function() {
    // This line returns another function from the cancellable function. This function will act as the cancel function.
    // This function has no parameters and no name. It is an anonymous function.
 
    clearTimeout(timer); // This line calls clearTimeout, which is another built-in function that can cancel a timer created by setTimeout.
    // The argument of clearTimeout is the timer ID that we want to cancel. In this case, we use the timer variable that we created earlier.
  };
};


// const result = [];
// const fn = (x) => x * 5;
// const args = [2], t = 20, cancelTimeMs = 50;
// const start = performance.now();
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)});}
// const cancel = cancellable(log, args, t);
// const maxT = Math.max(t, cancelTimeMs);       
// setTimeout(cancel, cancelTimeMs);
// setTimeout(() => { console.log(result); // [{"time":20,"returned":10}] }, maxT + 15)


console.log("==========================================")

// 2971. Find Polygon With the Largest Perimeter
// Medium
// Topics
// Companies
// Hint
// You are given an array of positive integers nums of length n.
// A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is smaller than the sum of its other sides.
// Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.
// The perimeter of a polygon is the sum of lengths of its sides.
// Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1 if it is not possible to create a polygon.
// Example 1:
// Input: nums = [5,5,5]
// Output: 15
// Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.
// Example 2:
// Input: nums = [1,12,1,2,5,50,3]
// Output: 12
// Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
// We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
// It can be shown that the largest possible perimeter is 12.
// Example 3:
// Input: nums = [5,5,50]
// Output: -1
// Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 > 5 + 5.


// @param {number[]} nums
// @return {number}

var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const s = Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        s[i + 1] = s[i] + nums[i];
    }
    let ans = -1;
    for (let k = 3; k <= n; ++k) {
        if (s[k - 1] > nums[k - 1]) {
            ans = Math.max(ans, s[k]);
        }
    }
    return ans;
}

// in TypeScript:
// function largestPerimeter(nums: number[]): number {
//     nums.sort((a, b) => a - b);
//     const n = nums.length;
//     const s: number[] = Array(n + 1).fill(0);
//     for (let i = 0; i < n; ++i) {
//         s[i + 1] = s[i] + nums[i];
//     }
//     let ans = -1;
//     for (let k = 3; k <= n; ++k) {
//         if (s[k - 1] > nums[k - 1]) {
//             ans = Math.max(ans, s[k]);
//         }
//     }
//     return ans;
// }


console.log("==========================================")

// 1481. Least Number of Unique Integers after K Removals
// Medium
// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// @param {number[]} arr
// @param {number} k
// @return {number}

var findLeastNumOfUniqueInts = function(arr, k) {
    const frequencyMap = new Map();
    // Step 1: Count the frequency of each integer
    arr.forEach(num => {frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);});
    // Step 2: Sort the frequencies and remove the least frequent integers
    const frequencies = [...frequencyMap.values()].sort((a, b) => a - b);
    let uniqueIntegers = frequencyMap.size; // Initially, all integers are unique
    let index = 0;

    while (k > 0 && index < frequencies.length) {
        if (frequencies[index] <= k) {
            k -= frequencies[index];
            uniqueIntegers--; // Decrease the count of unique integers
        } else {
            break; // No need to continue if k becomes 0 or negative
        }
        index++;
    }

    return uniqueIntegers;
};

// function findLeastNumOfUniqueInts(arr: number[], k: number): number {

// };

console.log("==========================================")

// 1642. Furthest Building You Can Reach
// Medium
// You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.
// You start your journey from building 0 and move to the next building by possibly using bricks or ladders.
// While moving from building i to building i+1 (0-indexed),
// If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
// If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
// Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

// Example 1:
// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.
// Example 2:
// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7
// Example 3:
// Input: heights = [14,3,19,3], bricks = 17, ladders = 0
// Output: 3
 

// @param {number[]} heights
// @param {number} bricks
// @param {number} ladders
// @return {number}

var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;
    const priorityQueue = [];
    let bricksUsed = 0;
    
    for (let i = 0; i < n - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            bricksUsed += diff;
            // Push the negative of the difference, as we want a min heap
            priorityQueue.push(-diff);
            priorityQueue.sort((a, b) => a - b);
            // If bricks used exceeds available bricks, use a ladder if available
            if (bricksUsed > bricks) {
                if (ladders > 0) {
                    bricksUsed += priorityQueue.shift();
                    ladders--;
                } else {
                    return i; // Can't progress further
                }
            }
        }
    }
    return n - 1; // Reached the last building
};
console.log("==========================================")

// 2725. Interval Cancellation
// Easy
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
// Example 1:
// Input: fn = (x) => x * 2, args = [4], t = 35
// Output: 
// [ {"time": 0, "returned": 8}, {"time": 35, "returned": 8}, {"time": 70, "returned": 8}, {"time": 105, "returned": 8}, {"time": 140, "returned": 8}, {"time": 175, "returned": 8} ]
// Explanation: 
// const cancelTimeMs = 190;
// const cancelFn = cancellable((x) => x * 2, [4], 35);
// setTimeout(cancelFn, cancelTimeMs);

// Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
// 1st fn call is at 0ms. fn(4) returns 8.
// 2nd fn call is at 35ms. fn(4) returns 8.
// 3rd fn call is at 70ms. fn(4) returns 8.
// 4th fn call is at 105ms. fn(4) returns 8.
// 5th fn call is at 140ms. fn(4) returns 8.
// 6th fn call is at 175ms. fn(4) returns 8.
// Cancelled at 190ms
// Example 2:

// Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
// Output: 
// [ {"time": 0, "returned": 10}, {"time": 30, "returned": 10}, {"time": 60, "returned": 10}, {"time": 90, "returned": 10}, {"time": 120, "returned": 10}, {"time": 150, "returned": 10} ]
// Explanation: 
// const cancelTimeMs = 165; 
// const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30) 
// setTimeout(cancelFn, cancelTimeMs)

// Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
// 1st fn call is at 0ms 
// 2nd fn call is at 30ms 
// 3rd fn call is at 60ms 
// 4th fn call is at 90ms 
// 5th fn call is at 120ms 
// 6th fn call is at 150ms
// Cancelled at 165ms
// Example 3:

// Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
// Output: 
// [ {"time": 0, "returned": 9}, {"time": 50, "returned": 9},  {"time": 100, "returned": 9}, {"time": 150, "returned": 9} ]
// Explanation: 
// const cancelTimeMs = 180;
// const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
// setTimeout(cancelFn, cancelTimeMs)

// Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
// 1st fn call is at 0ms
// 2nd fn call is at 50ms
// 3rd fn call is at 100ms
// 4th fn call is at 150ms
// Cancelled at 180ms
 
// @param {Function} fn
// @param {Array} args
// @param {number} t
// @return {Function}

var cancellable = function(fn, args, t) {
    console.log(fn, args, t)
    fn(...args);// Call fn once immediately
     // This line declares a variable named cancellable and assigns it a function value.
    // The function takes three parameters: fn, args, and t.
    // fn is another function that we want to call later.
    // args is an array of arguments that we want to pass to fn when we call it.
    // t is a number of milliseconds that we want to wait before calling fn.

    let interval = setInterval(() => { // Set up the interval for subsequent calls
    // This line creates a variable named timer and assigns it the result of calling setTimeout.
    // setTimeout is a built-in function that can execute another function after a delay.
    // The first argument of setTimeout is a function that we want to execute later.
    // The second argument of setTimeout is the delay in milliseconds.
    // In this case, we are using an arrow function as the first argument, which is a shorthand way of writing a function.
    // The arrow function has no parameters and no curly braces, which means it will execute one statement and return its value.
        fn(...args); // This is the statement that the arrow function will execute. It calls fn with the args as parameters.
    // The ... operator is called the spread operator, which can expand an array into individual elements.
    // For example, if args is [2, 3], then fn(...args) is equivalent to fn(2, 3).
    }, t);
     // The result of calling setTimeout is a numeric value that represents the timer ID. We can use this ID to cancel the timer later.
 
    return function() {  // Return cancellation function
    // This line returns another function from the cancellable function. This function will act as the cancel function.
    // This function has no parameters and no name. It is an anonymous function.
 
    clearTimeout(interval); // This line calls clearTimeout, which is another built-in function that can cancel a timer created by setTimeout.
    // The argument of clearTimeout is the timer ID that we want to cancel. In this case, we use the timer variable that we created earlier.
  };
};


// const result = [];

// const fn = (x) => x * 2;
// const args = [4], t = 35, cancelTimeMs = 190;
// const start = performance.now();
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)});
// }
// const cancel = cancellable(log, args, t);
// setTimeout(cancel, cancelTimeMs);
// setTimeout(() => {
//     console.log(result); // [
//                          //     {"time":0,"returned":8},
//                          //     {"time":35,"returned":8},
//                          //     {"time":70,"returned":8},
//                          //     {"time":105,"returned":8},
//                          //     {"time":140,"returned":8},
//                          //     {"time":175,"returned":8}
//                          // ]
//  }, cancelTimeMs + t + 15)    


console.log("==========================================")

// 268. Missing Number
// Easy
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// @param {number[]} nums
// @return {number}

var missingNumber = function(nums) {
    let sortedArr = nums.sort((a, b) => a - b);
    // If the first number is not 0, then 0 is the missing number
    if (sortedArr[0] !== 0) return 0;
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        // If the difference between consecutive numbers is greater than 1,
        // then there is a missing number between them
        if (sortedArr[i + 1] - sortedArr[i] > 1) {
            return sortedArr[i] + 1;
        }
    }
    // If no missing number is found within the array, 
    // the missing number is the last number plus 1
    return sortedArr[sortedArr.length - 1] + 1;
};

console.log("==========================================")

// 201. Bitwise AND of Numbers Range
// Medium
// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.
// Example 1:
// Input: left = 5, right = 7
// Output: 4
// Example 2:
// Input: left = 0, right = 0
// Output: 0
// Example 3:
// Input: left = 1, right = 2147483647
// Output: 0
// Constraints:
// 0 <= left <= right <= 231 - 1

// @param {number} left
// @param {number} right
// @return {number}

function rangeBitwiseAnd(left, right) {
    // Initialize a variable to keep track of the number of right shifts
    let shift = 0;
    
    // Continue looping until left and right numbers are equal
    while (left < right) {
        // Right shift both left and right numbers by 1 bit
        left >>= 1;
        right >>= 1;
        
        // Increment the shift count
        shift++;
    }
    
    // Left shift the left number by the number of shifts performed
    // This will generate the common prefix of the binary representations of left and right numbers
    return left << shift;
}

console.log("==========================================")

// 997. Find the Town Judge
// Easy
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. 
// If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// @param {number} n
// @param {number[][]} trust
// @return {number}

var findJudge = function(n, trust) {
    const trustCounts = new Array(n + 1).fill(0); // Initialize trust counts for each person
    
    for (const [a, b] of trust) {
        trustCounts[a]--; // Decrement trust count for person 'a'
        trustCounts[b]++; // Increment trust count for person 'b'
    }
    
    for (let i = 1; i <= n; i++) {
        if (trustCounts[i] === n - 1) { // Check if the person is trusted by everyone except themselves
            return i; // Return the label of the town judge
        }
    }
    
    return -1; // No town judge found
};

console.log("==========================================")

// 2637. Promise Time Limit
// Medium
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
// Example 1:
// Input: 
// fn = async (n) => { 
//   await new Promise(res => setTimeout(res, 100)); 
//   return n * n; 
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
// Example 2:
// Input: 
// fn = async (n) => { 
//   await new Promise(res => setTimeout(res, 100)); 
//   return n * n; 
// }
// inputs = [5]
// t = 150
// Output: {"resolved":25,"time":100}
// Explanation:
// The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
// Example 3:
// Input: 
// fn = async (a, b) => { 
//   await new Promise(res => setTimeout(res, 120)); 
//   return a + b; 
// }
// inputs = [5,10]
// t = 150
// Output: {"resolved":15,"time":120}
// Explanation:
// ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
// Example 4:
// Input: 
// fn = async () => { 
//   throw "Error";
// }
// inputs = []
// t = 1000
// Output: {"rejected":"Error","time":0}
// Explanation:
// The function immediately throws an error.

// @param {Function} fn
// @param {number} t
// @return {Function}

var timeLimit = function(fn, t) {
    return async function(...args) {
        // Create a Promise that resolves with the result of the function or rejects if the time limit is exceeded
        const promise = new Promise(async (resolve, reject) => {
            // Start a timer
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            try {
                // Execute the provided function with the arguments
                const result = await fn(...args);
                // Clear the timer
                clearTimeout(timer);
                // Resolve with the result
                resolve(result);
            } catch (error) {
                // Clear the timer
                clearTimeout(timer);
                // Reject with the error
                reject(error);
            }
        });

        // Return the promise
        return promise;
    };
};


// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

console.log("==========================================")

// 2622. Cache With Time Limit
// Medium
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. 
// The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.
// Example 1:
// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.
// Example 2:

// Input: 
// actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// timeDelays = [0, 0, 40, 50, 120, 200, 250]
// Output: [null, false, true, 50, 50, -1, 0]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
// At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
// At t=50, get(1) is called which returned 50.
// At t=120, get(1) is called which returned 50.
// At t=140, key=1 expires.
// At t=200, get(1) is called but the cache is empty so -1 is returned.
// At t=250, count() returns 0 because the cache is empty.

var TimeLimitedCache = function() {
    
};

// @param {number} key
// @param {number} value
// @param {number} duration time until expiration in ms
// @return {boolean} if un-expired key already existed

TimeLimitedCache.prototype.set = function(key, value, duration) {
    
};

// @param {number} key
// @return {number} value associated with key

TimeLimitedCache.prototype.get = function(key) {
    
};

// @return {number} count of non-expired keys
TimeLimitedCache.prototype.count = function() {
    
};

// const timeLimitedCache = new TimeLimitedCache()
// timeLimitedCache.set(1, 42, 1000); // false
// timeLimitedCache.get(1) // 42
// timeLimitedCache.count() // 1

console.log("==========================================")

// 543. Diameter of Binary Tree
// Easy
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.
// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// @param {TreeNode} root
// @return {number}

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    // Helper function to calculate the depth of a subtree
    const depth = function(node) {
        if (node === null) return 0;
        
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        
        // Update the max diameter
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        // Return the depth of the current node
        return 1 + Math.max(leftDepth, rightDepth);
    };
    
    depth(root);
    
    return maxDiameter;
};


console.log("==========================================")

// 513. Find Bottom Left Tree Value
// Medium
// Given the root of a binary tree, return the leftmost value in the last row of the tree.
// Example 1
// Input: root = [2,1,3]
// Output: 1
// Example 2:
// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
// @param {TreeNode} root
// @return {number}

var findBottomLeftValue = function(root) {
    if (!root) return null;
    
    let queue = [root];
    let leftmost = null;
    
    while (queue.length > 0) {
        const size = queue.length;
        leftmost = queue[0].val; // Update leftmost value for each level
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return leftmost;
};

console.log("==========================================")

// 1609. Even Odd Tree
// Medium
// A binary tree is named Even-Odd if it meets the following conditions:
// The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
// For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
// For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
// Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.
// Example 1:
// Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
// Output: true
// Explanation: The node values on each level are:
// Level 0: [1]
// Level 1: [10,4]
// Level 2: [3,7,9]
// Level 3: [12,8,6,2]
// Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.
// Example 2:
// Input: root = [5,4,2,3,3,7]
// Output: false
// Explanation: The node values on each level are:
// Level 0: [5]
// Level 1: [4,2]
// Level 2: [3,3,7]
// Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd.
// Example 3:
// Input: root = [5,9,1,3,5,7]
// Output: false
// Explanation: Node values in the level 1 should be even integers.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
// @param {TreeNode} root
// @return {boolean}

function isEvenOddTree(root) {
    if (!root) return false;
    
    let queue = [root];
    let level = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        let prevVal = level % 2 === 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            const val = node.val;
            
            if (level % 2 === 0) { // Even level
                if (val % 2 !== 1 || val <= prevVal) return false; // Not odd or not strictly increasing
            } else { // Odd level
                if (val % 2 !== 0 || val >= prevVal) return false; // Not even or not strictly decreasing
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            
            prevVal = val;
        }
        
        level++;
    }
    
    return true;
}

console.log("==========================================")

// 977. Squares of a Sorted Array
// Easy
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// @param {number[]} nums
// @return {number[]}

var sortedSquares = function(nums) {
    let numbers = nums.map(num => num * num);
    return numbers.slice().sort((a, b) => a - b);
};

console.log("==========================================")

// 19. Remove Nth Node From End of List
// Medium
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:
// Input: head = [1], n = 1
// Output: []
// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]
 
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// @param {ListNode} head
// @param {number} n
// @return {ListNode}

var removeNthFromEnd = function(head, n) {
        // Initialize dummy node to handle edge cases
        let dummy = new ListNode(0);
        dummy.next = head;
        let first = dummy;
        let second = dummy;
    
        // Move the first pointer n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            first = first.next;
        }
    
        // Move both pointers until the first pointer reaches the end
        while (first !== null) {
            first = first.next;
            second = second.next;
        }
    
        // Remove the nth node from the end
        second.next = second.next.next;
    
        return dummy.next; // Return the modified list
};

console.log("==========================================")

// 948. Bag of Tokens
// Medium
// You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] donates the value of tokeni.
// Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):
// Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
// Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
// Return the maximum possible score you can achieve after playing any number of tokens.
// Example 1:
// Input: tokens = [100], power = 50
// Output: 0
// Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100).
// Example 2:
// Input: tokens = [200,100], power = 150
// Output: 1
// Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.
// There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1.
// Example 3:
// Input: tokens = [100,200,300,400], power = 200
// Output: 2
// Explanation: Play the tokens in this order to get a score of 2:
// Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
// Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
// Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
// Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
// The maximum score achievable is 2.

// @param {number[]} tokens
// @param {number} power
// @return {number}

var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b); // Sort tokens in ascending order
    let score = 0;
    let maxScore = 0;
    let left = 0;
    let right = tokens.length - 1;

    while (left <= right) {
        if (power >= tokens[left]) { // Play token face-up
            power -= tokens[left++];
            score++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) { // Play token face-down if score > 0
            power += tokens[right--];
            score--;
        } else {
            break;
        }
    }

    return maxScore;
};

console.log("==========================================")

// 1750. Minimum Length of String After Deleting Similar Ends
// Medium
// Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:
// Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
// Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
// The prefix and the suffix should not intersect at any index.
// The characters from the prefix and suffix must be the same.
// Delete both the prefix and the suffix.
// Return the minimum length of s after performing the above operation any number of times (possibly zero times).
// Example 1:
// Input: s = "ca"
// Output: 2
// Explanation: You can't remove any characters, so the string stays as is.
// Example 2:
// Input: s = "cabaabac"
// Output: 0
// Explanation: An optimal sequence of operations is:
// - Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
// - Take prefix = "a" and suffix = "a" and remove them, s = "baab".
// - Take prefix = "b" and suffix = "b" and remove them, s = "aa".
// - Take prefix = "a" and suffix = "a" and remove them, s = "".
// Example 3:
// Input: s = "aabccabba"
// Output: 3
// Explanation: An optimal sequence of operations is:
// - Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".
// - Take prefix = "b" and suffix = "bb" and remove them, s = "cca".

// @param {string} s
// @return {number}

var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right && s[left] === s[right]) {
        const char = s[left];
        // Move left pointer to the right until it reaches a different character
        while (left <= right && s[left] === char) {
            left++;
        }
        // Move right pointer to the left until it reaches a different character
        while (left <= right && s[right] === char) {
            right--;
        }
    }
    
    // The minimum length of the string after applying the algorithm is the remaining substring length
    return right - left + 1;
};
console.log("==========================================")

// 141. Linked List Cycle
// Easy
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// @param {ListNode} head
// @return {boolean}

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
    return right - left + 1;
};

console.log("==========================================")

// 876. Middle of the Linked List
// Easy
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

var middleNode = function(head) {
    // if (Array.isArray(head)) {
    //     if (head.length % 2 === 1) {
    //         return head.slice(2);
    //     } else {
    //         return head.slice(3);
    //     }
    // } else {
    //     // Handle the case where head is not an array
    //     return "Input is not an array";
    // }
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

console.log("==========================================")

// 3005. Count Elements With Maximum Frequency
// Easy
// You are given an array nums consisting of positive integers.
// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
// The frequency of an element is the number of occurrences of that element in the array.
// Example 1:
// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:
// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.
// @param {number[]} nums
// @return {number}

var maxFrequencyElements = function(nums) {
    // Step 1: Create a map to store the frequency of each element
    let frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Find the maximum frequency
    let maxFrequency = Math.max(...frequencyMap.values());
    
    // Step 3: Count the total frequencies of elements with maximum frequency
    let totalCount = 0;
    for (let [num, frequency] of frequencyMap) {
        if (frequency === maxFrequency) {
            totalCount += frequency;
        }
    }
    
    return totalCount;
};

console.log("==========================================")

// 2540. Minimum Common Value
// Easy
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. 
// If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:
// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number}

var getCommon = function(nums1, nums2) {
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};

console.log("==========================================")

// 349. Intersection of Two Arrays
// Easy
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number[]}

var intersection = function(nums1, nums2) {
    const set = new Set();
    const result = [];
    const set1 = new Set(nums1);
    for (let num of nums2) {
        if (set1.has(num) && !set.has(num)) {
            result.push(num);
            set.add(num);
        }
    }
    
    return result;
};

console.log("==========================================")

// 791. Custom Sort String
// Medium
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
// Permute the characters of s so that they match the order that order was sorted. 
// More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
// Return any permutation of s that satisfies this property.
// Example 1:
// Input:  order = "cba", s = "abcd" 
// Output:  "cbad" 
// Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
// Example 2:
// Input:  order = "bcafg", s = "abcd" 
// Output:  "bcad" 
// Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.
// Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. 
// The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

// @param {string} order
// @param {string} s
// @return {string}

var customSortString = function(order, s) {
    // Create a hashmap to store the frequency of characters in s
    const freqMap = {};
    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    
    let result = '';
    // Append characters from order according to their frequency in s
    for (const char of order) {
        if (char in freqMap) {
            result += char.repeat(freqMap[char]);
            // Remove the character from freqMap to mark it as processed
            delete freqMap[char];
        }
    }
    
    // Append any remaining characters in s that are not in order
    for (const char in freqMap) {
        result += char.repeat(freqMap[char]);
    }
    
    return result;
};

console.log("==========================================")

// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// Medium
// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.  You may return any such answer.
// (Note that in the examples below, all sequences are serializations of ListNode objects.)
// Example 1:
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
// Example 2:
// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]
// Example 3:
// Input: head = [1,2,3,-3,-2]
// Output: [1]

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}
 
var removeZeroSumSublists = function(head) {
    // Dummy node at the start of the list to simplify edge cases.
  const dummy = { val: 0, next: head };
  // A map to store the cumulative sum of nodes and their last occurrences.
  const lastOccurrenceOfSum = new Map();
  let sum = 0;

  // First pass: Compute the cumulative sum and track the last occurrence of each sum.
  for (let currentNode = dummy; currentNode; currentNode = currentNode.next) {
    sum += currentNode.val;
    lastOccurrenceOfSum.set(sum, currentNode);
  }

  sum = 0; // Reset sum for the second pass.

  // Second pass: Use the last occurrence map to skip over zero-sum sublists.
  for (let currentNode = dummy; currentNode; currentNode = currentNode.next) {
    sum += currentNode.val;
    // The next node will be the one after the last occurrence of the current sum.
    // As we have removed zero-sum sublists, the sums will not repeat in the new list.
    currentNode.next = lastOccurrenceOfSum.get(sum).next;
  }

  // Return the modified list, sans the dummy node.
  return dummy.next;
};


console.log("==========================================")

// 2485. Find the Pivot Integer
// Easy
// Given a positive integer n, find the pivot integer x such that:
// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.
// Example 1:
// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.
// Example 3:
// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.

// @param {number} n
// @return {number}

var pivotInteger = function(n) {
    if (n === 1) return 1; // Special case: n equals 1
    
    let totalSum = (n * (n + 1)) / 2; // Sum of all elements from 1 to n
    
    for (let x = 2; x <= n; x++) {
        let leftSum = (x * (x - 1)) / 2; // Sum of all elements from 1 to x-1
        let rightSum = totalSum - leftSum - x; // Sum of all elements from x+1 to n
        
        if (leftSum === rightSum) {
            return x;
        }
    }
    
    return -1;
};


console.log("==========================================")

// 930. Binary Subarrays With Sum
// Medium
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
// A subarray is a contiguous part of the array.
// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// @param {number[]} nums
// @param {number} goal
// @return {number}

var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    const sumCount = new Map();
    sumCount.set(0, 1); // Initialize with sum 0 with count 1

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const complement = sum - goal;
        if (sumCount.has(complement)) {
            count += sumCount.get(complement);
        }
        sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
    }

    return count;
};


console.log("==========================================")

// 238. Product of Array Except Self
// Medium
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// @param {number[]} nums
// @return {number[]}

var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Calculate the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate the product of all elements to the right of each element
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
};

console.log("==========================================")

// 525. Contiguous Array
// Medium
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
// Example 1:
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:
// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// @param {number[]} nums
// @return {number}

var findMaxLength = function(nums) {
    var findMaxLength = function(nums) {
        let maxLen = 0;
        let sum = 0;
        const map = new Map();
        map.set(0, -1); // Initialize the map with the sum 0 at index -1 (helps in case the first equal count is encountered)
    
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i] === 0 ? -1 : 1; // Convert 0 to -1 and 1 to 1, then add to the sum
            
            if (map.has(sum)) {
                // If the current sum has been seen before, update maxLen with the difference between current index and the index where the sum occurred previously
                maxLen = Math.max(maxLen, i - map.get(sum));
            } else {
                // If the current sum is encountered for the first time, store it in the map with the current index
                map.set(sum, i);
            }
        }
    
        return maxLen;
    };
};

console.log("==========================================")

// 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
// represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order 
// by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
// Note that you don't need to modify intervals in-place. You can make a new array and return it.
// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// @param {number[][]} intervals
// @param {number[]} newInterval
// @return {number[][]}

var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    // Add all intervals that end before the new interval starts
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge intervals that overlap with the new interval
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add remaining intervals
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};

console.log("==========================================")

// 452. Minimum Number of Arrows to Burst Balloons
// Medium
// There are some spherical balloons taped onto a flat wall that represents the XY-plane. 
// The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon 
// whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. 
// A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. 
// A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
// Example 1:
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
// Example 2:
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
// Example 3:
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

// @param {number[][]} points
// @return {number}

var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    
    // Sort the points based on their end points
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1; // Initialize the number of arrows needed
    let end = points[0][1];
    
    // Iterate through the points to find overlapping intervals
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            // If the current balloon starts after the end of the previous overlapping interval,
            // we need to shoot another arrow and update the end point
            arrows++;
            end = points[i][1];
        }
    }
    
    return arrows;
};

console.log("==========================================")

// 621. Task Scheduler
// Medium
// You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n.
// Each cycle or interval allows the completion of one task. Tasks can be completed in any order, 
// but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.
// ​Return the minimum number of intervals required to complete all tasks.
// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
// After completing task A, you must wait two cycles before doing A again. The same applies to task B. 
// In the 3rd interval, neither A nor B can be done, so you idle. 
// By the 4th cycle, you can do A again as 2 intervals have passed.
// Example 2:
// Input: tasks = ["A","C","A","B","D","B"], n = 1
// Output: 6
// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
// With a cooling interval of 1, you can repeat a task after just one other task.
// Example 3:
// Input: tasks = ["A","A","A", "B","B","B"], n = 3
// Output: 10
// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

// @param {character[]} tasks
// @param {number} n
// @return {number}

var leastInterval = function(tasks, n) {
    // Step 1: Create a hash map to store the frequency of each task
    const taskFrequency = new Map();
    for (const task of tasks) {
        taskFrequency.set(task, (taskFrequency.get(task) || 0) + 1);
    }
    
    // Step 2: Find the maximum frequency
    let maxFrequency = 0;
    for (const frequency of taskFrequency.values()) {
        maxFrequency = Math.max(maxFrequency, frequency);
    }
    
    // Step 3: Count the number of tasks with the same maximum frequency
    let maxCount = 0;
    for (const frequency of taskFrequency.values()) {
        if (frequency === maxFrequency) {
            maxCount++;
        }
    }
    
    // Step 4: Calculate the number of intervals without considering the cooling time
    const partCount = maxFrequency - 1;
    const partLength = n - (maxCount - 1);
    const emptySlots = partCount * partLength;
    const availableTasks = tasks.length - maxFrequency * maxCount;
    const idleSlots = Math.max(0, emptySlots - availableTasks);
    
    // Step 5: Calculate the total number of intervals required, considering the cooling time
    return tasks.length + idleSlots;
};


console.log("==========================================")

// 1669. Merge In Between Linked Lists
// Medium
// You are given two linked lists: list1 and list2 of sizes n and m respectively.
// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
// The blue edges and nodes in the following figure indicate the result:
// Build the result list and return its head.
// Example 1:
// Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [10,1,13,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
// Example 2:
// Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
// Explanation: The blue edges and nodes in the above figure indicate the result.
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} list1
// @param {number} a
// @param {number} b
// @param {ListNode} list2
// @return {ListNode}

var mergeInBetween = function(list1, a, b, list2) {
    let prevA = null;
    let nextB = null;
    let current = list1;
    let count = 0;
    
    // Find the node at position a-1
    while (current !== null) {
        if (count === a - 1) {
            prevA = current;
        }
        if (count === b + 1) {
            nextB = current;
            break;
        }
        current = current.next;
        count++;
    }
    
    // Find the tail of list2
    let tailList2 = list2;
    while (tailList2.next !== null) {
        tailList2 = tailList2.next;
    }
    
    // Link prevA to list2 and list2 to nextB
    prevA.next = list2;
    tailList2.next = nextB;
    
    return list1;
};


console.log("==========================================")

// 206. Reverse Linked List
// Easy
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
};

console.log("==========================================")

// 234. Palindrome Linked List
// Easy
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {boolean}

var isPalindrome = function(head) {
    let values = [];
    let current = head;
    
    // Traverse the linked list and store node values in an array
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    // Use two pointers approach to check if the array is a palindrome
    let left = 0;
    let right = values.length - 1;
    
    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};

console.log("==========================================")

// 143. Reorder List
// Medium
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {void} Do not return anything, modify head in-place instead.

var reorderList = function(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let curr = slow.next;
    while (curr) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    slow.next = null;

    // Step 3: Merge the first half and the reversed second half alternately
    let p1 = head;
    let p2 = prev;
    while (p1 && p2) {
        const nextP1 = p1.next;
        const nextP2 = p2.next;
        p1.next = p2;
        p2.next = nextP1;
        p1 = nextP1;
        p2 = nextP2;
    }
};

console.log("==========================================")

// 287. Find the Duplicate Number
// Medium
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:
// Input: nums = [3,3,3,3,3]
// Output: 3

// @param {number[]} nums
// @return {number}

var findDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    
    // Phase 1: Detect if a cycle exists
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);
    
    // Phase 2: Find the entrance to the cycle
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    return tortoise;
};

console.log("==========================================")

// 442. Find All Duplicates in an Array
// Medium
// Topics
// Companies
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
// and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1,2]
// Output: [1]
// Example 3:
// Input: nums = [1]
// Output: []

// @param {number[]} nums
// @return {number[]}

var findDuplicates = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // Get the corresponding index (zero-based)
        
        // If the number at nums[index] is negative, it means we've seen it before
        if (nums[index] < 0) {
            result.push(index + 1); // Add the number to the result array
        }
        
        // Mark the number at nums[index] as seen by negating it
        nums[index] = -nums[index];
    }
    
    return result;
};

console.log("==========================================")

// 713. Subarray Product Less Than K
// Medium
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
// Example 1:
// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:
// Input: nums = [1,2,3], k = 0
// Output: 0

// @param {number[]} nums
// @param {number} k
// @return {number}


var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0; // If k is less than or equal to 1, no subarray can have a product less than k
    let count = 0;
    let product = 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]; // Extend the window by multiplying with the right element
        while (product >= k) {
            product /= nums[left]; // Shrink the window by dividing by the left element
            left++;
        }
        count += right - left + 1; // Count subarrays ending at the current right pointer
    }
    return count;
};

console.log("==========================================")

//41. First Missing Positive
//Har
//Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
//You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
//Example 1:
//Input: nums = [1,2,0]
//Output: 3
//Explanation: The numbers in the range [1,2] are all in the array.
//Example 2:
//Input: nums = [3,4,-1,1]
//Output: 2
//Explanation: 1 is in the array but 2 is missing.
//Example 3:
//Input: nums = [7,8,9,11,12]
//Output: 1
//Explanation: The smallest positive integer 1 is missing

var firstMissingPositive = function(nums) {
    const n = nums.length;

    // Mark elements within range [1, n]
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] and nums[nums[i] - 1]
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    // Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};
console.log("==========================================")

// 2958. Length of Longest Subarray With at Most K Frequency
// Medium
// You are given an integer array nums and an integer k.
// The frequency of an element x is the number of times it occurs in an array.
// An array is called good if the frequency of each element in this array is less than or equal to k.
// Return the length of the longest good subarray of nums.
// A subarray is a contiguous non-empty sequence of elements within an array.
// Example 1:
// Input: nums = [1,2,3,1,2,3,1,2], k = 2
// Output: 6
// Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. 
// Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
// It can be shown that there are no good subarrays with length more than 6.
// Example 2:
// Input: nums = [1,2,1,2,1,2,1,2], k = 1
// Output: 2
// Explanation: The longest possible good subarray is [1,2] since the values 1 and 2 occur at most once in this subarray. Note that the subarray [2,1] is also good.
// It can be shown that there are no good subarrays with length more than 2.
// Example 3:
// Input: nums = [5,5,5,5,5,5,5], k = 4
// Output: 4
// Explanation: The longest possible good subarray is [5,5,5,5] since the value 5 occurs 4 times in this subarray.
// It can be shown that there are no good subarrays with length more than 4.

// @param {number[]} nums
// @param {number} k
// @return {number}

var maxSubarrayLength = function(nums, k) {
    let ans = 0;
  const count = new Map();
  
  for (let l = 0, r = 0; r < nums.length; ++r) {
    const num = nums[r];
    count.set(num, (count.get(num) || 0) + 1);
    
    while (count.get(num) === k + 1) {
      count.set(nums[l], count.get(nums[l]) - 1);
      l++;
    }
    
    ans = Math.max(ans, r - l + 1);
  }
  
  return ans;
};


console.log("==========================================")

// 2962. Count Subarrays Where Max Element Appears at Least K Times
// Medium
// You are given an integer array nums and a positive integer k.
// Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.
// A subarray is a contiguous sequence of elements within an array.
// Example 1:
// Input: nums = [1,3,2,3,3], k = 2
// Output: 6
// Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
// Example 2:
// Input: nums = [1,4,2,1], k = 3
// Output: 0
// Explanation: No subarray contains the element 4 at least 3 times.

// @param {number[]} nums
// @param {number} k
// @return {number}

var countSubarrays = function(nums, k) {
    let maxNum = Math.max(...nums);
    let ans = 0;
    let count = 0;

    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === maxNum) {
            count += 1;
        }
        // Keep the window to include k - 1 times of the maximum number.
        while (count === k) {
            if (nums[l] === maxNum) {
                count -= 1;
            }
            l += 1;
        }
        // If l > 0, nums[l:r+1] has k - 1 times of the maximum number. For any
        // subarray nums[i:r+1], where i < l, it will have at least k times of the
        // maximum number, since nums[l - 1] equals the maximum number.
        ans += l;
    }

    return ans;
};

console.log("==========================================")


// 992. Subarrays with K Different Integers
// Hard
// Given an integer array nums and an integer k, return the number of good subarrays of nums.
// A good array is an array where the number of different integers in that array is exactly k.
// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
// Example 2:
// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

// @param {number[]} nums
// @param {number} k
// @return {number}

var subarraysWithKDistinct = function(nums, k) {
    function atMostKDistinct(nums, k) {
        const freq = {};
        let count = 0,
            left = 0;
        
        for (let right = 0; right < nums.length; right++) {
            if (!freq[nums[right]]) {
                freq[nums[right]] = 0;
                k--;
            }
            freq[nums[right]]++;
            
            while (k < 0) {
                freq[nums[left]]--;
                if (freq[nums[left]] === 0) k++;
                left++;
            }
            
            count += right - left + 1;
        }
        
        return count;
    }
    
    function exactlyKDistinct(nums, k) {
        return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
    }
    
    return exactlyKDistinct(nums, k);
};

console.log("==========================================")

// 2444. Count Subarrays With Fixed Bounds
// Hard
// You are given an integer array nums and two integers minK and maxK.
// A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
// The minimum value in the subarray is equal to minK.
// The maximum value in the subarray is equal to maxK.
// Return the number of fixed-bound subarrays.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
// Output: 2
// Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
// Example 2:
// Input: nums = [1,1,1,1], minK = 1, maxK = 1
// Output: 10
// Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

// @param {number[]} nums
// @param {number} minK
// @param {number} maxK
// @return {number}

var countSubarrays = function(nums, minK, maxK) {
    let ans = 0;
    let j = -1;
    let prevMinKIndex = -1;
    let prevMaxKIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num < minK || num > maxK) {
            j = i;
        }
        if (num === minK) {
            prevMinKIndex = i;
        }
        if (num === maxK) {
            prevMaxKIndex = i;
        }
        ans += Math.max(0, Math.min(prevMinKIndex, prevMaxKIndex) - j);
    }

    return ans;
};

console.log("==========================================")

// 58. Length of Last Word
// Easy
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// @param {string} s
// @return {number}

var lengthOfLastWord = function(s) {
    // Trim the input string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the trimmed string by spaces to get an array of words
    const words = s.split(' ');
    
    // Access the last element of the array to get the last word
    const lastWord = words[words.length - 1];
    
    // Return the length of the last word
    return lastWord.length;
};

console.log("==========================================")

// 205. Isomorphic Strings
// Easy
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.
// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// @param {string} s
// @param {string} t
// @return {boolean}

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false; // If the lengths of s and t are different, they cannot be isomorphic
    }
    
    const mapS = {}; // Store mappings from characters in s to characters in t
    const mapT = {}; // Store mappings from characters in t to characters in s
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if ((mapS[charS] && mapS[charS] !== charT) || (mapT[charT] && mapT[charT] !== charS)) {
            return false; // If mappings conflict, return false
        }
        
        mapS[charS] = charT;
        mapT[charT] = charS;
    }
    
    return true; // If no conflicts found, strings are isomorphic
};

console.log("==========================================")

// 79. Word Search
// Medium
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.
// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// @param {character[][]} board
// @param {string} word
// @return {boolean}

var exist = function(board, word) {
    const dfs = (i, j, k) => {
        // Base case: If k equals the length of the word, then all characters have been found
        if (k === word.length) return true;
        
        // Check boundaries and if current cell matches the word character
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) return false;
        
        // Temporarily mark the current cell as visited
        const temp = board[i][j];
        board[i][j] = '#';
        
        // Check the neighbors recursively
        const found = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        
        // Restore the original value of the current cell
        board[i][j] = temp;
        
        return found;
    };
    
    // Iterate through each cell and check if the word exists
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    
    return false; // Word not found
};

var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;
  
    // Function to check if word can be formed starting from a cell
    const dfs = (row, col, index) => {
      // Base cases:
      // - Out of bounds
      if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
      // - Character mismatch
      if (board[row][col] !== word[index]) return false;
      // - Word found
      if (index === word.length - 1) return true;
  
      // Mark cell as visited (to avoid revisiting and infinite loops)
      const temp = board[row][col];
      board[row][col] = '#';
  
      // Check all 8 directions (up, down, left, right, and diagonals)
      const directions = [
        [-1, 0], // Up
        [1, 0],  // Down
        [0, -1], // Left
        [0, 1],  // Right
        [-1, -1], // Top-left diagonal
        [-1, 1],  // Top-right diagonal
        [1, -1], // Bottom-left diagonal
        [1, 1],  // Bottom-right diagonal
      ];
  
      // Recursively search in each direction
      for (const [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        if (dfs(newRow, newCol, index + 1)) {
          return true;
        }
      }
  
      // Backtrack: reset the cell value after checking all directions
      board[row][col] = temp;
      return false;
    };
  
    // Iterate through the board and start searching from each cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (board[row][col] === word[0] && dfs(row, col, 0)) {
          return true;
        }
      }
    }
  
    // If no match found
    return false;
  };
console.log("==========================================")

// 1614. Maximum Nesting Depth of the Parentheses
// Easy
// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:
// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
// Given a VPS represented as string s, return the nesting depth of s.
// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3

// @param {string} s
// @return {number}

var maxDepth = function(s) {
    let maxDepth = 0;
    let currentDepth = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            currentDepth++;
            maxDepth = Math.max(maxDepth, currentDepth);
        } else if (s[i] === ')') {
            currentDepth--;
        }
    }
    
    return maxDepth;
};

console.log("==========================================")

// 1544. Make The String Great
// Easy
// Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. 
// You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.
// Example 1:
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:
// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:
// Input: s = "s"
// Output: "s"

// @param {string} s
// @return {string}

var makeGood = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length && Math.abs(char.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop(); // Remove the previous character
        } else {
            stack.push(char); // Add the current character
        }
    }
    
    return stack.join(''); // Convert the stack back to string
};

console.log("==========================================")

// 1249. Minimum Remove to Make Valid Parentheses
// Medium
// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Example 1:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// @param {string} s
// @return {string}

var minRemoveToMakeValid = function(s) {
    const stack = [];
    const toRemove = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                toRemove.add(i);
            } else {
                stack.pop();
            }
        }
    }
    
    // Add unmatched opening parentheses to toRemove set
    while (stack.length > 0) {
        toRemove.add(stack.pop());
    }
    
    // Construct result string excluding characters to remove
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!toRemove.has(i)) {
            result += s[i];
        }
    }
    
    return result;
};

console.log("==========================================")

// 678. Valid Parenthesis String
// Medium
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "(*)"
// Output: true
// Example 3:
// Input: s = "(*))"
// Output: true

// @param {string} s
// @return {boolean}

var checkValidString = function(s) {
    let low = 0; // minimum possible left parentheses count
    let high = 0; // maximum possible left parentheses count

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            low++;
            high++;
        } else if (s[i] === ')') {
            low = Math.max(0, low - 1); // decrement low count if possible
            high--; // decrement high count
        } else { // wildcard '*'
            low = Math.max(0, low - 1); // decrement low count if possible
            high++; // increment high count
        }

        // If the high count becomes negative, it means too many ')' encountered without matching '(',
        // or '*'s are considered as ')' more than the actual count of '('.
        if (high < 0) return false;
    }

    // If low is 0, all open parentheses have been matched.
    return low === 0;
};

console.log("==========================================")

// 1700. Number of Students Unable to Eat Lunch
// Easy
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. 
// All students stand in a queue. Each student either prefers square or circular sandwiches.
// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:
// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack 
// (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). 
// Return the number of students that are unable to eat.
// Example 1:
// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0 
// Explanation:
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
// Hence all students are able to eat.
// Example 2:
// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3

// @param {number[]} students
// @param {number[]} sandwiches
// @return {number}

var countStudents = function(students, sandwiches) {
    let circularCount = students.reduce((acc, curr) => acc + curr, 0);
    let squareCount = students.length - circularCount;
    
    for (let sandwich of sandwiches) {
        if (sandwich === 0) { // Square sandwich
            if (squareCount === 0) return circularCount; // All remaining students prefer circular sandwiches
            squareCount--;
        } else { // Circular sandwich
            if (circularCount === 0) return squareCount; // All remaining students prefer square sandwiches
            circularCount--;
        }
    }
    
    return 0; // All students were able to eat
};

console.log("==========================================")

// 2073. Time Needed to Buy Tickets
// Easy
// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket. 
// A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) 
// in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person at position k (0-indexed) to finish buying tickets.
// Example 1:
// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.
// Example 2:
// Input: tickets = [5,1,1,1], k = 0
// Output: 8
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].
// - In the next 4 passes, only the person in position 0 is buying tickets.
// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.

// @param {number[]} tickets
// @param {number} k
// @return {number}

var timeRequiredToBuy = function(tickets, k) {
    // Create a copy of the tickets array to avoid modifying the original
    const remainingTickets = tickets.slice();
    let totalTime = 0;
    
    // Continue looping until the person at position k has bought all their tickets
    while (remainingTickets[k] > 0) {
        // Loop through each person in the line
        for (let i = 0; i < remainingTickets.length; i++) {
            // If the person has tickets to buy, decrement their tickets and increment the total time
            if (remainingTickets[i] > 0) {
                remainingTickets[i]--;
                totalTime++;
                
                // If this person is at position k and has bought all their tickets, break the loop
                if (i === k && remainingTickets[k] === 0) {
                    break;
                }
            }
        }
    }
    
    return totalTime;
};

console.log("==========================================")

// 950. Reveal Cards In Increasing Order
// Medium
// You are given an integer array deck. 
// There is a deck of cards where every card has a unique integer. 
// The integer on the ith card is deck[i].
// You can order the deck in any order you want. 
// Initially, all the cards start face down (unrevealed) in one deck.
// You will do the following steps repeatedly until all cards are revealed:
// Take the top card of the deck, reveal it, and take it out of the deck.
// If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
// If there are still unrevealed cards, go back to step 1. Otherwise, stop.
// Return an ordering of the deck that would reveal the cards in increasing order.
// Note that the first entry in the answer is considered to be the top of the deck.
// Example 1:
// Input: deck = [17,13,11,2,3,5,7]
// Output: [2,13,3,11,5,17,7]
// Explanation: 
// We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
// After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
// We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
// We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
// We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
// We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
// We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
// We reveal 13, and move 17 to the bottom.  The deck is now [17].
// We reveal 17.
// Since all the cards revealed are in increasing order, the answer is correct.
// Example 2:

// Input: deck = [1,1000]
// Output: [1,1000]

// @param {number[]} deck
// @return {number[]}

function deckRevealedIncreasing(deck) {
    // Sort the deck in descending order (largest card first)
    deck.sort((a, b) => b - a);
  
    // Use an array as the queue (similar to deque)
    const queue = [];
  
    // Iterate through the sorted deck
    for (const card of deck) {
      // Simulate revealing process (move last element to front if queue is not empty)
      if (queue.length > 0) {
        queue.unshift(queue.pop());
      }
  
      // Place current card (largest) at the front
      queue.unshift(card);
    }
  
    // Return the queue (representing the reveal order)
    return queue;
  }

console.log("==========================================")

// 402. Remove K Digits
// Medium
// Given string num representing a non-negative integer num, and an integer k, 
// return the smallest possible integer after removing k digits from num.
// Example 1:
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

// @param {string} num
// @param {number} k
// @return {string}

var removeKdigits = function(num, k) {
    if (k >= num.length) {
        return "0";
    }
    
    const stack = [];
    
    for (let i = 0; i < num.length; i++) {
        const currentDigit = num[i];
        
        // While we can remove elements from the stack (i.e., k > 0)
        // and the current digit is less than the top of the stack,
        // pop the stack to remove a larger digit.
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > currentDigit) {
            stack.pop();
            k--;
        }
        
        // Add the current digit to the stack.
        stack.push(currentDigit);
    }
    
    // Remove the remaining k digits from the end of the stack if k > 0
    stack.splice(stack.length - k, k);
    
    // Join the stack to form the resulting number as a string.
    let result = stack.join("");
    
    // Remove leading zeros
    result = result.replace(/^0+/, "");
    
    // If the result is empty or reduced to an empty string, return "0"
    if (result === "") {
        return "0";
    }
    
    return result;
};

console.log("==========================================")

// 42. Trapping Rain Water
// Hard
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// @param {number[]} height
// @return {number}

var trap = function(height) {
    // Initialize pointers for left and right ends of the array
    let left = 0, right = height.length - 1;
    // Initialize variables to track the maximum height on the left and right sides
    let leftMax = 0, rightMax = 0;
    // Initialize a variable to track the total water trapped
    let waterTrapped = 0;

    // Traverse the array using the two pointers
    while (left < right) {
        if (height[left] < height[right]) {
            // If the height at left is less than the height at right
            // Update the left maximum height
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                // Calculate the water trapped at the current left index
                waterTrapped += leftMax - height[left];
            }
            // Move the left pointer to the right
            left++;
        } else {
            // If the height at right is less than or equal to the height at left
            // Update the right maximum height
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                // Calculate the water trapped at the current right index
                waterTrapped += rightMax - height[right];
            }
            // Move the right pointer to the left
            right--;
        }
    }

    // Return the total amount of water trapped
    return waterTrapped;
};

console.log("==========================================")

// 85. Maximal Rectangle
// Hard
// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// Example 2:
// Input: matrix = [["0"]]
// Output: 0

// Example 3:
// Input: matrix = [["1"]]
// Output: 1
 
// @param {character[][]} matrix
// @return {number}

var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;

    // Initialize heights array with zeros
    const heights = new Array(matrix[0].length).fill(0);
    let maxArea = 0;

    // Iterate through each row
    for (let row = 0; row < matrix.length; row++) {
        // Update heights based on the current row
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === '1') {
                heights[col]++;
            } else {
                heights[col] = 0;
            }
        }
        
        // Calculate the maximum rectangle area using the current heights
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
};

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    let i = 0;
    
    while (i < heights.length) {
        // If the stack is empty or the current height is greater than the stack's top height, push index to stack
        if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
            // Pop the top element and calculate the area
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }
    
    // Final calculation for any remaining elements in the stack
    while (stack.length > 0) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }
    
    return maxArea;
};

console.log("==========================================")

// 404. Sum of Left Leaves
// Easy
// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:
// Input: root = [1]
// Output: 0
 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }


// @param {TreeNode} root
// @return {number}

var sumOfLeftLeaves = function(root) {
    // Initialize sum of left leaves
    let sum = 0;

    // Helper function for depth-first search
    function dfs(node) {
        if (node == null) {
            // If node is null, return
            return;
        }
        
        // Check the left child
        if (node.left) {
            // Check if the left child is a leaf
            if (node.left.left === null && node.left.right === null) {
                // Add the value of the left leaf to the sum
                sum += node.left.val;
            } else {
                // Recurse on the left child
                dfs(node.left);
            }
        }
        
        // Recurse on the right child
        dfs(node.right);
    }

    // Start DFS from the root
    dfs(root);
    
    // Return the sum of left leaves
    return sum;
};

console.log("==========================================")

// 129. Sum Root to Leaf Numbers
// Medium
// You are given the root of a binary tree containing digits from 0 to 9 only.
// Each root-to-leaf path in the tree represents a number.
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
// A leaf node is a node with no children.
// Example 1:
// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:
// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number}

var sumNumbers = function(root) {
    // Initialize total sum as 0
    let totalSum = 0;

    // Helper function to perform DFS traversal
    function dfs(node, currentNumber) {
        // If the node is null, return immediately
        if (node === null) {
            return;
        }

        // Update the current number formed by the path
        currentNumber = currentNumber * 10 + node.val;

        // Check if the current node is a leaf
        if (node.left === null && node.right === null) {
            // Add the current number to total sum
            totalSum += currentNumber;
            return;
        }

        // Recursively traverse left and right children
        dfs(node.left, currentNumber);
        dfs(node.right, currentNumber);
    }

    // Start the DFS traversal from the root with the initial number as 0
    dfs(root, 0);

    // Return the total sum of all root-to-leaf numbers
    return totalSum;
};

console.log("==========================================")

// 623. Add One Row to Tree
// Medium
// Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
// Note that the root node is at depth 1.
// The adding rule is:
// Given the integer depth, for each not null tree node cur at the depth depth - 1, 
// create two tree nodes with value val as cur's left subtree root and right subtree root.
// cur's original left subtree should be the left subtree of the new left subtree root.
// cur's original right subtree should be the right subtree of the new right subtree root.
// If depth == 1 that means there is no depth depth - 1 at all, 
// then create a tree node with value val as the new root of the whole original tree, 
// and the original tree is the new root's left subtree.
// Example 1:
// Input: root = [4,2,6,3,1,5], val = 1, depth = 2
// Output: [4,1,1,2,null,null,6,3,1,5]
// Example 2:
// Input: root = [4,2,null,3,1], val = 1, depth = 3
// Output: [4,2,null,1,1,3,null,null,1]

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} val
// @param {number} depth
// @return {TreeNode}

var addOneRow = function(root, val, depth) {
    // Handle case when depth is 1
    if (depth === 1) {
        // Create a new root node with value val
        const newRoot = new TreeNode(val);
        // Set the original root as the left child of the new root
        newRoot.left = root;
        // Return the new root
        return newRoot;
    }
    
    // Function to traverse the tree recursively
    function traverseAndAdd(node, currentDepth) {
        // Base case: if node is null, return
        if (node === null) {
            return;
        }
        
        // If we are at the depth minus one level, add the new row
        if (currentDepth === depth - 1) {
            // Create new left and right nodes with value val
            const newLeftNode = new TreeNode(val);
            const newRightNode = new TreeNode(val);
            
            // Set the original left and right children as children of new nodes
            newLeftNode.left = node.left;
            newRightNode.right = node.right;
            
            // Attach the new nodes to the current node
            node.left = newLeftNode;
            node.right = newRightNode;
        } else {
            // Otherwise, recursively traverse left and right children
            traverseAndAdd(node.left, currentDepth + 1);
            traverseAndAdd(node.right, currentDepth + 1);
        }
    }
    
    // Start the recursive traversal from the root with depth 1
    traverseAndAdd(root, 1);
    
    // Return the modified root
    return root;
};

console.log("==========================================")

// 988. Smallest String Starting From Leaf
// Medium
// You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.
// Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
// As a reminder, any shorter prefix of a string is lexicographically smaller.
// For example, "ab" is lexicographically smaller than "aba".
// A leaf of a node is a node that has no children.
// Example 1:
// Input: root = [0,1,2,3,4,3,4]
// Output: "dba"
// Example 2:
// Input: root = [25,1,3,1,3,0,2]
// Output: "adz"
// Example 3:
// Input: root = [2,2,1,null,1,0,null,0]
// Output: "abc"

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {string}

var smallestFromLeaf = function(root) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// @param {TreeNode} root
// @return {string}
var smallestFromLeaf = function(root) {
    let smallestString = null;

    function dfs(node, currentPath) {
        // If the node is null, return immediately
        if (!node) {
            return;
        }

        // Prepend the current node's value (converted to a character) to the current path
        currentPath = String.fromCharCode(97 + node.val) + currentPath;

        // If this is a leaf node, check the current path
        if (!node.left && !node.right) {
            // Compare the current path with the smallest path found so far
            if (smallestString === null || currentPath < smallestString) {
                smallestString = currentPath;
            }
            return;
        }

        // Recursively explore left and right children
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    }

    // Start DFS traversal from the root node
    dfs(root, "");

    return smallestString;
};

console.log("==========================================")

// 463. Island Perimeter
// Easy
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). 
// The grid is completely surrounded by water, and there is exactly one island 
// (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
// One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. 
// Determine the perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4
 
// @param {number[][]} grid
// @return {number}

var islandPerimeter = function(grid) {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the cell is land
            if (grid[i][j] === 1) {
                // Check top
                if (i === 0 || grid[i - 1][j] === 0) {
                    perimeter++;
                }
                // Check left
                if (j === 0 || grid[i][j - 1] === 0) {
                    perimeter++;
                }
                // Check bottom
                if (i === rows - 1 || grid[i + 1][j] === 0) {
                    perimeter++;
                }
                // Check right
                if (j === cols - 1 || grid[i][j + 1] === 0) {
                    perimeter++;
                }
            }
        }
    }
    
    return perimeter;
};

console.log("==========================================")

// 200. Number of Islands
// Medium
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// @param {character[][]} grid
// @return {number}

var numIslands = function(grid) {
    // Function to perform Depth-First Search on the grid
    function dfs(grid, row, col) {
        // Check if the current position is within bounds and is land ('1')
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }
        // Mark the current cell as visited by setting it to '0' (water)
        grid[row][col] = '0';
        
        // Recursively visit the adjacent cells in four directions (up, down, left, right)
        dfs(grid, row - 1, col); // Up
        dfs(grid, row + 1, col); // Down
        dfs(grid, row, col - 1); // Left
        dfs(grid, row, col + 1); // Right
    }

    // Initialize the count of islands
    let islandCount = 0;

    // Iterate through each cell in the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // If the cell is land ('1'), start a DFS to mark all connected land cells
            if (grid[row][col] === '1') {
                dfs(grid, row, col);
                // Increment the island count as we've found a new island
                islandCount++;
            }
        }
    }

    // Return the total number of islands found
    return islandCount;
};

console.log("==========================================")

// 1992. Find All Groups of Farmland
// Medium
// You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested land and a 1 represents a hectare of farmland.
// To keep the land organized, there are designated rectangular areas of hectares that consist entirely of farmland.
// These rectangular areas are called groups. No two groups are adjacent, 
// meaning farmland in one group is not four-directionally adjacent to another farmland in a different group.
// land can be represented by a coordinate system where the top left corner of land is (0, 0) 
// and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and bottom right corner of each group of farmland. 
// A group of farmland with a top left corner at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2].
// Return a 2D array containing the 4-length arrays described above for each group of farmland in land. 
// If there are no groups of farmland, return an empty array. You may return the answer in any order.

// Example 1:
// Input: land = [[1,0,0],[0,1,1],[0,1,1]]
// Output: [[0,0,0,0],[1,1,2,2]]
// Explanation:
// The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
// The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].

// Example 2:
// Input: land = [[1,1],[1,1]]
// Output: [[0,0,1,1]]
// Explanation:
// The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].

// Example 3:
// Input: land = [[0]]
// Output: []
// Explanation:
// There are no groups of farmland.

// @param {number[][]} land
// @return {number[][]}

var findFarmland = function(land) {
    const result = [];
    const m = land.length;
    const n = land[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1) {
                let rowEnd = i;
                let colEnd = j;
                
                // Find the bottom right corner of the group
                while (rowEnd < m && land[rowEnd][j] === 1) {
                    colEnd = j;
                    while (colEnd < n && land[rowEnd][colEnd] === 1) {
                        colEnd++;
                    }
                    rowEnd++;
                }
                rowEnd--; // Adjust to the actual bottom row
                
                // Add coordinates to the result
                result.push([i, j, rowEnd, colEnd - 1]);
                
                // Mark the current group as visited
                for (let row = i; row <= rowEnd; row++) {
                    for (let col = j; col <= colEnd - 1; col++) {
                        land[row][col] = 0;
                    }
                }
            }
        }
    }
    
    return result;
};

console.log("==========================================")

// 1971. Find if Path Exists in Graph
// Easy
// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
// The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:


// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.
 
// @param {number} n
// @param {number[][]} edges
// @param {number} source
// @param {number} destination
// @return {boolean}

var validPath = function(n, edges, source, destination) {
    // Create an adjacency list to represent the graph
    const adjacencyList = {};
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        if (!adjacencyList[u]) adjacencyList[u] = [];
        if (!adjacencyList[v]) adjacencyList[v] = [];
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }
    
    // Create a visited array to keep track of visited vertices
    const visited = new Array(n).fill(false);
    
    // Define a DFS function to traverse the graph
    const dfs = (vertex) => {
        // Mark the current vertex as visited
        visited[vertex] = true;
        
        // If the current vertex is the destination, return true
        if (vertex === destination) return true;
        
        // Traverse all adjacent vertices
        for (const neighbor of adjacencyList[vertex]) {
            // If the neighbor vertex has not been visited, recursively call dfs
            if (!visited[neighbor] && dfs(neighbor)) {
                return true;
            }
        }
        
        // If no valid path found from this vertex, backtrack
        return false;
    };
    
    // Start DFS from the source vertex
    return dfs(source);
};

console.log("==========================================")

// 752. Open the Lock
// Medium
// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'.
// The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. 
// Each move consists of turning one wheel one slot.
// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, 
// the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, 
// return the minimum total number of turns required to open the lock, or -1 if it is impossible.

// Example 1:
// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation: 
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".

// Example 2:
// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

// Example 3:
// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation: We cannot reach the target without getting stuck.

// @param {string[]} deadends
// @param {string} target
// @return {number}

var openLock = function(deadends, target) {
    const visited = new Set(deadends);
    const queue = ['0000'];
    let moves = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            
            if (current === target) {
                return moves;
            }
            
            if (visited.has(current)) {
                continue;
            }
            
            visited.add(current);
            
            for (let j = 0; j < 4; j++) {
                const digit = parseInt(current[j]);
                
                for (let diff of [-1, 1]) {
                    const nextDigit = (digit + diff + 10) % 10;
                    const nextCombination = current.slice(0, j) + nextDigit + current.slice(j + 1);
                    
                    if (!visited.has(nextCombination)) {
                        queue.push(nextCombination);
                    }
                }
            }
        }
        
        moves++;
    }
    
    return -1;
};

console.log("==========================================")

// 310. Minimum Height Trees
// Medium
// A tree is an undirected graph in which any two vertices are connected by exactly one path. 
// In other words, any connected graph without simple cycles is a tree.
// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] 
// indicates that there is an undirected edge between the two nodes ai and bi in the tree, 
// you can choose any node of the tree as the root. When you select a node x as the root, 
// the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  
// are called minimum height trees (MHTs).
// Return a list of all MHTs' root labels. You can return the answer in any order.
// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:
// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Example 2:
// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// @param {number} n
// @param {number[][]} edges
// @return {number[]}

var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // Special case when there is only one node
    
    // Step 1: Create adjacency list
    const adjacencyList = new Array(n).fill(null).map(() => []);
    const degrees = new Array(n).fill(0);
    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
        degrees[u]++;
        degrees[v]++;
    }
    
    // Step 2: Initialize queue with leaf nodes
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (degrees[i] === 1) {
            queue.push(i);
        }
    }
    
    // Step 3: Remove leaf nodes iteratively until 1 or 2 nodes remain
    while (n > 2) {
        const size = queue.length;
        n -= size;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (const neighbor of adjacencyList[node]) {
                degrees[neighbor]--;
                if (degrees[neighbor] === 1) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    // Step 4: Remaining nodes in the queue are the roots of MHTs
    return queue;
};

console.log("==========================================")

// 1137. N-th Tribonacci Number
// Easy
// The Tribonacci sequence Tn is defined as follows: 
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:
// Input: n = 25
// Output: 1389537

// @param {number} n
// @return {number}

var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    let dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    
    return dp[n];
};

console.log("==========================================")

// 2370. Longest Ideal Subsequence
// Medium
// You are given a string s consisting of lowercase letters and an integer k. 
// We call a string t ideal if the following conditions are satisfied:
// t is a subsequence of the string s.
// The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.
// Return the length of the longest ideal string.
// A subsequence is a string that can be derived from another string by deleting some or no characters without 
// changing the order of the remaining characters.
// Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order 
// of 'a' and 'z' is 25, not 1.

// Example 1:
// Input: s = "acfgbd", k = 2
// Output: 4
// Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
// Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.

// Example 2:
// Input: s = "abcd", k = 3
// Output: 4
// Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.


// @param {string} s
// @param {number} k
// @return {number}

var longestIdealString = function(s, k) {
    const dp = Array(26).fill(0);

    for (const c of s) {
        const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        dp[i] = 1 + getMaxReachable(dp, i, k);
    }

    return Math.max(...dp);
};

function getMaxReachable(dp, i, k) {
    const first = Math.max(0, i - k);
    const last = Math.min(25, i + k);
    let maxReachable = 0;
    for (let j = first; j <= last; j++) {
        maxReachable = Math.max(maxReachable, dp[j]);
    }
    return maxReachable;
}

console.log("==========================================")

// 514. Freedom Trail
// Hard
// In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the 
// "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door.

// Given a string ring that represents the code engraved on the outer ring and another string key 
// that represents the keyword that needs to be spelled, return the minimum number of steps 
// to spell all the characters in the keyword.

// Initially, the first character of the ring is aligned at the "12:00" direction. 
// You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise 
// to make each character of the string key aligned at the "12:00" direction and then by pressing the center button.

// At the stage of rotating the ring to spell the key character key[i]:

// You can rotate the ring clockwise or anticlockwise by one place, which counts as one step. 
// The final purpose of the rotation is to align one of ring's characters at the "12:00" direction, 
// where this character must equal key[i].
// If the character key[i] has been aligned at the "12:00" direction, press the center button to spell, 
// which also counts as one step. After the pressing, you could begin to spell the next character in the key 
// (next stage). Otherwise, you have finished all the spelling.

// Example 1:
// Input: ring = "godding", key = "gd"
// Output: 4
// Explanation:
// For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
// For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
// Also, we need 1 more step for spelling.
// So the final output is 4.

// Example 2:
// Input: ring = "godding", key = "godding"
// Output: 13


// @param {string} ring
// @param {string} key
// @return {number}

var findRotateSteps = function(ring, key) {
    const memo = new Map(); // Map for memoization
    
    // Helper function to calculate minimum steps
    const minSteps = (ringIndex, keyIndex) => {
        // If all characters in key are spelled
        if (keyIndex === key.length) return 0;
        
        // If result for current indices is already memoized
        const memoKey = ringIndex + '-' + keyIndex;
        if (memo.has(memoKey)) return memo.get(memoKey);
        
        const char = key[keyIndex];
        let min = Infinity;
        
        // Iterate over possible positions on the ring
        for (let i = 0; i < ring.length; i++) {
            if (ring[i] === char) {
                // Calculate steps needed to align current character
                const clockWiseSteps = Math.abs(i - ringIndex);
                const counterClockWiseSteps = ring.length - clockWiseSteps;
                
                // Recursively calculate minimum steps for the next character
                const steps = 1 + Math.min(clockWiseSteps, counterClockWiseSteps) + 
                              minSteps(i, keyIndex + 1);
                
                // Update minimum steps
                min = Math.min(min, steps);
            }
        }
        
        // Memoize the result
        memo.set(memoKey, min);
        return min;
    };
    
    // Call helper function with initial parameters
    return minSteps(0, 0);
};

console.log("==========================================")

// 834. Sum of Distances in Tree
// Hard
// There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

// You are given the integer n and the array edges where edges[i] = [ai, bi] 
// indicates that there is an edge between nodes ai and bi in the tree.

// Return an array answer of length n where answer[i] is the sum of the distances 
// between the ith node in the tree and all other nodes.

// Example 1:
// Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// Output: [8,12,6,10,10,10]
// Explanation: The tree is shown above.
// We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
// equals 1 + 1 + 2 + 2 + 2 = 8.
// Hence, answer[0] = 8, and so on.

// Example 2:
// Input: n = 1, edges = []
// Output: [0]

// Example 3:
// Input: n = 2, edges = [[1,0]]
// Output: [1,1]

// @param {number} n
// @param {number[][]} edges
// @return {number[]}

var sumOfDistancesInTree = function(n, edges) {
    const tree = new Array(n).fill(0).map(() => []);
    const count = new Array(n).fill(1);
    const ans = new Array(n).fill(0);

    // Build the adjacency list representation of the tree
    edges.forEach(([u, v]) => {
        tree[u].push(v);
        tree[v].push(u);
    });

    // Function to perform depth-first search
    const dfs = (node, parent) => {
        for (const child of tree[node]) {
            if (child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
            ans[node] += ans[child] + count[child];
        }
    };

    // Function to calculate the sum of distances for each node
    const calculateDistances = (node, parent) => {
        for (const child of tree[node]) {
            if (child === parent) continue;
            ans[child] = ans[node] - count[child] + (n - count[child]);
            calculateDistances(child, node);
        }
    };

    // Perform the depth-first search from node 0
    dfs(0, -1);
    // Calculate distances for each node
    calculateDistances(0, -1);

    return ans;
};

console.log("==========================================")

// 2997. Minimum Number of Operations to Make Array XOR Equal to K
// Medium
// You are given a 0-indexed integer array nums and a positive integer k.
// You can apply the following operation on the array any number of times:
// Choose any element of the array and flip a bit in its binary representation. 
// Flipping a bit means changing a 0 to 1 or vice versa.
// Return the minimum number of operations required to make the bitwise XOR of all elements 
// of the final array equal to k.
// Note that you can flip leading zero bits in the binary representation of elements. 
// For example, for the number (101)2 you can flip the fourth bit and obtain (1101)2.

// Example 1:
// Input: nums = [2,1,3,4], k = 1
// Output: 2
// Explanation: We can do the following operations:
// - Choose element 2 which is 3 == (011)2, we flip the first bit and we obtain (010)2 == 2. nums becomes [2,1,2,4].
// - Choose element 0 which is 2 == (010)2, we flip the third bit and we obtain (110)2 = 6. nums becomes [6,1,2,4].
// The XOR of elements of the final array is (6 XOR 1 XOR 2 XOR 4) == 1 == k.
// It can be shown that we cannot make the XOR equal to k in less than 2 operations

// Example 2:
// Input: nums = [2,0,2,0], k = 0
// Output: 0
// Explanation: The XOR of elements of the array is (2 XOR 0 XOR 2 XOR 0) == 0 == k. So no operation is needed.

// @param {number[]} nums
// @param {number} k
// @return {number}

var minOperations = function(nums, k) {
    for (const num of nums) {
        k ^= num
      }
      return k.toString(2).replaceAll(/0/g, "").length
};

console.log("==========================================")

// 1915. Number of Wonderful Substrings
// Medium
// A wonderful string is a string where at most one letter appears an odd number of times.
// For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
// Given a string word that consists of the first ten lowercase English letters ('a' through 'j'),
// return the number of wonderful non-empty substrings in word. 
// If the same substring appears multiple times in word, then count each occurrence separately.
// A substring is a contiguous sequence of characters in a string.

// Example 1:
// Input: word = "aba"
// Output: 4
// Explanation: The four wonderful substrings are underlined below:
// - "aba" -> "a"
// - "aba" -> "b"
// - "aba" -> "a"
// - "aba" -> "aba"

// Example 2:
// Input: word = "aabb"
// Output: 9
// Explanation: The nine wonderful substrings are underlined below:
// - "aabb" -> "a"
// - "aabb" -> "aa"
// - "aabb" -> "aab"
// - "aabb" -> "aabb"
// - "aabb" -> "a"
// - "aabb" -> "abb"
// - "aabb" -> "b"
// - "aabb" -> "bb"
// - "aabb" -> "b"

// Example 3:
// Input: word = "he"
// Output: 2
// Explanation: The two wonderful substrings are underlined below:
// - "he" -> "h"
// - "he" -> "e"

// @param {string} word
// @return {number}

var wonderfulSubstrings = function(word) {
    const map = new Map();
    map.set(0, 1);
    let mask = 0;
    let result = 0;
    
    for (const char of word) {
        const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
        mask ^= 1 << charIndex;
        result += map.get(mask) || 0;
        
        for (let i = 0; i < 10; i++) {
            const newMask = mask ^ (1 << i);
            result += map.get(newMask) || 0;
        }
        
        map.set(mask, (map.get(mask) || 0) + 1);
    }
    
    return result;
};

console.log("==========================================")

// 2000. Reverse Prefix of Word
// Easy
// Given a 0-indexed string word and a character ch, 
// reverse the segment of word that starts at index 0 and ends at the index of the first occurrence 
// of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", 
// then you should reverse the segment that starts at 0 and ends at 3 (inclusive). 
// The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

// Example 2:
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

// Example 3:
// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

// @param {string} word
// @param {character} ch
// @return {string}

var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch); // Find the index of the first occurrence of ch
    
    if (index !== -1) { // If ch exists in word
        const prefix = word.substring(0, index + 1); // Extract the substring to be reversed
        const reversedPrefix = prefix.split('').reverse().join(''); // Reverse the substring
        return reversedPrefix + word.substring(index + 1); // Concatenate the reversed prefix with the rest of word
    }
    
    return word; // If ch doesn't exist, return the original word
};

console.log("==========================================")

// 2441. Largest Positive Integer That Exists With Its Negative
// Easy
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

// Example 1:
// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

// Example 2:
// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

// Example 3:
// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.

// @param {number[]} nums
// @return {number}

var findMaxK = function(nums) {
    let maxK = -1;
    const numSet = new Set(nums);

    for (let num of nums) {
        if (num > 0 && numSet.has(-num)) {
            maxK = Math.max(maxK, num);
        }
    }

    return maxK;
};

console.log("==========================================")

// 165. Compare Version Numbers
// Medium
// Given two version numbers, version1 and version2, compare them.
// Version numbers consist of one or more revisions joined by a dot '.'. 
// Each revision consists of digits and may contain leading zeros. 
// Every revision contains at least one character. 
// Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, 
// the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.
// To compare version numbers, compare their revisions in left-to-right order. 
// Revisions are compared using their integer value ignoring any leading zeros. 
// This means that revisions 1 and 001 are considered equal. 
// If a version number does not specify a revision at an index, then treat the revision as 0. For example, 
// version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.
// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.
 

// Example 1:
// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// Example 2:
// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".

// Example 3:
// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.

// @param {string} version1
// @param {string} version2
// @return {number}

var compareVersion = function(version1, version2) {
    const v1Revisions = version1.split('.');
    const v2Revisions = version2.split('.');
    
    const maxLength = Math.max(v1Revisions.length, v2Revisions.length);
    
    for (let i = 0; i < maxLength; i++) {
        const v1Rev = parseInt(v1Revisions[i] || '0');
        const v2Rev = parseInt(v2Revisions[i] || '0');
        
        if (v1Rev < v2Rev) return -1;
        if (v1Rev > v2Rev) return 1;
    }
    
    return 0;
};

console.log("==========================================")

// 881. Boats to Save People
// Medium
// You are given an array people where people[i] is the weight of the ith person, 
// and an infinite number of boats where each boat can carry a maximum weight of limit. 
// Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person.

// Example 1:
// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)

// Example 2:
// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// Example 3:
// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

// @param {number[]} people
// @param {number} limit
// @return {number}

var numRescueBoats = function(people, limit) {
    // Step 1: Sort the array of people
    people.sort((a, b) => a - b);
    
    // Step 2: Initialize pointers and boat count
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    
    // Step 4: Iterate through the array
    while (left <= right) {
        // Step 4a: Check if both people can fit on the boat
        if (people[left] + people[right] <= limit) {
            left++; // Increment left pointer
            right--; // Decrement right pointer
        } else {
            right--; // Decrement right pointer (only one person can fit)
        }
        // Step 5: Increment boat count
        boats++;
    }
    
    // Step 6: Return boat count
    return boats;
};


console.log("==========================================")

// 237. Delete Node in a Linked List
// Medium
// There is a singly-linked list head and we want to delete a node node in it.
// You are given the node to be deleted node. You will not be given access to the first node of head.
// All the values of the linked list are unique, and it is guaranteed 
// that the given node node is not the last node in the linked list.
// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:
// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.
 
// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// @param {ListNode} node
// @return {void} Do not return anything, modify node in-place instead.

var deleteNode = function(node) {
    if (!node || !node.next) return; // Check if the node or its next node is null
    
    // Copy the value of the next node to the current node
    node.val = node.next.val;
    
    // Remove the next node by skipping it
    node.next = node.next.next;
};

console.log("==========================================")

// 2487. Remove Nodes From Linked List
// Medium
// You are given the head of a linked list.
// Remove every node which has a node with a greater value anywhere to the right side of it.
// Return the head of the modified linked list.

// Example 1:
// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.

// Example 2:
// Input: head = [1,1,1,1]
// Output: [1,1,1,1]
// Explanation: Every node has value 1, so no nodes are removed.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var removeNodes = function(head) {
    if (!head) return head;

    let dummy = new ListNode(-1);
    dummy.next = head;
    let current = head;
    let prev = dummy;
    let stack = [];

    while (current) {
        // Traverse the stack and remove nodes with greater values
        while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
            stack.pop();
        }
        // Add the current node to the stack
        stack.push(current);
        // Move to the next node
        current = current.next;
    }

    // Link the nodes from the stack
    prev.next = stack[0];
    for (let i = 0; i < stack.length; i++) {
        stack[i].next = (i + 1 < stack.length) ? stack[i + 1] : null;
    }

    return dummy.next;
};

console.log("==========================================")

// 2816. Double a Number Represented as a Linked List
// Medium
// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.
// Return the head of the linked list after doubling it.

// Example 1:
// Input: head = [1,8,9]
// Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. 
// Hence, the returned linked list represents the number 189 * 2 = 378.

// Example 2:
// Input: head = [9,9,9]
// Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. 
// Hence, the returned linked list reprersents the number 999 * 2 = 1998. 

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

var doubleIt = function(head) {
    // Helper function to reverse a linked list
    const reverseLinkedList = function(node) {
        let prev = null;
        let current = node;
        let next = null;
        
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        return prev;
    };
    
    // Reverse the linked list to simplify carry handling
    let reversedHead = reverseLinkedList(head);
    
    let current = reversedHead;
    let carry = 0;

    while (current !== null) {
        let newVal = current.val * 2 + carry;
        current.val = newVal % 10;
        carry = Math.floor(newVal / 10);
        
        // If there's a carry and no next node, create one
        if (carry > 0 && current.next === null) {
            current.next = new ListNode(carry);
            break;
        }
        
        current = current.next;
    }

    // Reverse the linked list back to its original order
    reversedHead = reverseLinkedList(reversedHead);
    
    return reversedHead;
};
console.log("==========================================")

// 506. Relative Ranks
// Easy
// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. 
// All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest score, 
// the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number 
// (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// @param {number[]} score
// @return {string[]}

var findRelativeRanks = function(score) {
    // Create a copy of the score array and sort it in descending order
    const sortedScores = [...score].sort((a, b) => b - a);
    // Initialize an empty array to store the ranks
    const result = [];

    // Create a map to store the rank for each athlete's score
    const rankMap = new Map();
    // Assign ranks based on position in the sorted array
    for (let i = 0; i < sortedScores.length; i++) {
        if (i === 0) {
            rankMap.set(sortedScores[i], "Gold Medal");
        } else if (i === 1) {
            rankMap.set(sortedScores[i], "Silver Medal");
        } else if (i === 2) {
            rankMap.set(sortedScores[i], "Bronze Medal");
        } else {
            rankMap.set(sortedScores[i], (i + 1).toString());
        }
    }

    // Iterate over the original scores array to get the ranks
    for (let i = 0; i < score.length; i++) {
        result.push(rankMap.get(score[i]));
    }

    return result;
};

console.log("==========================================")

// 3075. Maximize Happiness of Selected Children
// Medium
// You are given an array happiness of length n, and a positive integer k.
// There are n children standing in a queue, where the ith child has happiness value happiness[i]. 
// You want to select k children from these n children in k turns.
// In each turn, when you select a child, the happiness value of all the children that have not been selected till now decreases by 1. 
// Note that the happiness value cannot become negative and gets decremented only if it is positive.
// Return the maximum sum of the happiness values of the selected children you can achieve by selecting k children.

 

// Example 1:

// Input: happiness = [1,2,3], k = 2
// Output: 4
// Explanation: We can pick 2 children in the following way:
// - Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0,1].
// - Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. 
// Note that the happiness value cannot become less than 0.
// The sum of the happiness values of the selected children is 3 + 1 = 4.
// Example 2:

// Input: happiness = [1,1,1,1], k = 2
// Output: 1
// Explanation: We can pick 2 children in the following way:
// - Pick any child with the happiness value == 1. The happiness value of the remaining children becomes [0,0,0].
// - Pick the child with the happiness value == 0. The happiness value of the remaining child becomes [0,0].
// The sum of the happiness values of the selected children is 1 + 0 = 1.
// Example 3:

// Input: happiness = [2,3,4,5], k = 1
// Output: 5
// Explanation: We can pick 1 child in the following way:
// - Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1,2,3].
// The sum of the happiness values of the selected children is 5.

// @param {number[]} happiness
// @param {number} k
// return {number}

var maximumHappinessSum = function(happiness, k) {
    let ans = 0;
    let decremented = 0;

    happiness.sort((a, b) => b - a);

    for (let i = 0; i < k; i++) {
        ans += Math.max(0, happiness[i] - decremented);
        decremented++;
    }

    return ans;
};

console.log("==========================================")

// 786. K-th Smallest Prime Fraction
// Medium
// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique.
// You are also given an integer k.
// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
// Return the kth smallest fraction considered. 
// Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

// Example 1:
// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.

// Example 2:
// Input: arr = [1,7], k = 1
// Output: [1,7]

// @param {number[]} arr
// @param {number} k
// @return {number[]}

var kthSmallestPrimeFraction = function(arr, k) {
    let n = arr.length;
    let ans = [0, 1];
    let l = 0;
    let r = 1;

    while (true) {
        let m = (l + r) / 2;
        ans[0] = 0;
        let count = 0;
        let j = 1;

        for (let i = 0; i < n; i++) {
            while (j < n && arr[i] > m * arr[j]) {
                j += 1;
            }
            count += n - j;
            if (j === n) {
                break;
            }
            if (ans[0] * arr[j] < ans[1] * arr[i]) {
                ans[0] = arr[i];
                ans[1] = arr[j];
            }
        }

        if (count < k) {
            l = m;
        } else if (count > k) {
            r = m;
        } else {
            return ans;
        }
    }
};
console.log("==========================================")

// 857. Minimum Cost to Hire K Workers
// Hard
// There are n workers. You are given two integer arrays quality and wage where quality[i] 
// is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.
// We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:

// Every worker in the paid group must be paid at least their minimum wage expectation.
// In the group, each worker's pay must be directly proportional to their quality. 
// This means if a worker’s quality is double that of another worker in the group, 
// then they must be paid twice as much as the other worker.
// Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. 
// Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input: quality = [10,20,5], wage = [70,50,30], k = 2
// Output: 105.00000
// Explanation: We pay 70 to 0th worker and 35 to 2nd worker.

// Example 2:
// Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
// Output: 30.66667
// Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.

// @param {number[]} quality
// @param {number[]} wage
// @param {number} k
// @return {number}

var mincostToHireWorkers = function(quality, wage, k) {
    const n = quality.length;
    const workers = [];
    
    // Calculate the ratio of wage to quality for each worker
    for (let i = 0; i < n; i++) {
        workers.push([wage[i] / quality[i], quality[i]]);
    }
    
    // Sort workers based on their ratio in ascending order
    workers.sort((a, b) => a[0] - b[0]);
    
    let result = Infinity;
    let totalQuality = 0;
    const heap = new MinHeap();
    
    // Iterate over the sorted workers
    for (let i = 0; i < n; i++) {
        const [ratio, quality] = workers[i];
        
        // Add quality to the total quality
        totalQuality += quality;
        heap.insert(quality);
        
        // If the group size exceeds k, remove the worker with the highest quality
        if (heap.size() > k) {
            totalQuality -= heap.extractMax(); // Corrected to extractMax
        }
        
        // If the group size reaches k, calculate total wage and update result if needed
        if (heap.size() === k) {
            result = Math.min(result, totalQuality * ratio);
        }
    }
    
    return result;
};

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    extractMax() { // Corrected to extractMax
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element > parent) { // Corrected to compare values directly
                this.heap[parentIndex] = element;
                this.heap[index] = parent;
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild > element) { // Corrected to compare values directly
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || // Corrected to compare values directly
                    (swap !== null && rightChild > leftChild) // Corrected to compare values directly
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}


console.log("==========================================")

// 2373. Largest Local Values in a Matrix
// Easy
// You are given an n x n integer matrix grid.
// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
// Return the generated matrix.

// Example 1:
// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

// Example 2:
// Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
// Output: [[2,2,2],[2,2,2],[2,2,2]]
// Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.

// @param {number[][]} grid
// @return {number[][]}

var largestLocal = function(grid) {
    const n = grid.length;
    const maxLocal = [];
    
    // Iterate through the grid, skipping the first and last rows and columns
    for (let i = 1; i < n - 1; i++) {
        const row = [];
        for (let j = 1; j < n - 1; j++) {
            let max = Number.MIN_SAFE_INTEGER;
            // Iterate over the 3x3 submatrix centered at grid[i][j]
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    max = Math.max(max, grid[x][y]);
                }
            }
            row.push(max);
        }
        maxLocal.push(row);
    }
    
    return maxLocal;
};

console.log("==========================================")

// 861. Score After Flipping Matrix
// Medium
// You are given an m x n binary matrix grid.
// A move consists of choosing any row or column and toggling each value in that row or column 
// (i.e., changing all 0's to 1's, and all 1's to 0's).
// Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
// Return the highest possible score after making any number of moves (including zero moves).

// Example 1:
// Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

// Example 2:
// Input: grid = [[0]]
// Output: 1

// @param {number[][]} grid
// @return {number}

var matrixScore = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Step 1: Ensure all rows begin with a 1
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 0) {
            // If the first element of the row is 0, flip the row
            for (let j = 0; j < cols; j++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Step 2: Ensure all columns have more 1s than 0s
    for (let j = 1; j < cols; j++) {
        let countOnes = 0;
        for (let i = 0; i < rows; i++) {
            countOnes += grid[i][j];
        }
        // If the column has more 0s than 1s, flip the column
        if (countOnes < rows / 2) {
            for (let i = 0; i < rows; i++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Step 3: Calculate the score
    let score = 0;
    for (let i = 0; i < rows; i++) {
        let rowVal = parseInt(grid[i].join(''), 2);
        score += rowVal;
    }
    return score;
};

console.log("==========================================")

// 1219. Path with Maximum Gold
// Medium
// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
// Return the maximum amount of gold you can collect under the conditions:
// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

// Example 1:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// Example 2:
// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

// @param {number[][]} grid
// @return {number}

var getMaximumGold = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxGold = 0;

    const dfs = (row, col, currentGold) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            // Out of bounds or no gold in this cell
            maxGold = Math.max(maxGold, currentGold);
            return;
        }

        const goldInCurrentCell = grid[row][col];
        const originalValue = goldInCurrentCell;

        // Mark this cell as visited by changing its value to 0 temporarily
        grid[row][col] = 0;

        // Explore all four directions
        dfs(row + 1, col, currentGold + originalValue); // Down
        dfs(row - 1, col, currentGold + originalValue); // Up
        dfs(row, col + 1, currentGold + originalValue); // Right
        dfs(row, col - 1, currentGold + originalValue); // Left

        // Restore the original value of the cell
        grid[row][col] = originalValue;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== 0) {
                // Start DFS from each cell with nonzero gold
                dfs(i, j, 0);
            }
        }
    }

    return maxGold;
};

console.log("==========================================")

// 2812. Find the Safest Path in a Grid
// Medium
// You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:
// A cell containing a thief if grid[r][c] = 1
// An empty cell if grid[r][c] = 0
// You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.
// The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.
// Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).
// An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.
// The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

// Example 1:
// Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
// Output: 0
// Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).

// Example 2:
// Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.

// Example 3:
// Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
// - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.

// @param {number[][]} grid
// @return {number}

class UnionFind {
    constructor(n) {
        this.n = n;
        this.p = Array(n)
            .fill(0)
            .map((_, i) => i);
    }

    find(x) {
        if (this.p[x] !== x) {
            this.p[x] = this.find(this.p[x]);
        }
        return this.p[x];
    }

    union(a, b) {
        const pa = this.find(a);
        const pb = this.find(b);
        if (pa !== pb) {
            this.p[pa] = pb;
            this.n--;
            return true;
        }
        return false;
    }
}

function maximumSafenessFactor(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return 0;
    }
    const q = [];
    const inf = 1 << 30;
    const dist = Array(n)
        .fill(0)
        .map(() => Array(n).fill(inf));
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    const dirs = [-1, 0, 1, 0, -1];
    while (q.length) {
        const [i, j] = q.shift();
        for (let k = 0; k < 4; ++k) {
            const [x, y] = [i + dirs[k], j + dirs[k + 1]];
            if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] === inf) {
                dist[x][y] = dist[i][j] + 1;
                q.push([x, y]);
            }
        }
    }
    const t = [];
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            t.push([dist[i][j], i, j]);
        }
    }
    t.sort((a, b) => b[0] - a[0]);
    const uf = new UnionFind(n * n);
    for (const [d, i, j] of t) {
        for (let k = 0; k < 4; ++k) {
            const [x, y] = [i + dirs[k], j + dirs[k + 1]];
            if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] >= d) {
                uf.union(i * n + j, x * n + y);
            }
        }
        if (uf.find(0) === uf.find(n * n - 1)) {
            return d;
        }
    }
    return 0;
}

console.log("==========================================")

// 2331. Evaluate Boolean Binary Tree
// Easy
// You are given the root of a full binary tree with the following properties:
// Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
// Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
// The evaluation of a node is as follows:
// If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
// Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
// Return the boolean result of evaluating the root node.
// A full binary tree is a binary tree where each node has either 0 or 2 children.
// A leaf node is a node that has zero children.

// Example 1:
// Input: root = [2,1,3,null,null,0,1]
// Output: true
// Explanation: The above diagram illustrates the evaluation process.
// The AND node evaluates to False AND True = False.
// The OR node evaluates to True OR False = True.
// The root node evaluates to True, so we return true.

// Example 2:
// Input: root = [0]
// Output: false
// Explanation: The root node is a leaf node and it evaluates to false, so we return false.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {boolean}

var evaluateTree = function(root) {
    // Base case: if the node is null, return false
    if (!root) {
        return false;
    }
    
    // If the node is a leaf, return its boolean value
    if (!root.left && !root.right) {
        return root.val === 1;
    }
    
    // Recursively evaluate the left and right subtrees
    const leftValue = evaluateTree(root.left);
    const rightValue = evaluateTree(root.right);
    
    // Apply the boolean operation based on the node's value
    if (root.val === 2) { // OR operation
        return leftValue || rightValue;
    } else if (root.val === 3) { // AND operation
        return leftValue && rightValue;
    }
    
    return false; // Default case
};


console.log("==========================================")

// 1325. Delete Leaves With a Given Value
// Medium
// Given a binary tree root and an integer target, delete all the leaf nodes with value target.
// Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, 
// it should also be deleted (you need to continue doing that until you cannot).

// Example 1:
// Input: root = [1,2,3,2,null,2,4], target = 2
// Output: [1,null,3,null,4]
// Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
// After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).

// Example 2:
// Input: root = [1,3,3,3,2], target = 3
// Output: [1,3,null,null,2]

// Example 3:
// Input: root = [1,2,null,2,null,2], target = 2
// Output: [1]
// Explanation: Leaf nodes in green with value (target = 2) are removed at each step.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} target
// @return {TreeNode}

var removeLeafNodes = function(root, target) {
    // Helper function to recursively remove target leaf nodes
    function removeLeaf(node) {
        if (node === null) {
            return null;
        }

        // Recursively process left and right subtrees
        node.left = removeLeaf(node.left);
        node.right = removeLeaf(node.right);

        // If the current node is a leaf and its value is equal to the target, remove it
        if (node.left === null && node.right === null && node.val === target) {
            return null;
        }

        return node;
    }

    // Call the helper function with the root node
    return removeLeaf(root);
};

console.log("==========================================")

// 979. Distribute Coins in Binary Tree
// Medium
// You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. T
// here are n coins in total throughout the whole tree.
// In one move, we may choose two adjacent nodes and move one coin from one node to another. 
// A move may be from parent to child, or from child to parent.
// Return the minimum number of moves required to make every node have exactly one coin.

// Example 1:
// Input: root = [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

// Example 2:
// Input: root = [0,3,0]
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root [taking two moves]. 
// Then, we move one coin from the root of the tree to the right child.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number}

var distributeCoins = function(root) {
    let moves = 0;

    // Helper function to recursively balance the coins
    function balance(node) {
        if (node === null) {
            return 0;
        }

        // Recursively balance the left and right subtrees
        let left = balance(node.left);
        let right = balance(node.right);

        // The number of coins to be moved from the current node is the excess coins it has
        // which is total coins - 1 (since each node should have exactly one coin)
        let excess = node.val + left + right - 1;

        // Increment the number of moves by the absolute value of excess coins
        moves += Math.abs(excess);

        // Return the excess coins for the parent node to handle
        return excess;
    }

    // Call the helper function with the root node
    balance(root);

    return moves;
};

console.log("==========================================")

// 3068. Find the Maximum Sum of Node Values
// Hard
// There exists an undirected tree with n nodes numbered 0 to n - 1. 
// You are given a 0-indexed 2D integer array edges of length n - 1, 
// where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the tree. 
// You are also given a positive integer k, and a 0-indexed array of non-negative integers nums of length n, where nums[i] represents the value of the node numbered i.
// Alice wants the sum of values of tree nodes to be maximum, 
// for which Alice can perform the following operation any number of times (including zero) on the tree:
// Choose any edge [u, v] connecting the nodes u and v, and update their values as follows:
// nums[u] = nums[u] XOR k
// nums[v] = nums[v] XOR k
// Return the maximum possible sum of the values Alice can achieve by performing the operation any number of times.

// Example 1:
// Input: nums = [1,2,1], k = 3, edges = [[0,1],[0,2]]
// Output: 6
// Explanation: Alice can achieve the maximum sum of 6 using a single operation:
// - Choose the edge [0,2]. nums[0] and nums[2] become: 1 XOR 3 = 2, and the array nums becomes: [1,2,1] -> [2,2,2].
// The total sum of values is 2 + 2 + 2 = 6.
// It can be shown that 6 is the maximum achievable sum of values.

// Example 2:
// Input: nums = [2,3], k = 7, edges = [[0,1]]
// Output: 9
// Explanation: Alice can achieve the maximum sum of 9 using a single operation:
// - Choose the edge [0,1]. nums[0] becomes: 2 XOR 7 = 5 and nums[1] become: 3 XOR 7 = 4, and the array nums becomes: [2,3] -> [5,4].
// The total sum of values is 5 + 4 = 9.
// It can be shown that 9 is the maximum achievable sum of values.

// Example 3:
// Input: nums = [7,7,7,7,7,7], k = 3, edges = [[0,1],[0,2],[0,3],[0,4],[0,5]]
// Output: 42
// Explanation: The maximum achievable sum is 42 which can be achieved by Alice performing no operations.

// @param {number[]} nums
// @param {number} k
// @param {number[][]} edges
// @return {number}

var maximumValueSum = function(nums, k, edges) {
    // Calculate the maximum possible sum
    let maxSum = nums.reduce((sum, num) => sum + Math.max(num, num ^ k), 0);
    
    // Count how many nodes are better off with their XORed value
    let changedCount = nums.reduce((count, num) => count + ((num ^ k) > num ? 1 : 0), 0);
    
    // If the number of changes is even, return the maximum sum
    if (changedCount % 2 === 0) {
        return maxSum;
    }
    
    // Find the minimum change difference
    let minChangeDiff = Math.min(...nums.map(num => Math.abs(num - (num ^ k))));
    
    // Adjust the sum if the number of changes is odd
    return maxSum - minChangeDiff;
};


console.log("==========================================")

// 1863. Sum of All Subset XOR Totals
// Easy
// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums. 
// Note: Subsets with the same elements should be counted multiple times.
// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// Example 1:
// Input: nums = [1,3]
// Output: 6
// Explanation: The 4 subsets of [1,3] are:
// - The empty subset has an XOR total of 0.
// - [1] has an XOR total of 1.
// - [3] has an XOR total of 3.
// - [1,3] has an XOR total of 1 XOR 3 = 2.
// 0 + 1 + 3 + 2 = 6

// Example 2:
// Input: nums = [5,1,6]
// Output: 28
// Explanation: The 8 subsets of [5,1,6] are:
// - The empty subset has an XOR total of 0.
// - [5] has an XOR total of 5.
// - [1] has an XOR total of 1.
// - [6] has an XOR total of 6.
// - [5,1] has an XOR total of 5 XOR 1 = 4.
// - [5,6] has an XOR total of 5 XOR 6 = 3.
// - [1,6] has an XOR total of 1 XOR 6 = 7.
// - [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
// 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

// Example 3:
// Input: nums = [3,4,5,6,7,8]
// Output: 480
// Explanation: The sum of all XOR totals for every subset is 480.

// @param {number[]} nums
// @return {number}

var subsetXORSum = function(nums) {
    let totalSum = 0;

    const helper = (index, currentXOR) => {
        if (index === nums.length) {
            totalSum += currentXOR;
            return;
        }

        // Exclude the current element
        helper(index + 1, currentXOR);
        
        // Include the current element
        helper(index + 1, currentXOR ^ nums[index]);
    };

    // Start the recursive process
    helper(0, 0);

    return totalSum;
};

console.log("==========================================")

// 78. Subsets
// Medium
// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

// @param {number[]} nums
// @return {number[][]}

var subsets = function(nums) {
    const result = [];

    const backtrack = (start, currentSubset) => {
        // Add the current subset to the result
        result.push([...currentSubset]);

        for (let i = start; i < nums.length; i++) {
            // Include the current element
            currentSubset.push(nums[i]);

            // Recur with the current element included
            backtrack(i + 1, currentSubset);

            // Backtrack by removing the current element
            currentSubset.pop();
        }
    };

    // Start the backtracking process
    backtrack(0, []);

    return result;
};

console.log("==========================================")

// 131. Palindrome Partitioning
// Medium
// Given a string s, partition s such that every  substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

// @param {string} s
// @return {string[][]}

var partition = function(s) {
    const results = [];
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    const backtrack = (currentPartition, startIndex) => {
        if (startIndex === s.length) {
            results.push(currentPartition.slice()); // Add a copy of currentPartition
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            const subString = s.substring(startIndex, i + 1);
                if (isPalindrome(subString)) {
                    currentPartition.push(subString);
                    backtrack(currentPartition, i + 1);
                    currentPartition.pop(); // Backtrack by removing the substring
                }
        }
    };

    backtrack([], 0);
    return results;
};

console.log("==========================================")

// 2597. The Number of Beautiful Subsets
// Medium
// You are given an array nums of positive integers and a positive integer k.
// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.
// Return the number of non-empty beautiful subsets of the array nums.
// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. 
// Two subsets are different if and only if the chosen indices to delete are different.

// Example 1:
// Input: nums = [2,4,6], k = 2
// Output: 4
// Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// It can be proved that there are only 4 beautiful subsets in the array [2,4,6].

// Example 2:
// Input: nums = [1], k = 1
// Output: 1
// Explanation: The beautiful subset of the array nums is [1].
// It can be proved that there is only 1 beautiful subset in the array [1].

// @param {number[]} nums
// @param {number} k
// @return {number}

var beautifulSubsets = function(nums, k) {
    let result = 0;

    const backtrack = (index, subset, freq) => {
        if (subset.length > 0) {
            result++;
        }
        for (let i = index; i < nums.length; i++) {
            let num = nums[i];
            if (!freq[num - k] && !freq[num + k]) {
                subset.push(num);
                freq[num] = (freq[num] || 0) + 1;
                backtrack(i + 1, subset, freq);
                freq[num]--;
                subset.pop();
            }
        }
    };

    backtrack(0, [], {});
    return result;
};

console.log("==========================================")

// 1255. Maximum Score Words Formed by Letters
// Hard
// Given a list of words, list of  single letters (might be repeating) and score of every character.
// Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).
// It is not necessary to use all characters in letters and each letter can only be used once. 
// Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

// Example 1:
// Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
// Output: 23
// Explanation:
// Score  a=1, c=9, d=5, g=3, o=2
// Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
// Words "dad" and "dog" only get a score of 21.

// Example 2:
// Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
// Output: 27
// Explanation:
// Score  a=4, b=4, c=4, x=5, z=10
// Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
// Word "xxxz" only get a score of 25.

// Example 3:
// Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
// Output: 0
// Explanation:
// Letter "e" can only be used once.

// @param {string[]} words
// @param {character[]} letters
// @param {number[]} score
// @return {number}

var maxScoreWords = function(words, letters, score) {
    // Step 1: Create a frequency map for the letters
    const letterCount = Array(26).fill(0);
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 97]++;
    }

    // Step 2: Calculate the score and letter frequency for each word
    const wordScores = [];
    const wordLetters = [];
    for (let word of words) {
        let wordScore = 0;
        const currentWordLetterCount = Array(26).fill(0);
        for (let letter of word) {
            let index = letter.charCodeAt(0) - 97;
            wordScore += score[index];
            currentWordLetterCount[index]++;
        }
        wordScores.push(wordScore);
        wordLetters.push(currentWordLetterCount);
    }

    // Step 3: Backtracking function to explore all combinations
    function backtrack(index, currentLetterCount) {
        if (index === words.length) {
            return 0;
        }

        // Option 1: Skip the current word
        let maxScore = backtrack(index + 1, currentLetterCount);

        // Option 2: Include the current word if possible
        let canIncludeWord = true;
        for (let i = 0; i < 26; i++) {
            if (wordLetters[index][i] > currentLetterCount[i]) {
                canIncludeWord = false;
                break;
            }
        }

        if (canIncludeWord) {
            for (let i = 0; i < 26; i++) {
                currentLetterCount[i] -= wordLetters[index][i];
            }
            maxScore = Math.max(maxScore, wordScores[index] + backtrack(index + 1, currentLetterCount));
            for (let i = 0; i < 26; i++) {
                currentLetterCount[i] += wordLetters[index][i];
            }
        }

        return maxScore;
    }

    // Step 4: Start backtracking from the first word
    return backtrack(0, letterCount);
};
console.log("==========================================")

// 140. Word Break II
// Hard
// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. 
// Return all such possible sentences in any order.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Example 2:
// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []

// @param {string} s
// @param {string[]} wordDict
// @return {string[]}

var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = {};

    const backtrack = (start) => {
        if (start in memo) return memo[start];
        if (start === s.length) return [''];

        const result = [];
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const subSentences = backtrack(end);
                for (const subSentence of subSentences) {
                    const space = subSentence.length > 0 ? ' ' : '';
                    result.push(word + space + subSentence);
                }
            }
        }
        memo[start] = result;
        return result;
    };

    return backtrack(0);
};

console.log("==========================================")

// 552. Student Attendance Record II
// Hard
// An attendance record for a student can be represented as a string where each character signifies whether the student was absent, 
// late, or present on that day. The record only contains the following three characters:
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// Any student is eligible for an attendance award if they meet both of the following criteria:
// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

// Example 1:
// Input: n = 2
// Output: 8
// Explanation: There are 8 records with length 2 that are eligible for an award:
// "PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
// Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).

// Example 2:
// Input: n = 1
// Output: 3

// Example 3:
// Input: n = 10101
// Output: 183236316

// @param {number} n
// @return {number}

var checkRecord = function(n) {
    const MOD = 1000000007;

    // Initialize DP arrays for sequences without 'A'
    let P = Array(n + 1).fill(0);
    let PL = Array(n + 1).fill(0);
    let PLL = Array(n + 1).fill(0);

    // Initialize DP arrays for sequences with exactly one 'A'
    let PA = Array(n + 1).fill(0);
    let PLA = Array(n + 1).fill(0);
    let PLLA = Array(n + 1).fill(0);

    // Base case: Length 0 sequence (1 way, the empty sequence)
    P[0] = 1;
    PL[0] = 0;
    PLL[0] = 0;

    PA[0] = 0;
    PLA[0] = 0;
    PLLA[0] = 0;

    // Base case: Length 1 sequences
    P[1] = 1; // "P"
    PL[1] = 1; // "L"
    PLL[1] = 0; // "LL" is not valid for length 1

    PA[1] = 1; // "A"
    PLA[1] = 0; // "LA" is not valid for length 1
    PLLA[1] = 0; // "LLA" is not valid for length 1

    for (let i = 2; i <= n; i++) {
        P[i] = (P[i - 1] + PL[i - 1] + PLL[i - 1]) % MOD;
        PL[i] = P[i - 1] % MOD;
        PLL[i] = PL[i - 1] % MOD;

        PA[i] = (PA[i - 1] + PLA[i - 1] + PLLA[i - 1] + P[i - 1] + PL[i - 1] + PLL[i - 1]) % MOD;
        PLA[i] = PA[i - 1] % MOD;
        PLLA[i] = PLA[i - 1] % MOD;
    }

    let result = (P[n] + PL[n] + PLL[n] + PA[n] + PLA[n] + PLLA[n]) % MOD;

    return result;
};

console.log("==========================================")

// 1608. Special Array With X Elements Greater Than or Equal X
// Easy
// You are given an array nums of non-negative integers. 
// nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
// Notice that x does not have to be an element in nums.
// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

// Example 1:
// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

// Example 2:
// Input: nums = [0,0]
// Output: -1
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums

// Example 3:
// Input: nums = [0,4,3,0,4]
// Output: 3
// Explanation: There are 3 values that are greater than or equal to 3.

// @param {number[]} nums
// @return {number}

var specialArray = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array in ascending order.
    
    for (let x = 0; x <= nums.length; x++) { // Step 2: Iterate through possible values of x from 0 to nums.length.
        // Step 3: Count how many numbers in nums are greater than or equal to x.
        let count = nums.filter(num => num >= x).length;
        
        // Step 4: Check if the count equals x.
        if (count === x) {
            return x;
        }
    }
    
    return -1; // If no such x is found, return -1.
};

console.log("==========================================")

// 1208. Get Equal Substrings Within Budget
// Medium
// You are given two strings s and t of the same length and an integer maxCost.
// You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| 
// (i.e., the absolute difference between the ASCII values of the characters).
// Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. 
// If there is no substring from s that can be changed to its corresponding substring from t, return 0.

// Example 1:
// Input: s = "abcd", t = "bcdf", maxCost = 3
// Output: 3
// Explanation: "abc" of s can change to "bcd".
// That costs 3, so the maximum length is 3.

// Example 2:
// Input: s = "abcd", t = "cdef", maxCost = 3
// Output: 1
// Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.

// Example 3:
// Input: s = "abcd", t = "acde", maxCost = 0
// Output: 1
// Explanation: You cannot make any change, so the maximum length is 1.

// @param {string} s
// @param {string} t
// @param {number} maxCost
// @return {number}

var equalSubstring = function(s, t, maxCost) {
    let left = 0;
    let currentCost = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        currentCost += Math.abs(s[right].charCodeAt() - t[right].charCodeAt());

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log("==========================================")

// 1404. Number of Steps to Reduce a Number in Binary Representation to One
// Medium
// Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:
// If the current number is even, you have to divide it by 2.
// If the current number is odd, you have to add 1 to it.
// It is guaranteed that you can always reach one for all test cases.

// Example 1:
// Input: s = "1101"
// Output: 6
// Explanation: "1101" corressponds to number 13 in their decimal representation.
// Step 1) 13 is odd, add 1 and obtain 14. 
// Step 2) 14 is even, divide by 2 and obtain 7.
// Step 3) 7 is odd, add 1 and obtain 8.
// Step 4) 8 is even, divide by 2 and obtain 4.  
// Step 5) 4 is even, divide by 2 and obtain 2. 
// Step 6) 2 is even, divide by 2 and obtain 1.  

// Example 2:
// Input: s = "10"
// Output: 1
// Explanation: "10" corressponds to number 2 in their decimal representation.
// Step 1) 2 is even, divide by 2 and obtain 1.  

// Example 3:
// Input: s = "1"
// Output: 0

// @param {string} s
// @return {number}

var numSteps = function(s) {
    let steps = 0;
    let carry = 0;
    
    // Start from the least significant bit and move left
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === '1') {
            if (carry === 1) {
                steps += 1; // We are already in the "add 1" scenario, so just count the step
            } else {
                carry = 1; // Set carry because adding 1 to a 1 gives us 10 (binary)
                steps += 2; // One for adding 1 (making it even), another for dividing by 2
            }
        } else {
            if (carry === 1) {
                steps += 2; // We are in a carry scenario, 0 + 1 = 1 (make it odd and add 1 more step)
            } else {
                steps += 1; // Just divide by 2 (remove the trailing 0)
            }
        }
    }
    
    // Finally, if there's still a carry left, it means we have to account for it
    if (carry === 1) {
        steps += 1;
    }
    
    return steps;
};

console.log("==========================================")

// 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// Medium
// Given an array of integers arr.
// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
// Let's define a and b as follows:
// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.
// Return the number of triplets (i, j and k) Where a == b.

// Example 1:
// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

// Example 2:
// Input: arr = [1,1,1,1,1]
// Output: 10

// @param {number[]} arr
// @return {number}

var countTriplets = function(arr) {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; ++i) {
        let xor = 0;
        for (let k = i; k < n; ++k) {
            xor ^= arr[k];
            if (xor === 0 && k > i) {
                count += (k - i);
            }
        }
    }

    return count;
};

console.log("==========================================")

// 260. Single Number III
// Medium
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
// Find the two elements that appear only once. You can return the answer in any order.
// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

// @param {number[]} nums
// @return {number[]}

var singleNumber = function(nums) {
    // Step 1: XOR all numbers to find xor of the two unique numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // Step 2: Find a set bit (rightmost set bit) in the xor result
    let setBit = xor & -xor;

    // Step 3: Partition numbers into two groups and XOR within each group
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        if ((num & setBit) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};

console.log("==========================================")

// 3110. Score of a String
// Easy
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s.

// Example 1:
// Input: s = "hello"
// Output: 13
// Explanation:
// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:
// Input: s = "zaz"
// Output: 50
// Explanation:
// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

// @param {string} s
// @return {number}

var scoreOfString = function(s) {
    let score = 0;
    
    for (let i = 1; i < s.length; i++) {
        let diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        score += diff;
    }
    
    return score;
};

console.log("==========================================")

// 344. Reverse String
// Easy
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// @param {character[]} s
// @return {void} Do not return anything, modify s in-place instead.

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap the elements at left and right
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move the pointers towards each other
        left++;
        right--;
    }
};

console.log("==========================================")

// 2486. Append Characters to String to Make Subsequence
// Medium
// You are given two strings s and t consisting of only lowercase English letters.
// Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.
// A subsequence is a string that can be derived from another string by deleting some 
// or no characters without changing the order of the remaining characters.

// Example 1:
// Input: s = "coaching", t = "coding"
// Output: 4
// Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
// Now, t is a subsequence of s ("coachingding").
// It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

// Example 2:
// Input: s = "abcde", t = "a"
// Output: 0
// Explanation: t is already a subsequence of s ("abcde").

// Example 3:
// Input: s = "z", t = "abcde"
// Output: 5
// Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
// Now, t is a subsequence of s ("zabcde").
// It can be shown that appending any 4 characters to the end of s will never make t a subsequence.

// @param {string} s
// @param {string} t
// @return {number}

var appendCharacters = function(s, t) {
    let tIndex = 0;  // Pointer for string t

    // Iterate through string s
    for (let i = 0; i < s.length; i++) {
        if (tIndex < t.length && s[i] === t[tIndex]) {
            tIndex++;  // Move to the next character in t
        }
    }

    // The remaining characters in t (that weren't matched) need to be appended to s
    return t.length - tIndex;
};

console.log("==========================================")

// 409. Longest Palindrome
// Easy
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// @param {string} s
// @return {number}

var longestPalindrome = function(s) {
    // Create a map to store the frequency of each character
    const charCount = new Map();
    
    // Count the frequency of each character in the string
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let length = 0;
    let hasOddCount = false;
    
    // Calculate the length of the longest palindrome
    for (const count of charCount.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; // Use the even part
            hasOddCount = true; // Track that we have at least one odd count
        }
    }
    
    // If there is any character with an odd count, we can place one in the center
    if (hasOddCount) {
        length += 1;
    }
    
    return length;
};

console.log("==========================================")

// 1002. Find Common Characters
// Easy
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). 
// You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// @param {string[]} words
// @return {string[]}

var commonChars = function(words) {
     // Initialize an array to keep track of the minimum frequency of each character
     let minFreq = Array(26).fill(Infinity);

     // Function to count character frequency in a word
     const countChars = (word) => {
         let freq = Array(26).fill(0);
         for (let char of word) {
             freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
         }
         return freq;
     };
 
     // Update the minFreq array based on the frequencies in each word
     for (let word of words) {
         let wordFreq = countChars(word);
         for (let i = 0; i < 26; i++) {
             minFreq[i] = Math.min(minFreq[i], wordFreq[i]);
         }
     }
 
     // Construct the result array based on the minFreq array
     let result = [];
     for (let i = 0; i < 26; i++) {
         for (let j = 0; j < minFreq[i]; j++) {
             result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
         }
     }
 
     return result;
};

console.log("==========================================")

// 846. Hand of Straights
// Medium
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, 
// and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, 
// return true if she can rearrange the cards, or false otherwise.

// Example 1:

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// @param {number[]} hand
// @param {number} groupSize
// @return {boolean}

var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false; // Early return if the hand cannot be evenly divided into groups

    // Frequency count of each card
    let cardCount = {};
    for (let card of hand) {
        if (cardCount[card] == null) {
            cardCount[card] = 0;
        }
        cardCount[card]++;
    }

    // Sorted unique cards
    let sortedCards = Object.keys(cardCount).map(Number).sort((a, b) => a - b);

    // Try to form groups
    for (let card of sortedCards) {
        while (cardCount[card] > 0) {
            for (let i = 0; i < groupSize; i++) {
                let currentCard = card + i;
                if (cardCount[currentCard] == null || cardCount[currentCard] === 0) {
                    return false;
                }
                cardCount[currentCard]--;
            }
        }
    }

    return true;
};

console.log("==========================================")

// 648. Replace Words
// In English, we have a concept called root, which can be followed by some other word to form another longer word - 
// let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, 
// replace all the derivatives in the sentence with the root forming it. 
// If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

// Example 1:
// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

// Example 2:
// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"

// @param {string[]} dictionary
// @param {string} sentence
// @return {string}

var replaceWords = function(dictionary, sentence) {
    // Sort the dictionary by length of the roots
    dictionary.sort((a, b) => a.length - b.length);
    // Split the sentence into words
    let words = sentence.split(' ');
    // Process each word
    for (let i = 0; i < words.length; i++) {
        for (let root of dictionary) {
            // Check if the word starts with the root
            if (words[i].startsWith(root)) {
                // Replace the word with the root
                words[i] = root;
                break;  // No need to check further roots
            }
        }
    }
    // Join the words back into a sentence
    return words.join(' ');
};

console.log("==========================================")

// 523. Continuous Subarray Sum
// Medium
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
// A good subarray is a subarray where:
// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:
// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

// Example 1:
// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

// Example 2:
// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

// Example 3:
// Input: nums = [23,2,6,4,7], k = 13
// Output: false

// @param {number[]} nums
// @param {number} k
// @return {boolean}

var checkSubarraySum = function(nums, k) {
    let modMap = new Map();
    modMap.set(0, -1); // Initialize with mod 0 at index -1 to handle cases where subarray starts from index 0
    let cumSum = 0;

    for (let i = 0; i < nums.length; i++) {
        cumSum += nums[i];
        let mod = cumSum % k;

        // Ensure the mod is non-negative
        if (mod < 0) {
            mod += k;
        }

        if (modMap.has(mod)) {
            // If we have seen this mod before, check the subarray length
            if (i - modMap.get(mod) > 1) {
                return true;
            }
        } else {
            // Store the first occurrence of this mod
            modMap.set(mod, i);
        }
    }

    return false;
};


console.log("==========================================")

// 974. Subarray Sums Divisible by K
// Medium
// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:
// Input: nums = [5], k = 9
// Output: 0

// @param {number[]} nums
// @param {number} k
// @return {number}

var subarraysDivByK = function(nums, k) {
    let count = 0;
    let prefix_sum = 0;
    let remainder_count = {0: 1};  // Initial prefix sum remainder of 0

    for (let num of nums) {
        prefix_sum += num;
        let remainder = ((prefix_sum % k) + k) % k;  // Handle negative remainders

        if (remainder_count[remainder] !== undefined) {
            count += remainder_count[remainder];
            remainder_count[remainder]++;
        } else {
            remainder_count[remainder] = 1;
        }
    }

    return count;
};

console.log("==========================================")

// 1051. Height Checker
// Easy
// A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single file line in non-decreasing order by height. 
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. 
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

// @param {number[]} heights
// @return {number}

var heightChecker = function(heights) {
    // Create the expected array by sorting the heights array
    const expected = [...heights].sort((a, b) => a - b);
    
    // Initialize a counter for mismatched indices
    let mismatchCount = 0;
    
    // Compare each element in heights with the corresponding element in expected
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            mismatchCount++;
        }
    }
    
    // Return the count of mismatched indices
    return mismatchCount;
};

console.log("==========================================")

// 1122. Relative Sort Array
// Easy
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
// Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:
// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

// @param {number[]} arr1
// @param {number[]} arr2
// @return {number[]}

var relativeSortArray = function(arr1, arr2) {
    // Create a mapping of value to index for arr2
    const orderMap = new Map();
    arr2.forEach((value, index) => {
        orderMap.set(value, index);
    });

    // Custom sort function
    return arr1.sort((a, b) => {
        if (orderMap.has(a) && orderMap.has(b)) {
            // Both elements are in arr2, sort by their index in arr2
            return orderMap.get(a) - orderMap.get(b);
        } else if (orderMap.has(a)) {
            // Only a is in arr2, it should come before b
            return -1;
        } else if (orderMap.has(b)) {
            // Only b is in arr2, it should come before a
            return 1;
        } else {
            // Neither element is in arr2, sort by their natural order (ascending)
            return a - b;
        }
    });
};

console.log("==========================================")

// 75. Sort Colors
// Medium
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// @param {number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.

var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            // Swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

console.log("==========================================")

// 2037. Minimum Number of Moves to Seat Everyone
// Easy
// There are n seats and n students in a room. You are given an array seats of length n, 
// where seats[i] is the position of the ith seat. You are also given the array students of length n,
// where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

// Example 1:
// Input: seats = [3,1,5], students = [2,7,4]
// Output: 4
// Explanation: The students are moved as follows:
// - The first student is moved from from position 2 to position 1 using 1 move.
// - The second student is moved from from position 7 to position 5 using 2 moves.
// - The third student is moved from from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.

// Example 2:
// Input: seats = [4,1,5,9], students = [1,3,2,6]
// Output: 7
// Explanation: The students are moved as follows:
// - The first student is not moved.
// - The second student is moved from from position 3 to position 4 using 1 move.
// - The third student is moved from from position 2 to position 5 using 3 moves.
// - The fourth student is moved from from position 6 to position 9 using 3 moves.
// In total, 0 + 1 + 3 + 3 = 7 moves were used.

// Example 3:
// Input: seats = [2,2,6,6], students = [1,3,2,6]
// Output: 4
// Explanation: Note that there are two seats at position 2 and two seats at position 6.
// The students are moved as follows:
// - The first student is moved from from position 1 to position 2 using 1 move.
// - The second student is moved from from position 3 to position 6 using 3 moves.
// - The third student is not moved.
// - The fourth student is not moved.
// In total, 1 + 3 + 0 + 0 = 4 moves were used.

// @param {number[]} seats
// @param {number[]} students
// @return {number}

var minMovesToSeat = function(seats, students) {
    // Sort both the seats and students arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    // Initialize a variable to keep track of the total number of moves
    let totalMoves = 0;

    // Calculate the total moves required by summing the absolute differences
    for (let i = 0; i < seats.length; i++) {
        totalMoves += Math.abs(seats[i] - students[i]);
    }

    // Return the total number of moves
    return totalMoves;
};

console.log("==========================================")

// 945. Minimum Increment to Make Array Unique
// Medium
// You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
// Return the minimum number of moves to make every value in nums unique.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: nums = [1,2,2]
// Output: 1
// Explanation: After 1 move, the array could be [1, 2, 3].

// Example 2:
// Input: nums = [3,2,1,2,1,7]
// Output: 6
// Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

// @param {number[]} nums
// @return {number}

var minIncrementForUnique = function(nums) {
    // Sort the array first
    nums.sort((a, b) => a - b);
    
    // Initialize the number of moves to 0
    let moves = 0;
    
    // Iterate through the sorted array
    for (let i = 1; i < nums.length; i++) {
        // If the current number is less than or equal to the previous number
        if (nums[i] <= nums[i - 1]) {
            // Calculate the increment needed to make it unique
            let increment = nums[i - 1] + 1 - nums[i];
            // Add the increment to the number of moves
            moves += increment;
            // Update the current number to the new unique value
            nums[i] = nums[i - 1] + 1;
        }
    }
    
    return moves;
};

console.log("==========================================")

// 502. IPO
// Hard
// Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, 
// LeetCode would like to work on some projects to increase its capital before the IPO. 
// Since it has limited resources, it can only finish at most k distinct projects before the IPO. 
// Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.

// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

// Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.

// The answer is guaranteed to fit in a 32-bit signed integer.

// Example 1:
// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

// Example 2:
// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6

// @param {number} k
// @param {number} w
// @param {number[]} profits
// @param {number[]} capital
// @return {number}

var findMaximizedCapital = function(k, w, profits, capital) {
    let n = profits.length;
    let projects = [];
    
    // Create a list of [capital, profit] pairs and sort it by capital
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]]);
    }
    projects.sort((a, b) => a[0] - b[0]);
    
    let maxHeap = new MaxHeap();
    let i = 0;
    
    // We can complete at most k projects
    for (let j = 0; j < k; j++) {
        // Add all feasible projects to the max-heap
        while (i < n && projects[i][0] <= w) {
            maxHeap.insert(projects[i][1]);
            i++;
        }
        
        // If there are no feasible projects, break
        if (maxHeap.isEmpty()) break;
        
        // Pick the project with the maximum profit
        w += maxHeap.extractMax();
    }
    
    return w;
};

// Max-Heap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            
            if (parent >= element) break;
            
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    
    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        
        return max;
    }
    
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

console.log("==========================================")

// 330. Patching Array
// Hard
// Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] 
// inclusive can be formed by the sum of some elements in the array.

// Return the minimum number of patches required.

// Example 1:
// Input: nums = [1,3], n = 6
// Output: 1
// Explanation:
// Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
// Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
// Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
// So we only need 1 patch.

// Example 2:
// Input: nums = [1,5,10], n = 20
// Output: 2
// Explanation: The two patches can be [2, 4].

// Example 3:
// Input: nums = [1,2,2], n = 5
// Output: 0

// @param {number[]} nums
// @param {number} n
// @return {number}

var minPatches = function(nums, n) {
    let patches = 0;
    let miss = 1;
    let i = 0;
    
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            patches++;
        }
    }
    
    return patches;
};

console.log("==========================================")

// 633. Sum of Square Numbers
// Medium
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:
// Input: c = 3
// Output: false

// @param {number} c
// @return {boolean}

var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    
    while (a <= b) {
        let sumOfSquares = a * a + b * b;
        
        if (sumOfSquares === c) {
            return true;
        } else if (sumOfSquares < c) {
            a++;
        } else {
            b--;
        }
    }
    
    return false;
};

console.log("==========================================")

// 826. Most Profit Assigning Work
// Medium

// You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:
// difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
// worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if three workers attempt the same job that pays $1, then the total profit will be $3. 
// If a worker cannot complete any job, their profit is $0.
// Return the maximum profit we can achieve after assigning the workers to the jobs.

// Example 1:
// Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
// Output: 100
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.

// Example 2:
// Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
// Output: 0

// @param {number[]} difficulty
// @param {number[]} profit
// @param {number[]} worker
// @return {number}

var maxProfitAssignment = function(difficulty, profit, worker) {
    // Combine difficulty and profit into a single array of objects and sort by difficulty
    let jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push({ difficulty: difficulty[i], profit: profit[i] });
    }
    jobs.sort((a, b) => a.difficulty - b.difficulty);
    
    // Sort the worker array
    worker.sort((a, b) => a - b);
    
    let maxProfit = 0;
    let totalProfit = 0;
    let jobIndex = 0;
    
    // Iterate over each worker
    for (let i = 0; i < worker.length; i++) {
        // Move the jobIndex to the highest profit job the worker can do
        while (jobIndex < jobs.length && jobs[jobIndex].difficulty <= worker[i]) {
            maxProfit = Math.max(maxProfit, jobs[jobIndex].profit);
            jobIndex++;
        }
        // Add the maximum profit achievable by the current worker to total profit
        totalProfit += maxProfit;
    }
    
    return totalProfit;
};

console.log("==========================================")

// 1482. Minimum Number of Days to Make m Bouquets
// Medium
// You are given an integer array bloomDay, an integer m and an integer k.
// You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.
// The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
// Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

// Example 1:
// Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
// Output: 3
// Explanation: Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.
// We need 3 bouquets each should contain 1 flower.
// After day 1: [x, _, _, _, _]   // we can only make one bouquet.
// After day 2: [x, _, _, _, x]   // we can only make two bouquets.
// After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.

// Example 2:
// Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
// Output: -1
// Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. 
// We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.

// Example 3:
// Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
// Output: 12
// Explanation: We need 2 bouquets each should have 3 flowers.
// Here is the garden after the 7 and 12 days:
// After day 7: [x, x, x, x, _, x, x]
// We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
// After day 12: [x, x, x, x, x, x, x]
// It is obvious that we can make two bouquets in different ways.

// @param {number[]} bloomDay
// @param {number} m
// @param {number} k
// @return {number}

var minDays = function(bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }
    
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    
    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;
        
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= days) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        
        return bouquets >= m;
    };
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canMakeBouquets(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

console.log("==========================================")

// 1552. Magnetic Force Between Two Balls
// Medium
// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. 
// Rick has n empty baskets, the ith basket is at position[i], 
// Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.
// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.
// Given the integer array position and the integer m. Return the required force.

// Example 1:
// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. 
// The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

// Example 2:
// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.

// @param {number[]} position
// @param {number} m
// @return {number}

var maxDistance = function(position, m) {
    // Step 1: Sort the positions
    position.sort((a, b) => a - b);
    
    // Step 2: Define the binary search boundaries
    let left = 1;
    let right = position[position.length - 1] - position[0];
    let result = 0;

    // Step 3: Binary search to find the maximum minimum distance
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canPlaceBalls(position, m, mid)) {
            result = mid;  // Valid minimum distance found, try for a larger one
            left = mid + 1;
        } else {
            right = mid - 1;  // Minimum distance too large, try for a smaller one
        }
    }
    
    return result;
};

// Helper function to check if we can place m balls with at least `dist` distance apart
function canPlaceBalls(position, m, dist) {
    let count = 1;  // Place the first ball in the first position
    let lastPos = position[0];

    for (let i = 1; i < position.length; i++) {
        if (position[i] - lastPos >= dist) {
            count++;
            lastPos = position[i];
            if (count === m) {
                return true;
            }
        }
    }
    return false;
};

console.log("==========================================")

// 1052. Grumpy Bookstore Owner
// Medium
// There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. 
// You are given an integer array customers of length n where customers[i] is the number of the customer 
// that enters the store at the start of the ith minute and all those customers leave after the end of that minute.
// On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 
// if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.
// When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.
// The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.
// Return the maximum number of customers that can be satisfied throughout the day.

// Example 1:
// Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
// Output: 16
// Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
// The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

// Example 2:
// Input: customers = [1], grumpy = [0], minutes = 1
// Output: 1

// @param {number[]} customers
// @param {number[]} grumpy
// @param {number} minutes
// @return {number}

var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length;
    
    // Calculate the total satisfied customers when the owner is not grumpy
    let totalSatisfied = 0;
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) {
            totalSatisfied += customers[i];
        }
    }
    
    // Find the maximum additional customers we can satisfy by making the owner not grumpy for `minutes` consecutive minutes
    let extraSatisfied = 0;
    let maxExtraSatisfied = 0;
    
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 1) {
            extraSatisfied += customers[i];
        }
        if (i >= minutes) {
            if (grumpy[i - minutes] === 1) {
                extraSatisfied -= customers[i - minutes];
            }
        }
        maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
    }
    
    return totalSatisfied + maxExtraSatisfied;
};

console.log("==========================================")

// 1248. Count Number of Nice Subarrays
// Medium
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
// Return the number of nice sub-arrays.

// Example 1:
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

// Example 2:
// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.

// Example 3:
// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

// @param {number[]} nums
// @param {number} k
// @return {number}

var numberOfSubarrays = function(nums, k) {
    // Helper function to count subarrays with at most K odd numbers
    const atMostKOdd = (nums, k) => {
        let count = 0;
        let left = 0;
        let oddCount = 0;
        
        for (let right = 0; right < nums.length; right++) {
            // If the current number is odd, increment the odd count
            if (nums[right] % 2 !== 0) {
                oddCount++;
            }
            
            // If there are more than k odd numbers, move the left pointer
            while (oddCount > k) {
                if (nums[left] % 2 !== 0) {
                    oddCount--;
                }
                left++;
            }
            
            // Add the number of subarrays ending at right that are valid
            count += right - left + 1;
        }
        
        return count;
    };

    // The number of subarrays with exactly k odd numbers
    return atMostKOdd(nums, k) - atMostKOdd(nums, k - 1);
};

console.log("==========================================")

// 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// Medium
// Given an array of integers nums and an integer limit, 
// return the size of the longest non-empty subarray such that the absolute difference between any two elements 
// of this subarray is less than or equal to limit.

// Example 1:
// Input: nums = [8,2,4,7], limit = 4
// Output: 2 
// Explanation: All subarrays are: 
// [8] with maximum absolute diff |8-8| = 0 <= 4.
// [8,2] with maximum absolute diff |8-2| = 6 > 4. 
// [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
// [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
// [2] with maximum absolute diff |2-2| = 0 <= 4.
// [2,4] with maximum absolute diff |2-4| = 2 <= 4.
// [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
// [4] with maximum absolute diff |4-4| = 0 <= 4.
// [4,7] with maximum absolute diff |4-7| = 3 <= 4.
// [7] with maximum absolute diff |7-7| = 0 <= 4. 
// Therefore, the size of the longest subarray is 2.

// Example 2:
// Input: nums = [10,1,2,4,7,2], limit = 5
// Output: 4 
// Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

// Example 3:
// Input: nums = [4,2,2,2,4,4,2,2], limit = 0
// Output: 3

// @param {number[]} nums
// @param {number} limit
// @return {number}

var longestSubarray = function(nums, limit) {
    let maxDeque = [], minDeque = [];
    let left = 0, longest = 0;

    for (let right = 0; right < nums.length; right++) {
        // Maintain max deque
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain min deque
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // If the window is invalid, move the left pointer
        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            left++;
            if (maxDeque[0] < left) maxDeque.shift();
            if (minDeque[0] < left) minDeque.shift();
        }

        // Update the longest valid subarray length
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

console.log("==========================================")

// 995. Minimum Number of K Consecutive Bit Flips
// Hard
// You are given a binary array nums and an integer k.
// A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.
// Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [0,1,0], k = 1
// Output: 2
// Explanation: Flip nums[0], then flip nums[2].

// Example 2:
// Input: nums = [1,1,0], k = 2
// Output: -1
// Explanation: No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].

// Example 3:
// Input: nums = [0,0,0,1,0,1,1,0], k = 3
// Output: 3
// Explanation: 
// Flip nums[0],nums[1],nums[2]: nums becomes [1,1,1,1,0,1,1,0]
// Flip nums[4],nums[5],nums[6]: nums becomes [1,1,1,1,1,0,0,0]
// Flip nums[5],nums[6],nums[7]: nums becomes [1,1,1,1,1,1,1,1]

// @param {number[]} nums
// @param {number} k
// @return {number}

var minKBitFlips = function(nums, k) {
    let n = nums.length;
    let isFlipped = new Array(n).fill(0);
    let flips = 0;
    let flipCount = 0;

    for (let i = 0; i < n; i++) {
        if (i >= k) {
            flipCount ^= isFlipped[i - k];
        }

        if (flipCount % 2 === nums[i]) {
            if (i + k > n) {
                return -1;
            }

            flips++;
            flipCount ^= 1;
            isFlipped[i] = 1;
        }
    }

    return flips;
};

console.log("==========================================")

// 1038. Binary Search Tree to Greater Sum Tree
// Medium
// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of 
// the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.
// As a reminder, a binary search tree is a tree that satisfies these constraints:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

// Example 2:
// Input: root = [0,null,1]
// Output: [1,null,1]

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {TreeNode}

var bstToGst = function(root) {
    let sum = 0;
    
    const traverse = (node) => {
        if (!node) return;
        
        // Traverse right subtree first
        traverse(node.right);
        
        // Update the sum and node's value
        sum += node.val;
        node.val = sum;
        
        // Traverse left subtree
        traverse(node.left);
    };
    
    traverse(root);
    return root;
};

console.log("==========================================")

// 1382. Balance a Binary Search Tree
// Medium
// Given the root of a binary search tree, return a balanced binary search tree with the same node values.
// If there is more than one answer, return any of them.
// A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

// Example 1:
// Input: root = [1,null,2,null,3,null,4,null,null]
// Output: [2,1,3,null,null,null,4]
// Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

// Example 2:
// Input: root = [2,1,3]
// Output: [2,1,3]
 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {TreeNode}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to perform inorder traversal and collect nodes
function inorderTraversal(root, nodes) {
    if (root === null) return;
    inorderTraversal(root.left, nodes);
    nodes.push(root.val);
    inorderTraversal(root.right, nodes);
}

// Function to build a balanced BST from sorted nodes
function buildBalancedBST(nodes, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nodes[mid]);
    node.left = buildBalancedBST(nodes, start, mid - 1);
    node.right = buildBalancedBST(nodes, mid + 1, end);
    return node;
}

var balanceBST = function(root) {
    let nodes = [];
    inorderTraversal(root, nodes); // Get the nodes in sorted order
    return buildBalancedBST(nodes, 0, nodes.length - 1); // Build and return the balanced BST
};

console.log("==========================================")

// 1791. Find Center of Star Graph
// Easy
// There is an undirected star graph consisting of n nodes labeled from 1 to n. 
// A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. 
// Return the center of the given star graph.

 

// Example 1:
// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

// Example 2:
// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1

// @param {number[][]} edges
// @return {number}

var findCenter = function(edges) {
    // Take the first two edges
    let [a, b] = edges[0];
    let [c, d] = edges[1];

    // Check which node is common in both edges
    if (a === c || a === d) {
        return a;
    } else {
        return b;
    }
};

console.log("==========================================")

// 2285. Maximum Total Importance of Roads
// Medium
// You are given an integer n denoting the number of cities in a country. The cities are numbered from 0 to n - 1.
// You are also given a 2D integer array roads where roads[i] = [ai, bi] denotes that there exists a bidirectional road connecting cities ai and bi.
// You need to assign each city with an integer value from 1 to n, where each value can only be used once. 
// The importance of a road is then defined as the sum of the values of the two cities it connects.
// Return the maximum total importance of all roads possible after assigning the values optimally.

// Example 1:
// Input: n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// Output: 43
// Explanation: The figure above shows the country and the assigned values of [2,4,5,3,1].
// - The road (0,1) has an importance of 2 + 4 = 6.
// - The road (1,2) has an importance of 4 + 5 = 9.
// - The road (2,3) has an importance of 5 + 3 = 8.
// - The road (0,2) has an importance of 2 + 5 = 7.
// - The road (1,3) has an importance of 4 + 3 = 7.
// - The road (2,4) has an importance of 5 + 1 = 6.
// The total importance of all roads is 6 + 9 + 8 + 7 + 7 + 6 = 43.
// It can be shown that we cannot obtain a greater total importance than 43.

// Example 2:
// Input: n = 5, roads = [[0,3],[2,4],[1,3]]
// Output: 20
// Explanation: The figure above shows the country and the assigned values of [4,3,2,5,1].
// - The road (0,3) has an importance of 4 + 5 = 9.
// - The road (2,4) has an importance of 2 + 1 = 3.
// - The road (1,3) has an importance of 3 + 5 = 8.
// The total importance of all roads is 9 + 3 + 8 = 20.
// It can be shown that we cannot obtain a greater total importance than 20.

// @param {number} n
// @param {number[][]} roads
// @return {number}

var maximumImportance = function(n, roads) {
    // Step 1: Count connections for each city
    const connections = Array(n).fill(0);
    for (const [a, b] of roads) {
        connections[a]++;
        connections[b]++;
    }

    // Step 2: Sort cities by the number of connections (descending order)
    const cities = Array.from({ length: n }, (_, i) => i);
    cities.sort((a, b) => connections[b] - connections[a]);

    // Step 3: Assign values from n to 1 based on sorted order
    const values = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        values[cities[i]] = n - i;
    }

    // Step 4: Calculate the total importance
    let totalImportance = 0;
    for (const [a, b] of roads) {
        totalImportance += values[a] + values[b];
    }

    return totalImportance;
};

console.log("==========================================")

// 2192. All Ancestors of a Node in a Directed Acyclic Graph
// Medium
// You are given a positive integer n representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive).
// You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there is a unidirectional edge from fromi to toi in the graph.
// Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in ascending order.
// A node u is an ancestor of another node v if u can reach v via a set of edges.

// Example 1:
// Input: n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
// Output: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
// Explanation:
// The above diagram represents the input graph.
// - Nodes 0, 1, and 2 do not have any ancestors.
// - Node 3 has two ancestors 0 and 1.
// - Node 4 has two ancestors 0 and 2.
// - Node 5 has three ancestors 0, 1, and 3.
// - Node 6 has five ancestors 0, 1, 2, 3, and 4.
// - Node 7 has four ancestors 0, 1, 2, and 3.

// Example 2:
// Input: n = 5, edgeList = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Output: [[],[0],[0,1],[0,1,2],[0,1,2,3]]
// Explanation:
// The above diagram represents the input graph.
// - Node 0 does not have any ancestor.
// - Node 1 has one ancestor 0.
// - Node 2 has two ancestors 0 and 1.
// - Node 3 has three ancestors 0, 1, and 2.
// - Node 4 has four ancestors 0, 1, 2, and 3.

// @param {number} n
// @param {number[][]} edges
// @return {number[][]}

var getAncestors = function(n, edges) {
    // Step 1: Initialize adjacency list and in-degree array
    const graph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);
    
    // Step 2: Build the graph and in-degree array from edges
    for (const [from, to] of edges) {
        graph[from].push(to);
        inDegree[to]++;
    }
    
    // Step 3: Perform topological sort
    const topoOrder = [];
    const queue = [];
    
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    while (queue.length > 0) {
        const node = queue.shift();
        topoOrder.push(node);
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // Step 4: Initialize ancestors array
    const ancestors = Array.from({ length: n }, () => new Set());
    
    // Step 5: Propagate ancestors using topological order
    for (const node of topoOrder) {
        for (const neighbor of graph[node]) {
            // Add the current node as an ancestor of the neighbor
            ancestors[neighbor].add(node);
            // Add all ancestors of the current node to the neighbor
            for (const ancestor of ancestors[node]) {
                ancestors[neighbor].add(ancestor);
            }
        }
    }
    
    // Step 6: Convert sets to sorted arrays and return the result
    return ancestors.map(ancestorSet => Array.from(ancestorSet).sort((a, b) => a - b));
};

console.log("==========================================")

// 1579. Remove Max Number of Edges to Keep Graph Fully Traversable
// Hard
// Alice and Bob have an undirected graph of n nodes and three types of edges:
// Type 1: Can be traversed by Alice only.
// Type 2: Can be traversed by Bob only.
// Type 3: Can be traversed by both Alice and Bob.
// Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, 
// find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob.
// The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.
// Return the maximum number of edges you can remove, or return -1 if Alice and Bob cannot fully traverse the graph.

// Example 1:
// Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
// Output: 2
// Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. 
// Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.

// Example 2:
// Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
// Output: 0
// Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.

// Example 3:
// Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
// Output: -1
// Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. 
// Therefore it's impossible to make the graph fully traversable.

// @param {number} n
// @param {number[][]} edges
// @return {number}

var maxNumEdgesToRemove = function(n, edges) {
    class DSU {
        constructor(size) {
            this.parent = Array(size).fill(0).map((_, index) => index);
            this.rank = Array(size).fill(0);
        }
        
        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }
        
        union(x, y) {
            const rootX = this.find(x);
            const rootY = this.find(y);
            if (rootX !== rootY) {
                if (this.rank[rootX] > this.rank[rootY]) {
                    this.parent[rootY] = rootX;
                } else if (this.rank[rootX] < this.rank[rootY]) {
                    this.parent[rootX] = rootY;
                } else {
                    this.parent[rootY] = rootX;
                    this.rank[rootX]++;
                }
                return true;
            }
            return false;
        }
    }
    
    const aliceDSU = new DSU(n + 1);
    const bobDSU = new DSU(n + 1);
    
    let removedEdges = 0;
    let commonEdges = [];
    let aliceEdges = [];
    let bobEdges = [];

    // Categorize edges
    for (const [type, u, v] of edges) {
        if (type === 3) {
            commonEdges.push([u, v]);
        } else if (type === 1) {
            aliceEdges.push([u, v]);
        } else if (type === 2) {
            bobEdges.push([u, v]);
        }
    }

    // Process common edges
    for (const [u, v] of commonEdges) {
        const aliceUnion = aliceDSU.union(u, v);
        const bobUnion = bobDSU.union(u, v);
        if (!aliceUnion && !bobUnion) {
            removedEdges++;
        }
    }

    // Process Alice's edges
    for (const [u, v] of aliceEdges) {
        if (!aliceDSU.union(u, v)) {
            removedEdges++;
        }
    }

    // Process Bob's edges
    for (const [u, v] of bobEdges) {
        if (!bobDSU.union(u, v)) {
            removedEdges++;
        }
    }

    // Check if both graphs are fully traversable
    const aliceParent = aliceDSU.find(1);
    const bobParent = bobDSU.find(1);

    for (let i = 2; i <= n; i++) {
        if (aliceDSU.find(i) !== aliceParent || bobDSU.find(i) !== bobParent) {
            return -1;
        }
    }

    return removedEdges;
};

console.log("==========================================")

// 1550. Three Consecutive Odds
// Easy
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 
// Example 1:
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// Example 2:
// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

// @param {number[]} arr
// @return {boolean}

var threeConsecutiveOdds = function(arr) {
    // Loop through the array until the third last element
    for (let i = 0; i < arr.length - 2; i++) {
        // Check if the current element and the next two elements are odd
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            return true; // Return true if all three are odd
        }
    }
    return false; // Return false if no such triplet is found
};


console.log("==========================================")

// 350. Intersection of Two Arrays II
// Easy
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number[]}

var intersect = function(nums1, nums2) {
    // Create a hashmap to store the counts of elements in nums1
    let countMap = {};
    for (let num of nums1) {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }

    // Array to store the intersection
    let result = [];
    for (let num of nums2) {
        if (countMap[num] && countMap[num] > 0) {
            result.push(num);
            countMap[num]--;
        }
    }

    return result;
};

console.log("==========================================")

// 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
// Medium
// You are given an integer array nums.
// In one move, you can choose one element of nums and change it to any value.
// Return the minimum difference between the largest and smallest value of nums after performing at most three moves.

// Example 1:
// Input: nums = [5,3,2,4]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 2 to 3. nums becomes [5,3,3,4].
// In the second move, change 4 to 3. nums becomes [5,3,3,3].
// In the third move, change 5 to 3. nums becomes [3,3,3,3].
// After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.

// Example 2:
// Input: nums = [1,5,0,10,14]
// Output: 1
// Explanation: We can make at most 3 moves.
// In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
// In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
// In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
// After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
// It can be shown that there is no way to make the difference 0 in 3 moves.

// Example 3:
// Input: nums = [3,100,20]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 100 to 7. nums becomes [3,7,20].
// In the second move, change 20 to 7. nums becomes [3,7,7].
// In the third move, change 3 to 7. nums becomes [7,7,7].
// After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.

// @param {number[]} nums
// @return {number}

var minDifference = function(nums) {
    const n = nums.length;
    if (n <= 4) return 0;

    nums.sort((a, b) => a - b);

    // Calculate the minimum difference after removing up to three elements
    return Math.min(
        nums[n - 1] - nums[3],  // Remove the three smallest
        nums[n - 2] - nums[2],  // Remove the two smallest and one largest
        nums[n - 3] - nums[1],  // Remove the one smallest and two largest
        nums[n - 4] - nums[0]   // Remove the three largest
    );
};

console.log("==========================================")

// 2181. Merge Nodes in Between Zeros
// Medium
// You are given the head of a linked list, which contains a series of integers separated by 0's. 
// The beginning and end of the linked list will have Node.val == 0.
// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. 
// The modified list should not contain any 0's.
// Return the head of the modified linked list.

// Example 1:
// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.

// Example 2:
// Input: head = [0,1,0,3,0,2,2,0]
// Output: [1,3,4]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 1 = 1.
// - The sum of the nodes marked in red: 3 = 3.
// - The sum of the nodes marked in yellow: 2 + 2 = 4.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var mergeNodes = function(head) {
    let dummy = new ListNode(0);
    let current = dummy;
    let sum = 0;

    // Skip the first zero
    head = head.next;
    
    while (head !== null) {
        if (head.val === 0) {
            // End of a segment
            if (sum > 0) {
                current.next = new ListNode(sum);
                current = current.next;
                sum = 0;
            }
        } else {
            sum += head.val;
        }
        head = head.next;
    }

    return dummy.next;
};

console.log("==========================================")

// 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
// Medium
// A critical point in a linked list is defined as either a local maxima or a local minima.
// A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.
// A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.
// Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.
// Given a linked list head, return an array of length 2 containing [minDistance, 
// maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance 
// is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].

// Example 1:
// Input: head = [3,1]
// Output: [-1,-1]
// Explanation: There are no critical points in [3,1].

// Example 2:
// Input: head = [5,3,1,2,5,1,2]
// Output: [1,3]
// Explanation: There are three critical points:
// - [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
// - [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
// - [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
// The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
// The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.
// Example 3:


// Input: head = [1,3,2,2,3,2,2,2,7]
// Output: [3,3]
// Explanation: There are two critical points:
// - [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
// - [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
// Both the minimum and maximum distances are between the second and the fifth node.
// Thus, minDistance and maxDistance is 5 - 2 = 3.
// Note that the last node is not considered a local maxima because it does not have a next node.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {number[]}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var nodesBetweenCriticalPoints = function(head) {
    if (!head || !head.next || !head.next.next) return [-1, -1];
    
    let prev = head;
    let curr = head.next;
    let index = 1;  // Start from the second node
    let criticalPoints = [];
    
    while (curr.next) {
        let next = curr.next;
        if ((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val < next.val)) {
            criticalPoints.push(index);
        }
        prev = curr;
        curr = next;
        index++;
    }
    
    if (criticalPoints.length < 2) return [-1, -1];
    
    let minDistance = Infinity;
    for (let i = 1; i < criticalPoints.length; i++) {
        minDistance = Math.min(minDistance, criticalPoints[i] - criticalPoints[i - 1]);
    }
    
    let maxDistance = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];
    
    return [minDistance, maxDistance];
};

console.log("==========================================")

// 2582. Pass the Pillow
// Easy
// There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. 
// Every second, the person holding the pillow passes it to the next person standing in the line. 
// Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

// For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
// Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

// Example 1:
// Input: n = 4, time = 5
// Output: 2
// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
// After five seconds, the 2nd person is holding the pillow.

// Example 2:
// Input: n = 3, time = 2
// Output: 3
// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
// After two seconds, the 3rd person is holding the pillow.

// @param {number} n
// @param {number} time
// @return {number}

var passThePillow = function(n, time) {
    // Determine the effective time within a single round trip (forward and backward)
    let effectiveTime = time % (2 * (n - 1));
    
    // Calculate the position based on the effective time
    if (effectiveTime < n) {
        // Moving forward
        return 1 + effectiveTime;
    } else {
        // Moving backward
        return n - (effectiveTime - (n - 1));
    }
};

console.log("==========================================")

// 1518. Water Bottles
// Easy
// There are numBottles water bottles that are initially full of water. 
// You can exchange numExchange empty water bottles from the market with one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

// Example 1:
// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

// Example 2:
// Input: numBottles = 15, numExchange = 4
// Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
// Number of water bottles you can drink: 15 + 3 + 1 = 19.

// @param {number} numBottles
// @param {number} numExchange
// @return {number}

var numWaterBottles = function(numBottles, numExchange) {
    let totalDrunk = 0;
    let emptyBottles = 0;
    
    while (numBottles > 0) {
        totalDrunk += numBottles;
        emptyBottles += numBottles;
        numBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles = emptyBottles % numExchange;
    }
    
    return totalDrunk;
};

console.log("==========================================")

// 1823. Find the Winner of the Circular Game
// Medium
// There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. 
// More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, 
// and moving clockwise from the nth friend brings you to the 1st friend.
// The rules of the game are as follows:
// Start at the 1st friend.
// Count the next k friends in the clockwise direction including the friend you started at. 
// The counting wraps around the circle and may count some friends more than once.
// The last friend you counted leaves the circle and loses the game.
// If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
// Else, the last friend in the circle wins the game.
// Given the number of friends, n, and an integer k, return the winner of the game.

// Example 1:
// Input: n = 5, k = 2
// Output: 3
// Explanation: Here are the steps of the game:
// 1) Start at friend 1.
// 2) Count 2 friends clockwise, which are friends 1 and 2.
// 3) Friend 2 leaves the circle. Next start is friend 3.
// 4) Count 2 friends clockwise, which are friends 3 and 4.
// 5) Friend 4 leaves the circle. Next start is friend 5.
// 6) Count 2 friends clockwise, which are friends 5 and 1.
// 7) Friend 1 leaves the circle. Next start is friend 3.
// 8) Count 2 friends clockwise, which are friends 3 and 5.
// 9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.

// Example 2:
// Input: n = 6, k = 5
// Output: 1
// Explanation: The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.

// @param {number} n
// @param {number} k
// @return {number}

var findTheWinner = function(n, k) {
    let winner = 0; // base case: if there's only one person, the winner is at position 0
    for (let i = 1; i <= n; i++) {
        winner = (winner + k) % i;
    }
    return winner + 1; // +1 to convert from 0-based index to 1-based index
};

console.log("==========================================")

// 1701. Average Waiting Time
// Medium
// There is a restaurant with a single chef. You are given an array customers, where customers[i] = [arrivali, timei]:
// arrivali is the arrival time of the ith customer. The arrival times are sorted in non-decreasing order.
// timei is the time needed to prepare the order of the ith customer.
// When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle. 
// The customer waits till the chef finishes preparing his order. The chef does not prepare food for more than one customer at a time. 
// The chef prepares food for customers in the order they were given in the input.
// Return the average waiting time of all customers. Solutions within 10-5 from the actual answer are considered accepted.

// Example 1:
// Input: customers = [[1,2],[2,5],[4,3]]
// Output: 5.00000
// Explanation:
// 1) The first customer arrives at time 1, the chef takes his order and starts preparing it immediately at time 1, 
// and finishes at time 3, so the waiting time of the first customer is 3 - 1 = 2.
// 2) The second customer arrives at time 2, the chef takes his order and starts preparing it at time 3, 
// and finishes at time 8, so the waiting time of the second customer is 8 - 2 = 6.
// 3) The third customer arrives at time 4, the chef takes his order and starts preparing it at time 8, 
// and finishes at time 11, so the waiting time of the third customer is 11 - 4 = 7.
// So the average waiting time = (2 + 6 + 7) / 3 = 5.

// Example 2:
// Input: customers = [[5,2],[5,4],[10,3],[20,1]]
// Output: 3.25000
// Explanation:
// 1) The first customer arrives at time 5, the chef takes his order and starts preparing it immediately at time 5, 
// and finishes at time 7, so the waiting time of the first customer is 7 - 5 = 2.
// 2) The second customer arrives at time 5, the chef takes his order and starts preparing it at time 7, 
// and finishes at time 11, so the waiting time of the second customer is 11 - 5 = 6.
// 3) The third customer arrives at time 10, the chef takes his order and starts preparing it at time 11, 
// and finishes at time 14, so the waiting time of the third customer is 14 - 10 = 4.
// 4) The fourth customer arrives at time 20, the chef takes his order and starts preparing it immediately at time 20, 
// and finishes at time 21, so the waiting time of the fourth customer is 21 - 20 = 1.
// So the average waiting time = (2 + 6 + 4 + 1) / 4 = 3.25.

// @param {number[][]} customers
// @return {number}

var averageWaitingTime = function(customers) {
    let currentTime = 0;
    let totalWaitingTime = 0;

    for (let i = 0; i < customers.length; i++) {
        let arrival = customers[i][0];
        let timeToPrepare = customers[i][1];
        
        // Chef starts the order at the max of currentTime and the customer's arrival time
        currentTime = Math.max(currentTime, arrival);
        
        // Waiting time for the current customer
        let waitingTime = currentTime + timeToPrepare - arrival;
        
        // Add the waiting time to the total waiting time
        totalWaitingTime += waitingTime;
        
        // Update the current time to when the chef finishes this order
        currentTime += timeToPrepare;
    }
    
    // Calculate the average waiting time
    return totalWaitingTime / customers.length;
};

console.log("==========================================")

// 1598. Crawler Log Folder
// Easy
// The Leetcode file system keeps a log each time some user performs a change folder operation.
// The operations are described below:
// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
// The file system starts in the main folder, then the operations in logs are performed.
// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

// Example 1:
// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

// Example 2:
// Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
// Output: 3
// Example 3:

// Input: logs = ["d1/","../","../","../"]
// Output: 0

// @param {string[]} logs
// @return {number}

var minOperations = function(logs) {
    let depth = 0;  // this will track our current depth in the folder structure
    
    for (let log of logs) {
        if (log === "../") {
            if (depth > 0) {
                depth--;  // move one level up, if we are not at the main folder
            }
        } else if (log !== "./") {
            depth++;  // move one level down to a child folder
        }
        // if log is "./", we do nothing since we stay in the same folder
    }
    
    return depth;  // this will be the number of "../" operations needed to get back to the main folder
};

console.log("==========================================")

// 1568. Minimum Number of Days to Disconnect Island
// Hard
// You are given an m x n binary grid grid where 1 represents land and 0 represents water. 
// An island is a maximal 4-directionally (horizontal or vertical) connected group of 1's.
// The grid is said to be connected if we have exactly one island, otherwise is said disconnected.
// In one day, we are allowed to change any single land cell (1) into a water cell (0).
// Return the minimum number of days to disconnect the grid.

// Example 1:
// Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
// Output: 2
// Explanation: We need at least 2 days to get a disconnected grid.
// Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.

// Example 2:
// Input: grid = [[1,1]]
// Output: 2
// Explanation: Grid of full water is also disconnected ([[1,1]] -> [[0,0]]), 0 islands.

// @param {number[][]} grid
// @return {number}

var minDays = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const isConnected = () => {
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        let found = false;

        const dfs = (r, c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0 || visited[r][c]) return;
            visited[r][c] = true;
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1 && !visited[r][c]) {
                    if (found) return false;
                    dfs(r, c);
                    found = true;
                }
            }
        }

        return found;
    };

    const isDisconnected = () => {
        return !isConnected();
    };

    if (isDisconnected()) return 0;

    // Check if we can disconnect the grid by removing just one land cell.
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                grid[r][c] = 0;
                if (isDisconnected()) return 1;
                grid[r][c] = 1;
            }
        }
    }

    // If the grid cannot be disconnected by removing one cell, it requires two days.
    return 2;
};

console.log("==========================================")

// 703. Kth Largest Element in a Stream
// Easy 
// Design a class to find the kth largest element in a stream. 
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Implement KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

// Example 1:
// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8

// @param {number} k
// @param {number[]} nums

var KthLargest = function(k, nums) {
    
};

// @param {number} val
// @return {number}

KthLargest.prototype.add = function(val) {
    
};

// Your KthLargest object will be instantiated and called as such:
//  var obj = new KthLargest(k, nums)
// var param_1 = obj.add(val)

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue(); // Using a min-heap
        // Initialize the heap with the first k elements of nums
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.enqueue(val);
        // If the heap size exceeds k, remove the smallest element
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        // The root of the heap is the kth largest element
        return this.minHeap.front().element;
    }
}

console.log("==========================================")

// 40. Combination Sum II
// Medium
// Given a collection of candidate numbers (candidates) and a target number (target), 
// find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [ [1,1,6], [1,2,5], [1,7], [2,6] ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [ [1,2,2], [5] ]

// @param {number[]} candidates
// @param {number} target
// @return {number[][]}

var combinationSum2 = function(candidates, target) {
    const results = [];
    
    // Sort the array to help with skipping duplicates
    candidates.sort((a, b) => a - b);
    
    function backtrack(start, currentCombo, currentSum) {
        if (currentSum === target) {
            results.push([...currentCombo]);
            return;
        }
        
        if (currentSum > target) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            
            currentCombo.push(candidates[i]);
            backtrack(i + 1, currentCombo, currentSum + candidates[i]);
            currentCombo.pop();
        }
    }
    
    backtrack(0, [], 0);
    return results;
};

console.log("==========================================")

// 719. Find K-th Smallest Pair Distance
// Hard
// The distance of a pair of integers a and b is defined as the absolute difference between a and b.
// Given an integer array nums and an integer k,
// return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

// Example 1:
// Input: nums = [1,3,1], k = 1
// Output: 0
// Explanation: Here are all the pairs:
// (1,3) -> 2
// (1,1) -> 0
// (3,1) -> 2
// Then the 1st smallest distance pair is (1,1), and its distance is 0.

// Example 2:
// Input: nums = [1,1,1], k = 2
// Output: 0

// Example 3:
// Input: nums = [1,6,1], k = 3
// Output: 5

// @param {number[]} nums
// @param {number} k
// @return {number}

var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    
    let left = 0; // The smallest possible distance
    let right = nums[nums.length - 1] - nums[0]; // The largest possible distance
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        let j = 0;

        // Count how many pairs have a distance <= mid
        for (let i = 0; i < nums.length; i++) {
            while (j < nums.length && nums[j] - nums[i] <= mid) {
                j++;
            }
            count += j - i - 1;
        }

        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};


console.log("==========================================")

// 860. Lemonade Change
// Easy
// At a lemonade stand, each lemonade costs $5. 
// Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). 
// Each customer will only buy one lemonade and pay with either a $5, $10, 
// or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, 
// return true if you can provide every customer with the correct change, or false otherwise.

// Example 1:
// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.

// @param {number[]} bills
// @return {boolean}

var lemonadeChange = function(bills) {
    let fives = 0, tens = 0;

    for (let bill of bills) {
        if (bill === 5) {
            fives++;
        } else if (bill === 10) {
            if (fives > 0) {
                fives--;
                tens++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};

console.log("==========================================")

// 624. Maximum Distance in Arrays
// Medium
// You are given m arrays, where each array is sorted in ascending order.
// You can pick up two integers from two different arrays (each array picks one) 
// and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.
// Return the maximum distance.

// Example 1:
// Input: arrays = [[1,2,3],[4,5],[1,2,3]]
// Output: 4
// Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

// Example 2:
// Input: arrays = [[1],[1]]
// Output: 0

// @param {number[][]} arrays
// @return {number}

var maxDistance = function(arrays) {
    let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];
    let maxDist = 0;

    for (let i = 1; i < arrays.length; i++) {
        const currMin = arrays[i][0];
        const currMax = arrays[i][arrays[i].length - 1];

        // Calculate distance considering current min and max values
        maxDist = Math.max(maxDist, Math.abs(currMax - minVal), Math.abs(maxVal - currMin));

        // Update the global min and max
        minVal = Math.min(minVal, currMin);
        maxVal = Math.max(maxVal, currMax);
    }

    return maxDist;
};

console.log("==========================================")

// 1937. Maximum Number of Points with Cost
// Medium
// You are given an m x n integer matrix points (0-indexed). Starting with 0 points, 
// you want to maximize the number of points you can get from the matrix.

// To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c) will add points[r][c] to your score.

// However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. 
// For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), 
// picking cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score.

// Return the maximum number of points you can achieve.
// abs(x) is defined as:
// x for x >= 0.
// -x for x < 0.

// Example 1:
// Input: points = [[1,2,3],[1,5,1],[3,1,1]]
// Output: 9
// Explanation:
// The blue cells denote the optimal cells to pick, which have coordinates (0, 2), (1, 1), and (2, 0).
// You add 3 + 5 + 3 = 11 to your score.
// However, you must subtract abs(2 - 1) + abs(1 - 0) = 2 from your score.
// Your final score is 11 - 2 = 9.

// Example 2:
// Input: points = [[1,5],[2,3],[4,2]]
// Output: 11
// Explanation:
// The blue cells denote the optimal cells to pick, which have coordinates (0, 1), (1, 1), and (2, 0).
// You add 5 + 3 + 4 = 12 to your score.
// However, you must subtract abs(1 - 1) + abs(1 - 0) = 1 from your score.
// Your final score is 12 - 1 = 11.

// @param {number[][]} points
// @return {number}

var maxPoints = function(points) {
    const m = points.length;
    const n = points[0].length;
    let dp = new Array(n).fill(0);

    // Initialize the first row of dp
    for (let j = 0; j < n; j++) {
        dp[j] = points[0][j];
    }

    // Process each subsequent row
    for (let i = 1; i < m; i++) {
        let left = new Array(n).fill(0);
        let right = new Array(n).fill(0);
        let newDp = new Array(n).fill(0);

        // Compute left array (max values from left to right)
        left[0] = dp[0];
        for (let j = 1; j < n; j++) {
            left[j] = Math.max(left[j - 1] - 1, dp[j]);
        }

        // Compute right array (max values from right to left)
        right[n - 1] = dp[n - 1];
        for (let j = n - 2; j >= 0; j--) {
            right[j] = Math.max(right[j + 1] - 1, dp[j]);
        }

        // Compute the new dp array for the current row
        for (let j = 0; j < n; j++) {
            newDp[j] = points[i][j] + Math.max(left[j], right[j]);
        }

        dp = newDp; // Move to the next row
    }

    // The answer will be the max value in the last row
    return Math.max(...dp);
};

console.log("==========================================")

// 264. Ugly Number II
// Medium
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return the nth ugly number.

// Example 1:
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

// Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// @param {number} n
// @return {number}

var nthUglyNumber = function(n) {
    // Create an array to store the ugly numbers
    let dp = new Array(n);
    dp[0] = 1; // The first ugly number is 1
    
    // Initialize pointers for multiples of 2, 3, and 5
    let i2 = 0, i3 = 0, i5 = 0;
    
    // Initialize the next multiples of 2, 3, and 5
    let next_2 = 2, next_3 = 3, next_5 = 5;
    
    for (let i = 1; i < n; i++) {
        // Find the next ugly number
        dp[i] = Math.min(next_2, next_3, next_5);
        
        // Update the pointers and next multiples
        if (dp[i] === next_2) {
            i2++;
            next_2 = dp[i2] * 2;
        }
        if (dp[i] === next_3) {
            i3++;
            next_3 = dp[i3] * 3;
        }
        if (dp[i] === next_5) {
            i5++;
            next_5 = dp[i5] * 5;
        }
    }
    
    // Return the nth ugly number
    return dp[n - 1];
};
console.log("==========================================")

// 650. 2 Keys Keyboard
// Medium
// There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
// Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

// Example 1:
// Input: n = 3
// Output: 3
// Explanation: Initially, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.

// Example 2:
// Input: n = 1
// Output: 0

// @param {number} n
// @return {number}

var minSteps = function(n) {
    let steps = 0;
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            steps += i;
            n /= i;
        }
    }
    return steps;
};



console.log("==========================================")

// 1140. Stone Game II
// Medium
// Alice and Bob continue their games with piles of stones.  
// There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  
// The objective of the game is to end with the most stones. 
// Alice and Bob take turns, with Alice starting first.  Initially, M = 1.
// On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).
// The game continues until all the stones have been taken.
// Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

// Example 1:
// Input: piles = [2,7,9,4,4]
// Output: 10
// Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, 
// then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. 
// If Alice takes two piles at the beginning, then Bob can take all three piles left. 
// In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 

// Example 2:
// Input: piles = [1,2,3,4,5,100]
// Output: 104

// @param {number[]} piles
// @return {number}

var stoneGameII = function(piles) {
    const n = piles.length;
    const dp = Array.from({ length: n }, () => Array(n + 1).fill(0));
    
    const suffixSum = Array(n).fill(0);
    suffixSum[n-1] = piles[n-1];
    
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    
    function helper(i, M) {
        if (i >= n) return 0;
        if (dp[i][M] > 0) return dp[i][M];
        if (i + 2 * M >= n) return suffixSum[i];
        
        let best = 0;
        for (let X = 1; X <= 2 * M; X++) {
            best = Math.max(best, suffixSum[i] - helper(i + X, Math.max(M, X)));
        }
        
        dp[i][M] = best;
        return best;
    }
    
    return helper(0, 1);
};

console.log("==========================================")

// 664. Strange Printer
// Hard
// There is a strange printer with the following two special properties:
// The printer can only print a sequence of the same character each time.
// At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
// Given a string s, return the minimum number of turns the printer needed to print it.

// Example 1:
// Input: s = "aaabbb"
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".

// Example 2:
// Input: s = "aba"
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.

// @param {string} s
// @return {number}

var strangePrinter = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;  // Base case: single character requires 1 turn
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + 1;  // Initialize as if printing separately
            for (let k = i; k < j; k++) {
                if (s[k] === s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + (k + 1 <= j - 1 ? dp[k + 1][j - 1] : 0));
                }
            }
        }
    }
    
    return dp[0][n - 1];
};


console.log("==========================================")

// 476. Number Complement
// Easy
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

// Example 1:
// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// @param {number} num
// @return {number}

var findComplement = function(num) {
    // Step 1: Calculate the mask
    let mask = (1 << num.toString(2).length) - 1;
    
    // Step 2: XOR num with the mask
    return num ^ mask;
};

console.log("==========================================")

// 592. Fraction Addition and Subtraction
// Medium
// Given a string expression representing an expression of fraction addition and subtraction, 
// return the calculation result in string format.

// The final result should be an irreducible fraction. If your final result is an integer, 
// change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

// Example 1:
// Input: expression = "-1/2+1/2"
// Output: "0/1"

// Example 2:
// Input: expression = "-1/2+1/2+1/3"
// Output: "1/3"

// Example 3:
// Input: expression = "1/3-1/2"
// Output: "-1/6"

// Constraints:
// The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
// Each fraction (input and output) has the format ±numerator/denominator. 
// If the first input fraction or the output is positive, then '+' will be omitted.
// The input only contains valid irreducible fractions, 
// where the numerator and denominator of each fraction will always be in the range [1, 10]. 
// If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
// The number of given fractions will be in the range [1, 10].
// The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

// @param {string} expression
// @return {string}

function fractionAddition(expression) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let nums = expression.match(/[\+\-]?\d+\/\d+/g);
    
    let numerator = 0, denominator = 1;
    
    for (let frac of nums) {
        let [num, denom] = frac.split('/').map(Number);
        
        numerator = numerator * denom + num * denominator;
        denominator *= denom;
        
        let g = gcd(Math.abs(numerator), denominator);
        
        numerator /= g;
        denominator /= g;
    }
    
    return `${numerator}/${denominator}`;
}

console.log("==========================================")

// 564. Find the Closest Palindrome
// Hard
// Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. 
// If there is a tie, return the smaller one.
// The closest is defined as the absolute difference minimized between two integers.

// Example 1:
// Input: n = "123"
// Output: "121"

// Example 2:
// Input: n = "1"
// Output: "0"
// Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.

// Constraints:
// 1 <= n.length <= 18
// n consists of only digits.
// n does not have leading zeros.
// n is representing an integer in the range [1, 1018 - 1].

// @param {string} n
// @return {string}

var nearestPalindromic = function(n) {
    let length = n.length;
    let candidates = new Set();

    // Case 1: Same length palindrome by mirroring the first half
    let prefix = n.substring(0, Math.ceil(length / 2));
    let prefixNumber = BigInt(prefix);
    let prefixes = [prefixNumber - 1n, prefixNumber, prefixNumber + 1n];

    // Generate all palindromes
    for (let p of prefixes) {
        let strP = p.toString();
        let palindrome = strP + strP.slice(0, length % 2 === 0 ? strP.length : strP.length - 1).split('').reverse().join('');
        candidates.add(BigInt(palindrome));
    }

    // Case 2: Consider edge cases like 999..999 and 100..001
    candidates.add(BigInt((10n ** BigInt(length - 1)) - 1n)); // 999...999
    candidates.add(BigInt((10n ** BigInt(length)) + 1n));     // 100...001

    // Remove the original number itself from the candidates
    let originalNumber = BigInt(n);
    candidates.delete(originalNumber);

    // Find the closest palindrome by absolute difference
    let result = "";
    let minDiff = null;

    for (let candidate of candidates) {
        let diff = candidate - originalNumber;
        if (diff < 0n) diff = -diff;  // Manual absolute value calculation for BigInt

        if (minDiff === null || diff < minDiff || (diff === minDiff && candidate < BigInt(result))) {
            minDiff = diff;
            result = candidate.toString();
        }
    }

    return result;
};

console.log("==========================================")

// 145. Binary Tree Postorder Traversal
// Easy
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number[]}

var postorderTraversal = function(root) {
    const result = [];
    
    const traverse = (node) => {
        if (!node) return;
        
        traverse(node.left);  // visit left subtree
        traverse(node.right); // visit right subtree
        result.push(node.val); // visit root
    }
    
    traverse(root);
    return result;
};


console.log("==========================================")

// 590. N-ary Tree Postorder Traversal
// Easy
// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]

// Definition for a _Node.
// function _Node(val,children) {
//    this.val = val;
//    this.children = children;
// };


// @param {_Node|null} root
// @return {number[]}

var postorder = function(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        // Traverse all children
        for (let child of node.children) {
            traverse(child);
        }
        
        // Visit the node
        result.push(node.val);
    }
    
    traverse(root);
    return result;
};

console.log("==========================================")

// 1514. Path with Maximum Probability
// Medium
// You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] 
// is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].
// Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.
// If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
// Output: 0.25000
// Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.

// Example 2:
// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
// Output: 0.30000

// Example 3:
// Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
// Output: 0.00000
// Explanation: There is no path between 0 and 2.

// @param {number} n
// @param {number[][]} edges
// @param {number[]} succProb
// @param {number} start_node
// @param {number} end_node
// @return {number}

var maxProbability = function(n, edges, succProb, start_node, end_node) {
    // Step 1: Build the graph
    const graph = new Array(n).fill(0).map(() => []);
    
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const prob = succProb[i];
        graph[u].push([v, prob]);
        graph[v].push([u, prob]);
    }
    
    // Step 2: Initialize the max heap (priority queue) and the probability array
    const maxHeap = new MaxHeap();
    maxHeap.push([start_node, 1]); // [node, probability]
    const probabilities = new Array(n).fill(0);
    probabilities[start_node] = 1;
    
    // Step 3: Dijkstra's algorithm with max-heap
    while (!maxHeap.isEmpty()) {
        const [current_node, current_prob] = maxHeap.pop();
        
        if (current_node === end_node) {
            return current_prob;
        }
        
        for (const [neighbor, edge_prob] of graph[current_node]) {
            const new_prob = current_prob * edge_prob;
            if (new_prob > probabilities[neighbor]) {
                probabilities[neighbor] = new_prob;
                maxHeap.push([neighbor, new_prob]);
            }
        }
    }
    
    return 0;
};

// MaxHeap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return max;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element[1] <= parent[1]) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[1] > element[1]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[1] > element[1]) ||
                    (swap !== null && rightChild[1] > leftChild[1])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}

console.log("==========================================")

// 1905. Count Sub Islands
// Medium
// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). 
// An island is a group of 1's connected 4-directionally (horizontal or vertical). 
// Any cells outside of the grid are considered water cells.
// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.
// Return the number of islands in grid2 that are considered sub-islands.

// Example 1:
// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], 
// grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.

// Example 2:
// Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], 
// grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// Output: 2 
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.

// @param {number[][]} grid1
// @param {number[][]} grid2
// @return {number}

var countSubIslands = function(grid1, grid2) {
    const m = grid2.length;
    const n = grid2[0].length;

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) {
            return true;
        }

        // Mark the cell as visited by setting it to 0
        grid2[i][j] = 0;

        // Check if the current cell in grid2 is part of a valid sub-island in grid1
        let isSubIsland = grid1[i][j] === 1;

        // Explore all four directions (up, down, left, right)
        isSubIsland = dfs(i + 1, j) && isSubIsland;
        isSubIsland = dfs(i - 1, j) && isSubIsland;
        isSubIsland = dfs(i, j + 1) && isSubIsland;
        isSubIsland = dfs(i, j - 1) && isSubIsland;

        return isSubIsland;
    };

    let subIslandCount = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                // Start a DFS to explore the entire island in grid2
                if (dfs(i, j)) {
                    subIslandCount++;
                }
            }
        }
    }

    return subIslandCount;
};

console.log("==========================================")

// 947. Most Stones Removed with Same Row or Column
// Medium
// On a 2D plane, we place n stones at some integer coordinate points. 
// Each coordinate point may have at most one stone.
// A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.
// Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, 
// return the largest possible number of stones that can be removed.

// Example 1:
// Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
// Output: 5
// Explanation: One way to remove 5 stones is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,1].
// 2. Remove stone [2,1] because it shares the same column as [0,1].
// 3. Remove stone [1,2] because it shares the same row as [1,0].
// 4. Remove stone [1,0] because it shares the same column as [0,0].
// 5. Remove stone [0,1] because it shares the same row as [0,0].
// Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.

// Example 2:
// Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
// Output: 3
// Explanation: One way to make 3 moves is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,0].
// 2. Remove stone [2,0] because it shares the same column as [0,0].
// 3. Remove stone [0,2] because it shares the same row as [0,0].
// Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.

// Example 3:
// Input: stones = [[0,0]]
// Output: 0
// Explanation: [0,0] is the only stone on the plane, so you cannot remove it.

// @param {number[][]} stones
// @return {number}

var removeStones = function(stones) {
    const parent = {};
    
    // Find function with path compression
    const find = (x) => {
        if (parent[x] === undefined) {
            parent[x] = x;
        }
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };
    
    // Union function
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    };
    
    // Union stones based on row and column
    for (let [x, y] of stones) {
        union(x, ~y); // Use ~y to differentiate between row and column
    }
    
    // Count distinct roots
    const uniqueRoots = new Set();
    for (let [x, y] of stones) {
        uniqueRoots.add(find(x));
    }
    
    // The number of removable stones is total stones minus number of connected components
    return stones.length - uniqueRoots.size;
};

console.log("==========================================")

// 2699. Modify Graph Edge Weights
// Hard
// You are given an undirected weighted connected graph containing n nodes labeled from 0 to n - 1, 
// and an integer array edges where edges[i] = [ai, bi, wi] 
// indicates that there is an edge between nodes ai and bi with weight wi.
// Some edges have a weight of -1 (wi = -1), while others have a positive weight (wi > 0).
// Your task is to modify all edges with a weight of -1 by assigning them positive integer values 
// in the range [1, 2 * 109] so that the shortest distance between the nodes source and destination 
// becomes equal to an integer target. If there are multiple modifications that make the shortest 
// distance between source and destination equal to target, any of them will be considered correct.
// Return an array containing all edges (even unmodified ones) in any order if it is possible 
// to make the shortest distance from source to destination equal to target, or an empty array if it's impossible.
// Note: You are not allowed to modify the weights of edges with initial positive weights.

// Example 1:
// Input: n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5
// Output: [[4,1,1],[2,0,1],[0,3,3],[4,3,1]]
// Explanation: The graph above shows a possible modification to the edges, making the distance from 0 to 1 equal to 5.

// Example 2:
// Input: n = 3, edges = [[0,1,-1],[0,2,5]], source = 0, destination = 2, target = 6
// Output: []
// Explanation: The graph above contains the initial edges. It is not possible to make the distance from 0 to 2 equal to 6 by modifying the edge with weight -1. So, an empty array is returned.

// Example 3:
// Input: n = 4, edges = [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], source = 0, destination = 2, target = 6
// Output: [[1,0,4],[1,2,3],[2,3,5],[0,3,1]]
// Explanation: The graph above shows a modified graph having the shortest distance from 0 to 2 as 6.

// @param {number} n
// @param {number[][]} edges
// @param {number} source
// @param {number} destination
// @param {number} target
// @return {number[][]}

function modifiedGraphEdges(
    nodeCount,
    edges,
    sourceNode,
    destNode,
    targetDistance
) {
    // Initialize a very large value as a placeholder for infinity
    const INF = 2e9;

    // Dijkstra's algorithm implementation to find the shortest path
    const dijkstra = (edges) => {
        // Graph representation with distances initialized to infinity
        const graph = Array(nodeCount)
            .fill(0)
            .map(() => Array(nodeCount).fill(INF));
        // Array to hold shortest distances from source
        const dist = Array(nodeCount).fill(INF);
        // Boolean array to track visited nodes
        const visited = Array(nodeCount).fill(false);

        // Convert adjacency list to adjacency matrix and skip edges with weight -1
        for (const [from, to, weight] of edges) {
            if (weight === -1) {
                continue;
            }
            graph[from][to] = weight;
            graph[to][from] = weight;
        }

        // Distance from source to itself is always 0
        dist[sourceNode] = 0;

        // Find the shortest path to each node
        for (let i = 0; i < nodeCount; ++i) {
            let closestNode = -1;
            for (let j = 0; j < nodeCount; ++j) {
                if (!visited[j] && (closestNode === -1 || dist[j] < dist[closestNode])) {
                    closestNode = j;
                }
            }
            visited[closestNode] = true;

            // Update the distances for the neighbors of the closestNode
            for (let neighbor = 0; neighbor < nodeCount; ++neighbor) {
                dist[neighbor] = Math.min(dist[neighbor], dist[closestNode] + graph[closestNode][neighbor]);
            }
        }

        // Return the shortest distance to the destination node
        return dist[destNode];
    };

    // Find the initial shortest path from source to destination
    let shortestDistance = dijkstra(edges);

    // If shortest distance is already less than target, return empty array
    if (shortestDistance < targetDistance) {
        return [];
    }

    // Check if the initial shortest path equals the target distance
    let pathFound = shortestDistance === targetDistance;

    // Iterate over edges to adjust weights to try meeting the target distance
    for (const edge of edges) {
        // Skip edges with positive weight
        if (edge[2] > 0) {
            continue;
        }

        // If path is already found, set edge weight to infinity to exclude it
        if (pathFound) {
            edge[2] = INF;
            continue;
        }

        // Set temporary weight to 1 and recalculate shortest path
        edge[2] = 1;
        shortestDistance = dijkstra(edges);

        // If new path meets or is lower than target, set edge weight to make the path exact
        if (shortestDistance <= targetDistance) {
            pathFound = true;
            edge[2] += targetDistance - shortestDistance;
        }
    }

    // Return the modified edges if path found, otherwise empty array
    return pathFound ? edges : [];
}
console.log("==========================================")

// 874. Walking Robot Simulation
// Medium
// Topics
// Companies
// A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands:

// -2: Turn left 90 degrees.
// -1: Turn right 90 degrees.
// 1 <= k <= 9: Move forward k units, one unit at a time.
// Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). 
// If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command.

// Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25).

// Note:

// North means +Y direction.
// East means +X direction.
// South means -Y direction.
// West means -X direction.
// There can be obstacle in [0,0].
 
// Example 1:
// Input: commands = [4,-1,3], obstacles = []
// Output: 25
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 3 units to (3, 4).
// The furthest point the robot ever gets from the origin is (3, 4), which squared is 32 + 42 = 25 units away.

// Example 2:
// Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// Output: 65
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
// 4. Turn left.
// 5. Move north 4 units to (1, 8).
// The furthest point the robot ever gets from the origin is (1, 8), which squared is 12 + 82 = 65 units away.

// Example 3:
// Input: commands = [6,-1,-1,6], obstacles = []
// Output: 36
// Explanation: The robot starts at (0, 0):
// 1. Move north 6 units to (0, 6).
// 2. Turn right.
// 3. Turn right.
// 4. Move south 6 units to (0, 0).
// The furthest point the robot ever gets from the origin is (0, 6), which squared is 62 = 36 units away.

// @param {number[]} commands
// @param {number[][]} obstacles
// @return {number}

var robotSim = function(commands, obstacles) {
    // Directions: North, East, South, West
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0, y = 0; // Initial position
    let dir = 0; // Start facing North
    let maxDistance = 0;

    // Convert obstacles array to a Set for faster lookup
    const obstacleSet = new Set(obstacles.map(([ox, oy]) => `${ox},${oy}`));

    for (let command of commands) {
        if (command === -2) {
            // Turn left: Counterclockwise (subtract 1 from direction index)
            dir = (dir + 3) % 4; 
        } else if (command === -1) {
            // Turn right: Clockwise (add 1 to direction index)
            dir = (dir + 1) % 4; 
        } else {
            // Move forward `command` steps
            for (let i = 0; i < command; i++) {
                const nx = x + directions[dir][0];
                const ny = y + directions[dir][1];
                
                // Check if the next position is an obstacle
                if (obstacleSet.has(`${nx},${ny}`)) {
                    break; // Stop if there's an obstacle
                }

                // Update the robot's position
                x = nx;
                y = ny;

                // Calculate the squared distance from the origin
                maxDistance = Math.max(maxDistance, x * x + y * y);
            }
        }
    }

    return maxDistance;
};

console.log("==========================================")

// 2028. Find Missing Observations
// Medium
// You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. 
// n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

// You are given an integer array rolls of length m where rolls[i] 
// is the value of the ith observation. You are also given the two integers mean and n.

// Return an array of length n containing the missing observations such that 
// the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

// The average value of a set of k numbers is the sum of the numbers divided by k.

// Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.

// Example 1:
// Input: rolls = [3,2,4,3], mean = 4, n = 2
// Output: [6,6]
// Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.

// Example 2:
// Input: rolls = [1,5,6], mean = 3, n = 4
// Output: [2,3,2,2]
// Explanation: The mean of all n + m rolls is (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3.

// Example 3:
// Input: rolls = [1,2,3,4], mean = 6, n = 4
// Output: []
// Explanation: It is impossible for the mean to be 6 no matter what the 4 missing rolls are.

// @param {number[]} rolls
// @param {number} mean
// @param {number} n
// @return {number[]}

var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    
    // Calculate total sum of all n + m rolls
    const totalSum = mean * (n + m);
    
    // Calculate sum of the given rolls
    const sumOfRolls = rolls.reduce((sum, roll) => sum + roll, 0);
    
    // Calculate the sum that is missing
    const missingSum = totalSum - sumOfRolls;
    
    // Check if missingSum is within feasible range
    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }
    
    // Create an array of length n with each element starting at 1
    const result = new Array(n).fill(1);
    let remainingSum = missingSum - n; // Distribute the remaining sum
    
    // Distribute the remaining sum across the array, ensuring no value exceeds 6
    for (let i = 0; i < n && remainingSum > 0; i++) {
        let addValue = Math.min(5, remainingSum); // Max we can add is 5 (to make the roll 6)
        result[i] += addValue;
        remainingSum -= addValue;
    }
    
    return result;
};

console.log("==========================================")

// 3217. Delete Nodes From Linked List Present in Array
// Medium
// You are given an array of integers nums and the head of a linked list. 
// Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

// Example 1:
// Input: nums = [1,2,3], head = [1,2,3,4,5]
// Output: [4,5]
// Explanation:
// Remove the nodes with values 1, 2, and 3.

// Example 2:
// Input: nums = [1], head = [1,2,1,2,1,2]
// Output: [2,2,2]
// Explanation:
// Remove the nodes with value 1.

// Example 3:
// Input: nums = [5], head = [1,2,3,4]
// Output: [1,2,3,4]
// Explanation:
// No node has value 5.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {number[]} nums
// @param {ListNode} head
// @return {ListNode}

var modifiedList = function(nums, head) {
    // Convert nums to a set for O(1) lookup
    const numSet = new Set(nums);
    
    // Create a dummy node to simplify edge cases like removing the head node
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize pointers
    let prev = dummy;
    let curr = head;
    
    // Traverse the list
    while (curr !== null) {
        if (numSet.has(curr.val)) {
            // If the current value is in nums, skip the current node
            prev.next = curr.next;
        } else {
            // Otherwise, move prev pointer forward
            prev = curr;
        }
        // Move the current pointer forward
        curr = curr.next;
    }
    
    // Return the head of the modified list
    return dummy.next;
};
console.log("==========================================")

// 1367. Linked List in Binary Tree
// Medium
// Given a binary tree root and a linked list with head as the first node. 
// Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.
// In this context downward path means a path that starts at some node and goes downwards.

// Example 1:
// Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
// Output: true
// Explanation: Nodes in blue form a subpath in the binary Tree.  

// Example 2:
// Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
// Output: true

// Example 3:
// Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
// Output: false
// Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {ListNode} head
// @param {TreeNode} root
// @return {boolean}

var isSubPath = function(head, root) {
    // Helper function to check if starting from this root we can match the linked list
    const dfs = (head, root) => {
        // If head is null, we have matched the entire linked list
        if (head === null) return true;
        // If root is null, we cannot continue matching
        if (root === null) return false;
        // If values don't match, we can't proceed
        if (head.val !== root.val) return false;
        // Check the left and right children recursively for the next node in the linked list
        return dfs(head.next, root.left) || dfs(head.next, root.right);
    };
    
    // Function to traverse the binary tree and find the starting node
    const traverse = (head, root) => {
        // If root is null, no more nodes to check
        if (root === null) return false;
        // Check if from this node we can match the linked list
        if (dfs(head, root)) return true;
        // Otherwise, try traversing to the left and right child nodes
        return traverse(head, root.left) || traverse(head, root.right);
    };
    
    // Start the traversal from the root of the tree
    return traverse(head, root);
};
console.log("==========================================")

// 725. Split Linked List in Parts
// Medium
// Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.
// The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.
// The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.
// Return an array of the k parts.

// Example 1:
// Input: head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].

// Example 2:
// Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
// Output: [[1,2,3,4],[5,6,7],[8,9,10]]
// Explanation:
// The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.

// @param {ListNode} head
// @param {number} k
// @return {ListNode[]}

var splitListToParts = function(head, k) {
    let current = head;
    let length = 0;

    // Step 1: Calculate the length of the list
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Step 2: Calculate the size of each part
    const partSize = Math.floor(length / k);
    let extra = length % k;

    const result = new Array(k).fill(null);
    current = head;

    // Step 3: Split the list into parts
    for (let i = 0; i < k && current !== null; i++) {
        result[i] = current;
        let currentPartSize = partSize + (extra > 0 ? 1 : 0); // Add extra element to the first 'extra' parts
        extra--;

        // Move to the end of the current part
        for (let j = 1; j < currentPartSize; j++) {
            current = current.next;
        }

        // Break the list if there are more nodes to process
        let next = current.next;
        current.next = null; // Split the list here
        current = next; // Move to the next part of the list
    }

    return result;
};

// console.log("==========================================")

// 2326. Spiral Matrix IV
// Medium
// You are given two integers m and n, which represent the dimensions of a matrix.
// You are also given the head of a linked list of integers.
// Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), 
// starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.
// Return the generated matrix.

// Example 1:
// Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
// Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
// Explanation: The diagram above shows how the values are printed in the matrix.
// Note that the remaining spaces in the matrix are filled with -1.

// Example 2:
// Input: m = 1, n = 4, head = [0,1,2]
// Output: [[0,1,2,-1]]
// Explanation: The diagram above shows how the values are printed from left to right in the matrix.
// The last space in the matrix is set to -1.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {number} m
// @param {number} n
// @param {ListNode} head
// @return {number[][]}

// Function to populate an m x n matrix with the values from a given linked list in spiral order.
function spiralMatrix(m, n, head) {
    // Direction vectors for moving right, down, left, and up
    const directionVectors = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0], // up
    ];

    // Initialize matrix with -1, indicating unfilled positions
    let matrix = Array.from({ length: m }, () => new Array(n).fill(-1));

    // Variables to track the current position and direction
    let row = 0,
        col = 0,
        dirIndex = 0; // Direction index to index into directionVectors

    // Iterate through the linked list until we reach the end
    while (head !== null) {
        // Place the current value into the matrix
        matrix[row][col] = head.val;
        // Move to the next node in the list
        head = head.next;

        // Calculate the next position using the current direction
        let nextRow = row + directionVectors[dirIndex][0];
        let nextCol = col + directionVectors[dirIndex][1];

        // Check bounds and if the next position has already been visited
        if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] !== -1) {
            // Change direction if out of bounds or if position is filled
            dirIndex = (dirIndex + 1) % 4;
        }

        // Update current position to the new position based on updated direction
        row = row + directionVectors[dirIndex][0];
        col = col + directionVectors[dirIndex][1];
    }

    // Return the filled matrix
    return matrix;
}

console.log("==========================================")

// 2807. Insert Greatest Common Divisors in Linked List
// Medium
// Given the head of a linked list head, in which each node contains an integer value.
// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them
// Return the linked list after insertion.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:
// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.

// Example 2:
// Input: head = [7]
// Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// There are no pairs of adjacent nodes, so we return the initial linked list.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Helper function to calculate GCD of two numbers
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

var insertGreatestCommonDivisors = function(head) {
    let current = head;
    
    // Traverse the list until we reach the last node
    while (current !== null && current.next !== null) {
        // Get the next node
        let nextNode = current.next;
        
        // Calculate GCD of current node value and next node value
        let gcdValue = gcd(current.val, nextNode.val);
        
        // Create a new node with the GCD value
        let gcdNode = new ListNode(gcdValue);
        
        // Insert the new GCD node between current node and next node
        current.next = gcdNode;
        gcdNode.next = nextNode;
        
        // Move to the next pair of nodes
        current = nextNode;
    }
    
    return head;
};

console.log("==========================================")

// 2220. Minimum Bit Flips to Convert Number
// Easy
// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.
// For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. 
// We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, 
// flip the fifth bit from the right (a leading zero) to get 10111, etc.
// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.

// Example 1:
// Input: start = 10, goal = 7
// Output: 3
// Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
// - Flip the first bit from the right: 1010 -> 1011.
// - Flip the third bit from the right: 1011 -> 1111.
// - Flip the fourth bit from the right: 1111 -> 0111.
// It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.

// Example 2:
// Input: start = 3, goal = 4
// Output: 3
// Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
// - Flip the first bit from the right: 011 -> 010.
// - Flip the second bit from the right: 010 -> 000.
// - Flip the third bit from the right: 000 -> 100.
// It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.

// @param {number} start
// @param {number} goal
// @return {number}

var minBitFlips = function(start, goal) {
    // XOR start and goal to find the differing bits
    let xor = start ^ goal;
    
    // Count the number of 1s in the XOR result (Hamming weight)
    let count = 0;
    
    // Count set bits in XOR
    while (xor > 0) {
        // If the last bit is 1, increment the count
        count += xor & 1;
        // Shift XOR to the right by 1 to check the next bit
        xor >>= 1;
    }
    
    return count;
};

console.log("==========================================")

// 1684. Count the Number of Consistent Strings
// Easy
// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// @param {string} allowed
// @param {string[]} words
// @return {number}

var countConsistentStrings = function(allowed, words) {
    // Convert allowed string to a set for faster lookup
    const allowedSet = new Set(allowed);
    let count = 0;

    // Iterate through each word
    for (let word of words) {
        // Check if every character in the word is in the allowed set
        if ([...word].every(char => allowedSet.has(char))) {
            count++;
        }
    }

    return count;
};

console.log("==========================================")

// 1310. XOR Queries of a Subarray
// Medium
// You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].
// For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).
// Return an array answer where answer[i] is the answer to the ith query.

// Example 1:
// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8] 
// Explanation: 
// The binary representation of the elements in the array are:
// 1 = 0001 
// 3 = 0011 
// 4 = 0100 
// 8 = 1000 
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2 
// [1,2] = 3 xor 4 = 7 
// [0,3] = 1 xor 3 xor 4 xor 8 = 14 
// [3,3] = 8

// Example 2:
// Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
// Output: [8,0,4,4]

// @param {number[]} arr
// @param {number[][]} queries
// @return {number[]}

var xorQueries = function(arr, queries) {
    const n = arr.length;
    const prefixXor = new Array(n).fill(0);
    
    // Step 1: Compute the prefix XOR array
    prefixXor[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixXor[i] = prefixXor[i - 1] ^ arr[i];
    }
    
    // Step 2: Answer each query using the prefix XOR array
    const result = [];
    for (let [left, right] of queries) {
        if (left === 0) {
            result.push(prefixXor[right]);
        } else {
            result.push(prefixXor[right] ^ prefixXor[left - 1]);
        }
    }
    
    return result;
};

console.log("==========================================")

// 2419. Longest Subarray With Maximum Bitwise AND
// Medium
// You are given an integer array nums of size n.
// Consider a non-empty subarray from nums that has the maximum possible bitwise AND.
// In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.
// Return the length of the longest such subarray.
// The bitwise AND of an array is the bitwise AND of all the numbers in it.
// A subarray is a contiguous sequence of elements within an array.

// Example 1:
// Input: nums = [1,2,3,3,2,2]
// Output: 2
// Explanation:
// The maximum possible bitwise AND of a subarray is 3.
// The longest subarray with that value is [3,3], so we return 2.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 1
// Explanation:
// The maximum possible bitwise AND of a subarray is 4.
// The longest subarray with that value is [4], so we return 1.

// @param {number[]} nums
// @return {number}

var longestSubarray = function(nums) {
    let maxNum = Math.max(...nums);  // Step 1: Find the maximum element
    let maxLength = 0, currentLength = 0;
    
    for (let num of nums) {
        if (num === maxNum) {
            currentLength++;          // Step 2: Count the contiguous subarray with the max value
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;        // Reset the length if the number is not equal to maxNum
        }
    }
    
    return maxLength;                 // Step 3: Return the longest length found
};

console.log("==========================================")

// 1371. Find the Longest Substring Containing Vowels in Even Counts
// Medium
// Given the string s, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

// Example 1:
// Input: s = "eleetminicoworoep"
// Output: 13
// Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.

// Example 2:
// Input: s = "leetcodeisgreat"
// Output: 5
// Explanation: The longest substring is "leetc" which contains two e's.

// Example 3:
// Input: s = "bcbcbc"
// Output: 6
// Explanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.

// @param {string} s
// @return {number}

var findTheLongestSubstring = function(s) {
    // Vowel to bitmask mapping
    const vowels = { 'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4 };
    
    // Initialize the bitmask for vowels. Start with all vowels having even count (00000).
    let bitmask = 0;
    
    // Map to store the first occurrence of each bitmask state
    const firstOccurrence = new Map();
    firstOccurrence.set(0, -1);  // Initial state (all vowels even) at index -1
    
    let maxLength = 0;
    
    // Traverse through the string
    for (let i = 0; i < s.length; i++) {
        // Update bitmask if the character is a vowel
        if (s[i] in vowels) {
            bitmask ^= (1 << vowels[s[i]]);  // Toggle the corresponding vowel's bit
        }
        
        // Check if we've seen this bitmask before
        if (firstOccurrence.has(bitmask)) {
            // Calculate the length of the substring between first occurrence and current index
            maxLength = Math.max(maxLength, i - firstOccurrence.get(bitmask));
        } else {
            // Otherwise, store the first occurrence of this bitmask
            firstOccurrence.set(bitmask, i);
        }
    }
    
    return maxLength;
};

console.log("==========================================")

// 539. Minimum Time Difference
// Medium
// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

// Example 1:
// Input: timePoints = ["23:59","00:00"]
// Output: 1

// Example 2:
// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0

// @param {string[]} timePoints
// @return {number}

var findMinDifference = function(timePoints) {
    // Convert time to minutes from the start of the day
    const convertToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    // Sort timePoints based on their minute value
    const minutesList = timePoints.map(convertToMinutes).sort((a, b) => a - b);

    let minDiff = Infinity;

    // Check the difference between consecutive times
    for (let i = 1; i < minutesList.length; i++) {
        minDiff = Math.min(minDiff, minutesList[i] - minutesList[i - 1]);
    }

    // Check the difference between the last and the first time (across midnight)
    const wrapAroundDiff = (1440 - minutesList[minutesList.length - 1]) + minutesList[0];
    minDiff = Math.min(minDiff, wrapAroundDiff);

    return minDiff;
};

console.log("==========================================")

// 884. Uncommon Words from Two Sentences
// Easy
// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Explanation:
// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

// @param {string} s1
// @param {string} s2
// @return {string[]}

var uncommonFromSentences = function(s1, s2) {
    // Split both sentences into words
    let words1 = s1.split(" ");
    let words2 = s2.split(" ");
    
    // Create a map to count the frequency of each word
    let wordCount = new Map();
    
    // Count occurrences of words in the first sentence
    for (let word of words1) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
    
    // Count occurrences of words in the second sentence
    for (let word of words2) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
    
    // Collect words that appear exactly once across both sentences
    let uncommonWords = [];
    for (let [word, count] of wordCount) {
        if (count === 1) {
            uncommonWords.push(word);
        }
    }
    
    return uncommonWords;
};

console.log("==========================================")

// 179. Largest Number
// Medium
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// @param {number[]} nums
// @return {string}

var largestNumber = function(nums) {
    // Convert numbers to strings
    nums = nums.map(String);
    
    // Custom sort function that compares concatenated strings
    nums.sort((a, b) => (b + a) - (a + b));
    
    // Join the sorted array to form the largest number
    let result = nums.join('');
    
    // Edge case: If the result starts with '0', the entire number is '0'
    return result[0] === '0' ? '0' : result;
};

console.log("==========================================")

// 241. Different Ways to Add Parentheses
// Medium
// Companies
// Given a string expression of numbers and operators, 
// return all possible results from computing all the different possible ways to group numbers 
// and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer 
// and the number of different results does not exceed 104.

// Example 1:
// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0 
// (2-(1-1)) = 2

// Example 2:
// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10

// @param {string} expression
// @return {number[]}

var diffWaysToCompute = function(expression) {
    const result = [];
    
    // Check if the entire expression is a number
    if (!expression.includes('+') && !expression.includes('-') && !expression.includes('*')) {
        return [parseInt(expression)];
    }

    // Loop through each character in the expression
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        // If the character is an operator, split the expression
        if (char === '+' || char === '-' || char === '*') {
            // Recursively solve left and right parts of the expression
            const leftParts = diffWaysToCompute(expression.slice(0, i));
            const rightParts = diffWaysToCompute(expression.slice(i + 1));
            
            // Combine results from left and right based on the current operator
            for (let left of leftParts) {
                for (let right of rightParts) {
                    if (char === '+') {
                        result.push(left + right);
                    } else if (char === '-') {
                        result.push(left - right);
                    } else if (char === '*') {
                        result.push(left * right);
                    }
                }
            }
        }
    }
    
    return result;
};

console.log("==========================================")

// 214. Shortest Palindrome
// Hard
// You are given a string s. You can convert s to a palindrome by adding characters in front of it.
// Return the shortest palindrome you can find by performing this transformation.

// Example 1:
// Input: s = "aacecaaa"
// Output: "aaacecaaa"

// Example 2:
// Input: s = "abcd"
// Output: "dcbabcd"

// @param {string} s
// @return {string}

var shortestPalindrome = function(s) {
    // Reverse the input string `s`
    let rev = s.split('').reverse().join('');
    
    // Create a new string that concatenates `s` and `rev` with a special separator
    let combined = s + '#' + rev;
    
    // Build the prefix table using KMP algorithm on the combined string
    let n = combined.length;
    let lps = new Array(n).fill(0);
    
    for (let i = 1; i < n; i++) {
        let j = lps[i - 1];
        
        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }
        
        if (combined[i] === combined[j]) {
            j++;
        }
        
        lps[i] = j;
    }
    
    // Find the non-palindromic suffix and reverse it
    let suffix = rev.substring(0, s.length - lps[n - 1]);
    
    // Return the shortest palindrome by adding the reversed suffix in front of `s`
    return suffix + s;
};

console.log("==========================================")

// 386. Lexicographical Numbers
// Medium
// Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
// You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

// Example 1:
// Input: n = 13
// Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

// Example 2:
// Input: n = 2
// Output: [1,2]

// @param {number} n
// @return {number[]}

var lexicalOrder = function(n) {
    const result = [];
    let curr = 1;
    
    for (let i = 0; i < n; i++) {
        result.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else {
            if (curr >= n) {
                curr = Math.floor(curr / 10);
            }
            curr++;
            while (curr % 10 === 0) {
                curr = Math.floor(curr / 10);
            }
        }
    }
    
    return result;
};

console.log("==========================================")

// 440. K-th Smallest in Lexicographical Order
// Hard
// Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].

// Example 1:
// Input: n = 13, k = 2
// Output: 10
// Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.

// Example 2:
// Input: n = 1, k = 1
// Output: 1

// @param {number} n
// @param {number} k
// @return {number}

var findKthNumber = function(n, k) {
    let curr = 1;
    k--; // Because we are starting from 1st number, so decrease k by 1

    const countSteps = (curr, n) => {
        let steps = 0;
        let first = curr;
        let last = curr;
        while (first <= n) {
            steps += Math.min(n + 1, last + 1) - first;
            first *= 10;
            last = last * 10 + 9;
        }
        return steps;
    };

    while (k > 0) {
        let steps = countSteps(curr, n);
        if (steps <= k) {
            k -= steps;
            curr++;
        } else {
            curr *= 10;
            k--;
        }
    }

    return curr;
};

console.log("==========================================")

// 2707. Extra Characters in a String
// Medium
// You are given a 0-indexed string s and a dictionary of words dictionary. 
// You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. 
// There may be some extra characters in s which are not present in any of the substrings.
// Return the minimum number of extra characters left over if you break up s optimally.

// Example 1:
// Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
// Output: 1
// Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. 
// There is only 1 unused character (at index 4), so we return 1.

// Example 2:
// Input: s = "sayhelloworld", dictionary = ["hello","world"]
// Output: 3
// Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. 
// The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.

// @param {string} s
// @param {string[]} dictionary
// @return {number}

var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dp = new Array(n + 1).fill(Infinity);  // DP array filled with infinity initially
    dp[0] = 0;  // No extra characters when there's no string

    const wordSet = new Set(dictionary);  // Convert dictionary to a set for O(1) lookup

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;  // Assume the current character is extra
        
        for (let j = 0; j < i; j++) {
            const substring = s.slice(j, i);  // Substring s[j:i]
            if (wordSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j]);  // If it's a word, take the minimum extra chars
            }
        }
    }

    return dp[n];  // The answer is dp[n], the min extra chars for the whole string
};

console.log("==========================================")

// 3043. Find the Length of the Longest Common Prefix
// Medium
// You are given two arrays with positive integers arr1 and arr2.
// A prefix of a positive integer is an integer formed by one or more of its digits, 
// starting from its leftmost digit. For example, 123 is a prefix of the integer 12345, while 234 is not.
// A common prefix of two integers a and b is an integer c, such that c is a prefix of both a and b. 
// For example, 5655359 and 56554 have a common prefix 565 while 1223 and 43456 do not have a common prefix.
// You need to find the length of the longest common prefix between all pairs of integers (x, y) such that x belongs to arr1 and y belongs to arr2.
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
    // Helper function to find the length of common prefix between two numbers
    function findCommonPrefix(a, b) {
        let strA = a.toString();
        let strB = b.toString();
        let i = 0;
        
        // Compare characters of both strings one by one
        while (i < strA.length && i < strB.length && strA[i] === strB[i]) {
            i++;
        }
        
        return i;  // i will be the length of the common prefix
    }

    let maxPrefixLength = 0;

    // Iterate over all pairs (x, y) where x is from arr1 and y is from arr2
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // If the first digits don't match, no need to check further
            if (arr1[i].toString()[0] !== arr2[j].toString()[0]) {
                continue;  // No common prefix possible if the first digits differ
            }
            
            // Find the common prefix length between arr1[i] and arr2[j]
            let prefixLength = findCommonPrefix(arr1[i], arr2[j]);
            // Update maxPrefixLength if we find a longer prefix
            maxPrefixLength = Math.max(maxPrefixLength, prefixLength);
        }
    }

    return maxPrefixLength;
};

console.log("==========================================")

// 2416. Sum of Prefix Scores of Strings
// Hard
// You are given an array words of size n consisting of non-empty strings.
// We define the score of a string word as the number of strings words[i] such that word is a prefix of words[i].
// For example, if words = ["a", "ab", "abc", "cab"], then the score of "ab" is 2, since "ab" is a prefix of both "ab" and "abc".
// Return an array answer of size n where answer[i] is the sum of scores of every non-empty prefix of words[i].
// Note that a string is considered as a prefix of itself.

// Example 1:
// Input: words = ["abc","ab","bc","b"]
// Output: [5,4,3,2]
// Explanation: The answer for each string is the following:
// - "abc" has 3 prefixes: "a", "ab", and "abc".
// - There are 2 strings with the prefix "a", 2 strings with the prefix "ab", and 1 string with the prefix "abc".
// The total is answer[0] = 2 + 2 + 1 = 5.
// - "ab" has 2 prefixes: "a" and "ab".
// - There are 2 strings with the prefix "a", and 2 strings with the prefix "ab".
// The total is answer[1] = 2 + 2 = 4.
// - "bc" has 2 prefixes: "b" and "bc".
// - There are 2 strings with the prefix "b", and 1 string with the prefix "bc".
// The total is answer[2] = 2 + 1 = 3.
// - "b" has 1 prefix: "b".
// - There are 2 strings with the prefix "b".
// The total is answer[3] = 2.

// Example 2:
// Input: words = ["abcd"]
// Output: [4]
// Explanation:
// "abcd" has 4 prefixes: "a", "ab", "abc", and "abcd".
// Each prefix has a score of one, so the total is answer[0] = 1 + 1 + 1 + 1 = 4.

// @param {string[]} words
// @return {number[]}

class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0; // Count how many words share this prefix
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    // Inserts a word into the trie and increments counts for each prefix
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count += 1; // Increment count for this prefix
        }
    }
    
    // Calculate the sum of prefix scores for a word
    getPrefixScore(word) {
        let node = this.root;
        let sum = 0;
        for (const char of word) {
            if (node.children[char]) {
                node = node.children[char];
                sum += node.count; // Add the count of this prefix
            } else {
                break; // No more matching prefixes
            }
        }
        return sum;
    }
}

var sumPrefixScores = function(words) {
    const trie = new Trie();
    
    // Insert all words into the trie
    for (const word of words) {
        trie.insert(word);
    }
    
    // Calculate prefix scores for each word
    const result = [];
    for (const word of words) {
        result.push(trie.getPrefixScore(word));
    }
    
    return result;
};
console.log("==========================================")

// 729. My Calendar I
// Medium
// You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.
// A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).
// The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), 
//     the range of real numbers x such that start <= x < end.
// Implement the MyCalendar class:
// MyCalendar() Initializes the calendar object.
// boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a double booking. 
// Otherwise, return false and do not add the event to the calendar.
 

// Example 1:
// Input
// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// Output
// [null, true, false, true]
// Explanation
// MyCalendar myCalendar = new MyCalendar();
// myCalendar.book(10, 20); // return True
// myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
// myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.


var MyCalendar = function() {
    this.bookings = [];
};

// @param {number} start 
// @param {number} end
// @return {boolean}

MyCalendar.prototype.book = function(start, end) {
    for (let [s, e] of this.bookings) {
        // Check if the new event overlaps with any existing event
        if (Math.max(s, start) < Math.min(e, end)) {
            return false; // There is an overlap
        }
    }
    // No overlap, add the event
    this.bookings.push([start, end]);
    return true;
};

// Your MyCalendar object will be instantiated and called as such:
//  var obj = new MyCalendar()
//  var param_1 = obj.book(start,end)
 

console.log("==========================================")

// 731. My Calendar II
// Medium
// You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a triple booking.
// A triple booking happens when three events have some non-empty intersection (i.e., some moment is common to all the three events.).
// The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), 
//     the range of real numbers x such that start <= x < end.
// Implement the MyCalendarTwo class:
// MyCalendarTwo() Initializes the calendar object.
// boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a triple booking. 
// Otherwise, return false and do not add the event to the calendar.

// Example 1:
// Input
// ["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
// [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// Output
// [null, true, true, true, false, true, true]
// Explanation
// MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
// myCalendarTwo.book(10, 20); 
// // return True, The event can be booked. 
// myCalendarTwo.book(50, 60); 
// // return True, The event can be booked. 
// myCalendarTwo.book(10, 40); 
// // return True, The event can be double booked. 
// myCalendarTwo.book(5, 15);  
// // return False, The event cannot be booked, because it would result in a triple booking.
// myCalendarTwo.book(5, 10); 
// // return True, The event can be booked, as it does not use time 10 which is already double booked.
// myCalendarTwo.book(25, 55); 
// // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, 
// // the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.

var MyCalendarTwo = function() {
    // Store all bookings and double bookings
    this.events = [];
    this.overlaps = [];
};

// @param {number} start 
// @param {number} end
// @return {boolean}

MyCalendarTwo.prototype.book = function(start, end) {
    // First check if this booking would cause a triple booking
    for (let [oStart, oEnd] of this.overlaps) {
        // If there is an overlap with a double booked event, it's a triple booking
        if (start < oEnd && end > oStart) {
            return false;
        }
    }
    
    // Now find all overlaps with existing events and record them as double bookings
    for (let [eStart, eEnd] of this.events) {
        // Check if the current event overlaps with an existing event
        if (start < eEnd && end > eStart) {
            // There is an overlap, so we record this overlap
            this.overlaps.push([Math.max(start, eStart), Math.min(end, eEnd)]);
        }
    }
    
    // Add the new event to the list of booked events
    this.events.push([start, end]);
    return true;
};

// Your MyCalendarTwo object will be instantiated and called as such:
// var obj = new MyCalendarTwo()
// var param_1 = obj.book(start,end)


console.log("==========================================")

// 641. Design Circular Deque
// Medium
// Design your implementation of the circular double-ended queue (deque).
// Implement the MyCircularDeque class:
// MyCircularDeque(int k) Initializes the deque with a maximum size of k.
// boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
// boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
// boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
// boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
// int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
// int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
// boolean isEmpty() Returns true if the deque is empty, or false otherwise.
// boolean isFull() Returns true if the deque is full, or false otherwise.

// Example 1:
// Input
// ["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 2, true, true, true, 4]
// Explanation
// MyCircularDeque myCircularDeque = new MyCircularDeque(3);
// myCircularDeque.insertLast(1);  // return True
// myCircularDeque.insertLast(2);  // return True
// myCircularDeque.insertFront(3); // return True
// myCircularDeque.insertFront(4); // return False, the queue is full.
// myCircularDeque.getRear();      // return 2
// myCircularDeque.isFull();       // return True
// myCircularDeque.deleteLast();   // return True
// myCircularDeque.insertFront(4); // return True
// myCircularDeque.getFront();     // return 4

// @param {number} k

var MyCircularDeque = function(k) {
    this.deque = new Array(k);
    this.capacity = k;
    this.front = 0;
    this.rear = k - 1;
    this.size = 0;
};

// @param {number} value
// @return {boolean}

MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.deque[this.front] = value;
    this.size++;
    return true;
};

// @param {number} value
// @return {boolean}

MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.capacity;
    this.deque[this.rear] = value;
    this.size++;
    return true;
};

// @return {boolean}

MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
};

// @return {boolean}

MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;
    return true;
};

// @return {number}

MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1;
    return this.deque[this.front];
};

// @return {number}

MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1;
    return this.deque[this.rear];
};

// @return {boolean}

MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

// @return {boolean}

MyCircularDeque.prototype.isFull = function() {
    return this.size === this.capacity;
};

// Your MyCircularDeque object will be instantiated and called as such:
// var obj = new MyCircularDeque(k)
// var param_1 = obj.insertFront(value)
// var param_2 = obj.insertLast(value)
// var param_3 = obj.deleteFront()
// var param_4 = obj.deleteLast()
// var param_5 = obj.getFront()
// var param_6 = obj.getRear()
// var param_7 = obj.isEmpty()
// var param_8 = obj.isFull()

console.log("==========================================")

// 432. All Oone Data Structure
// Hard
// Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.
// Implement the AllOne class:
// AllOne() Initializes the object of the data structure.
// inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
// dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, 
// remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
// getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
// getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
// Note that each function must run in O(1) average time complexity.

// Example 1:
// Input: ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
// [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
// Output: [null, null, null, "hello", "hello", null, "hello", "leet"]

// Explanation
// AllOne allOne = new AllOne();
// allOne.inc("hello");
// allOne.inc("hello");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "hello"
// allOne.inc("leet");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "leet"

var AllOne = function() {
    
};

// @param {string} key
// @return {void}

AllOne.prototype.inc = function(key) {
    
};

// @param {string} key
// @return {void}

AllOne.prototype.dec = function(key) {
    
};

// @return {string}

AllOne.prototype.getMaxKey = function() {
    
};

// @return {string}

AllOne.prototype.getMinKey = function() {
    
};

// Your AllOne object will be instantiated and called as such:
// var obj = new AllOne()
// obj.inc(key)
// obj.dec(key)
// var param_3 = obj.getMaxKey()
// var param_4 = obj.getMinKey()

ANSWER:
class ListNode {
    constructor(count) {
        this.count = count;
        this.keys = new Set();
        this.prev = null;
        this.next = null;
    }
}

class AllOne {
    constructor() {
        this.keyCountMap = new Map();  // Key -> Count
        this.countNodeMap = new Map(); // Count -> Node
        this.head = new ListNode(0);   // Dummy head
        this.tail = new ListNode(0);   // Dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Helper method to insert a new node after the given prevNode
    _insertNodeAfter(prevNode, newNode) {
        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
    }

    // Helper method to remove a node
    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.countNodeMap.delete(node.count);
    }

    // Increment the count of the key
    inc(key) {
        let count = this.keyCountMap.get(key) || 0;
        this.keyCountMap.set(key, count + 1);

        let curNode = this.countNodeMap.get(count);
        let newNode;

        if (this.countNodeMap.has(count + 1)) {
            newNode = this.countNodeMap.get(count + 1);
        } else {
            newNode = new ListNode(count + 1);
            this.countNodeMap.set(count + 1, newNode);
            this._insertNodeAfter(curNode || this.head, newNode);
        }

        newNode.keys.add(key);
        if (curNode) {
            curNode.keys.delete(key);
            if (curNode.keys.size === 0) {
                this._removeNode(curNode);
            }
        }
    }

    // Decrement the count of the key
    dec(key) {
        let count = this.keyCountMap.get(key);
        if (count === 1) {
            this.keyCountMap.delete(key);
        } else {
            this.keyCountMap.set(key, count - 1);
        }

        let curNode = this.countNodeMap.get(count);
        let newNode;

        if (count > 1) {
            if (this.countNodeMap.has(count - 1)) {
                newNode = this.countNodeMap.get(count - 1);
            } else {
                newNode = new ListNode(count - 1);
                this.countNodeMap.set(count - 1, newNode);
                this._insertNodeAfter(curNode.prev, newNode);
            }
            newNode.keys.add(key);
        }

        curNode.keys.delete(key);
        if (curNode.keys.size === 0) {
            this._removeNode(curNode);
        }
    }

    // Return one of the keys with the maximal count
    getMaxKey() {
        return this.tail.prev === this.head ? "" : [...this.tail.prev.keys][0];
    }

    // Return one of the keys with the minimal count
    getMinKey() {
        return this.head.next === this.tail ? "" : [...this.head.next.keys][0];
    }
}

console.log("==========================================")

// 1381. Design a Stack With Increment Operation
// Medium
// Design a stack that supports increment operations on its elements.
// Implement the CustomStack class:
// CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
// void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
// int pop() Pops and returns the top of the stack or -1 if the stack is empty.
// void inc(int k, int val) Increments the bottom k elements of the stack by val. 
// If there are less than k elements in the stack, increment all the elements in the stack.

// Example 1:
// Input
// ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
// [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
// Output
// [null,null,null,2,null,null,null,null,null,103,202,201,-1]
// Explanation
// CustomStack stk = new CustomStack(3); // Stack is Empty []
// stk.push(1);                          // stack becomes [1]
// stk.push(2);                          // stack becomes [1, 2]
// stk.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
// stk.push(2);                          // stack becomes [1, 2]
// stk.push(3);                          // stack becomes [1, 2, 3]
// stk.push(4);                          // stack still [1, 2, 3], Do not add another elements as size is 4
// stk.increment(5, 100);                // stack becomes [101, 102, 103]
// stk.increment(2, 100);                // stack becomes [201, 202, 103]
// stk.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
// stk.pop();                            // return 202 --> Return top of the stack 202, stack becomes [201]
// stk.pop();                            // return 201 --> Return top of the stack 201, stack becomes []
// stk.pop();                            // return -1 --> Stack is empty return -1.
 
// @param {number} maxSize

var CustomStack = function(maxSize) {
    
};

// @param {number} x
// @return {void}

CustomStack.prototype.push = function(x) {
    
};

// @return {number}

CustomStack.prototype.pop = function() {
    
};

// @param {number} k 
// @param {number} val
// @return {void}

CustomStack.prototype.increment = function(k, val) {
    
};

// Your CustomStack object will be instantiated and called as such:
// var obj = new CustomStack(maxSize)
// obj.push(x)
// var param_2 = obj.pop()
// obj.increment(k,val)

class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
    }

    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return -1;
        } else {
            return this.stack.pop();
        }
    }

    increment(k, val) {
        // We increment the first 'k' elements by 'val'
        const limit = Math.min(k, this.stack.length);
        for (let i = 0; i < limit; i++) {
            this.stack[i] += val;
        }
    }
}

console.log("==========================================")

// 1497. Check If Array Pairs Are Divisible by k
// Medium
// Given an array of integers arr of even length n and an integer k.
// We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
// Return true If you can find a way to do that or false otherwise.

// Example 1:
// Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

// Example 2:
// Input: arr = [1,2,3,4,5,6], k = 7
// Output: true
// Explanation: Pairs are (1,6),(2,5) and(3,4).

// Example 3:
// Input: arr = [1,2,3,4,5,6], k = 10
// Output: false
// Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.

// @param {number[]} arr
// @param {number} k
// @return {boolean}

var canArrange = function(arr, k) {
    let remainderFreq = new Array(k).fill(0);
    
    // Step 1: Calculate remainders and count frequencies
    for (let num of arr) {
        let remainder = ((num % k) + k) % k;  // This handles negative numbers correctly
        remainderFreq[remainder]++;
    }
    
    // Step 2: Check pairing conditions
    for (let i = 0; i <= k / 2; i++) {
        if (i === 0) {
            // For remainder 0, there must be an even number of such elements
            if (remainderFreq[i] % 2 !== 0) return false;
        } else if (i === k - i) {
            // For remainder k / 2, there must be an even number (if k is even)
            if (remainderFreq[i] % 2 !== 0) return false;
        } else {
            // For all other remainders, remainderFreq[i] must equal remainderFreq[k - i]
            if (remainderFreq[i] !== remainderFreq[k - i]) return false;
        }
    }
    
    return true;
};
console.log("==========================================")

// 1331. Rank Transform of an Array
// Easy
// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following rules:
// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Example 1:
// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

// Example 2:
// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.

// Example 3:
// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]

// @param {number[]} arr
// @return {number[]}

var arrayRankTransform = function(arr) {
    if (arr.length === 0) return [];

    // Create a sorted version of the array with unique elements
    let sortedUniqueArr = [...new Set(arr)].sort((a, b) => a - b);

    // Create a rank map
    let rankMap = new Map();
    sortedUniqueArr.forEach((val, index) => {
        rankMap.set(val, index + 1);
    });

    // Transform the original array to its rank
    return arr.map(val => rankMap.get(val));
};

console.log("==========================================")

// 1590. Make Sum Divisible by P
// Medium
// Given an array of positive integers nums, remove the smallest subarray (possibly empty) 
// such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.
// Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.
// A subarray is defined as a contiguous block of elements in the array.

// Example 1:
// Input: nums = [3,1,4,2], p = 6
// Output: 1
// Explanation: The sum of the elements in nums is 10, which is not divisible by 6. 
// We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.

// Example 2:
// Input: nums = [6,3,5,2], p = 9
// Output: 2
// Explanation: We cannot remove a single element to get a sum divisible by 9. 
// The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

// Example 3:
// Input: nums = [1,2,3], p = 3
// Output: 0
// Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.

// @param {number[]} nums
// @param {number} p
// @return {number}

var minSubarray = function(nums, p) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let target_mod = totalSum % p;
    
    // If the sum is already divisible by p, we don't need to remove anything
    if (target_mod === 0) return 0;

    let prefixSum = 0;
    let minLength = nums.length;
    let prefixModMap = new Map(); // To store the modulo of prefix sums and their index
    prefixModMap.set(0, -1); // Base case: prefix sum 0 at index -1

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let current_mod = prefixSum % p;
        
        // The value we're looking for to remove
        let desired_mod = (current_mod - target_mod + p) % p;

        if (prefixModMap.has(desired_mod)) {
            // Calculate the length of the subarray that could be removed
            minLength = Math.min(minLength, i - prefixModMap.get(desired_mod));
        }

        // Store the current prefix sum mod and its index
        prefixModMap.set(current_mod, i);
    }

    return minLength === nums.length ? -1 : minLength;
};

console.log("==========================================")

// 2491. Divide Players Into Teams of Equal Skill
// Medium
// You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. 
// Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.
// The chemistry of a team is equal to the product of the skills of the players on that team.
// Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that 
// the total skill of each team is equal.

// Example 1:
// Input: skill = [3,2,5,1,3,4]
// Output: 22
// Explanation: 
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

// Example 2:
// Input: skill = [3,4]
// Output: 12
// Explanation: 
// The two players form a team with a total skill of 7.
// The chemistry of the team is 3 * 4 = 12.

// Example 3:
// Input: skill = [1,1,2,3]
// Output: -1
// Explanation: 
// There is no way to divide the players into teams such that the total skill of each team is equal.

// @param {number[]} skill
// @return {number}

var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);  // Sort the skills array
    
    let totalSkill = skill[0] + skill[skill.length - 1];  // Total skill for the first team
    let chemistrySum = 0;

    for (let i = 0, j = skill.length - 1; i < j; i++, j--) {
        let currentSkill = skill[i] + skill[j];
        
        // Check if the current pair has the same total skill as the first pair
        if (currentSkill !== totalSkill) {
            return -1;  // Not possible to divide into teams with equal total skill
        }
        
        // Add the chemistry (product of skills) of the current pair
        chemistrySum += skill[i] * skill[j];
    }
    
    return chemistrySum;  // Return the sum of chemistry
};
console.log("==========================================")

// 567. Permutation in String
// Medium
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 
// @param {string} s1
// @param {string} s2
// @return {boolean}

var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    // Create frequency arrays for s1 and the current window in s2
    let s1Count = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);
    
    // Fill the frequency array for s1 and the first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        windowCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    let matches = 0;
    // Compare both frequency arrays initially
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === windowCount[i]) matches++;
    }
    
    // Sliding window over s2
    for (let i = s1.length; i < s2.length; i++) {
        if (matches === 26) return true; // All characters match
        
        // Slide the window to the right: remove the char going out of the window and add the new one
        let indexOut = s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0);
        let indexIn = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        
        // Remove the outgoing char
        if (windowCount[indexOut] === s1Count[indexOut]) matches--;
        windowCount[indexOut]--;
        if (windowCount[indexOut] === s1Count[indexOut]) matches++;
        
        // Add the incoming char
        if (windowCount[indexIn] === s1Count[indexIn]) matches--;
        windowCount[indexIn]++;
        if (windowCount[indexIn] === s1Count[indexIn]) matches++;
    }
    
    return matches === 26;
};

console.log("==========================================")

// 1813. Sentence Similarity III
// Medium
// You are given two strings sentence1 and sentence2, each representing a sentence composed of words. 
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
// Each word consists of only uppercase and lowercase English characters.

// Two sentences s1 and s2 are considered similar if it is possible to insert an arbitrary sentence 
// (possibly empty) inside one of these sentences such that the two sentences become equal. 
// Note that the inserted sentence must be separated from existing words by spaces.

// For example,

// s1 = "Hello Jane" and s2 = "Hello my name is Jane" can be made equal by inserting "my name is" between "Hello" and "Jane" in s1.
// s1 = "Frog cool" and s2 = "Frogs are cool" are not similar, since although there is a sentence "s are" inserted into s1, 
// it is not separated from "Frog" by a space.
// Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false.

// Example 1:
// Input: sentence1 = "My name is Haley", sentence2 = "My Haley"
// Output: true
// Explanation:
// sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".

// Example 2:
// Input: sentence1 = "of", sentence2 = "A lot of words"
// Output: false
// Explanation:
// No single sentence can be inserted inside one of the sentences to make it equal to the other.

// Example 3:
// Input: sentence1 = "Eating right now", sentence2 = "Eating"
// Output: true
// Explanation:

// @param {string} sentence1
// @param {string} sentence2
// @return {boolean}

var areSentencesSimilar = function(sentence1, sentence2) {
    let s1 = sentence1.split(" ");
    let s2 = sentence2.split(" ");
    
    let i = 0, j = 0;
    // Compare prefix
    while (i < s1.length && i < s2.length && s1[i] === s2[i]) {
        i++;
    }
    
    // Compare suffix
    while (j < s1.length - i && j < s2.length - i && s1[s1.length - 1 - j] === s2[s2.length - 1 - j]) {
        j++;
    }
    
    // Check if the remaining words (middle part) can form an insertion.
    return i + j === Math.min(s1.length, s2.length);
};
console.log("==========================================")

// 2696. Minimum String Length After Removing Substrings
// Easy
// You are given a string s consisting only of uppercase English letters.
// You can apply some operations to this string where, in one operation, 
// you can remove any occurrence of one of the substrings "AB" or "CD" from s.
// Return the minimum possible length of the resulting string that you can obtain.
// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

// Example 1:
// Input: s = "ABFCACDB"
// Output: 2
// Explanation: We can do the following operations:
// - Remove the substring "ABFCACDB", so s = "FCACDB".
// - Remove the substring "FCACDB", so s = "FCAB".
// - Remove the substring "FCAB", so s = "FC".
// So the resulting length of the string is 2.
// It can be shown that it is the minimum length that we can obtain.

// Example 2:
// Input: s = "ACBBD"
// Output: 5
// Explanation: We cannot do any operations on the string so the length remains the same.

// @param {string} s
// @return {number}

var minLength = function(s) {
    const stack = [];
    
    for (let char of s) {
        if (stack.length > 0) {
            const last = stack[stack.length - 1];
            if ((last === 'A' && char === 'B') || (last === 'C' && char === 'D')) {
                // Remove the last element as "AB" or "CD" is found
                stack.pop();
            } else {
                // Push current character to stack
                stack.push(char);
            }
        } else {
            // Stack is empty, just push the current character
            stack.push(char);
        }
    }
    
    // The remaining stack size is the minimum possible length
    return stack.length;
};

console.log("==========================================")

// 1963. Minimum Number of Swaps to Make the String Balanced
// Medium
// You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.
// A string is called balanced if and only if:
// It is the empty string, or
// It can be written as AB, where both A and B are balanced strings, or
// It can be written as [C], where C is a balanced string.
// You may swap the brackets at any two indices any number of times.
// Return the minimum number of swaps to make s balanced.

// Example 1:
// Input: s = "][]["
// Output: 1
// Explanation: You can make the string balanced by swapping index 0 with index 3.
// The resulting string is "[[]]".

// Example 2:
// Input: s = "]]][[["
// Output: 2
// Explanation: You can do the following to make the string balanced:
// - Swap index 0 with index 4. s = "[]][][".
// - Swap index 1 with index 5. s = "[[][]]".
// The resulting string is "[[][]]".

// Example 3:
// Input: s = "[]"
// Output: 0
// Explanation: The string is already balanced.

// @param {string} s
// @return {number}

// Function to calculate the minimum number of swaps required to balance the brackets
function minSwaps(s) {
    let openBrackets = 0; // Variable to keep track of the number of unmatched '['
    let swaps = 0;        // Variable to keep track of the minimum number of swaps

    // Loop through each character in the string
    for (let c of s) {
        // If the current character is an opening bracket
        if (c === '[') {
            // Increase the count of unmatched opening brackets
            openBrackets++;
        } 
        // If it is a closing bracket and there are unmatched opening brackets
        else if (openBrackets > 0) {
            // Match the bracket and decrease the count of unmatched opening brackets
            openBrackets--;
        }
    }
  
    // The number of swaps needed is half the number of unmatched opening brackets (rounded up)
    // because each swap can fix two unmatched opening brackets
    swaps = Math.ceil(openBrackets / 2);
  
    // Return the calculated number of swaps
    return swaps;
}
console.log("==========================================")

// 921. Minimum Add to Make Parentheses Valid
// Medium
// A parentheses string is valid if and only if:
// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.
// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

// Example 1:
// Input: s = "())"
// Output: 1

// Example 2:
// Input: s = "((("
// Output: 3

// @param {string} s
// @return {number}

var minAddToMakeValid = function(s) {
    let balance = 0; // To track unmatched opening parentheses '('
    let unmatchedClose = 0; // To track unmatched closing parentheses ')'
    
    for (let char of s) {
        if (char === '(') {
            balance++; // Unmatched opening parenthesis
        } else if (char === ')') {
            if (balance > 0) {
                balance--; // Match with an opening parenthesis
            } else {
                unmatchedClose++; // Unmatched closing parenthesis
            }
        }
    }
    
    // The result is the sum of unmatched opening and closing parentheses
    return balance + unmatchedClose;
};

console.log("==========================================")

// 962. Maximum Width Ramp
// Medium
// A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.
// Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

// Example 1:
// Input: nums = [6,0,8,2,1,5]
// Output: 4
// Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.

// Example 2:
// Input: nums = [9,8,1,0,1,9,4,0,4,1]
// Output: 7
// Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.

// @param {number[]} nums
// @return {number}

var maxWidthRamp = function(nums) {
    let stack = [];
    let maxWidth = 0;
    
    // Build the stack with indices, maintaining a decreasing order of nums values
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }
    
    // Traverse from right to left to find the maximum width ramp
    for (let j = nums.length - 1; j >= 0; j--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            let i = stack.pop();
            maxWidth = Math.max(maxWidth, j - i);
        }
    }
    
    return maxWidth;
};

console.log("==========================================")

// 1942. The Number of the Smallest Unoccupied Chair
// Medium
// There is a party where n friends numbered from 0 to n - 1 are attending. 
// There is an infinite number of chairs in this party that are numbered from 0 to infinity. 
// When a friend arrives at the party, they sit on the unoccupied chair with the smallest number.
// For example, if chairs 0, 1, and 5 are occupied when a friend comes, they will sit on chair number 2.
// When a friend leaves the party, their chair becomes unoccupied at the moment they leave. 
// If another friend arrives at that same moment, they can sit in that chair.
// You are given a 0-indexed 2D integer array times where times[i] = [arrivali, leavingi], 
// indicating the arrival and leaving times of the ith friend respectively, and an integer targetFriend. All arrival times are distinct.
// Return the chair number that the friend numbered targetFriend will sit on.

// Example 1:
// Input: times = [[1,4],[2,3],[4,6]], targetFriend = 1
// Output: 1
// Explanation: 
// - Friend 0 arrives at time 1 and sits on chair 0.
// - Friend 1 arrives at time 2 and sits on chair 1.
// - Friend 1 leaves at time 3 and chair 1 becomes empty.
// - Friend 0 leaves at time 4 and chair 0 becomes empty.
// - Friend 2 arrives at time 4 and sits on chair 0.
// Since friend 1 sat on chair 1, we return 1.

// Example 2:
// Input: times = [[3,10],[1,5],[2,6]], targetFriend = 0
// Output: 2
// Explanation: 
// - Friend 1 arrives at time 1 and sits on chair 0.
// - Friend 2 arrives at time 2 and sits on chair 1.
// - Friend 0 arrives at time 3 and sits on chair 2.
// - Friend 1 leaves at time 5 and chair 0 becomes empty.
// - Friend 2 leaves at time 6 and chair 1 becomes empty.
// - Friend 0 leaves at time 10 and chair 2 becomes empty.
// Since friend 0 sat on chair 2, we return 2.

// @param {number[][]} times
// @param {number} targetFriend
// @return {number}

class MinHeap {
    constructor() {
      this.data = [];
    }
  
    // Insert element into heap and maintain heap order
    push(val) {
      this.data.push(val);
      this._heapifyUp();
    }
  
    // Remove and return the smallest element (root) from the heap
    pop() {
      if (this.data.length === 1) return this.data.pop();
      const root = this.data[0];
      this.data[0] = this.data.pop();
      this._heapifyDown();
      return root;
    }
  
    // Get the smallest element without removing it
    peek() {
      return this.data[0];
    }
  
    size() {
      return this.data.length;
    }
  
    _heapifyUp() {
      let index = this.data.length - 1;
      const current = this.data[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.data[parentIndex] <= current) break;
        this.data[index] = this.data[parentIndex];
        index = parentIndex;
      }
      this.data[index] = current;
    }
  
    _heapifyDown() {
      let index = 0;
      const length = this.data.length;
      const current = this.data[0];
  
      while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let smallestIdx = index;
  
        if (leftChildIdx < length && this.data[leftChildIdx] < this.data[smallestIdx]) {
          smallestIdx = leftChildIdx;
        }
  
        if (rightChildIdx < length && this.data[rightChildIdx] < this.data[smallestIdx]) {
          smallestIdx = rightChildIdx;
        }
  
        if (smallestIdx === index) break;
  
        this.data[index] = this.data[smallestIdx];
        index = smallestIdx;
      }
  
      this.data[index] = current;
    }
  }
  
  function smallestChair(times, targetFriend) {
    let nextUnsatChair = 0;
    const emptyChairs = new MinHeap(); // Min-heap for available chairs
    const occupied = new MinHeap();    // Min-heap for occupied chairs (sorted by leaving time)
  
    // Add the friend's index to each entry in times and sort by arrival time
    times = times.map((time, index) => [...time, index]);
    times.sort((a, b) => a[0] - b[0]); // Sort by arrival time
  
    // Process each friend based on their arrival and leaving times
    for (const [arrival, leaving, i] of times) {
      // Free up chairs from friends who have left before the current friend's arrival
      while (occupied.size() > 0 && occupied.peek()[0] <= arrival) {
        const unsatChair = occupied.pop()[1];
        emptyChairs.push(unsatChair); // Add the chair back to available chairs
      }
  
      // If the current friend is the target friend, return their chair
      if (i === targetFriend) {
        return emptyChairs.size() > 0 ? emptyChairs.peek() : nextUnsatChair;
      }
  
      // Assign a chair to the current friend
      if (emptyChairs.size() === 0) {
        occupied.push([leaving, nextUnsatChair]);
        nextUnsatChair += 1;
      } else {
        const emptyChair = emptyChairs.pop();
        occupied.push([leaving, emptyChair]);
      }
    }
  
    return -1; // Fallback in case no result is found (should not occur)
  }

console.log("==========================================")

// 632. Smallest Range Covering Elements from K Lists
// Hard
// You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.
// We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

// Example 1:
// Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
// Output: [20,24]
// Explanation: 
// List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
// List 2: [0, 9, 12, 20], 20 is in range [20,24].
// List 3: [5, 18, 22, 30], 22 is in range [20,24].

// Example 2:
// Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
// Output: [1,1]
 
// @param {number[][]} nums
// @return {number[]}

var smallestRange = function(nums) {
    // Min heap to store [value, row index, element index in the row]
    let minHeap = new MinPriorityQueue({ priority: x => x[0] });
    
    let max = -Infinity;  // Keep track of the current max element in the heap
    let rangeStart = 0, rangeEnd = Infinity;  // Start with an infinite range
    
    // Initialize the heap with the first element from each list
    for (let i = 0; i < nums.length; i++) {
        minHeap.enqueue([nums[i][0], i, 0]);
        max = Math.max(max, nums[i][0]);
    }

    // Process the heap until we can't proceed
    while (minHeap.size() === nums.length) {
        // Extract the minimum element
        let [minValue, listIndex, elemIndex] = minHeap.dequeue().element;

        // If the current range is smaller, update it
        if (max - minValue < rangeEnd - rangeStart) {
            rangeStart = minValue;
            rangeEnd = max;
        }

        // If there's a next element in the same list, push it into the heap
        if (elemIndex + 1 < nums[listIndex].length) {
            let nextElem = nums[listIndex][elemIndex + 1];
            minHeap.enqueue([nextElem, listIndex, elemIndex + 1]);
            max = Math.max(max, nextElem);  // Update max if necessary
        }
    }
    
    return [rangeStart, rangeEnd];
};

console.log("==========================================")

// 2530. Maximal Score After Applying K Operations
// Medium
// You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.
// In one operation:
// choose an index i such that 0 <= i < nums.length,
// increase your score by nums[i], and
// replace nums[i] with ceil(nums[i] / 3).
// Return the maximum possible score you can attain after applying exactly k operations.
// The ceiling function ceil(val) is the least integer greater than or equal to val.

// Example 1:
// Input: nums = [10,10,10,10,10], k = 5
// Output: 50
// Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.

// Example 2:
// Input: nums = [1,10,3,3,3], k = 3
// Output: 17
// Explanation: You can do the following operations:
// Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
// Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
// Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
// The final score is 10 + 4 + 3 = 17.

// @param {number[]} nums
// @param {number} k
// @return {number}

var maxKelements = function(nums, k) {
    // Create a max-heap using a min-heap by pushing negative values
    let maxHeap = new MaxPriorityQueue({ compare: (a, b) => b - a });
    
    // Push all the numbers into the max-heap
    for (let num of nums) {
        maxHeap.enqueue(num);
    }

    let score = 0;
    
    // Perform k operations
    for (let i = 0; i < k; i++) {
        // Get the largest element
        let largest = maxHeap.dequeue();
        
        // Add to the score
        score += largest;
        
        // Calculate the new value after applying the ceil operation
        let newVal = Math.ceil(largest / 3);
        
        // Push the new value back into the heap
        maxHeap.enqueue(newVal);
    }
    
    return score;
};

console.log("==========================================")

// 2938. Separate Black and White Balls
// Medium
// There are n balls on a table, each ball has a color black or white.
// You are given a 0-indexed binary string s of length n, where 1 and 0 represent black and white balls, respectively.
// In each step, you can choose two adjacent balls and swap them.
// Return the minimum number of steps to group all the black balls to the right and all the white balls to the left.

// Example 1:
// Input: s = "101"
// Output: 1
// Explanation: We can group all the black balls to the right in the following way:
// - Swap s[0] and s[1], s = "011".
// Initially, 1s are not grouped together, requiring at least 1 step to group them to the right.

// Example 2:
// Input: s = "100"
// Output: 2
// Explanation: We can group all the black balls to the right in the following way:
// - Swap s[0] and s[1], s = "010".
// - Swap s[1] and s[2], s = "001".
// It can be proven that the minimum number of steps needed is 2.

// Example 3:
// Input: s = "0111"
// Output: 0
// Explanation: All the black balls are already grouped to the right.

// @param {string} s
// @return {number}

function minimumSteps(s) {
    const stringLength = s.length;          // Get the length of the input string.
    let steps = 0;                          // Initialize the steps counter to zero.
    let countOfOnes = 0;                    // Initialize a counter to keep track of the number of '1's encountered.

    // Iterate over the string in reverse order.
    for (let i = stringLength - 1; i >= 0; --i) {
        if (s[i] === '1') {
            // If the current character is '1', increment the count of '1's.
            ++countOfOnes;
            // Accumulate the necessary steps to bring the '1' to the end of the string,
            // taking into account the count of '1's encountered so far.
            steps += stringLength - i - countOfOnes;
        }
    }

    // Return the total number of steps required to move all '1's to the end of the string.
    return steps;
}

console.log("==========================================")

// 1405. Longest Happy String
// Medium
// A string s is called happy if it satisfies the following conditions:
// s only contains the letters 'a', 'b', and 'c'.
// s does not contain any of "aaa", "bbb", or "ccc" as a substring.
// s contains at most a occurrences of the letter 'a'.
// s contains at most b occurrences of the letter 'b'.
// s contains at most c occurrences of the letter 'c'.
// Given three integers a, b, and c, return the longest possible happy string. 
// If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.

// Example 2:
// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It is the only correct answer in this case.

// @param {number} a
// @param {number} b
// @param {number} c
// @return {string}

var longestDiverseString = function(a, b, c) {
    // Initialize a result array to build the string
    let result = [];

    // Create an array of characters with their counts
    let maxHeap = [
        { count: a, char: 'a' },
        { count: b, char: 'b' },
        { count: c, char: 'c' }
    ];

    // Sort by count in descending order (greedy approach)
    maxHeap.sort((x, y) => y.count - x.count);

    while (true) {
        // Sort each time by current counts
        maxHeap.sort((x, y) => y.count - x.count);
        
        let hasAppended = false;
        
        // Try to add the most frequent character
        for (let i = 0; i < 3; i++) {
            if (maxHeap[i].count === 0) {
                continue; // No more of this character to add
            }
            // Check the last two characters of the result to avoid 3 consecutive characters
            const length = result.length;
            if (length >= 2 && result[length - 1] === maxHeap[i].char && result[length - 2] === maxHeap[i].char) {
                continue; // Skip this character as it would violate the rule
            }
            
            // Append the character
            result.push(maxHeap[i].char);
            maxHeap[i].count--; // Decrement the count
            hasAppended = true; // We added a character successfully
            break; // Exit after adding a character
        }
        
        // If we couldn't append any character, break the loop
        if (!hasAppended) {
            break;
        }
    }
    
    // Return the result array as a string
    return result.join('');
};




console.log("==========================================")

// 670. Maximum Swap
// Medium
// You are given an integer num. You can swap two digits at most once to get the maximum valued number.
// Return the maximum valued number you can get.

// Example 1:
// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

// Example 2:
// Input: num = 9973
// Output: 9973
// Explanation: No swap.

// @param {number} num
// @return {number}

var maximumSwap = function(num) {
    // Convert number to string array to easily access and swap digits
    let numArr = num.toString().split('');
    
    // Create an array to track the rightmost index of each digit (0-9)
    let last = new Array(10).fill(-1);
    
    // Fill the 'last' array with the last index of each digit in numArr
    for (let i = 0; i < numArr.length; i++) {
        last[+numArr[i]] = i;
    }
    
    // Traverse the number from left to right
    for (let i = 0; i < numArr.length; i++) {
        // Check digits larger than the current one
        for (let d = 9; d > +numArr[i]; d--) {
            if (last[d] > i) {
                // Swap the current digit with the largest possible later digit
                [numArr[i], numArr[last[d]]] = [numArr[last[d]], numArr[i]];
                // Return the result as a number
                return +numArr.join('');
            }
        }
    }
    
    // If no swap is made, return the original number
    return num;
};

console.log("==========================================")

// 2044. Count Number of Maximum Bitwise-OR Subsets
// Medium
// Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and 
// return the number of different non-empty subsets with the maximum bitwise OR.
// An array a is a subset of an array b if a can be obtained from b by deleting 
// some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different.
// The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).

// Example 1:
// Input: nums = [3,1]
// Output: 2
// Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
// - [3]
// - [3,1]

// Example 2:
// Input: nums = [2,2,2]
// Output: 7
// Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 23 - 1 = 7 total subsets.

// Example 3:
// Input: nums = [3,2,1,5]
// Output: 6
// Explanation: The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7:
// - [3,5]
// - [3,1,5]
// - [3,2,5]
// - [3,2,1,5]
// - [2,5]
// - [2,1,5]

// @param {number[]} nums
// @return {number}

var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    // Calculate the maximum possible OR by OR-ing all elements
    for (let num of nums) {
        maxOr |= num;
    }
    
    let count = 0;

    // Recursive function to calculate subsets and their OR values
    function dfs(index, currentOr) {
        if (index === nums.length) {
            if (currentOr === maxOr) {
                count++;
            }
            return;
        }
        // Include the current element in the subset
        dfs(index + 1, currentOr | nums[index]);
        // Exclude the current element from the subset
        dfs(index + 1, currentOr);
    }

    // Start recursion from index 0 with an initial OR of 0
    dfs(0, 0);
    
    return count;
};

console.log("==========================================")

// 1545. Find Kth Bit in Nth Binary String
// Medium
// Given two positive integers n and k, the binary string Sn is formed as follows:
// S1 = "0"
// Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
// Where + denotes the concatenation operation, reverse(x) returns the reversed string x, 
// and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).

// For example, the first four strings in the above sequence are:
// S1 = "0"
// S2 = "011"
// S3 = "0111001"
// S4 = "011100110110001"
// Return the kth bit in Sn. It is guaranteed that k is valid for the given n.

// Example 1:
// Input: n = 3, k = 1
// Output: "0"
// Explanation: S3 is "0111001".
// The 1st bit is "0".

// Example 2:
// Input: n = 4, k = 11
// Output: "1"
// Explanation: S4 is "011100110110001".
// The 11th bit is "1".

// @param {number} n
// @param {number} k
// @return {character}

var findKthBit = function(n, k) {
    // Base case: if n is 1, the string is "0"
    if (n == 1) {
        return '0';
    }
    
    // Length of S_n is 2^n - 1
    let length = (1 << n) - 1; // This is 2^n - 1
    
    // Middle index of the current string
    let mid = Math.floor(length / 2) + 1;
    
    // If k is the middle element, it is '1'
    if (k == mid) {
        return '1';
    }
    
    if (k < mid) {
        // If k is in the first half, recurse on S_(n-1)
        return findKthBit(n - 1, k);
    } else {
        // If k is in the second half, it corresponds to the mirrored position in S_(n-1)
        // The mirrored position is: length - k + 1
        // The bit is also inverted
        return findKthBit(n - 1, length - k + 1) === '0' ? '1' : '0';
    }
};

console.log("==========================================")

// 1106. Parsing A Boolean Expression
// Hard
// A boolean expression is an expression that evaluates to either true or false. It can be in one of the following shapes:
// 't' that evaluates to true.
// 'f' that evaluates to false.
// '!(subExpr)' that evaluates to the logical NOT of the inner expression subExpr.
// '&(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical AND of the inner expressions subExpr1, 
// subExpr2, ..., subExprn where n >= 1.
// '|(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical OR of the inner expressions subExpr1, 
// subExpr2, ..., subExprn where n >= 1.
// Given a string expression that represents a boolean expression, return the evaluation of that expression.
// It is guaranteed that the given expression is valid and follows the given rules.

// Example 1:
// Input: expression = "&(|(f))"
// Output: false
// Explanation: 
// First, evaluate |(f) --> f. The expression is now "&(f)".
// Then, evaluate &(f) --> f. The expression is now "f".
// Finally, return false.

// Example 2:
// Input: expression = "|(f,f,f,t)"
// Output: true
// Explanation: The evaluation of (false OR false OR false OR true) is true.

// Example 3:
// Input: expression = "!(&(f,t))"
// Output: true
// Explanation: 
// First, evaluate &(f,t) --> (false AND true) --> false --> f. The expression is now "!(f)".
// Then, evaluate !(f) --> NOT false --> true. We return true.

// @param {string} expression
// @return {boolean}

var parseBoolExpr = function(expression) {
    const stack = [];
    
    for (let ch of expression) {
        if (ch === ',' || ch === '(') {
            // Ignore commas and opening parentheses
            continue;
        } else if (ch === 't' || ch === 'f' || ch === '!' || ch === '&' || ch === '|') {
            // Push boolean values and operators to the stack
            stack.push(ch);
        } else if (ch === ')') {
            // Evaluate the expression within the parentheses
            let values = [];
            while (stack.length && stack[stack.length - 1] !== '!' && stack[stack.length - 1] !== '&' && stack[stack.length - 1] !== '|') {
                values.push(stack.pop());
            }
            const operator = stack.pop();
            let result;
            
            if (operator === '!') {
                // For NOT, negate the single value
                result = values[0] === 't' ? 'f' : 't';
            } else if (operator === '&') {
                // For AND, all values must be 't' (true)
                result = values.every(v => v === 't') ? 't' : 'f';
            } else if (operator === '|') {
                // For OR, at least one value must be 't' (true)
                result = values.some(v => v === 't') ? 't' : 'f';
            }
            
            // Push the result back to the stack
            stack.push(result);
        }
    }
    
    // The final result will be the only item left on the stack
    return stack[0] === 't';
};

console.log("==========================================")

// 1593. Split a String Into the Max Number of Unique Substrings
// Medium
// Given a string s, return the maximum number of unique substrings that the given string can be split into.
// You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string. 
// However, you must split the substrings such that all of them are unique.
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "ababccc"
// Output: 5
// Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. 
// Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.

// Example 2:
// Input: s = "aba"
// Output: 2
// Explanation: One way to split maximally is ['a', 'ba'].

// Example 3:
// Input: s = "aa"
// Output: 1
// Explanation: It is impossible to split the string any further.

// @param {string} s
// @return {number}

var maxUniqueSplit = function(s) {
    // Helper function to do backtracking
    const backtrack = (index, used) => {
        // If we've reached the end of the string, return 0 (no more splits possible)
        if (index === s.length) {
            return 0;
        }

        let maxSplits = 0;

        // Try every possible substring starting from the current index
        for (let i = index + 1; i <= s.length; i++) {
            let substring = s.slice(index, i);
            // If the substring is unique (not in the set), we can use it
            if (!used.has(substring)) {
                // Add the substring to the set
                used.add(substring);
                // Recur for the remaining part of the string and update maxSplits
                maxSplits = Math.max(maxSplits, 1 + backtrack(i, used));
                // Backtrack by removing the substring from the set
                used.delete(substring);
            }
        }

        return maxSplits;
    };

    // Start backtracking with an empty set of used substrings
    return backtrack(0, new Set());
};

console.log("==========================================")

// 2583. Kth Largest Sum in a Binary Tree
// Medium
// You are given the root of a binary tree and a positive integer k.
// The level sum in the tree is the sum of the values of the nodes that are on the same level.
// Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.
// Note that two nodes are on the same level if they have the same distance from the root.

// Example 1:
// Input: root = [5,8,9,2,1,3,7,4,6], k = 2
// Output: 13
// Explanation: The level sums are the following:
// - Level 1: 5.
// - Level 2: 8 + 9 = 17.
// - Level 3: 2 + 1 + 3 + 7 = 13.
// - Level 4: 4 + 6 = 10.
// The 2nd largest level sum is 13.

// Example 2:
// Input: root = [1,2,null,3], k = 1
// Output: 3
// Explanation: The largest level sum is 3.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} k
// @return {number}

var kthLargestLevelSum = function(root, k) {
    if (!root) return -1;
    
    const levelSums = [];
    const queue = [root]; // Queue for BFS
    
    // Perform BFS to calculate level sums
    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;
        
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            levelSum += currentNode.val;
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        
        // Push the sum of the current level to the array
        levelSums.push(levelSum);
    }
    
    // Sort the level sums in descending order
    levelSums.sort((a, b) => b - a);
    
    // Check if we have at least 'k' levels
    if (k > levelSums.length) return -1;
    
    // Return the kth largest level sum
    return levelSums[k - 1];
};

console.log("==========================================")

// 2641. Cousins in Binary Tree II
// Medium
// Given the root of a binary tree, replace the value of each node in the tree with the sum of all its cousins' values.
// Two nodes of a binary tree are cousins if they have the same depth with different parents.
// Return the root of the modified tree.
// Note that the depth of a node is the number of edges in the path from the root node to it.

// Example 1:
// Input: root = [5,4,9,1,10,null,7]
// Output: [0,0,0,7,7,null,11]
// Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
// - Node with value 5 does not have any cousins so its sum is 0.
// - Node with value 4 does not have any cousins so its sum is 0.
// - Node with value 9 does not have any cousins so its sum is 0.
// - Node with value 1 has a cousin with value 7 so its sum is 7.
// - Node with value 10 has a cousin with value 7 so its sum is 7.
// - Node with value 7 has cousins with values 1 and 10 so its sum is 11.

// Example 2:
// Input: root = [3,1,2]
// Output: [0,0,0]
// Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
// - Node with value 3 does not have any cousins so its sum is 0.
// - Node with value 1 does not have any cousins so its sum is 0.
// - Node with value 2 does not have any cousins so its sum is 0.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {TreeNode}

var replaceValueInTree = function(root) {
    if (!root) return root;
    
    // Use BFS to traverse level by level
    const queue = [root];
    root.val = 0; // root has no cousins

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;
        const levelNodes = [];

        // First pass: gather all nodes in the current level and compute the total sum of values
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelNodes.push(node);
            if (node.left) {
                levelSum += node.left.val;
                queue.push(node.left);
            }
            if (node.right) {
                levelSum += node.right.val;
                queue.push(node.right);
            }
        }

        // Second pass: replace each node's value with the sum of all cousins
        for (const node of levelNodes) {
            let siblingSum = 0;
            if (node.left) siblingSum += node.left.val;
            if (node.right) siblingSum += node.right.val;
            if (node.left) node.left.val = levelSum - siblingSum;
            if (node.right) node.right.val = levelSum - siblingSum;
        }
    }

    return root;
};

console.log("==========================================")

// 951. Flip Equivalent Binary Trees
// Medium
// For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.
// A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.
// Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

// Example 1:
// Flipped Trees Diagram
// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.

// Example 2:
// Input: root1 = [], root2 = []
// Output: true

// Example 3:
// Input: root1 = [], root2 = [1]
// Output: false

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//  }

// @param {TreeNode} root1
// @param {TreeNode} root2
// @return {boolean}

var flipEquiv = function(root1, root2) {
    // Base case: if both nodes are null, they are equivalent
    if (root1 === null && root2 === null) return true;
    // If one of them is null or their values don't match, they are not equivalent
    if (root1 === null || root2 === null || root1.val !== root2.val) return false;
    
    // Check if the trees are equivalent without flipping
    let noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    
    // Check if the trees are equivalent with flipping (left with right and vice versa)
    let flip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
    
    // Return true if either no flip or flip works
    return noFlip || flip;
};

console.log("==========================================")

// 1233. Remove Sub-Folders from the Filesystem
// Medium
// Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.
// If a folder[i] is located within another folder[j], it is called a sub-folder of it. A sub-folder of folder[j] must start 
// with folder[j], followed by a "/". For example, "/a/b" is a sub-folder of "/a", but "/b" is not a sub-folder of "/a/b/c".
// The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.
// For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.

// Example 1:
// Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
// Output: ["/a","/c/d","/c/f"]
// Explanation: Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.

// Example 2:
// Input: folder = ["/a","/a/b/c","/a/b/d"]
// Output: ["/a"]
// Explanation: Folders "/a/b/c" and "/a/b/d" will be removed because they are subfolders of "/a".

// Example 3:
// Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
// Output: ["/a/b/c","/a/b/ca","/a/b/d"]

// @param {string[]} folder
// @return {string[]}

var removeSubfolders = function(folder) {
    folder.sort(); // Sort folders lexicographically
    let result = [];
    
    for (let i = 0; i < folder.length; i++) {
        // Only add if the folder is not a sub-folder of the last item in result
        if (result.length === 0 || !folder[i].startsWith(result[result.length - 1] + '/')) {
            result.push(folder[i]);
        }
    }
    
    return result;
};

console.log("==========================================")

// 2458. Height of Binary Tree After Subtree Removal Queries
// Hard
// You are given the root of a binary tree with n nodes. Each node is assigned a unique value from 1 to n. 
// You are also given an array queries of size m.
// You have to perform m independent queries on the tree where in the ith query you do the following:
// Remove the subtree rooted at the node with the value queries[i] from the tree. It is guaranteed that queries[i] 
// will not be equal to the value of the root.
// Return an array answer of size m where answer[i] is the height of the tree after performing the ith query.

// Note:
// The queries are independent, so the tree returns to its initial state after each query.
// The height of a tree is the number of edges in the longest simple path from the root to some node in the tree.

// Example 1:
// Input: root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]
// Output: [2]
// Explanation: The diagram above shows the tree after removing the subtree rooted at node with value 4.
// The height of the tree is 2 (The path 1 -> 3 -> 2).

// Example 2:
// Input: root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]
// Output: [3,2,3,2]
// Explanation: We have the following queries:
// - Removing the subtree rooted at node with value 3. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 4).
// - Removing the subtree rooted at node with value 2. The height of the tree becomes 2 (The path 5 -> 8 -> 1).
// - Removing the subtree rooted at node with value 4. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 6).
// - Removing the subtree rooted at node with value 8. The height of the tree becomes 2 (The path 5 -> 9 -> 3).

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number[]} queries
// @return {number[]}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
var treeQueries = function(root, queries) {
    // Helper function to calculate the depth of the tree
    const calculateDepth = (node) => {
        if (node === null) {
            return 0;
        }
        // Recursively find the depth of the left and right subtrees
        let leftDepth = calculateDepth(node.left);
        let rightDepth = calculateDepth(node.right);
        // Store the depth of the current node
        depthDict.set(node, 1 + Math.max(leftDepth, rightDepth));
        return depthDict.get(node);
    };

    // Perform a Depth-First Search to find the highest visible value from each node
    const dfs = (node, currentDepth, maxVisibleValue) => {
        if (node === null) {
            return;
        }
        currentDepth += 1;
        // Record the maximum visible value for the current node
        results[node.val] = maxVisibleValue;
        // Explore the left and right subtrees
        dfs(node.left, currentDepth, Math.max(maxVisibleValue, currentDepth + (depthDict.get(node.right) || 0)));
        dfs(node.right, currentDepth, Math.max(maxVisibleValue, currentDepth + (depthDict.get(node.left) || 0)));
    };

    // Map to hold the depth of each node (replacing defaultdict from Python)
    let depthDict = new Map();
    // Calculate the depth of each node in the tree
    calculateDepth(root);
    // Initialize the results array with zeros for each value up to the number of nodes
    let results = new Array(depthDict.size + 1).fill(0);
    // Start the DFS from the root node
    dfs(root, -1, 0);
    // Create the list of results for each query
    return queries.map((value) => results[value]);
};
console.log("==========================================")

// 1277. Count Square Submatrices with All Ones
// Medium
// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Example 1:
// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.

// Example 2:
// Input: matrix = 
// [  [1,0,1], [1,1,0], [1,1,0]]
// Output: 7
// Explanation: 
// There are 6 squares of side 1.  
// There is 1 square of side 2. 
// Total number of squares = 6 + 1 = 7.

// @param {number[][]} matrix
// @return {number}

var countSquares = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    let count = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;  // First row or first column, max size is 1
                } else {
                    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                }
                count += dp[i][j];  // Add the number of squares ending at (i, j)
            }
        }
    }
    
    return count;
};

console.log("==========================================")

// 2501. Longest Square Streak in an Array
// Medium
// You are given an integer array nums. A subsequence of nums is called a square streak if:
// The length of the subsequence is at least 2, and
// after sorting the subsequence, each element (except the first element) is the square of the previous number.
// Return the length of the longest square streak in nums, or return -1 if there is no square streak.
// A subsequence is an array that can be derived from another array by deleting some 
// or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [4,3,6,16,8,2]
// Output: 3
// Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
// - 4 = 2 * 2.
// - 16 = 4 * 4.
// Therefore, [4,16,2] is a square streak.
// It can be shown that every subsequence of length 4 is not a square streak.

// Example 2:
// Input: nums = [2,3,5,6,7]
// Output: -1
// Explanation: There is no square streak in nums so return -1.

// @param {number[]} nums
// @return {number}

var longestSquareStreak = function(nums) {
    // Remove duplicates and sort the array
    nums = [...new Set(nums)].sort((a, b) => a - b);

    const numSet = new Set(nums);
    let maxStreak = -1;

    // Loop through each number in the sorted array
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let streakLength = 1;

        // Check if there exists a square of the current number in the set
        while (numSet.has(current * current)) {
            current = current * current;
            streakLength++;
        }

        // Only consider streaks of at least length 2
        if (streakLength > 1) {
            maxStreak = Math.max(maxStreak, streakLength);
        }
    }

    return maxStreak;
};

console.log("==========================================")

// 2684. Maximum Number of Moves in a Grid
// Medium
// Hint
// You are given a 0-indexed m x n matrix grid consisting of positive integers.
// You can start at any cell in the first column of the matrix, and traverse the grid in the following way:
// From a cell (row, col), you can move to any of the cells: (row - 1, col + 1), 
// (row, col + 1) and (row + 1, col + 1) such that the value of the cell you move to, 
// should be strictly bigger than the value of the current cell.
// Return the maximum number of moves that you can perform.

// Example 1:
// Input: grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]
// Output: 3
// Explanation: We can start at the cell (0, 0) and make the following moves:
// - (0, 0) -> (0, 1).
// - (0, 1) -> (1, 2).
// - (1, 2) -> (2, 3).
// It can be shown that it is the maximum number of moves that can be made.

// Example 2:
// Input: grid = [[3,2,4],[2,1,9],[1,1,7]]
// Output: 0
// Explanation: Starting from any cell in the first column we cannot perform any moves.

// @param {number[][]} grid
// @return {number}

var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // Initialize DP array with 0's
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Process each column starting from the second last to the first
    for (let col = n - 2; col >= 0; col--) {
        for (let row = 0; row < m; row++) {
            // Move right
            if (grid[row][col + 1] > grid[row][col]) {
                dp[row][col] = Math.max(dp[row][col], dp[row][col + 1] + 1);
            }
            // Move diagonally up-right
            if (row > 0 && grid[row - 1][col + 1] > grid[row][col]) {
                dp[row][col] = Math.max(dp[row][col], dp[row - 1][col + 1] + 1);
            }
            // Move diagonally down-right
            if (row < m - 1 && grid[row + 1][col + 1] > grid[row][col]) {
                dp[row][col] = Math.max(dp[row][col], dp[row + 1][col + 1] + 1);
            }
        }
    }
    
    // Find the maximum moves possible from the first column
    let maxMoves = 0;
    for (let row = 0; row < m; row++) {
        maxMoves = Math.max(maxMoves, dp[row][0]);
    }
    
    return maxMoves;
};

console.log("==========================================")

// 1671. Minimum Number of Removals to Make Mountain Array
// Hard
// You may recall that an array arr is a mountain array if and only if:
// arr.length >= 3
// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array nums​​​, return the minimum number of elements to remove to make nums​​​ a mountain array.

// Example 1:
// Input: nums = [1,3,1]
// Output: 0
// Explanation: The array itself is a mountain array so we do not need to remove any elements.

// Example 2:
// Input: nums = [2,1,1,5,6,2,3,1]
// Output: 3
// Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].

// @param {number[]} nums
// @return {number}

var minimumMountainRemovals = function(nums) {
    const n = nums.length;
    
    // Step 1: Calculate the LIS up to each index
    const lis = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }
    
    // Step 2: Calculate the LDS starting from each index
    const lds = Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i], lds[j] + 1);
            }
        }
    }
    
    // Step 3: Find the maximum length of a mountain array
    let maxMountainLength = 0;
    for (let i = 1; i < n - 1; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            maxMountainLength = Math.max(maxMountainLength, lis[i] + lds[i] - 1);
        }
    }
    
    // Step 4: Calculate the minimum removals required
    return n - maxMountainLength;
};

console.log("==========================================")

// 2463. Minimum Total Distance Traveled
// Hard
// There are some robots and factories on the X-axis. You are given an integer array robot where robot[i] 
// is the position of the ith robot. You are also given a 2D integer array factory where factory[j] = [positionj, limitj] 
// indicates that positionj is the position of the jth factory and that the jth factory can repair at most limitj robots.
// The positions of each robot are unique. The positions of each factory are also unique. Note that a robot can be in the same position as a factory initially.
// All the robots are initially broken; they keep moving in one direction. The direction could be the negative or the positive direction of the X-axis. 
// When a robot reaches a factory that did not reach its limit, the factory repairs the robot, and it stops moving.
// At any moment, you can set the initial direction of moving for some robot. Your target is to minimize the total distance traveled by all the robots.
// Return the minimum total distance traveled by all the robots. The test cases are generated such that all the robots can be repaired.
// Note that
// All robots move at the same speed.
// If two robots move in the same direction, they will never collide.
// If two robots move in opposite directions and they meet at some point, they do not collide. They cross each other.
// If a robot passes by a factory that reached its limits, it crosses it as if it does not exist.
// If the robot moved from a position x to a position y, the distance it moved is |y - x|.

// Example 1:
// Input: robot = [0,4,6], factory = [[2,2],[6,2]]
// Output: 4
// Explanation: As shown in the figure:
// - The first robot at position 0 moves in the positive direction. It will be repaired at the first factory.
// - The second robot at position 4 moves in the negative direction. It will be repaired at the first factory.
// - The third robot at position 6 will be repaired at the second factory. It does not need to move.
// The limit of the first factory is 2, and it fixed 2 robots.
// The limit of the second factory is 2, and it fixed 1 robot.
// The total distance is |2 - 0| + |2 - 4| + |6 - 6| = 4. It can be shown that we cannot achieve a better total distance than 4.

// Example 2:
// Input: robot = [1,-1], factory = [[-2,1],[2,1]]
// Output: 2
// Explanation: As shown in the figure:
// - The first robot at position 1 moves in the positive direction. It will be repaired at the second factory.
// - The second robot at position -1 moves in the negative direction. It will be repaired at the first factory.
// The limit of the first factory is 1, and it fixed 1 robot.
// The limit of the second factory is 1, and it fixed 1 robot.
// The total distance is |2 - 1| + |(-2) - (-1)| = 2. It can be shown that we cannot achieve a better total distance than 2.

// @param {number[]} robot
// @param {number[][]} factory
// @return {number}

var minimumTotalDistance = function(robot, factory) {
    // Sort robots and factories by their positions
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const m = robot.length;
    const n = factory.length;

    // dp[i][j] will store the minimum distance for first i robots with first j factories
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let j = 1; j <= n; j++) {
        dp[0][j] = 0; // No distance needed if no robots
        for (let i = 1; i <= m; i++) {
            // Calculate total distance if robot[i-1] assigned to factory[j-1]
            let totalDistance = 0;
            for (let k = 0; k <= Math.min(factory[j - 1][1], i); k++) {
                if (k > 0) {
                    totalDistance += Math.abs(factory[j - 1][0] - robot[i - k]);
                }
                dp[i][j] = Math.min(dp[i][j], dp[i - k][j - 1] + totalDistance);
            }
        }
    }

    return dp[m][n];
};
console.log("==========================================")

// 1957. Delete Characters to Make Fancy String
// Easy
// A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.

// Example 1:
// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".

// Example 2:
// Input: s = "aaabaaaa"
// Output: "aabaa"
// Explanation:
// Remove an 'a' from the first group of 'a's to create "aabaaaa".
// Remove two 'a's from the second group of 'a's to create "aabaa".
// No three consecutive characters are equal, so return "aabaa".

// Example 3:
// Input: s = "aab"
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".

// @param {string} s
// @return {string}

var makeFancyString = function(s) {
    let result = "";
    let count = 1;

    // Start by adding the first character to the result
    result += s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            // Increase the count if the current character is the same as the previous
            count++;
        } else {
            // Reset the count if the current character is different
            count = 1;
        }
        
        // Only add the character if there are less than 3 in a row
        if (count < 3) {
            result += s[i];
        }
    }
    
    return result;
};

console.log("==========================================")

// 2490. Circular Sentence
// Easy
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.
// A sentence is circular if:
// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, 
// "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
// Given a string sentence, return true if it is circular. Otherwise, return false.

// Example 1:
// Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

// Example 2:
// Input: sentence = "eetcode"
// Output: true
// Explanation: The words in sentence are ["eetcode"].
// - eetcode's last character is equal to eetcode's first character.
// The sentence is circular.

// Example 3:
// Input: sentence = "Leetcode is cool"
// Output: false
// Explanation: The words in sentence are ["Leetcode", "is", "cool"].
// - Leetcode's last character is not equal to is's first character.
// The sentence is not circular.

// @param {string} sentence
// @return {boolean}

var isCircularSentence = function(sentence) {
    // Step 1: Split the sentence into words
    let words = sentence.split(' ');

    // Step 2: Loop through each word and check the circular condition
    for (let i = 0; i < words.length; i++) {
        // Get the current word's last character
        let currentWordLastChar = words[i][words[i].length - 1];
        // Get the next word's first character (or wrap to first word)
        let nextWordFirstChar = words[(i + 1) % words.length][0];
        
        // If they don't match, it's not circular
        if (currentWordLastChar !== nextWordFirstChar) {
            return false;
        }
    }

    // If all checks pass, it's circular
    return true;
};

console.log("==========================================")

// 796. Rotate String
// Easy
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

// @param {string} s
// @param {string} goal
// @return {boolean}

var rotateString = function(s, goal) {
    // Check if lengths are equal, otherwise `s` can't be rotated to match `goal`
    if (s.length !== goal.length) return false;
    
    // Check if goal is a substring of s concatenated with itself
    return (s + s).includes(goal);
};

console.log("==========================================")

// 3163. String Compression III
// Medium
// Given a string word, compress it using the following algorithm:
// Begin with an empty string comp. While word is not empty, use the following operation:
// Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
// Append the length of the prefix followed by c to comp.
// Return the string comp.

// Example 1:
// Input: word = "abcde"
// Output: "1a1b1c1d1e"
// Explanation:
// Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.
// For each prefix, append "1" followed by the character to comp.

// Example 2:
// Input: word = "aaaaaaaaaaaaaabb"
// Output: "9a5a2b"
// Explanation:
// Initially, comp = "". Apply the operation 3 times, choosing "aaaaaaaaa", "aaaaa", and "bb" as the prefix in each operation.
// For prefix "aaaaaaaaa", append "9" followed by "a" to comp.
// For prefix "aaaaa", append "5" followed by "a" to comp.
// For prefix "bb", append "2" followed by "b" to comp.

// @param {string} word
// @return {string}

var compressedString = function(word) {
    let comp = "";
    let i = 0;
    
    while (i < word.length) {
        // Initialize count for the current character
        let count = 1;
        
        // Count the maximum length of the current character segment
        while (i + count < word.length && word[i + count] === word[i] && count < 9) {
            count++;
        }
        
        // Append the compressed part (count and character) to comp
        comp += count.toString() + word[i];
        
        // Move index forward by count to skip the processed segment
        i += count;
    }
    
    return comp;
};

console.log("==========================================")

// 2914. Minimum Number of Changes to Make Binary String Beautiful
// Medium
// You are given a 0-indexed binary string s having an even length.
// A string is beautiful if it's possible to partition it into one or more substrings such that:
// Each substring has an even length.
// Each substring contains only 1's or only 0's.
// You can change any character in s to 0 or 1.
// Return the minimum number of changes required to make the string s beautiful.

// Example 1:
// Input: s = "1001"
// Output: 2
// Explanation: We change s[1] to 1 and s[3] to 0 to get string "1100".
// It can be seen that the string "1100" is beautiful because we can partition it into "11|00".
// It can be proven that 2 is the minimum number of changes needed to make the string beautiful.

// Example 2:
// Input: s = "10"
// Output: 1
// Explanation: We change s[1] to 1 to get string "11".
// It can be seen that the string "11" is beautiful because we can partition it into "11".
// It can be proven that 1 is the minimum number of changes needed to make the string beautiful.
// Example 3:

// Input: s = "0000"
// Output: 0
// Explanation: We don't need to make any changes as the string "0000" is beautiful already.

// @param {string} s
// @return {number}

function minChanges(s) {
    // Initialize a variable to track the number of changes needed.
    let changesNeeded = 0;
  
    // Iterate through the string, checking every second character starting from the second one.
    for (let i = 1; i < s.length; i += 2) {
        // Check if the current character is different from the previous one.
        // If they are the same, increment the changes needed.
        if (s[i] !== s[i - 1]) {
            changesNeeded++;
        }
    }
  
    // Return the total number of changes needed.
    return changesNeeded;
}

console.log("==========================================")

// 3011. Find if Array Can Be Sorted
// Medium
// You are given a 0-indexed array of positive integers nums.
// In one operation, you can swap any two adjacent elements if they have the same number of 
// set bits. You are allowed to do this operation any number of times (including zero).
// Return true if you can sort the array, else return false.

// Example 1:
// Input: nums = [8,4,2,30,15]
// Output: true
// Explanation: Let's look at the binary representation of every element. The numbers 2, 4, 
// and 8 have one set bit each with binary representation "10", "100", and "1000" respectively. 
// The numbers 15 and 30 have four set bits each with binary representation "1111" and "11110".
// We can sort the array using 4 operations:
// - Swap nums[0] with nums[1]. This operation is valid because 8 and 4 have one set bit each. The array becomes [4,8,2,30,15].
// - Swap nums[1] with nums[2]. This operation is valid because 8 and 2 have one set bit each. The array becomes [4,2,8,30,15].
// - Swap nums[0] with nums[1]. This operation is valid because 4 and 2 have one set bit each. The array becomes [2,4,8,30,15].
// - Swap nums[3] with nums[4]. This operation is valid because 30 and 15 have four set bits each. The array becomes [2,4,8,15,30].
// The array has become sorted, hence we return true.
// Note that there may be other sequences of operations which also sort the array.

// Example 2:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: The array is already sorted, hence we return true.

// Example 3:
// Input: nums = [3,16,8,4,2]
// Output: false
// Explanation: It can be shown that it is not possible to sort the input array using any number of operations.

// @param {number[]} nums
// @return {boolean}

function canSortArray(nums) {
    let previousMax = -300; // Initiate the previous maximum to a value lower than any element in nums
    const length = nums.length;
  
    // Iterate over the array
    for (let i = 0; i < length; ) {
        let j = i + 1; // Start from the next element
        const bitCountOfCurrent = bitCount(nums[i]); // Get the bit count of the current element
      
        // Find min and max element within the same bit count group
        let minElement = nums[i];
        let maxElement = nums[i];
      
        // Keep updating min/max in the group where the bit count is the same
        while (j < length && bitCount(nums[j]) === bitCountOfCurrent) {
            minElement = Math.min(minElement, nums[j]);
            maxElement = Math.max(maxElement, nums[j]);
            j++;
        }
      
        // If the max of the previous group is greater than the min of the current group, return false
        if (previousMax > minElement) {
            return false;
        }
      
        // Update the previousMax to the max of the current group
        previousMax = maxElement;
        i = j; // Move to the next group
    }
  
    // If the entire array can be separated into groups with incremental mins, return true
    return true;
}

function bitCount(i) {
    // Apply bit manipulation tricks to count the bits set to 1
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 0x3f; // Return the count of bits set to 1
}

console.log("==========================================")

// 2275. Largest Combination With Bitwise AND Greater Than Zero
// Medium
// The bitwise AND of an array nums is the bitwise AND of all integers in nums.
// For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
// Also, for nums = [7], the bitwise AND is 7.
// You are given an array of positive integers candidates. Evaluate the bitwise AND of every combination of numbers of candidates.
// Each number in candidates may only be used once in each combination.
// Return the size of the largest combination of candidates with a bitwise AND greater than 0.

// Example 1:
// Input: candidates = [16,17,71,62,12,24,14]
// Output: 4
// Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
// The size of the combination is 4.
// It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
// Note that more than one combination may have the largest size.
// For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.

// Example 2:
// Input: candidates = [8,8]
// Output: 2
// Explanation: The largest combination [8,8] has a bitwise AND of 8 & 8 = 8 > 0.
// The size of the combination is 2, so we return 2.

// @param {number[]} candidates
// @return {number}

var largestCombination = function(candidates) {
    let maxCount = 0;

    // Check each bit position from 0 to 31
    for (let i = 0; i < 32; i++) {
        let count = 0;
        
        // Count how many numbers have a '1' at the ith position
        for (let num of candidates) {
            if ((num >> i) & 1) {
                count++;
            }
        }
        
        // Update maxCount if current count is greater
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

console.log("==========================================")

// 1829. Maximum XOR for Each Query
// Medium
// You are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times:
// Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] 
// XOR k is maximized. k is the answer to the ith query.
// Remove the last element from the current array nums.
// Return an array answer, where answer[i] is the answer to the ith query.

// Example 1:
// Input: nums = [0,1,1,3], maximumBit = 2
// Output: [0,3,2,3]
// Explanation: The queries are answered as follows:
// 1st query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.
// 2nd query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.
// 3rd query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.
// 4th query: nums = [0], k = 3 since 0 XOR 3 = 3.

// Example 2:
// Input: nums = [2,3,4,7], maximumBit = 3
// Output: [5,2,6,5]
// Explanation: The queries are answered as follows:
// 1st query: nums = [2,3,4,7], k = 5 since 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7.
// 2nd query: nums = [2,3,4], k = 2 since 2 XOR 3 XOR 4 XOR 2 = 7.
// 3rd query: nums = [2,3], k = 6 since 2 XOR 3 XOR 6 = 7.
// 4th query: nums = [2], k = 5 since 2 XOR 5 = 7.

// Example 3:
// Input: nums = [0,1,2,2,5,7], maximumBit = 3
// Output: [4,3,6,4,6,7]
 
// @param {number[]} nums
// @param {number} maximumBit
// @return {number[]}

var getMaximumXor = function(nums, maximumBit) {
    const maxVal = (1 << maximumBit) - 1; // This is 2^maximumBit - 1
    const result = [];
    
    // Compute the cumulative XOR of the entire array
    let xor_all = 0;
    for (let num of nums) {
        xor_all ^= num;
    }

    // Process each query
    for (let i = nums.length - 1; i >= 0; i--) {
        // The best k is maxVal XOR xor_all
        result.push(maxVal ^ xor_all);
        
        // Update xor_all by removing the last element of nums
        xor_all ^= nums[i];
    }
    
    return result;
};

console.log("==========================================")

// 3133. Minimum Array End
// Medium
// You are given two integers n and x. You have to construct an array of positive integers nums of size n where for every 0 <= i < n - 1, 
// nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x.

// Return the minimum possible value of nums[n - 1].

// Example 1:
// Input: n = 3, x = 4
// Output: 6
// Explanation:
// nums can be [4,5,6] and its last element is 6.

// Example 2:
// Input: n = 2, x = 7
// Output: 15
// Explanation:
// nums can be [7,15] and its last element is 15.

// @param {number} n
// @param {number} x
// @return {number}

function minEnd(n, x) {
    let j = 0;
    let res = BigInt(x);
    let t = ~BigInt(x);

    n -= 1;

    while (n >> j) {
        let bit = BigInt(n >> j & 1);
        let lb = t & -t;

        res |= (lb * bit);
        j++;
        t ^= lb;
    }

    return Number(res);
}

console.log("==========================================")

// 3097. Shortest Subarray With OR at Least K II
// Medium
// You are given an array nums of non-negative integers and an integer k.
// An array is called special if the bitwise OR of all of its elements is at least k.
// Return the length of the shortest special non-empty subarray of nums, or return -1 if no special subarray exists.

// Example 1:
// Input: nums = [1,2,3], k = 2
// Output: 1
// Explanation:
// The subarray [3] has OR value of 3. Hence, we return 1.

// Example 2:
// Input: nums = [2,1,8], k = 10
// Output: 3
// Explanation:
// The subarray [2,1,8] has OR value of 11. Hence, we return 3.

// Example 3:
// Input: nums = [1,2], k = 0
// Output: 1
// Explanation:
// The subarray [1] has OR value of 1. Hence, we return 1.

// @param {number[]} nums
// @param {number} k
// @return {number}

function minimumSubarrayLength(nums, k) {
    const n = nums.length;
    let ans = n + 1;
    const cnt = new Array(32).fill(0);
    
    for (let i = 0, j = 0, s = 0; j < n; ++j) {
        s |= nums[j];
        
        for (let h = 0; h < 32; ++h) {
            if (((nums[j] >> h) & 1) === 1) {
                ++cnt[h];
            }
        }
        
        while (s >= k && i <= j) {
            ans = Math.min(ans, j - i + 1);
            for (let h = 0; h < 32; ++h) {
                if (((nums[i] >> h) & 1) === 1 && --cnt[h] === 0) {
                    s ^= 1 << h;
                }
            }
            ++i;
        }
    }
    
    return ans === n + 1 ? -1 : ans;
}



console.log("==========================================")

// 2601. Prime Subtraction Operation
// Medium
// You are given a 0-indexed integer array nums of length n.
// You can perform the following operation as many times as you want:
// Pick an index i that you haven’t picked before, and pick a prime p strictly less than nums[i], then subtract p from nums[i].
// Return true if you can make nums a strictly increasing array using the above operation and false otherwise.

// A strictly increasing array is an array whose each element is strictly greater than its preceding element.

// Example 1:
// Input: nums = [4,9,6,10]
// Output: true
// Explanation: In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].
// In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].
// After the second operation, nums is sorted in strictly increasing order, so the answer is true.

// Example 2:
// Input: nums = [6,8,11,12]
// Output: true
// Explanation: Initially nums is sorted in strictly increasing order, so we don't need to make any operations.

// Example 3:
// Input: nums = [5,8,3]
// Output: false
// Explanation: It can be proven that there is no way to perform operations to make nums sorted in strictly increasing order, so the answer is false.

// @param {number[]} nums
// @return {boolean}

// A function to determine whether a series of subtraction operations can make the array strictly increasing
// by subtracting a prime number from an element if necessary.
function primeSubOperation(nums) {

    // Store prime numbers in an array
    const primes = [];
  
    // Generate prime numbers up to 1000 and store them in the primes array
    for (let i = 2; i <= 1000; ++i) {
        let isPrime = true;
        for (const prime of primes) {
            if (i % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }

    // Binary search to find the index of the smallest prime number 
    // which is greater than the given number x
    const searchPrimeIndex = (x) => {
        let left = 0;
        let right = primes.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (primes[mid] > x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    // Iterate through the numbers array, starting from the second to last element, moving backwards
    const count = nums.length;
    for (let i = count - 2; i >= 0; --i) {
        // Continue to the next if the current number is less than the next number (strictly increasing)
        if (nums[i] < nums[i + 1]) {
            continue;
        }

        // Find the index of the smallest prime number that is greater than the difference needed
        const primeIndex = searchPrimeIndex(nums[i] - nums[i + 1]);

        // If we cannot find a suitable prime number to make the sequence increasing, return false
        if (primeIndex === primes.length || primes[primeIndex] >= nums[i]) {
            return false;
        }

        // Perform the subtraction to make the sequence strictly increasing
        nums[i] -= primes[primeIndex];
    }

    // If all values are checked and the array can be made strictly increasing, return true
    return true;
}
console.log("==========================================")

// 2070. Most Beautiful Item for Each Query
// Medium
// You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and beauty of an item respectively.
// You are also given a 0-indexed integer array queries. For each queries[j], 
// you want to determine the maximum beauty of an item whose price is less than or equal to queries[j].
// If no such item exists, then the answer to this query is 0.
// Return an array answer of the same length as queries where answer[j] is the answer to the jth query.

// Example 1:
// Input: items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]
// Output: [2,4,5,5,6,6]
// Explanation:
// - For queries[0]=1, [1,2] is the only item which has price <= 1. Hence, the answer for this query is 2.
// - For queries[1]=2, the items which can be considered are [1,2] and [2,4]. 
//   The maximum beauty among them is 4.
// - For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].
//   The maximum beauty among them is 5.
// - For queries[4]=5 and queries[5]=6, all items can be considered.
//   Hence, the answer for them is the maximum beauty of all items, i.e., 6.

// Example 2:
// Input: items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]
// Output: [4]
// Explanation: 
// The price of every item is equal to 1, so we choose the item with the maximum beauty 4. 
// Note that multiple items can have the same price and/or beauty.  

// Example 3:
// Input: items = [[10,1000]], queries = [5]
// Output: [0]
// Explanation:
// No item has a price less than or equal to 5, so no item can be chosen.
// Hence, the answer to the query is 0.

// @param {number[][]} items
// @param {number[]} queries
// @return {number[]}

var maximumBeauty = function(items, queries) {
    // Sort items by price in ascending order
    items.sort((a, b) => a[0] - b[0]);

    // Prepare queries along with their original indices
    const queriesWithIndex = queries.map((value, index) => [value, index]);
    queriesWithIndex.sort((a, b) => a[0] - b[0]);

    // Result array for answers, initialized with 0s
    const answer = new Array(queries.length).fill(0);
    
    // Track max beauty as we process items up to each price
    let maxBeauty = 0;
    let itemIndex = 0;
    
    // Process each query in sorted order
    for (const [queryPrice, queryIndex] of queriesWithIndex) {
        // Update maxBeauty for all items with price <= queryPrice
        while (itemIndex < items.length && items[itemIndex][0] <= queryPrice) {
            maxBeauty = Math.max(maxBeauty, items[itemIndex][1]);
            itemIndex++;
        }
        
        // Set the answer for this query's original index
        answer[queryIndex] = maxBeauty;
    }
    
    return answer;
};

console.log("==========================================")

// 2563. Count the Number of Fair Pairs
// Medium
// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.
// A pair (i, j) is fair if:
// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper

// Example 1:
// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).

// Example 2:
// Input: nums = [1,7,9,2,5], lower = 11, upper = 11
// Output: 1
// Explanation: There is a single fair pair: (2,3).

// @param {number[]} nums
// @param {number} lower
// @param {number} upper
// @return {number}

var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let left = i + 1;
        let right = n - 1;

        // Find the smallest j such that nums[i] + nums[j] >= lower
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] >= lower) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        const start = left;

        // Find the largest j such that nums[i] + nums[j] <= upper
        left = i + 1;
        right = n - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] <= upper) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        const end = right;

        // Count valid pairs
        if (start <= end) {
            count += end - start + 1;
        }
    }

    return count;
};

console.log("==========================================")

// 2064. Minimized Maximum of Products Distributed to Any Store
// Medium
// You are given an integer n indicating there are n specialty retail stores. 
// There are m product types of varying amounts, which are given as a 0-indexed integer array quantities, 
// where quantities[i] represents the number of products of the ith product type.
// You need to distribute all products to the retail stores following these rules:
// A store can only be given at most one product type but can be given any amount of it.
// After distribution, each store will have been given some number of products (possibly 0). 
// Let x represent the maximum number of products given to any store. You want x to be as small as possible, 
// i.e., you want to minimize the maximum number of products that are given to any store.
// Return the minimum possible x.

// Example 1:
// Input: n = 6, quantities = [11,6]
// Output: 3
// Explanation: One optimal way is:
// - The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3
// - The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3
// The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3.

// Example 2:
// Input: n = 7, quantities = [15,10,10]
// Output: 5
// Explanation: One optimal way is:
// - The 15 products of type 0 are distributed to the first three stores in these amounts: 5, 5, 5
// - The 10 products of type 1 are distributed to the next two stores in these amounts: 5, 5
// - The 10 products of type 2 are distributed to the last two stores in these amounts: 5, 5
// The maximum number of products given to any store is max(5, 5, 5, 5, 5, 5, 5) = 5.

// Example 3:
// Input: n = 1, quantities = [100000]
// Output: 100000
// Explanation: The only optimal way is:
// - The 100000 products of type 0 are distributed to the only store.
// The maximum number of products given to any store is max(100000) = 100000.

// @param {number} n
// @param {number[]} quantities
// @return {number}

var minimizedMaximum = function(n, quantities) {
    // Helper function to check if we can distribute with max 'maxProducts' per store
    function canDistribute(maxProducts) {
        let requiredStores = 0;
        for (let qty of quantities) {
            // Calculate stores needed for current product type at max maxProducts per store
            requiredStores += Math.ceil(qty / maxProducts);
            // Early exit if stores required exceeds available stores
            if (requiredStores > n) return false;
        }
        return requiredStores <= n;
    }
    
    // Binary search on the possible values for minimized maximum x
    let low = 1, high = Math.max(...quantities);
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canDistribute(mid)) {
            high = mid;  // Try a smaller max if possible
        } else {
            low = mid + 1;  // Increase min if not enough stores
        }
    }
    
    return low;
};

console.log("==========================================")

// 1574. Shortest Subarray to be Removed to Make Array Sorted
// Medium
// Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.
// Return the length of the shortest subarray to remove.
// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: arr = [1,2,3,10,4,2,3,5]
// Output: 3
// Explanation: The shortest subarray we can remove is [10,4,2] of length 3. 
// The remaining elements after that will be [1,2,3,3,5] which are sorted.
// Another correct solution is to remove the subarray [3,10,4].

// Example 2:
// Input: arr = [5,4,3,2,1]
// Output: 4
// Explanation: Since the array is strictly decreasing, we can only keep a single element. 
// Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].

// Example 3:
// Input: arr = [1,2,3]
// Output: 0
// Explanation: The array is already non-decreasing. We do not need to remove any elements.

// @param {number[]} arr
// @return {number}

var findLengthOfShortestSubarray = function(arr) {
    const n = arr.length;
    let left = 0;
    let right = n - 1;

    // Find the longest prefix that is non-decreasing
    while (left + 1 < n && arr[left] <= arr[left + 1]) {
        left++;
    }

    // If the whole array is sorted, no removal is needed
    if (left === n - 1) {
        return 0;
    }

    // Find the longest suffix that is non-decreasing
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }

    // Calculate the minimum length of the subarray to remove
    let minToRemove = Math.min(n - left - 1, right); // Remove one of the segments

    // Try to merge prefix and suffix
    let i = 0, j = right;
    while (i <= left && j < n) {
        if (arr[i] <= arr[j]) {
            minToRemove = Math.min(minToRemove, j - i - 1);
            i++;
        } else {
            j++;
        }
    }

    return minToRemove;
};

console.log("==========================================")

// 3254. Find the Power of K-Size Subarrays I
// Medium
// You are given an array of integers nums of length n and a positive integer k.
// The power of an array is defined as:
// Its maximum element if all of its elements are consecutive and sorted in ascending order.
// -1 otherwise. You need to find the power of all subarrays of nums of size k.
// Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].

// Example 1:
// Input: nums = [1,2,3,4,3,2,5], k = 3
// Output: [3,4,-1,-1,-1]
// Explanation:
// There are 5 subarrays of nums of size 3:

// [1, 2, 3] with the maximum element 3.
// [2, 3, 4] with the maximum element 4.
// [3, 4, 3] whose elements are not consecutive.
// [4, 3, 2] whose elements are not sorted.
// [3, 2, 5] whose elements are not consecutive.

// Example 2:
// Input: nums = [2,2,2,2,2], k = 4
// Output: [-1,-1]

// Example 3:
// Input: nums = [3,2,3,2,3,2], k = 2
// Output: [-1,3,-1,3,-1]

// @param {number[]} nums
// @param {number} k
// @return {number[]}

var resultsArray = function(nums, k) {
    const results = [];
    for (let i = 0; i <= nums.length - k; i++) {
        // Extract the subarray of size k
        const subarray = nums.slice(i, i + k);
        
        // Check if the subarray is sorted in ascending order and consecutive
        const isSortedConsecutive = subarray.every((val, index) => {
            return index === 0 || val === subarray[index - 1] + 1;
        });
        
        // If it is sorted and consecutive, push the maximum element; otherwise, push -1
        if (isSortedConsecutive) {
            results.push(Math.max(...subarray));
        } else {
            results.push(-1);
        }
    }
    return results;
};

console.log("==========================================")

// 862. Shortest Subarray with Sum at Least K
// Hard
// Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. 
// If there is no such subarray, return -1.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [1], k = 1
// Output: 1

// Example 2:
// Input: nums = [1,2], k = 4
// Output: -1

// Example 3:
// Input: nums = [2,-1,2], k = 3
// Output: 3
 
// @param {number[]} nums
// @param {number} k
// @return {number}

var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);

    // Compute the prefix sum
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let minLength = Infinity;
    const deque = []; // Monotonic queue for indices

    for (let i = 0; i <= n; i++) {
        // Remove indices from the deque that are no longer valid
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            minLength = Math.min(minLength, i - deque.shift());
        }

        // Maintain monotonicity by removing indices with larger prefix sums
        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);
    }

    return minLength === Infinity ? -1 : minLength;
};

console.log("==========================================")

// 1652. Defuse the Bomb
// Easy
// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

// Example 1:
// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. 
// The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

// Example 2:
// Input: code = [1,2,3,4], k = 0
// Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0. 

// Example 3:
// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. 
// Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.

// @param {number[]} code
// @param {number} k
// @return {number[]}

var decrypt = function(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) {
        return result;
    }

    // Determine direction and range based on k
    const start = k > 0 ? 1 : k;
    const end = k > 0 ? k : -1;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = start; j <= end; j++) {
            sum += code[(i + j + n) % n]; // Wrap around with modulo
        }
        result[i] = sum;
    }

    return result;
};

console.log("==========================================")

// 2461. Maximum Sum of Distinct Subarrays With Length K
// Medium
// You are given an integer array nums and an integer k. 
// Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

// Example 2:
// Input: nums = [4,4,4], k = 3
// Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.

// @param {number[]} nums
// @param {number} k
// @return {number}

var maximumSubarraySum = function(nums, k) {
    let start = 0, sum = 0, maxSum = 0;
    const freqMap = new Map();

    for (let end = 0; end < nums.length; end++) {
        // Add the current number to the frequency map and sum
        let num = nums[end];
        sum += num;
        freqMap.set(num, (freqMap.get(num) || 0) + 1);

        // Shrink the window if it's larger than k
        if (end - start + 1 > k) {
            let startNum = nums[start];
            sum -= startNum;
            freqMap.set(startNum, freqMap.get(startNum) - 1);
            if (freqMap.get(startNum) === 0) freqMap.delete(startNum);
            start++;
        }

        // If window size equals k and all elements are distinct
        if (end - start + 1 === k && freqMap.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};

console.log("==========================================")

// 2516. Take K of Each Character From Left and Right
// Medium
// You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. 
// Each minute, you may take either the leftmost character of s, or the rightmost character of s.
// Return the minimum number of minutes needed for you to take at least k of each character, 
// or return -1 if it is not possible to take k of each character.

// Example 1:
// Input: s = "aabaaaacaabc", k = 2
// Output: 8
// Explanation: 
// Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
// Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
// A total of 3 + 5 = 8 minutes is needed.
// It can be proven that 8 is the minimum number of minutes needed.

// Example 2:
// Input: s = "a", k = 1
// Output: -1
// Explanation: It is not possible to take one 'b' or 'c' so return -1.

// @param {string} s
// @param {number} k
// @return {number}

var takeCharacters = function(s, k) {
    const n = s.length;

    // Count occurrences of 'a', 'b', 'c' in the string
    const count = { 'a': 0, 'b': 0, 'c': 0 };
    for (const char of s) {
        count[char]++;
    }

    // If any character count is less than k, return -1
    if (count['a'] < k || count['b'] < k || count['c'] < k) {
        return -1;
    }

    // Sliding window to find the maximum valid substring
    let left = 0;
    let maxValidLength = 0;
    const required = { ...count };

    // Reduce the required count by k for each character
    required['a'] -= k;
    required['b'] -= k;
    required['c'] -= k;

    for (let right = 0; right < n; right++) {
        required[s[right]]--;
        
        // Ensure the window is valid by shrinking it if necessary
        while (required['a'] < 0 || required['b'] < 0 || required['c'] < 0) {
            required[s[left]]++;
            left++;
        }
        
        // Update the maximum valid length of the substring
        maxValidLength = Math.max(maxValidLength, right - left + 1);
    }

    // Calculate the minimal time needed
    return n - maxValidLength;
};

console.log("==========================================")

// 2257. Count Unguarded Cells in the Grid
// Medium
// You are given two integers m and n representing a 0-indexed m x n grid. 
// You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, 
//     colj] represent the positions of the ith guard and jth wall respectively.
// A guard can see every cell in the four cardinal directions (north, east, south, 
//     or west) starting from their position unless obstructed by a wall or another guard. 
//     A cell is guarded if there is at least one guard that can see it.
// Return the number of unoccupied cells that are not guarded.

// Example 1:
// Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
// Output: 7
// Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
// There are a total of 7 unguarded cells, so we return 7.

// Example 2:
// Input: m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]
// Output: 4
// Explanation: The unguarded cells are shown in green in the above diagram.
// There are a total of 4 unguarded cells, so we return 4.

// @param {number} m
// @param {number} n
// @param {number[][]} guards
// @param {number[][]} walls
// @return {number}

var countUnguarded = function(m, n, guards, walls) {
    // Step 1: Initialize the grid
    const grid = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Mark walls and guards on the grid
    for (const [r, c] of walls) grid[r][c] = -1; // Walls marked as -1
    for (const [r, c] of guards) grid[r][c] = -2; // Guards marked as -2

    // Step 2: Simulate guard visibility
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up
    for (const [r, c] of guards) {
        for (const [dr, dc] of directions) {
            let nr = r + dr, nc = c + dc;
            while (nr >= 0 && nr < m && nc >= 0 && nc < n ) {
                if (grid[nr][nc] === -1 || grid [nr][nc] === -2) break;
                if (grid[nr][nc] === 0) grid[nr][nc] = 1;
                nr +=dr;
                nc +=dc;
            }
        }
    }

    // Step 3: Count unguarded and unoccupied cells
    let unguardedCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                unguardedCount++;
            }
        }
    }

    return unguardedCount;
};

console.log("==========================================")

// 1072. Flip Columns For Maximum Number of Equal Rows
// Medium
// You are given an m x n binary matrix matrix.
// You can choose any number of columns in the matrix and flip every cell in that column 
// (i.e., Change the value of the cell from 0 to 1 or vice versa).
// Return the maximum number of rows that have all values equal after some number of flips.

// Example 1:
// Input: matrix = [[0,1],[1,1]]
// Output: 1
// Explanation: After flipping no values, 1 row has all values equal.

// Example 2:
// Input: matrix = [[0,1],[1,0]]
// Output: 2
// Explanation: After flipping values in the first column, both rows have equal values.

// Example 3:
// Input: matrix = [[0,0,0],[0,0,1],[1,1,0]]
// Output: 2
// Explanation: After flipping values in the first two columns, the last two rows have equal values.

// @param {number[][]} matrix
// @return {number}


var maxEqualRowsAfterFlips = function(matrix) {
    const patternCount = new Map();

    for (const row of matrix) {
        // Create a normalized pattern where the first element is always 0.
        const pattern = row.map(value => value === row[0] ? 1 : 0).join('');
        // Count this pattern in the map.
        patternCount.set(pattern, (patternCount.get(pattern) || 0) + 1);
    }

    // Find the maximum count of any pattern.
    let maxRows = 0;
    for (const count of patternCount.values()) {
        maxRows = Math.max(maxRows, count);
    }

    return maxRows;
};

console.log("==========================================")

// 1861. Rotating the Box
// Medium
// You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:
// A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. 
// Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. 
// Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.
// It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.
// Return an n x m matrix representing the box after the rotation described above.

// Example 1:
// Input: box = [["#",".","#"]]
// Output: [["."],
//          ["#"],
//          ["#"]]

// Example 2:
// Input: box = [["#",".","*","."],
//               ["#","#","*","."]]
// Output: [["#","."],
//          ["#","#"],
//          ["*","*"],
//          [".","."]]

// Example 3:
// Input: box = [["#","#","*",".","*","."],
//               ["#","#","#","*",".","."],
//               ["#","#","#",".","#","."]]
// Output: [[".","#","#"],
//          [".","#","#"],
//          ["#","#","*"],
//          ["#","*","."],
//          ["#",".","*"],
//          ["#",".","."]]

// @param {character[][]} box
// @return {character[][]}

var rotateTheBox = function(box) {
    const m = box.length;
    const n = box[0].length;

    // Step 1: Simulate gravity for stones in each row
    for (let i = 0; i < m; i++) {
        let emptyPos = n - 1; // Position of the next empty cell to the right
        for (let j = n - 1; j >= 0; j--) {
            if (box[i][j] === '#') {
                // Move stone to the farthest empty position
                box[i][j] = '.';
                box[i][emptyPos] = '#';
                emptyPos--;
            } else if (box[i][j] === '*') {
                // Reset emptyPos to just before the obstacle
                emptyPos = j - 1;
            }
        }
    }

    // Step 2: Rotate the box 90 degrees clockwise
    const rotatedBox = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotatedBox[j][m - 1 - i] = box[i][j];
        }
    }

    return rotatedBox;
};
console.log("==========================================")

// 1975. Maximum Matrix Sum
// Medium
// You are given an n x n integer matrix. You can do the following operation any number of times:
// Choose any two adjacent elements of matrix and multiply each of them by -1.
// Two elements are considered adjacent if and only if they share a border.
// Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.

// Example 1:
// Input: matrix = [[1,-1],[-1,1]]
// Output: 4
// Explanation: We can follow the following steps to reach sum equals 4:
// - Multiply the 2 elements in the first row by -1.
// - Multiply the 2 elements in the first column by -1.

// Example 2:
// Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
// Output: 16
// Explanation: We can follow the following step to reach sum equals 16:
// - Multiply the 2 last elements in the second row by -1.

// @param {number[][]} matrix
// @return {number}

var maxMatrixSum = function(matrix) {
    let totalSum = 0;
    let minAbsValue = Infinity;
    let negativeCount = 0;

    for (let row of matrix) {
        for (let val of row) {
            totalSum += Math.abs(val);
            minAbsValue = Math.min(minAbsValue, Math.abs(val));
            if (val < 0) negativeCount++;
        }
    }

    // If odd number of negatives, subtract twice the smallest absolute value
    if (negativeCount % 2 !== 0) {
        totalSum -= 2 * minAbsValue;
    }

    return totalSum;
};

console.log("==========================================")

// 773. Sliding Puzzle
// Hard
// On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. 
// A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
// The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
// Given the puzzle board board, return the least number of moves required so that the state of the board is solved. 
// If it is impossible for the state of the board to be solved, return -1.

// Example 1:
// Input: board = [[1,2,3],[4,0,5]]
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.

// Example 2:
// Input: board = [[1,2,3],[5,4,0]]
// Output: -1
// Explanation: No number of moves will make the board solved.

// Example 3:
// Input: board = [[4,1,2],[5,0,3]]
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
// An example path:
// After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]

// @param {number[][]} board
// @return {number}

var slidingPuzzle = function(board) {
    // Target state of the board represented as a string
    const target = "123450";
    
    // Convert the initial board state to a string for easier manipulation
    const start = board.flat().join("");
    
    // All possible moves for the blank space (0) based on its position
    const neighbors = {
        0: [1, 3],   // Neighbors of index 0
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    };
    
    // Initialize the queue for BFS with the starting state
    const queue = [[start, start.indexOf("0"), 0]]; // [state, index of 0, moves]
    const visited = new Set(); // Keep track of visited states
    visited.add(start);
    
    while (queue.length > 0) {
        const [currentState, zeroIndex, moves] = queue.shift();
        
        // Check if we have reached the target state
        if (currentState === target) {
            return moves;
        }
        
        // Explore all possible moves for the blank space
        for (const neighbor of neighbors[zeroIndex]) {
            // Swap the 0 with the neighboring value
            const newState = currentState.split("");
            [newState[zeroIndex], newState[neighbor]] = [newState[neighbor], newState[zeroIndex]];
            const newStateStr = newState.join("");
            
            // If the new state hasn't been visited, add it to the queue
            if (!visited.has(newStateStr)) {
                visited.add(newStateStr);
                queue.push([newStateStr, neighbor, moves + 1]);
            }
        }
    }
    
    // If no solution is found, return -1
    return -1;
};

console.log("==========================================")

// 2924. Find Champion II
// Medium
// There are n teams numbered from 0 to n - 1 in a tournament; each team is also a node in a DAG.
// You are given the integer n and a 0-indexed 2D integer array edges of length m representing the DAG, 
// where edges[i] = [ui, vi] indicates that there is a directed edge from team ui to team vi in the graph.
// A directed edge from a to b in the graph means that team a is stronger than team b and team b is weaker than team a.
// Team a will be the champion of the tournament if there is no team b that is stronger than team a.
// Return the team that will be the champion of the tournament if there is a unique champion, otherwise, return -1.

// Notes
// A cycle is a series of nodes a1, a2, ..., an, an+1 such that node a1 is the same node as node an+1, the nodes a1, a2, ..., 
// an are distinct, and there is a directed edge from the node ai to node ai+1 for every i in the range [1, n].
// A DAG is a directed graph that does not have any cycle.

// Example 1:
// Input: n = 3, edges = [[0,1],[1,2]]
// Output: 0
// Explanation: Team 1 is weaker than team 0. Team 2 is weaker than team 1. So the champion is team 0.

// Example 2:
// Input: n = 4, edges = [[0,2],[1,3],[1,2]]
// Output: -1
// Explanation: Team 2 is weaker than team 0 and team 1. Team 3 is weaker than team 1. But team 1 and team 0 are not weaker than any other teams. So the answer is -1.

// @param {number} n
// @param {number[][]} edges
// @return {number}

var findChampion = function(n, edges) {
    // Step 1: Calculate in-degree for each node
    const inDegree = Array(n).fill(0);
    const adjList = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        inDegree[v]++;
        adjList[u].push(v); // Build adjacency list
    }

    // Step 2: Find candidate champion (node with in-degree 0)
    let candidate = -1;
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            if (candidate !== -1) return -1; // More than one node with in-degree 0
            candidate = i;
        }
    }
    if (candidate === -1) return -1; // No node with in-degree 0

    // Step 3: Verify all nodes are reachable from the candidate
    const visited = new Set();

    const dfs = (node) => {
        visited.add(node);
        for (const neighbor of adjList[node]) {
            if (!visited.has(neighbor)) dfs(neighbor);
        }
    };

    dfs(candidate);

    return visited.size === n ? candidate : -1; // Check if all nodes are reachable
};

console.log("==========================================")

// 3243. Shortest Distance After Road Addition Queries I
// Medium
// You are given an integer n and a 2D integer array queries.
// There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.
// queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi. After each query, you need to find the length of the shortest path from city 0 to city n - 1.
// Return an array answer where for each i in the range [0, queries.length - 1], answer[i] is the length of the shortest path from city 0 to city n - 1 after processing the first i + 1 queries.

// Example 1:
// Input: n = 5, queries = [[2,4],[0,2],[0,4]]
// Output: [3,2,1]
// Explanation:
// After the addition of the road from 2 to 4, the length of the shortest path from 0 to 4 is 3.
// After the addition of the road from 0 to 2, the length of the shortest path from 0 to 4 is 2.
// After the addition of the road from 0 to 4, the length of the shortest path from 0 to 4 is 1.

// Example 2:
// Input: n = 4, queries = [[0,3],[0,2]]
// Output: [1,1]
// Explanation:
// After the addition of the road from 0 to 3, the length of the shortest path from 0 to 3 is 1.
// After the addition of the road from 0 to 2, the length of the shortest path remains 1.

// @param {number} n
// @param {number[][]} queries
// @return {number[]}

var shortestDistanceAfterQueries = function(n, queries) {
    // Initialize the graph
    const graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < n - 1; i++) {
        graph[i].push([i + 1, 1]); // Unidirectional roads with weight 1
    }

    const dijkstra = (start, end) => {
        const distances = Array(n).fill(Infinity);
        distances[start] = 0;
        const pq = [[start, 0]]; // Priority queue: [node, distance]

        while (pq.length > 0) {
            const [current, dist] = pq.shift();
            if (dist > distances[current]) continue;

            for (const [neighbor, weight] of graph[current]) {
                const newDist = dist + weight;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    pq.push([neighbor, newDist]);
                    pq.sort((a, b) => a[1] - b[1]); // Sort by distance
                }
            }
        }

        return distances[end];
    };

    const answer = [];
    for (const [u, v] of queries) {
        // Add the new road to the graph
        graph[u].push([v, 1]);

        // Compute the shortest path from 0 to n - 1
        const shortestPath = dijkstra(0, n - 1);
        answer.push(shortestPath);
    }

    return answer;
};

console.log("==========================================")

// 2290. Minimum Obstacle Removal to Reach Corner
// Hard
// You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:
// 0 represents an empty cell,
// 1 represents an obstacle that may be removed.
// You can move up, down, left, or right from and to an empty cell.
// Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).

// Example 1:
// Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
// Output: 2
// Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
// It can be shown that we need to remove at least 2 obstacles, so we return 2.
// Note that there may be other ways to remove 2 obstacles to create a path.

// Example 2:
// Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
// Output: 0
// Explanation: We can move from (0, 0) to (2, 4) without removing any obstacles, so we return 0.

// @param {number[][]} grid
// @return {number}

var minimumObstacles = function(grid) {
    // Get grid dimensions
    const rows = grid.length;
    const cols = grid[0].length;

    // Define possible movement directions
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // Initialize min-heap to track paths with least obstacles
    const minHeap = new MinPriorityQueue({ priority: (x) => x[2] });
    
    // Start from top-left corner with initial obstacle count
    minHeap.enqueue([0, 0, grid[0][0]]); 

   // Create 2D array to store minimum obstacles for each cell
    const obstacleCount = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
    obstacleCount[0][0] = grid[0][0];

   // Process paths using min-heap
    while (!minHeap.isEmpty()) {
        // Get current cell and obstacle count
        const [currentX, currentY, currentCost] = minHeap.dequeue().element;

        // Check if reached bottom-right corner
        if (currentX === rows - 1 && currentY === cols - 1) {
            return currentCost;
        }

        // Explore adjacent cells
        for (const [dx, dy] of directions) {
            const nextX = currentX + dx;
            const nextY = currentY + dy;

            // Skip out-of-bounds cells
            if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) {
                continue;
            }

            // Calculate cost of moving to next cell
            const nextCost = currentCost + grid[nextX][nextY];

            // Update if new path has fewer obstacles
            if (nextCost < obstacleCount[nextX][nextY]) {
                obstacleCount[nextX][nextY] = nextCost;
                minHeap.enqueue([nextX, nextY, nextCost]);
            }
        }
    }

    // Return minimum obstacles to reach bottom-right corner
    return obstacleCount[rows - 1][cols - 1];
};

console.log("==========================================")

// 2577. Minimum Time to Visit a Cell In a Grid
// Hard
// You are given a m x n matrix grid consisting of non-negative integers where grid[row][col] represents the minimum time required to be able to visit the cell (row, col), 
// which means you can visit the cell (row, col) only when the time you visit it is greater than or equal to grid[row][col].
// You are standing in the top-left cell of the matrix in the 0th second, 
// and you must move to any adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second.
// Return the minimum time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return -1.

// Example 1:
// Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
// Output: 7
// Explanation: One of the paths that we can take is the following:
// - at t = 0, we are on the cell (0,0).
// - at t = 1, we move to the cell (0,1). It is possible because grid[0][1] <= 1.
// - at t = 2, we move to the cell (1,1). It is possible because grid[1][1] <= 2.
// - at t = 3, we move to the cell (1,2). It is possible because grid[1][2] <= 3.
// - at t = 4, we move to the cell (1,1). It is possible because grid[1][1] <= 4.
// - at t = 5, we move to the cell (1,2). It is possible because grid[1][2] <= 5.
// - at t = 6, we move to the cell (1,3). It is possible because grid[1][3] <= 6.
// - at t = 7, we move to the cell (2,3). It is possible because grid[2][3] <= 7.
// The final time is 7. It can be shown that it is the minimum time possible.

// Example 2:
// Input: grid = [[0,2,4],[3,2,1],[1,0,4]]
// Output: -1
// Explanation: There is no path from the top left to the bottom-right cell.

// @param {number[][]} grid
// @return {number}

var minimumTime = function(grid) {
    // Early exit if initial movement is impossible
    if (grid[0][1] > 1 && grid[1][0] > 1) {
        return -1;
    }
    
    const m = grid.length;
    const n = grid[0].length;
    
    // Initialize distance matrix with infinity
    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
    dist[0][0] = 0;
    
    // Priority queue to process cells in order of minimum time
    const priorityQueue = new MinPriorityQueue({ priority: (item) => item[0] });
    priorityQueue.enqueue([0, 0, 0]);
    
    // Directional movements
    const directions = [-1, 0, 1, 0, -1];
    
    while (!priorityQueue.isEmpty()) {
        const [time, i, j] = priorityQueue.dequeue().element;
        
        // Reached bottom-right cell
        if (i === m - 1 && j === n - 1) {
            return time;
        }
        
        // Explore four adjacent directions
        for (let k = 0; k < 4; k++) {
            const nextX = i + directions[k];
            const nextY = j + directions[k + 1];
            
            // Validate next cell is within grid
            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
                let nextTime = time + 1;
                
                // Adjust time if arriving before cell's minimum time
                if (nextTime < grid[nextX][nextY]) {
                    nextTime = grid[nextX][nextY] + (grid[nextX][nextY] - nextTime) % 2;
                }
                
                // Update if new path is faster
                if (nextTime < dist[nextX][nextY]) {
                    dist[nextX][nextY] = nextTime;
                    priorityQueue.enqueue([nextTime, nextX, nextY]);
                }
            }
        }
    }
    
    return -1;
};

console.log("==========================================")

// 2097. Valid Arrangement of Pairs
// Hard
// You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti.
// Return any valid arrangement of pairs.
// Note: The inputs will be generated such that there exists a valid arrangement of pairs.

// Example 1:
// Input: pairs = [[5,1],[4,5],[11,9],[9,4]]
// Output: [[11,9],[9,4],[4,5],[5,1]]
// Explanation:
// This is a valid arrangement since endi-1 always equals starti.
// end0 = 9 == 9 = start1 
// end1 = 4 == 4 = start2
// end2 = 5 == 5 = start3

// Example 2:
// Input: pairs = [[1,3],[3,2],[2,1]]
// Output: [[1,3],[3,2],[2,1]]
// Explanation:
// This is a valid arrangement since endi-1 always equals starti.
// end0 = 3 == 3 = start1
// end1 = 2 == 2 = start2
// The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also valid.

// Example 3:
// Input: pairs = [[1,2],[1,3],[2,1]]
// Output: [[1,2],[2,1],[1,3]]
// Explanation:
// This is a valid arrangement since endi-1 always equals starti.
// end0 = 2 == 2 = start1
// end1 = 1 == 1 = start2

// @param {number[][]} pairs
// @return {number[][]}

var validArrangement = function(pairs) {
    // Step 1: Build the graph and calculate in-degrees and out-degrees
    const graph = new Map();
    const inDegree = new Map();
    const outDegree = new Map();
    
    for (const [start, end] of pairs) {
        if (!graph.has(start)) graph.set(start, []);
        graph.get(start).push(end);
        outDegree.set(start, (outDegree.get(start) || 0) + 1);
        inDegree.set(end, (inDegree.get(end) || 0) + 1);
    }
    
    // Step 2: Find the start vertex
    let start = pairs[0][0]; // Default start vertex
    for (const [node] of graph) {
        if ((outDegree.get(node) || 0) - (inDegree.get(node) || 0) === 1) {
            start = node;
            break;
        }
    }
    
    // Step 3: Perform Hierholzer’s algorithm to find the Eulerian path
    const stack = [start];
    const result = [];
    
    while (stack.length > 0) {
        const node = stack[stack.length - 1];
        if (graph.has(node) && graph.get(node).length > 0) {
            stack.push(graph.get(node).pop());
        } else {
            result.push(stack.pop());
        }
    }
    
    // Step 4: Build the output by reversing the path
    result.reverse();
    const output = [];
    for (let i = 0; i < result.length - 1; i++) {
        output.push([result[i], result[i + 1]]);
    }
    
    return output;
};
console.log("==========================================")

// 1346. Check If N and Its Double Exist
// Easy
// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

// Example 2:
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

// @param {number[]} arr
// @return {boolean}

var checkIfExist = function(arr) {
    const seen = new Set();
    
    for (let num of arr) {
        // Check if the double or half of the current number exists in the set
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        // Add the current number to the set
        seen.add(num);
    }
    
    return false;
};

console.log("==========================================")

// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Easy
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. 
// If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.

// Example 1:
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// Example 2:
// Input: sentence = "this problem is an easy problem", searchWord = "pro"
// Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

// Example 3:
// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.

// @param {string} sentence
// @param {string} searchWord
// @return {number}

var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' '); // Split the sentence into words
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1; // Return 1-based index
        }
    }
    return -1; // Return -1 if no match is found
};

console.log("==========================================")

// 2109. Adding Spaces to a String
// Medium
// You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. 
// Each space should be inserted before the character at the given index.
// For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', 
// which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
// Return the modified string after the spaces have been added.

// Example 1:
// Input: s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
// Output: "Leetcode Helps Me Learn"
// Explanation: 
// The indices 8, 13, and 15 correspond to the underlined characters in "LeetcodeHelpsMeLearn".
// We then place spaces before those characters.

// Example 2:
// Input: s = "icodeinpython", spaces = [1,5,7,9]
// Output: "i code in py thon"
// Explanation:
// The indices 1, 5, 7, and 9 correspond to the underlined characters in "icodeinpython".
// We then place spaces before those characters.

// Example 3:
// Input: s = "spacing", spaces = [0,1,2,3,4,5,6]
// Output: " s p a c i n g"
// Explanation:
// We are also able to place spaces before the first character of the string.

// @param {string} s
// @param {number[]} spaces
// @return {string}

var addSpaces = function(s, spaces) {
    let result = ""; // Result string
    let spaceIndex = 0; // Pointer for the `spaces` array
    let n = spaces.length; // Number of spaces to be added

    for (let i = 0; i < s.length; i++) {
        // Check if the current index is in the `spaces` array
        if (spaceIndex < n && i === spaces[spaceIndex]) {
            result += " "; // Add a space
            spaceIndex++; // Move the pointer to the next space index
        }
        result += s[i]; // Add the current character
    }

    return result; // Return the final modified string
};

console.log("==========================================")

// 2825. Make String a Subsequence Using Cyclic Increments
// Medium
// You are given two 0-indexed strings str1 and str2.
// In an operation, you select a set of indices in str1, and for each index i in the set, increment str1[i] to the next character cyclically. 
// That is 'a' becomes 'b', 'b' becomes 'c', and so on, and 'z' becomes 'a'.
// Return true if it is possible to make str2 a subsequence of str1 by performing the operation at most once, and false otherwise.
// Note: A subsequence of a string is a new string that is formed from the original string by deleting some (possibly none) 
// of the characters without disturbing the relative positions of the remaining characters.

// Example 1:
// Input: str1 = "abc", str2 = "ad"
// Output: true
// Explanation: Select index 2 in str1.
// Increment str1[2] to become 'd'. 
// Hence, str1 becomes "abd" and str2 is now a subsequence. Therefore, true is returned.

// Example 2:
// Input: str1 = "zc", str2 = "ad"
// Output: true
// Explanation: Select indices 0 and 1 in str1. 
// Increment str1[0] to become 'a'. 
// Increment str1[1] to become 'd'. 
// Hence, str1 becomes "ad" and str2 is now a subsequence. Therefore, true is returned.

// Example 3:
// Input: str1 = "ab", str2 = "d"
// Output: false
// Explanation: In this example, it can be shown that it is impossible to make str2 a subsequence of str1 using the operation at most once. 
// Therefore, false is returned.

// @param {string} str1
// @param {string} str2
// @return {boolean}

var canMakeSubsequence = function(str1, str2) {
    let i = 0; // Pointer for str2
    
    for (let j = 0; j < str1.length; j++) {
        // Check if we can match the current character in str2
        if (i < str2.length && 
           (str1[j] === str2[i] || 
            String.fromCharCode((str1[j].charCodeAt(0) - 'a'.charCodeAt(0) + 1) % 26 + 'a'.charCodeAt(0)) === str2[i])) {
            i++; // Move to the next character in str2
        }
    }
    
    // If we matched all characters in str2, return true
    return i === str2.length;
};

console.log("==========================================")

// 2337. Move Pieces to Obtain a String
// Medium
// You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:
// The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, 
// and a piece 'R' can move to the right only if there is a blank space directly to its right.
// The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
// Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. 
// Otherwise, return false.

// Example 1:
// Input: start = "_L__R__R_", target = "L______RR"
// Output: true
// Explanation: We can obtain the string target from start by doing the following moves:
// - Move the first piece one step to the left, start becomes equal to "L___R__R_".
// - Move the last piece one step to the right, start becomes equal to "L___R___R".
// - Move the second piece three steps to the right, start becomes equal to "L______RR".
// Since it is possible to get the string target from start, we return true.

// Example 2:
// Input: start = "R_L_", target = "__LR"
// Output: false
// Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
// After that, no pieces can move anymore, so it is impossible to obtain the string target from start.

// Example 3:
// Input: start = "_R", target = "R_"
// Output: false
// Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.

// @param {string} start
// @param {string} target
// @return {boolean}

var canChange = function(start, target) {
    // Remove '_' and compare the sequences of 'L' and 'R'
    const filteredStart = start.replace(/_/g, '');
    const filteredTarget = target.replace(/_/g, '');
    if (filteredStart !== filteredTarget) return false;

    let startIndex = 0, targetIndex = 0;

    // Traverse the strings to ensure valid movement
    while (startIndex < start.length && targetIndex < target.length) {
        // Skip blanks in start and target
        while (startIndex < start.length && start[startIndex] === '_') startIndex++;
        while (targetIndex < target.length && target[targetIndex] === '_') targetIndex++;

        // If we reach the end of either string, we're done checking
        if (startIndex === start.length || targetIndex === target.length) break;

        // Compare the characters
        if (start[startIndex] !== target[targetIndex]) return false;

        // Check movement rules
        if (start[startIndex] === 'L' && startIndex < targetIndex) return false;
        if (start[startIndex] === 'R' && startIndex > targetIndex) return false;

        // Move to the next character
        startIndex++;
        targetIndex++;
    }

    return true;
};

console.log("==========================================")

// 2554. Maximum Number of Integers to Choose From a Range I
// Medium
// You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules:

// The chosen integers have to be in the range [1, n].
// Each integer can be chosen at most once.
// The chosen integers should not be in the array banned.
// The sum of the chosen integers should not exceed maxSum.
// Return the maximum number of integers you can choose following the mentioned rules.

// Example 1:
// Input: banned = [1,6,5], n = 5, maxSum = 6
// Output: 2
// Explanation: You can choose the integers 2 and 4.
// 2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.

// Example 2:
// Input: banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1
// Output: 0
// Explanation: You cannot choose any integer while following the mentioned conditions.

// Example 3:
// Input: banned = [11], n = 7, maxSum = 50
// Output: 7
// Explanation: You can choose the integers 1, 2, 3, 4, 5, 6, and 7.
// They are from the range [1, 7], all did not appear in banned, and their sum is 28, which did not exceed maxSum.

// @param {number[]} banned
// @param {number} n
// @param {number} maxSum
// @return {number}

var maxCount = function(banned, n, maxSum) {
    // Convert banned array to a Set for quick lookup
    const bannedSet = new Set(banned);

    let sum = 0; // To keep track of the current sum
    let count = 0; // To count the numbers chosen

    for (let i = 1; i <= n; i++) {
        // Skip if the number is in the banned set
        if (bannedSet.has(i)) continue;

        // Check if adding this number exceeds maxSum
        if (sum + i > maxSum) break;

        // Add the number to the sum and increment the count
        sum += i;
        count++;
    }

    return count;
};

console.log("==========================================")

// 1760. Minimum Limit of Balls in a Bag
// Medium
// You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations.
// You can perform the following operation at most maxOperations times:
// Take any bag of balls and divide it into two new bags with a positive number of balls.
// For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.
// Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.
// Return the minimum possible penalty after performing the operations.

// Example 1:
// Input: nums = [9], maxOperations = 2
// Output: 3
// Explanation: 
// - Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3].
// - Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3].
// The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.

// Example 2:
// Input: nums = [2,4,8,2], maxOperations = 4
// Output: 2
// Explanation:
// - Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
// The bag with the most number of balls has 2 balls, so your penalty is 2, and you should return 2.

// @param {number[]} nums
// @param {number} maxOperations
// @return {number}

var minimumSize = function(nums, maxOperations) {
    // Helper function to check if a given penalty is possible
    const canDivide = (penalty) => {
        let operations = 0;
        for (let num of nums) {
            operations += Math.floor((num - 1) / penalty); // Calculate operations needed for this bag
            if (operations > maxOperations) return false; // If exceeds maxOperations, return false early
        }
        return true;
    };

    let left = 1; // Minimum possible penalty
    let right = Math.max(...nums); // Maximum possible penalty

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canDivide(mid)) {
            right = mid; // Try a smaller penalty
        } else {
            left = mid + 1; // Increase penalty
        }
    }

    return left; // The smallest feasible penalty
};

console.log("==========================================")

// 2054. Two Best Non-Overlapping Events
// Medium
// You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. 
// The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. 
// You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

// Return this maximum sum.

// Note that the start time and end time is inclusive: that is, 
// you cannot attend two events where one of them starts and the other ends at the same time. 
// More specifically, if you attend an event with end time t, the next event must start at or after t + 1.

// Example 1:
// Input: events = [[1,3,2],[4,5,2],[2,4,3]]
// Output: 4
// Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.

// Example 2:
// Example 1 Diagram
// Input: events = [[1,3,2],[4,5,2],[1,5,5]]
// Output: 5
// Explanation: Choose event 2 for a sum of 5.

// Example 3:
// Input: events = [[1,5,3],[1,5,1],[6,6,5]]
// Output: 8
// Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.

// @param {number[][]} events
// @return {number}

var maxTwoEvents = function(events) {
    // Step 1: Sort events by end time
    events.sort((a, b) => a[1] - b[1]);

    let maxVal = 0; // To keep track of the max single event value
    let result = 0; // Final maximum sum of two non-overlapping events
    let maxBefore = []; // To store the maximum value encountered before each event

    // Step 2: Traverse events to calculate maxBefore
    for (const [startTime, endTime, value] of events) {
        // Use binary search to find the largest event that ends before this event starts
        let left = 0, right = maxBefore.length - 1, maxNonOverlap = 0;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (maxBefore[mid][0] < startTime) {
                maxNonOverlap = maxBefore[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // Calculate the maximum sum for this event and update result
        result = Math.max(result, value + maxNonOverlap);

        // Update max single value and store the max value up to this point
        maxVal = Math.max(maxVal, value);
        maxBefore.push([endTime, maxVal]);
    }

    return result;
};
console.log("==========================================")

// 3152. Special Array II
// Medium
// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

// You are given an array of integer nums and a 2D integer matrix queries, 
// where for queries[i] = [fromi, toi] your task is to check that subarray nums[fromi..toi] is special or not.
// Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

// Example 1:
// Input: nums = [3,4,1,2,6], queries = [[0,4]]
// Output: [false]
// Explanation:
// The subarray is [3,4,1,2,6]. 2 and 6 are both even.

// Example 2:
// Input: nums = [4,3,1,6], queries = [[0,2],[2,3]]
// Output: [false,true]
// Explanation:
// The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
// The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true.

// @param {number[]} nums
// @param {number[][]} queries
// @return {boolean[]}

var isArraySpecial = function(nums, queries) {
    const n = nums.length;
    const sameParity = new Array(n - 1).fill(false);

    // Precompute the sameParity array
    for (let i = 0; i < n - 1; i++) {
        sameParity[i] = (nums[i] % 2) === (nums[i + 1] % 2);
    }

    // Compute prefix sums for the sameParity array
    const prefixSum = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + (sameParity[i - 1] ? 1 : 0);
    }

    const result = [];

    // Process each query
    for (const [from, to] of queries) {
        const countSameParity = prefixSum[to] - prefixSum[from];
        result.push(countSameParity === 0);
    }

    return result;
};

console.log("==========================================")

// 2981. Find Longest Special Substring That Occurs Thrice I
// Medium
// You are given a string s that consists of lowercase English letters.
// A string is called special if it is made up of only a single character. 
// For example, the string "abc" is not special, whereas the strings "ddd", "zz", and "f" are special.
// Return the length of the longest special substring of s which occurs at least thrice, or -1 if no special substring occurs at least thrice.
// A substring is a contiguous non-empty sequence of characters within a string.

// Example 1:
// Input: s = "aaaa"
// Output: 2
// Explanation: The longest special substring which occurs thrice is "aa": substrings "aaaa", "aaaa", and "aaaa".
// It can be shown that the maximum length achievable is 2.

// Example 2:
// Input: s = "abcdef"
// Output: -1
// Explanation: There exists no special substring which occurs at least thrice. Hence return -1.

// Example 3:
// Input: s = "abcaba"
// Output: 1
// Explanation: The longest special substring which occurs thrice is "a": substrings "abcaba", "abcaba", and "abcaba".
// It can be shown that the maximum length achievable is 1.

// @param {string} s
// @return {number}

var maximumLength = function(s) {
    const n = s.length;

    // Helper function to check if there's a special substring of length `len` occurring at least thrice
    const hasSpecialSubstring = (len) => {
        const countMap = new Map();
        
        for (let i = 0; i <= n - len; i++) {
            const substring = s.slice(i, i + len);

            // Check if substring is special (all characters are the same)
            if (new Set(substring).size === 1) {
                countMap.set(substring, (countMap.get(substring) || 0) + 1);
                if (countMap.get(substring) >= 3) {
                    return true;
                }
            }
        }
        return false;
    };

    // Iterate over lengths from n to 1
    for (let len = n; len >= 1; len--) {
        if (hasSpecialSubstring(len)) {
            return len;
        }
    }

    return -1; // No valid substring found
};

console.log("==========================================")

// 2779. Maximum Beauty of an Array After Applying Operation
// Medium
// You are given a 0-indexed array nums and a non-negative integer k.
// In one operation, you can do the following:
// Choose an index i that hasn't been chosen before from the range [0, nums.length - 1].
// Replace nums[i] with any integer from the range [nums[i] - k, nums[i] + k].
// The beauty of the array is the length of the longest subsequence consisting of equal elements.
// Return the maximum possible beauty of the array nums after applying the operation any number of times.
// Note that you can apply the operation to each index only once.
// A subsequence of an array is a new array generated from the original array by deleting some elements 
// (possibly none) without changing the order of the remaining elements.

// Example 1:
// Input: nums = [4,6,1,2], k = 2
// Output: 3
// Explanation: In this example, we apply the following operations:
// - Choose index 1, replace it with 4 (from range [4,8]), nums = [4,4,1,2].
// - Choose index 3, replace it with 4 (from range [0,4]), nums = [4,4,1,4].
// After the applied operations, the beauty of the array nums is 3 (subsequence consisting of indices 0, 1, and 3).
// It can be proven that 3 is the maximum possible length we can achieve.

// Example 2:
// Input: nums = [1,1,1,1], k = 10
// Output: 4
// Explanation: In this example we don't have to apply any operations.
// The beauty of the array nums is 4 (whole array).

// @param {number[]} nums
// @param {number} k
// @return {number}

var maximumBeauty = function(nums, k) {
    // Sort the array to process elements in order
    nums.sort((a, b) => a - b);

    let maxBeauty = 0;
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < nums.length; right++) {
        // Ensure the range condition is satisfied for the sliding window
        while (nums[right] - nums[left] > 2 * k) {
            left++;
        }

        // Calculate the current window size and update maxBeauty
        maxBeauty = Math.max(maxBeauty, right - left + 1);
    }

    return maxBeauty;
};

console.log("==========================================")

// 2558. Take Gifts From the Richest Pile
// Easy
// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:
// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.

// Example 1:
// Input: gifts = [25,64,9,4,100], k = 4
// Output: 29
// Explanation: 
// The gifts are taken in the following way:
// - In the first second, the last pile is chosen and 10 gifts are left behind.
// - Then the second pile is chosen and 8 gifts are left behind.
// - After that the first pile is chosen and 5 gifts are left behind.
// - Finally, the last pile is chosen again and 3 gifts are left behind.
// The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.

// Example 2:
// Input: gifts = [1,1,1,1], k = 4
// Output: 4
// Explanation: 
// In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile. 
// That is, you can't take any pile with you. 
// So, the total gifts remaining are 4.

// @param {number[]} gifts
// @param {number} k
// @return {number}

var pickGifts = function(gifts, k) {
    // Use a max heap to efficiently get the maximum pile
    const maxHeap = new MaxHeap(gifts);

    for (let i = 0; i < k; i++) {
        // Get the largest pile
        const maxGifts = maxHeap.pop();
        
        // Calculate the remaining gifts and push it back to the heap
        const remainingGifts = Math.floor(Math.sqrt(maxGifts));
        maxHeap.push(remainingGifts);
    }

    // Sum the remaining gifts in the heap
    return maxHeap.sum();
};

// Helper class to implement a Max Heap
class MaxHeap {
    constructor(arr) {
        this.heap = [];
        for (const num of arr) {
            this.push(num);
        }
    }

    push(val) {
        this.heap.push(val);
        this._siftUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._siftDown(0);

        return top;
    }

    sum() {
        return this.heap.reduce((acc, num) => acc + num, 0);
    }

    _siftUp(idx) {
        let parentIdx = Math.floor((idx - 1) / 2);
        while (idx > 0 && this.heap[idx] > this.heap[parentIdx]) {
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    _siftDown(idx) {
        const n = this.heap.length;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let largest = idx;

            if (leftIdx < n && this.heap[leftIdx] > this.heap[largest]) {
                largest = leftIdx;
            }

            if (rightIdx < n && this.heap[rightIdx] > this.heap[largest]) {
                largest = rightIdx;
            }

            if (largest === idx) break;

            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            idx = largest;
        }
    }
}


console.log("==========================================")

// 2593. Find Score of an Array After Marking All Elements
// Medium
// You are given an array nums consisting of positive integers.
// Starting with score = 0, apply the following algorithm:
// Choose the smallest integer of the array that is not marked. If there is a tie, choose the one with the smallest index.
// Add the value of the chosen integer to score.
// Mark the chosen element and its two adjacent elements if they exist.
// Repeat until all the array elements are marked.
// Return the score you get after applying the above algorithm.

// Example 1:
// Input: nums = [2,1,3,4,5,2]
// Output: 7
// Explanation: We mark the elements as follows:
// - 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,1,3,4,5,2].
// - 2 is the smallest unmarked element, so we mark it and its left adjacent element: [2,1,3,4,5,2].
// - 4 is the only remaining unmarked element, so we mark it: [2,1,3,4,5,2].
// Our score is 1 + 2 + 4 = 7.

// Example 2:
// Input: nums = [2,3,5,1,3,2]
// Output: 5
// Explanation: We mark the elements as follows:
// - 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,3,5,1,3,2].
// - 2 is the smallest unmarked element, since there are two of them, we choose the left-most one, so we mark the one at index 0 and its right adjacent element: [2,3,5,1,3,2].
// - 2 is the only remaining unmarked element, so we mark it: [2,3,5,1,3,2].
// Our score is 1 + 2 + 2 = 5.

// @param {number[]} nums
// @return {number}

var findScore = function(nums) {
    // Priority Queue implementation using Min-Heap
    const minHeap = new MinPriorityQueue({
        compare: (a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    });

    // Add all elements with their indices to the heap
    for (let i = 0; i < nums.length; i++) {
        minHeap.enqueue([nums[i], i]);
    }

    let marked = Array(nums.length).fill(false);
    let score = 0;

    while (!minHeap.isEmpty()) {
        const [value, index] = minHeap.dequeue(); // Efficiently extract the smallest element

        // Skip if the element is already marked
        if (marked[index]) continue;

        // Add the value to the score
        score += value;

        // Mark the current element and its adjacent elements
        marked[index] = true;
        if (index > 0) marked[index - 1] = true;
        if (index < nums.length - 1) marked[index + 1] = true;
    }

    return score;
};

console.log("==========================================")

// 2762. Continuous Subarrays
// Medium
// You are given a 0-indexed integer array nums. A subarray of nums is called continuous if:
// Let i, i + 1, ..., j be the indices in the subarray. Then, for each pair of indices i <= i1, i2 <= j, 0 <= |nums[i1] - nums[i2]| <= 2.
// Return the total number of continuous subarrays.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [5,4,2,4]
// Output: 8
// Explanation: 
// Continuous subarray of size 1: [5], [4], [2], [4].
// Continuous subarray of size 2: [5,4], [4,2], [2,4].
// Continuous subarray of size 3: [4,2,4].
// Thereare no subarrys of size 4.
// Total continuous subarrays = 4 + 3 + 1 = 8.
// It can be shown that there are no more continuous subarrays.

// Example 2:
// Input: nums = [1,2,3]
// Output: 6
// Explanation: 
// Continuous subarray of size 1: [1], [2], [3].
// Continuous subarray of size 2: [1,2], [2,3].
// Continuous subarray of size 3: [1,2,3].
// Total continuous subarrays = 3 + 2 + 1 = 6.
 
// @param {number[]} nums
// @return {number}

var continuousSubarrays = function(nums) {
    let totalSubarrays = 0;
    let left = 0; // Start of the sliding window
    let minQueue = []; // Monotonic queue to track the minimum element in the window
    let maxQueue = []; // Monotonic queue to track the maximum element in the window

    for (let right = 0; right < nums.length; right++) {
        // Update the minQueue to maintain its properties
        while (minQueue.length > 0 && nums[minQueue[minQueue.length - 1]] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(right);

        // Update the maxQueue to maintain its properties
        while (maxQueue.length > 0 && nums[maxQueue[maxQueue.length - 1]] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(right);

        // Ensure the subarray condition is satisfied
        while (nums[maxQueue[0]] - nums[minQueue[0]] > 2) {
            left++;
            // Remove indices outside the current window from the queues
            if (minQueue[0] < left) minQueue.shift();
            if (maxQueue[0] < left) maxQueue.shift();
        }

        // Count all subarrays ending at 'right'
        totalSubarrays += (right - left + 1);
    }

    return totalSubarrays;
};



console.log("==========================================")

// 1792. Maximum Average Pass Ratio
// Medium
// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, 
// where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, 
// but only passi number of students will pass the exam.

// You are also given an integer extraStudents. 
// There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. 
// You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

// The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. 
// The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

// Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.

// Example 2:
// Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
// Output: 0.53485

// @param {number[][]} classes
// @param {number} extraStudents
// @return {number}

var maxAverageRatio = function(classes, extraStudents) {
    const heap = new MaxHeap();
    
    // Populate the heap with the initial gain for each class
    for (let [passi, totali] of classes) {
        const gain = (passi + 1) / (totali + 1) - passi / totali;
        heap.insert([-gain, passi, totali]);
    }
    
    // Distribute the extra students
    while (extraStudents > 0) {
        let [negativeGain, passi, totali] = heap.extractMax();
        passi++;
        totali++;
        const newGain = (passi + 1) / (totali + 1) - passi / totali;
        heap.insert([-newGain, passi, totali]);
        extraStudents--;
    }
    
    // Compute the final average pass ratio
    let totalRatio = 0;
    for (const [_, passi, totali] of heap.getAll()) {
        totalRatio += passi / totali;
    }
    return totalRatio / classes.length;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(item) {
        this.heap.push(item);
        this._bubbleUp();
    }
    
    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown();
        }
        return max;
    }
    
    getAll() {
        return this.heap;
    }
    
    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element[0] >= parent[0]) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }
    
    _sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
};

console.log("==========================================")

// 3264. Final Array State After K Multiplication Operations I
// Easy
// You are given an integer array nums, an integer k, and an integer multiplier.
// You need to perform k operations on nums. In each operation:
// Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
// Replace the selected minimum value x with x * multiplier.
// Return an integer array denoting the final state of nums after performing all k operations.

// Example 1:
// Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
// Output: [8,4,6,5,6]
// Explanation:
// Operation	Result
// After operation 1	[2, 2, 3, 5, 6]
// After operation 2	[4, 2, 3, 5, 6]
// After operation 3	[4, 4, 3, 5, 6]
// After operation 4	[4, 4, 6, 5, 6]
// After operation 5	[8, 4, 6, 5, 6]

// Example 2:
// Input: nums = [1,2], k = 3, multiplier = 4
// Output: [16,8]
// Explanation:
// Operation	Result
// After operation 1	[4, 2]
// After operation 2	[4, 8]
// After operation 3	[16, 8]
 
// @param {number[]} nums
// @param {number} k
// @param {number} multiplier
// @return {number[]}

var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        // Find the index of the first occurrence of the minimum value
        let minIndex = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // Replace the minimum value with its product with the multiplier
        nums[minIndex] *= multiplier;
    }

    return nums;
};

console.log("==========================================")

// 2182. Construct String With Repeat Limit
// Medium
// You are given a string s and an integer repeatLimit. 
// Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. 
// You do not have to use all characters from s.

// Return the lexicographically largest repeatLimitedString possible.

// A string a is lexicographically larger than a string b if in the first position where a and b differ, 
// string a has a letter that appears later in the alphabet than the corresponding letter in b. 
// If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.

// Example 1:
// Input: s = "cczazcc", repeatLimit = 3
// Output: "zzcccac"
// Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
// The letter 'a' appears at most 1 time in a row.
// The letter 'c' appears at most 3 times in a row.
// The letter 'z' appears at most 2 times in a row.
// Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
// The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
// Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.

// Example 2:
// Input: s = "aababab", repeatLimit = 2
// Output: "bbabaa"
// Explanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa". 
// The letter 'a' appears at most 2 times in a row.
// The letter 'b' appears at most 2 times in a row.
// Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
// The string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".
// Note that the string "bbabaaa" is lexicographically larger but the letter 'a' appears more than 2 times in a row, so it is not a valid repeatLimitedString.

// @param {string} s
// @param {number} repeatLimit
// @return {string}

var repeatLimitedString = function(s, repeatLimit) {
    // Count character frequencies
    const freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    // Sort characters in descending lexicographical order
    const sortedChars = Object.keys(freq).sort((a, b) => b.localeCompare(a));
    
    let result = [];
    
    while (sortedChars.length > 0) {
        const char = sortedChars[0]; // The largest remaining character
        const count = Math.min(freq[char], repeatLimit);
        
        // Append up to repeatLimit times
        result.push(...Array(count).fill(char));
        freq[char] -= count;
        
        if (freq[char] === 0) {
            // Remove the character from the list if used up
            sortedChars.shift();
        } else {
            // Find the next lexicographically smaller character
            if (sortedChars.length > 1) {
                const nextChar = sortedChars[1];
                result.push(nextChar);
                freq[nextChar]--;
                if (freq[nextChar] === 0) {
                    sortedChars.splice(1, 1);
                }
            } else {
                // No alternative character available, break
                break;
            }
        }
    }
    
    return result.join('');
};

console.log("==========================================")

// 1475. Final Prices With a Special Discount in a Shop
// Easy
// You are given an integer array prices where prices[i] is the price of the ith item in a shop.
// There is a special discount for items in the shop. If you buy the ith item, 
// then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. 
// Otherwise, you will not receive any discount at all.
// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

// Example 1:
// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation: 
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.

// Example 3:
// Input: prices = [10,1,1,6]
// Output: [9,0,1,6]

// @param {number[]} prices
// @return {number[]}

var finalPrices = function(prices) {
    const stack = [];
    const result = [...prices]; // Initialize result array as a copy of prices

    for (let i = 0; i < prices.length; i++) {
        // Check the top of the stack and apply discount if condition is met
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            const index = stack.pop();
            result[index] -= prices[i];
        }
        // Push current index to the stack
        stack.push(i);
    }

    return result;
};


console.log("==========================================")

// 769. Max Chunks To Make Sorted
// Medium
// You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].
// We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. 
// After concatenating them, the result should equal the sorted array.
// Return the largest number of chunks we can make to sort the array.

// Example 1:
// Input: arr = [4,3,2,1,0]
// Output: 1
// Explanation:
// Splitting into two or more chunks will not return the required result.
// For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.

// Example 2:
// Input: arr = [1,0,2,3,4]
// Output: 4
// Explanation:
// We can split into two chunks, such as [1, 0], [2, 3, 4].
// However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.

// @param {number[]} arr
// @return {number}

var maxChunksToSorted = function(arr) {
    let maxSoFar = 0;
    let chunks = 0;

    for (let i = 0; i < arr.length; i++) {
        maxSoFar = Math.max(maxSoFar, arr[i]);
        if (maxSoFar === i) {
            chunks++;
        }
    }

    return chunks;
};

console.log("==========================================")

// 2415. Reverse Odd Levels of Binary Tree
// Medium
// Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.
// For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should become [18,29,11,7,4,3,1,2].
// Return the root of the reversed tree.
// A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.
// The level of a node is the number of edges along the path between it and the root node.

// Example 1:
// Input: root = [2,3,5,8,13,21,34]
// Output: [2,5,3,8,13,21,34]
// Explanation: 
// The tree has only one odd level.
// The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.

// Example 2:
// Input: root = [7,13,11]
// Output: [7,11,13]
// Explanation: 
// The nodes at level 1 are 13, 11, which are reversed and become 11, 13.

// Example 3:
// Input: root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]
// Output: [0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]
// Explanation: 
// The odd levels have non-zero values.
// The nodes at level 1 were 1, 2, and are 2, 1 after the reversal.
// The nodes at level 3 were 1, 1, 1, 1, 2, 2, 2, 2, and are 2, 2, 2, 2, 1, 1, 1, 1 after the reversal.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {TreeNode}

var reverseOddLevels = function(root) {
    if (!root) return root;

    // Queue for BFS
    let queue = [root];
    let level = 0; // Start from level 0 (even level)

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        let currentLevelValues = []; // To store values of the current level's nodes

        // Collect all nodes at this level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            // If we are on an odd level, save the node for swapping later
            if (level % 2 !== 0) currentLevelValues.push(node);

            // Add child nodes to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Reverse node values for odd levels
        if (level % 2 !== 0) {
            let i = 0, j = currentLevelValues.length - 1;
            while (i < j) {
                let temp = currentLevelValues[i].val;
                currentLevelValues[i].val = currentLevelValues[j].val;
                currentLevelValues[j].val = temp;
                i++;
                j--;
            }
        }

        // Move to the next level
        level++;
    }

    return root;
};

console.log("==========================================")

// 2872. Maximum Number of K-Divisible Components
// Hard
// There is an undirected tree with n nodes labeled from 0 to n - 1. 
// You are given the integer n and a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] 
// indicates that there is an edge between nodes ai and bi in the tree.

// You are also given a 0-indexed integer array values of length n, 
// where values[i] is the value associated with the ith node, and an integer k.

// A valid split of the tree is obtained by removing any set of edges, 
// possibly empty, from the tree such that the resulting components all have values that are divisible by k, 
// where the value of a connected component is the sum of the values of its nodes.

// Return the maximum number of components in any valid split.

// Example 1:
// Input: n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6
// Output: 2
// Explanation: We remove the edge connecting node 1 with 2. The resulting split is valid because:
// - The value of the component containing nodes 1 and 3 is values[1] + values[3] = 12.
// - The value of the component containing nodes 0, 2, and 4 is values[0] + values[2] + values[4] = 6.
// It can be shown that no other valid split has more than 2 connected components.

// Example 2:
// Input: n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3
// Output: 3
// Explanation: We remove the edge connecting node 0 with 2, and the edge connecting node 0 with 1. The resulting split is valid because:
// - The value of the component containing node 0 is values[0] = 3.
// - The value of the component containing nodes 2, 5, and 6 is values[2] + values[5] + values[6] = 9.
// - The value of the component containing nodes 1, 3, and 4 is values[1] + values[3] + values[4] = 6.
// It can be shown that no other valid split has more than 3 connected components.

// @param {number} n
// @param {number[][]} edges
// @param {number[]} values
// @param {number} k
// @return {number}

var maxKDivisibleComponents = function(n, edges, values, k) {
    // Build adjacency list
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let componentCount = 0;

    // DFS to compute subtree sums and count k-divisible components
    const dfs = (node, parent) => {
        let subtreeSum = values[node];

        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                subtreeSum += dfs(neighbor, node);
            }
        }

        // If the subtree sum is divisible by k, increment the component count
        if (subtreeSum % k === 0) {
            componentCount++;
            return 0; // Reset sum for this component
        }

        // Return the remainder to the parent node
        return subtreeSum % k;
    };

    dfs(0, -1); // Start DFS from node 0 with no parent

    return componentCount;
};


console.log("==========================================")

// 2940. Find Building Where Alice and Bob Can Meet
// Hard
// You are given a 0-indexed array heights of positive integers, where heights[i] represents the height of the ith building.
// If a person is in building i, they can move to any other building j if and only if i < j and heights[i] < heights[j].
// You are also given another array queries where queries[i] = [ai, bi]. On the ith query, Alice is in building ai while Bob is in building bi.
// Return an array ans where ans[i] is the index of the leftmost building where Alice and Bob can meet on the ith query. 
// If Alice and Bob cannot move to a common building on query i, set ans[i] to -1.

// Example 1:
// Input: heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]
// Output: [2,5,-1,5,2]
// Explanation: In the first query, Alice and Bob can move to building 2 since heights[0] < heights[2] and heights[1] < heights[2]. 
// In the second query, Alice and Bob can move to building 5 since heights[0] < heights[5] and heights[3] < heights[5]. 
// In the third query, Alice cannot meet Bob since Alice cannot move to any other building.
// In the fourth query, Alice and Bob can move to building 5 since heights[3] < heights[5] and heights[4] < heights[5].
// In the fifth query, Alice and Bob are already in the same building.  
// For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
// For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.

// Example 2:
// Input: heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]
// Output: [7,6,-1,4,6]
// Explanation: In the first query, Alice can directly move to Bob's building since heights[0] < heights[7].
// In the second query, Alice and Bob can move to building 6 since heights[3] < heights[6] and heights[5] < heights[6].
// In the third query, Alice cannot meet Bob since Bob cannot move to any other building.
// In the fourth query, Alice and Bob can move to building 4 since heights[3] < heights[4] and heights[0] < heights[4].
// In the fifth query, Alice can directly move to Bob's building since heights[1] < heights[6].
// For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
// For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.

// @param {number[]} heights
// @param {number[][]} queries
// @return {number[]}

function leftmostBuildingQueries(heights, queries) {
    const ans = Array(queries.length).fill(-1);
    const stack = [];

    // Attach indices to queries and sort them by the maximum index in descending order
    const indexedQueries = queries.map(([a, b], i) => ({ i, a: Math.min(a, b), b: Math.max(a, b) }))
        .sort((q1, q2) => q2.b - q1.b);

    let heightsIndex = heights.length - 1;

    for (const { i: queryIndex, a, b } of indexedQueries) {
        if (a === b || heights[a] < heights[b]) {
            ans[queryIndex] = b;
        } else {
            // Process heights greater than `b` and update the stack
            while (heightsIndex > b) {
                while (stack.length && heights[stack[stack.length - 1]] <= heights[heightsIndex]) {
                    stack.pop();
                }
                stack.push(heightsIndex--);
            }

            // Find the leftmost index greater than `a` that satisfies conditions
            const j = findLastGreater(stack, a, heights);
            if (j !== -1) {
                ans[queryIndex] = stack[j];
            }
        }
    }

    return ans;
}

function findLastGreater(stack, target, heights) {
    let left = -1, right = stack.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (heights[stack[mid]] > heights[target]) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left !== -1 ? left : -1;
}



console.log("==========================================")

// 2471. Minimum Number of Operations to Sort a Binary Tree by Level
// Medium
// You are given the root of a binary tree with unique values.
// In one operation, you can choose any two nodes at the same level and swap their values.
// Return the minimum number of operations needed to make the values at each level sorted in a strictly increasing order.
// The level of a node is the number of edges along the path between it and the root node.

// Example 1:
// Input: root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]
// Output: 3
// Explanation:
// - Swap 4 and 3. The 2nd level becomes [3,4].
// - Swap 7 and 5. The 3rd level becomes [5,6,8,7].
// - Swap 8 and 7. The 3rd level becomes [5,6,7,8].
// We used 3 operations so return 3.
// It can be proven that 3 is the minimum number of operations needed.

// Example 2:
// Input: root = [1,3,2,7,6,5,4]
// Output: 3
// Explanation:
// - Swap 3 and 2. The 2nd level becomes [2,3].
// - Swap 7 and 4. The 3rd level becomes [4,6,5,7].
// - Swap 6 and 5. The 3rd level becomes [4,5,6,7].
// We used 3 operations so return 3.
// It can be proven that 3 is the minimum number of operations needed.

// Example 3:
// Input: root = [1,2,3,4,5,6]
// Output: 0
// Explanation: Each level is already sorted in increasing order so return 0.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number}

var minimumOperations = function(root) {
    if (!root) return 0;
    
    let queue = [root];
    let totalSwaps = 0;
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelValues = [];
        let nextQueue = [];
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue[i];
            levelValues.push(node.val);
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        
        totalSwaps += countMinimumSwaps(levelValues);
        queue = nextQueue;
    }
    
    return totalSwaps;
};

function countMinimumSwaps(arr) {
    let n = arr.length;
    let sorted = [...arr].sort((a, b) => a - b);
    let indexMap = new Map();
    
    for (let i = 0; i < n; i++) {
        indexMap.set(sorted[i], i);
    }
    
    let visited = new Array(n).fill(false);
    let swaps = 0;
    
    for (let i = 0; i < n; i++) {
        if (visited[i] || indexMap.get(arr[i]) === i) continue;
        
        let cycleSize = 0;
        let current = i;
        
        while (!visited[current]) {
            visited[current] = true;
            current = indexMap.get(arr[current]);
            cycleSize++;
        }
        
        if (cycleSize > 1) swaps += (cycleSize - 1);
    }
    
    return swaps;
}

console.log("==========================================")

// 3203. Find Minimum Diameter After Merging Two Trees
// Hard
// There exist two undirected trees with n and m nodes, numbered from 0 to n - 1 and from 0 to m - 1, respectively. 
// You are given two 2D integer arrays edges1 and edges2 of lengths n - 1 and m - 1, 
// respectively, where edges1[i] = [ai, bi] indicates that there is an edge between nodes ai and bi 
// in the first tree and edges2[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the second tree.

// You must connect one node from the first tree with another node from the second tree with an edge.

// Return the minimum possible diameter of the resulting tree.

// The diameter of a tree is the length of the longest path between any two nodes in the tree.

// Example 1:
// Input: edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]
// Output: 3
// Explanation:
// We can obtain a tree of diameter 3 by connecting node 0 from the first tree with any node from the second tree.

// Example 2:
// Input: edges1 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], edges2 = [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]]
// Output: 5
// Explanation:
// We can obtain a tree of diameter 5 by connecting node 0 from the first tree with node 0 from the second tree.

// @param {number[][]} edges1
// @param {number[][]} edges2
// @return {number}

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    // Calculate diameters of both trees
    const d1 = treeDiameter(edges1);
    const d2 = treeDiameter(edges2);
    
    // Return maximum of:
    // 1. Diameter of first tree
    // 2. Diameter of second tree
    // 3. Path through connecting edge (half of d1 + half of d2 + 1)
    return Math.max(d1, d2, Math.ceil(d1 / 2) + Math.ceil(d2 / 2) + 1);
};
function treeDiameter(edges) {
    // Create adjacency list representation of the tree
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        g[a].push(b);
        g[b].push(a);
    }
    
    let [ans, a] = [0, 0];  // ans: max distance, a: farthest node
    const dfs = (i, fa, t) => {
        // Visit all neighbors except parent
        for (const j of g[i]) {
            if (j !== fa) {
                dfs(j, i, t + 1);
            }
        }
        
        // Update maximum distance and farthest node
        if (ans < t) {
            ans = t;
            a = i;
        }
    };
    
    // First DFS to find one end of diameter
    dfs(0, -1, 0);
    // Second DFS from found node to get actual diameter
    dfs(a, -1, 0);
    
    return ans;
}


console.log("==========================================")

// 515. Find Largest Value in Each Tree Row
// Medium
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]

// Example 2:
// Input: root = [1,2,3]
// Output: [1,3]
 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number[]}

var largestValues = function(root) {
    if (!root) return []; // If the root is null, return an empty array.

    const result = [];
    const queue = [root]; // Initialize the queue with the root node.

    while (queue.length > 0) {
        let levelSize = queue.length;
        let max = -Infinity; // Initialize the maximum value for this level.

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Get the next node in the queue.

            max = Math.max(max, node.val); // Update the maximum value for this level.

            // Add the left and right children to the queue, if they exist.
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(max); // Store the largest value of this level.
    }

    return result; // Return the result containing the largest values per level.
};

console.log("==========================================")

// 494. Target Sum
// Medium
// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Example 1:
// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// Example 2:
// Input: nums = [1], target = 1
// Output: 1
 
// @param {number[]} nums
// @param {number} target
// @return {number}

var findTargetSumWays = function(nums, target) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // If the target is impossible to reach, return 0
    if ((totalSum - target) % 2 !== 0 || totalSum < target) return 0;

    const subsetSum = (totalSum - target) / 2;

    // Initialize dp array
    const dp = new Array(subsetSum + 1).fill(0);
    dp[0] = 1; // Base case: one way to get sum 0 (no elements)

    for (const num of nums) {
        for (let sum = subsetSum; sum >= num; sum--) {
            dp[sum] += dp[sum - num];
        }
    }

    return dp[subsetSum];
};


console.log("==========================================")

// 1014. Best Sightseeing Pair
// Medium
// You are given an integer array values where values[i] represents the value of the ith sightseeing spot. 
// Two sightseeing spots i and j have a distance j - i between them.
// The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: 
// the sum of the values of the sightseeing spots, minus the distance between them.
// Return the maximum score of a pair of sightseeing spots.

// Example 1:
// Input: values = [8,1,5,2,6]
// Output: 11
// Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11

// Example 2:
// Input: values = [1,2]
// Output: 2

// @param {number[]} values
// @return {number}

var maxScoreSightseeingPair = function(values) {
    let maxScore = 0;
    let maxI = values[0]; // Represents the maximum value of (values[i] + i) seen so far
    
    for (let j = 1; j < values.length; j++) {
        // Calculate the score for the current pair (i, j)
        maxScore = Math.max(maxScore, maxI + values[j] - j);
        // Update maxI to include the current value
        maxI = Math.max(maxI, values[j] + j);
    }
    
    return maxScore;
};

console.log("==========================================")

// 689. Maximum Sum of 3 Non-Overlapping Subarrays
// Hard
// Given an integer array nums and an integer k, find three non-overlapping subarrays of length k with maximum sum and return them.
// Return the result as a list of indices representing the starting position of each interval (0-indexed). 
// If there are multiple answers, return the lexicographically smallest one.

// Example 1:
// Input: nums = [1,2,1,2,6,7,5,1], k = 2
// Output: [0,3,5]
// Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
// We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

// Example 2:
// Input: nums = [1,2,1,2,1,2,1,2,1], k = 2
// Output: [0,2,4]

// @param {number[]} nums
// @param {number} k
// @return {number[]}

var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const prefixSum = Array(n + 1).fill(0);

    // Compute prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    // Arrays to store the best indices for left and right max sums
    const left = Array(n).fill(0);
    const right = Array(n).fill(0);

    // Compute the best left subarray indices
    let maxSum = prefixSum[k] - prefixSum[0];
    for (let i = k; i < n; i++) {
        if (prefixSum[i + 1] - prefixSum[i + 1 - k] > maxSum) {
            maxSum = prefixSum[i + 1] - prefixSum[i + 1 - k];
            left[i] = i + 1 - k;
        } else {
            left[i] = left[i - 1];
        }
    }

    // Compute the best right subarray indices
    maxSum = prefixSum[n] - prefixSum[n - k];
    right[n - k] = n - k;
    for (let i = n - k - 1; i >= 0; i--) {
        if (prefixSum[i + k] - prefixSum[i] >= maxSum) {
            maxSum = prefixSum[i + k] - prefixSum[i];
            right[i] = i;
        } else {
            right[i] = right[i + 1];
        }
    }

    // Find the best combination of left, middle, and right
    let result = [-1, -1, -1];
    maxSum = 0;
    for (let mid = k; mid <= n - 2 * k; mid++) {
        const l = left[mid - 1];
        const r = right[mid + k];
        const total = (prefixSum[l + k] - prefixSum[l]) +
                      (prefixSum[mid + k] - prefixSum[mid]) +
                      (prefixSum[r + k] - prefixSum[r]);

        if (total > maxSum) {
            maxSum = total;
            result = [l, mid, r];
        }
    }

    return result;
};

console.log("==========================================")

// 1639. Number of Ways to Form a Target String Given a Dictionary
// Hard
// You are given a list of strings of the same length words and a string target.
// Your task is to form target using the given words under the following rules:
// target should be formed from left to right.
// To form the ith character (0-indexed) of target, you can choose the kth character of the jth string in words if target[i] = words[j][k].
// Once you use the kth character of the jth string of words, you can no longer use the xth character of any string in words where x <= k. 
// In other words, all characters to the left of or at index k become unusuable for every string.
// Repeat the process until you form the string target.
// Notice that you can use multiple characters from the same string in words provided the conditions above are met.

// Return the number of ways to form target from words. Since the answer may be too large, return it modulo 109 + 7.

// Example 1:
// Input: words = ["acca","bbbb","caca"], target = "aba"
// Output: 6
// Explanation: There are 6 ways to form target.
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
// "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
// "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
// "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")

// Example 2:
// Input: words = ["abba","baab"], target = "bab"
// Output: 4
// Explanation: There are 4 ways to form target.
// "bab" -> index 0 ("baab"), index 1 ("baab"), index 2 ("abba")
// "bab" -> index 0 ("baab"), index 1 ("baab"), index 3 ("baab")
// "bab" -> index 0 ("baab"), index 2 ("baab"), index 3 ("baab")
// "bab" -> index 1 ("abba"), index 2 ("baab"), index 3 ("baab")

// @param {string[]} words
// @param {string} target
// @return {number}

var numWays = function(words, target) {
    const MOD = 1e9 + 7;
    const m = words[0].length; // Number of columns
    const n = target.length; // Length of target
    
    // Precompute character frequencies for each column
    const freq = Array.from({ length: m }, () => Array(26).fill(0));
    for (const word of words) {
        for (let j = 0; j < m; j++) {
            freq[j][word[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }
    
    // DP table: dp[i][j] means ways to form target[0...i] using first j columns
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    
    // Base case: dp[0][j] = 1 (1 way to form empty string)
    for (let j = 0; j <= m; j++) {
        dp[0][j] = 1;
    }
    
    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // Don't use the j-th column
            dp[i][j] = dp[i][j - 1];
            
            // Use the j-th column if possible
            const charIndex = target[i - 1].charCodeAt(0) - 'a'.charCodeAt(0);
            if (freq[j - 1][charIndex] > 0) {
                dp[i][j] += dp[i - 1][j - 1] * freq[j - 1][charIndex];
                dp[i][j] %= MOD;
            }
        }
    }
    
    // Result is the number of ways to form target[0...n] using all columns
    return dp[n][m];
};

console.log("==========================================")

// 2466. Count Ways To Build Good Strings
// Medium
// Given the integers zero, one, low, and high, we can construct a string by starting with an empty string, 
// and then at each step perform either of the following:

// Append the character '0' zero times.
// Append the character '1' one times.
// This can be performed any number of times.

// A good string is a string constructed by the above process having a length between low and high (inclusive).

// Return the number of different good strings that can be constructed satisfying these properties. 
// Since the answer can be large, return it modulo 109 + 7.

// Example 1:
// Input: low = 3, high = 3, zero = 1, one = 1
// Output: 8
// Explanation: 
// One possible valid good string is "011". 
// It can be constructed as follows: "" -> "0" -> "01" -> "011". 
// All binary strings from "000" to "111" are good strings in this example.

// Example 2:
// Input: low = 2, high = 3, zero = 1, one = 2
// Output: 5
// Explanation: The good strings are "00", "11", "000", "110", and "011".

// @param {number} low
// @param {number} high
// @param {number} zero
// @param {number} one
// @return {number}

var countGoodStrings = function(low, high, zero, one) {
    const MOD = 1e9 + 7;
    const dp = Array(high + 1).fill(0);
    dp[0] = 1; // Base case: one way to create an empty string

    for (let length = 0; length <= high; length++) {
        if (dp[length] > 0) { // If there's a way to build this length
            if (length + zero <= high) {
                dp[length + zero] = (dp[length + zero] + dp[length]) % MOD;
            }
            if (length + one <= high) {
                dp[length + one] = (dp[length + one] + dp[length]) % MOD;
            }
        }
    }

    let result = 0;
    for (let length = low; length <= high; length++) {
        result = (result + dp[length]) % MOD;
    }

    return result;
};

console.log("==========================================")

// 983. Minimum Cost For Tickets
// Medium
// You have planned some train traveling one year in advance. 
// The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.

// Train tickets are sold in three different ways:

// a 1-day pass is sold for costs[0] dollars,
// a 7-day pass is sold for costs[1] dollars, and
// a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.

// For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
// Return the minimum number of dollars you need to travel every day in the given list of days.

// Example 1:
// Input: days = [1,4,6,7,8,20], costs = [2,7,15]
// Output: 11
// Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
// On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
// On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
// In total, you spent $11 and covered all the days of your travel.

// Example 2:
// Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
// Output: 17
// Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
// On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
// In total, you spent $17 and covered all the days of your travel.

// @param {number[]} days
// @param {number[]} costs
// @return {number}

var mincostTickets = function(days, costs) {
    const n = days.length;
    const dp = new Array(366).fill(0); // Array to store the minimum cost up to each day
    const travelDays = new Set(days); // Use a set for quick lookup of travel days

    for (let i = 1; i <= 365; i++) {
        if (!travelDays.has(i)) {
            // If not a travel day, cost is same as previous day
            dp[i] = dp[i - 1];
        } else {
            // Calculate minimum cost by considering 1-day, 7-day, and 30-day passes
            dp[i] = Math.min(
                dp[Math.max(0, i - 1)] + costs[0], // 1-day pass
                dp[Math.max(0, i - 7)] + costs[1], // 7-day pass
                dp[Math.max(0, i - 30)] + costs[2] // 30-day pass
            );
        }
    }

    // Return the cost on the last travel day
    return dp[days[n - 1]];
};

console.log("==========================================")

// 1422. Maximum Score After Splitting a String
// Easy
// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings 
// (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Example 1:
// Input: s = "011101"
// Output: 5 
// Explanation: 
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5 
// left = "01" and right = "1101", score = 1 + 3 = 4 
// left = "011" and right = "101", score = 1 + 2 = 3 
// left = "0111" and right = "01", score = 1 + 1 = 2 
// left = "01110" and right = "1", score = 2 + 1 = 3

// Example 2:
// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

// Example 3:
// Input: s = "1111"
// Output: 3
 
// @param {string} s
// @return {number}

var maxScore = function(s) {
    let totalOnes = 0; // Count total number of 1s in the string
    for (let char of s) {
        if (char === '1') totalOnes++;
    }

    let maxScore = 0;
    let leftZeros = 0; // Count zeros in the left substring
    let rightOnes = totalOnes; // Initial right ones is all the ones in the string

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }
        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }

    return maxScore;
};


console.log("==========================================")

// 2559. Count Vowel Strings in Ranges
// Medium
// You are given a 0-indexed array of strings words and a 2D array of integers queries.
// Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.
// Return an array ans of size queries.length, where ans[i] is the answer to the ith query.
// Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
// Output: [2,3,0]
// Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
// The answer to the query [0,2] is 2 (strings "aba" and "ece").
// to query [1,4] is 3 (strings "ece", "aa", "e").
// to query [1,1] is 0.
// We return [2,3,0].

// Example 2:
// Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
// Output: [3,2,1]
// Explanation: Every string satisfies the conditions, so we return [3,2,1].

// @param {string[]} words
// @param {number[][]} queries
// @return {number[]}

var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Helper function to check if a string starts and ends with a vowel
    const isVowelString = (str) => {
        const firstChar = str[0];
        const lastChar = str[str.length - 1];
        return vowels.has(firstChar) && vowels.has(lastChar);
    };
    
    // Precompute the prefix sum for vowel strings
    const prefixSum = new Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + (isVowelString(words[i]) ? 1 : 0);
    }

    // Process each query and calculate the result
    const result = [];
    for (const [li, ri] of queries) {
        result.push(prefixSum[ri + 1] - prefixSum[li]);
    }

    return result;
};

console.log("==========================================")

// 2270. Number of Ways to Split Array
// Medium
// You are given a 0-indexed integer array nums of length n.
// nums contains a valid split at index i if the following are true:
// The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
// There is at least one element to the right of i. That is, 0 <= i < n - 1.
// Return the number of valid splits in nums.

// Example 1:
// Input: nums = [10,4,-8,7]
// Output: 2
// Explanation: 
// There are three ways of splitting nums into two non-empty parts:
// - Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
// - Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
// - Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split.
// Thus, the number of valid splits in nums is 2.

// Example 2:
// Input: nums = [2,3,1,0]
// Output: 2
// Explanation: 
// There are two valid splits in nums:
// - Split nums at index 1. Then, the first part is [2,3], and its sum is 5. The second part is [1,0], and its sum is 1. Since 5 >= 1, i = 1 is a valid split. 
// - Split nums at index 2. Then, the first part is [2,3,1], and its sum is 6. The second part is [0], and its sum is 0. Since 6 >= 0, i = 2 is a valid split.

// @param {number[]} nums
// @return {number}

var waysToSplitArray = function(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0); // Calculate total sum of array
    let leftSum = 0; // Initialize left sum
    let count = 0; // Initialize count of valid splits

    for (let i = 0; i < nums.length - 1; i++) { // Iterate up to n - 1
        leftSum += nums[i]; // Update left sum
        let rightSum = totalSum - leftSum; // Calculate right sum

        if (leftSum >= rightSum) { // Check the condition for a valid split
            count++; // Increment the count
        }
    }

    return count; // Return the total number of valid splits
};

console.log("==========================================")

// 1930. Unique Length-3 Palindromic Subsequences
// Medium
// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.
// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.
// A palindrome is a string that reads the same forwards and backwards.
// A subsequence of a string is a new string generated from the original string with some characters 
// (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".

// Example 1:
// Input: s = "aabca"
// Output: 3
// Explanation: The 3 palindromic subsequences of length 3 are:
// - "aba" (subsequence of "aabca")
// - "aaa" (subsequence of "aabca")
// - "aca" (subsequence of "aabca")

// Example 2:
// Input: s = "adc"
// Output: 0
// Explanation: There are no palindromic subsequences of length 3 in "adc".

// Example 3:
// Input: s = "bbcbaba"
// Output: 4
// Explanation: The 4 palindromic subsequences of length 3 are:
// - "bbb" (subsequence of "bbcbaba")
// - "bcb" (subsequence of "bbcbaba")
// - "bab" (subsequence of "bbcbaba")
// - "aba" (subsequence of "bbcbaba")

// @param {string} s
// @return {number}

var countPalindromicSubsequence = function(s) {
    let result = 0;

    // Iterate through each unique character in the string
    for (let char of new Set(s)) {
        let first = s.indexOf(char);
        let last = s.lastIndexOf(char);

        // Ensure there's a gap between the first and last occurrence
        if (last - first > 1) {
            // Create a set of middle characters
            let middleChars = new Set(s.slice(first + 1, last));
            result += middleChars.size; // Each unique middle char forms a new palindrome
        }
    }

    return result;
};

console.log("==========================================")

// 2381. Shifting Letters II
// Medium
// You are given a string s of lowercase English letters and a 2D integer array shifts where shifts[i] = [starti, endi, directioni]. 
// For every i, shift the characters in s from the index starti to the index endi (inclusive) forward if directioni = 1, 
// or shift the characters backward if directioni = 0.

// Shifting a character forward means replacing it with the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). 
// Similarly, shifting a character backward means replacing it with the previous letter in the alphabet (wrapping around so that 'a' becomes 'z').

// Return the final string after all such shifts to s are applied.

// Example 1:
// Input: s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]
// Output: "ace"
// Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = "zac".
// Secondly, shift the characters from index 1 to index 2 forward. Now s = "zbd".
// Finally, shift the characters from index 0 to index 2 forward. Now s = "ace".

// Example 2:
// Input: s = "dztz", shifts = [[0,0,0],[1,1,1]]
// Output: "catz"
// Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = "cztz".
// Finally, shift the characters from index 1 to index 1 forward. Now s = "catz".

// @param {string} s
// @param {number[][]} shifts
// @return {string}

var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const shiftEffect = Array(n + 1).fill(0);

    // Apply the shifts using a difference array
    for (const [start, end, direction] of shifts) {
        const effect = direction === 1 ? 1 : -1;
        shiftEffect[start] += effect;
        shiftEffect[end + 1] -= effect;
    }

    // Calculate the cumulative shift effect
    let cumulativeShift = 0;
    const result = Array(n);
    for (let i = 0; i < n; i++) {
        cumulativeShift += shiftEffect[i];
        const newCharCode = (s.charCodeAt(i) - 97 + cumulativeShift) % 26;
        result[i] = String.fromCharCode(((newCharCode + 26) % 26) + 97); // Ensure positive wrapping
    }

    return result.join('');
};
console.log("==========================================")

// 1769. Minimum Number of Operations to Move All Balls to Each Box
// Medium
// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. 
// Note that after doing so, there may be more than one ball in some boxes.
// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
// Each answer[i] is calculated considering the initial state of the boxes.

// Example 1:
// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, 
// and move one ball from the second box to the third box in one operation.

// Example 2:
// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]

// @param {string} boxes
// @return {number[]}

var minOperations = function(boxes) {
    const n = boxes.length;
    const result = new Array(n).fill(0);
    
    let count = 0;  // Number of balls to the left
    let operations = 0;  // Total operations to move balls to the current box
    
    // Left-to-right pass
    for (let i = 0; i < n; i++) {
        result[i] += operations;
        count += boxes[i] === '1' ? 1 : 0;
        operations += count;
    }
    
    count = 0;  // Reset count for the right pass
    operations = 0;  // Reset operations for the right pass
    
    // Right-to-left pass
    for (let i = n - 1; i >= 0; i--) {
        result[i] += operations;
        count += boxes[i] === '1' ? 1 : 0;
        operations += count;
    }
    
    return result;
};
console.log("==========================================")

// 1408. String Matching in an Array
// Easy
// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.
// A substring is a contiguous sequence of characters within a string

// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

// @param {string[]} words
// @return {string[]}

var stringMatching = function(words) {
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break; // No need to check further; move to the next word
            }
        }
    }
    
    return result;
};

console.log("==========================================")

// 3042. Count Prefix and Suffix Pairs I
// Easy
// You are given a 0-indexed string array words.
// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:
// isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefix and a suffix of str2, and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.
// Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.

// Example 1:
// Input: words = ["a","aba","ababa","aa"]
// Output: 4
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
// i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
// i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
// i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
// Therefore, the answer is 4.

// Example 2:
// Input: words = ["pa","papa","ma","mama"]
// Output: 2
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("pa", "papa") is true.
// i = 2 and j = 3 because isPrefixAndSuffix("ma", "mama") is true.
// Therefore, the answer is 2.  

// Example 3:
// Input: words = ["abab","ab"]
// Output: 0
// Explanation: In this example, the only valid index pair is i = 0 and j = 1, and isPrefixAndSuffix("abab", "ab") is false.
// Therefore, the answer is 0.

// @param {string[]} words
// @return {number}

var countPrefixSuffixPairs = function(words) {
    // Helper function to check if str1 is both a prefix and a suffix of str2
    const isPrefixAndSuffix = (str1, str2) => {
        return str2.startsWith(str1) && str2.endsWith(str1);
    };

    let count = 0;

    // Loop through all pairs of indices (i, j) where i < j
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
};

console.log("==========================================")

// 2185. Counting Words With a Given Prefix
// Easy
// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

// Example 1:
// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

// Example 2:
// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

// @param {string[]} words
// @param {string} pref
// @return {number}

var prefixCount = function(words, pref) {
    let count = 0;
    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }
    return count;
};

console.log("==========================================")

// 916. Word Subsets
// Medium
// You are given two string arrays words1 and words2.
// A string b is a subset of string a if every letter in b occurs in a including multiplicity.
// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.

// Return an array of all the universal strings in words1. You may return the answer in any order.

// Example 1:
// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
// Output: ["facebook","google","leetcode"]

// Example 2:
// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
// Output: ["apple","google","leetcode"]
 
// @param {string[]} words1
// @param {string[]} words2
// @return {string[]}

var wordSubsets = function(words1, words2) {
    // Helper function to calculate character frequency in a word
    const getCharFrequency = (word) => {
        const freq = new Array(26).fill(0);
        for (let char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    };
    
    // Get the maximum frequency requirement for all words in words2
    const maxFreq = new Array(26).fill(0);
    for (let word of words2) {
        const freq = getCharFrequency(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }
    
    const result = [];
    for (let word of words1) {
        const freq = getCharFrequency(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) result.push(word);
    }
    
    return result;
};

console.log("==========================================")

// 1400. Construct K Palindrome Strings
// Medium
// Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

// Example 1:
// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

// Example 2:
// Input: s = "leetcode", k = 3
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.

// Example 3:
// Input: s = "true", k = 4
// Output: true
// Explanation: The only possible solution is to put each character in a separate string.

// @param {string} s
// @param {number} k
// @return {boolean}

var canConstruct = function(s, k) {
    // If k is greater than the length of the string, it's impossible
    if (k > s.length) return false;

    // Count the frequency of each character
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Count the number of characters with odd frequencies
    let oddCount = 0;
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
    }

    // Check if we can create k palindromes
    return oddCount <= k;
};

console.log("==========================================")

// 2116. Check if a Parentheses String Can Be Valid
// Medium
// A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:
// It is ().
// It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
// It can be written as (A), where A is a valid parentheses string.
// You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0's and '1's. 
// For each index i of locked,

// If locked[i] is '1', you cannot change s[i].
// But if locked[i] is '0', you can change s[i] to either '(' or ')'.
// Return true if you can make s a valid parentheses string. Otherwise, return false.

// Example 1:
// Input: s = "))()))", locked = "010100"
// Output: true
// Explanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3].
// We change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid.

// Example 2:
// Input: s = "()()", locked = "0000"
// Output: true
// Explanation: We do not need to make any changes because s is already valid.

// Example 3:
// Input: s = ")", locked = "0"
// Output: false
// Explanation: locked permits us to change s[0]. 
// Changing s[0] to either '(' or ')' will not make s valid.

// @param {string} s
// @param {string} locked
// @return {boolean}

var canBeValid = function(s, locked) {
    if (s.length % 2 !== 0) return false; // Length must be even

    // First pass: Left to Right
    let open = 0, flexible = 0;
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '1') {
            if (s[i] === '(') open++;
            else open--;
        } else {
            flexible++;
        }
        if (open + flexible < 0) return false; // Too many close parentheses
    }

    // Second pass: Right to Left
    let close = 0;
    flexible = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === '1') {
            if (s[i] === ')') close++;
            else close--;
        } else {
            flexible++;
        }
        if (close + flexible < 0) return false; // Too many open parentheses
    }

    return true;
};
console.log("==========================================")

// 3223. Minimum Length of String After Operations
// Medium
// You are given a string s.
// You can perform the following process on s any number of times:
// Choose an index i in the string such that there is at least one character to the left of index i that is equal to s[i], 
// and at least one character to the right that is also equal to s[i].
// Delete the closest character to the left of index i that is equal to s[i].
// Delete the closest character to the right of index i that is equal to s[i].
// Return the minimum length of the final string s that you can achieve.

// Example 1:
// Input: s = "abaacbcbb"
// Output: 5
// Explanation:
// We do the following operations:
// Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = "bacbcbb".
// Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = "acbcb".

// Example 2:
// Input: s = "aa"
// Output: 2
// Explanation:
// We cannot perform any operations, so we return the length of the original string.

// @param {string} s
// @return {number}

function minimumLength(s) {
    const cnt = Array(26).fill(0); // Create an array of size 26 for 'a' to 'z'

    // Count occurrences of each character
    for (const c of s) {
        cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let ans = 0;
    for (const x of cnt) {
        if (x > 0) {
            ans += (x & 1) === 1 ? 1 : 2; // Add 1 if odd, 2 if even
        }
    }

    return ans;
}

console.log("==========================================")

// 2657. Find the Prefix Common Array of Two Arrays
// Med
// You are given two 0-indexed integer permutations A and B of length n.
// A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.
// Return the prefix common array of A and B.
// A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

// Example 1:
// Input: A = [1,3,2,4], B = [3,1,2,4]
// Output: [0,2,3,4]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
// At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.

// Example 2:
// Input: A = [2,3,1], B = [3,1,2]
// Output: [0,1,3]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: only 3 is common in A and B, so C[1] = 1.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.

// @param {number[]} A
// @param {number[]} B
// @return {number[]}

var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const seen = new Set();
    const result = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        // Add the current elements of A and B to the set and check if they've been seen before
        if (seen.has(A[i])) {
            count++;
        } else {
            seen.add(A[i]);
        }
        if (seen.has(B[i])) {
            count++;
        } else {
            seen.add(B[i]);
        }
        // Update the result for the current index
        result.push(count);
    }

    return result;
};

console.log("==========================================")

// 2429. Minimize XOR
// Medium
// Given two positive integers num1 and num2, find the positive integer x such that:
// x has the same number of set bits as num2, and
// The value x XOR num1 is minimal.
// Note that XOR is the bitwise XOR operation.
// Return the integer x. The test cases are generated such that x is uniquely determined.
// The number of set bits of an integer is the number of 1's in its binary representation.

// Example 1:
// Input: num1 = 3, num2 = 5
// Output: 3
// Explanation:
// The binary representations of num1 and num2 are 0011 and 0101, respectively.
// The integer 3 has the same number of set bits as num2, and the value 3 XOR 3 = 0 is minimal.

// Example 2:
// Input: num1 = 1, num2 = 12
// Output: 3
// Explanation:
// The binary representations of num1 and num2 are 0001 and 1100, respectively.
// The integer 3 has the same number of set bits as num2, and the value 3 XOR 1 = 2 is minimal.

// @param {number} num1
// @param {number} num2
// @return {number}

var minimizeXor = function(num1, num2) {
    const countSetBits = (n) => n.toString(2).split('0').join('').length;
    const num2SetBits = countSetBits(num2);

    let x = 0;
    let remainingSetBits = num2SetBits;

    // Fill bits in x using bits from num1
    for (let i = 31; i >= 0 && remainingSetBits > 0; i--) {
        if ((num1 & (1 << i)) !== 0) {
            x |= (1 << i);
            remainingSetBits--;
        }
    }

    // Fill remaining bits in x starting from LSB
    for (let i = 0; i <= 31 && remainingSetBits > 0; i++) {
        if ((x & (1 << i)) === 0) {
            x |= (1 << i);
            remainingSetBits--;
        }
    }

    return x;
};

console.log("==========================================")

// 2425. Bitwise XOR of All Pairings
// Medium
// You are given two 0-indexed arrays, nums1 and nums2, consisting of non-negative integers. 
// There exists another array, nums3, which contains the bitwise XOR of all pairings of integers between nums1 and nums2 
// (every integer in nums1 is paired with every integer in nums2 exactly once).
// Return the bitwise XOR of all integers in nums3.

// Example 1:
// Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
// Output: 13
// Explanation:
// A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
// The bitwise XOR of all these numbers is 13, so we return 13.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 0
// Explanation:
// All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
// and nums1[1] ^ nums2[1].
// Thus, one possible nums3 array is [2,5,1,6].
// 2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number}

var xorAllNums = function(nums1, nums2) {
    let xor1 = 0, xor2 = 0;
    
    // XOR of all elements in nums1
    for (let num of nums1) {
        xor1 ^= num;
    }
    
    // XOR of all elements in nums2
    for (let num of nums2) {
        xor2 ^= num;
    }
    
    let result = 0;
    
    // If nums2.length is odd, all elements in nums1 contribute
    if (nums2.length % 2 === 1) {
        result ^= xor1;
    }
    
    // If nums1.length is odd, all elements in nums2 contribute
    if (nums1.length % 2 === 1) {
        result ^= xor2;
    }
    
    return result;
};

console.log("==========================================")

// 2683. Neighboring Bitwise XOR
// Medium
// A 0-indexed array derived with length n is derived by computing the bitwise XOR (⊕) of adjacent values in a binary array original of length n.
// Specifically, for each index i in the range [0, n - 1]:
// If i = n - 1, then derived[i] = original[i] ⊕ original[0].
// Otherwise, derived[i] = original[i] ⊕ original[i + 1].
// Given an array derived, your task is to determine whether there exists a valid binary array original that could have formed derived.
// Return true if such an array exists or false otherwise.
// A binary array is an array containing only 0's and 1's

// Example 1:
// Input: derived = [1,1,0]
// Output: true
// Explanation: A valid original array that gives derived is [0,1,0].
// derived[0] = original[0] ⊕ original[1] = 0 ⊕ 1 = 1 
// derived[1] = original[1] ⊕ original[2] = 1 ⊕ 0 = 1
// derived[2] = original[2] ⊕ original[0] = 0 ⊕ 0 = 0

// Example 2:
// Input: derived = [1,1]
// Output: true
// Explanation: A valid original array that gives derived is [0,1].
// derived[0] = original[0] ⊕ original[1] = 1
// derived[1] = original[1] ⊕ original[0] = 1

// Example 3:
// Input: derived = [1,0]
// Output: false
// Explanation: There is no valid original array that gives derived.

// @param {number[]} derived
// @return {boolean}

var doesValidArrayExist = function(derived) {
    const n = derived.length;

    // Helper to check validity given the starting point
    const isValid = (start) => {
        let original = Array(n);
        original[0] = start;
        
        // Reconstruct the original array
        for (let i = 1; i < n; i++) {
            original[i] = original[i - 1] ^ derived[i - 1];
        }

        // Check cyclic condition
        return (original[0] === (original[n - 1] ^ derived[n - 1]));
    };

    // Try starting with 0 and 1
    return isValid(0) || isValid(1);
};

console.log("==========================================")

// 1368. Minimum Cost to Make at Least One Valid Path in a Grid
// Hard
// Given an m x n grid. Each cell of the grid has a sign pointing to the next cell you should visit if you are currently in this cell. The sign of grid[i][j] can be:
// 1 which means go to the cell to the right. (i.e go from grid[i][j] to grid[i][j + 1])
// 2 which means go to the cell to the left. (i.e go from grid[i][j] to grid[i][j - 1])
// 3 which means go to the lower cell. (i.e go from grid[i][j] to grid[i + 1][j])
// 4 which means go to the upper cell. (i.e go from grid[i][j] to grid[i - 1][j])
// Notice that there could be some signs on the cells of the grid that point outside the grid.
// You will initially start at the upper left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) 
// and ends at the bottom-right cell (m - 1, n - 1) following the signs on the grid. The valid path does not have to be the shortest.
// You can modify the sign on a cell with cost = 1. You can modify the sign on a cell one time only.
// Return the minimum cost to make the grid have at least one valid path.

// Example 1:
// Input: grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
// Output: 3
// Explanation: You will start at point (0, 0).
// The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3)
// change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) 
// change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) 
// change the arrow to down with cost = 1 --> (3, 3)
// The total cost = 3.

// Example 2:
// Input: grid = [[1,1,3],[3,2,2],[1,1,4]]
// Output: 0
// Explanation: You can follow the path from (0, 0) to (2, 2).

// Example 3:
// Input: grid = [[1,2],[4,3]]
// Output: 1

// @param {number[][]} grid
// @return {number}

var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down
        [-1, 0]  // up
    ];

    const isValid = (x, y) => x >= 0 && x < m && y >= 0 && y < n;

    const deque = [];
    deque.push([0, 0, 0]); // [cost, x, y]
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    while (deque.length > 0) {
        const [cost, x, y] = deque.shift();

        if (visited[x][y]) continue;
        visited[x][y] = true;

        // If we reach the bottom-right corner, return the cost
        if (x === m - 1 && y === n - 1) {
            return cost;
        }

        for (let d = 0; d < 4; d++) {
            const nx = x + directions[d][0];
            const ny = y + directions[d][1];

            if (isValid(nx, ny) && !visited[nx][ny]) {
                // Check if the current arrow matches the direction
                if (grid[x][y] === d + 1) {
                    deque.unshift([cost, nx, ny]); // Add to the front (cost = 0)
                } else {
                    deque.push([cost + 1, nx, ny]); // Add to the back (cost = 1)
                }
            }
        }
    }

    return -1; // Should never happen for a valid grid
};

console.log("==========================================")

// 407. Trapping Rain Water II
// Hard
// Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, 
// return the volume of water it can trap after raining.

// Example 1:
// Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
// Output: 4
// Explanation: After the rain, water is trapped between the blocks.
// We have two small ponds 1 and 3 units trapped.
// The total volume of water trapped is 4.

// Example 2:
// Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
// Output: 10

// @param {number[][]} heightMap
// @return {number}

var trapRainWater = function(heightMap) {
    if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) return 0;

    const rows = heightMap.length;
    const cols = heightMap[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const heap = new MinPriorityQueue({ priority: (cell) => cell[2] }); // [row, col, height]

    // Push all boundary cells into the heap
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
                heap.enqueue([r, c, heightMap[r][c]]);
                visited[r][c] = true;
            }
        }
    }

    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0], // right, left, down, up
    ];
    let waterTrapped = 0;

    // Process the heap
    while (!heap.isEmpty()) {
        const [row, col, height] = heap.dequeue().element;

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;
                // Calculate trapped water
                waterTrapped += Math.max(0, height - heightMap[newRow][newCol]);
                // Push the new cell into the heap with updated height
                heap.enqueue([
                    newRow,
                    newCol,
                    Math.max(height, heightMap[newRow][newCol]),
                ]);
            }
        }
    }

    return waterTrapped;
};

console.log("==========================================")

// 2661. First Completely Painted Row or Column
// Medium
// You are given a 0-indexed integer array arr, and an m x n integer matrix mat. arr and mat both contain all the integers in the range [1, m * n].
// Go through each index i in arr starting from index 0 and paint the cell in mat containing the integer arr[i].
// Return the smallest index i at which either a row or a column will be completely painted in mat.

// Example 1:
// image explanation for example 1
// Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]
// Output: 2
// Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2].

// Example 2:
// image explanation for example 2
// Input: arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]
// Output: 3
// Explanation: The second column becomes fully painted at arr[3].

// @param {number[]} arr
// @param {number[][]} mat
// @return {number}

var firstCompleteIndex = function(arr, mat) {
    const m = mat.length, n = mat[0].length;
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    
    // Map each number in mat to its (row, col) position
    const positionMap = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            positionMap.set(mat[i][j], [i, j]);
        }
    }
    
    // Iterate through arr and paint the cells
    for (let i = 0; i < arr.length; i++) {
        const [row, col] = positionMap.get(arr[i]);
        
        // Increment counters for the respective row and column
        rows[row]++;
        cols[col]++;
        
        // Check if any row or column is fully painted
        if (rows[row] === n || cols[col] === m) {
            return i;
        }
    }
    
    return -1; // This case won't happen as per the problem constraints
};

console.log("==========================================")

// 2017. Grid Game
// Medium
// You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. 
// Two robots are playing a game on this matrix.
// Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)).
// At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. 
// For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), 
// collecting the points on its path. Note that their paths may intersect with one another.
// The first robot wants to minimize the number of points collected by the second robot. 
// In contrast, the second robot wants to maximize the number of points it collects. 
// If both robots play optimally, return the number of points collected by the second robot.

// Example 1:
// Input: grid = [[2,5,4],[1,5,1]]
// Output: 4
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
// The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 0 + 4 + 0 = 4 points.

// Example 2:
// Input: grid = [[3,3,1],[8,5,2]]
// Output: 4
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
// The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 3 + 1 + 0 = 4 points.

// Example 3:
// Input: grid = [[1,3,1,15],[1,3,3,1]]
// Output: 7
// Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
// The cells visited by the first robot are set to 0.
// The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.

// @param {number[][]} grid
// @return {number}

var gridGame = function(grid) {
    let n = grid[0].length;

    // Compute prefix sums for the top and bottom rows
    let prefixTop = new Array(n).fill(0);
    let prefixBottom = new Array(n).fill(0);

    prefixTop[0] = grid[0][0];
    prefixBottom[0] = grid[1][0];

    for (let i = 1; i < n; i++) {
        prefixTop[i] = prefixTop[i - 1] + grid[0][i];
        prefixBottom[i] = prefixBottom[i - 1] + grid[1][i];
    }

    let result = Infinity;

    // Iterate through each column to determine the split point
    for (let i = 0; i < n; i++) {
        // Calculate remaining points for the second robot if the first robot turns down at column i
        let topRemaining = prefixTop[n - 1] - prefixTop[i];
        let bottomRemaining = i > 0 ? prefixBottom[i - 1] : 0;

        // Maximize the second robot's score (its path's maximum points)
        let secondRobotScore = Math.max(topRemaining, bottomRemaining);

        // Minimize the second robot's maximum score
        result = Math.min(result, secondRobotScore);
    }

    return result;
};

console.log("==========================================")

// 1765. Map of Highest Peak
// Medium
// You are given an integer matrix isWater of size m x n that represents a map of land and water cells.
// If isWater[i][j] == 0, cell (i, j) is a land cell.
// If isWater[i][j] == 1, cell (i, j) is a water cell.
// You must assign each cell a height in a way that follows these rules:

// The height of each cell must be non-negative.
// If the cell is a water cell, its height must be 0.
// Any two adjacent cells must have an absolute height difference of at most 1. 
// A cell is adjacent to another cell if the former is directly north, east, south, or west of the latter (i.e., their sides are touching).
// Find an assignment of heights such that the maximum height in the matrix is maximized.
// Return an integer matrix height of size m x n where height[i][j] is cell (i, j)'s height. If there are multiple solutions, return any of them.

// Example 1:
// Input: isWater = [[0,1],[0,0]]
// Output: [[1,0],[2,1]]
// Explanation: The image shows the assigned heights of each cell.
// The blue cell is the water cell, and the green cells are the land cells.

// Example 2:
// Input: isWater = [[0,0,1],[1,0,0],[0,0,0]]
// Output: [[1,1,0],[0,1,1],[1,2,2]]
// Explanation: A height of 2 is the maximum possible height of any assignment.
// Any height assignment that has a maximum height of 2 while still meeting the rules will also be accepted.
 
// @param {number[][]} isWater
// @return {number[][]}

var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // Initialize the queue with all water cells and set height to 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]); // Enqueue water cells
            }
        }
    }

    // Perform BFS
    let front = 0; // Pointer for the current element in the queue
    while (front < queue.length) {
        const [x, y] = queue[front++];
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            // If the neighbor is valid and unvisited
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1;
                queue.push([nx, ny]); // Enqueue the neighbor
            }
        }
    }

    return height;
};

console.log("==========================================")

// 1267. Count Servers that Communicate
// Medium
// You are given a map of a server center, represented as a m * n integer matrix grid, 
// where 1 means that on that cell there is a server and 0 means that it is no server. 
// Two servers are said to communicate if they are on the same row or on the same column.

// Return the number of servers that communicate with any other server.

// Example 1:
// Input: grid = [[1,0],[0,1]]
// Output: 0
// Explanation: No servers can communicate with others.

// Example 2:
// Input: grid = [[1,0],[1,1]]
// Output: 3
// Explanation: All three servers can communicate with at least one other server.

// Example 3:
// Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
// Output: 4
// Explanation: The two servers in the first row can communicate with each other. 
// The two servers in the third column can communicate with each other. 
// The server at right bottom corner can't communicate with any other server.

// @param {number[][]} grid
// @return {number}

var countServers = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    // Arrays to count the number of servers in each row and column
    let rowCount = new Array(rows).fill(0);
    let colCount = new Array(cols).fill(0);

    // Count servers in each row and column
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    // Count servers that can communicate
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                count++;
            }
        }
    }

    return count;
};

console.log("==========================================")

// 802. Find Eventual Safe States
// Medium
// There is a directed graph of n nodes with each node labeled from 0 to n - 1. 
// The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, 
// meaning there is an edge from node i to each node in graph[i].

// A node is a terminal node if there are no outgoing edges. 
// A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

// Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

// Example 1:
// Illustration of graph
// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]
// Explanation: The given graph is shown above.
// Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
// Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.

// Example 2:
// Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// Output: [4]
// Explanation:
// Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.

// @param {number[][]} graph
// @return {number[]}

var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const reversedGraph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);
    const safeNodes = [];
    
    // Build the reversed graph and calculate in-degrees
    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reversedGraph[neighbor].push(i);
            inDegree[i]++;
        }
    }
    
    // Collect all terminal nodes (in-degree 0 nodes in the reversed graph)
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Topological sort
    while (queue.length > 0) {
        const node = queue.shift();
        safeNodes.push(node);
        for (const neighbor of reversedGraph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // Sort the safe nodes in ascending order
    return safeNodes.sort((a, b) => a - b);
};

console.log("==========================================")

// 2948. Make Lexicographically Smallest Array by Swapping Elements
// minimizedMaximum
// You are given a 0-indexed array of positive integers nums and a positive integer limit.
// In one operation, you can choose any two indices i and j and swap nums[i] and nums[j] if |nums[i] - nums[j]| <= limit.
// Return the lexicographically smallest array that can be obtained by performing the operation any number of times.
// An array a is lexicographically smaller than an array b if in the first position where a and b differ, 
// array a has an element that is less than the corresponding element in b. 
// For example, the array [2,10,3] is lexicographically smaller than the array [10,2,3] because they differ at index 0 and 2 < 10.

// Example 1:
// Input: nums = [1,5,3,9,8], limit = 2
// Output: [1,3,5,8,9]
// Explanation: Apply the operation 2 times:
// - Swap nums[1] with nums[2]. The array becomes [1,3,5,9,8]
// - Swap nums[3] with nums[4]. The array becomes [1,3,5,8,9]
// We cannot obtain a lexicographically smaller array by applying any more operations.
// Note that it may be possible to get the same result by doing different operations.

// Example 2:
// Input: nums = [1,7,6,18,2,1], limit = 3
// Output: [1,6,7,18,1,2]
// Explanation: Apply the operation 3 times:
// - Swap nums[1] with nums[2]. The array becomes [1,6,7,18,2,1]
// - Swap nums[0] with nums[4]. The array becomes [2,6,7,18,1,1]
// - Swap nums[0] with nums[5]. The array becomes [1,6,7,18,1,2]
// We cannot obtain a lexicographically smaller array by applying any more operations.

// Example 3:
// Input: nums = [1,7,28,19,10], limit = 3
// Output: [1,7,28,19,10]
// Explanation: [1,7,28,19,10] is the lexicographically smallest array we can obtain because we cannot apply the operation on any two indices.

// @param {number[]} nums
// @param {number} limit
// @return {number[]}

function lexicographicallySmallestArray(nums, limit) {
    // Get the length of the `nums` array
    const length = nums.length;
    // Create an array of indices for the `nums` array
    const indices = nums.map((_, index) => index);
    // Sort the indices by comparing the values in `nums` they refer to
    indices.sort((i, j) => nums[i] - nums[j]);
    // Initialize the answer array with zeros
    const answer = new Array(length).fill(0);

    // Iterate over the sorted indices
    for (let i = 0; i < length; ) {
        // Find a contiguous group of indices within the `limit`
        let j = i + 1;
        while (j < length && nums[indices[j]] - nums[indices[j - 1]] <= limit) {
            j++;
        }
        // Sort the slice of `indices` by their values (not by the values they refer to in `nums`)
        const sortedIndicesSlice = indices.slice(i, j).sort((a, b) => a - b);
        // Assign the values from `nums` to the `answer` array based on the sorted slice of indices
        for (let k = i; k < j; k++) {
            answer[sortedIndicesSlice[k - i]] = nums[indices[k]];
        }
        // Move to the next group of indices
        i = j;
    }
    // Return the lexicographically smallest array
    return answer;
}

console.log("==========================================")

// 2127. Maximum Employees to Be Invited to a Meeting
// Hard
// A company is organizing a meeting and has a list of n employees, waiting to be invited. They have arranged for a large circular table, 
// capable of seating any number of employees.
// The employees are numbered from 0 to n - 1. 
// Each employee has a favorite person and they will attend the meeting only if they can sit next to their favorite person at the table. 
// The favorite person of an employee is not themself.
// Given a 0-indexed integer array favorite, where favorite[i] denotes the favorite person of the ith employee
// return the maximum number of employees that can be invited to the meeting.

// Example 1:
// Input: favorite = [2,2,1,2]
// Output: 3
// Explanation:
// The above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.
// All employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.
// Note that the company can also invite employees 1, 2, and 3, and give them their desired seats.
// The maximum number of employees that can be invited to the meeting is 3. 

// Example 2:
// Input: favorite = [1,2,0]
// Output: 3
// Explanation: 
// Each employee is the favorite person of at least one other employee, and the only way the company can invite them is if they invite every employee.
// The seating arrangement will be the same as that in the figure given in example 1:
// - Employee 0 will sit between employees 2 and 1.
// - Employee 1 will sit between employees 0 and 2.
// - Employee 2 will sit between employees 1 and 0.
// The maximum number of employees that can be invited to the meeting is 3.

// Example 3:
// Input: favorite = [3,0,1,4,1]
// Output: 4
// Explanation:
// The above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.
// Employee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.
// So the company leaves them out of the meeting.
// The maximum number of employees that can be invited to the meeting is 4.

// @param {number[]} favorite
// @return {number}

var maximumInvitations = function(favorite) {
    const n = favorite.length;
    const visited = Array(n).fill(false);
    const stackIndex = Array(n).fill(-1);
    let maxCycle = 0;
    let chainSum = 0;

    // Detect cycles and calculate their lengths
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        let current = i;
        let index = 0;
        const path = [];
        while (!visited[current]) {
            visited[current] = true;
            stackIndex[current] = index++;
            path.push(current);
            current = favorite[current];
        }

        // Check if a cycle is formed
        if (stackIndex[current] !== -1) {
            const cycleLength = index - stackIndex[current];
            maxCycle = Math.max(maxCycle, cycleLength);
        }

        // Mark all nodes in the current path as visited
        for (let node of path) stackIndex[node] = -1;
    }

    // Calculate chains ending at mutual favorite pairs
    const indegree = Array(n).fill(0);
    for (let f of favorite) indegree[f]++;
    
    const chainLengths = Array(n).fill(0);
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const node = queue.shift();
        const fav = favorite[node];
        chainLengths[fav] = Math.max(chainLengths[fav], chainLengths[node] + 1);
        if (--indegree[fav] === 0) queue.push(fav);
    }

    for (let i = 0; i < n; i++) {
        if (favorite[favorite[i]] === i && i < favorite[i]) {
            chainSum += 2 + chainLengths[i] + chainLengths[favorite[i]];
        }
    }

    return Math.max(maxCycle, chainSum);
};

// console.log("==========================================")

// 1462. Course Schedule IV
// Medium
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course ai first if you want to take course bi.

// For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
// Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, 
// then course a is a prerequisite of course c.

// You are also given an array queries where queries[j] = [uj, vj]. 
// For the jth query, you should answer whether course uj is a prerequisite of course vj or not.

// Return a boolean array answer, where answer[j] is the answer to the jth query.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
// Output: [false,true]
// Explanation: The pair [1, 0] indicates that you have to take course 1 before you can take course 0.
// Course 0 is not a prerequisite of course 1, but the opposite is true.

// Example 2:
// Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
// Output: [false,false]
// Explanation: There are no prerequisites, and each course is independent.

// Example 3:
// Input: numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
// Output: [true,true]

// @param {number} numCourses
// @param {number[][]} prerequisites
// @param {number[][]} queries
// @return {boolean[]}

var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    // Step 1: Initialize a matrix to store the transitive closure
    const graph = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    
    // Step 2: Fill the graph with direct prerequisites
    for (const [a, b] of prerequisites) {
        graph[a][b] = true;
    }
    
    // Step 3: Compute transitive closure using Floyd-Warshall algorithm
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (graph[i][k] && graph[k][j]) {
                    graph[i][j] = true;
                }
            }
        }
    }
    
    // Step 4: Answer the queries
    return queries.map(([u, v]) => graph[u][v]);
};

console.log("==========================================")

// 2658. Maximum Number of Fish in a Grid
// Medium
// You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:
// A land cell if grid[r][c] = 0, or
// A water cell containing grid[r][c] fish, if grid[r][c] > 0.
// A fisher can start at any water cell (r, c) and can do the following operations any number of times:
// Catch all the fish at cell (r, c), or
// Move to any adjacent water cell.
// Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.
// An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

// Example 1:
// Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.

// Example 2:
// Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// Output: 1
// Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish. 

// @param {number[][]} grid
// @return {number}

var findMaxFish = function(grid) {
    const m = grid.length; // Number of rows
    const n = grid[0].length; // Number of columns
    let maxFish = 0; // To store the maximum fish caught

    // Helper function to perform DFS
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === 0) {
            return 0; // Out of bounds or land cell
        }
        const fish = grid[r][c]; // Collect fish at this cell
        grid[r][c] = 0; // Mark as visited by setting to 0
        // Explore all adjacent cells
        return fish + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    };

    // Iterate over every cell in the grid
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] > 0) { // If it's a water cell
                maxFish = Math.max(maxFish, dfs(r, c)); // Start DFS and update maxFish
            }
        }
    }

    return maxFish;
};

console.log("==========================================")

// 684. Redundant Connection
// Medium
// In this problem, a tree is an undirected graph that is connected and has no cycles.
// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. 
// The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. 
// The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
// Return an edge that can be removed so that the resulting graph is a tree of n nodes. 
// If there are multiple answers, return the answer that occurs last in the input.

// Example 1:
// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]

// Example 2:
// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]

// @param {number[][]} edges
// @return {number[]}

var findRedundantConnection = function(edges) {
    let parent = new Array(edges.length + 1).fill(0).map((_, index) => index);
    let rank = new Array(edges.length + 1).fill(1);

    function find(node) {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]); // Path compression
        }
        return parent[node];
    }

    function union(node1, node2) {
        let root1 = find(node1);
        let root2 = find(node2);

        if (root1 === root2) return false; // Cycle detected

        if (rank[root1] > rank[root2]) {
            parent[root2] = root1;
        } else if (rank[root1] < rank[root2]) {
            parent[root1] = root2;
        } else {
            parent[root2] = root1;
            rank[root1] += 1;
        }
        return true;
    }

    for (let [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v]; // The edge that creates a cycle
        }
    }

    return [];
};

console.log("==========================================")

// 2493. Divide Nodes Into the Maximum Number of Groups
// Hard
// You are given a positive integer n representing the number of nodes in an undirected graph. The nodes are labeled from 1 to n.
// You are also given a 2D integer array edges, where edges[i] = [ai, bi] indicates that there is a bidirectional edge between nodes ai and bi. 
// Notice that the given graph may be disconnected.
// Divide the nodes of the graph into m groups (1-indexed) such that:
// Each node in the graph belongs to exactly one group.
// For every pair of nodes in the graph that are connected by an edge [ai, bi], if ai belongs to the group with index x, 
// and bi belongs to the group with index y, then |y - x| = 1.
// Return the maximum number of groups (i.e., maximum m) into which you can divide the nodes. 
// Return -1 if it is impossible to group the nodes with the given conditions.

// Example 1:
// Input: n = 6, edges = [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]
// Output: 4
// Explanation: As shown in the image we:
// - Add node 5 to the first group.
// - Add node 1 to the second group.
// - Add nodes 2 and 4 to the third group.
// - Add nodes 3 and 6 to the fourth group.
// We can see that every edge is satisfied.
// It can be shown that that if we create a fifth group and move any node from the third or fourth group to it, at least on of the edges will not be satisfied.

// Example 2:
// Input: n = 3, edges = [[1,2],[2,3],[3,1]]
// Output: -1
// Explanation: If we add node 1 to the first group, node 2 to the second group, and node 3 to the third group to satisfy the first two edges, we can see that the third edge will not be satisfied.
// It can be shown that no grouping is possible.

// @param {number} n
// @param {number[][]} edges
// @return {number}

var magnificentSets = function(n, edges) {
    // Step 1: Build adjacency list
    const graph = new Array(n + 1).fill(0).map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Step 2: Check if the graph is bipartite using BFS
    const color = new Array(n + 1).fill(0); // 0: unvisited, 1: color A, -1: color B

    const isBipartite = (start) => {
        let queue = [start];
        color[start] = 1;
        while (queue.length > 0) {
            let node = queue.shift();
            for (let neighbor of graph[node]) {
                if (color[neighbor] === 0) {
                    color[neighbor] = -color[node]; // Assign opposite color
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return false; // Odd cycle detected, not bipartite
                }
            }
        }
        return true;
    };

    for (let i = 1; i <= n; i++) {
        if (color[i] === 0 && !isBipartite(i)) return -1;
    }

    // Step 3: Find the longest path in each connected component
    const bfsMaxDepth = (start) => {
        let queue = [start];
        let visited = new Set([start]);
        let depth = 0;

        while (queue.length > 0) {
            let nextQueue = [];
            for (let node of queue) {
                for (let neighbor of graph[node]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        nextQueue.push(neighbor);
                    }
                }
            }
            queue = nextQueue;
            if (queue.length > 0) depth++;
        }
        return depth;
    };

    let visitedComponents = new Set();
    let maxGroups = 0;

    for (let i = 1; i <= n; i++) {
        if (!visitedComponents.has(i)) {
            let component = [];
            let queue = [i];
            visitedComponents.add(i);

            // Collect all nodes in the current connected component
            while (queue.length > 0) {
                let node = queue.shift();
                component.push(node);
                for (let neighbor of graph[node]) {
                    if (!visitedComponents.has(neighbor)) {
                        visitedComponents.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }

            // Find the maximum possible depth using BFS from any node
            let maxDepth = 0;
            for (let node of component) {
                maxDepth = Math.max(maxDepth, bfsMaxDepth(node));
            }
            maxGroups += maxDepth + 1;
        }
    }

    return maxGroups;
};

console.log("==========================================")

// 827. Making A Large Island
// Hard
// You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
// Return the size of the largest island in grid after applying this operation.
// An island is a 4-directionally connected group of 1s.

// Example 1:
// Input: grid = [[1,0],[0,1]]
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

// Example 2:
// Input: grid = [[1,1],[1,0]]
// Output: 4
// Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

// Example 3:
// Input: grid = [[1,1],[1,1]]
// Output: 4
// Explanation: Can't change any 0 to 1, only one island with area = 4.

// @param {number[][]} grid
// @return {number}

var largestIsland = function(grid) {
    const n = grid.length;
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let islandId = 2;  // Start from 2 to differentiate from 1s
    let islandSize = new Map();
    islandSize.set(0, 0); // Ensure 0s map to 0 size

    // DFS to find island size and mark with islandId
    function dfs(r, c, id) {
        if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] !== 1) return 0;
        grid[r][c] = id;
        let size = 1;
        for (let [dr, dc] of directions) {
            size += dfs(r + dr, c + dc, id);
        }
        return size;
    }

    // First pass: Identify islands and store sizes
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                let size = dfs(r, c, islandId);
                islandSize.set(islandId, size);
                islandId++;
            }
        }
    }

    let maxIsland = Math.max(...islandSize.values());

    // Second pass: Try flipping a 0 to 1
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                let seenIslands = new Set();
                let newSize = 1; // Include the flipped cell
                
                for (let [dr, dc] of directions) {
                    let nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nc >= 0 && nr < n && nc < n) {
                        let id = grid[nr][nc];
                        if (id > 1 && !seenIslands.has(id)) {
                            seenIslands.add(id);
                            newSize += islandSize.get(id);
                        }
                    }
                }
                maxIsland = Math.max(maxIsland, newSize);
            }
        }
    }
    
    return maxIsland;
};



console.log("==========================================")

// 3151. Special Array I
// Easy
// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.
// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

// Example 1:
// Input: nums = [1]
// Output: true
// Explanation:
// There is only one element. So the answer is true.

// Example 2:
// Input: nums = [2,1,4]
// Output: true
// Explanation:
// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

// Example 3:
// Input: nums = [4,3,1,6]
// Output: false
// Explanation:
// nums[1] and nums[2] are both odd. So the answer is false.

// @param {number[]} nums
// @return {boolean}

var isArraySpecial = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] % 2) === (nums[i - 1] % 2)) {
            return false;
        }
    }
    return true;
};

console.log("==========================================")

// 1752. Check if Array Is Sorted and Rotated
// Easy
// Given an array nums, return true if the array was originally sorted in non-decreasing order, 
// then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

// Example 2:
// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.

// Example 3:
// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
 
// @param {number[]} nums
// @return {boolean}

var check = function(nums) {
    let count = 0;
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    
    return true;
};

console.log("==========================================")

// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
// Easy
// You are given an array of integers nums. Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing

// Example 1:
// Input: nums = [1,4,3,3,2]
// Output: 2
// Explanation:
// The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].
// The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
// Hence, we return 2.

// Example 2:
// Input: nums = [3,3,3,3]
// Output: 1
// Explanation:
// The strictly increasing subarrays of nums are [3], [3], [3], and [3].
// The strictly decreasing subarrays of nums are [3], [3], [3], and [3].
// Hence, we return 1.

// Example 3:
// Input: nums = [3,2,1]
// Output: 3
// Explanation:
// The strictly increasing subarrays of nums are [3], [2], and [1].
// The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].
// Hence, we return 3.

// @param {number[]} nums
// @return {number}

var longestMonotonicSubarray = function(nums) {
    if (nums.length === 0) return 0;
    
    let maxLen = 1;
    let incLen = 1;
    let decLen = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            incLen += 1;
            decLen = 1;
        } else if (nums[i] < nums[i - 1]) {
            decLen += 1;
            incLen = 1;
        } else {
            incLen = 1;
            decLen = 1;
        }
        
        maxLen = Math.max(maxLen, incLen, decLen);
    }
    
    return maxLen;
};


console.log("==========================================")

// 1800. Maximum Ascending Subarray Sum
// Easy
// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.

// Example 1:
// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// Example 2:
// Input: nums = [10,20,30,40,50]
// Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

// Example 3:
// Input: nums = [12,17,15,13,10,11,12]
// Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
 
// @param {number[]} nums
// @return {number}

var maxAscendingSum = function(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Track the sum of the current ascending subarray
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            // If ascending, add to current subarray sum
            currentSum += nums[i];
        } else {
            // If not ascending, reset current subarray sum
            maxSum = Math.max(maxSum, currentSum);
            currentSum = nums[i];
        }
    }
    
    // Compare one last time in case the longest sequence is at the end
    return Math.max(maxSum, currentSum);
};

console.log("==========================================")

// 1790. Check if One String Swap Can Make Strings Equal
// Easy
// You are given two strings s1 and s2 of equal length. 
// A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

// Example 1:
// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".

// Example 2:
// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.

// Example 3:
// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.

// @param {string} s1
// @param {string} s2
// @return {boolean}

var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true; // If both strings are already equal

    let diff = [];
    
    // Find indices where characters differ
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }

    // There should be exactly two differences for a valid swap
    if (diff.length !== 2) return false;

    let [i, j] = diff;
    
    // Check if swapping the differing characters in s2 makes s1 and s2 equal
    return s1[i] === s2[j] && s1[j] === s2[i];
};

console.log("==========================================")

// 1726. Tuple with Same Product
// Medium
// Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) 
// such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

// Example 1:
// Input: nums = [2,3,4,6]
// Output: 8
// Explanation: There are 8 valid tuples:
// (2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
// (3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)

// Example 2:
// Input: nums = [1,2,4,5,10]
// Output: 16
// Explanation: There are 16 valid tuples:
// (1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
// (2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
// (2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
// (4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
 
// @param {number[]} nums
// @return {number}

var tupleSameProduct = function(nums) {
    let productMap = new Map();
    let count = 0;

    // Step 1: Compute all possible products and count their occurrences
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            productMap.set(product, (productMap.get(product) || 0) + 1);
        }
    }

    // Step 2: Compute the number of valid tuples from product occurrences
    for (let freq of productMap.values()) {
        if (freq > 1) {
            count += (freq * (freq - 1) / 2) * 8;
        }
    }

    return count;
};

console.log("==========================================")

// 3160. Find the Number of Distinct Colors Among the Balls
// Medium
// You are given an integer limit and a 2D array queries of size n x 2.
// There are limit + 1 balls with distinct labels in the range [0, limit].
// Initially, all balls are uncolored. For every query in queries that is of the form [x, y], 
// you mark ball x with the color y. After each query, you need to find the number of distinct colors among the balls.
// Return an array result of length n, where result[i] denotes the number of distinct colors after ith query.
// Note that when answering a query, lack of a color will not be considered as a color.

// Example 1:
// Input: limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]
// Output: [1,2,2,3]
// Explanation:
// After query 0, ball 1 has color 4.
// After query 1, ball 1 has color 4, and ball 2 has color 5.
// After query 2, ball 1 has color 3, and ball 2 has color 5.
// After query 3, ball 1 has color 3, ball 2 has color 5, and ball 3 has color 4.

// Example 2:
// Input: limit = 4, queries = [[0,1],[1,2],[2,2],[3,4],[4,5]]
// Output: [1,2,2,3,4]
// Explanation:
// After query 0, ball 0 has color 1.
// After query 1, ball 0 has color 1, and ball 1 has color 2.
// After query 2, ball 0 has color 1, and balls 1 and 2 have color 2.
// After query 3, ball 0 has color 1, balls 1 and 2 have color 2, and ball 3 has color 4.
// After query 4, ball 0 has color 1, balls 1 and 2 have color 2, ball 3 has color 4, and ball 4 has color 5.

// @param {number} limit
// @param {number[][]} queries
// @return {number[]}

var queryResults = function(limit, queries) {
    let ballColors = new Map();  // Maps ball -> color
    let colorFreq = new Map();   // Maps color -> frequency
    let distinctColors = 0;      // Number of distinct colors
    let result = [];

    for (let [ball, color] of queries) {
        let prevColor = ballColors.get(ball); // Get previous color if exists

        if (prevColor !== undefined) {
            // Reduce count of previous color
            colorFreq.set(prevColor, colorFreq.get(prevColor) - 1);
            if (colorFreq.get(prevColor) === 0) {
                colorFreq.delete(prevColor);
                distinctColors--; // Remove from distinct count
            }
        }

        // Assign new color
        ballColors.set(ball, color);
        if (!colorFreq.has(color)) {
            distinctColors++; // New unique color
        }
        colorFreq.set(color, (colorFreq.get(color) || 0) + 1);

        result.push(distinctColors);
    }

    return result;
};

console.log("==========================================")

// 2349. Design a Number Container System
// Medium
// Design a number container system that can do the following:
// Insert or Replace a number at the given index in the system.
// Return the smallest index for the given number in the system.
// Implement the NumberContainers class:
// NumberContainers() Initializes the number container system.
// void change(int index, int number) Fills the container at index with the number. If there is already a number at that index, replace it.
// int find(int number) Returns the smallest index for the given number, or -1 if there is no index that is filled by number in the system.

// Example 1:
// Input
// ["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
// [[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
// Output
// [null, -1, null, null, null, null, 1, null, 2]
// Explanation
// NumberContainers nc = new NumberContainers();
// nc.find(10); // There is no index that is filled with number 10. Therefore, we return -1.
// nc.change(2, 10); // Your container at index 2 will be filled with number 10.
// nc.change(1, 10); // Your container at index 1 will be filled with number 10.
// nc.change(3, 10); // Your container at index 3 will be filled with number 10.
// nc.change(5, 10); // Your container at index 5 will be filled with number 10.
// nc.find(10); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
// nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20. 
// nc.find(10); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.


var NumberContainers = function() {
    
};

// @param {number} index 
// @param {number} number
// @return {void}

NumberContainers.prototype.change = function(index, number) {
    
};

// @param {number} number
// @return {number}

NumberContainers.prototype.find = function(number) {
    
};

// Your NumberContainers object will be instantiated and called as such:
// var obj = new NumberContainers()
// obj.change(index,number)
// var param_2 = obj.find(number)

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    remove(val) {
        let index = this.heap.indexOf(val);
        if (index === -1) return;
        this.heap.splice(index, 1);
        this._heapifyDown(index);
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown(index = 0) {
        let leftChild, rightChild, smallest;
        while (true) {
            leftChild = 2 * index + 1;
            rightChild = 2 * index + 2;
            smallest = index;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
}

class NumberContainers {
    constructor() {
        this.indexMap = new Map(); // Maps index -> number
        this.numberMap = new Map(); // Maps number -> MinHeap of indices
    }

    change(index, number) {
        if (this.indexMap.has(index)) {
            let oldNumber = this.indexMap.get(index);
            if (oldNumber !== number) {
                this.numberMap.get(oldNumber)?.remove(index);
            }
        }

        this.indexMap.set(index, number);

        if (!this.numberMap.has(number)) {
            this.numberMap.set(number, new MinHeap());
        }
        this.numberMap.get(number).push(index);
    }

    find(number) {
        if (!this.numberMap.has(number) || this.numberMap.get(number).size() === 0) {
            return -1;
        }

        // Ensure we return a valid index (some indices might have been removed)
        while (this.numberMap.get(number).size() > 0) {
            let minIndex = this.numberMap.get(number).peek();
            if (this.indexMap.get(minIndex) === number) {
                return minIndex;
            } else {
                this.numberMap.get(number).pop(); // Remove invalid index
            }
        }

        return -1;
    }
}

console.log("==========================================")

// 2364. Count Number of Bad Pairs
// Medium
// You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].
// Return the total number of bad pairs in nums.

// Example 1:
// Input: nums = [4,1,3,3]
// Output: 5
// Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
// The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
// The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
// The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
// The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
// There are a total of 5 bad pairs, so we return 5.

// Example 2:
// Input: nums = [1,2,3,4,5]
// Output: 0
// Explanation: There are no bad pairs.

// @param {number[]} nums
// @return {number}

var countBadPairs = function(nums) {
    let n = nums.length;
    let totalPairs = (n * (n - 1)) / 2;
    let goodPairs = 0;
    let countMap = new Map();

    for (let i = 0; i < n; i++) {
        let key = nums[i] - i;
        if (countMap.has(key)) {
            goodPairs += countMap.get(key);
            countMap.set(key, countMap.get(key) + 1);
        } else {
            countMap.set(key, 1);
        }
    }

    return totalPairs - goodPairs;
};

console.log("==========================================")

// 3174. Clear Digits
// Easy
// You are given a string s.
// Your task is to remove all digits by doing this operation repeatedly:
// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

// Example 1:
// Input: s = "abc"
// Output: "abc"
// Explanation:
// There is no digit in the string.

// Example 2:
// Input: s = "cb34"
// Output: ""
// Explanation:
// First, we apply the operation on s[2], and s becomes "c4".
// Then we apply the operation on s[1], and s becomes "".

// @param {string} s
// @return {string}

var clearDigits = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (/\d/.test(char)) {
            // Remove the closest non-digit character to its left (if exists)
            while (stack.length && /\d/.test(stack[stack.length - 1])) {
                stack.pop();
            }
            if (stack.length) {
                stack.pop();
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};


console.log("==========================================")

// 1910. Remove All Occurrences of a Substring
// Medium
// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.
// A substring is a contiguous sequence of characters in a string.

// Example 1:
// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".

// Example 2:
// Input: s = "axxxxyyyyb", part = "xy"
// Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".

// @param {string} s
// @param {string} part
// @return {string}

var removeOccurrences = function(s, part) {
    while (s.includes(part)) {
        s = s.replace(part, '');
    }
    return s;
};

console.log("==========================================")

// 2342. Max Sum of a Pair With Equal Sum of Digits
// Medium
// You are given a 0-indexed array nums consisting of positive integers. 
// You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].
// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

// Example 1:
// Input: nums = [18,43,36,13,7]
// Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
// - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.

// Example 2:
// Input: nums = [10,12,19,14]
// Output: -1
// Explanation: There are no two numbers that satisfy the conditions, so we return -1.

// @param {number[]} nums
// @return {number}

var maximumSum = function(nums) {
    let map = new Map(); // To store max values for each digit sum
    let maxSum = -1;
    
    function getDigitSum(num) {
        return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    
    for (let num of nums) {
        let digitSum = getDigitSum(num);
        if (map.has(digitSum)) {
            maxSum = Math.max(maxSum, num + map.get(digitSum));
            map.set(digitSum, Math.max(map.get(digitSum), num));
        } else {
            map.set(digitSum, num);
        }
    }
    
    return maxSum;
};

console.log("==========================================")

// 3066. Minimum Operations to Exceed Threshold Value II
// Medium
// You are given a 0-indexed integer array nums, and an integer k.
// In one operation, you will:
// Take the two smallest integers x and y in nums.
// Remove x and y from nums.
// Add min(x, y) * 2 + max(x, y) anywhere in the array.
// Note that you can only apply the described operation if nums contains at least two elements.
// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

// Example 1:
// Input: nums = [2,11,10,1,3], k = 10
// Output: 2
// Explanation: In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
// In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
// At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
// It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

// Example 2:
// Input: nums = [1,1,2,4,9], k = 20
// Output: 4
// Explanation: After one operation, nums becomes equal to [2, 4, 9, 3].
// After two operations, nums becomes equal to [7, 4, 9].
// After three operations, nums becomes equal to [15, 9].
// After four operations, nums becomes equal to [33].
// At this stage, all the elements of nums are greater than 20 so we can stop.
// It can be shown that 4 is the minimum number of operations needed so that all elements of the array are greater than or equal to 20.

// @param {number[]} nums
// @param {number} k
// @return {number}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Swap helper function
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert element into heap
    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    // Remove and return the smallest element
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Get the smallest element without removing it
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Maintain heap property after insertion
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            this.swap(parent, index);
            index = parent;
        }
    }

    // Maintain heap property after deletion
    heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smallest = right;
            }
            if (this.heap[index] <= this.heap[smallest]) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }

    // Get heap size
    size() {
        return this.heap.length;
    }
}

var minOperations = function(nums, k) {
    let minHeap = new MinHeap();
    
    // Add all elements to the MinHeap
    for (let num of nums) {
        minHeap.push(num);
    }

    let operations = 0;

    while (minHeap.size() > 1 && minHeap.peek() < k) {
        let x = minHeap.pop();
        let y = minHeap.pop();
        let newElement = x * 2 + y; // Equivalent to min(x, y) * 2 + max(x, y)
        minHeap.push(newElement);
        operations++;
    }

    return operations;
};


console.log("==========================================")

// 1352. Product of the Last K Numbers
// Medium
// Design an algorithm that accepts a stream of integers and retrieves the product of the last k integers of the stream.
// Implement the ProductOfNumbers class:
// ProductOfNumbers() Initializes the object with an empty stream.
// void add(int num) Appends the integer num to the stream.
// int getProduct(int k) Returns the product of the last k numbers in the current list. You can assume that always the current list has at least k numbers.
// The test cases are generated so that, at any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.

// Example:
// Input
// ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
// [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
// Output
// [null,null,null,null,null,null,20,40,0,null,32]
// Explanation
// ProductOfNumbers productOfNumbers = new ProductOfNumbers();
// productOfNumbers.add(3);        // [3]
// productOfNumbers.add(0);        // [3,0]
// productOfNumbers.add(2);        // [3,0,2]
// productOfNumbers.add(5);        // [3,0,2,5]
// productOfNumbers.add(4);        // [3,0,2,5,4]
// productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
// productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
// productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
// productOfNumbers.add(8);        // [3,0,2,5,4,8]
// productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32 
 
var ProductOfNumbers = function() {
    this.prefixProducts = [1]; // Initialize prefix product with 1
};

// @param {number} num
// @return {void}

ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        // Reset the prefixProducts array when encountering 0
        this.prefixProducts = [1];
    } else {
        // Append the product of the last element multiplied by num
        this.prefixProducts.push(this.prefixProducts[this.prefixProducts.length - 1] * num);
    }
};

// @param {number} k
// @return {number}

ProductOfNumbers.prototype.getProduct = function(k) {
    if (k >= this.prefixProducts.length) {
        return 0; // If k reaches beyond the last zero reset, return 0
    }
    return this.prefixProducts[this.prefixProducts.length - 1] / this.prefixProducts[this.prefixProducts.length - 1 - k];
};

// Your ProductOfNumbers object will be instantiated and called as such:
// var obj = new ProductOfNumbers()
// obj.add(num)
// var param_2 = obj.getProduct(k)



console.log("==========================================")

// 2698. Find the Punishment Number of an Integer
// Medium
// Given a positive integer n, return the punishment number of n.
// The punishment number of n is defined as the sum of the squares of all integers i such that:
// 1 <= i <= n
// The decimal representation of i * i can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals i.

// Example 1:
// Input: n = 10
// Output: 182
// Explanation: There are exactly 3 integers i in the range [1, 10] that satisfy the conditions in the statement:
// - 1 since 1 * 1 = 1
// - 9 since 9 * 9 = 81 and 81 can be partitioned into 8 and 1 with a sum equal to 8 + 1 == 9.
// - 10 since 10 * 10 = 100 and 100 can be partitioned into 10 and 0 with a sum equal to 10 + 0 == 10.
// Hence, the punishment number of 10 is 1 + 81 + 100 = 182

// Example 2:
// Input: n = 37
// Output: 1478
// Explanation: There are exactly 4 integers i in the range [1, 37] that satisfy the conditions in the statement:
// - 1 since 1 * 1 = 1. 
// - 9 since 9 * 9 = 81 and 81 can be partitioned into 8 + 1. 
// - 10 since 10 * 10 = 100 and 100 can be partitioned into 10 + 0. 
// - 36 since 36 * 36 = 1296 and 1296 can be partitioned into 1 + 29 + 6.
// Hence, the punishment number of 37 is 1 + 81 + 100 + 1296 = 1478

// @param {number} n
// @return {number}

var punishmentNumber = function(n) {
    function canPartition(num, square, index, currentSum) {
        if (index === square.length) {
            return currentSum === num;
        }
        
        let sum = 0;
        for (let i = index; i < square.length; i++) {
            sum = sum * 10 + parseInt(square[i]);
            if (canPartition(num, square, i + 1, currentSum + sum)) {
                return true;
            }
        }
        return false;
    }
    
    let total = 0;
    for (let i = 1; i <= n; i++) {
        let squareStr = (i * i).toString();
        if (canPartition(i, squareStr, 0, 0)) {
            total += i * i;
        }
    }
    return total;
};

console.log("==========================================")

// 1718. Construct the Lexicographically Largest Valid Sequence
// Medium
// Given an integer n, find a sequence that satisfies all of the following:
// The integer 1 occurs once in the sequence.
// Each integer between 2 and n occurs twice in the sequence.
// For every integer i between 2 and n, the distance between the two occurrences of i is exactly i.
// The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference of their indices, |j - i|.
// Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution.
// A sequence a is lexicographically larger than a sequence b (of the same length) if in the first position where a and b differ, 
// sequence a has a number greater than the corresponding number in b. For example, 
// [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position they differ is at the third number, and 9 is greater than 5.

// Example 1:
// Input: n = 3
// Output: [3,1,2,3,2]
// Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.

// Example 2:
// Input: n = 5
// Output: [5,3,1,4,3,5,2,4,2]

// @param {number} n
// @return {number[]}

var constructDistancedSequence = function(n) {
    let size = 2 * n - 1;
    let result = new Array(size).fill(0);
    let used = new Array(n + 1).fill(false);
    
    const backtrack = (index) => {
        if (index === size) return true;
        if (result[index] !== 0) return backtrack(index + 1);
        
        for (let num = n; num >= 1; num--) {
            if (used[num]) continue;
            
            if (num === 1) {
                result[index] = 1;
                used[1] = true;
                if (backtrack(index + 1)) return true;
                result[index] = 0;
                used[1] = false;
            } else if (index + num < size && result[index + num] === 0) {
                result[index] = num;
                result[index + num] = num;
                used[num] = true;
                
                if (backtrack(index + 1)) return true;
                
                result[index] = 0;
                result[index + num] = 0;
                used[num] = false;
            }
        }
        
        return false;
    };
    
    backtrack(0);
    return result;
};

console.log("==========================================")

// 1079. Letter Tile Possibilities
// Medium
// You have n  tiles, where each tile has one letter tiles[i] printed on it.
// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

// Example 1:
// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

// Example 2:
// Input: tiles = "AAABBC"
// Output: 188

// Example 3:
// Input: tiles = "V"
// Output: 1

// @param {string} tiles
// @return {number}

var numTilePossibilities = function(tiles) {
    let result = new Set();
    let visited = new Array(tiles.length).fill(false);
    tiles = tiles.split('').sort().join('');
    
    const backtrack = (path) => {
        if (path.length > 0) {
            result.add(path);
        }
        for (let i = 0; i < tiles.length; i++) {
            if (visited[i] || (i > 0 && tiles[i] === tiles[i - 1] && !visited[i - 1])) {
                continue;
            }
            visited[i] = true;
            backtrack(path + tiles[i]);
            visited[i] = false;
        }
    };
    
    backtrack('');
    return result.size;
};


console.log("==========================================")

// 2375. Construct Smallest Number From DI String
// Medium
// You are given a 0-indexed string pattern of length n consisting of the characters 'I' meaning increasing and 'D' meaning decreasing.
// A 0-indexed string num of length n + 1 is created using the following conditions:
// num consists of the digits '1' to '9', where each digit is used at most once.
// If pattern[i] == 'I', then num[i] < num[i + 1].
// If pattern[i] == 'D', then num[i] > num[i + 1].
// Return the lexicographically smallest possible string num that meets the conditions.

// Example 1:
// Input: pattern = "IIIDIDDD"
// Output: "123549876"
// Explanation:
// At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1].
// At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1].
// Some possible values of num are "245639871", "135749862", and "123849765".
// It can be proven that "123549876" is the smallest possible num that meets the conditions.
// Note that "123414321" is not possible because the digit '1' is used more than once.

// Example 2:
// Input: pattern = "DDD"
// Output: "4321"
// Explanation:
// Some possible values of num are "9876", "7321", and "8742".
// It can be proven that "4321" is the smallest possible num that meets the conditions.

// @param {string} pattern
// @return {string}

var smallestNumber = function(pattern) {
    let stack = [];
    let result = "";
    let num = 1;
    
    for (let i = 0; i <= pattern.length; i++) {
        stack.push(num++);
        
        if (i === pattern.length || pattern[i] === 'I') {
            while (stack.length) {
                result += stack.pop();
            }
        }
    }
    
    return result;
};

console.log("==========================================")

// 1415. The k-th Lexicographical String of All Happy Strings of Length n
// Medium
// A happy string is a string that:
// consists only of letters of the set ['a', 'b', 'c'].
// s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
// For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.
// Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.
// Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

// Example 1:
// Input: n = 1, k = 3
// Output: "c"
// Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

// Example 2:
// Input: n = 1, k = 4
// Output: ""
// Explanation: There are only 3 happy strings of length 1.

// Example 3:
// Input: n = 3, k = 9
// Output: "cab"
// Explanation: There are 12 different happy string of length 3 
// ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"

// @param {number} n
// @param {number} k
// @return {string}

var getHappyString = function(n, k) {
    let result = [];
    const chars = ['a', 'b', 'c'];

    function backtrack(current) {
        if (current.length === n) {
            result.push(current);
            return;
        }
        for (let ch of chars) {
            if (current.length === 0 || current[current.length - 1] !== ch) {
                backtrack(current + ch);
            }
        }
    }

    backtrack("");

    return result.length >= k ? result[k - 1] : "";
};


console.log("==========================================")

// 1980. Find Unique Binary String
// Medium
// Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. 
// If there are multiple answers, you may return any of them.

// Example 1:
// Input: nums = ["01","10"]
// Output: "11"
// Explanation: "11" does not appear in nums. "00" would also be correct.

// Example 2:
// Input: nums = ["00","01"]
// Output: "11"
// Explanation: "11" does not appear in nums. "10" would also be correct.

// Example 3:
// Input: nums = ["111","011","001"]
// Output: "101"
// Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 
// @param {string[]} nums
// @return {string}

var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let result = "";

    for (let i = 0; i < n; i++) {
        // Flip the i-th bit of the i-th string (0 -> 1, 1 -> 0)
        result += nums[i][i] === "0" ? "1" : "0";
    }

    return result;
};
console.log("==========================================")

// 1261. Find Elements in a Contaminated Binary Tree
// Medium
// Given a binary tree with the following rules:
// root.val == 0
// For any treeNode:
// If treeNode.val has a value x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
// If treeNode.val has a value x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
// Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.
// Implement the FindElements class:
// FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
// bool find(int target) Returns true if the target value exists in the recovered binary tree.

// Example 1:
// Input
// ["FindElements","find","find"]
// [[[-1,null,-1]],[1],[2]]
// Output
// [null,false,true]
// Explanation
// FindElements findElements = new FindElements([-1,null,-1]); 
// findElements.find(1); // return False 
// findElements.find(2); // return True 

// Example 2:
// Input
// ["FindElements","find","find","find"]
// [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
// Output
// [null,true,true,false]
// Explanation
// FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
// findElements.find(1); // return True
// findElements.find(3); // return True
// findElements.find(5); // return False

// Example 3:
// Input
// ["FindElements","find","find","find","find"]
// [[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
// Output
// [null,true,false,false,true]
// Explanation
// FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
// findElements.find(2); // return True
// findElements.find(3); // return False
// findElements.find(4); // return False
// findElements.find(5); // return True

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root

class FindElements {
    constructor(root) {
        this.values = new Set();
        this.recoverTree(root, 0);
    }
    
    recoverTree(node, value) {
        if (!node) return;
        
        node.val = value;
        this.values.add(value);
        
        this.recoverTree(node.left, 2 * value + 1);
        this.recoverTree(node.right, 2 * value + 2);
    }
    
    find(target) {
        return this.values.has(target);
    }
}


// Your FindElements object will be instantiated and called as such:
// var obj = new FindElements(root)
// var param_1 = obj.find(target)


console.log("==========================================")

// 1028. Recover a Tree From Preorder Traversal
// Hard
// We run a preorder depth-first search (DFS) on the root of a binary tree.
// At each node in this traversal, we output D dashes (where D is the depth of this node), 
// then we output the value of this node.  If the depth of a node is D, the depth of its immediate child is D + 1.  The depth of the root node is 0.
// If a node has only one child, that child is guaranteed to be the left child.
// Given the output traversal of this traversal, recover the tree and return its root.

// Example 1:
// Input: traversal = "1-2--3--4-5--6--7"
// Output: [1,2,5,3,4,6,7]

// Example 2:
// Input: traversal = "1-2--3---4-5--6---7"
// Output: [1,2,5,3,null,6,null,4,null,7]

// Example 3:
// Input: traversal = "1-401--349---90--88"
// Output: [1,401,null,349,88,90]

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {string} traversal
// @return {TreeNode}

var recoverFromPreorder = function(traversal) {
    let i = 0;
    let stack = [];
    
    while (i < traversal.length) {
        let depth = 0;
        while (traversal[i] === '-') {
            depth++;
            i++;
        }
        
        let numStart = i;
        while (i < traversal.length && traversal[i] >= '0' && traversal[i] <= '9') {
            i++;
        }
        
        let val = parseInt(traversal.slice(numStart, i));
        let node = new TreeNode(val);
        
        if (depth === stack.length) {
            if (stack.length > 0) {
                stack[stack.length - 1].left = node;
            }
        } else {
            stack = stack.slice(0, depth);
            stack[stack.length - 1].right = node;
        }
        
        stack.push(node);
    }
    
    return stack[0];
};


console.log("==========================================")

// 889. Construct Binary Tree from Preorder and Postorder Traversal
// Medium
// Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree 
// of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.
// If there exist multiple answers, you can return any of them.

// Example 1:
// Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

// Example 2:
// Input: preorder = [1], postorder = [1]
// Output: [1]

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {number[]} preorder
// @param {number[]} postorder
// @return {TreeNode}

var constructFromPrePost = function(preorder, postorder) {
    if (!preorder.length || !postorder.length) return null;

    let root = new TreeNode(preorder[0]);
    if (preorder.length === 1) return root;

    let leftSubtreeRoot = preorder[1];
    let leftSubtreeSize = postorder.indexOf(leftSubtreeRoot) + 1;

    root.left = constructFromPrePost(preorder.slice(1, leftSubtreeSize + 1), postorder.slice(0, leftSubtreeSize));
    root.right = constructFromPrePost(preorder.slice(leftSubtreeSize + 1), postorder.slice(leftSubtreeSize, -1));

    return root;
};

console.log("==========================================")

// 2467. Most Profitable Path in a Tree
// Medium

// There is an undirected tree with n nodes labeled from 0 to n - 1, rooted at node 0. 
// You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

// At every node i, there is a gate. You are also given an array of even integers amount, where amount[i] represents:

// the price needed to open the gate at node i, if amount[i] is negative, or,
// the cash reward obtained on opening the gate at node i, otherwise.
// The game goes on as follows:

// Initially, Alice is at node 0 and Bob is at node bob.
// At every second, Alice and Bob each move to an adjacent node. Alice moves towards some leaf node, while Bob moves towards node 0.
// For every node along their path, Alice and Bob either spend money to open the gate at that node, or accept the reward. Note that:
// If the gate is already open, no price will be required, nor will there be any cash reward.
// If Alice and Bob reach the node simultaneously, they share the price/reward for opening the gate there. 
// In other words, if the price to open the gate is c, then both Alice and Bob pay c / 2 each. Similarly, 
// if the reward at the gate is c, both of them receive c / 2 each.
// If Alice reaches a leaf node, she stops moving. Similarly, if Bob reaches node 0, he stops moving. 
// Note that these events are independent of each other.
// Return the maximum net income Alice can have if she travels towards the optimal leaf node.

// Example 1:
// Input: edges = [[0,1],[1,2],[1,3],[3,4]], bob = 3, amount = [-2,4,2,-4,6]
// Output: 6
// Explanation: 
// The above diagram represents the given tree. The game goes as follows:
// - Alice is initially on node 0, Bob on node 3. They open the gates of their respective nodes.
//   Alice's net income is now -2.
// - Both Alice and Bob move to node 1. 
//   Since they reach here simultaneously, they open the gate together and share the reward.
//   Alice's net income becomes -2 + (4 / 2) = 0.
// - Alice moves on to node 3. Since Bob already opened its gate, Alice's income remains unchanged.
//   Bob moves on to node 0, and stops moving.
// - Alice moves on to node 4 and opens the gate there. Her net income becomes 0 + 6 = 6.
// Now, neither Alice nor Bob can make any further moves, and the game ends.
// It is not possible for Alice to get a higher net income.

// Example 2:
// Input: edges = [[0,1]], bob = 1, amount = [-7280,2350]
// Output: -7280
// Explanation: 
// Alice follows the path 0->1 whereas Bob follows the path 1->0.
// Thus, Alice opens the gate at node 0 only. Hence, her net income is -7280. 

// @param {number[][]} edges
// @param {number} bob
// @param {number[]} amount
// @return {number}

var mostProfitablePath = function(edges, bob, amount) {
    const n = amount.length;
    const graph = Array.from({ length: n }, () => []);
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // Find Bob's path to the root (0)
    let bobPath = new Map();
    function dfsBob(node, parent, depth) {
        if (node === 0) {
            bobPath.set(node, depth);
            return true;
        }
        for (let neighbor of graph[node]) {
            if (neighbor === parent) continue;
            if (dfsBob(neighbor, node, depth + 1)) {
                bobPath.set(node, depth);
                return true;
            }
        }
        return false;
    }
    dfsBob(bob, -1, 0);
    
    // DFS to find max profit path for Alice
    let maxProfit = -Infinity;
    function dfsAlice(node, parent, depth, profit) {
        let isLeaf = true;
        
        // Adjust the amount based on Bob's presence
        if (bobPath.has(node)) {
            if (bobPath.get(node) > depth) {
                // Bob arrives later, Alice takes full amount
                profit += amount[node];
            } else if (bobPath.get(node) === depth) {
                // Bob arrives at the same time, they split
                profit += amount[node] / 2;
            }
        } else {
            profit += amount[node];
        }
        
        for (let neighbor of graph[node]) {
            if (neighbor === parent) continue;
            isLeaf = false;
            dfsAlice(neighbor, node, depth + 1, profit);
        }
        
        if (isLeaf) {
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    
    dfsAlice(0, -1, 0, 0);
    return maxProfit;
};


console.log("==========================================")

// 1524. Number of Sub-arrays With Odd Sum
// Medium
// Given an array of integers arr, return the number of subarrays with an odd sum.

// Since the answer can be very large, return it modulo 109 + 7.

// Example 1:
// Input: arr = [1,3,5]
// Output: 4
// Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
// All sub-arrays sum are [1,4,9,3,8,5].
// Odd sums are [1,9,3,5] so the answer is 4.

// Example 2:
// Input: arr = [2,4,6]
// Output: 0
// Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
// All sub-arrays sum are [2,6,12,4,10,6].
// All sub-arrays have even sum and the answer is 0.

// Example 3:
// Input: arr = [1,2,3,4,5,6,7]
// Output: 16

// @param {number[]} arr
// @return {number}

var numOfSubarrays = function(arr) {
    const MOD = 1e9 + 7;
    let oddCount = 0, evenCount = 1, sum = 0, result = 0;
    
    for (let num of arr) {
        sum += num;
        if (sum % 2 === 0) {
            result = (result + oddCount) % MOD;
            evenCount++;
        } else {
            result = (result + evenCount) % MOD;
            oddCount++;
        }
    }
    
    return result;
};

console.log("==========================================")

// 1749. Maximum Absolute Sum of Any Subarray
// maxAscendingSum
// You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).
// Return the maximum absolute sum of any (possibly empty) subarray of nums.
// Note that abs(x) is defined as follows:
// If x is a negative integer, then abs(x) = -x.
// If x is a non-negative integer, then abs(x) = x.

// Example 1:
// Input: nums = [1,-3,2,3,-4]
// Output: 5
// Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.

// Example 2:
// Input: nums = [2,-5,1,-4,3,-2]
// Output: 8
// Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.

// @param {number[]} nums
// @return {number}

var maxAbsoluteSum = function(nums) {
    let maxSum = 0, minSum = 0;
    let currMax = 0, currMin = 0;
    
    for (let num of nums) {
        currMax = Math.max(num, currMax + num);
        maxSum = Math.max(maxSum, currMax);
        
        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
    }
    
    return Math.max(maxSum, Math.abs(minSum));
};


console.log("==========================================")

// 873. Length of Longest Fibonacci Subsequence
// Medium
// A sequence x1, x2, ..., xn is Fibonacci-like if:
// n >= 3
// xi + xi+1 == xi+2 for all i + 2 <= n
// Given a strictly increasing array arr of positive integers forming a sequence, 
// return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

// A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, 
// without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

// Example 1:
// Input: arr = [1,2,3,4,5,6,7,8]
// Output: 5
// Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].

// Example 2:
// Input: arr = [1,3,7,11,12,14,18]
// Output: 3
// Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].

// @param {number[]} arr
// @return {number}

var lenLongestFibSubseq = function(arr) {
    const indexMap = new Map(); // Stores the index of each number in arr
    const dp = new Map(); // Stores pairs (i, j) and their Fib sequence lengths
    let maxLen = 0;

    // Populate indexMap with indices of numbers in arr
    for (let i = 0; i < arr.length; i++) {
        indexMap.set(arr[i], i);
    }

    for (let k = 0; k < arr.length; k++) {
        for (let j = 0; j < k; j++) {
            let iVal = arr[k] - arr[j]; // The value that should be before arr[j]
            if (iVal < arr[j] && indexMap.has(iVal)) { // Ensure it's a valid Fibonacci sequence
                let i = indexMap.get(iVal);
                let length = dp.get(i * arr.length + j) || 2; // Default to 2 if not found
                dp.set(j * arr.length + k, length + 1);
                maxLen = Math.max(maxLen, length + 1);
            }
        }
    }

    return maxLen >= 3 ? maxLen : 0;
};


console.log("==========================================")

// 1092. Shortest Common Supersequence 
// Hard
// Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. 
// If there are multiple valid strings, return any of them.

// A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

// Example 1:
// Input: str1 = "abac", str2 = "cab"
// Output: "cabac"
// Explanation: 
// str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
// str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
// The answer provided is the shortest such string that satisfies these properties.

// Example 2:
// Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
// Output: "aaaaaaaa"

// @param {string} str1
// @param {string} str2
// @return {string}

var shortestCommonSupersequence = function(str1, str2) {
    let m = str1.length, n = str2.length;
    
    // Step 1: Compute LCS using DP
    let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(""));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }

    // Step 2: Build the SCS using the LCS
    let i = 0, j = 0;
    let lcs = dp[m][n], result = "";

    for (let c of lcs) {
        while (i < m && str1[i] !== c) result += str1[i++];
        while (j < n && str2[j] !== c) result += str2[j++];
        result += c;
        i++; j++;
    }
    
    // Add remaining characters
    result += str1.slice(i) + str2.slice(j);
    
    return result;
};

console.log("==========================================")

// 2460. Apply Operations to an Array
// Easy
// You are given a 0-indexed array nums of size n consisting of non-negative integers.
// You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums:
// If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
// After performing all the operations, shift all the 0's to the end of the array.
// For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
// Return the resulting array.
// Note that the operations are applied sequentially, not all at once.

// Example 1:
// Input: nums = [1,2,2,1,1,0]
// Output: [1,4,2,0,0,0]
// Explanation: We do the following operations:
// - i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
// - i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
// - i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
// - i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
// - i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
// After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].

// Example 2:
// Input: nums = [0,1]
// Output: [1,0]
// Explanation: No operation can be applied, we just shift the 0 to the end.

// @param {number[]} nums
// @return {number[]}

var applyOperations = function(nums) {
    let n = nums.length;
    
    // Step 1: Apply the operations
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    
    // Step 2: Move all zeros to the end
    let result = [];
    for (let num of nums) {
        if (num !== 0) {
            result.push(num);
        }
    }
    
    while (result.length < n) {
        result.push(0);
    }
    
    return result;
};


console.log("==========================================")

// 2570. Merge Two 2D Arrays by Summing Values
// Easy
// You are given two 2D integer arrays nums1 and nums2.
// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. 
// If the id does not exist in one of the two arrays, then assume its value in that array to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.

// Example 1:
// Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
// Output: [[1,6],[2,3],[3,2],[4,6]]
// Explanation: The resulting array contains the following:
// - id = 1, the value of this id is 2 + 4 = 6.
// - id = 2, the value of this id is 3.
// - id = 3, the value of this id is 2.
// - id = 4, the value of this id is 5 + 1 = 6.

// Example 2:
// Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
// Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
// Explanation: There are no common ids, so we just include each id with its value in the resulting list.

// @param {number[][]} nums1
// @param {number[][]} nums2
// @return {number[][]}

var mergeArrays = function(nums1, nums2) {
    let map = new Map();

    for (let [id, val] of nums1) {
        map.set(id, (map.get(id) || 0) + val);
    }

    for (let [id, val] of nums2) {
        map.set(id, (map.get(id) || 0) + val);
    }

    return Array.from(map).sort((a, b) => a[0] - b[0]);
};

console.log("==========================================")

// 2161. Partition Array According to Given Pivot
// Medium
// You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

// Every element less than pivot appears before every element greater than pivot.
// Every element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. 
// If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
// Return nums after the rearrangement.

// Example 1:
// Input: nums = [9,12,5,10,14,3,10], pivot = 10
// Output: [9,5,3,10,10,12,14]
// Explanation: 
// The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
// The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
// The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.

// Example 2:
// Input: nums = [-3,4,3,2], pivot = 2
// Output: [-3,2,4,3]
// Explanation: 
// The element -3 is less than the pivot so it is on the left side of the array.
// The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
// The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.

// @param {number[]} nums
// @param {number} pivot
// @return {number[]}

var pivotArray = function(nums, pivot) {
    let left = [], middle = [], right = [];

    for (let num of nums) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            middle.push(num);
        }
    }

    return [...left, ...middle, ...right];
};

console.log("==========================================")

// 1780. Check if Number is a Sum of Powers of Three
// Medium
// Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.
// An integer y is a power of three if there exists an integer x such that y == 3x.

// Example 1:
// Input: n = 12
// Output: true
// Explanation: 12 = 31 + 32

// Example 2:
// Input: n = 91
// Output: true
// Explanation: 91 = 30 + 32 + 34

// Example 3:
// Input: n = 21
// Output: false

// @param {number} n
// @return {boolean}

var checkPowersOfThree = function(n) {
    while (n > 0) {
        if (n % 3 === 2) {
            return false;
        }
        n = Math.floor(n / 3);
    }
    return true;
};
console.log("==========================================")

// 2579. Count Total Number of Colored Cells
// Medium
// There exists an infinitely large two-dimensional grid of uncolored unit cells. 
// You are given a positive integer n, indicating that you must do the following routine for n minutes:

// At the first minute, color any arbitrary unit cell blue.
// Every minute thereafter, color blue every uncolored cell that touches a blue cell.
// Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.

// Return the number of colored cells at the end of n minutes.

// Example 1:
// Input: n = 1
// Output: 1
// Explanation: After 1 minute, there is only 1 blue cell, so we return 1.

// Example 2:
// Input: n = 2
// Output: 5
// Explanation: After 2 minutes, there are 4 colored cells on the boundary and 1 in the center, so we return 5. 

// @param {number} n
// @return {number}

var coloredCells = function(n) {
    return n * n + (n - 1) * (n - 1);
};

console.log("==========================================")

// 2965. Find Missing and Repeated Values
// Easy
// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. 
// Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.
// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

// Example 1:
// Input: grid = [[1,3],[2,2]]
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

// Example 2:
// Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
// Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].

// @param {number[][]} grid
// @return {number[]}

var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let numCount = new Map();
    let repeated, missing;
    
    // Count occurrences of each number
    for (let row of grid) {
        for (let num of row) {
            numCount.set(num, (numCount.get(num) || 0) + 1);
        }
    }
    
    // Identify the repeated and missing numbers
    for (let i = 1; i <= n * n; i++) {
        if (numCount.has(i)) {
            if (numCount.get(i) === 2) {
                repeated = i;
            }
        } else {
            missing = i;
        }
    }
    
    return [repeated, missing];
};

console.log("==========================================")

// 2523. Closest Prime Numbers in Range
// Medium
// Given two positive integers left and right, find the two integers num1 and num2 such that:

// left <= num1 < num2 <= right .
// Both num1 and num2 are prime numbers.
// num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
// Return the positive integer array ans = [num1, num2]. 
// If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

// Example 1:
// Input: left = 10, right = 19
// Output: [11,13]
// Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
// The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
// Since 11 is smaller than 17, we return the first pair.

// Example 2:
// Input: left = 4, right = 6
// Output: [-1,-1]
// Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.

// @param {number} left
// @param {number} right
// @return {number[]}

var closestPrimes = function(left, right) {
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    let primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    if (primes.length < 2) return [-1, -1];
    
    let minDiff = Infinity;
    let result = [-1, -1];
    
    for (let i = 1; i < primes.length; i++) {
        let diff = primes[i] - primes[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            result = [primes[i - 1], primes[i]];
        }
    }
    
    return result;
};

console.log("==========================================")

// 2379. Minimum Recolors to Get K Consecutive Black Blocks
// Easy
// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', 
// representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.
// You are also given an integer k, which is the desired number of consecutive black blocks.
// In one operation, you can recolor a white block such that it becomes a black block.
// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Example 1:
// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW". 
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.

// Example 2:
// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

// @param {string} blocks
// @param {number} k
// @return {number}

var minimumRecolors = function(blocks, k) {
    let minRecolors = Infinity;
    let whiteCount = 0;
    
    // Count 'W' in the first window of size k
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') whiteCount++;
    }
    
    minRecolors = whiteCount;
    
    // Slide the window across the string
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i - k] === 'W') whiteCount--; // Remove leftmost element from window
        if (blocks[i] === 'W') whiteCount++; // Add new rightmost element to window
        
        minRecolors = Math.min(minRecolors, whiteCount);
    }
    
    return minRecolors;
};

console.log("==========================================")

// 3208. Alternating Groups II
// Medium
// There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. 
// The color of tile i is represented by colors[i]:
// colors[i] == 0 means that tile i is red.
// colors[i] == 1 means that tile i is blue.
// An alternating group is every k contiguous tiles in the circle with alternating colors 
// (each tile in the group except the first and last one has a different color from its left and right tiles).
// Return the number of alternating groups.
// Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

// @param {number[]} colors
// @param {number} k
// @return {number}

const numberOfAlternatingGroups = (colors, k) => {
    const n = colors.length;
    let count = 0;
    let alternatingGroups = 0;

    for (let i = 0; i < 2 * n; i++) {
        if (i > 0 && colors[i % n] === colors[(i - 1) % n]) {
            count = 1;
        } else {
            count++;
        }
        if (i >= n && count >= k) {
            alternatingGroups++;
        }
    }
    return alternatingGroups;
};


console.log("==========================================")

// 3306. Count of Substrings Containing Every Vowel and K Consonants II
// Medium
// You are given a string word and a non-negative integer k.
// Return the total number of substrings of word that contain every vowel ('a', 'e', 'i', 'o', and 'u') at least once and exactly k consonants.

// Example 1:
// Input: word = "aeioqq", k = 1
// Output: 0
// Explanation:
// There is no substring with every vowel.

// Example 2:
// Input: word = "aeiou", k = 0
// Output: 1
// Explanation:
// The only substring with every vowel and zero consonants is word[0..4], which is "aeiou".

// Example 3:
// Input: word = "ieaouqqieaouqq", k = 1
// Output: 3
// Explanation:
// The substrings with every vowel and one consonant are:
// word[0..5], which is "ieaouq".
// word[6..11], which is "qieaou".
// word[7..12], which is "ieaouq".

// @param {string} word
// @param {number} k
// @return {number}

var countOfSubstrings = function (word, k) {
    // Helper function to check if a character is a vowel
    function isVowel(c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
    
    // Helper function to count substrings with all vowels and at least k consonants
    function atLeastK(word, k) {
        let numValidSubstrings = 0, start = 0, end = 0;
        let vowelCount = new Map(); // Track each vowel and its count
        let consonantCount = 0;     // Track total consonants
        
        while (end < word.length) {
            const newLetter = word[end];
            
            // Update our counts as we expand the window
            if (isVowel(newLetter)) {
                vowelCount.set(newLetter, (vowelCount.get(newLetter) ?? 0) + 1);
            } else {
                consonantCount++;
            }
            
            // When we have all 5 vowels and at least k consonants
            while (vowelCount.size == 5 && consonantCount >= k) {
                // All extensions of this window to the right are valid
                numValidSubstrings += word.length - end;
                
                // Shrink window from the left and update counts
                const startLetter = word.charAt(start);
                if (isVowel(startLetter)) {
                    vowelCount.set(
                        startLetter,
                        vowelCount.get(startLetter) - 1
                    );
                    
                    // Remove vowel from map if count reaches zero
                    if (vowelCount.get(startLetter) == 0) {
                        vowelCount.delete(startLetter);
                    }
                } else {
                    consonantCount--;
                }
                start++;
            }
            end++;
        }
        return numValidSubstrings;
    }
    
    // Subtracting counts gives us exactly k consonants
    return atLeastK(word, k) - atLeastK(word, k + 1);
};

console.log("==========================================")

// 1358. Number of Substrings Containing All Three Characters
// Medium

// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are 
// "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

// Example 2:
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

// Example 3:
// Input: s = "abc"
// Output: 1

// @param {string} s
// @return {number}

var numberOfSubstrings = function(s) {
    let count = 0;
    let left = 0;
    let charCount = { 'a': 0, 'b': 0, 'c': 0 };
    
    for (let right = 0; right < s.length; right++) {
        charCount[s[right]]++;
        
        while (charCount['a'] > 0 && charCount['b'] > 0 && charCount['c'] > 0) {
            count += s.length - right;
            charCount[s[left]]--;
            left++;
        }
    }
    
    return count;
};
console.log("==========================================")

// 2529. Maximum Count of Positive Integer and Negative Integer
// Easy
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

// Example 2:
// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

// Example 3:
// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// @param {number[]} nums
// @return {number}

var maximumCount = function(nums) {
    let negCount = 0, posCount = 0;

    for (let num of nums) {
        if (num < 0) negCount++;
        else if (num > 0) posCount++;
    }

    return Math.max(negCount, posCount);
};

console.log("==========================================")

// 3356. Zero Array Transformation II
// Medium
// You are given an integer array nums of length n and a 2D array queries where queries[i] = [li, ri, vali].

// Each queries[i] represents the following action on nums:

// Decrement the value at each index in the range [li, ri] in nums by at most vali.
// The amount by which each value is decremented can be chosen independently for each index.
// A Zero Array is an array with all its elements equal to 0.

// Return the minimum possible non-negative value of k, such that after processing the first k queries in sequence, 
// nums becomes a Zero Array. If no such k exists, return -1.

// Example 1:
// Input: nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]
// Output: 2
// Explanation:
// For i = 0 (l = 0, r = 2, val = 1):
// Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
// The array will become [1, 0, 1].
// For i = 1 (l = 0, r = 2, val = 1):
// Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
// The array will become [0, 0, 0], which is a Zero Array. Therefore, the minimum value of k is 2.

// Example 2:
// Input: nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]
// Output: -1
// Explanation:
// For i = 0 (l = 1, r = 3, val = 2):
// Decrement values at indices [1, 2, 3] by [2, 2, 1] respectively.
// The array will become [4, 1, 0, 0].
// For i = 1 (l = 0, r = 2, val = 1):
// Decrement values at indices [0, 1, 2] by [1, 1, 0] respectively.
// The array will become [3, 0, 0, 0], which is not a Zero Array.

// @param {number[]} nums
// @param {number[][]} queries
// @return {number}

var minZeroArray = function(nums, queries) {
    const n = nums.length;
    let sum = 0;          // Tracks the running sum of decrements
    let k = 0;            // Counts the number of queries processed
    
    // Initialize difference array for efficient range updates
    let differenceArray = new Array(n + 1).fill(0);
    
    // Process each element in the nums array
    for(let index = 0; index < n; index++) {
        // Keep applying queries until the current element can be reduced to 0
        while(sum + differenceArray[index] < nums[index]){
            k++;  // Increment query counter
            
            // If we've used all queries and still can't zero the array, return -1
            if(k > queries.length) return -1;
            
            // Extract the current query parameters
            let [left, right, val] = queries[k - 1];
            
            // Only apply the query if it affects the current index or elements to its right
            if(right >= index) {
                // Update the difference array to apply the decrement
                // We take max(left, index) because we only care about the current index and beyond
                differenceArray[Math.max(left, index)] += val;
                differenceArray[right + 1] -= val;  // Remove the effect after the range
            }
        }
        
        // Update the running sum with the current difference value
        sum += differenceArray[index];
    }
    
    return k;  // Return the minimum number of queries needed
};

console.log("==========================================")

// 2226. Maximum Candies Allocated to K Children
// Medium
// You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. 
// You can divide each pile into any number of sub piles, but you cannot merge two piles together.

// You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. 
// Each child can be allocated candies from only one pile of candies and some piles of candies may go unused.
// Return the maximum number of candies each child can get.

// Example 1:
// Input: candies = [5,8,6], k = 3
// Output: 5
// Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. 
// We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. 
// It can be proven that each child cannot receive more than 5 candies.

// Example 2:
// Input: candies = [2,5], k = 11
// Output: 0
// Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. 
// Thus, each child gets no candy and the answer is 0.

// @param {number[]} candies
// @param {number} k
// @return {number}

var maximumCandies = function(candies, k) {
    if (k === 0) return 0; // Edge case: no children
    
    let left = 1, right = Math.max(...candies);
    let result = 0;

    const canDistribute = (mid) => {
        let count = 0;
        for (let candy of candies) {
            count += Math.floor(candy / mid);
        }
        return count >= k;
    };

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) {
            result = mid; // Valid allocation, try for a larger size
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};

console.log("==========================================")

// 2560. House Robber IV
// Medium
// There are several consecutive houses along a street, each of which has some money inside. 
// There is also a robber, who wants to steal money from the homes, but he refuses to steal from adjacent homes.
// The capability of the robber is the maximum amount of money he steals from one house of all the houses he robbed.
// You are given an integer array nums representing how much money is stashed in each house. More formally, the ith house from the left has nums[i] dollars.
// You are also given an integer k, representing the minimum number of houses the robber will steal from. It is always possible to steal at least k houses.
// Return the minimum capability of the robber out of all the possible ways to steal at least k houses.

// Example 1:
// Input: nums = [2,3,5,9], k = 2
// Output: 5
// Explanation: 
// There are three ways to rob at least 2 houses:
// - Rob the houses at indices 0 and 2. Capability is max(nums[0], nums[2]) = 5.
// - Rob the houses at indices 0 and 3. Capability is max(nums[0], nums[3]) = 9.
// - Rob the houses at indices 1 and 3. Capability is max(nums[1], nums[3]) = 9.
// Therefore, we return min(5, 9, 9) = 5.

// Example 2:
// Input: nums = [2,7,9,3,1], k = 2
// Output: 2
// Explanation: There are 7 ways to rob the houses. 
// The way which leads to minimum capability is to rob the house at index 0 and 4. Return max(nums[0], nums[4]) = 2.

// @param {number[]} nums
// @param {number} k
// @return {number}

var minCapability = function(nums, k) {
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    
    const canRobK = (capability) => {
        let count = 0;
        let i = 0;
        
        while (i < nums.length) {
            if (nums[i] <= capability) {
                count++;
                i++;  // Skip adjacent house
            }
            i++;  // Move to next house
        }
        
        return count >= k;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (canRobK(mid)) {
            right = mid;  // Try to find a smaller capability
        } else {
            left = mid + 1;  // Increase capability
        }
    }
    
    return left;
};

console.log("==========================================")

// 2594. Minimum Time to Repair Cars
// Medium
// You are given an integer array ranks representing the ranks of some mechanics. ranksi is the rank of the ith mechanic. 
// A mechanic with a rank r can repair n cars in r * n2 minutes.
// You are also given an integer cars representing the total number of cars waiting in the garage to be repaired.
// Return the minimum time taken to repair all the cars.
// Note: All the mechanics can repair the cars simultaneously.

// Example 1:
// Input: ranks = [4,2,3,1], cars = 10
// Output: 16
// Explanation: 
// - The first mechanic will repair two cars. The time required is 4 * 2 * 2 = 16 minutes.
// - The second mechanic will repair two cars. The time required is 2 * 2 * 2 = 8 minutes.
// - The third mechanic will repair two cars. The time required is 3 * 2 * 2 = 12 minutes.
// - The fourth mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
// It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​

// Example 2:
// Input: ranks = [5,1,8], cars = 6
// Output: 16
// Explanation: 
// - The first mechanic will repair one car. The time required is 5 * 1 * 1 = 5 minutes.
// - The second mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
// - The third mechanic will repair one car. The time required is 8 * 1 * 1 = 8 minutes.
// It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​

// @param {number[]} ranks
// @param {number} cars
// @return {number}

var repairCars = function(ranks, cars) {
    let left = 1, right = Math.min(...ranks) * cars * cars; 
    
    const canRepairInTime = (time) => {
        let repaired = 0;
        for (let rank of ranks) {
            repaired += Math.floor(Math.sqrt(time / rank)); 
            if (repaired >= cars) return true; 
        }
        return false;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canRepairInTime(mid)) {
            right = mid; 
        } else {
            left = mid + 1; 
        }
    }

    return left;
};

console.log("==========================================")

// 2206. Divide Array Into Equal Pairs
// Easy
// You are given an integer array nums consisting of 2 * n integers.
// You need to divide nums into n pairs such that:
// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

// Example 1:
// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: 
// There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.

// @param {number[]} nums
// @return {boolean}

var divideArray = function(nums) {
    let count = new Map();
    
    // Count the occurrences of each number
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    // Check if each count is even
    for (let freq of count.values()) {
        if (freq % 2 !== 0) {
            return false;
        }
    }
    
    return true;
};

console.log("==========================================")

// 2401. Longest Nice Subarray
// Medium
// You are given an array nums consisting of positive integers.
// We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.
// Return the length of the longest nice subarray.
// A subarray is a contiguous part of an array.
// Note that subarrays of length 1 are always considered nice.

// Example 1:
// Input: nums = [1,3,8,48,10]
// Output: 3
// Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
// - 3 AND 8 = 0.
// - 3 AND 48 = 0.
// - 8 AND 48 = 0.
// It can be proven that no longer nice subarray can be obtained, so we return 3.

// Example 2:
// Input: nums = [3,1,5,11,13]
// Output: 1
// Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.

// @param {number[]} nums
// @return {number}

var longestNiceSubarray = function(nums) {
    let maxLen = 0;
    let left = 0;
    let bitMask = 0;
    
    for (let right = 0; right < nums.length; right++) {
        while ((bitMask & nums[right]) !== 0) {
            bitMask ^= nums[left]; // Remove leftmost element from bitMask
            left++;
        }
        
        bitMask |= nums[right]; // Add new element to bitMask
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
};


console.log("==========================================")

// 3191. Minimum Operations to Make Binary Array Elements Equal to One I
// Medium
// You are given a binary array nums.
// You can do the following operation on the array any number of times (possibly zero):
// Choose any 3 consecutive elements from the array and flip all of them.
// Flipping an element means changing its value from 0 to 1, and from 1 to 0.
// Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.

// Example 1:
// Input: nums = [0,1,1,1,0,0]
// Output: 3
// Explanation:
// We can do the following operations:
// Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
// Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
// Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].

// Example 2:
// Input: nums = [0,1,1,1]
// Output: -1
// Explanation:
// It is impossible to make all elements equal to 1.

// @param {number[]} nums
// @return {number}

var minOperations = function(nums) {
    let n = nums.length;
    let ops = 0;
    
    for (let i = 0; i <= n - 3; i++) {
        if (nums[i] === 0) {
            // Flip the next three elements
            for (let j = 0; j < 3; j++) {
                nums[i + j] ^= 1;
            }
            ops++;
        }
    }
    
    // Check if all elements are 1
    return nums.every(num => num === 1) ? ops : -1;
};

console.log("==========================================")

// 3108. Minimum Cost Walk in Weighted Graph
// Hard
// There is an undirected weighted graph with n vertices labeled from 0 to n - 1.
// You are given the integer n and an array edges, where edges[i] = [ui, vi, wi] indicates that there is an edge between vertices ui and vi with a weight of wi.
// A walk on a graph is a sequence of vertices and edges. The walk starts and ends with a vertex, and each edge connects 
// the vertex that comes before it and the vertex that comes after it. It's important to note that a walk may visit the same edge or vertex more than once.
// The cost of a walk starting at node u and ending at node v is defined as the bitwise AND of the weights of the edges traversed during the walk. 
// In other words, if the sequence of edge weights encountered during the walk is w0, w1, w2, ..., wk, then the cost is calculated as w0 & w1 & w2 & ... & wk, 
// where & denotes the bitwise AND operator.
// You are also given a 2D array query, where query[i] = [si, ti]. For each query, you need to find the minimum cost 
// of the walk starting at vertex si and ending at vertex ti. If there exists no such walk, the answer is -1.
// Return the array answer, where answer[i] denotes the minimum cost of a walk for query i.

// Example 1:
// Input: n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]
// Output: [1,-1]
// Explanation:
// To achieve the cost of 1 in the first query, we need to move on the following edges: 0->1 (weight 7), 1->2 (weight 1), 2->1 (weight 1), 1->3 (weight 7).
// In the second query, there is no walk between nodes 3 and 4, so the answer is -1.

// Example 2:
// Input: n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], query = [[1,2]]
// Output: [0]
// Explanation:
// To achieve the cost of 0 in the first query, we need to move on the following edges: 1->2 (weight 1), 2->1 (weight 6), 1->2 (weight 1).

// @param {number} n
// @param {number[][]} edges
// @param {number[][]} query
// @return {number[]}

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(a, b) {
        let pa = this.find(a), pb = this.find(b);
        if (pa === pb) return false;
        if (this.size[pa] > this.size[pb]) {
            this.parent[pb] = pa;
            this.size[pa] += this.size[pb];
        } else {
            this.parent[pa] = pb;
            this.size[pb] += this.size[pa];
        }
        return true;
    }
}

var minimumCost = function(n, edges, queries) {
    let g = new Array(n).fill(-1);
    let uf = new UnionFind(n);

    // Build the Union-Find structure
    for (let [u, v, _] of edges) {
        uf.union(u, v);
    }

    // Compute the minimum AND value for each connected component
    for (let [u, _, w] of edges) {
        let root = uf.find(u);
        g[root] &= w;
    }

    // Query function
    function queryCost(u, v) {
        if (u === v) return 0;
        let a = uf.find(u), b = uf.find(v);
        return a === b ? g[a] : -1;
    }

    return queries.map(([s, t]) => queryCost(s, t));
};


console.log("==========================================")

// 2115. Find All Possible Recipes from Given Supplies
// Medium
// You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. 
// The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. 
// A recipe can also be an ingredient for other recipes, i.e., ingredients[i] may contain a string that is in recipes.
// You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them.
// Return a list of all the recipes that you can create. You may return the answer in any order.
// Note that two recipes may contain each other in their ingredients.

// Example 1:
// Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
// Output: ["bread"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".

// Example 2:
// Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// Example 3:

// Input: recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
// Output: ["bread","sandwich","burger"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".
 
// @param {string[]} recipes
// @param {string[][]} ingredients
// @param {string[]} supplies
// @return {string[]}

var findAllRecipes = function(recipes, ingredients, supplies) {
    let recipeSet = new Set(recipes);
    let supplySet = new Set(supplies);
    let graph = new Map(); // Adjacency list
    let inDegree = new Map(); // Count of missing ingredients
    
    // Initialize graph and in-degree count
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        inDegree.set(recipe, ingredients[i].length);
        for (let ing of ingredients[i]) {
            if (!graph.has(ing)) graph.set(ing, []);
            graph.get(ing).push(recipe);
        }
    }
    
    let queue = []; // Processable recipes
    for (let supply of supplies) {
        if (graph.has(supply)) {
            queue.push(supply);
        }
    }
    
    let result = [];
    while (queue.length) {
        let ing = queue.shift();
        if (recipeSet.has(ing)) result.push(ing);
        
        if (graph.has(ing)) {
            for (let recipe of graph.get(ing)) {
                inDegree.set(recipe, inDegree.get(recipe) - 1);
                if (inDegree.get(recipe) === 0) {
                    queue.push(recipe);
                }
            }
        }
    }
    
    return result;
};

// C:\Users\miner\Desktop\04 Career\00 Resume\2024\Web Developer\jsChallenges\06-week-leet.js

console.log("==========================================")

// 2685. Count the Number of Complete Components
// Medium
// You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. 
// You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.
// Return the number of complete connected components of the graph.
// A connected component is a subgraph of a graph in which there exists a path between any two vertices, 
// and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.
// A connected component is said to be complete if there exists an edge between every pair of its vertices.

// Example 1:
// Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
// Output: 3
// Explanation: From the picture above, one can see that all of the components of this graph are complete.

// Example 2:
// Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
// Output: 1
// Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. 
// On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. 
// Thus, the number of complete components in this graph is 1.

// @param {number} n
// @param {number[][]} edges
// @return {number}

var countCompleteComponents = function(n, edges) {
    // Create adjacency list
    let adj = Array.from({ length: n }, () => new Set());
    for (let [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }
    
    let visited = new Array(n).fill(false);
    let count = 0;
    
    const dfs = (node, component) => {
        visited[node] = true;
        component.push(node);
        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, component);
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let component = [];
            dfs(i, component);
            
            // Check if the component is complete
            let size = component.length;
            let isComplete = component.every(node => adj[node].size === size - 1);
            
            if (isComplete) count++;
        }
    }
    
    return count;
};

console.log("==========================================")

// 1976. Number of Ways to Arrive at Destination
// Medium
// You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. 
// The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

// You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] 
// means that there is a road between intersections ui and vi that takes timei minutes to travel. 
// You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.

// Return the number of ways you can arrive at your destination in the shortest amount of time. 
// Since the answer may be large, return it modulo 109 + 7.

// Example 1:
// Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
// Output: 4
// Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
// The four ways to get there in 7 minutes are:
// - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6

// Example 2:
// Input: n = 2, roads = [[1,0,10]]
// Output: 1
// Explanation: There is only one way to go from intersection 0 to intersection 1, and it takes 10 minutes.

// @param {number} n
// @param {number[][]} roads
// @return {number}

var countPaths = function(n, roads) {
    const MOD = 1e9 + 7;
    const graph = new Array(n).fill(0).map(() => []);
    
    // Build adjacency list
    for (const [u, v, time] of roads) {
        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }
    
    // Min-heap priority queue (min distance first)
    const minHeap = [[0, 0]]; // [time, node]
    const dist = new Array(n).fill(Infinity);
    const ways = new Array(n).fill(0);
    
    dist[0] = 0;
    ways[0] = 1;
    
    while (minHeap.length > 0) {
        const [time, node] = minHeap.shift(); // Extract min (Dijkstra's step)
        
        if (time > dist[node]) continue; // Skip if outdated
        
        for (const [neighbor, travelTime] of graph[node]) {
            const newTime = time + travelTime;
            
            if (newTime < dist[neighbor]) {
                dist[neighbor] = newTime;
                ways[neighbor] = ways[node];
                minHeap.push([newTime, neighbor]);
                minHeap.sort((a, b) => a[0] - b[0]); // Maintain min-heap order
            } else if (newTime === dist[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }
    
    return ways[n - 1];
};


console.log("==========================================")

// 3169. Count Days Without Meetings
// Medium
// You are given a positive integer days representing the total number of days an employee is available for work (starting from day 1). 
// You are also given a 2D array meetings of size n where, meetings[i] = [start_i, end_i] represents the starting and ending days of meeting i (inclusive).
// Return the count of days when the employee is available for work but no meetings are scheduled.
// Note: The meetings may overlap.

// Example 1:
// Input: days = 10, meetings = [[5,7],[1,3],[9,10]]
// Output: 2
// Explanation:
// There is no meeting scheduled on the 4th and 8th days.

// Example 2:
// Input: days = 5, meetings = [[2,4],[1,3]]
// Output: 1
// Explanation:
// There is no meeting scheduled on the 5th day.

// Example 3:
// Input: days = 6, meetings = [[1,6]]
// Output: 0
// Explanation:
// Meetings are scheduled for all working days.

// @param {number} days
// @param {number[][]} meetings
// @return {number}

var countDays = function(days, meetings) {
    // Sort meetings by start day
    meetings.sort((a, b) => a[0] - b[0]);

    let totalMeetingDays = 0;
    let prevStart = -1, prevEnd = -1;

    for (let [start, end] of meetings) {
        if (start > prevEnd) {
            // Add previous merged interval days
            if (prevStart !== -1) {
                totalMeetingDays += (prevEnd - prevStart + 1);
            }
            // Start new interval
            prevStart = start;
            prevEnd = end;
        } else {
            // Merge overlapping interval
            prevEnd = Math.max(prevEnd, end);
        }
    }
    
    // Add the last merged interval
    if (prevStart !== -1) {
        totalMeetingDays += (prevEnd - prevStart + 1);
    }

    return days - totalMeetingDays;
};

console.log("==========================================")

// 3394. Check if Grid can be Cut into Sections
// Medium
// You are given an integer n representing the dimensions of an n x n grid, with the origin at the bottom-left corner of the grid.
// You are also given a 2D array of coordinates rectangles, where rectangles[i] is in the form [startx, starty, endx, endy], 
// representing a rectangle on the grid. Each rectangle is defined as follows:
// (startx, starty): The bottom-left corner of the rectangle.
// (endx, endy): The top-right corner of the rectangle.
// Note that the rectangles do not overlap. Your task is to determine if it is possible to make either two horizontal or two vertical cuts on the grid such that:

// Each of the three resulting sections formed by the cuts contains at least one rectangle.
// Every rectangle belongs to exactly one section.
// Return true if such cuts can be made; otherwise, return false.

// Example 1:
// Input: n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]
// Output: true
// Explanation:
// The grid is shown in the diagram. We can make horizontal cuts at y = 2 and y = 4. Hence, output is true.

// Example 2:
// Input: n = 4, rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]
// Output: true
// Explanation:
// We can make vertical cuts at x = 2 and x = 3. Hence, output is true.

// Example 3:
// Input: n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]
// Output: false
// Explanation:
// We cannot make two horizontal or two vertical cuts that satisfy the conditions. Hence, output is false.

// @param {number} n
// @param {number[][]} rectangles
// @return {boolean}

var checkValidCuts = function(n, rectangles) {
    const xs = rectangles.map(([startX, , endX]) => [startX, endX]);
    const ys = rectangles.map(([, startY, , endY]) => [startY, endY]);
    return Math.max(countMerged(xs), countMerged(ys)) >= 3;
  };
  
  function countMerged(intervals) {
    let count = 0;
    let prevEnd = 0;
    
    intervals.sort(([aStart], [bStart]) => aStart - bStart);
    
    for (const [start, end] of intervals) {
      if (start < prevEnd) {
        prevEnd = Math.max(prevEnd, end);
      } else {
        prevEnd = end;
        count++;
      }
    }
    return count;
  }

console.log("==========================================")

// 2033. Minimum Operations to Make a Uni-Value Grid
// Medium
// You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.
// A uni-value grid is a grid where all the elements of it are equal.
// Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

// Example 1:
// Input: grid = [[2,4],[6,8]], x = 2
// Output: 4
// Explanation: We can make every element equal to 4 by doing the following: 
// - Add x to 2 once.
// - Subtract x from 6 once.
// - Subtract x from 8 twice.
// A total of 4 operations were used.

// Example 2:
// Input: grid = [[1,5],[2,3]], x = 1
// Output: 5
// Explanation: We can make every element equal to 3.

// Example 3:
// Input: grid = [[1,2],[3,4]], x = 2
// Output: -1
// Explanation: It is impossible to make every element equal.

// @param {number[][]} grid
// @param {number} x
// @return {number}

var minOperations = function(grid, x) {
    let nums = grid.flat();  // Flatten the 2D grid to 1D array
    nums.sort((a, b) => a - b);  // Sort the array

    let mod = nums[0] % x;
    
    // Check if it's possible to make the grid uni-value
    for (let num of nums) {
        if (num % x !== mod) return -1;
    }
    
    let median = nums[Math.floor(nums.length / 2)]; // Find the median
    let operations = 0;
    
    for (let num of nums) {
        operations += Math.abs(num - median) / x; // Compute steps to median
    }
    
    return operations;
};

console.log("==========================================")

// 2780. Minimum Index of a Valid Split
// Medium
// An element x of an integer array arr of length m is dominant if more than half the elements of arr have a value of x.
// You are given a 0-indexed integer array nums of length n with one dominant element.
// You can split nums at an index i into two arrays nums[0, ..., i] and nums[i + 1, ..., n - 1], but the split is only valid if:
// 0 <= i < n - 1
// nums[0, ..., i], and nums[i + 1, ..., n - 1] have the same dominant element.
// Here, nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j, both ends being inclusive. 
// Particularly, if j < i then nums[i, ..., j] denotes an empty subarray.
// Return the minimum index of a valid split. If no valid split exists, return -1.

// Example 1:
// Input: nums = [1,2,2,2]
// Output: 2
// Explanation: We can split the array at index 2 to obtain arrays [1,2,2] and [2]. 
// In array [1,2,2], element 2 is dominant since it occurs twice in the array and 2 * 2 > 3. 
// In array [2], element 2 is dominant since it occurs once in the array and 1 * 2 > 1.
// Both [1,2,2] and [2] have the same dominant element as nums, so this is a valid split. 
// It can be shown that index 2 is the minimum index of a valid split. 

// Example 2:
// Input: nums = [2,1,3,1,1,1,7,1,2,1]
// Output: 4
// Explanation: We can split the array at index 4 to obtain arrays [2,1,3,1,1] and [1,7,1,2,1].
// In array [2,1,3,1,1], element 1 is dominant since it occurs thrice in the array and 3 * 2 > 5.
// In array [1,7,1,2,1], element 1 is dominant since it occurs thrice in the array and 3 * 2 > 5.
// Both [2,1,3,1,1] and [1,7,1,2,1] have the same dominant element as nums, so this is a valid split.
// It can be shown that index 4 is the minimum index of a valid split.

// Example 3:
// Input: nums = [3,3,3,3,7,2,2]
// Output: -1
// Explanation: It can be shown that there is no valid split.

// @param {number[]} nums
// @return {number}

var minimumIndex = function(nums) {
    const n = nums.length;
    
    // Step 1: Find the dominant element
    let countMap = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    let dominant = -1;
    let maxCount = 0;
    for (let [num, count] of countMap) {
        if (count * 2 > n) {
            dominant = num;
            maxCount = count;
            break;
        }
    }
    
    if (dominant === -1) return -1; // No dominant element found
    
    // Step 2: Find the minimum valid split
    let leftCount = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === dominant) leftCount++;
        let rightCount = maxCount - leftCount;
        
        if (leftCount * 2 > (i + 1) && rightCount * 2 > (n - i - 1)) {
            return i;
        }
    }
    
    return -1;
};
console.log("==========================================")

// 2503. Maximum Number of Points From Grid Queries
// Hard
// You are given an m x n integer matrix grid and an array queries of size k.
// Find an array answer of size k such that for each integer queries[i] you start in the top left cell of the matrix and repeat the following process:
// If queries[i] is strictly greater than the value of the current cell that you are in, 
// then you get one point if it is your first time visiting this cell, and you can move to any adjacent cell in all 4 directions: up, down, left, and right.
// Otherwise, you do not get any points, and you end this process.
// After the process, answer[i] is the maximum number of points you can get. Note that for each query you are allowed to visit the same cell multiple times.
// Return the resulting array answer.

// Example 1:
// Input: grid = [[1,2,3],[2,5,7],[3,5,1]], queries = [5,6,2]
// Output: [5,8,1]
// Explanation: The diagrams above show which cells we visit to get points for each query.

// Example 2:
// Input: grid = [[5,2,1],[1,1,2]], queries = [3]
// Output: [0]
// Explanation: We can not get any points because the value of the top left cell is already greater than or equal to 3.

// @param {number[][]} grid
// @param {number[]} queries
// @return {number[]}

var maxPoints = function(grid, queries) {
    const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const m = grid.length, n = grid[0].length;
    const querySize = queries.length;
    const answers = new Array(querySize).fill(0);

    // Convert queries into an array of objects (index, value) and sort by value
    let indexedQueries = queries.map((query, i) => ({ index: i, value: query }));
    indexedQueries.sort((a, b) => a.value - b.value);

    let minHeap = new MinHeap();
    minHeap.push([grid[0][0], 0, 0]); // (grid[i][j], i, j)
    let seen = new Set(["0,0"]);
    let accumulate = 0;

    for (let { index, value } of indexedQueries) {
        while (!minHeap.isEmpty()) {
            let [val, i, j] = minHeap.peek();
            if (val >= value) break; // Stop if the smallest neighbor is still larger

            minHeap.pop();
            accumulate++;

            for (let [dx, dy] of DIRS) {
                let x = i + dx, y = j + dy;
                if (x < 0 || x >= m || y < 0 || y >= n || seen.has(`${x},${y}`)) continue;
                
                minHeap.push([grid[x][y], x, y]);
                seen.add(`${x},${y}`);
            }
        }
        answers[index] = accumulate;
    }

    return answers;
};

// Optimized MinHeap (Priority Queue)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx][0] <= this.heap[idx][0]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < this.heap.length && this.heap[leftIdx][0] < this.heap[smallest][0]) {
                smallest = leftIdx;
            }
            if (rightIdx < this.heap.length && this.heap[rightIdx][0] < this.heap[smallest][0]) {
                smallest = rightIdx;
            }
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}


console.log("==========================================")

// 2818. Apply Operations to Maximize Score
// Hard
// You are given an array nums of n positive integers and an integer k.
// Initially, you start with a score of 1. You have to maximize your score by applying the following operation at most k times:
// Choose any non-empty subarray nums[l, ..., r] that you haven't chosen previously.
// Choose an element x of nums[l, ..., r] with the highest prime score. If multiple such elements exist, choose the one with the smallest index.
// Multiply your score by x.
// Here, nums[l, ..., r] denotes the subarray of nums starting at index l and ending at the index r, both ends being inclusive.
// The prime score of an integer x is equal to the number of distinct prime factors of x. For example, the prime score of 300 is 3 since 300 = 2 * 2 * 3 * 5 * 5.
// Return the maximum possible score after applying at most k operations.
// Since the answer may be large, return it modulo 109 + 7.

// Example 1:
// Input: nums = [8,3,9,3,8], k = 2
// Output: 81
// Explanation: To get a score of 81, we can apply the following operations:
// - Choose subarray nums[2, ..., 2]. nums[2] is the only element in this subarray. Hence, we multiply the score by nums[2]. The score becomes 1 * 9 = 9.
// - Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 1, but nums[2] has the smaller index. 
// Hence, we multiply the score by nums[2]. The score becomes 9 * 9 = 81.
// It can be proven that 81 is the highest score one can obtain.

// Example 2:
// Input: nums = [19,12,14,6,10,18], k = 3
// Output: 4788
// Explanation: To get a score of 4788, we can apply the following operations: 
// - Choose subarray nums[0, ..., 0]. nums[0] is the only element in this subarray. Hence, we multiply the score by nums[0]. The score becomes 1 * 19 = 19.
// - Choose subarray nums[5, ..., 5]. nums[5] is the only element in this subarray. Hence, we multiply the score by nums[5]. The score becomes 19 * 18 = 342.
// - Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 2, but nums[2] has the smaller index. 
// Hence, we multipy the score by nums[2]. The score becomes 342 * 14 = 4788.
// It can be proven that 4788 is the highest score one can obtain.

// @param {number[]} nums
// @param {number} k
// @return {number}
// in SWIFT
// class Solution {
//     func maximumScore(_ nums: [Int], _ k: Int) -> Int {
//         let MOD = 1_000_000_007
//         var k = k  // Make a mutable copy of k
//         let n = nums.count
//         var upper = nums.max()! + 1
//         var prime = [Bool](repeating: true, count: upper)
//         prime[0] = false
//         prime[1] = false
//         var primeScore = [Int](repeating: 0, count: upper)
//         for i in 2..<upper {
//             if prime[i] {
//                 var j = i
//                 while j < upper {
//                     primeScore[j] += 1
//                     prime[j] = false
//                     j += i
//                 }
//             }
//         }
//         var nextGreaterElement = [Int](repeating: n, count: n)
//         var s = [Int]()
//         for i in (0..<n).reversed() {
//             while !s.isEmpty && primeScore[nums[i]] >= primeScore[nums[s.last!]] {
//                 s.popLast()
//             }
//             nextGreaterElement[i] = s.isEmpty ? n : s.last!
//             s.append(i)
//         }
//         var prevGreaterOrEqualElement = [Int](repeating: -1, count: n)
//         s.removeAll()
//         for i in 0..<n {
//             while !s.isEmpty && primeScore[nums[i]] > primeScore[nums[s.last!]] {
//                 s.popLast()
//             }
//             prevGreaterOrEqualElement[i] = s.isEmpty ? -1 : s.last!
//             s.append(i)
//         }
//         var res = 1
//         var tuples = [(num: Int, index: Int)]()
//         for i in 0..<n {
//             tuples.append((nums[i], i))
//         }
//         tuples.sort { a, b in
//             a.num > b.num
//         }
//         for (num, i) in tuples {
//             let operations = min(
//                 (i - prevGreaterOrEqualElement[i]) * (nextGreaterElement[i] - i), k)
//             res = (res * pow(num, operations, MOD)) % MOD
//             k -= operations
//             if k == 0 {
//                 return res
//             }
//         }
//         return res
//     }
//     func pow(_ x: Int, _ n: Int, _ mod: Int) -> Int {
//         var res = 1
//         var x = x
//         var n = n
//         while n > 0 {
//             if n % 2 == 1 {
//                 res = (res * x) % mod
//             }
//             x = (x * x) % mod
//             n /= 2
//         }
//         return res
//     }
// }


console.log("==========================================")

// 763. Partition Labels
// Medium
// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. 
// For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.

// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]

// @param {string} s
// @return {number[]}

var partitionLabels = function(s) {
    let lastIndex = {};
    
    // Store the last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    
    let result = [];
    let start = 0, end = 0;
    
    // Traverse the string and determine partition sizes
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);
        
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    
    return result;
};


console.log("==========================================")

// 2551. Put Marbles in Bags
// Hard
// You have k bags. You are given a 0-indexed integer array weights where weights[i] is the weight of the ith marble. You are also given the integer k.
// Divide the marbles into the k bags according to the following rules:
// No bag is empty.
// If the ith marble and jth marble are in a bag, then all marbles with an index between the ith and jth indices should also be in that same bag.
// If a bag consists of all the marbles with an index from i to j inclusively, then the cost of the bag is weights[i] + weights[j].
// The score after distributing the marbles is the sum of the costs of all the k bags.
// Return the difference between the maximum and minimum scores among marble distributions.

// Example 1:
// Input: weights = [1,3,5,1], k = 2
// Output: 4
// Explanation: 
// The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6. 
// The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10. 
// Thus, we return their difference 10 - 6 = 4.

// Example 2:
// Input: weights = [1, 3], k = 2
// Output: 0
// Explanation: The only distribution possible is [1],[3]. 
// Since both the maximal and minimal score are the same, we return 0.
 
// @param {number[]} weights
// @param {number} k
// @return {number}

var putMarbles = function(weights, k) {
    let n = weights.length;
    if (k === 1) return 0;
    
    let pairSums = [];
    for (let i = 0; i < n - 1; i++) {
        pairSums.push(weights[i] + weights[i + 1]);
    }
    
    pairSums.sort((a, b) => a - b);
    
    let maxSum = 0, minSum = 0;
    for (let i = 0; i < k - 1; i++) {
        minSum += pairSums[i];
        maxSum += pairSums[n - 2 - i];
    }
    
    return maxSum - minSum;
};

console.log("==========================================")

// 2873. Maximum Value of an Ordered Triplet I
// Easy
// You are given a 0-indexed integer array nums.
// Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

// Example 1:
// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77. 

// Example 2:
// Input: nums = [1,10,3,4,19]
// Output: 133
// Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
// It can be shown that there are no ordered triplets of indices with a value greater than 133.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0
// Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0.

// @param {number[]} nums
// @return {number}

var maximumTripletValue = function(nums) {
    let maxVal = 0;
    let n = nums.length;

    for (let j = 1; j < n - 1; j++) {
        let maxLeft = -Infinity; // Max nums[i] for i < j
        let maxRight = -Infinity; // Max nums[k] for k > j

        for (let i = 0; i < j; i++) {
            maxLeft = Math.max(maxLeft, nums[i]);
        }

        for (let k = j + 1; k < n; k++) {
            maxRight = Math.max(maxRight, nums[k]);
            let value = (maxLeft - nums[j]) * maxRight;
            maxVal = Math.max(maxVal, value);
        }
    }

    return maxVal;
};

console.log("==========================================")

// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// @param {number[]} nums
// @param {number} target
// @return {number[]}

var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; // This case won't happen as per the problem statement.
};

console.log("==========================================")

// 2874. Maximum Value of an Ordered Triplet II
// Medium
// You are given a 0-indexed integer array nums.
// Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

// Example 1:
// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77. 

// Example 2:
// Input: nums = [1,10,3,4,19]
// Output: 133
// Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
// It can be shown that there are no ordered triplets of indices with a value greater than 133.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0
// Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0.

// @param {number[]} nums
// @return {number}

var maximumTripletValue = function(nums) {
    let n = nums.length;
    if (n < 3) return 0; // Edge case, not enough elements

    let maxPrefix = nums[0]; // max value of nums[i] before j
    let maxDiff = Number.NEGATIVE_INFINITY; // max (nums[i] - nums[j])
    let maxSuffix = new Array(n).fill(0); // max nums[k] after j

    // Build suffix max array
    maxSuffix[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxSuffix[i] = Math.max(maxSuffix[i + 1], nums[i]);
    }

    let maxValue = 0;

    // Iterate over j (middle element)
    for (let j = 1; j < n - 1; j++) {
        maxDiff = Math.max(maxDiff, maxPrefix - nums[j]);
        maxPrefix = Math.max(maxPrefix, nums[j]);

        let bestK = maxSuffix[j + 1]; // Best nums[k] after j
        maxValue = Math.max(maxValue, maxDiff * bestK);
    }

    return maxValue;
};


console.log("==========================================")

// 1123. Lowest Common Ancestor of Deepest Leaves
// Medium
// Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.
// Recall that:
// The node of a binary tree is a leaf if and only if it has no children
// The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
// The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4]
// Output: [2,7,4]
// Explanation: We return the node with value 2, colored in yellow in the diagram.
// The nodes coloured in blue are the deepest leaf-nodes of the tree.
// Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.

// Example 2:
// Input: root = [1]
// Output: [1]
// Explanation: The root is the deepest node in the tree, and it's the lca of itself.

// Example 3:
// Input: root = [0,1,3,null,2]
// Output: [2]
// Explanation: The deepest leaf node in the tree is 2, the lca of one node is itself.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {TreeNode}

var lcaDeepestLeaves = function(root) {
    function dfs(node) {
        if (!node) return [0, null]; // Base case: depth 0, no LCA
        
        let [leftDepth, leftLCA] = dfs(node.left);
        let [rightDepth, rightLCA] = dfs(node.right);
        
        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node]; // Current node is LCA of deepest leaves
        } else if (leftDepth > rightDepth) {
            return [leftDepth + 1, leftLCA]; // Deeper subtree LCA is propagated
        } else {
            return [rightDepth + 1, rightLCA];
        }
    }

    return dfs(root)[1]; // Return the LCA node
};

console.log("==========================================")

// 2. Add Two Numbers
// Medium
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);  // Dummy node to simplify result list management
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};
console.log("==========================================")

// 368. Largest Divisible Subset
// Medium
// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.

// Example 2:
// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]
 
// @param {number[]} nums
// @return {number[]}

var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) return [];

    nums.sort((a, b) => a - b); // Step 1: Sort

    const dp = new Array(nums.length).fill(1);     // Step 2: Subset lengths
    const prev = new Array(nums.length).fill(-1);  // Step 3: Backtracking

    let maxIdx = 0;

    // Step 4: Build dp and prev arrays
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIdx]) {
            maxIdx = i;
        }
    }

    // Step 5: Reconstruct the subset
    const result = [];
    let k = maxIdx;
    while (k >= 0) {
        result.push(nums[k]);
        k = prev[k];
    }

    return result.reverse(); // Subset in increasing order
};


console.log("==========================================")

// 416. Partition Equal Subset Sum
// Medium
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// @param {number[]} nums
// @return {boolean}

var canPartition = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    
    // If total sum is odd, we can't partition into equal subsets
    if (total % 2 !== 0) return false;

    const target = total / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // base case: sum 0 is always possible

    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[target];
};

console.log("==========================================")

// 3396. Minimum Number of Operations to Make Elements in Array Distinct
// Easy
// You are given an integer array nums. You need to ensure that the elements in the array are distinct. To achieve this, 
// you can perform the following operation any number of times:
// Remove 3 elements from the beginning of the array. If the array has fewer than 3 elements, remove all remaining elements.
// Note that an empty array is considered to have distinct elements. 
// Return the minimum number of operations needed to make the elements in the array distinct.

// Example 1:
// Input: nums = [1,2,3,4,2,3,3,5,7]
// Output: 2
// Explanation:
// In the first operation, the first 3 elements are removed, resulting in the array [4, 2, 3, 3, 5, 7].
// In the second operation, the next 3 elements are removed, resulting in the array [3, 5, 7], which has distinct elements.
// Therefore, the answer is 2.

// Example 2:
// Input: nums = [4,5,6,4,4]
// Output: 2
// Explanation:
// In the first operation, the first 3 elements are removed, resulting in the array [4, 4].
// In the second operation, all remaining elements are removed, resulting in an empty array.
// Therefore, the answer is 2.

// Example 3:
// Input: nums = [6,7,8,9]
// Output: 0
// Explanation:
// The array already contains distinct elements. Therefore, the answer is 0.

// @param {number[]} nums
// @return {number}

var minimumOperations = function(nums) {
    let seen = new Set();
    let i = nums.length - 1;

    // Move backwards until we find a duplicate
    while (i >= 0) {
        if (seen.has(nums[i])) {
            break;
        }
        seen.add(nums[i]);
        i--;
    }

    // i + 1 is the length of prefix to remove
    let toRemove = i + 1;

    // Number of operations: ceil(toRemove / 3)
    return Math.ceil(toRemove / 3);
};

console.log("==========================================")

// 3375. Minimum Operations to Make Array Values Equal to K
// Easy
// You are given an integer array nums and an integer k.
// An integer h is called valid if all values in the array that are strictly greater than h are identical.
// For example, if nums = [10, 8, 10, 8], a valid integer is h = 9 because all nums[i] > 9 are equal to 10, but 5 is not a valid integer.
// You are allowed to perform the following operation on nums:
// Select an integer h that is valid for the current values in nums.
// For each index i where nums[i] > h, set nums[i] to h.
// Return the minimum number of operations required to make every element in nums equal to k. If it is impossible to make all elements equal to k, return -1.

// Example 1:
// Input: nums = [5,2,5,4,5], k = 2
// Output: 2
// Explanation:
// The operations can be performed in order using valid integers 4 and then 2.

// Example 2:
// Input: nums = [2,1,2], k = 2
// Output: -1
// Explanation:
// It is impossible to make all the values equal to 2.

// Example 3:
// Input: nums = [9,7,5,3], k = 1
// Output: 4
// Explanation:
// The operations can be performed using valid integers in the order 7, 5, 3, and 1.

// @param {number[]} nums
// @param {number} k
// @return {number}

var minOperations = function(nums, k) {
    // If any number is less than k, it's impossible to make everything equal to k
    for (let num of nums) {
        if (num < k) return -1;
    }

    // Use a set to collect unique numbers greater than k
    let unique = new Set();
    for (let num of nums) {
        if (num > k) unique.add(num);
    }

    return unique.size;
};

console.log("==========================================")

// 2999. Count the Number of Powerful Integers
// Hard
// You are given three integers start, finish, and limit. You are also given a 0-indexed string s representing a positive integer.
// A positive integer x is called powerful if it ends with s (in other words, s is a suffix of x) and each digit in x is at most limit.
// Return the total number of powerful integers in the range [start..finish].
// A string x is a suffix of a string y if and only if x is a substring of y that starts from some index (including 0) in y and extends to the index y.length - 1. 
// For example, 25 is a suffix of 5125 whereas 512 is not.

// Example 1:
// Input: start = 1, finish = 6000, limit = 4, s = "124"
// Output: 5
// Explanation: The powerful integers in the range [1..6000] are 124, 1124, 2124, 3124, and, 4124. 
// All these integers have each digit <= 4, and "124" as a suffix. Note that 5124 is not a powerful integer because the first digit is 5 which is greater than 4.
// It can be shown that there are only 5 powerful integers in this range.

// Example 2:
// Input: start = 15, finish = 215, limit = 6, s = "10"
// Output: 2
// Explanation: The powerful integers in the range [15..215] are 110 and 210. All these integers have each digit <= 6, and "10" as a suffix.
// It can be shown that there are only 2 powerful integers in this range.

// Example 3:
// Input: start = 1000, finish = 2000, limit = 4, s = "3000"
// Output: 0
// Explanation: All integers in the range [1000..2000] are smaller than 3000, hence "3000" cannot be a suffix of any integer in this range.

// @param {number} start
// @param {number} finish
// @param {number} limit
// @param {string} s
// @return {number}

function numberOfPowerfulInt(start, finish, limit, s) {
    let t = (start - 1).toString();
    let f = Array(20).fill(-1);

    const dfs = (pos, lim) => {
        if (t.length < s.length) {
            return 0;
        }
        if (!lim && f[pos] !== -1) {
            return f[pos];
        }
        if (t.length - pos === s.length) {
            if (lim) {
                return s <= t.substring(pos) ? 1 : 0;
            }
            return 1;
        }

        let ans = 0;
        const up = Math.min(lim ? +t[pos] : 9, limit);
        for (let i = 0; i <= up; i++) {
            ans += dfs(pos + 1, lim && i === +t[pos]);
        }

        if (!lim) {
            f[pos] = ans;
        }
        return ans;
    };

    const a = dfs(0, true);
    t = finish.toString();
    f = Array(20).fill(-1);
    const b = dfs(0, true);

    return b - a;
}


console.log("==========================================")

// 2843. Count Symmetric Integers
// Easy
// You are given two positive integers low and high.
// An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. 
// Numbers with an odd number of digits are never symmetric.
// Return the number of symmetric integers in the range [low, high].

// Example 1:
// Input: low = 1, high = 100
// Output: 9
// Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.

// Example 2:
// Input: low = 1200, high = 1230
// Output: 4
// Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.

// @param {number} low
// @param {number} high
// @return {number}

var countSymmetricIntegers = function(low, high) {
    let count = 0;

    for (let num = low; num <= high; num++) {
        const str = num.toString();
        const len = str.length;

        if (len % 2 !== 0) continue; // Skip odd-length numbers

        const mid = len / 2;
        const firstHalfSum = [...str.slice(0, mid)].reduce((a, b) => a + parseInt(b), 0);
        const secondHalfSum = [...str.slice(mid)].reduce((a, b) => a + parseInt(b), 0);

        if (firstHalfSum === secondHalfSum) {
            count++;
        }
    }

    return count;
};

console.log("==========================================")

// 3272. Find the Count of Good Integers
// Hard
// You are given two positive integers n and k.
// An integer x is called k-palindromic if:
// x is a palindrome.
// x is divisible by k.
// An integer is called good if its digits can be rearranged to form a k-palindromic integer. 
// For example, for k = 2, 2020 can be rearranged to form the k-palindromic integer 2002, whereas 1010 cannot be rearranged to form a k-palindromic integer.
// Return the count of good integers containing n digits.
// Note that any integer must not have leading zeros, neither before nor after rearrangement. For example, 1010 cannot be rearranged to form 101.

// Example 1:
// Input: n = 3, k = 5
// Output: 27
// Explanation:
// Some of the good integers are:
// 551 because it can be rearranged to form 515.
// 525 because it is already k-palindromic.

// Example 2:
// Input: n = 1, k = 4
// Output: 2
// Explanation:
// The two good integers are 4 and 8.

// Example 3:
// Input: n = 5, k = 6
// Output: 2468

// @param {number} n
// @param {number} k
// @return {number}

var countGoodIntegers = function(n, k) {
    const factorial = Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    const isPalindrome = (s) => s === s.split('').reverse().join('');
    const getDigitFreqKey = (s) => {
        const freq = Array(10).fill(0);
        for (let ch of s) freq[+ch]++;
        return freq.join(',');
    };

    // Generate all n-digit palindromes
    const palindromes = new Set();
    const halfLen = Math.floor((n + 1) / 2);
    const start = 10 ** (halfLen - 1);
    const end = 10 ** halfLen - 1;

    for (let i = start; i <= end; i++) {
        let half = i.toString();
        let full = n % 2 === 0
            ? half + half.split('').reverse().join('')
            : half + half.slice(0, -1).split('').reverse().join('');
        let num = parseInt(full);
        if (num % k === 0) {
            palindromes.add(getDigitFreqKey(full));
        }
    }

    // Count permutations with valid digit frequencies
    const countPermutations = (freqStr) => {
        const freq = freqStr.split(',').map(Number);
        const total = freq.reduce((a, b) => a + b, 0);
        let count = factorial[total];
        for (let f of freq) {
            if (f > 1) count /= factorial[f];
        }

        // Remove permutations that start with 0
        if (freq[0] === 0) return count;

        // Subtract permutations where '0' is at the front
        let zeroFront = 0;
        if (freq[0] > 0) {
            freq[0]--;
            let subTotal = total - 1;
            zeroFront = factorial[subTotal];
            for (let f of freq) {
                if (f > 1) zeroFront /= factorial[f];
            }
            freq[0]++; // Restore
        }
        return count - zeroFront;
    };

    let result = 0;
    for (let key of palindromes) {
        result += countPermutations(key);
    }
    return result;
};

console.log("==========================================")

// 1922. Count Good Numbers
// Medium
// A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
// For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. 
// However, "3245" is not good because 3 is at an even index but is not even.
// Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.
// A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

// Example 1:
// Input: n = 1
// Output: 5
// Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".

// Example 2:
// Input: n = 4
// Output: 400

// Example 3:
// Input: n = 50
// Output: 564908303

// @param {number} n
// @return {number}

var countGoodNumbers = function(n) {
    const MOD = 1_000_000_007n;
    
    const modPow = (base, exponent) => {
        let result = 1n;
        base = BigInt(base);
        exponent = BigInt(exponent);
        
        while (exponent > 0) {
            if (exponent % 2n === 1n) {
                result = (result * base) % MOD;
            }
            base = (base * base) % MOD;
            exponent = exponent / 2n;
        }
        return result;
    };

    let evenCount = Math.ceil(n / 2);
    let oddCount = Math.floor(n / 2);

    let result = (modPow(5, evenCount) * modPow(4, oddCount)) % MOD;
    return Number(result);
};


console.log("==========================================")

// 1534. Count Good Triplets

// Easy

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.
// Return the number of good triplets.

// Example 1:
// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

// Example 2:
// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.

// @param {number[]} arr
// @param {number} a
// @param {number} b
// @param {number} c
// @return {number}

var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue;

            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    count++;
                }
            }
        }
    }

    return count;
};

console.log("==========================================")

// 2179. Count Good Triplets in an Array
// Hard
// You are given two 0-indexed arrays nums1 and nums2 of length n, both of which are permutations of [0, 1, ..., n - 1].
// A good triplet is a set of 3 distinct values which are present in increasing order by position both in nums1 and nums2. In other words, 
// if we consider pos1v as the index of the value v in nums1 and pos2v as the index of the value v in nums2, 
// then a good triplet will be a set (x, y, z) where 0 <= x, y, z <= n - 1, such that pos1x < pos1y < pos1z and pos2x < pos2y < pos2z.
// Return the total number of good triplets.

// Example 1:
// Input: nums1 = [2,0,1,3], nums2 = [0,1,2,3]
// Output: 1
// Explanation: 
// There are 4 triplets (x,y,z) such that pos1x < pos1y < pos1z. They are (2,0,1), (2,0,3), (2,1,3), and (0,1,3). 
// Out of those triplets, only the triplet (0,1,3) satisfies pos2x < pos2y < pos2z. Hence, there is only 1 good triplet.

// Example 2:
// Input: nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]
// Output: 4
// Explanation: The 4 good triplets are (4,0,3), (4,0,2), (4,1,3), and (4,1,2).

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number}

class BIT {
    constructor(n) {
        this.tree = new Array(n + 1).fill(0);
        this.n = n;
    }

    update(i, delta) {
        i += 1;
        while (i <= this.n) {
            this.tree[i] += delta;
            i += i & -i;
        }
    }

    query(i) {
        i += 1;
        let sum = 0;
        while (i > 0) {
            sum += this.tree[i];
            i -= i & -i;
        }
        return sum;
    }
}

var goodTriplets = function(nums1, nums2) {
    const n = nums1.length;
    const pos2 = Array(n);
    for (let i = 0; i < n; i++) {
        pos2[nums2[i]] = i;
    }

    // Map nums1 to their corresponding pos2 positions
    const mapped = nums1.map(x => pos2[x]);

    // BIT for prefix counts (left counts)
    const bitLeft = new BIT(n);
    const leftSmaller = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        leftSmaller[i] = bitLeft.query(mapped[i] - 1);
        bitLeft.update(mapped[i], 1);
    }

    // BIT for suffix counts (right counts)
    const bitRight = new BIT(n);
    const rightGreater = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        rightGreater[i] = bitRight.query(n - 1) - bitRight.query(mapped[i]);
        bitRight.update(mapped[i], 1);
    }

    // Count good triplets
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += leftSmaller[i] * rightGreater[i];
    }

    return count;
};


console.log("==========================================")

// 2537. Count the Number of Good Subarrays
// Medium
// Given an integer array nums and an integer k, return the number of good subarrays of nums.
// A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1,1,1], k = 10
// Output: 1
// Explanation: The only good subarray is the array nums itself.

// Example 2:
// Input: nums = [3,1,4,3,2,2,4], k = 2
// Output: 4
// Explanation: There are 4 different good subarrays:
// - [3,1,4,3,2,2] that has 2 pairs.
// - [3,1,4,3,2,2,4] that has 3 pairs.
// - [1,4,3,2,2,4] that has 2 pairs.
// - [4,3,2,2,4] that has 2 pairs.

// @param {number[]} nums
// @param {number} k
// @return {number}

var countGood = function(nums, k) {
    let left = 0;
    let freq = new Map();
    let pairCount = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        let num = nums[right];
        let count = freq.get(num) || 0;
        pairCount += count;
        freq.set(num, count + 1);

        while (pairCount >= k) {
            result += nums.length - right;
            let leftNum = nums[left];
            let leftCount = freq.get(leftNum);
            pairCount -= leftCount - 1;
            if (leftCount === 1) {
                freq.delete(leftNum);
            } else {
                freq.set(leftNum, leftCount - 1);
            }
            left++;
        }
    }

    return result;
};

console.log("==========================================")

// 2176. Count Equal and Divisible Pairs in an Array
// Easy
// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) 
// where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

// Example 1:
// Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

// Example 2:
// Input: nums = [1,2,3,4], k = 1
// Output: 0
// Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.

// @param {number[]} nums
// @param {number} k
// @return {number}

var countPairs = function(nums, k) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                count++;
            }
        }
    }
    
    return count;
};


console.log("==========================================")

// 38. Count and Say
// Medium
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the run-length encoding of countAndSay(n - 1).
// Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters 
// (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters 
// (length of the run). For example, to compress the string "3322251" we replace "33" with "23", 
// replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".
// Given a positive integer n, return the nth element of the count-and-say sequence.

// Example 1:
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"

// Example 2:
// Input: n = 1
// Output: "1"
// Explanation:
// This is the base case.

// @param {number} n
// @return {string}

var countAndSay = function(n) {
    if (n === 1) return "1";

    let result = "1";
    
    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                temp += count.toString() + result[j - 1];
                count = 1;
            }
        }

        temp += count.toString() + result[result.length - 1];
        result = temp;
    }

    return result;
};


console.log("==========================================")

// 2622. Cache With Time Limit
// Medium
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. 
// The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.

// Example 1:
// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.

// Example 2:
// Input: 
// actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// timeDelays = [0, 0, 40, 50, 120, 200, 250]
// Output: [null, false, true, 50, 50, -1, 0]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
// At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
// At t=50, get(1) is called which returned 50.
// At t=120, get(1) is called which returned 50.
// At t=140, key=1 expires.
// At t=200, get(1) is called but the cache is empty so -1 is returned.
// At t=250, count() returns 0 because the cache is empty.

var TimeLimitedCache = function() {
    this.cache = new Map();
};

// @param {number} key
// @param {number} value
// @param {number} duration time until expiration in ms
// @return {boolean} if un-expired key already existed

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const existed = this.cache.has(key) && this.cache.get(key).expiresAt > now;

    // Clear previous timeout if exists
    if (this.cache.has(key)) {
        clearTimeout(this.cache.get(key).timeoutId);
    }

    const expiresAt = now + duration;
    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, expiresAt, timeoutId });
    return existed;
};

// @param {number} key
// @return {number} value associated with key

TimeLimitedCache.prototype.get = function(key) {
    const entry = this.cache.get(key);
    if (!entry) return -1;

    const now = Date.now();
    if (entry.expiresAt > now) {
        return entry.value;
    } else {
        this.cache.delete(key);
        return -1;
    }
};

// @return {number} count of non-expired keys

TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let activeCount = 0;

    for (const [key, entry] of this.cache) {
        if (entry.expiresAt > now) {
            activeCount++;
        } else {
            this.cache.delete(key);
        }
    }

    return activeCount;
};

console.log("==========================================")

// 781. Rabbits in Forest
// Medium
// There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" 
// and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.
// Given the array answers, return the minimum number of rabbits that could be in the forest.

// Example 1:
// Input: answers = [1,1,2]
// Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit that answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Example 2:
// Input: answers = [10,10,10]
// Output: 11

// @param {number[]} answers
// @return {number}

var numRabbits = function(answers) {
    const countMap = new Map();
    
    // Count frequency of each answer
    for (let ans of answers) {
        countMap.set(ans, (countMap.get(ans) || 0) + 1);
    }
    
    let total = 0;
    
    for (let [k, count] of countMap.entries()) {
        const groupSize = k + 1;
        const groupCount = Math.ceil(count / groupSize);
        total += groupCount * groupSize;
    }
    
    return total;
};

console.log("==========================================")

// 2145. Count the Hidden Sequences
// Medium
// You are given a 0-indexed array of n integers differences, 
// which describes the differences between each pair of consecutive integers of a hidden sequence of length (n + 1). 
// More formally, call the hidden sequence hidden, then we have that differences[i] = hidden[i + 1] - hidden[i].
// You are further given two integers lower and upper that describe the inclusive range of values [lower, upper] that the hidden sequence can contain.
// For example, given differences = [1, -3, 4], lower = 1, upper = 6, the hidden sequence is a sequence of length 4 whose elements are in between 1 and 6 (inclusive).
// [3, 4, 1, 5] and [4, 5, 2, 6] are possible hidden sequences.
// [5, 6, 3, 7] is not possible since it contains an element greater than 6.
// [1, 2, 3, 4] is not possible since the differences are not correct.
// Return the number of possible hidden sequences there are. If there are no possible sequences, return 0.

// Example 1:
// Input: differences = [1,-3,4], lower = 1, upper = 6
// Output: 2
// Explanation: The possible hidden sequences are:
// - [3, 4, 1, 5]
// - [4, 5, 2, 6]
// Thus, we return 2.

// Example 2:
// Input: differences = [3,-4,5,1,-2], lower = -4, upper = 5
// Output: 4
// Explanation: The possible hidden sequences are:
// - [-3, 0, -4, 1, 2, 0]
// - [-2, 1, -3, 2, 3, 1]
// - [-1, 2, -2, 3, 4, 2]
// - [0, 3, -1, 4, 5, 3]
// Thus, we return 4.

// Example 3:
// Input: differences = [4,-7,2], lower = 3, upper = 6
// Output: 0
// Explanation: There are no possible hidden sequences. Thus, we return 0.

// @param {number[]} differences
// @param {number} lower
// @param {number} upper
// @return {number}

var numberOfArrays = function(differences, lower, upper) {
    let minSum = 0, maxSum = 0;
    let curr = 0;
    
    for (let diff of differences) {
        curr += diff;
        minSum = Math.min(minSum, curr);
        maxSum = Math.max(maxSum, curr);
    }
    
    let minX = lower - minSum;
    let maxX = upper - maxSum;
    
    return Math.max(0, maxX - minX + 1);
};

console.log("==========================================")

// 2338. Count the Number of Ideal Arrays
// Hard
// You are given two integers n and maxValue, which are used to describe an ideal array.
// A 0-indexed integer array arr of length n is considered ideal if the following conditions hold:
// Every arr[i] is a value from 1 to maxValue, for 0 <= i < n.
// Every arr[i] is divisible by arr[i - 1], for 0 < i < n.
// Return the number of distinct ideal arrays of length n. Since the answer may be very large, return it modulo 109 + 7.

// Example 1:
// Input: n = 2, maxValue = 5
// Output: 10
// Explanation: The following are the possible ideal arrays:
// - Arrays starting with the value 1 (5 arrays): [1,1], [1,2], [1,3], [1,4], [1,5]
// - Arrays starting with the value 2 (2 arrays): [2,2], [2,4]
// - Arrays starting with the value 3 (1 array): [3,3]
// - Arrays starting with the value 4 (1 array): [4,4]
// - Arrays starting with the value 5 (1 array): [5,5]
// There are a total of 5 + 2 + 1 + 1 + 1 = 10 distinct ideal arrays.

// Example 2:
// Input: n = 5, maxValue = 3
// Output: 11
// Explanation: The following are the possible ideal arrays:
// - Arrays starting with the value 1 (9 arrays): 
//    - With no other distinct values (1 array): [1,1,1,1,1] 
//    - With 2nd distinct value 2 (4 arrays): [1,1,1,1,2], [1,1,1,2,2], [1,1,2,2,2], [1,2,2,2,2]
//    - With 2nd distinct value 3 (4 arrays): [1,1,1,1,3], [1,1,1,3,3], [1,1,3,3,3], [1,3,3,3,3]
// - Arrays starting with the value 2 (1 array): [2,2,2,2,2]
// - Arrays starting with the value 3 (1 array): [3,3,3,3,3]
// There are a total of 9 + 1 + 1 = 11 distinct ideal arrays.
 
// @param {number} n
// @param {number} maxValue
// @return {number}

const MOD = 1e9 + 7;
const MAX_N = 10010;
const MAX_P = 15; // There are up to 15 prime factors
const c = Array.from({ length: MAX_N + MAX_P }, () => Array(MAX_P + 1).fill(0));
const sieve = Array(MAX_N).fill(0); // Minimum prime factor
const ps = Array.from({ length: MAX_N }, () => []); // List of prime factor counts

(function init() {
    // Initialize the sieve of Eratosthenes to find the smallest prime factor for each number
    for (let i = 2; i < MAX_N; i++) {
        if (sieve[i] === 0) {
            for (let j = i; j < MAX_N; j += i) {
                if (sieve[j] === 0) {
                    sieve[j] = i;
                }
            }
        }
    }

    // Precompute prime factorizations for all numbers
    for (let i = 2; i < MAX_N; i++) {
        let x = i;
        while (x > 1) {
            const p = sieve[x];
            let cnt = 0;
            while (x % p === 0) {
                x = Math.floor(x / p);
                cnt++;
            }
            ps[i].push(cnt);
        }
    }

    // Precompute binomial coefficients C(n,k)
    c[0][0] = 1;
    for (let i = 1; i < MAX_N + MAX_P; i++) {
        c[i][0] = 1;
        for (let j = 1; j <= Math.min(i, MAX_P); j++) {
            c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % MOD;
        }
    }
})();

var idealArrays = function (n, maxValue) {
    let ans = 0n;
    
    // For each possible value x from 1 to maxValue
    for (let x = 1; x <= maxValue; x++) {
        let mul = 1n;
        
        // For each prime factor in x's prime factorization
        for (const p of ps[x]) {
            // Calculate binomial coefficient C(n+p-1,p) for this prime factor
            mul = (mul * BigInt(c[n + p - 1][p])) % BigInt(MOD);
        }
        
        // Add to our total count
        ans = (ans + mul) % BigInt(MOD);
    }
    
    return Number(ans);
};



console.log("==========================================")

// 1399. Count Largest Group
// Easy
// You are given an integer n.
// Each number from 1 to n is grouped according to the sum of its digits.
// Return the number of groups that have the largest size.

// Example 1:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.

// Example 2:
// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

// @param {number} n
// @return {number}

var countLargestGroup = function(n) {
    const map = new Map();

    for (let i = 1; i <= n; i++) {
        const sum = digitSum(i);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    let maxSize = 0;
    for (const size of map.values()) {
        if (size > maxSize) {
            maxSize = size;
        }
    }

    let count = 0;
    for (const size of map.values()) {
        if (size === maxSize) {
            count++;
        }
    }

    return count;
};

function digitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log("==========================================")

// 2799. Count Complete Subarrays in an Array
// Medium
// You are given an array nums consisting of positive integers.
// We call a subarray of an array complete if the following condition is satisfied:
// The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
// Return the number of complete subarrays.
// A subarray is a contiguous non-empty part of an array.

// Example 1:
// Input: nums = [1,3,1,2,2]
// Output: 4
// Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

// Example 2:
// Input: nums = [5,5,5,5]
// Output: 10
// Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.

// @param {number[]} nums
// @return {number}

var countCompleteSubarrays = function(nums) {
    const totalUnique = new Set(nums).size;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const seen = new Set();
        for (let j = i; j < nums.length; j++) {
            seen.add(nums[j]);
            if (seen.size === totalUnique) {
                count++;
            }
        }
    }

    return count;
};

console.log("==========================================")

// 2845. Count of Interesting Subarrays
// Medium
// You are given a 0-indexed integer array nums, an integer modulo, and an integer k.
// Your task is to find the count of subarrays that are interesting.
// A subarray nums[l..r] is interesting if the following condition holds:
// Let cnt be the number of indices i in the range [l, r] such that nums[i] % modulo == k. Then, cnt % modulo == k.
// Return an integer denoting the count of interesting subarrays.
// Note: A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [3,2,4], modulo = 2, k = 1
// Output: 3
// Explanation: In this example the interesting subarrays are: 
// The subarray nums[0..0] which is [3]. 
// - There is only one index, i = 0, in the range [0, 0] that satisfies nums[i] % modulo == k. 
// - Hence, cnt = 1 and cnt % modulo == k.  
// The subarray nums[0..1] which is [3,2].
// - There is only one index, i = 0, in the range [0, 1] that satisfies nums[i] % modulo == k.  
// - Hence, cnt = 1 and cnt % modulo == k.
// The subarray nums[0..2] which is [3,2,4]. 
// - There is only one index, i = 0, in the range [0, 2] that satisfies nums[i] % modulo == k. 
// - Hence, cnt = 1 and cnt % modulo == k. 
// It can be shown that there are no other interesting subarrays. So, the answer is 3.

// Example 2:
// Input: nums = [3,1,9,6], modulo = 3, k = 0
// Output: 2
// Explanation: In this example the interesting subarrays are: 
// The subarray nums[0..3] which is [3,1,9,6]. 
// - There are three indices, i = 0, 2, 3, in the range [0, 3] that satisfy nums[i] % modulo == k. 
// - Hence, cnt = 3 and cnt % modulo == k. 
// The subarray nums[1..1] which is [1]. 
// - There is no index, i, in the range [1, 1] that satisfies nums[i] % modulo == k. 
// - Hence, cnt = 0 and cnt % modulo == k. 
// It can be shown that there are no other interesting subarrays. So, the answer is 2.

// @param {number[]} nums
// @param {number} modulo
// @param {number} k
// @return {number}

var countInterestingSubarrays = function(nums, modulo, k) {
    let count = 0;
    let prefix = 0;
    const map = new Map();
    map.set(0, 1); // Initialize with prefix mod 0 having occurred once

    for (let num of nums) {
        // Check if current element contributes to the count
        if (num % modulo === k) {
            prefix += 1;
        }

        // Get the current prefix mod
        let currMod = prefix % modulo;

        // We're looking for (currMod - k + modulo) % modulo in the map
        let target = (currMod - k + modulo) % modulo;

        count += map.get(target) || 0;

        // Update the map with the current mod
        map.set(currMod, (map.get(currMod) || 0) + 1);
    }

    return count;
};
console.log("==========================================")

// 2627. Debounce
// Medium
// Given a function fn and a time in milliseconds t, return a debounced version of that function.
// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time.
// The debounced function should also receive the passed parameters.
// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.
// The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
// If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.
// Debounce Schematic
// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. 
// Each color represents a different set of inputs.

// Please solve it without using lodash's _.debounce() function.

// Example 1:
// Input: 
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) { 
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);
// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

// Example 2:
// Input: 
// t = 20
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 100, inputs: [2]}
// ]
// Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
// Explanation:

// @param {Function} fn
// @param {number} t milliseconds
// @return {Function}

var debounce = function(fn, t) {
    let timerId = null; // store the current timer

    return function(...args) {
        if (timerId !== null) {
            clearTimeout(timerId); // cancel the previous timer
        }
        
        timerId = setTimeout(() => {
            fn(...args); // call the function with latest arguments
        }, t);
    };
};

// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms


console.log("==========================================")

// 3392. Count Subarrays of Length Three With a Condition
// Easy
// Given an integer array nums, return the number of subarrays of length 3 such that the sum of the first and third numbers equals exactly half of the second number.

// Example 1:
// Input: nums = [1,2,1,4,1]
// Output: 1
// Explanation:
// Only the subarray [1,4,1] contains exactly 3 elements where the sum of the first and third numbers equals half the middle number.

// Example 2:
// Input: nums = [1,1,1]
// Output: 0
// Explanation:
// [1,1,1] is the only subarray of length 3. However, its first and third numbers do not add to half the middle number.

// @param {number[]} nums
// @return {number}

var countSubarrays = function(nums) {
    
};

console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"


// document.querySelector('textarea').value = 'your code here';

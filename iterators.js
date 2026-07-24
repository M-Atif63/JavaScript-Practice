// const count = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

// -- Javascript Built-in Iterator

// const iter = count[Symbol.iterator]() // return a next() function for strating value
// like this --> iter.next() 
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())




// -- We can create an iterator manually 
// .My Custom Iterator


// function myiterator(arr) { <-- and this is custom iterator
//     let arrIndexes = 0;
//     return {
//         next() {
//             return {
//                 value: arr[arrIndexes++],
//                 done: arr[arrIndexes] ? false : true
//             }
//         }
//     }
// }

// How myIterator function Working

// The expression arr[arrindexes] checks if a value exists at the next index.
// It returns false if a value is present, and true if it is empty,letting us 
// know when to stop the loop


// How It Works

// 1.Checking the Index:
//                       It looks at a specific spot in the array using the index number.

// 2.True or False:
//                  A false result means data is found, while a true result means no data is left.

// 3.Stopping the Loop: 
//                      We use this result to stop the iterator so it does not run past the end of the array.




// const count = [100, 200, 300, 400, 500, 600]

// const iter = myiterator(count)

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


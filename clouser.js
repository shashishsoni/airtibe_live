function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    }
}

let counter = createCounter();
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
counter.count = 1000; // Attempting to directly modify the private variable (this won't affect the actual count)
console.log(counter.count);
console.log(counter);
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());


//output:
// 2
// 1
// 1000
// {
//   increment: [Function: increment], // this is a reference to the original function cns an use to modify the private variable
//   decrement: [Function: decrement], // this is a reference to the original function can use to modify the private variable
//   getCount: [Function: getCount], // this is a reference to the original function can use to get the private variable
//   count: 1000 // this is not the private variable but a new property added to the returned object
// }
// 1
// 0
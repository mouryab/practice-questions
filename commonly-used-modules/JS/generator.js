
function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}

var gen = generate();
console.log(gen);
// Output: Object [Generator] {}

let result = gen.next();
console.log(result);
// Output: invoked 1st time { value: 1, done: false }

result = gen.next();
console.log(result);
// Output: invoked 2nd time { value: 2, done: false }

result = gen.next();
console.log(result);
// Output: { value: undefined, done: true }

for (const g of gen) {
   console.log(g);
}

// Output:
// invoked 1st time
// 1
// invoked 2nd time
// 2

// Sequence iterator that uses a generator:

class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    * [Symbol.iterator]() {
        for( let index = this.start; index < this.end; index += this.interval ) {
            yield index;
        }
    }
};
// As you an see, the method Symbol.iterator is much simpler by using the generator.

// The following script uses the Sequence iterator to generate a sequence of odd numbers from 1 to 10:

let oddNumbers = new Sequence(1, 10, 2);

for (const num of oddNumbers) {
    console.log(num);
}

// Output:
// 1
// 3
// 5
// 7
// 9

// Using a generator to implement the Bag data structure
// A Bag is a data structure that has the ability to collect elements and iterate through elements. It doesn’t support removing items.

// The following script implements the Bag data structure:

class Bag {
    constructor() {
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    add(element) {
        this.elements.push(element);
    }
    * [Symbol.iterator]() {
        for (let element of this.elements) {
            yield element;
        }
    }
}

let bag = new Bag();

bag.add(1);
bag.add(2);
bag.add(3);

for (let e of bag) {
    console.log(e);
}
// Output:
// 1
// 2
// 3
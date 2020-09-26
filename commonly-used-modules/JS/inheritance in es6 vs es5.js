// inheritance in es6 vs es5

// All Animals can speak() using alert() whatever is passed to them.
// Cats will 'meow' the number of strokes you pass to pet(), though Lions will 'roar' once unless you feed() them first.
// Give me a Lion that's really just a big Cat - while also an Animal! Only 1 method per object!

class Animal {
	constructor() {
		
	}

	speak(phrase) {
		alert(phrase);
	}

}


class Cat extends Animal {
	constructor(sound) {
	   super();
		this.sound = sound || 'meow';
	}

	pet(strokes) {
		for(let i = 0; i < strokes; i++) {
			this.speak(this.sound);
		}
	}

}

class Lion extends Cat {
	constructor() {

		super('roar');
		this.happy = false;
	}

	feed() {
		this.happy = true;
	}

	roar() {
		this.speak(this.sound);
	}

	speak() {
      if(this.happy) {
		super(this.sound);
      } else {
      	this.roar();
      }
	  
	}

}


// WORKING SOLUTION

function Animal() {
  this.speak = function(phrase) {
    alert(phrase);
  }
}
function Cat() {
  this.sound = 'meow';
  this.happy = true;
  this.pet = function(strokes) {
    if (!this.happy) strokes = 1;
    while (strokes--) this.speak(this.sound);
} }
function Lion() {
  this.sound = 'roar';
  this.happy = false;
  this.feed = function() {
    this.happy = true;
    this.sound = 'meow';
} }
Cat.prototype = new Animal;
Lion.prototype = new Cat;

Leo = new Lion;
Leo instanceof Lion; //true
Leo instanceof Cat; //true
Leo instanceof Animal; //true Leo.pet(3); //roar
Leo.feed();
Leo.pet(3); //meow meow meow
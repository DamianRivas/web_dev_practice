//Evaluate these:
//#1
// [2] === [2] // false
// {} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(color, name) {
    this.color = color;
  }
  speak() {
    console.log("SCREECH");
  }
}

class Mammal extends Animal {
  constructor(color = "Black and White", name = "Betsy", type = "Milking Cow") {
    super(color, name);
    this.type = type;
  }

  speak() {
    console.log("Moooo.");
  }
}

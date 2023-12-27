// A simple class constructor:

class Car {
    constructor(name) {
      this.brand = name;
    }
  }

//create object

class Car {
    constructor(name) {
      this.brand = name;
    }
  }
  
  //object creation below

  const mycar = new Car("Ford");

//class inheritance

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
   //  Inheritance extends
    
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycars = new Model("Ford", "Mustang");
  mycar.show();


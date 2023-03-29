const target = {
    message1: "hello",
    message2: "everyone",
  };
  
  const handler1 = {
    //this intercepts attemps to access properties on the object
    get(target, prop, receiver) {
        if (prop === "message2") {
          return "world";
        }
        return Reflect.get(...arguments);
      },
  };

  const validator = {
    set(obj, prop, value) {
      if (prop === "age") {
        if (!Number.isInteger(value)) {
          throw new TypeError("The age is not an integer");
        }
        if (value > 200) {
          throw new RangeError("The age seems invalid");
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value;
  
      // Indicate success
      return true;
    },
  };
  
  const person = new Proxy({}, validator);
  
  const proxy1 = new Proxy(target, handler1);

  // This is mostly documenting the use of getters and setters.When
  // setting a property on a js object, setters are called
  // behind the scenes. For this reason we can hook up validators and 
  // whatnot.

  console.log(proxy1.message1)
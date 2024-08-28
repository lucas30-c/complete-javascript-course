
## OOP in JS: Prototype

Objects are **linked** to a prototype object.
Prototype contains methods


Prototypal Inheritance: The prototype contains methods(behaviour) that are accessible to all objects linked to that prototype.

Behavior is delegated to the linked prototype object.

`Array.prototype` is the prototype of all array objects we create in JS.


Therefore, all arrays have access to the map method.

How do we create prototypes? How do we link objects to prototypes?
1. Constructor functions
   1. New {} is created
   2. Function is called, this = {}
   3. {} linked to prototype
   4. function automatically return {}

2. ES6 Classes

3. Object.create() 
   - **The easiest and the most straightforward way of linking an object to a prototype object.**
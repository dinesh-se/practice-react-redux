import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';

ReactDOM.render(<Indecision />, document.getElementById('app'));

// //transform class properties - babel plugin - example

// class TransformClassPropertiesExample {
//   // class properties can be declared outside instead of declaring it inside constructor
//   name = 'Dinesh';

//   // can use arrow functions for class methods and carry parent this scope thus avoiding
//   // binding inside constructor
//   getName = () => { 
//     return `User's name is ${this.name}`;
//   }
// }

// const user = new TransformClassPropertiesExample();
// console.log(user.getName()); // regular way

// const newGetName = user.getName;
// console.log(newGetName()); // proper this binding
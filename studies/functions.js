// Functions
// Definition = a paticular block of code that is designed to perform a certain task when it is executed or "invoked".

/** 
*Basic Function Syntax:
*-has the keyword function
*-followed by ()
*-which is followed by {}
*=in the () are the parameters placed
=in the {}, is where the block of code that is to be executed is placed
*/

// Example
function myFunction(para1, para2){
    // this is where the code is inputed to be executed
  }
  
  // the parameters are the definition of the function
  
  // To invoke a function you call its name and place argument in () that give value to the parameters
  // Example
  myFunction(4, 2);
  
  /*Function Return
  * a function return is a statement in the executed block of code 
   that stops the execution of the code
  */
  // Examples
  function myFunction(para1, para2){
    return para1 + para2;
  }
  
  // Functions can be used as varibles
  // Example
  var myFunction =  function(para1, func){
    return func(para1)
  };
  
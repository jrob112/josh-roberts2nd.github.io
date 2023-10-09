/**
 * Variables:
 * A JavaScript variable is simply a name of storage location. 
 * There are two types of variables in JavaScript : local variable and global variable.
 * 
 * A JavaScript global variable is accessible from any function. 
 * A variable i.e. declared outside the function or declared with window object is known as global variable. 
 */
     example: var data=200;//gloabal variable  
 /* A JavaScript local variable is declared inside block or function. 
 * It is accessible within the function or block only. 
 */
     example: function abc(){let x=10;//local variable}  
// variable declaration is a statement that specifies the name and data type of a variable. 
// The declaration tells the compiler that the variable exists and where it's located. 
    example: let message = ''

/**
 * Variable assignment is done using the assignment operator =. 
 * This operator is used to assign a value to a variable. 
 * The value can be a string, number, object, array, or function.
 */
    example: message = 'Good Morning'

/**
 * The three keywords var, let, and const are all used to declare variables in JavaScript.
*var
*The var keyword is the oldest and most widely used way to declare variables in JavaScript. 
*It is a function-scoped keyword, which means that variables declared with var can be accessed anywhere within the function where they are declared.
*/
    example: var myVariable = "Hello, world!";

/*This code declares a variable called myVariable and assigns it the value "Hello, world!". 
*The variable can be accessed anywhere within the function where it is declared.
*let
*The let keyword is a block-scoped keyword, which means that variables declared with let can only be accessed within the block of code where they are declared.
*/
    example: if (true) {let myVariable = "Hello, world!";
}

/*
*In this example, the variable myVariable can only be accessed within the if statement. 
*It cannot be accessed outside of the if statement.
*const
*The const keyword is a block-scoped keyword, like let, but variables declared with const cannot be reassigned.
*/    
    example:const myVariable = "Hello, world!";

/*In this example, the variable myVariable cannot be reassigned. 
*Trying to reassign the variable will result in an error.
*Which keyword should you use?
*The keyword you should use to declare a variable depends on the scope you want to give the variable. 
*If you want the variable to be accessible anywhere within the function where it is declared, use the var keyword. 
*If you want the variable to be accessible only within the block of code where it is declared, use the let or const keyword. 
*If you don't want the variable to be reassigned, use the const keyword.
 */

/**
 * Hoisting is where variable and function declarations are moved to the top of their scope, before any code is executed. 
 * This means that you can use a variable or function before it is declared, as long as it is declared before any code that uses it
 * 
 * There are two types of hoisting:
 * 
 * Variable hoisting
 * This applies to variables declared with the var keyword. 
 * When you declare a variable with var, it is hoisted to the top of its scope, even if you use it later in your code. 
 * This means that you can use a variable before it is declared, but you will get an error if you try to access its value before it has been initialized
 * 
 * Function hoisting
 * This applies to functions declared with the function keyword. 
 * When you declare a function with function, it is hoisted to the top of its scope, even if you use it later in your code. 
 * This means that you can call a function before it is declared, but you will get an error if you try to call it before it has been defined.
 */
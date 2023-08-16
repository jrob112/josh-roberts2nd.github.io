// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){//if statement that uses .isArray to check if value is an array
        return true//=>true
    }else{
        return false//=>false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){//use isArray to check if value is array
         return false;//=>false
    }
    if(value === null){//check if value is null
         return false;//=>false
    }
    if(value instanceof Date){//check if value is date
         return false;//=>false
    }
    if(typeof value === 'object'){ //check if is object
        return true;//=>true
    }else{
        return false;//=>false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
   if(value === null){//check if value is null
        return false;//=>false
   }
   if(value instanceof Date){//check if value is date
        return false;//=>false
   }
   if(typeof value === 'object' || Array.isArray(value)){ //check if is object or array
       return true;//=>true
   }else{
       return false;//=>false
   }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){//use isArray to check if value is array
        return 'array';//=> array
   }
   if(value === null){//check if value is null
        return 'null';//=> null
   }
   if(typeof value === 'string'){//check if value is string
        return 'string';//=> string
   }
   if(typeof value === 'object' && !Array.isArray(value && value !== null) && value instanceof Date === false){ //check if value is object
       return 'object';//=>true
   }
   if(typeof value === undefined){//check if value is undefined
       return 'undefined';//=> undefined
   } 
   if(typeof value === 'number'){//check if value is number
        return 'number';//=> number
   }
   if(typeof value === 'boolean'){//check if value is boolean
        return 'boolean';//=> boolean
   }
   if(value instanceof Date){//check if value is date
        return 'date';//=> date
   }
   if(typeof value === 'function'){// check if value is function
        return 'function';//=> function
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

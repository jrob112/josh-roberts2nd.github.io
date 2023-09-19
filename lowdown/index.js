'use strict';

// YOU KNOW WHAT TO DO //

/**
 * Identity function takes in an input value and returns it unchanged
 * @param {value} 
 * @returns value unchanged
 */
function identity(value){
    return value;
};

module.exports.identity = identity;

/**
 * typeOf: takes in any value and returns the type of <value> as a string
 * @param {value} 
 * @returns type of <value> as a string
 * 
 */
module.exports.typeOf = typeOf;

/**
 * First: if array is an array then it reurns the first value that is a number
 * @param {Array, number} 
 * @returns the first number in an array, if first index is no number or NaN it returns the first value that is a number,
 * and if array is not an array it reutrns []
 */


module.exports.first = first;

/**
 * Last: if array is an array then it reurns the last value that is a number
 * @param {Array, number} 
 * @returns the last number in an array, if the last index is no number or NaN it returns the last value that is a number,
 * and if array is not an array it reutrns []
 */


module.exports.last = last;


/**
 * indexOf:
 * @param {value, array} 
 * @returns the index of <array> that is the first occurrance of <value>
 * 
 */


module.exports.idexOf = idexOf;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * Map: 
 * @param {*array or object} 
 * @returns {Function} action: The Function to be applied to each value, index, and the collection
 * 
 */

function map(collection, funct){
    let output = [];
    if(Array.isArray(collection)){
        for(let i=0; i <collection.length; i++){
            output.push(funct(collection[i], i, collection))
        }
    }else{
        for(let key in collection){
            output.push(funct(collection[key], key, collection))
        }

    }
        return output;
}
module.exports.map = map;


/**
 * Contains
 * @param {*array, value} 
 * @returns {Function} action: returns true if value is found in array, else returns false
 * 
 */


module.exports.contains = contains;

/**
 * unique:
 * @param {array} 
 * @returns {Function} action: Return a new array of all elements from <array> with duplicates removed
 * 
 */


module.exports.unique = unique;



/**
 * Filter
 * @param {array or object, function} 
 * @returns {Function} action: returns an array of values that the Function was applied to each value, index, and the collection
 *  
 * 
 */


module.exports.filter = filter;

/**
 * Reject:
 * @param {array, function} 
 * @returns {Function} action: call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array> and
 return a new array of elements for which calling <function> returned false
 * 
 */


module.exports.reject = reject;

/**
 * Partition:
 * @param {array, funvtion} 
 * @returns {Function} action: 1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
 * 
 */


 module.exports.partition = partition;

 /**
 * Pluck:
 * @param {array, property} 
 * @returns return an array containing the value of <property> for every element in <array>
 * 
 */


module.exports.pluck = pluck;

/**
 * Every:
 * @param {collection, function} 
 * @returns 1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 */


module.exports.every = every;


 /**
 * Some:
 * @param {collection, function} 
 * @returns 1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 */


 module.exports.some = some;

 /**
 * Reduce:
 * @param {array, funvtion} 
 * @returns {Function} action:1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
 */


module.exports.reduce = reduce;

/**
 * Extend:
 * @param {object} 
 * @returns  1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
 */


module.exports.extend = extend;

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
 * @param {value} any value
 * @returns type of <value> as a string
 * 
 */
module.exports.typeOf = typeOf;

/**
 * First: if array is an array then it returns the first value that is a number
 * @param {Array, number} an array and any number
 * @returns the first number in an array, if first index is no number or NaN it returns the first value that is a number,
 * and if array is not an array it reutrns []
 */


module.exports.first = first;

/**
 * Last: if array is an array then it reurns the last value that is a number
 * @param {Array, number} an array and any number
 * @returns the last number in an array, if the last index is no number or NaN it returns the last value that is a number,
 * and if array is not an array it reutrns []
 */


module.exports.last = last;


/**
 * indexOf:takes in an array and reutrns the index of the first occurance of value
 * @param {value, array} an array and any value
 * @returns the index of <array> that is the first occurrance of <value>
 * 
 */


module.exports.idexOf = idexOf;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {} doesnt have a return value
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
 * Map: takes in an array or object and returns an array of the populated values from the callback function
 * @param {array or object} 
 * @param {callback function} action: The Function to be applied to each value, index, and the collection
 * @returns {array} will return an array of the populated values from the callback function
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
 * Contains: take an array and returns the boolean value of if the value is in the array
 * @param {array, value} 
 * @returns {boolean value} returns true if value is found in array, else returns false
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
 * Filter: take an array or an object and return an array of values that return truthy fom the callback function
 * @param {array or object, function} 
 * @returns {array} action: returns an array of values that the Function was applied to each value, index, and the collection
 *  
 * 
 */


module.exports.filter = filter;

/**
 * Reject: takes an array and returns an array of values that returns falsey from the callback function
 * @param {array, function} 
 * @returns {array} returns an array of values that returns falsey from the callback function
 * 
 */


module.exports.reject = reject;

/**
 * Partition: takes an array and returns an array with 2 sub arrays, one having the values truthy and the other falsey
 * @param {array, function} 
 * @returns {array} returns an array with 2 sub arrays, one having the values truthy and the other falsey
 * 
 */


 module.exports.partition = partition;

 /**
 * Pluck:takes an array of objects and returns an array of the values from the objects
 * @param {array, property} 
 * @returns {array}return an array containing the value of <property> for every element in <array>
 * 
 */


module.exports.pluck = pluck;

/**
 * Every:takes an array or an object an returns true is every element is truthy, else it returns false
 * @param {collection, function} 
 * @returns {boolean} if every element is truthy, return; else return false
 */


module.exports.every = every;


 /**
 * Some:takes an array or an object and returns true is at least one element is truthy; else return false
 * @param {collection, function} 
 * @returns {boolean}returns true is at least one element is truthy; else return false
 */


 module.exports.some = some;

 /**
 * Reduce:takes an array and returns the value of the final function call
 * @param {array, function} 
 * @returns {value} returns the value of the final function call
 */


module.exports.reduce = reduce;

/**
 * Extend:takes in an object an returns an updated object with the objects that where passed in
 * @param {object} 
 * @returns {object} returns an updated object with the objects that where passed in
 */


module.exports.extend = extend;

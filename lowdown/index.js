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


module.exports.identity = identity;
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
 * @param {*} 
 * @returns 
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
module.exports.identity = identity;


/**
 * 
 * @param {*} 
 * @returns 
 * 
 */


module.exports.identity = identity;
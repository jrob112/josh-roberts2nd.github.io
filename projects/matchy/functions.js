/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    let output = null;
    for(let i = 0; i < array.length; i++){//for loop over array
        if(array[i].name === string){//if statement comparing name property at each index to string
             output = array[i];//=>array[i]
        }
    }
        return output;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, name, replacement) { 
    for(let i =0; i <array.length; i++){// for loop over array
        if(array[i].name === name){//if statement comparing name to name property at each index of array
            array[i] = replacement;//replacement becomes the index value in the array
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, name){
    for(let i = 0; i < array.length; i++){//for loop over array
        if(Object.keys(array[i]).includes(name)){//if statement comparing name to name property ant each index of array
            array.splice(i, 0);//delete the index of the array
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object){
    for(let i=0; i < array.length; i++){//for loop over array
        if(array[i].name.length < 0 && array[i].species.length < 0 && !array[i].name === object.name){//if statement comparing if name property at each index and species property at each index has value
            array.push(object);//adds object to the array
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./josh-roberts2nd.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let count = _.filter(array, (customer) => {return customer.gender === 'male'})
    return count.length;
};

var femaleCount = (array) =>{
    let females = _.reduce(array, (accumalator, current) => {
        if(current.gender === 'female'){
            accumalator += 1;
        }
        return accumalator;
    }, 0)
    return females;
}

var oldestCustomer = (array) =>{
    let oldest = _.reduce(array, (accumalator, current) => {
        if(current.age > accumalator.age){
            return current
        }return accumalator
    })
        return oldest.name;
    };
   
var youngestCustomer = (array) =>{
    let youngest = _.reduce(array, (accumalator, current) => {
        if(current.age < accumalator.age){
            return current
        }return accumalator
    })
        return youngest.name;
    };;

    var averageBalance = (array) =>{
   
        let average = array.reduce((acc, cur) => {
         acc += parseFloat(cur.balance.replace(/[$,]/g, ''));
                return acc
        },0)
        let x = average / array.length
        
        return x
    };

var firstLetterCount = (array, char) => {let count = array.filter((customer) =>
    customer.name.charAt(0) === char.toUpperCase())
    return count.length;
  }

var friendFirstLetterCount = (array, person, char) =>{
    let count = 0;
    let user = array.filter((customer) => customer.name === person)  
      
      user[0].friends.forEach((friend) => {
          if(friend.name.charAt(0) === char.toUpperCase()){
            count += 1;
      }     
    })                                             
      return count;
    };

    var friendsCount = (array, x) => {
        let buds = []
         array.forEach((customer) => {//each customer
          customer.friends.forEach(friend =>{
           if(friend.name === x){
            buds.push(customer.name)}})
        })
          return buds;
      };

      var topThreeTags = (array) => {
        let output = []
          array.forEach(customer => {output = output.concat(customer.tags)})
          let obj = output.reduce((acc, cur)=> {
            if(acc[cur] === undefined){
              acc[cur] = 1;
            }else{
              acc[cur] += 1;
            }
              return acc;
          }, {})
        let x = Object.entries(obj)
        // console.log(x)
        x.sort((a, b)=>{
          return b[1] - a[1]
        })
        let b = []
        b.push(x[0][0])
        b.push(x[1][0])
        b.push(x[2][0])
        return b
      };

var genderCount = (array) =>{
    let count = {};
    let females = _.reduce(array, (accumalator, current) => {
        if(current.gender === 'female'){
            accumalator += 1;
        }
        return accumalator;
    }, 0)
     count.female = females;

    let males = _.reduce(array, (accumalator, current) => {
        if(current.gender === 'male'){
            accumalator += 1;
        }
        return accumalator;
    }, 0)
     count.male = males;
    let nb = _.reduce(array, (accumalator, current) => {
        if(current.gender === 'non-binary'){
            accumalator += 1;
        }
        return accumalator;
    }, 0)
     count['non-binary'] = nb;
     return count;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

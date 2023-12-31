// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {id: id, nameFirst: nameFirst, nameLast: nameLast}//=> the new keys with values
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;//=> returns number of contacts
        },
        addContact: function(contact){
            return contacts.push(contact);// puts contact into contacts array
        },
        findContact: function(fullName){
            let output = [];
                for(let i =0; i < contacts.length; i++){//for loop over contacts array
                    if(contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){//check if fullName matches contact name
                        output.push(contacts[i]);//=> fullName
                    }
                    if(output.length > 0){// if statement to see if ouput array has any values
                        return output[0];//=> output
                    }else{
                        return undefined;//=> undefined
                    }
                }
        },
        removeContact: function(contact){
            for(let i =0; i < contacts.length; i++){//loops over contacts array
                if(contact.id === contacts[i].id){//if contact matches by id key
                     contacts.splice(i, 1);// use splice to remove the contact at the index that comes from the if statement
                }
            }
        },
        printAllContactNames: function(){
            let output = [];
            for(let i =0; i < contacts.length; i++){//loops over contacts array
                output.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);//puts the full name into output array
            }
            return output.join('\n');//=> names on new line for each
        
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

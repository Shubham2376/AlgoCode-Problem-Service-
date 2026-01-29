const mongoose = require('mongoose');
const { Schema } = mongoose;
const problemSchema = new Schema({
    // inside this schema we start putting properties what this schema should have 
    // properties that we should keep inside the problem schema 
    title : {
        type : String,
        required : [true,'Title cannot be empty']
    },
    description : {
        type : String,
        required : [true,'description cannot be empty']
    },
    difficulty : {
        type : String,
        enum : ['easy','medium','hard'],
        required : [true,'difficulty cannot be empty'],
        default : 'easy'
    },
    // you can keep a property tag that a problem is a binary search problem, divide and conquer problem etc so tag is separate entities altogether so we can later modify tag 

    // what should be the format of testcases : It should be array of object
    testCases : [
        // every testcases have input and output properties both of the properties be string 
        // This is how our testcases looks like 
        // [{input : '5',output : '10},{input : '8', output : '15'}]
        // if this is input 
        /*
        5 \n //storing 5 is same like 5 \n
        2 3 4 5 6 \n
        8
        i am storing line 29,30 and 31 the all three line as a input 

        output : 
        1 3
        */
        {
        input : {
            type : String,
            required : true
        },
        output : {
            type : String,
            required : true
        }
    }
    ],
    editorial : {
        type : String
    }     
});

// problem is mongoose model it is object using which we query mongodb for this particular collection This is object using which we query on our ORM 
const Problem = mongoose.model('Problem',problemSchema)

module.exports = Problem
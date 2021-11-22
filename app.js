/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);


// Instructions
// - Use this starting template, you'll find the data there => https://codesandbox.io/s/day-6-functions-template-es4eg?file=/data.js
// - As always, do not code your solution in CodeSandbox
// With the usual Users and Todo lists:
//   - Prompt the user for a letter
//   - Find all the users who's name contains the letter 
//   - Say hi to those users in the console - but only 1 greeting every 2 seconds.
// - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

// Tips
// - Don't forget to clear interval once it's done running
// - It's perfectly okay to prompt a user for details while other stuff (i.e. the interval) is running
// - Keep your code separated into functions for easier readability later

// Challenge
// - Prompt the user to enter a property (e.g. 'email' or 'address') and then console.log a list of name - given property. E.g. for email it would look along the lines of: 

// Checking if the the name has the letter
function hasLetter(letter, objectName) {
    return objectName.includes(letter)
}

function hasIdAndTaskNotCompleted(id, objectId, completed) {
    return id === objectId && completed === false;
}

// Filtering the users list if the user name has the letter and mapping a new array with all the names that match
function filteringAndMapping(letterOrID, array) {

    if (isNaN(letterOrID)) {

        let newArray = array.filter((element) => {
            if (hasLetter(letterOrID, element.name)) {
                return element
            }
        })
        return newArray.map((element) => {
            return element.name
        })
    } else {
        let newArray = array.filter((element) => {
            if (hasIdAndTaskNotCompleted(letterOrID, element.userId, element.completed)) {
                return element
            }
        })

        return newArray.map((element) => {
            return element.title
        })
    }
}


//Greeting every 2 seconds
function greetings(array) {
    let i = 0;

    const greetingInterval = setInterval(() => {

        console.log(`Hello ${array[i]}`)

        i++

        if (i === array.length) {
            clearInterval(greetingInterval)
        }
    }, 2000)
}


const userLetterInput = prompt("Search via letter")
const userIdInput = Number(prompt("Search with user id"))
const usersWithLetter = filteringAndMapping(userLetterInput, window.users)
const tasksNotCompleted = filteringAndMapping(userIdInput, window.todos)

greetings(usersWithLetter)

let tasks = `The tasks not completed for user with id ${userIdInput} are: \n`

for (task of tasksNotCompleted) {
    tasks += task + `,\n`
}

console.log(tasks)
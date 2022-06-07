// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

 

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

const command = "G()(al)"

const interpret = function(command) {
    // declare empty string variable (result)
    // for loop to iterate through command
    // conditional for adding 'G' to result if encountered
    // conditional for adding 'o' to result if "(" AND  ")" is encountered along with advancing the iteration by 1 (since "()" will only be max one character ahead of "(")
    // else statement for if "(" AND "al" is encountered along with advancing the iteration by 3 (since "(al)" will only be max three characters ahead of "(")

   
    let result = '';
    
    for(let i = 0; i<command.length; i++) {
        
        if(command[i] == 'G') {
            result += command[i]; 
        }
        
        if(command[i] == '(') {
            if(command[i+1] == ')') {
                result += 'o';
                i += 1;
            } else {
                result += 'al';
                i += 3;
            }
        }
    }
    
    return result;

};

console.log(interpret(command))



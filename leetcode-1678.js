// You own a Goal Parser that can interpret a resulting command. The command consists 
// of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will 
// interpret "G" as the resulting "G", "()" as the resulting "o", and "(al)" as the 
// resulting "al". The interpreted resultings are then concatenated in the original order.

// Given the resulting command, return the Goal Parser's interpretation of command.

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


const interpret = function(command) {
   let result = [];

   for (let i = 0; i < command.length; i++) {
    if (command[i] == "G") {
        result.push("G");
    } else if (command[i] == "(" && command[i + 1] == ")") {
        result.push("o");
    } else if (command[i] == "(" && command[i + 1] == "a") {
        result.push("al");
        i += 3;
    }
   }

   return result.join('');
};



console.log(interpret("G()()()()(al)"));
console.log(interpret("G()(al)"));
console.log(interpret("(al)G(al)()()G"));




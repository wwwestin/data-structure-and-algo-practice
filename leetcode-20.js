// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true

const s = "(]"

var isValid = function(s) {
    //split string by character
    //declare empty array variable
    //loop through each character in string
    //push opening brackets to empty array
    //write set of conditionals that pops last element of array if congruent and return false otherwise
    //tools: loops, conditionals, .push, .pop
    
    s=s.split("");
    let stack=[];

        for(i=0;i<s.length;i++){
          if(s[i]=="{"||s[i]=="["||s[i]=="(") stack.push(s[i]);
          if(s[i]=="}") if(stack[stack.length-1]=="{") stack.pop(); else return false;
          if(s[i]=="]") if(stack[stack.length-1]=="[") stack.pop(); else return false;
          if(s[i]==")") if(stack[stack.length-1]=="(") stack.pop(); else return false;
        }
    return stack.length==0;

};

console.log(isValid(s));
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = function(ransomNote, magazine) {
    
    let ransomeNoteCountObject = {}
    let magazineCountObject = {}
    
    for(let i = 0; i < ransomNote.length; i++){
        ransomeNoteCountObject[ransomNote[i]] =  ransomeNoteCountObject[ransomNote[i]] ?  ransomeNoteCountObject[ransomNote[i]] + 1 : 1
    }
    
    
    for(let i = 0; i < magazine.length; i++){
        magazineCountObject[magazine[i]] =  magazineCountObject[magazine[i]] ?  magazineCountObject[magazine[i]] + 1 : 1
    }
    
    
    for(let eachChar of Object.keys(ransomeNoteCountObject)){
        if(!(magazineCountObject[eachChar] && magazineCountObject[eachChar] >= ransomeNoteCountObject[eachChar])){
            return false;
        }
    }
    
    return true;
};

console.log(canConstruct("a", "b"))
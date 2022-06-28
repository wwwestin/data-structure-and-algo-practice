const uncompress = (s) => {
    const numbers = "0123456789";
    let output = "";
    let i = 0;
    let j = 0;
    
    while (j < s.length) {
        if(numbers.includes(s[j])) {
        j += 1;
        } else {
        const num = Number(s.slice(i, j));
        for (let count = 0; count < num; count +=1) {
            output += s[j];
        } 
        j += 1;
        i =j;
        }
    }
    return output;
};

console.log(uncompress("2c3a1t"))
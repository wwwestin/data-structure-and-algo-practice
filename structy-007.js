const compress = (s) => {

  let result = "";
  let i = 0;
  let j = 0;
  
    while(j <= s.length) {
        if(s[i] === s[j]) {
            j += 1;
        } else {
        num = j - i;
        if (num === 1) {
            result += s[i];
        } else {
        result += num + s[i];
        }
        i = j;
    }
  }
  return result;
  };

  console.log(compress('ssssbbz'));
function checkEndString(longStr, shortStr) {
    return longStr.endsWith(shortStr);
}
console.log(checkEndString("Hello, World!", "Hello"));  
console.log(checkEndString("Hi there!", "there!"));    

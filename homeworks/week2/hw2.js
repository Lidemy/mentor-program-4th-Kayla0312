function capitalize(str) {
    if(str >= 'a' && str <='z'){
        var firstWord = str[0].toUpperCase() + str.slice(1)
        return firstWord
    }
    else{
        return str
    }
}

console.log(capitalize('hello'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));

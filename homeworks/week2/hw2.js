function capitalize(str) {
    if(str >= 'a' && str <='z'){
        return str[0].toUpperCase() + str.slice(1)        
    }
    else{
        return str
    }
}
console.log(capitalize('hello'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
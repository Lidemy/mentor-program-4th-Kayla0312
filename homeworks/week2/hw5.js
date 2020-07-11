function join(arr, concatStr) {
    var result = ''
    for(var i = 0; i < arr.length; i++){
        result += arr[i] + concatStr
    }
    return result
}

function repeat(str, times) {
    var result = ''
    for(var i = 1; i <= times; i++){
        result += str
    }
    return result
}

console.log(join(['a'], '!'));
console.log(join([1, 2, 3], ''));
console.log(join(['a', 'b', 'c'], '!'));
console.log(join(["aaa", "bb", "c", "dddd"], ',,'));
console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));

function reverse(str) {
    var reverseStr = ''
    for(i = str.length - 1; i >= 0; i-- ){
        reverseStr += str[i]
    }
    console.log(reverseStr)
}
reverse('hello');
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');

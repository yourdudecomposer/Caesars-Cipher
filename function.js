function rot13(str) {
    return str.replace(/[A-Z]/g, (compare) => {
        let num = compare.charCodeAt(0) + 13;
        if (num > 90) {
            console.log(num);
            num = num - 91 + 65;
        }
        return String.fromCharCode(num);
    });
}
console.log(rot13('SERR CVMMN!'));



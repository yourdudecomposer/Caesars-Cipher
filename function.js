function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        let num = char.charCodeAt(0) + 13;
        if (num > 90) {
            num = num - 91 + 65;
        }
        return String.fromCharCode(num);
    });
}


let p = document.querySelector('p'),
    i = document.querySelector('textarea');
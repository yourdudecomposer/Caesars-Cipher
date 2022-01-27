function rot13(str) {
    let res = "",
        t = 0;
    for (let i of str) {
        t = i.charCodeAt(0);
        if (t >= 65 && t <= 77) res += String.fromCharCode(t + 13);
        else if (t >= 78 && t <= 90) res += String.fromCharCode(t - 13);
        else res += i;
    }
    return res;
}






// function rot13(str) {
//     return str.replace(/[A-Z]/g, (char) => {
//         let num = char.charCodeAt(0) + 13;
//         if (num > 90) {
//             num = num - 91 + 65;
//         }
//         return String.fromCharCode(num);
//     });
// }


let output = document.querySelector('.output'),
    i = document.querySelector('textarea');
// function jadenCase(item) {
//     let first = item.split(' ');
//     let rest = item.slice(1, item.length);
//     for (let i = 0; i < item.length; i++) {
//         let a = first[i].slice(i, item.length).split('')[i].toUpperCase('')
//         return `${a}${rest.join('').toLowerCase()}`
//     }
// }
// 


function repeat(string, number) {
    let repeat = "";
    if (number === 0 || number < 0) {
        return ""
    } else if (number === 1) {
        return repeat;
    } else {
        for (let i = 1; i = number; i++) {
            repeat += string;
        }
    }
    return repeat;

}
console.log(repeat('aubin', 2))
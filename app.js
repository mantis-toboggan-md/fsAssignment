 var fs = require('fs');
//
// //challenge 1
// console.log(fs.readFileSync('challenge1/info.txt', 'utf-8'));
//
// //challenge 2
// fs.writeFileSync('challenge2/info.txt', 'Cindy\nDavid\nEdwin\nGreg\nJun\nRico\nMandy\nNancy\nClarence\nCT')
//
// //challenge 3
// // fs.copyFileSync('challenge3/binfo.txt', 'challenge3/info.txt')
// // fs.unlinkSync('challenge3/binfo.txt')
//
// //challenge 4
// fs.mkdirSync('challenge4/copyfolder')
// fs.copyFileSync('challenge4/info.txt', 'challenge4/copyfolder/info.txt')

//challenge 5
// fs.writeFileSync('challenge5/info.txt', fs.readFileSync('challenge5/info.txt', 'utf-8').replace(/-/g, " "));

//challenge 6
fs.readdirSync('challenge6', {withFileTypes: true}).map((file)=>{
  if(file.includes('txt')) console.log(file)
})

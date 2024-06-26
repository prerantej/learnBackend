import * as fs from 'fs';

// fs.writeFile("write.txt", "hii there iam preran", (err) => {
//     if (err) throw err;ns
//     console.log("The file is saved");
// });


fs.readFile('./write.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
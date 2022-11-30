const fs=require('fs');// basically core module of node js
// To write and create a file but data over write
// fs.writeFileSync('text,txt',"my name jawad kia hall hain");
// donot replace the data 
// fs.appendFileSync("text.txt","mola nu mola naw mahry mola nhi mahrda.) Zain di lyni a ")
// just read data but binary form 
// const buffer = fs.readFileSync("text.txt");
// console.log(buffer);
// to convert binary data into string form
// const org_data = buffer.toString();
// console.log(org_data);
// TO rename the file using fs function 
// fs.renameSync("text,txt","text1.txt")
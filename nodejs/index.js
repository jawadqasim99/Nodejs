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
                    // Make a folder
//fs.mkdirSync("Thapa")
// fs.writeFileSync("Thapa/bio.txt","jawad kia hall hain")
// fs.appendFileSync("Thapa/bio.txt"," kia hall hain")
// const data = fs.readFileSync("Thapa/bio.txt","UTF8")
// console.log(data);
// Delet a file using these function
// fs.unlinkSync("Thapa/bio.txt")
//Remove folder using this folder
// fs.rmdirSync("Thapa")



                // Using Asyncouns 
// fs.writeFile("jawad.txt","kia hall hain :)",(err)=>{console.log("Created a file successfully!"); console.log(err);})
// fs.readFile("jawad.txt","UTF8",(err,data)=>{console.log("Created a file successfully!"); console.log(data)});
// fs.mkdir("jawad",(err)=>{console.log("Created a file successfully!"); console.log(err);})
fs.unlink("bio.txt",(err)=>{console.log(err);});

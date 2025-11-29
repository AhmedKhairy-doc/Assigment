// //      1
// const path = require("node:path");
// console.log(path);
// console.log(__filename);
// console.log(__dirname);
// console.log(path.parse(__dirname));



// //       2
// console.log(path.basename(__filename));


// //        3
// console.log(path.format({root: 'D:\\', dir: 'D:\\sunday\\sessions\\S.5', base: 'Assigment', ext: '', name: 'Assigment'}));


// //        4
// console.log(path.extname("D:\sunday\sessions\S.5\Assigment\ass.js"));


// //        5
// console.log(path.parse("D:\sunday\sessions\S.5\Assigment\ass.js"));


// //        6
// console.log(path.isAbsolute("D:\\sunday\\sessions\\S.5\\Assigment\\ass.js"));


// //         7
// console.log(path.join(__dirname,"image","Raneem"));
// console.log(path.join("src", "components", "App.js"));


// //         8
// console.log(path.resolve("ass.js"));


// //         9
// console.log(path.join( "/folder1", "folder2","file.txt" ));

//            10
// const fs= require("node:fs");
// const filepath= path.resolve("./data.txt");
// const destpath= path.resolve("./file.txt");
// console.log(fs.existsSync(destpath));
// if (fs.existsSync(destpath))
//     fs.unlink(destpath,(error)=>{
//         console.log({error});
//  } )
//            11
// const fs= require("node:fs");
// const filepath= path.resolve("./data.txt");
// const destpath= path.resolve("./folder");
// console.log(fs.existsSync(destpath));
// if (!fs.existsSync(destpath))
//     fs.mkdir(destpath,error=>{
//         console.log("succes");
//  } )


//           12

// const EventEmitter = require("node:events");
// const event = new EventEmitter();
// event.on("hi",(data)=> {
     
//     console.log(data);
    
// } )
// event.emit("hi","Welcome event triggered!")

//           13
// const EventEmitter = require("node:events");
// const event = new EventEmitter();
// event.on("hi",(username)=> {
     
//     console.log(username);
    
// } )
// event.emit("hi","Ahmed")
// //           14     
// const fs= require("node:fs");
// const filepath= path.resolve('./data.txt');
// console.log({filepath});
// const result =fs.readFileSync(filepath,{encoding:"utf-8"},(error,data) => {
//     console.log({result});
    
// }) 
// console.log("loo");


//          15
// const fs= require("node:fs");
// const filepath= path.resolve("./data.txt");
// const destpath= path.resolve("./data.txt");
// console.log({filepath});
// fs.writeFile(destpath,"save",{encoding:"utf-8", flag:"a"},(error)=>{
//     if (error) {
//         console.log(error);
   
//     }
// })
   

// console.log("lol");

//         16
//console.log(path.isAbsolute(__dirname));
/////      Or
// const fs= require("node:fs");
// const filepath= path.resolve("./data.txt");
// const destpath= path.resolve("./data.txt");
// console.log(fs.existsSync(destpath));

//      17
const path= require("node:path");
const os=require("node:os");
console.log( os.arch(),os.platform()); // or
console.log(process.arch, process.platform);



    






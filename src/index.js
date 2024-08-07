// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
//as we wrote async code then after complition we will get some promises that;s why we used then 
connectDB()
.then(()=>{
    // kayi baar app.listen se phele ham error se ke liye bhi try karte hai .
    app.on("error" , (error)=>{
        console.log("ERRR:" , error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGOD DB connection failed" , err);
})





























//first approach sab kuch index.js mein daal de 
// const app = express()
// //iffy type of function that will execute faster say immediately.
// // normally we use a semcolon before writing iffy. we are not puting it because we didn't have 
// //any code .
// (async () =>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error" , (error)=>{
//             console.log("ERRR:" , error);
//             throw error
//        })

//        app.listen(process.env.PORT , ()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.error("ERROR:" , error)
//         throw err
//     }
// })()
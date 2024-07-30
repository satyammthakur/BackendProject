// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()





























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
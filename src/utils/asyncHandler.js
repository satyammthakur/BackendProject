//          -using promises-

const asyncHandler = (reqHandler) =>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).catch(err => next(err) )
    }
}

export {asyncHandler}

//we will use asyncHandler using promises and try catch both and it is a higher order function
// a higher order function is a function which takes func as argument and return it as ans

// const asyncHandler = () => {} // basic function 
// const asyncHandler = (function) => () => {} // argument function 
// const asyncHandler = (function) => async() => {} // further same function ko kisi aur function mein paas kar diya 
// ans async bana na hai toh usko async bana do .



//                  -using try catch-
// const asyncHandler =(fn) => async (req , res , next)=>{
//     try{
//         await fn(req , res , next);
//     }
//     catch(error){
//         //error status and cide bhej dete hai 
//         //message and success frontend bando ke liye hota hai
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


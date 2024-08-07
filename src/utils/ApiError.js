class ApiError extends Error{
    constructor(
        statusCode,
        messages="something went wrong",
        errors=[], 
        statck =""
    ){
        super(messages)
        this.statusCode = statusCode
        this.data = null
        this.message=message 
        this.success = false;
        this.errors= errors


        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}
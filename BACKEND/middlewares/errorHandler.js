const notFound = (req,res,next)=>{
    const error = new Error(`Not found -${req.originalUrl}`)
    res.status(404)
    next(error)
}
const errorHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode || 500;
    let message = err.message;

    res.status(statusCode).json({
        message,
    })
}



export {notFound,errorHandler}
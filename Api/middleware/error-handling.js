//err handling
function errorHandling(err,req,res,next){
    if(err) {
        let status =err.status ||500
        res.json({
            status,
            msg:'an error has occured 😒; please try again later 😁'
        })
    }
    next()
}
module.exports= errorHandling

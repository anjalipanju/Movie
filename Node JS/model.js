const mongoose=require("mongoose")

let MongooseSchema =mongoose.Schema

const movieSchema=new MongooseSchema(
    {
        movieName:String,
        actor:String,
        actress:String,
        director:String,
        releaseyr:Number,
        camera:String,
        producer:String,
        language:String
    }
)

var movieModel=mongoose.model("movies",movieSchema)

module.exports={movieModel}
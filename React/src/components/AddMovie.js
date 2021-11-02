import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './AddRead'



const AddMovie = () => {
    var [value,setValue]=useForm({movieName:"",actor:"",actress:"",director:"",releaseyr:" ",camera:"",producer:"",language:""})
    const readValues=() =>{
        console.log(value)
        axios.post("http://localhost:8080/addmovie",value).then(
            (response)=>{
                console.log(response)
            }
        )
    }
    return (
        <div>
            <TextField onChange={setValue} margin="normal" value={value.movieName}  fullWidth label="movieName" name="movieName" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.actor} fullWidth label="actor" name="actor" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.actress} fullWidth label="actress" name="actress" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.director} fullWidth label="director" name="director" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.releaseyr} fullWidth label="releaseyr" name="releaseyr" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.camera} fullWidth label="camera" name="camera" variant="outlined"/>
            <TextField onChange={setValue} margin="normal" value={value.producer} fullWidth label="producer" name="producer" variant="outlined"/>
            <TextField onChange={setValue} margin="normal" value={value.language} fullWidth label="language" name="language" variant="outlined"/>
            <Button onClick={readValues} variant="contained" fullWidth color="primary">Submit</Button>
        </div>
    )
}

export default AddMovie

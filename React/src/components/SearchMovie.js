import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './AddRead'

const SearchMovie = () => {
    var [movieData,changeData]=useState([])
    var [value1,setValue1]=useForm({"movieName":""})
    const readData= ()=>{
            console.log(value1)
            axios.post("http://localhost:8080/search",value1).then(
                (response)=>{
                    console.log(response.data)
                    changeData(
                        movieData=response.data
                    )
                }

            )
    }
    return (
        <div>
            <TextField onChange={setValue1} name="movieName" value={value1.movieName} label="Enter movie name" margin="normal" variant="outlined" fullWidth/>
            <Button onClick={readData} color="secondary" variant="contained" fullWidth>SEARCH</Button>
            
<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell> Actor</TableCell>
             <TableCell> Actress </TableCell>
             <TableCell>  Director</TableCell>
             <TableCell>  Producer </TableCell> 
         </TableRow>
     </TableHead>

     <TableBody>
         {movieData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.actor} </TableCell>
<TableCell> {value.actress} </TableCell>
<TableCell> {value.director} </TableCell>
<TableCell> {value.producer} </TableCell>


</TableRow>

         } )}

     </TableBody>


 </Table>
        </div>
    )
}

export default SearchMovie

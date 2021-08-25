import React, { useEffect,useRef } from 'react'
import axios from '../axios'
import { Redirect} from 'react-router-dom'
import { useState } from 'react'
import './Form.css'

export function TagCreate()
{
    const firstUpdate = useRef(true);
    const [toAdd,setToAdd] = useState(false)
    const [toRedirect,setToRedirect] = useState(false)
    const [post,setPost] = useState({
        title: "",
        user: 1,
    })

    useEffect(()=>{
        if(firstUpdate.current)
        {
            firstUpdate.current=false
        }
        else{
                
            async function HandleAdd()
            {
                try
                {
                await axios.post(`http://127.0.0.1:8000/api/tag/`,post)
                setToRedirect(true)
                }
                catch(error)
                {
                    console.log(error);
                }
                
            }
            HandleAdd()

        }
    },[toAdd])

    if(toRedirect===true){
        return <Redirect to = "/" />
    }
    
    return(
        <div className="formAdd">
            <div className="mb-3">
                <label  className="form-label">Tag</label>
                <input type="name" className="form-control" id="exampleFormControlInput1" onChange = {e=>{setPost({...post,title:e.target.value})}} />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary btn-lg" onClick = {()=>(setToAdd(true))}/>
      </div>
    )
}
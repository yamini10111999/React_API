 import React,{useState} from 'react'
import  {Redirect } from 'react-router-dom';
import { BsFillReplyFill } from "react-icons/bs";
import './Myscript.css';
function Fetchapi() {
    const[post ,setPost]=useState('')
    const[data , setData]= useState([])
    const[id , setId]=useState('')
    
     var myhits
    
  
    const changeHandler=e=>{
        setPost(e.target.value)
        const url =`https://hn.algolia.com/api/v1/search?query=${e.target.value}`
        fetch(url).then(res=>res.json())
        .then(res=>{
         myhits=res.hits
         setData(myhits)
        // console.log(data)
    })
}
  const handleclick=(e)=>{
    setId(e.target.id)
   console.log(e.target.id)

  } 
  return (
    
        <div>
            {id!=='' ? <Redirect to={`/next/${id}`}/>:null}
            <form>
                
                <input className="input" placeholder="Search..." value={post} onChange={changeHandler}/>
               
                {data.map((item)=><div>
                    
                <h4 className="titlesec" onClick={handleclick}  id={item.objectID}><BsFillReplyFill  />{item.title}</h4>
      
                 </div>
                )
            }
                
                 
                 </form>
             
        </div>
    )
            

}
export default Fetchapi
 
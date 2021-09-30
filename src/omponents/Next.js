import React,{useState,useEffect} from 'react'
import './Myscript.css';

function Next(props) {
    const[obj ,setObj]=useState({})
    
    useEffect(() => {
       fetch("https://hn.algolia.com/api/v1/items/"+props.match.params.id)
       .then(res=>res.json())
       .then(
           (res)=>{ 
              var  myobj=res
            console.log(myobj)
            setObj(myobj)
        
            }
            
       );
    },[props.match.params.id]);
    //console.log(obj.children)
    return ( 
        <div>
             <h1 className="h1tag">Object Item</h1>
            <ul className="nextList">
          <li className="list"> <span>Title:</span> {obj.title}</li>
         <li className="list"><span> Points :</span>{obj.points}</li> 
            <li className="child"> Children :</li>
         
                {obj.children !==undefined && obj.children.map((mychild,index)=>(
                    <div>
                    <li class="list_2" key={index} ><span> Id :</span>{mychild.id}</li>
                    <li class="list_2" key={index} ><span>parent_id : </span>{mychild.parent_id}</li>
                    </div>
                ))}
                
            </ul>
        </div>
    )
}

export default Next

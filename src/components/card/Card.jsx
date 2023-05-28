import React,{useState,useEffect} from 'react';
import { storeDataLocal } from '../utilities/Utilitizes';


const Card = (props) => {
    const [isData,setIsData]=useState(0);

    const totalAddedTime=props.watchTime;
    let totalTime=0;
    if (totalAddedTime.length>0) {
         totalTime=totalAddedTime.reduce((total,sum)=>total+sum);
        storeDataLocal(totalTime)
     
    }

    useEffect(()=>{
        const getLocalValue=localStorage.getItem("watchTime");
        setIsData(getLocalValue);
        },[isData])

console.log(isData)
    // console.log(totalTime)
    return (
        <div>
            <h3>My Card</h3>
            <p>Total Watch Time</p>
            <input type="text" disabled value={isData} />
        </div>
    );
};

export default Card;
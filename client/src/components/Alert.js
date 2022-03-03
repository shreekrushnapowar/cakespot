import React from 'react'

const Alert = (props) => {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div style={{height:'10px'}}>
        {props.alert  &&  <div className={`alert alert-${props.alert.type} alert disable fade show`}role="alert">
     <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}      
     </div>}       
    </div>
    )
}

export default Alert

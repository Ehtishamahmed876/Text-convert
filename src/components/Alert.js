import React from 'react'

function Alert(props) {

    const captilize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
       <div style={{height:'50px'}}> {
         props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <storng>{captilize(props.alert.type)}</storng>: {captilize(props.alert.massage)}
      </div>
        }
        </div>
      </>
    )
}

export default Alert


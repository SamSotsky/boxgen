import React from 'react'

export const Box = (props) => {
    return (
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            {
                props.colorBox.map((colorBox, i)=>{
                    return(
                        <p key={i} style={{backgroundColor: colorBox, width:'100px', height: '100px'}}></p>
                    )
                })
            }
            
        </div>
    )
}
export default Box
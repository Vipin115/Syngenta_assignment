import "./Circle.css"

export const CircleDiv=({color,number})=>{
    return (
        <div className="Circle" style={{backgroundColor:color, borderRadius:"50%",width:"100px", height:"100px"}}>
            <div>{number}</div>
            
        </div>
    )
}
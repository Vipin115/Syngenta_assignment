import "./Circle.css"

export const CircleDiv=({color,number})=>{
    return (
        <div className="Circle" style={{background:color, borderRadius:"50%"}}>
            <div>{number}</div>
            
        </div>
    )
}
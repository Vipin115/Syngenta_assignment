import logo from './logo.svg';
import './App.css';
import { CircleDiv } from './Components/Circles/Circles';
import { useEffect, useState } from 'react';

function App() {

  const [circle,setCircle] = useState([])

  const [add,setAdd] = useState([])

  const [shootnum,setShoot] = useState("")

  // generate  random colors of array
  const randomClr=()=>{
    let colorArr = []
    for(let i=1; i<=5; i++){
      colorArr.push([`#${Math.floor(Math.random()*16777215).toString(16)}`, i])
    }
    setCircle(colorArr)
    console.log(colorArr)
  }
  
  useEffect(()=>{
    randomClr()
  },[])

  // to shoot the circles into the div

  const handleShoot=()=>{
    let baloons = circle.find((el)=>el[1]==shootnum)
    if(!baloons){
      alert("not a valid no")
      return
    }
    const res = circle.filter((el)=>el[1]!=shootnum)
    setCircle([...res])
   setAdd([...add,baloons])
  }

  // to add back circles to its original postion
  const handleback=(el)=>{
    let baloons = add.filter((x)=>el[1]!=x[1])
    setAdd([...baloons])
    setCircle([...circle,el].sort((a,b)=>a[1]-b[1]))
  }

  return (
    <div className="App">
      <div className='baloon_div'>
        {circle.map((el)=><CircleDiv key={el[1]} color={el[0]} number={el[1]}/>)}
      </div>
     
      <div className='empty_div' style={{display:"flex", flexWrap:"wrap", gap:"5px"}}>
        {add.map((el)=>{
          return(
            <div onClick={()=>handleback(el)}>
              <CircleDiv key={el[1]} color={el[0]} number={el[1]}/>
            </div>
          )
        })}
      </div>
      <div className='Shoot_btn'>
        <input onChange={(e)=>setShoot(e.target.value)} type="text" />
        <button onClick={handleShoot}>Shoot</button>
      </div>
    </div>
  );
}

export default App;

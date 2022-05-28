import logo from './logo.svg';
import './App.css';
import { CircleDiv } from './Components/Circles/Circles';
import { useEffect, useState } from 'react';

function App() {

  const [circle,setCircle] = useState([])

  const [add,setAdd] = useState([])

  const [shootnum,setShoot] = useState("")

  // generate  random colors of array
  function randomClr(){
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

  function handleShoot(){
    let baloons = circle.find((el)=>el[1]=shootnum)
    const res = circle.filter((el)=>el[1]!=setShoot)
    setCircle([...res])
   setAdd([...add, baloons])
  }

  function handleback(el){
    let arr = add.filter((x)=>el[1]!=x[1])
    setAdd([...arr])
    setCircle([...circle,el]).sort((a,b)=>a[1]-b[1])
  }

  return (
    <div className="App">
      <div className='empty_div'>
        {add.map((el)=>{
          return(
            <div onClick={()=>handleback(el)}>
              <CircleDiv key={el[1]} color={el[0]} number={el[1]}/>
            </div>
          )
        })}
      </div>
      <div>
        {circle.map((el)=><CircleDiv key={el[1]} color={el[0]} number={el[1]}/>)}
      </div>
      <div style={{marginTop:"100px"}}>
        <input onChange={(e)=>setShoot(e.target.value)} type="text" />
        <button onClick={handleShoot}>Shoot</button>
      </div>
    </div>
  );
}

export default App;

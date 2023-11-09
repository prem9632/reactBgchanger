import { useState } from 'react'


function App() {
   let [color ,setColor] = useState("black")

  return (
    
    
   <div  className="w-full h-screen duration-200"
   style={{backgroundColor:color
   }}>
    <div id='animate' style={{height:60,backgroundColor:'pink'}}>
    <h1 style={{ textAlign:'center', fontSize:30, fontWeight:'bolder'}}>BackgroundColorChanger</h1>
    </div>
    <div   className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-xl"> 
    <button  onClick={()=>setColor("red")}  className="px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setColor("green")} className="px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>green</button>
    <button onClick={()=>setColor("salmon")} className="px-4 py-1 rounded-full" style={{backgroundColor:"salmon"}}>salmom</button>
    <button onClick={()=>setColor("lightblue")} className="px-4 py-1 rounded-full" style={{backgroundColor:"lightblue"}}>lightblue</button>
    <button onClick={()=>setColor("pink")} className="px-4 py-1 rounded-full" style={{backgroundColor:"pink"}}>pink</button>

    
      </div>
      </div>
   </div>
    
  )
}

export default App

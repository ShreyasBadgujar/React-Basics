
import {useState} from "react"
function App() {
  const[color,setColor]=useState("olive")
  return (
    
        <div className="w-full flex items-middle h-lvh" style={{backgroundColor:color}}>
          <div className="text-center fixed bg-amber-50 top-0 w-auto rounded-3xl">
            <button onClick={()=>setColor("red")} className="m-4 p-2 rounded-xl bg-red-500">Red</button>
            <button onClick={()=>setColor("blue")} className="m-4 p-2 rounded-xl bg-blue-500">Blue</button>
            <button onClick={()=>setColor("yellow")} className="m-4 p-2 rounded-xl bg-yellow-500">Yellow</button>
          </div>
        </div> 

  )
}

export default App

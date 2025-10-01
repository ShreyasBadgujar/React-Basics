import { useState,useCallback ,useEffect,useRef} from "react"
function App(){
  
  const [length,setLength]=useState(8)
  const[numAllowed,setNumallowed]=useState(false)
  const[charAllowed,setCharallowed]=useState(false)
  const[password,setPassword]=useState("")

   let passwordRef =useRef(null)

   const passwordGenerator = useCallback(()=>{
     let pass=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numAllowed) str+='0123456789'
     if(charAllowed) str+='~!@#$%^&*()_+|:"<>?'

     for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random()*str.length+1)
        pass += str[char]
     }
     setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const copyText = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    // alert("text copied")
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return(

    <div className="bg-black text-orange-400 h-lvh flex flex-col items-center">
       <div className="bg-gray-800 px-10 py-2 rounded-xl mt-10 ">
         <h1 className="text-2xl text-white text-center mb-2">Password Generator</h1>
       <div className="text-center mb-3 w-100">
          <input 
          type="text" 
          value={password}
          className="bg-amber-50 p-2 w-80  rounded-l-xl"
          ref={passwordRef}
          />
          <button
          onClick={copyText} 
          className="bg-blue-600 cursor-pointer text-white p-2 rounded-r-xl">Copy</button>
       </div>
       <div className="text-center"> 
         <input 
         type="range"
         onChange={(e)=>setLength(e.target.value)}
         value={length}
         className="w-20 mx-2 cursor-pointer accent-orange-400"
          />
          <label className="text-orange-400 mx-2">Length: {length}</label>
          <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={()=>setNumallowed(prev=>!prev)}
          />
          <label htmlFor="numberInput" className="text-orange-400 mx-2">Number</label>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>setCharallowed(prev=>!prev)}
          />
          <label htmlFor="charInput" className="text-orange-400 mx-2">Character</label>
       </div>
       </div>
    </div>
  )
  
}
export default App
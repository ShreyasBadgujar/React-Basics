import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBut'
import Card from './components/Card'

function App() {
 const [theme,setTheme]=useState("light")
  const themeMode=theme
 const darkTheme=()=>{
    setTheme('dark')
 }
  const lightTheme=()=>{
    setTheme('light')
 }

 useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])
  return (
     <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

     </ThemeProvider>
  )
}

export default App

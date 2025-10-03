import { createContext,useContext} from "react"

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

// export const ThemeProvider=({children})=>{
//     <ThemeContext.Provider>
//         {children}
//     </ThemeContext.Provider>
// }

export const ThemeProvider=ThemeContext.Provider

//create Hook
export default function useTheme(){
    return useContext(ThemeContext)
}


//step1: create context for changing state
//step2: create provider to provide state to all children
//step3: create custom hook to use context
//step4: wrap app with provider
//step5: use custom hook in any component to access context values 
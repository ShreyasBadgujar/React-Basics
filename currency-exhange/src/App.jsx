import {InputBox} from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import { useState } from "react";
function App() {
  const [amount , setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const[to,setTo]=useState("inr");
  const[convertedAmount,setConvertedAmount]=useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
    let BackgroundImage = "https://imgs.search.brave.com/EKPXV3tCSlTahDyNu_kb1M5w-49nHpmUUk_EPPzsQmI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MTUxOTMwMy92ZWN0/b3IvY2FuZGxlLWNo/YXJ0LWdyb3d0aC1n/cmFwaC1pbnZlc3Rt/ZW50LWZpbmFuY2Ut/YnVzaW5lc3MtbWFy/a2V0aW5nLXRyZW5k/cy1iZWFyaXNoLWFj/Y291bnRpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUg4/RHgydk1XT0pkUHFS/bFpuQUwwZnFiOXlV/THNtSFB2cVkxa2FO/MWVEdkE9"
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrency={from}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                 amount={convertedAmount}
                                currencyOptions={options}
                                onCurrency={to}
                                onCurrencyChange={(currency)=>setTo(amount)}
                                selectCurrency={from}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  export default App;
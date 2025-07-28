import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  // Helper to safely evaluate math expressions
  const calculate = (expr:String) => {
    try {
      // Replace scientific function names with Math equivalents
      let replacedExpr = expr
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/sqrt/g, "Math.sqrt")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")   // log base 10
        .replace(/ln/g, "Math.log")      // natural log
        .replace(/exp/g, "Math.exp")

      // Evaluate expression using Function constructor to allow Math functions 
      // **CAUTION**: In real apps use a math parser to avoid security issues
      return Function(`"use strict";return (${replacedExpr})`)()
    } catch (e) {
      return "Error"
    }
  }

  const handleClick = (value:String) => {
    if (value === "C") {
      // Clear all
      setInput("")
      setResult("")
    } else if (value === "CE") {
      // Clear last entry (remove last character)
      setInput(input.slice(0, -1))
    } else if (value === "=") {
      // Evaluate expression and set result
      const res = calculate(input)
      setResult(res)
    } else {
      // Append pressed button value to input
      setInput(input + value)
    }
  }

  // List of buttons with values
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "+", "=",
    "sin", "cos", "tan", "sqrt",
    "log", "ln", "exp", "π",
    "e", "C", "CE"
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <div>
          <h1 className="text-4xl font-bold text-center">Scientific calculator</h1>       
        </div>

        <div className="justify-between items-center h-170 border-2 border-gray-300 rounded-lg shadow-lg bg-white w-2/3 mt-10">
          {/* Calculator monitor */}
          <div className="h-30 flex flex-col items-center justify-center border mt-10 ml-4 mr-4 bg-gray-300 rounded-lg shadow-lg px-4">
            <div className="w-full text-right text-xl break-words min-h-[2rem]">{input || "0"}</div>
            <div className="w-full text-right text-2xl font-bold">{result}</div>
          </div>

          <div className="grid grid-cols-4 gap-4 p-4 mt-15">
            {buttons.map((btn) => (
              <button
                key={btn}
                className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default App

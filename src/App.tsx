
function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <div>
          <h1 className="text-4xl font-bold text-center">Scientific calculator</h1>
          
        </div>


        <div className="justify-between items-center h-170 border-2 border-gray-300 rounded-lg shadow-lg bg-white w-2/3 mt-10">
          {          /* Calculator monitor will go here */}
          <div className=" h-30 flex items-center justify-center border mt-10 ml-4 mr-4 bg-gray-300 rounded-lg shadow-lg">
            Monitor
          </div>
          <div className="grid grid-cols-4 gap-4 p-4 mt-15">
            {/* Calculator buttons will go here */}
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">7</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">8</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">9</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">/</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">4</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">5</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">6</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">*</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">1</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">2</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">3</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">-</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">0</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">.</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">+</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">=</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">sin</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">cos</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">tan</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">sqrt</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">log</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">ln</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">exp</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">π</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">e</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">C</button>
            <button className="bg-gray-300 text-black p-2 rounded-lg shadow hover:bg-gray-400">CE</button>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default App

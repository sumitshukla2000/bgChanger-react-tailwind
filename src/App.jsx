import { useState } from 'react'


function App() {
  const [color , setColor] = useState('olive');

  return (
    <div  className='w-full h-screen duration-200' style={{
      background:color
    }}>
      <div className='flex justify-center flex-wrap fixed bottom-12 py-1 inset-x-0 rounded-full gap-2'>
        <div className='bg-white max-w-none rounded-lg p-2 '>
        <div className='flex text-sm text-white justify-center gap-4 flex-wrap rounded-full px-3 py-1'>
          <button className='outline-none px-3 py-1 rounded-full hover:shadow-xl' style={{background:'red'}}
          onClick={()=>setColor('red')}>RED</button>
          <button className='outline-none px-3 py-1 rounded-full hover:shadow-xl' style={{background:'green'}}
          onClick={()=>setColor('green')}> GREEN</button>
          <button className='outline-none px-3 py-1 rounded-full hover:shadow-xl' style={{background:'blue'}}
          onClick={()=>setColor('blue')}>BLUE</button>
          <button className='outline-none px-3 py-1 rounded-full hover:shadow-xl' style={{background:'violet'}}
          onClick={()=>setColor('violet')}>VIOLET</button>
          <button className='outline-none px-3 py-1 rounded-full hover:shadow-xl' style={{background:'purple'}}
          onClick={()=>setColor('purple')}>PURPLE</button>
        </div>
      </div>
        </div>
    </div>
  )
}

export default App

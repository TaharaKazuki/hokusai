import * as esbuild from 'esbuild-wasm'
import { useState, useEffect } from 'react'

const App = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    })
    console.info(service)
  }

  useEffect(() => {
    startService()
  }, [])

  const onClick = () => {
    console.info(input)
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}

export default App

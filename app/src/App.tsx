import React from 'react'
import './App.css'
import { useGetPetById } from './__generated__/swaggerPetstore'

function App() {
  const { data, error } = useGetPetById(1)

  if (error) {
    return <div>error</div>
  }
  if (!data) {
    return <div>loading</div>
  }

  return (
    <div className="App">
      {data.name} {data.status}
    </div>
  )
}

export default App

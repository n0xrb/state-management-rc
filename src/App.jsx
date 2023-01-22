import './App.css'

import { UseState } from './UseState.jsx'
import { ClassState } from './ClassState.jsx'

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  )
}

export default App

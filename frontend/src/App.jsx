import { Workflow } from 'lucide-react'

const App = () => {

  const env = import.meta.env.VITE_TEST_ENV

  return (
    <>
      <div className="text-3xl font-bold underline">
        Hello, {env}
      </div>
      <Workflow color='green'/>
    </>
  )
}

export default App

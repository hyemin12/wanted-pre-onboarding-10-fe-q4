import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routers } from './router.jsx'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={routers} />
    </RecoilRoot>
  )
}

export default App

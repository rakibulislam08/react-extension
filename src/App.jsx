
import { Suspense } from "react"
import Countries from "./assets/component/comtires/countries"

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {

  return (
    <>
    <Suspense fallback={<p>Nadir Bhai Loading</p>}>
      
    <Countries countriesPromise = {countriesPromise}></Countries>
    </Suspense>
    
          <h1>Get started</h1>
        
    </>
  )
}

export default App

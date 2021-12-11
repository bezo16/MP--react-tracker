import { useEffect, useState } from "react"


export default function Home() {

    const [steps,setSteps] = useState(0)
    const [jumps,setJumps] = useState(0)

    useEffect(() => {
        console.log('prepare to train bitch')
    },[])

    function updateSteps() {
        localStorage.setItem('steps',Number(localStorage.getItem('steps')) + Number(steps))
        setSteps(0)
    }

    function updateJumps() {
        localStorage.setItem('jumps',Number(localStorage.getItem('jumps')) + Number(jumps))
        setJumps(0)
    }


    return (
      <main>
        <section className="training">
            <div>
                <h3>Walk trainig</h3>
                <input type="number" value={steps} onChange={(e) => setSteps(e.target.value)} placeholder="how much steps u hv made" />
                <button onClick={updateSteps}>Enter {steps}</button>
            </div>
            <div>
                <h3>Jumping trainig</h3>
                <input type="number" value={jumps} onChange={(e) => setJumps(e.target.value)} placeholder="how much steps u hv made" />
                <button onClick={updateJumps}>Enter {jumps}</button>
            </div>
        </section>
      </main>
    )
  }
import { useEffect, useState } from "react"
import styles from '../styles/train.module.css'
import { useRouter } from "next/router"


export default function Train() {

    const router = useRouter()
    const [km,setKm] = useState(0)
    const [jumps,setJumps] = useState(0)
    const [runKm,setRunKm] = useState(0)
    const [height,setHeight] = useState(0)

    const [walkTime,setWalkTime] = useState(0)
    const [runTime,setRunTime] = useState(0)
    const [jumpTime,setJumpTime] = useState(0)


    useEffect(() => {
        setHeight(localStorage.getItem('height'))
    },[])


    function updateWalking() {
        let steps = Math.floor((km * 1000) / ((height * 0.75) / 188))
        if(km && walkTime) {
            localStorage.setItem('steps',Number(localStorage.getItem('steps')) + Number(steps))
            localStorage.setItem('time',Number(localStorage.getItem('time')) + Number(walkTime))
            setKm(0)
            router.push('/')
        }
    }

    function updateRun() {
        let steps = Math.floor((runKm * 1000) / (height  / 188))
        if(runKm && runTime) {
            localStorage.setItem('run',Number(localStorage.getItem('run')) + Number(steps))
            localStorage.setItem('time',Number(localStorage.getItem('time')) + Number(walkTime))
            setRunKm(0)
            router.push('/')
        }
    }

    function updateJumps() {
        if(jumps && jumpTime) {
            localStorage.setItem('jumps',Number(localStorage.getItem('jumps')) + Number(jumps))
            localStorage.setItem('time',Number(localStorage.getItem('time')) + Number(jumpTime))
            setJumps(0)
            router.push('/')
        }
    }




    return (
      <main>
        <section className="training">
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3 className={styles['card-title']}>Walking</h3>
                    <label className={styles['card-label']} htmlFor="walking-steps">How much km u hv walked?</label>
                    <input className={styles['card-input']} id="walking-steps" type="number" value={km} onChange={(e) => setKm(e.target.value)}/>
                    <label className={styles['card-label']} htmlFor="walking-time">How much time did it take?(min)</label>
                    <input className={styles['card-input']} id="walking-time" type="number" value={walkTime} onChange={(e) => setWalkTime(e.target.value)}/>
                    <button className={styles['card-button']} onClick={updateWalking}>
                        Finish Training
                        <svg fill="var(--orange2)" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18.292v1.834c.644.129 1.177.303 1.496.528.273.192.274.498 0 .69-1.494 1.053-7.498 1.054-8.993 0-.272-.191-.271-.499 0-.69.319-.225.852-.399 1.497-.528v-1.833c-2.363.481-4 1.511-4 2.707 0 1.657 3.134 3 7 3s7-1.343 7-3c0-1.196-1.637-2.226-4-2.708zm7.45-14.94c-2.73 0-2.791-2.352-5.961-2.352-1.382 0-2.679.518-3.489 1.022v-2.022h-2v21h2v-9.122c.934-.553 2.172-1.048 3.5-1.048 2.993 0 3.413 2.237 6.081 2.237 1.058 0 1.914-.415 2.419-.736v-9.779c-.537.342-1.46.8-2.55.8zm.55 4.67c-1.801.486-4.082-1.087-5-1.693v2.671s-1.758-.803-5 .739v-2.901c1.188-1.046 3.292-1.734 5-.508v-2.808c.785.615 2.575 1.737 4.45 1.737.189 0 .372-.012.55-.033v2.796z"/></svg>
                    </button>
                </div>

                <div className={styles.card}>
                    <h3 className={styles['card-title']}>Running</h3>
                    <label className={styles['card-label']} htmlFor="walking-steps">How many jumps u have made?</label>
                    <input className={styles['card-input']} id="walking-steps" type="number" value={runKm} onChange={(e) => setRunKm(e.target.value)}/>
                    <label className={styles['card-label']} htmlFor="walking-time">How much time did it take?(min)</label>
                    <input className={styles['card-input']} id="walking-time" type="number" value={runTime} onChange={(e) => setRunTime(e.target.value)}/>
                    <button className={styles['card-button']} onClick={updateRun}>
                        Finish Training
                        <svg fill="var(--orange2)" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18.292v1.834c.644.129 1.177.303 1.496.528.273.192.274.498 0 .69-1.494 1.053-7.498 1.054-8.993 0-.272-.191-.271-.499 0-.69.319-.225.852-.399 1.497-.528v-1.833c-2.363.481-4 1.511-4 2.707 0 1.657 3.134 3 7 3s7-1.343 7-3c0-1.196-1.637-2.226-4-2.708zm7.45-14.94c-2.73 0-2.791-2.352-5.961-2.352-1.382 0-2.679.518-3.489 1.022v-2.022h-2v21h2v-9.122c.934-.553 2.172-1.048 3.5-1.048 2.993 0 3.413 2.237 6.081 2.237 1.058 0 1.914-.415 2.419-.736v-9.779c-.537.342-1.46.8-2.55.8zm.55 4.67c-1.801.486-4.082-1.087-5-1.693v2.671s-1.758-.803-5 .739v-2.901c1.188-1.046 3.292-1.734 5-.508v-2.808c.785.615 2.575 1.737 4.45 1.737.189 0 .372-.012.55-.033v2.796z"/></svg>
                    </button>
                </div>

                <div className={styles.card}>
                    <h3 className={styles['card-title']}>Jumps</h3>
                    <label className={styles['card-label']} htmlFor="walking-steps">How many jumps u have made?</label>
                    <input className={styles['card-input']} id="walking-steps" type="number" value={jumps} onChange={(e) => setJumps(e.target.value)}/>
                    <label className={styles['card-label']} htmlFor="walking-time">How much time did it take?(min)</label>
                    <input className={styles['card-input']} id="walking-time" type="number" value={jumpTime} onChange={(e) => setJumpTime(e.target.value)}/>
                    <button className={styles['card-button']} onClick={updateJumps}>
                        Finish Training
                        <svg fill="var(--orange2)" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18.292v1.834c.644.129 1.177.303 1.496.528.273.192.274.498 0 .69-1.494 1.053-7.498 1.054-8.993 0-.272-.191-.271-.499 0-.69.319-.225.852-.399 1.497-.528v-1.833c-2.363.481-4 1.511-4 2.707 0 1.657 3.134 3 7 3s7-1.343 7-3c0-1.196-1.637-2.226-4-2.708zm7.45-14.94c-2.73 0-2.791-2.352-5.961-2.352-1.382 0-2.679.518-3.489 1.022v-2.022h-2v21h2v-9.122c.934-.553 2.172-1.048 3.5-1.048 2.993 0 3.413 2.237 6.081 2.237 1.058 0 1.914-.415 2.419-.736v-9.779c-.537.342-1.46.8-2.55.8zm.55 4.67c-1.801.486-4.082-1.087-5-1.693v2.671s-1.758-.803-5 .739v-2.901c1.188-1.046 3.292-1.734 5-.508v-2.808c.785.615 2.575 1.737 4.45 1.737.189 0 .372-.012.55-.033v2.796z"/></svg>
                    </button>
                </div>
            </div>
        </section>
      </main>
    )
  }
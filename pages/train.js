import { useEffect, useState } from "react"
import styles from '../styles/train.module.css'
import { useRouter } from "next/router"


export default function Home() {

    const router = useRouter()
    const [km,setKm] = useState(0)
    const [jumps,setJumps] = useState(0)
    const [height,setHeight] = useState(0)


    useEffect(() => {
        setHeight(localStorage.getItem('height'))
    },[])


    function updateSteps() {
        let steps = Math.floor((km * 1000) / ((height * 0.75) / 188))
        localStorage.setItem('steps',Number(localStorage.getItem('steps')) + Number(steps))
        setKm(0)
        router.push('/')
    }

    function updateJumps() {
        localStorage.setItem('jumps',Number(localStorage.getItem('jumps')) + Number(jumps))
        setJumps(0)
    }


    return (
      <main>
        <section className="training">
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3 className={styles['card-title']}>Walking</h3>
                    <label className={styles['card-label']} htmlFor="walking">How much km u hv walked?</label>
                    <input className={styles['card-input']} id="walking" type="number" value={km} onChange={(e) => setKm(e.target.value)}/>
                    <button className={styles['card-button']} onClick={updateSteps}>Finish Training</button>
                </div>
               
            </div>
        </section>
      </main>
    )
  }
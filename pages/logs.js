import { useEffect, useState } from "react"
import styles from '../styles/logs.module.css'

   export default function Logs() {

    const [logs,setLogs] = useState([])

    useEffect(() => {
        setLogs(JSON.parse(localStorage.getItem('logs')))
    }, [])

    return (
        <main className="logs">
            <h1>logs </h1>
            
            {
                logs.map((log,index) => 
                <div key={index} className={styles.log}>
                    <span className={styles['log-date']}>{String(log.hours).padStart(2, '0')}:{String(log.minutes).padStart(2 , '0')}</span>
                    <span className={styles['log-time']}>{log.time}
                       <svg className={styles['log-time__svg']} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627  0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447   1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>
                    </span>
                    {log.jumps && <span>{log.jumps} jumps made</span>}
                    {log.walk && <span>{log.walk} km walked</span>}
                    {log.run && <span>{log.run} km runned</span>}
                </div>

                )
            }
        </main>
    )
   }
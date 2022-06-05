import React, { MouseEvent } from 'react'
import styles from './modal.module.css'

type PropsType = {
    callback: (d: any) => void
    children: React.ReactNode
}

export default function Modal ({callback, children}: PropsType) {

    const hundleSubmit = (e: MouseEvent) => {
        e.stopPropagation()
    }

    return <div className={styles.wrapper} onClick={callback}>
                <div className={styles.container} onClick={hundleSubmit}>
                <button onClick={() => callback(false)} className="close">X</button>
                    {children}
                </div>
    </div>

}
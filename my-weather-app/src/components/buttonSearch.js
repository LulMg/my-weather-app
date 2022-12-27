import React from "react"
import '../styles/buttonSearch.css'

export const ButtonSearch = ({title, colorClass}) => {

    return(
        <main className={`buttonBody gray ${colorClass}`}>
            <p className="title">{title}</p>
        </main>
    )
}
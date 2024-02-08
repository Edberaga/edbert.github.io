import React from "react"
import { WorkProject } from "../../data/WorkProject"

export const Product = ({img, link}) => {
    return (
      <>
        {WorkProject.map((par, index) => {
        return (
            <div key={index} className='p-container'>
                <div className="p">
                    <div className="p-browser">
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                        <div className="p-circle"></div>
                    </div>
                    <h2>{par.name}</h2>
                    <img src={par.img} alt={par.name} className='p-image'/>
                </div>

                <div className="p-description">
                    <p>
                        {par.desc}
                    </p>
                    <div className="p-buttons">
                        <button className='p-button'>
                            <a href={par.link} target="_blank" rel="noreferrer">Visit Site</a>
                        </button>
                        {(par.type === "web_app") && 
                        <button className='p-button'>
                            <a href={par.github} target="_blank" rel="noreferrer">View Code</a>
                        </button>
                        }
                    </div>
                </div>
            </div>
        );})}
    </>
    )
}
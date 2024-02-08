import './list.css'
import { Product } from './Product'
//import { products } from '../../data'

export const List = () => {
    return (
        <div className="l">
            <div className="l-texts">
                <h1 className="l-title">
                    My Work Projects
                </h1>
                <p className="l-desc">
                    I have develop few Web Application and Website through my Experiences.<br/>
                    (Note: Click the image to scrolls.)
                </p>
                <div className="l-list">
                    <Product />
                </div>
            </div>
        </div>
    )
} 
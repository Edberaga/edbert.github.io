import './list.css'
import { Product } from './Product'
//import { products } from '../../data'

export const List = () => {
    return (
        <div className="l">
            <div className="l-texts">
                <h1 className="l-title">
                    My Experience
                </h1>
                <p className="l-desc">
                    I have work as a freelancer to develop or design website interface and layouts. All of the works were used by Adobe Photoshop and Wordpress with Elementor Plugins.
                </p>
                <div className="l-list">
                    <Product />
                </div>
            </div>
        </div>
    )
} 
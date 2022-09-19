import "./education.css"
import Uni from '../../img/sunway.png'

export const Education = () => {
    return (
        <div className="e">
            <div className="e-left">
                <div className="e-card">
                    <img 
                        src={Uni} 
                        alt=""
                        className="e-img"
                    />
                </div>
            </div>
            <div className="e-right">
                <h1 className="a-title">I Studied at Sunway University</h1>
                <p className="a-sub">
                    
                </p>
            </div>
        </div>
    )
}
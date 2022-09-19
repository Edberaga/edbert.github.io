import KD from '../../img/website/kareducation.png'
import NFT from '../../img/website/NFT.png'
import NIU from '../../img/website/NIU.png'
import EU from '../../img/website/eu-website.png'
import POR from '../../img/website/Portugal.png'
import LAT from '../../img/website/Latvia.png'

export const Product = ({img, link}) => {
    return (
        <>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href="https://kareducation.com/" target="_blank" rel="noreferrer">
                <img src={KD} alt="" className="p-image"/>
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='https://kareducation.com/artist/' target="_blank" rel="noreferrer">
                <img src={NFT} alt="" className="p-image"/>
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='https://kareducation.com/niu/' target="_blank" rel="noreferrer">
                <img src={NIU} alt="" className="p-image"/>
            </a>
        </div>

        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='https://euequities.io/' target="_blank" rel="noreferrer">
                <img src={EU} alt="" className="p-image"/>
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='https://euequities.io/portugal/' target="_blank" rel="noreferrer">
                <img src={POR} alt="" className="p-image"/>
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='https://euequities.io/latvia/' target="_blank" rel="noreferrer">
                <img src={LAT} alt="" className="p-image"/>
            </a>
        </div>
    </>
    )
}
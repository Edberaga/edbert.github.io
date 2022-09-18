import './intro.css'
import Ed from '../../img/resume-picture.jpg'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jonnathan Edbert Halim</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Graphic Designer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        I'm a IT Student who passionate to creating stylish images,
                        modern websites, and web services. 
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Ed} alt="" className='i-img' />
            </div>
        </div>
    )
}

export default Intro
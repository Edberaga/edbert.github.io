import './intro.css'
import Ed from '../../img/resume-picture.jpg'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-intro">Hello, My name is</h1>
                    <h1 className="i-name">Jonnathan Edbert Halim</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Full Stack Programmer</div>
                            <div className="i-title-item">Web Designer</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                    <p>My journey in Programming started with a curiosity for coding and a desire to provide impactful life solutions.</p>
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
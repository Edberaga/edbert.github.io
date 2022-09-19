import './about.css'
import Nicholas from '../../img/Nicholas Birthday Card.png'
import Poster from '../../img/Poster.png'
import logo from '../../img/logo 4.jpg'
import Adm from '../../img/Admission - Project.jpg'

const About = () => {
    return (
        <div className='a'>
            <div className="a-header">
                <h1>My Projects</h1>
            </div>
            <div className="a-img-wrapper">
                <div className="project">
                    <h1 className="p-title">School Admission</h1>
                    <img src={Adm} alt="" className='p-img' />
                    <p className="p-desc">Build A school Admission Poster for the peace education centre school</p>
                </div>
                <div className="project">
                    <h1 className="p-title">TPEC Logo</h1>
                    <img src={logo} alt="" className='p-img' />
                    <p className="p-desc">Create a logo for the peace education centre school</p>
                </div>
                <div className="project">
                    <h1 className="p-title">School Poster</h1>
                    <img src={Poster} alt="" className='p-img' />
                    <p className="p-desc">Build A school Poster for the peace education centre school</p>
                </div>
                <div className="project">
                    <h1 className="p-title">Birthday Card</h1>
                    <img src={Nicholas} alt="" className='p-img' />
                    <p className="p-desc">Build A school Admission Poster for the peace education centre school</p>
                </div>
            </div>
        </div>
    )
}

export default About
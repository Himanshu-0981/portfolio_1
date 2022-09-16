import './Project.css'
import './Projects.css'
import Button from '../Button/Button'
import { FiArrowUpRight } from 'react-icons/fi'

function Project(props) {
    const {item} = props;
    return (
        <>
            <div className="project-div">
                <img src={item.img} alt={item.alt} />
                <div className="project-desc">
                    <p className='heading'>{item.title}</p>
                </div>
                <div className="project-btn">
                    <Button title="visit site" btnIcon={<FiArrowUpRight />} customClass="custom-btn-2" />
                </div>
            </div>
        </>
    )
}

export default Project
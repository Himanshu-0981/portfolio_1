import './Projects.css'
import Project from './Project'

function Projects() {

    const myData = [
        { id: 1, img: "./Files/project-1.png", alt: "Project 1", title: "calculator" },
        { id: 2, img: "./Files/project-2.png", alt: "Project 2", title: "AI Game" },
        { id: 3, img: "./Files/project-3.png", alt: "Project 3", title: "Quiz game" },
        { id: 4, img: "./Files/project-5.png", alt: "Project 4", title: "StopWatch" },
        { id: 5, img: "./Files/project-1.png", alt: "Project 1", title: "calculator" },
        { id: 6, img: "./Files/project-2.png", alt: "Project 2", title: "AI Game" },
        { id: 7, img: "./Files/project-3.png", alt: "Project 3", title: "Quiz game" },
        { id: 8, img: "./Files/project-5.png", alt: "Project 4", title: "StopWatch" },
    ]
    return (
        <>
            <main className='project-container'>
                <p className='project-heading'> PROJECTS </p>
                
                <div className="projects">
                    {
                        myData.map(item => <Project key={item.id} item={item} />)
                    }
                    {/* <div className="project-div">
                        <img src="./Files/project-2.png" alt="project 2" />
                        <div className="project-desc">
                            <p>Word counter</p>
                        </div>
                        <div className="project-btn">
                            <Button title="visit site" btnIcon={<FiArrowUpRight />} customClass="custom-btn-2" />
                        </div>
                    </div>
                    <div className="project-div">
                        <img src="./Files/project-3.png" alt="project 3" />
                        <div className="project-desc">
                            <p>Youtube clone</p>
                        </div>
                        <div className="project-btn">
                            <Button title="visit site" btnIcon={<FiArrowUpRight />} customClass="custom-btn-2" />
                        </div>
                    </div>
                    <div className="project-div">
                        <img src="./Files/project-5.png" alt="project 4" />
                        <div className="project-desc">
                            <p>AI game</p>
                        </div>
                        <div className="project-btn">
                            <Button title="visit site" btnIcon={<FiArrowUpRight />} customClass="custom-btn-2" />
                        </div>
                    </div> */}
                </div>
            </main>
        </>
    )
}

export default Projects;
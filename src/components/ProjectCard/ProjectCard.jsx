import React from 'react'
import styles from "./projectCard.module.css"
import projects from '../../data/projects'

const ProjectCard = () => {

    return (
        <>
            <section className={styles.projectsSection}>
                {projects.map((project) => (
                    <div className={styles.projectDetails} key={project.id}>
                        <div className={styles.projectCard} >
                            <a href={project.liveDemo}>
                                <div className={styles.imgContainer}>
                                    <img src={project.image} className={styles.cardImage} alt={project.title} />
                                </div>
                                <h3>{project.title}</h3>
                            </a>
                        </div>

                        <div className={styles.projectDesc}>
                            <h3>Overview</h3>
                            <p>{project.description}</p>
                            <div className={styles.projectLinks}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {project.liveDemo && (
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </section >
        </>

    )
}

export default ProjectCard
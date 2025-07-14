import { FC, useEffect } from 'react';
import typescript from '../assets/image/typescript.png';
import html from '../assets/image/html-5.png';
import css from '../assets/image/css3.png';
import java from '../assets/image/java.png';
import spring from '../assets/image/spring.png';
import springboot from '../assets/image/springboot.png';
import springsecurity from '../assets/image/springsecurity.png';
import github from '../assets/image/github.png';
import web from '../assets/image/web.png';
import './project.css';

interface Project {
    name: string;
    repository: string;
    photo: string;
    time: number;
    description: string;
}

const technologies = [
    { src: java, alt: 'Java' },
    { src: spring, alt: 'Spring Framework' },
    { src: springboot, alt: 'Spring Boot' },
    { src: springsecurity, alt: 'Spring Security' },
    { src: typescript, alt: 'TypeScript' },
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
];

export const ListProject = (project: Project) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.project');
        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <fieldset className="project hide" style={{ transitionDelay: `${project.time}ms` }}>
            <legend>{project.name}</legend>
            <figure>
                <img src={project.photo} alt="Project preview" />
                <figcaption />
            </figure>
            <header>
                {technologies.map((tech) => (
                    <figure key={tech.alt}>
                        <img src={tech.src} alt={tech.alt} />
                        <figcaption />
                    </figure>
                ))}
            </header>
            <center>
                <p>{project.description}</p>
                <a href={`https://github.com/gadelhati/${project.repository}`} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" />
                </a>
                <a className="isDisabled" href={`https://github.com/gadelhati/${project.repository}`} target="_blank" rel="noopener noreferrer">
                    <img src={web} alt="web" />
                </a>
            </center>
            <footer>
                <header>Projeto: {project.name}</header>
            </footer>
        </fieldset>
    );
};
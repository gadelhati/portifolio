import typescript from './../assets/image/typescript.png'
import html from './../assets/image/html-5.png'
import css from './../assets/image/css3.png'
// import react from './../assets/image/react.svg'
import java from './../assets/image/java.png'
import spring from './../assets/image/spring.png'
import springboot from './../assets/image/springboot.png'
import springsecutity from './../assets/image/springsecurity.png'
import github from './../assets/image/github.png'
import web from './../assets/image/web.png'
import './project.css'
import { useEffect } from 'react'

interface Project {
    name: string,
    repository: string,
    photo: string,
    time: number;
    description: string,
}

export const ListProject = (project: Project) => {
    useEffect(()=>{observer()})
    const observer = () => {
        const elements = Array.from(document.querySelectorAll('.project'))
        const myObserver = new IntersectionObserver((entries)=>{
            console.log(entries[0].isIntersecting)
            entries.forEach((entry: IntersectionObserverEntry)=>{
                if(entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        })
        elements.forEach((element: any)=> {
            myObserver.observe(element)
        })
        console.log(project.photo)
    }
    return (
        <fieldset className='project hide' style={{ transitionDelay: `${project.time}ms` }}>
            <legend>{project.name}</legend>
            <figure>
                <img src={project.photo} alt={"Project preview"} />
                <figcaption></figcaption>
            </figure>
            <header>
                <figure>
                    <img src={java} alt={"Java"} />
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src={spring} alt={"Spring Framework"} />
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src={springboot} alt={"Spring Boot"} />
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src={springsecutity} alt={"Spring Security"} />
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src={typescript} alt={"TypeScript"} />
                    <figcaption></figcaption>
                </figure>
                {/* <figure>
                    <img src={react} alt={"React"} />
                    <figcaption></figcaption>
                </figure> */}
                <figure>
                    <img src={html} alt={"HTML"} />
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src={css} alt={"CSS"} />
                    <figcaption></figcaption>
                </figure>
            </header>
            <center>
                <p>{project.description}</p>
                <a href={`https://github.com/gadelhati/${project.repository}`} target="_blank" >
                    <img src={github} alt='github'></img>
                </a>
                <a className='isDisabled' href={`https://github.com/gadelhati/${project.repository}`} target="_blank" >
                    <img src={web} alt='web'></img>
                </a>
            </center>
            <footer>
                <header>Projeto: {project.name}</header>
            </footer>
        </fieldset>
    )
}
import { FC, useEffect } from 'react';
import { Contact } from './contact';
import { ListProject } from './project';
import maps from '../assets/image/maps.jpg';
import wms from '../assets/image/wms.jpg';
import app from '../assets/image/app.jpg';
import nutrition from '../assets/image/nutrition.jpg';
import weather from '../assets/image/weather.jpg';
import support from '../assets/image/support.jpg';
import typescript from '../assets/image/typescript.png';
import html from '../assets/image/html-5.png';
import css from '../assets/image/css3.png';
import react from '../assets/image/react.svg';
import java from '../assets/image/java.png';
import spring from '../assets/image/spring.png';
import javascript from '../assets/image/js.png';
import postgre from '../assets/image/postgre.png';
import mysql from '../assets/image/mysql.png';
import angular from '../assets/image/angular.png';
import './portifolio.css';

interface Technology {
    src: string;
    alt: string;
    label: string;
}
interface Project {
    name: string;
    repository: string;
    photo: string;
    time: number;
    description: string;
}

export const Portfolio = () => {

    const backendTechnologies: Technology[] = [
        { src: java, alt: 'Java', label: 'Java' },
        { src: spring, alt: 'Spring', label: 'Spring' },
        { src: postgre, alt: 'PostgreSQL', label: 'Postgres e PostGis' },
        { src: mysql, alt: 'MySQL', label: 'MySQL' },
    ];

    const frontendTechnologies: Technology[] = [
        { src: typescript, alt: 'Typescript', label: 'Typescript' },
        { src: react, alt: 'React', label: 'React' },
        { src: javascript, alt: 'Javascript', label: 'JavaScript' },
        { src: angular, alt: 'Ionic', label: 'Angular com Ionic' },
        { src: html, alt: 'HTML5', label: 'HTML5' },
        { src: css, alt: 'CSS3', label: 'CSS3' },
    ];

    const projects: Project[] = [
        {
            name: 'App',
            repository: 'fla-app',
            photo: app,
            time: 0,
            description:
                'Um app de acompanhamento da Conmebol oferece atualizações em tempo real dos torneios sul-americanos, como a Libertadores e a Sul-Americana.',
        },
        {
            name: 'Maps',
            repository: 'maps-front',
            photo: maps,
            time: 200,
            description:
                'Com esta aplicação é possivel marcar locais específicos, associar dados como fotos e descrições. Ideal para urbanismo, gestão de propriedades, estudos ambientais e logística.',
        },
        {
            name: 'Nutrição',
            repository: 'nutrition-front',
            photo: nutrition,
            time: 400,
            description:
                'A aplicação oferece uma base de dados de alimentos e suas informações nutricionais, ajudando a registrar e calcular calorias, proteínas, carboidratos e gorduras consumidas.',
        },
        {
            name: 'Armazém',
            repository: 'wms',
            photo: wms,
            time: 600,
            description:
                'WMS gerencia operações de armazenamento e logística. Ele otimiza o controle de inventário, permitindo rastrear o recebimento, armazenagem.',
        },
        {
            name: 'Suporte',
            repository: 'support-front',
            photo: support,
            time: 800,
            description:
                'Gerencia o inventário e a manutenção de dispositivos tecnológicos. Permite cadastrar e monitorar equipamentos de e periféricos, registrando fabricante, modelo e outros.',
        },
        {
            name: 'Meteorologia',
            repository: 'weather-back',
            photo: weather,
            time: 1000,
            description:
                'Registra e exibe dados sobre as condições climáticas. Oferece informações como temperatura, umidade, pressão atmosférica, velocidade e direção do vento.',
        },
    ];

    return (
        <main id="portifolio">
            <section>
                <article>
                    <h3>Full Stack Developer</h3>
                    <h1>MARCELO GADELHA</h1>
                </article>
            </section>
            <section>
                <article id="parallax-one">
                    <center>
                        {projects.map((project, index) => (
                            <ListProject
                                key={project.repository}
                                name={project.name}
                                repository={project.repository}
                                photo={project.photo}
                                time={project.time}
                                description={project.description}
                            />
                        ))}
                    </center>
                </article>
            </section>
            <section>
                <article>
                    <center>
                        <ul id="backend" className="project hide">
                            {backendTechnologies.map((tech) => (
                                <li key={tech.alt}>
                                    <img src={tech.src} alt={tech.alt} />
                                    <p>{tech.label}</p>
                                </li>
                            ))}
                        </ul>
                        <ul id="frontend" className="project hide">
                            {frontendTechnologies.map((tech) => (
                                <li key={tech.alt}>
                                    <img src={tech.src} alt={tech.alt} />
                                    <p>{tech.label}</p>
                                </li>
                            ))}
                        </ul>
                    </center>
                </article>
            </section>
            <section>
                <article id="parallax-two">
                    <header>VAMOS TRABALHAR JUNTOS!</header>
                    <center />
                </article>
            </section>
            <section>
                <article className="block">
                    <center>
                        <p>
                            Sou um desenvolvedor full stack com vasta experiência em arquitetura e desenvolvimento de sistemas corporativos na plataforma Java, combinando habilidades em back-end e front-end para criar soluções robustas e escaláveis. Com forte especialização em Java Enterprise Edition (J2EE) e tecnologias de ponta, atuo no desenvolvimento de aplicações distribuídas, utilizando frameworks como Spring Boot, Spring Security, e Spring MVC, além de tecnologias de banco de dados como PostgreSQL (com extensão PostGis) e MySQL.
                        </p>
                        <p>
                            No front-end, domino React, Typescript, Angular com Ionic, HTML5 e CSS3, criando interfaces modernas e responsivas que maximizam a experiência do usuário. Minha experiência inclui o desenvolvimento de sistemas completos, da arquitetura de três camadas ao desenvolvimento de APIs RESTful, além da integração de aplicações corporativas utilizando web services e SOA.
                        </p>
                        <p>
                            Como líder de projetos, sou responsável pelo planejamento, execução e gerenciamento de equipes, aplicando metodologias ágeis para garantir entregas eficientes e de alta qualidade. Meu foco é desenvolver soluções que atendam aos requisitos de negócios e sejam sustentáveis a longo prazo, contribuindo para o sucesso de organizações públicas e privadas, independentemente do porte.
                        </p>
                    </center>
                </article>
            </section>
            <aside>
                <Contact />
            </aside>
        </main>
    );
};
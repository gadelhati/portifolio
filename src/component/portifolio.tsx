import { Contact } from './contact'
import { ListProject } from './project'
import maps from './../assets/image/maps.jpg'
import wms from './../assets/image/wms.jpg'
import app from './../assets/image/app.jpg'
import nutrition from './../assets/image/nutrition.jpg'
import weather from './../assets/image/weather.jpg'
import support from './../assets/image/support.jpg'
import typescript from './../assets/image/typescript.png'
import html from './../assets/image/html-5.png'
import css from './../assets/image/css3.png'
import react from './../assets/image/react.svg'
import java from './../assets/image/java.png'
import spring from './../assets/image/spring.png'
import javascript from './../assets/image/js.png'
import postgre from './../assets/image/postgre.png'
import mysql from './../assets/image/mysql.png'
// import springboot from './../assets/image/springboot.png'
// import springsecutity from './../assets/image/springsecurity.png'
import angular from './../assets/image/angular.png'
import './portifolio.css'

export const Portifolio = () => {
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
                        <ListProject name={'App'} repository={'fla-app'} photo={`${app}`} time={0} description={'Um app de acompanhamento da Conmebol oferece atualizações em tempo real dos torneios sul-americanos, como a Libertadores e a Sul-Americana.'} />
                        <ListProject name={'Maps'} repository={'maps-front'} photo={`${maps}`} time={200} description={'Com esta aplicação é possivel marcar locais específicos, associar dados como fotos e descrições. Ideal para urbanismo, gestão de propriedades, estudos ambientais e logística.'} />
                        <ListProject name={'Nutrição'} repository={'nutrition-front'} photo={`${nutrition}`} time={400} description={'A aplicação oferece uma base de dados de alimentos e suas informações nutricionais, ajudando a registrar e calcular calorias, proteínas, carboidratos e gorduras consumidas.'} />
                        <ListProject name={'Armazém'} repository={'wms'} photo={`${wms}`} time={600} description={'WMS gerencia operações de armazenamento e logística. Ele otimiza o controle de inventário, permitindo rastrear o recebimento, armazenagem.'} />
                        <ListProject name={'Suporte'} repository={'support-front'} photo={`${support}`} time={800} description={'Gerencia o inventário e a manutenção de dispositivos tecnológicos. Permite cadastrar e monitorar equipamentos de e periféricos, registrando fabricante, modelo e outros.'} />
                        <ListProject name={'Meteorologia'} repository={'weather-back'} photo={`${weather}`} time={1000} description={'Registra e exibe dados sobre as condições climáticas. Oferece informações como temperatura, umidade, pressão atmosférica, velocidade e direção do vento.'} />
                    </center>
                </article>
            </section>
            <section>
                <article>
                    <center>
                        <ul id='backend' className='project hide'>
                            <li><img src={java} alt={"Java"} /><p>Java</p></li>
                            <li><img src={spring} alt={"Spring"} /><p>Spring</p></li>
                            <li><img src={postgre} alt={"PostgreSQL"} /><p>Postgres e PostGis</p></li>
                            <li><img src={mysql} alt={"MySQL"} /><p>MySQL</p></li>
                        </ul>
                        <ul id='frontend' className='project hide'>
                            <li><img src={typescript} alt={"Typescript"} /><p>Typescricpt</p></li>
                            <li><img src={react} alt={"React"} /><p>React</p></li>
                            <li><img src={javascript} alt={"Javascript"} /><p>JavaScript</p></li>
                            <li><img src={angular} alt={"Ionic"} /><p>Angular com Ionic</p></li>
                            <li><img src={html} alt={"HTML5"} /><p>HTML5</p></li>
                            <li><img src={css} alt={"CSS3"} /><p>CSS3</p></li>
                        </ul>
                    </center>
                </article>
            </section>
            <section>
                <article id="parallax-two">
                    <header>VAMOS TRABALHAR JUNTOS!</header>
                    <center></center>
                </article>
            </section>
            <section>
                <article className="block">
                    <center>
                        <p>Sou um desenvolvedor full stack com vasta experiência em arquitetura e desenvolvimento de sistemas corporativos na plataforma Java, combinando habilidades em back-end e front-end para criar soluções robustas e escaláveis. Com forte especialização em Java Enterprise Edition (J2EE) e tecnologias de ponta, atuo no desenvolvimento de aplicações distribuídas, utilizando frameworks como Spring Boot, Spring Security, e Spring MVC, além de tecnologias de banco de dados como PostgreSQL (com extensão PostGis) e MySQL.</p>
                        <p>No front-end, domino React, Typescript, Angular com Ionic, HTML5 e CSS3, criando interfaces modernas e responsivas que maximizam a experiência do usuário. Minha experiência inclui o desenvolvimento de sistemas completos, da arquitetura de três camadas ao desenvolvimento de APIs RESTful, além da integração de aplicações corporativas utilizando web services e SOA.</p>
                        <p>Como líder de projetos, sou responsável pelo planejamento, execução e gerenciamento de equipes, aplicando metodologias ágeis para garantir entregas eficientes e de alta qualidade. Meu foco é desenvolver soluções que atendam aos requisitos de negócios e sejam sustentáveis a longo prazo, contribuindo para o sucesso de organizações públicas e privadas, independentemente do porte.</p>
                    </center>
                </article>
            </section>
            <aside>
                <Contact />
            </aside>
        </main>
    )
}
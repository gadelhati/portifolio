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
                    {/* <header>PROJECTS</header> */}
                    {/* <div className='projects'> */}
                        <ListProject name={'App'} repository={'fla-app'} photo={`${app}`} time={0} description={'Um app de acompanhamento da Conmebol oferece atualizações em tempo real dos torneios sul-americanos, como a Libertadores e a Sul-Americana.'} />
                        <ListProject name={'Maps'} repository={'maps-front'} photo={`${maps}`} time={200} description={'Com esta aplicação é possivel marcar locais específicos, associar dados como fotos e descrições. Ideal para urbanismo, gestão de propriedades, estudos ambientais e logística.'} />
                        <ListProject name={'Nutrição'} repository={'nutrition-front'} photo={`${nutrition}`} time={400} description={'A aplicação oferece uma base de dados de alimentos e suas informações nutricionais, ajudando a registrar e calcular calorias, proteínas, carboidratos e gorduras consumidas.'} />
                        <ListProject name={'Armazém'} repository={'wms'} photo={`${wms}`} time={600} description={'WMS gerencia operações de armazenamento e logística. Ele otimiza o controle de inventário, permitindo rastrear o recebimento, armazenagem.'} />
                        <ListProject name={'Suporte'} repository={'support-front'} photo={`${support}`} time={800} description={'Gerencia o inventário e a manutenção de dispositivos tecnológicos. Permite cadastrar e monitorar equipamentos de e periféricos, registrando fabricante, modelo e outros.'} />
                        <ListProject name={'Observação Meteorológica'} repository={'weather-back'} photo={`${weather}`} time={1000} description={'Registra e exibe dados sobre as condições climáticas. Oferece informações como temperatura, umidade, pressão atmosférica, velocidade e direção do vento.'} />
                    {/* </div> */}
                </article>
            </section>
            <section>
                <article className="block">
                    <p><span className="first-character sc">P</span>ós Graduado em Engenharia de Software com Java Enterprise Edition, Bacharel em Sistemas de Informação com Ênfase em Análise de Sistemas, Técnico em Hidrografia e navegação formado pela Marinha do Brasil.</p>
                    <ul><p>Especializações Back-end:</p>
                        <li><img src={java} alt={"Java"} /><p>Java</p></li>
                        <li><img src={spring} alt={"Spring"} /><p>Spring: Spring Boot, Spring Security, Spring MVC</p></li>
                        <li><img src={postgre} alt={"PostgreSQL"} /><p>Postgres e PostGis</p></li>
                        <li><img src={mysql} alt={"MySQL"} /><p>MySQL</p></li>
                    </ul>
                    <ul><p>Especializações Front-end:</p>
                        <li><img src={typescript} alt={"Typescript"} /><p>Typescricpt</p></li>
                        <li><img src={react} alt={"React"} /><p>React</p></li>
                        <li><img src={javascript} alt={"Javascript"} /><p>JavaScript</p></li>
                        <li><img src={angular} alt={"Ionic"} /><p>Angular com Ionic</p></li>
                        <li><img src={html} alt={"HTML5"} /><p>HTML5</p></li>
                        <li><img src={css} alt={"CSS3"} /><p>CSS3</p></li>
                    </ul>
                </article>
            </section>
            <section>
                <article id="parallax-two">
                    <header>HOW CAN I HELP YOU</header>
                </article>
            </section>
            <section>
                <article className="block">
                    <p><span className="first-character ny">O</span> Bacharel em Sistemas de Informação atua com inovação, planejamento e gerenciamento da informação e da infra-estrutura de tecnologia da informação alinhados às estratégias organizacionais como também com o desenvolvimento e evolução de sistemas de informação e da infra-estrutura de informação e comunicação, ambos aplicados aos processos organizacionais.</p>
                    {/* <p id="line-break "></p> */}
                    <p><span className="first-character ny">P</span>rofissional responsável pela arquitetura de soluções e desenvolvimento de sistemas na plataforma Java, capaz de gerenciar projetos e equipes, usando metodologia adequada. O especialista em Engenharia de Software pode atuar em organizações públicas e privadas, de qualquer porte ou ramo de atuação. Ele desenvolve aplicações corporativas distribuídas, utilizando a linguagem Java, na plataforma Enterprise Edition (J2EE), com arquitetura de três camadas, JSP, Servlets, Struts, Ajax, Java Server Faces, Enterprise JavaBeans 3.0 e Hibernate. Além disso, elabora e implementa processos de desenvolvimento de software e planos de teste, integra aplicações corporativas utilizando web services e SOA, soluciona conflitos, negocia prazos e recursos, lidera equipes e projetos.</p>
                </article>
            </section>
            <section>
                <article id="parallax-three">
                    <header>SOFTSKILLS</header>
                </article>
            </section>
            <section>
                <article className="block">
                    <p><span className="first-character atw">S</span>uspervisor de Desenvolvimento de Software. Atuando na gestão e liderança da equipe de desenvolvimento. Responsável pela definição e distribuição de tarefas, acompanhando o progresso, e garantia da aderência aos padrões de qualidade e prazos. Um ponto de referência técnico, oferecendo orientação e resolução de desafios complexos.</p>
                    {/* <p id="line-break "></p> */}
                    <p><span className="first-character atw">C</span>oleta dados meteorológicos, maregráficos, oceanográficos, hidrográficos, geológicos, por meio da operação de equipamentos específicos. Interpreta boletins meteorológicos. Confecciona cartas náuticas oceânicas e de vias navegáveis interiores, sob supervisão profissional pertinente. Efetua medições em campo para execução dos métodos topográfico-altimétricos. Realiza cálculos topográficos. Identifica astros e elementos que determinam sua posição na esfera celeste. Determina a posição de um navio por meio de métodos específicos. Orienta equipes nas tarefas de medição de ângulos, observação e cálculos de marés. Opera sistemas de geoprocessamento.</p>
                    {/* <p id="line-break "></p> */}
                    <p><span className="first-character atw">I</span>nstrutor de Informática planeja e desenvolve situações de ensino e aprendizagem voltadas para a qualificação profissional de jovens e adultos orientando-os nas técnicas específicas da área em questão. Ele avalia processo ensino/aprendizagem; elabora material pedagógico; sistematiza estudos, informações e experiências sobre a área ensinada.</p>
                </article>
            </section>
            <aside>
                <Contact />
            </aside>
        </main>
    )
}
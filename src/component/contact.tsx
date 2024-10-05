import whatsapp from './../assets/image/whatsapp.png'
import linkedin from './../assets/image/linkedin.png'
import github from './../assets/image/github.png'
import './../container/contact.css'

export const Contact = () => {
    return (
        <nav className='contact'>
            <a className="bt-whatsapp" href="https://api.whatsapp.com/send?phone=5521995139695&text=Em%20que%20vamos%20trabalhar?" target="_blank" >
                <img src={whatsapp} alt='whatsapp'></img>
            </a>
            <a className="bt-linkedin" href="https://www.linkedin.com/in/marcelogadelha/" target="_blank" >
                <img src={linkedin} alt='linkedin'></img>
            </a>
            <a className="bt-github" href="https://github.com/gadelhati/" target="_blank" >
                <img src={github} alt='github'></img>
            </a>
        </nav>
    )
}
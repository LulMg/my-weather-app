import {Input} from '../Components/input'
import '../Styles/footer.css'

export const Footer = () =>{
    return(
        <footer className="general">
            <section className="flexFooter">
                <div className="listFooter">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#servicesTitle">Services</a></li>
                        <li><a href="#imageBoxes">Our Works</a></li>
                        <li><a href="#finalCont">Clients</a></li>
                        <li><a href="#finals">Contact</a></li>
                    </ul>
                </div>
                <div>
                   <h1 className="eddie">Edie</h1>
                <div className="icons">
                    <p><i className="fa-brands fa-instagram fa-xl"></i></p>
                    <p><i className="fa-brands fa-linkedin fa-xl"></i></p>
                    <p><i className="fa-brands fa-square-twitter fa-xl"></i></p>
                </div> 
                </div>
                <div className="contactInput">
                    <p className="contactMessage">Want us to contact you?</p>
                    <Input/>
                </div>
            </section>
            <div className="byMe"><p>created by <a href=""> <b>LulMg</b></a> - devChallenges.io</p></div>
        </footer>
    )
}
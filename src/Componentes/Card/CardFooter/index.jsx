import { FaFacebookSquare, 
         FaTwitterSquare, 
         FaInstagramSquare, 
         FaGithubSquare} from "react-icons/fa";
import "./estilo.css";



const Footer = () => {
    return(
        <>
            <ul className="redes-sociais">
                <li><a href="#"><FaFacebookSquare/></a></li>
                <li><a href="#"><FaTwitterSquare/></a></li>
                <li><a href="#"><FaInstagramSquare/></a></li>
                <li><a href="#"><FaGithubSquare/></a></li>
            </ul>
        </>
    );
}

export default Footer
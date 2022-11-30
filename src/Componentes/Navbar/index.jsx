import { Component } from "react";
import "./estilo.css";

export default class Navbar extends Component{
    render(){
        return(
            <>
                <ul className="barra-de-navegacao">
                    <li><a href="#">INÍCIO</a></li>
                    <li><a href="#">PRODUTOS</a></li>
                    <li><a href="#">FALE CONOSCO</a></li>
                </ul>
            </>
        );
    }

}



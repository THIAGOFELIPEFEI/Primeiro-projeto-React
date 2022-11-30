import EmailButton from "../Buttons/EmailButton";
import LinkedinButton from "../Buttons/LinkedinButton";
import CardDetail from "../CardDetail";
import CardHeader from "../CardHeader";
import Footer from "../CardFooter";
import "./estilo.css";

const CardBody = () => {
    return(
        <>
            <main className="card-corpo">
                <section className="profile-foto"></section>
                <CardHeader />
                <section className="card-botoes">
                    <EmailButton />
                    <LinkedinButton />
                </section>
                <section className="detalhes">
                    <CardDetail />
                          
                </section>
                
                    <Footer />
                
            </main>
        </>
    );
}

export default CardBody
import "./About.css";
import picture from '../../assets/me.jpg';

function About() {
  return (
    <div id="autor">
      <div className="autor-nombre">
        <h2>Autora:</h2>
        <h3>Amalia Barrigas</h3>
      </div>

      <div>
        <div className="git">
          <img 
            src={picture} 
            alt="Foto de Amalia Barrigas" 
          />
          <div>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/amaliabarrigasmunuera/">
                Amalia Barrigas Munuera
              </a>
            </p>
            <p>UX/UI | Ilustrator | Web development | Studying psychology at UNED as a hobby</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

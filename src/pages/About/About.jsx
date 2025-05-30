import "./About.css";
import picture from '../../assets/me.jpg';

function About() {
  return (
    <div id="autor">
      <div className="autor-nombre">
        <h3>Autora:</h3>
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
              <a href="https://www.linkedin.com/in/amaliabarrigasmunuera/" target="_blank">
                Amalia Barrigas Munuera
              </a>
            </p>
            <p>🎨UX/UI | Ilustrator | 💻Web development | 🧠Studying psychology at UNED as a hobby</p>
            <br />
            <p>Passionate about design, curious by nature, and always in search of the story behind each detail. With a deep love for urban greenery, I created this project to bring nature and technology together—one tree at a time.</p>
            <br />
            <p>In this APP the illustration that I designed is the logo and the ICON, the rest come from image banks. **</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

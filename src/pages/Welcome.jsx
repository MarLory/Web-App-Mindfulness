import "../App.css"
import Button from "../components/atoms/Button";
import IconMoonSun from "../components/atoms/IconMoonSun";
import Title from "../components/atoms/Title";
import logo from "../assets/media/Logo.png";

export default function Welcome() {


  return (
    <>   
    <div className="body">
      <header className="text-center mx-auto">

        <div className="relative">
            <IconMoonSun 
              className="fa-moon absolute right-4 mt-5 text-blue-900 text-2xl"
            />
        </div>
        <img src={logo} alt="Logo" />
        <Title>Ritrova il tuo respiro, </Title>
        <h2 className="text-4xl font-bold text-white">inizia la tua pratica di consapevolezza</h2>
      </header>

      <div className="flex flex-col">
        <Button to="/cardspage"
                className="button buttonblack">Inizia
        </Button>
      </div>
      </div>
    </>
  )
}





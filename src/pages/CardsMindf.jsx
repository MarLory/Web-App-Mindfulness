import HeaderCards from "../components/atoms/molecules/organisms/HeaderCards";
import ArticlesCard from "../components/atoms/molecules/organisms/ArticlesCard";

export default function CardsMindf() {
    
const cardData = [

    {
        title:"Pratica sul respiro",
        src:"./src/assets/media/relax.jpg",
        alt:"Sassi sulla spiaggia",
        link:"/cardspage/breath-card"
    },

    {
        title:"Body Scan",
        src:"./src/assets/media/meditation.jpg",
        alt:"Donna in meditazione in un prato",
        link:"/cardspage/body-card"
    },

    {
        title:"Pratica della montagna",
        src:"./src/assets/media/meditate.jpg",
        alt:"Ragazzo che medita in mezzo alla natura",
        link:"/cardspage/mountain-card"
    },


]
    return (
    <>
    
    <HeaderCards>Pratiche di consapevolezza</HeaderCards>
        {cardData.map ( (card, index) => (

            <ArticlesCard
               key={index}
               title={card.title}
               src={card.src}
               alt={card.alt}
               link={card.link}
            >
            </ArticlesCard>

        

        ) )
        
        }

    </>

      );
       }
  

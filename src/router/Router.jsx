import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Root from "../pages/Root";
import CardsMindf from "../pages/CardsMindf";
import BreathCard from "../pages/BreathCard";
import BodyScanCard from "../pages/BodyScanCard";
import MountainCard from "../pages/MountainCard";




const router = createBrowserRouter ([

    {
        path: "/",
        element: <Welcome />,
    },

    // rotta annidata (quando ci sono layouts condivisi):
    {
        path: "/cardspage",
        element: <Root />, // contiene outlet e mainlayout
        children: [
              {
                 index: true,
                 element: <CardsMindf />
              },
              
              {
                path:"breath-card",
                element: <BreathCard />
              },

              {
                path:"body-card",
                element: <BodyScanCard />
              },

              {
                path:"mountain-card",
                element: <MountainCard />
              },

        ]
    },

    
    
])

export default router;


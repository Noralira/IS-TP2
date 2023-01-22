import Players from "../Tables/Players";
import Flights from "../Tables/flights";
import Classes from "../Tables/classes";
import Airlines from "../Tables/airlines";
import Routes from "../Tables/routes";
import times_flights from "../Tables/times_flights";
import Times from "../Tables/times";


const Sections = [

    {
        id: "flights",
        label: "Flights",
        content: <Flights/>
    },

    {
        id: "airlines",
        label: "Airlines",
        content: <Airlines/>
    },

    {
        id: "classes",
        label: "Classes",
        content:<Classes/>
    },
    {
        id: "routes",
        label: "Routes",
        content: <Routes/>
    },
    {
        id: "times_flights",
        label: "Times_flights",
        content: <times_flights/>
    },
    {
        id: "times",
        label: "Times",
        content: <Times/>
    }
];

export default Sections;
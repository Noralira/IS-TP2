import TopTeams from "../Procedures/TopTeams";
import TopFlights from "../Procedures/flights";

const Sections = [

    {
        id: "top-teams",
        label: "Top Teams",
        content: <TopTeams/>
    },

    {
        id: "top-scorers",
        label: "Top Scorers",
        content: <h1>Top Scorers - Work in progresss</h1>
    },
    {
        id: "top-flights",
        label: "Top Flights",
        content: <TopFlights/>
    }

];

export default Sections;
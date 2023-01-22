import {useEffect, useState} from "react";
import {
    CircularProgress,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";


const DEMO_FLIGHTS = [
    
    {"id": "0", "airline": "SpiceJet", "flight": "SG-8709", "source_city":"Delhi", "departure_time":"Evening", "stops":"zero", "arrival_time":"Night",
"destination_city":"Mumbai", "class": "Economy", "duration":"2.17", "days_left": "1", "price":"5953"},

{"id": "158", "airline": "Indigo", "flight": "6E-6202", "source_city":"Delhi", "departure_time":"Morning", "stops":"zero", "arrival_time":"Afternoon",
"destination_city":"Mumbai", "class": "Economy", "duration":"2.17", "days_left": "2", "price":"7845"},

{"id": "218", "airline": "Vistara", "flight": "UK-813", "source_city":"Delhi", "departure_time":"Evening", "stops":"one", "arrival_time":"Morning",
"destination_city":"Mumbai", "class": "Economy", "duration":"17.83", "days_left": "2", "price":"15353"},

{"id": "553", "airline": "Vistara", "flight": "UK-747", "source_city":"Delhi", "departure_time":"Early_Morning", "stops":"one", "arrival_time":"Night",
"destination_city":"Mumbai", "class": "Economy", "duration":"13.83", "days_left": "4", "price":"18345"},

{"id": "1100", "airline": "Air_India", "flight": "AI-429", "source_city":"Delhi", "departure_time":"Morning", "stops":"one", "arrival_time":"Evening",
"destination_city":"Mumbai", "class": "Economy", "duration":"7.25", "days_left": "7", "price":"21180"},

{"id": "15743", "airline": "Air_India", "flight": "AI-883", "source_city":"Delhi", "departure_time":"Night", "stops":"one", "arrival_time":"Night",
"destination_city":"Bangalore", "class": "Economy", "duration":"24.5", "days_left": "29", "price":"6533"},

{"id": "7343", "airline": "Indigo", "flight": "6E-2193", "source_city":"Delhi", "departure_time":"Afternoon", "stops":"zeonero", "arrival_time":"Evening",
"destination_city":"Mumbai", "class": "Economy", "duration":"3.83", "days_left": "37", "price":"3968"},

{"id": "11715", "airline": "GO_FIRST", "flight": "G8-143", "source_city":"Delhi", "departure_time":"Morning", "stops":"one", "arrival_time":"Evening",
"destination_city":"Bangalore", "class": "Economy", "duration":"7.17", "days_left": "11", "price":"7424"}

];

function Flights() {

    const PAGE_SIZE = 10;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [maxDataSize, setMaxDataSize] = useState(DEMO_FLIGHTS.length);

    useEffect(() => {
        //!FIXME: this is to simulate how to retrieve data from the server
        //!FIXME: the entities server URL is available on process.env.REACT_APP_API_ENTITIES_URL
        setData(null);
        setTimeout(() => {            console.log(`fetching from ${process.env.REACT_APP_API_ENTITIES_URL}`)
            setData(DEMO_FLIGHTS.filter((item, index) => Math.floor(index / PAGE_SIZE) === (page - 1)));
        }, 500);
    }, [page])

    return (
        <>
            <h1>Flights</h1>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" width={"1px"} align="center">ID</TableCell>
                            <TableCell>Airline</TableCell>
                            <TableCell>Flight</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Departure Time</TableCell>
                            <TableCell>Stops</TableCell>
                            <TableCell>Arrival time</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Days left</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data ?
                                data.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        style={{background: "gray", color: "black"}}
                                    >
                                        <TableCell component="td" align="center">{row.id}</TableCell>
                                        <TableCell component="td" scope="row">
                                            {row.airline}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.flight}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.source}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.departure_time}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.stops}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.arrival_time}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.destination}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.class}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.duration}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.days_left}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.price}
                                        </TableCell>
                                    </TableRow>
                                ))
                                :
                                <TableRow>
                                    <TableCell colSpan={12}>
                                        <CircularProgress/>
                                    </TableCell>
                                </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                maxDataSize && <div style={{background: "black", padding: "1rem"}}>
                    <Pagination style={{color: "black"}}
                                variant="outlined" shape="rounded"
                                color={"primary"}
                                onChange={(e, v) => {
                                    setPage(v)
                                }}
                                page={page}
                                count={Math.ceil(maxDataSize / PAGE_SIZE)}
                    />
                </div>
            }


        </>
    );
}

export default Flights;

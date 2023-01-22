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


const DEMO_TIMES_FLIGHTS = [
    
    {"id": "0", "id_flights": "SpiceJet", "id_times": "SG-8709", "duration":"Delhi", "days":"Evening","created_on":"Mumbai", "updated_on": "Economy"},

];

function times_flights() {

    const PAGE_SIZE = 10;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [maxDataSize, setMaxDataSize] = useState(DEMO_TIMES_FLIGHTS.length);

    useEffect(() => {
        fetch('http://${process.env.REACT_APP_API_ENTITIES_URL}/api/times_flights')
        .then ((response)=>response.json())
        .then((data)=>setData(data));
       
    }, [page])

    return (
        <>
            <h1>Times Flights</h1>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" width={"1px"} align="center">ID</TableCell>
                            <TableCell>Id flight</TableCell>
                            <TableCell>Id times</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Days</TableCell>
                            <TableCell>Created on</TableCell>
                            <TableCell>Updated on</TableCell>

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
                                            {row.id_flights}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.id_times}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.duration}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.days}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.created_on}
                                        </TableCell>
                                        <TableCell component="td" align="center" scope="row">
                                            {row.updated_on}
                                        </TableCell>
                                        
                                
                                    </TableRow>
                                ))
                                :
                                <TableRow>
                                    <TableCell colSpan={7}>
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

export default times_flights;
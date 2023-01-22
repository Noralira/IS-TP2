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


const DEMO_COUNTRIES = [
    
    {"id": "0", "name": "SpiceJet","geom":"", "created_on":"Mumbai", "updated_on": "Economy"},

];

function Countries() {

    const PAGE_SIZE = 10;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [maxDataSize, setMaxDataSize] = useState(DEMO_COUNTRIES.length);

    useEffect(() => {
        fetch('http://${process.env.REACT_APP_API_ENTITIES_URL}/api/countries')
        .then ((response)=>response.json())
        .then((data)=>setData(data));
        //!FIXME: this is to simulate how to retrieve data from the server
        //!FIXME: the entities server URL is available on process.env.REACT_APP_API_ENTITIES_URL
    }, [page])

    return (
        <>
            <h1>Countries</h1>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" width={"1px"} align="center">ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Geom</TableCell>
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
                                            {row.name}
                                        </TableCell>
                                        <TableCell component="td" scope="row">
                                            {row.geom}
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
                                    <TableCell colSpan={5}>
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

export default Countries;
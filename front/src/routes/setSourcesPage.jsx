import SetSources from "../components/setSources";
import { Box, Typography } from "@mui/material";
import Header from '../navigation/fullHeader';
import {Helmet} from "react-helmet";

export default function SetSourcesPage(){
    return(
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://088.news/register" />
            </Helmet>
            <Header />
            <Box sx={{marginTop: '15%'}}>    
                <Typography variant="h2" color="white">Кои медии искате да четете?</Typography>
                <SetSources />
            </Box>
        </div>
    )
}
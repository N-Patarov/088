import SetSources from "../components/setSources";
import { Box, Typography } from "@mui/material";
import Header from '../navigation/fullHeader';

export default function SetSourcesPage(){
    return(
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            <Header />
            <Box sx={{marginTop: '15%'}}>    
                <Typography variant="h2" color="white">Кои медии искате да четете?</Typography>
                <SetSources />
            </Box>
        </div>
    )
}
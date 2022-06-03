import SetSources from "../components/setSources";
import { Box, Typography } from "@mui/material";

export default function SetSourcesPage(){
    return(
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            <Box>    
                <Typography variant="h2" color="white">Кажете ни от кои източници искате да четете новини</Typography>
                <SetSources />
            </Box>
        </div>
    )
}
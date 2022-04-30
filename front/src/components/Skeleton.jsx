import {Skeleton, Card, CardContent, Grid} from '@mui/material';

function SkeletonCard(){
    return(
        <Grid item xs={3}sx={{padding: '10px',}}>
          <Card sx={{ maxWidth: 350, backgroundColor: '#064663', color: '#ffff', display: 'block' }}>
                                   <CardContent>
                                    <Skeleton
                                        animation="wave"
                                        height={200}
                                        width={340}
                                    />
                                   </CardContent>              
                                   <CardContent>
                                    <Skeleton
                                        animation="wave"
                                        height={20}
                                        width={345}
                                    />
                                    <Skeleton
                                        animation="wave"
                                        height={20}
                                        width={345}
                                    />
                                    <Skeleton
                                        animation="wave"
                                        height={20}
                                        width={345}
                                    />
                                    <Skeleton
                                        animation="wave"
                                        height={20}
                                        width={345}
                                    />
                                   </CardContent>
            </Card>
        </Grid>
    )
}

export default function SkeletonGrid(){
    return(
        <Grid container>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </Grid>
        
    )
}
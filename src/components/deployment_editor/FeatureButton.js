import { Button, Grid } from "@mui/material";
import React from "react";

export default function FeatureButton({ startIcon: StartIcon, content}) {
    return (
        <Grid item xs={6}>
            <Button
                startIcon={StartIcon ? <StartIcon /> : null}
                style={{ width: '100%' }}
            >
                {content}
            </Button>
        </Grid>
    );
}

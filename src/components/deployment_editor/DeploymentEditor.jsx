import React, {useState} from 'react';
import {Box, Button, ButtonGroup, Grid, Paper, Typography} from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FeatureButton from "./FeatureButton";
import {Cloud, Engineering, Http, Https, Language, Storage, Traffic, VpnKey} from "@mui/icons-material";

export default function DeploymentEditor({projectName, setProjectName, importProject, setImportProject}) {
    const [mode, setMode] = useState('Application');
    const [isButtonOneActive, setIsButtonOneActive] = useState(false);
    const [isButtonTwoActive, setIsButtonTwoActive] = useState(false);

    const toggleButtonOne = () => {
        setIsButtonOneActive(!isButtonOneActive);
    };

    const toggleButtonTwo = () => {
        setIsButtonTwoActive(!isButtonTwoActive);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Paper elevation={3} style={{width: '80%', height: '90%', maxHeight: '90%'}}>
                <Box display="flex" flexDirection="column" height="100%">
                    <Box height="75px" display="flex" alignItems="center">
                        <Box flex={1} display="flex" justifyContent="center">
                            <Typography variant="h5">Features</Typography>
                        </Box>
                        <Box flex={3} display="flex" justifyContent="center">
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button component="label">Application</Button>
                                <Button component="label">Overlays</Button>
                                <Button component="label">CI/CD</Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                    <Box flexGrow={1} display="flex">
                        <Box flex={1}>
                            <Grid container spacing={2} p={2}>
                                <FeatureButton startIcon={EqualizerIcon} content="prometheus"/>
                                <FeatureButton startIcon={VpnKey} content="1-Password"/>
                                <FeatureButton startIcon={Storage} content="database"/>
                                <FeatureButton startIcon={Cloud} content="kafka"/>
                                <FeatureButton startIcon={Language} content="url"/>
                                <FeatureButton startIcon={Traffic} content="ingress"/>
                                <FeatureButton startIcon={Engineering} content="advanced"/>
                            </Grid>
                        </Box>
                        <Box flex={3} bgcolor="#e0e0e0">
                            {/* Content for the rest of the screen */}
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </div>
    );
}
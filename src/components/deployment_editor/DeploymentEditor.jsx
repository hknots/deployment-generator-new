import React, {useState} from 'react';
import {Box, Button, Paper, Typography} from '@mui/material';

export default function DeploymentEditor({projectName, setProjectName, importProject, setImportProject}) {
    const [mode, setMode] = useState('Application'); // Initialize mode
    const [selectedButton, setSelectedButton] = useState(null); // State to track the selected button

    // Handler for button clicks
    const handleButtonClick = (buttonId) => {
        setSelectedButton(selectedButton === buttonId ? null : buttonId);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Paper elevation={3} style={{ width: '80%', height: '90%' }}>
                {mode === 'Application' && (
                    <Box display="flex" height="100%">
                        <Box width="25%" bgcolor="#f5f5f5" p={2}>
                            <Typography variant="h6">Functions</Typography>
                            <Button
                                variant={selectedButton === 'btn1' ? 'contained' : 'outlined'}
                                component="label"
                                onClick={() => handleButtonClick('btn1')}
                            >
                                Button 1
                            </Button>
                            <Button
                                variant={selectedButton === 'btn2' ? 'contained' : 'outlined'}
                                component="label"
                                onClick={() => handleButtonClick('btn2')}
                            >
                                Button 2
                            </Button>
                        </Box>
                        <Box flex={1} bgcolor="#e0e0e0">
                            {/* Content for the rest of the screen */}
                        </Box>
                    </Box>
                )}
                {/* You can add other modes here */}
            </Paper>
        </div>
    );
}
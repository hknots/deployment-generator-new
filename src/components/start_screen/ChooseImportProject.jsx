import {Button, Fade, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

export default function ChooseImportProject({setPassedIntroduction, setImportProject}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    const proceed = () => {
        setImportProject(true)
        setPassedIntroduction(true)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <Fade in={checked} timeout={500}>
                    <Typography margin="14px" variant="h4">Do you want to import the existing project?</Typography>
                </Fade>
                <Fade in={checked} timeout={1000}>
                    <div className="flex justify-center items-center gap-4">
                        <Button onClick={proceed} variant="contained" component="label">Yes</Button>
                        <Button onClick={proceed} variant="contained" component="label">No</Button>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
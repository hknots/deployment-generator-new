import React, {useEffect, useState} from "react";
import {Button, Fade, TextField} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ChooseProjectName({setProjectName}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    const lol = () => {
        setProjectName("fint-deployment-generator")
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <Fade in={checked} timeout={500}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="text-3xl font-semibold mb-4">What's your project name?</h2>
                </Fade>
                <Fade in={checked} timeout={1000}>
                    <div className="flex justify-center items-center">
                        <TextField variant="outlined" className="mr-2" style={{width: '300px'}} />
                        <Button
                            variant="contained"
                            component="label"
                            onClick={lol}
                        >
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
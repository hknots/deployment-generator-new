import React from "react";
import ChooseImportProject from "./ChooseImportProject";
import ChooseProjectName from "./ChooseProjectName";

export default function IntroductionScreen({projectName, setProjectName, setPassedIntroduction, setImportProject}) {
    return (
        <div>
            {projectName === ""
                ? <ChooseProjectName setProjectName={setProjectName}/>
                : <ChooseImportProject setPassedIntroduction={setPassedIntroduction} setImportProject={setImportProject} />
            }
        </div>
    )
}
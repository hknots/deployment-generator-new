'use client'

import React, {useState, useEffect} from 'react';
import IntroductionScreen from "../components/start_screen/IntroductionScreen";
import DeploymentEditor from "../components/deployment_editor/DeploymentEditor";

const Home = () => {
    const [projectName, setProjectName] = useState("")
    const [passedIntroduction, setPassedIntroduction] = useState(false)
    const [importProject, setImportProject] = useState(false)

    return (
        <>
            <DeploymentEditor
                projectName={projectName}
                setProjectName={setProjectName}
                importProject={importProject}
                setImportProject={setImportProject}
            />
            {/*{passedIntroduction === true*/}
            {/*    ? <DeploymentEditor*/}
            {/*        projectName={projectName}*/}
            {/*        setProjectName={setProjectName}*/}
            {/*        importProject={importProject}*/}
            {/*        setImportProject={setImportProject}*/}
            {/*    />*/}
            {/*    : <IntroductionScreen*/}
            {/*        projectName={projectName}*/}
            {/*        setProjectName={setProjectName}*/}
            {/*        setPassedIntroduction={setPassedIntroduction}*/}
            {/*        setImportProject={setImportProject}*/}
            {/*    />*/}
            {/*}*/}
        </>
    );
};

export default Home;



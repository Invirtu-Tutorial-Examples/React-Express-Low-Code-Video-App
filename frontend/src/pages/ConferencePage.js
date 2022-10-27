import React from 'react';
import { VideoConferencing } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function ConferencePage() {

    const { id } = useParams();                              //returns the :id

    return (
        <>
            <h1 className="text-center">Conference Page</h1>
            <VideoConferencing id={id} />
        </>
    );
}

export default ConferencePage;
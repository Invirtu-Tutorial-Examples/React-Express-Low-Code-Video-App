import React from 'react';
import { Livestreaming } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function StreamPage() {

    const { id } = useParams();  

    return (
        <>
            <h1 className="text-center">Stream Page</h1>
            <Livestreaming id={id} />

        </>
    );
        
}

export default StreamPage;
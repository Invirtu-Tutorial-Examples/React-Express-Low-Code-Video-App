import React from 'react';
import { Join } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function JoinPage() {

    const { id } = useParams();                              //returns the :id

    return (
        
        <>
            <h1 className="text-center">Join Page</h1>
            <Join id={id} />
        </>
    );
}

export default JoinPage;
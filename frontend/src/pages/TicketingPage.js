import React from 'react';
import { Ticketing } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function TicketingPage() {

    const { id } = useParams();                              //returns the :id

    return (
        <>
            <h1 className="text-center">Ticketing Page</h1>
            
            <Ticketing id={id} />

        </>
        
    );
}

export default TicketingPage;
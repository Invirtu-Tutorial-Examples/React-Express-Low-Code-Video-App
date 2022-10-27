import React from 'react';
import { Broadcasting } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function BroadcastPage() {

    const { id } = useParams();  
    
    return (
        <>
            <h1 className="text-center">Broadcast Page</h1>
            <Broadcasting id={id} />
        </>
        
    );
}

export default BroadcastPage;
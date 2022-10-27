import React from 'react';
import { Popup } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function PopupPage() {

    const { id } = useParams();                              //returns the :id

    return (
        <>
            <h1 className="text-center">Popup Page</h1>
            <Popup id={id} />
        </>
        
    );
}

export default PopupPage;
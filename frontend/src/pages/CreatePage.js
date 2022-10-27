import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreatePage() {

    const [event, setEvent] = useState(null);

    const createEvent = () => {

        fetch(process.env.REACT_APP_API_URL + 'events', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                setEvent(
                    <div>
                        <p className='lead'>Live event successfully created. Please select what you want to do.</p>
                        <Link target={'_blank'} className="btn btn-info m-1" to={`/conference/${data.id}`}>Video Conferencing</Link>
                        <Link target={'_blank'} className="btn btn-info m-1" to={`/broadcast/${data.id}`}>Broadcast</Link>
                        <Link target={'_blank'} className="btn btn-info m-1" to={`/stream/${data.id}`}>Live Stream</Link>
                        <Link target={'_blank'} className="btn btn-info m-1" to={`/join/${data.id}`}>Join</Link>
                        <Link target={'_blank'} className="btn btn-info m-1" to={`/popup/${data.id}`}>Pop-up</Link>
                        <Link target={'_blank'} className="btn btn-info m-1" to={`/ticketing/${data.id}`}>Ticketing</Link>
                    </div>
                );
            }).catch(error => {
                console.error(error);
            });

    }

    return (
        <>
            <h1 className="text-center">Live Create Event</h1>

            <div className="text-center mt-5">
                <p className='lead'>Use the button to create a live event.</p>
                <button className="btn btn-success" onClick={createEvent.bind()} >Create Live Event</button>
            </div>
            <div className="text-center mt-5">
                {event}
            </div>

        </>
    );
}
export default CreatePage;
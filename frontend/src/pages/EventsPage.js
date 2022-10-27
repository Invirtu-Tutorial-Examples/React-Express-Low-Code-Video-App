import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventsPage() {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        fetch(process.env.REACT_APP_API_URL  + 'events', {method : 'GET'} )
        .then((response) => response.json())
        .then((data) => {
            setEvents(data);
        }).catch(error => {
          console.error(error);
        });

    }, [])

    return (
      <>
        <h1 className="text-center">Past Live Events</h1>

        <ul>
            {events.map(function(event, index){
                return <li className="mb-4" key={ index }>
                  <p>{event.title}</p>
                  <Link className="btn btn-success m-1" to={`/conference/${event.id}`}>Video Conferencing</Link> 
                  <Link className="btn btn-success m-1" to={`/broadcast/${event.id}`}>Broadcast</Link> 
                  <Link className="btn btn-success m-1" to={`/stream/${event.id}`}>Live Stream</Link>
                  <Link className="btn btn-success m-1" to={`/popup/${event.id}`}>Popup Window</Link>
                  <Link className="btn btn-success m-1" to={`/join/${event.id}`}>Join Window</Link>
                  <Link className="btn btn-success m-1" to={`/ticketing/${event.id}`}>Ticketing/RSP</Link>

                  </li>;
            })}
        </ul>
      </>
    );
  }
  export default EventsPage;
import React from 'react';

import { Link } from "react-router-dom";

function Home() {
    return (
      <>
        <h1>Invirtu React Express App</h1>

        <div className="text-center">
            <Link to="/create" className="btn btn-info m-2">Create Live Event</Link>
            <Link to="/events" className="btn btn-info m-2">List Live Events</Link>
        </div>
      </>
    );
  }
  export default Home;
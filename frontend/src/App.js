import React from "react";

import { Routes, Route, Link} from "react-router-dom";

import CreatePage from './pages/CreatePage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import ConferencePage from './pages/ConferencePage';
import StreamPage from './pages/StreamPage';
import BroadcastPage from './pages/BroadcastPage';
import JoinPage from './pages/JoinPage';
import PopupPage from './pages/PopupPage';
import TicketingPage from './pages/TicketingPage';

function App() {
  return (
    <>
    
    <nav className="navbar navbar-expand-sm bg-light">

      <div className="container-fluid">

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">Create</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>
        </ul>
      </div>

  </nav>

    <div className="App">
      <Routes>
        <Route exact  path="/" element={<HomePage />} />
        <Route exact  path="/events" element={<EventsPage />} />
        <Route exact  path="/create" element={<CreatePage />} />
        <Route exact  path="/stream/:id" element={<StreamPage />} />
        <Route exact  path="/broadcast/:id" element={<BroadcastPage />} />
        <Route exact  path="/conference/:id" element={<ConferencePage />} />
        <Route exact  path="/popup/:id" element={<PopupPage />} />      
        <Route exact  path="/join/:id" element={<JoinPage />} />  
        <Route exact  path="/ticketing/:id" element={<TicketingPage />} />  
      </Routes>
    </div>
    </>
  );
}

export default App;
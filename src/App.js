import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser", id: 2 },
    { title: "moo moo farm", id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((events) => events.filter((event) => event.id !== id));
  };

  const handleHideEvents = () => {
    setShowEvents(false);
  };
  const handleShowEvents = () => {
    setShowEvents(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      <Title title="another title" subtitle="another subtitle" />

      {showEvents && (
        <div>
          <button onClick={handleHideEvents}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={handleShowEvents}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm />
        </Modal>
      )}
      <div>
        <button onClick={handleOpen}>Add new event</button>
      </div>
    </div>
  );
}

export default App;

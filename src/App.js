import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

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
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            labore molestias ea delectus atque dolores consequuntur mollitia
            corporis assumenda quod distinctio maiores tenetur, id architecto
            adipisci fuga esse ut doloremque!
          </p>
        </Modal>
      )}
      <div>
        <button onClick={handleOpen}>Open modal</button>
      </div>
    </div>
  );
}

export default App;

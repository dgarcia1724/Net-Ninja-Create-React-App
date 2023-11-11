import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser", id: 2 },
    { title: "moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((events) => events.filter((event) => event.id !== id));
  };

  const handleHideEvents = () => {
    setShowEvents(false);
  };
  const handleShowEvents = () => {
    setShowEvents(true);
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
      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index + 1} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </React.Fragment>
        ))}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      <Modal>
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi labore
          molestias ea delectus atque dolores consequuntur mollitia corporis
          assumenda quod distinctio maiores tenetur, id architecto adipisci fuga
          esse ut doloremque!
        </p>
        <a href="#">find out more...</a>
      </Modal>
    </div>
  );
}

export default App;

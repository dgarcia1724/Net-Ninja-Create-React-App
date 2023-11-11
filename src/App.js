import "./App.css";
import { useState } from "react";
import Title from "./components/Title";

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
          <div key={event.id}>
            <h2>
              {index + 1} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </div>
        ))}
    </div>
  );
}

export default App;

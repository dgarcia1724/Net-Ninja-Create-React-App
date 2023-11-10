import "./App.css";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser", id: 2 },
    { title: "moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((events) => events.filter((event) => event.id !== id));
  };

  return (
    <div className="App">
      {events.map((event, index) => (
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

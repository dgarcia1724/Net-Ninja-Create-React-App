import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mario");
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser", id: 2 },
    { title: "moo moo farm", id: 3 },
  ]);

  const handleClick = () => {
    setName("luigi");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;

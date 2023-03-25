import { MouseEvent } from "react";

function ListGroup() {
  let cities = ['Lagos', 'Abuja', 'Calabar', 'Port Harcout', 'Kano'];

//Event handler
  const handleClick = (event: MouseEvent)=>console.log(event)
  return (
    <>
      <h1>Popular cities in 9ja</h1>
      {cities.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li
            className="list-group-item"
            key={city}
            onClick = {handleClick}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

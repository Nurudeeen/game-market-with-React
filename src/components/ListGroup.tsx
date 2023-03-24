function ListGroup() {
  const cities = ["Lagos", "Abuja", "Calabar", "Port Harcout", "Kano"]
  return (
    <>
      <h1>Popular cities in 9ja</h1>
      <ul className="list-group">
        {cities.map(city=> (
          <li key = {city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

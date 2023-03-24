function ListGroup() {
  let cities = ['Lagos', 'Abuja', 'Calabar', 'Port Harcout', 'Kano'];
  cities = [];
  return (
    <>
      <h1>Popular cities in 9ja</h1>
      {cities.length===0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

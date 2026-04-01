import { useEffect, useState } from 'react';
import fetchcountries from './Utils/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchcountries();
      setCountries(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <p>Loading countries... 🌍</p>;

  return (
    <div>
      <h1>Where Should I Travel? ✈️</h1>
      <div className='box'>
        {countries.slice(0, 99).map((c) => (
        <div key={c.cca3}>
          <img src={c.flags.png} width="50" />
          <p>{c.name.common}</p>
          <p>{c.region}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
}
export default App

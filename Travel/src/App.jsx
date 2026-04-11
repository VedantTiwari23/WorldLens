import { useEffect, useState } from "react";
import fetchcountries from "./Utils/Countries";
import FlagGame from "./Components/FlagGame";

function App() {
  // const [countries, setCountries] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState("");
  // const [region, setRegion] = useState("");

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchcountries();
  //     setCountries(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  // if (loading) return <p>Loading countries... 🌍</p>;

  // const filteredCountries = countries
  //   .filter((e) => e.name.common.toLowerCase().includes(search.toLowerCase()))
  //   .filter((e) => (region ? e.region == region : true));

  // return (
  //   <div>
  //     <div>
  //       {/* <FlagGame/> */}
  //     </div>
  //     <h1>Where Should I Travel? ✈️</h1>
  //     <div className="controls">
  //       <input
  //         type="text"
  //         placeholder="Search country..."
  //         value={search}
  //         onChange={(e) => setSearch(e.target.value)}
  //       />

  //       <select onChange={(e) => setRegion(e.target.value)}>
  //         <option value="">All Regions</option>
  //         <option value="Asia">Asia</option>
  //         <option value="Africa">Africa</option>
  //         <option value="Europe">Europe</option>
  //         <option value="Americas">Americas</option>
  //         <option value="Oceania">Oceania</option>
  //       </select>
  //     </div>

  //     <div className="box">
  //       {filteredCountries.map((c) => (
  //         <div key={c.cca3} className="card">
  //           <div className="img">
  //             <img src={c.flags.png} />
  //           </div>

  //           <div className="content">
  //             <h3>{c.name.common}</h3>
  //             <p><strong>Population:</strong> {c.population}</p>
  //             <p><strong>Region:</strong> {c.region}</p>
  //             <p><strong>Capital:</strong> {c.capital[0]} </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}
export default App;

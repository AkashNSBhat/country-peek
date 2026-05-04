import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`} className="card">
      
      {/* FLAG */}
      <img src={country.flags.svg} alt={country.name.common} />

      {/* TEXT */}
      <div className="card__content">
        <h3>{country.name.common}</h3>

        <p><b>Population:</b> {country.population.toLocaleString()}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Capital:</b> {country.capital?.[0]}</p>
      </div>

    </Link>
  );
}

export default CountryCard;
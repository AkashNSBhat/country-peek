import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountry";

function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();

  const { country, loading, error } = useCountry(code);

  if (loading) return <p className="page-status">Loading...</p>;
  if (error) return <p className="page-status error">{error}</p>;
  if (!country) return null;

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country;

  const langList = languages ? Object.values(languages) : [];
  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name)
    : [];

  return (
    <div className="country-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="country-layout">
        <img src={flags.svg} alt={name.common} />

        <div className="info">
          <h2>{name.common}</h2>
          <p>{name.official}</p>

          <p><b>Population:</b> {population.toLocaleString()}</p>
          <p><b>Region:</b> {region}</p>
          <p><b>Subregion:</b> {subregion}</p>
          <p><b>Capital:</b> {capital?.[0]}</p>
          <p><b>Languages:</b> {langList.join(", ")}</p>
          <p><b>Currencies:</b> {currencyList.join(", ")}</p>

          {borders && (
            <div>
              <b>Borders:</b>
              {borders.map((b) => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
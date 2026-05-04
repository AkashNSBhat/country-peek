import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import FilterBar from "../components/FilterBar";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (!query) {
      setCountries([]);
      return;
    }

    async function fetchCountries() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    const timer = setTimeout(fetchCountries, 400);
    return () => clearTimeout(timer);
  }, [query]);

  const displayed = [...countries]
    .filter((c) => region === "All" || c.region === region)
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.common.localeCompare(b.name.common);
      }
      if (sortBy === "population") {
        return b.population - a.population;
      }
      return 0;
    });

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {loading && <p>Loading...</p>}

      {!query && <p>Start searching to explore countries.</p>}

      <div className="grid">
        {displayed.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </div>
  );
}

export default Home;
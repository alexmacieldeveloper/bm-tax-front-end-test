import { useState, useEffect } from "react";
import { items } from "./data/items";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Lista de Empresas</h1>

      <SearchInput value={search} onChange={setSearch} />

      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
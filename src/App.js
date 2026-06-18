import { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [bugs, setBugs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddBug = (bug) => {
    setBugs((prev) => [...prev, bug]);
  };

  const handleDeleteBug = (id) => {
    setBugs((prev) => prev.filter((bug) => bug.id !== id));
  };

  const filteredBugs = bugs.filter((bug) =>
    bug.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bug Tracking System</h1>
        <p>Track, search, and manage reported issues</p>
      </header>

      <main className="app-main">
        <section className="panel">
          <BugForm onAddBug={handleAddBug} />
        </section>

        <section className="panel">
          <div className="list-header">
            <h2>All Bugs ({filteredBugs.length})</h2>
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
          <BugList bugs={filteredBugs} onDelete={handleDeleteBug} />
        </section>
      </main>
    </div>
  );
}

export default App;

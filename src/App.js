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

  const totalBugs = bugs.length;
  const openBugs = bugs.filter((bug) => bug.status === 'Open').length;
  const inProgressBugs = bugs.filter((bug) => bug.status === 'In Progress').length;
  const resolvedBugs = bugs.filter((bug) => bug.status === 'Resolved').length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bug Tracking System</h1>
        <p>Track, search, and manage reported issues</p>
      </header>

      <main className="app-main">
        <section className="dashboard-cards">
          <div className="stat-card">
            <span className="stat-label">Total Bugs</span>
            <strong>{totalBugs}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Open</span>
            <strong>{openBugs}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">In Progress</span>
            <strong>{inProgressBugs}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Resolved</span>
            <strong>{resolvedBugs}</strong>
          </div>
        </section>

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

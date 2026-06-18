import BugItem from './BugItem';

function BugList({ bugs, onDelete }) {
  if (bugs.length === 0) {
    return <p className="empty-message">No bugs found.</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="bug-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <BugItem key={bug.id} bug={bug} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BugList;

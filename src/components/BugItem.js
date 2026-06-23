function BugItem({ bug, onDelete }) {
  const priorityClass = `priority priority-${bug.priority.toLowerCase()}`;
  const statusClass = `status status-${bug.status.toLowerCase().replace(' ', '-')}`;

  return (
    <tr>
      <td>{bug.id}</td>
      <td>{bug.title}</td>
      <td>
        <span className={priorityClass}>{bug.priority}</span>
      </td>
      <td>
        <span className={statusClass}>{bug.status}</span>
      </td>
      <td className="action-cell">
        <button type="button" className="btn btn-secondary btn-sm">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(bug.id)}
          aria-label={`Delete bug: ${bug.title}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default BugItem;

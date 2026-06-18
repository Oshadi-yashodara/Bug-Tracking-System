import { useState } from 'react';

const INITIAL_FORM = {
  title: '',
  description: '',
  priority: 'Low',
  status: 'Open',
};

function BugForm({ onAddBug }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    onAddBug({
      id: Date.now(),
      title: form.title.trim(),
      description: form.description.trim(),
      priority: form.priority,
      status: form.status,
    });

    setForm(INITIAL_FORM);
  };

  return (
    <form className="bug-form" onSubmit={handleSubmit}>
      <h2>Report a Bug</h2>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Brief summary of the bug"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Detailed description"
          rows={3}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Bug
      </button>
    </form>
  );
}

export default BugForm;

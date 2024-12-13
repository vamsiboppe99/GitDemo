import React, { useState } from 'react';

export default function JournalEntry({ vendorId, onSubmit }) {
  const [entry, setEntry] = useState({
    title: '',
    details: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...entry, vendorId });
  };

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h3 className="form-title">Journal Entry</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={entry.title}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter title"
          required
        />
        <label className="form-label">Details</label>
        <textarea
          name="details"
          value={entry.details}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Enter details"
          required
        />
        <div className="form-actions">
          <button type="submit" className="button-primary">Save Entry</button>
        </div>
      </form>
    </div>
  );
}

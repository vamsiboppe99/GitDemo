import React, { useState } from 'react';

export default function VendorForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    website: '',
    email: '',
    phone: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h3 className="form-title">Vendor Information</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Company Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <label className="form-label">Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="form-input"
        />
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        <label className="form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
        />
        <label className="form-label">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-input"
        />
        <label className="form-label">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="form-textarea"
          required
        />
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-textarea"
        />
        <div className="form-actions">
          <button type="submit" className="button-primary">Save Vendor</button>
        </div>
      </form>
    </div>
  );
}

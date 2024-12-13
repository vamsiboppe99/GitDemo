import React, { useState } from 'react';

export default function QuoteUploader({ vendorId, onUpload }) {
  const [quote, setQuote] = useState({
    title: '',
    amount: '',
    validUntil: '',
    file: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quote.file) {
      onUpload({
        title: quote.title,
        amount: Number(quote.amount),
        validUntil: new Date(quote.validUntil),
        file: URL.createObjectURL(quote.file),
        vendorId,
      });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setQuote({ ...quote, file: e.target.files[0] });
    }
  };

  return (
    <div className="card">
      <h3 className="form-title">Upload Quote</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Quote Title</label>
        <input
          type="text"
          value={quote.title}
          onChange={(e) => setQuote({ ...quote, title: e.target.value })}
          className="form-input"
          placeholder="Enter quote title"
          required
        />
        <label className="form-label">Amount</label>
        <input
          type="number"
          value={quote.amount}
          onChange={(e) => setQuote({ ...quote, amount: e.target.value })}
          className="form-input"
          placeholder="0.00"
          required
          min="0"
          step="0.01"
        />
        <label className="form-label">Valid Until</label>
        <input
          type="date"
          value={quote.validUntil}
          onChange={(e) => setQuote({ ...quote, validUntil: e.target.value })}
          className="form-input"
          required
        />
        <label className="form-label">File</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="form-input"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          required
        />
        <div className="form-actions">
          <button type="submit" className="button-primary">Upload Quote</button>
        </div>
      </form>
    </div>
  );
}

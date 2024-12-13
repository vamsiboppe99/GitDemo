import React, { useState } from 'react';
import VendorForm from './components/VendorForm';
import QuoteUploader from './components/QuoteUploader';
import JournalEntry from './components/JournalEntry';

function App() {
  const [activeTab, setActiveTab] = useState('vendor');
  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleVendorSubmit = (data) => {
    console.log('Vendor data:', data);
  };

  const handleQuoteUpload = (data) => {
    console.log('Quote data:', data);
  };

  const handleJournalEntry = (data) => {
    console.log('Journal entry:', data);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Vendor Management System</h1>
      </header>

      <div className="tabs-container">
        <button
          onClick={() => setActiveTab('vendor')}
          className={`tab ${activeTab === 'vendor' ? 'active' : ''}`}
        >
          Vendor Info
        </button>
        <button
          onClick={() => setActiveTab('quotes')}
          className={`tab ${activeTab === 'quotes' ? 'active' : ''}`}
        >
          Quotes
        </button>
        <button
          onClick={() => setActiveTab('journal')}
          className={`tab ${activeTab === 'journal' ? 'active' : ''}`}
        >
          Journal Entries
        </button>
      </div>

      <main className="content">
        <div className="card">
          {activeTab === 'vendor' && <VendorForm onSubmit={handleVendorSubmit} />}
          {activeTab === 'quotes' && (
            <QuoteUploader vendorId={selectedVendor || 'temp-id'} onUpload={handleQuoteUpload} />
          )}
          {activeTab === 'journal' && (
            <JournalEntry vendorId={selectedVendor || 'temp-id'} onSubmit={handleJournalEntry} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

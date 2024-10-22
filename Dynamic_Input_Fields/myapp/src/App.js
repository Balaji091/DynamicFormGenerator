import React, { useState } from 'react';
import './App.css';

function App() {
  const [fields, setFields] = useState([]);
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('text');

  const addField = () => {
    if (fieldName) {
      setFields([...fields, { name: fieldName, type: fieldType }]);
      setFieldName('');
      setFieldType('text');
    }
  };

  const handleDeleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="App">
      <h1>Dynamic Form Generator</h1>
      <div className="container">
        {/* Input Section */}
        <div className="input-section">
          <label>Field Name</label>
          <input
            type="text"
            className="input-field"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            placeholder="Enter field name"
          />
          <label>Field Type</label>
          <select
            className="type-selector"
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
            <option value="password">Password</option>
          </select>
          <button className="add-btn" onClick={addField}>
            Add Field
          </button>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h2>Dynamic Form</h2>
          <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div key={index} className="input-card">
                <label className="label-name">{field.name}</label>
                <input type={field.type} className="input-field" placeholder={`Enter ${field.name}`} />
                <button className="delete-btn" onClick={() => handleDeleteField(index)}>
                  &#10006; {/* Unicode for a cross mark */}
                </button>
              </div>
            ))}
            {fields.length > 0 && ( // Conditionally render the submit button
              <button className="submit-btn" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

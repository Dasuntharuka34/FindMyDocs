import React, { useState } from 'react';
import './ExcuseRequestForm.css'; 


const ExcuseRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    mobile: '',
    email: '',
    address: '',
    levelOfStudy: '',
    subjectCombo: '',
    absences: [{ courseCode: '', date: '' }],
    reason: '',
    reasonDetails: '',
    lectureAbsents: '',
    date: '',
  });

  const [medicalForm, setMedicalForm] = useState(null);
  const [medicalFormError, setMedicalFormError] = useState('');

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith('absence_')) {
      const updatedAbsences = [...formData.absences];
      const field = name.split('_')[1];
      updatedAbsences[index][field] = value;
      setFormData({ ...formData, absences: updatedAbsences });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addAbsenceRow = () => {
    setFormData({
      ...formData,
      absences: [...formData.absences, { courseCode: '', date: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!');
  };
  

  const handleMedicalFormUpload = (e) => {
  const file = e.target.files[0];
  setMedicalForm(file);
  setMedicalFormError('');
};


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Faculty of Science - University of Jaffna</h2>
      <p className="form-subtitle">Application to Excuse Academic Absence</p>

      <div className="form-row">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name with initials" />
        <input name="regNo" value={formData.regNo} onChange={handleChange} placeholder="Registration Number" />
      </div>

      <div className="form-row">
        <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
      </div>

      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Postal Address" />

      <div className="form-row">
        <select name="levelOfStudy" value={formData.levelOfStudy} onChange={handleChange}>
              <option value="">-- Select Level of Study --</option>
              <option value="1G">1G</option>
              <option value="1S">1S</option>
              <option value="2G">2G</option>
              <option value="2S">2S</option>
              <option value="3G">3G</option>
              <option value="3S">3S</option>
              <option value="3M">3M</option>
              <option value="4S">4S</option>
              <option value="4M">4M</option>
              <option value="4X">4X</option>
            </select>
      </div>

      <div className="form-row">
        <input name="subjectCombo" value={formData.subjectCombo} onChange={handleChange} placeholder="Subject Combination or Specialisation" />
      </div>

      <div className="absence-section">

      <label>Period of Absence:</label>

      {formData.absences.map((item, index) => (
        <div key={index} className="form-row">
          <input
            name="absence_courseCode"
            value={item.courseCode}
            onChange={(e) => handleChange(e, index)}
            placeholder="Course Code"
          />
          <input
            name="absence_date"
            value={item.date}
            onChange={(e) => handleChange(e, index)}
            placeholder="Date(s)"
          />
          {formData.absences.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => {
                const updated = formData.absences.filter((_, i) => i !== index);
                setFormData({ ...formData, absences: updated });
              }}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addAbsenceRow} className="add-btn">
        + Add Course
      </button>
</div>


      <div className="form-group">
        <label>Reason for Absence:</label>
        <select name="reason" value={formData.reason} onChange={handleChange}>
          <option value="">-- Select Reason --</option>
          <option value="official">Official university assignment</option>
          <option value="wedding">Applicant’s wedding</option>
          <option value="illness">Sudden illness or hospitalization</option>
          <option value="death">Demise of a parent/guardian/sibling</option>
        </select>
        <textarea name="reasonDetails" value={formData.reasonDetails} onChange={handleChange} placeholder="Details of Reason" />
      </div>

      <input name="lectureAbsents" value={formData.lectureAbsents} onChange={handleChange} placeholder="No. of lectures/practicals missed" />

      <input name="date" type="date" value={formData.date} onChange={handleChange} />

      <div className="form-group">
        <label>Upload Medical Form:</label>
        <input type="file" onChange={handleMedicalFormUpload} />
      </div>

      <button type="submit" className="submit-btn">Submit Application</button>

    </form>
  );
};

export default ExcuseRequestForm;

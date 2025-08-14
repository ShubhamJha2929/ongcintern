import React, { useState } from 'react';
//import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({});
  const [fileNames, setFileNames] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (file && file.name.toLowerCase().endsWith('.exe')) {
        alert('Uploading .exe files is not allowed.');
        return;
      }

      setFormData({ ...formData, [name]: file });
      setFileNames({ ...fileNames, [name]: file.name });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileRemove = (name) => {
    setFormData((prev) => ({ ...prev, [name]: null }));
    setFileNames((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:8000/api/apply/", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred while submitting the form.");
    }
  };

  const renderFileInput = (label, name, accept, note) => (
    <div>
      <label className="block mb-2 text-white font-semibold">{label} *</label>
      <div className="relative flex items-center space-x-4 bg-white rounded-md px-3 py-2 shadow-md">
        <label className="bg-indigo-700 text-white px-3 py-1 rounded cursor-pointer hover:bg-indigo-800 text-sm">
          Choose File
          <input
            type="file"
            name={name}
            accept={accept}
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {fileNames[name] ? (
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-black space-x-2 text-sm">
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">📄</span>
            <span className="max-w-[120px] truncate">{fileNames[name]}</span>
            <button
              type="button"
              onClick={() => handleFileRemove(name)}
              className="text-gray-600 hover:text-red-600 font-bold"
              title="Remove file"
            >
              ✖
            </button>
          </div>
        ) : (
          <span className="text-sm italic text-gray-500">No file chosen</span>
        )}
      </div>
      <p className="text-yellow-200 text-sm pt-1 italic">{note}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="bg-red-700 text-white text-center py-4 text-2xl font-bold">
          ONGC INTERNSHIP APPLICATION FORM
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-10">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Personal & Academic Information</h2>

              <input 
                type="email"
                name="email"
                placeholder='email'
                value={formData.email || ""}
                onChange={handleChange}
                className="w-full border-b p-2 outline-none"
                required
              />


              <input
                type="text"
                name="contact"
                value={formData.contact || ""}
                onChange={(e) => {
                  const onlyDigits = e.target.value;
                  if (/^\d*$/.test(onlyDigits)) {
                    setFormData({ ...formData, contact: onlyDigits });
                  }
                }}
                placeholder="Contact Number"
                className="w-full border-b p-2 outline-none"
                maxLength={10}
                required
              />

              <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full border-b p-2 outline-none" required />

              <input
                type="text"
                name="first_name"
                value={formData.first_name || ""}
                onChange={(e) => {
                  const lettersOnly = e.target.value;
                  if (/^[A-Za-z\s]*$/.test(lettersOnly)) {
                    setFormData({ ...formData, first_name: lettersOnly });
                  }
                }}
                placeholder="First Name"
                className="w-full border-b p-2 outline-none"
                required
              />

              <input
                type="text"
                name="last_name"
                value={formData.last_name || ""}
                onChange={(e) => {
                  const lettersOnly = e.target.value;
                  if (/^[A-Za-z\s]*$/.test(lettersOnly)) {
                    setFormData({ ...formData, last_name: lettersOnly });
                  }
                }}
                placeholder="Last Name"
                className="w-full border-b p-2 outline-none"
                required
              />

              <input type="text" name="college" placeholder="College Name" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="branch" placeholder="Branch/Stream" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="course" placeholder="Course" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="number" name="age" placeholder="Age" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="instituteName" placeholder="Training Institute Name" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="designation" placeholder="Designation / Intern Role" onChange={handleChange} className="w-full border-b p-2 outline-none" required />

              <div className="flex items-center gap-4 pt-2">
                <label className="font-semibold">Nationality:</label>
                <label><input type="radio" name="nationality" value="Indian" onChange={handleChange} className="mr-1" />Indian</label>
                <label><input type="radio" name="nationality" value="Other" onChange={handleChange} className="mr-1" />Other</label>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-10 bg-indigo-600 text-white">
              <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>

              <select name="idType" onChange={handleChange} className="w-full border-b bg-indigo-600 border-white p-2 outline-none text-white" required>
                <option value="">Select type of ID with Address Proof</option>
                <option value="Aadhar">Aadhar Card</option>
                <option value="Voter">Voter ID</option>
                <option value="Passport">Passport</option>
              </select>

              <input type="text" name="idNumber" placeholder="ID Proof Number" onChange={handleChange} className="w-full border-b bg-indigo-600 border-white p-2 outline-none text-white" required />

              <div className="space-y-6 mt-6">
                {renderFileInput("Upload Recent Passport Size Photo", "photo", "image/*", "*File size less than 1MB")}
                {renderFileInput("Upload Selected ID Proof (Must include address)", "idProof", "application/pdf,image/*", "*File size less than 2MB")}
                {renderFileInput("Upload Resume", "resume", "application/pdf", "*Only PDF format, less than 2MB")}
              </div>

              <button type="submit" className="mt-8 bg-white text-indigo-700 font-semibold px-8 py-2 rounded-full hover:bg-gray-100">
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({});
  const [fileNames, setFileNames] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    if (files) {
      setFileNames({
        ...fileNames,
        [name]: files[0].name,
      });
    }
  };

  const handleFileRemove = (name) => {
    setFormData((prev) => ({ ...prev, [name]: null }));
    setFileNames((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate this with Django backend
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
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - General Info */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Personal & Academic Information</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="college" placeholder="College Name" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="branch" placeholder="Branch/Stream (e.g., Information Science)" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="course" placeholder="Course (e.g., B.E / B.Tech)" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="number" name="age" placeholder="Age" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="instituteName" placeholder="Training Institute Name (e.g., Dayanand Sagar Academy...)" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <input type="text" name="designation" placeholder="Designation / Intern Role" onChange={handleChange} className="w-full border-b p-2 outline-none" required />
              <div className="flex items-center gap-4 pt-2">
                <label className="font-semibold">Nationality:</label>
                <label><input type="radio" name="nationality" value="Indian" onChange={handleChange} className="mr-1" />Indian</label>
                <label><input type="radio" name="nationality" value="Other" onChange={handleChange} className="mr-1" />Other</label>
              </div>
            </form>
          </div>

          {/* Right - Upload Section */}
          <div className="p-10 bg-indigo-600 text-white">
            <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <select name="idType" onChange={handleChange} className="w-full border-b bg-indigo-600 border-white p-2 outline-none text-white">
                <option value="">Select type of ID with Address Proof</option>
                <option value="Aadhar">Aadhar Card</option>
                <option value="Voter">Voter ID</option>
                <option value="Passport">Passport</option>
              </select>
              <input type="text" name="idNumber" placeholder="ID Proof Number" onChange={handleChange} className="w-full border-b bg-indigo-600 border-white p-2 outline-none text-white" required />

              {renderFileInput("Upload Recent Passport Size Photo", "photo", "image/*", "*File size less than 1MB")}

              {renderFileInput("Upload Selected ID Proof (Must include address)", "idProof", "application/pdf,image/*", "*File size less than 2MB")}

              {renderFileInput("Upload Resume", "resume", "application/pdf", "*Only PDF format, less than 2MB")}

              <button type="submit" className="mt-6 bg-white text-indigo-700 font-semibold px-8 py-2 rounded-full hover:bg-gray-100">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

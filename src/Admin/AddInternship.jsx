import React, { useState } from "react";
import AdminNavbar from "../Components/AdminNavbar"; //  import

const AddInternship = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirement: "",
    duration: "",
    stipend: "",
    location: "",
    posted_Date: "",
    application_Deadline: "",
  });

<<<<<<< HEAD
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setLoading(true);
    setMessage("");

    // Convert Date Fields to ISO Format
    const formattedData = {
      ...formData,
      posted_Date: formData.posted_Date ? new Date(formData.posted_Date).toISOString().split("T")[0] : "",
      application_Deadline: formData.application_Deadline ? new Date(formData.application_Deadline).toISOString().split("T")[0] : "",
    };

    try {
      const response = await fetch("http://localhost:8080/api/Internship-Enter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server Error: ${errorText}`);
      }

      const result = await response.json();
      console.log("Success:", result);
     // setMessage("✅ Internship registered successfully!");

      // Reset Form
      setFormData({
       
    title: "",
    description: "",
    requirement: "",
    duration: "",
    stipend: "",
    location: "",
    posted_Date: "",
    application_Deadline: "",
      });
    } catch (error) {
      console.error("Error:", error);
     // setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Internship Registration</h2>
        {message && (
          <p style={{ textAlign: "center", color: message.includes("Error") ? "red" : "green" }}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          {[
            
            { id: "title", label: "Internship Title", type: "text" },
            { id: "description", label: "Description", type: "textarea" },
            { id: "requirement", label: "Requirements", type: "textarea" },
            { id: "duration", label: "Duration", type: "text" },
            { id: "stipend", label: "Stipend", type: "text" },
            { id: "location", label: "Location", type: "text" },
            { id: "posted_Date", label: "Posted Date", type: "date" },
            { id: "application_Deadline", label: "Application Deadline", type: "date" },
          ].map(({ id, label, type }) => (
            <div key={id} style={styles.formGroup}>
              <label htmlFor={id} style={styles.label}>{label}</label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={id}
                  style={styles.textarea}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={`Enter ${label}`}
                  rows="3"
                  required
                />
              ) : (
                <input
                  id={id}
                  name = {id}
                  type = {type}
                  style={styles.input}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={`Enter ${label}`}
                  required
                />
              )}
            </div>
          ))}

          <div style={styles.formGroup}>
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? "Submitting..." : "Register Internship"}
            </button>
          </div>
        </form>
=======
    console.log("Form submitted:", formData);
  };
=======
  const [showPopup, setShowPopup] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setShowPopup(true);
      };
    
      const closePopup = () => {
        setShowPopup(false);
      };
>>>>>>> 27996c21568da92dbb2fa64a1c79762738bdaf73

  return (
    <div>
      <AdminNavbar /> {/*  Navbar added here */}
      <div style={styles.body}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Internship Application Form</h2>
          <form onSubmit={handleSubmit}>
            {[
              { id: "Internship_id", label: "Employee ID", type: "text" },
              { id: "Title", label: "Internship Title", type: "text" },
              { id: "Description", label: "Description", type: "textarea" },
              { id: "Requirement", label: "Requirements", type: "textarea" },
              { id: "Duration", label: "Duration", type: "text" },
              { id: "Stipend", label: "Stipend", type: "text" },
              { id: "Location", label: "Location", type: "text" },
              { id: "Posted_Date", label: "Posted Date", type: "date" },
              {
                id: "Application_Deadline",
                label: "Application Deadline",
                type: "date",
              },
            ].map(({ id, label, type }) => (
              <div key={id} style={styles.formGroup}>
                <label htmlFor={id} style={styles.label}>
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    name={id}
                    style={styles.textarea}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={`Enter ${label}`}
                    rows="3"
                    required
                  />
                ) : (
                  <input
                    id={id}
                    name={id}
                    type={type}
                    style={styles.input}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={`Enter ${label}`}
                    required
                  />
                )}
              </div>
            ))}

            <div style={styles.formGroup}>
              <button type="submit" style={styles.button}>
                Submit Application
              </button>
            </div>
          </form>
        </div>
>>>>>>> 76e4f15ecaf456f54eabd4674487abe77e1200da
      </div>
      {showPopup && (
        <div style={styles.popup}>  
          <p>registration successful!</p>
          <button onClick={closePopup} style={styles.okButton}>OK</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  formContainer: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "90%",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
  },
  input: {
    width: "96%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "96%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    background: "#f97902",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    color: "#000",
    padding: "20px 30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
  },
 
  okButton: {
    marginTop: "10px",
    background: "#f97902",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default AddInternship;

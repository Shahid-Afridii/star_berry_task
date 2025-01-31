import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required!");
      return;
    }

    // Encode the email content
    const subject = encodeURIComponent(`Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open the user's email client
    window.location.href = `mailto:shahidafridics@gmail.com?subject=${subject}&body=${body}`;

    // Reset form and show success message
    setSuccessMessage("Your message is ready to be sent via email!");
    setFormData({ name: "", email: "", message: "" });
    setErrorMessage("");
  };

  return (
    <div
      className="container mt-5 p-4"
   
    >
      <h2 className="text-center mb-4 text-primary">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="text-center mb-4">
            <strong>Name:</strong> Shahid Afridi<br />
           
            <strong>Email:</strong>{" "}
            <a href="mailto:shahidafridics@gmail.com" className="text-decoration-none text-info">
              shahidafridics@gmail.com
            </a>
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:9092745806" className="text-decoration-none text-info">
              9092745806
            </a>
          </p>

          <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
            {/* Name Field */}
            <div className="form-group mb-4">
              <label className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control shadow-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group mb-4">
              <label className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-group mb-4">
              <label className="form-label">
                <strong>Message</strong>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control shadow-sm"
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 shadow-sm"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                fontWeight: "bold",
              }}
            >
              Send Enquiry
            </button>
          </form>

          {/* Success or Error Message */}
          {successMessage && (
            <div className="alert alert-success mt-3 shadow-sm">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger mt-3 shadow-sm">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(credentials);
    if (Object.keys(validationErrors).length === 0) {
      login(credentials.username, credentials.password);
    } else {
      setErrors(validationErrors);
    }
  };

  // Form validation
  const validateForm = (values) => {
    let errors = {};
    if (!values.username.trim()) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters!";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter!";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter!";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number!";
    } else if (!/[@$!%*?&#]/.test(values.password)) {
      errors.password =
        "Password must contain at least one special character (@$!%*?&#)!";
    }
    return errors;
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="https://cdn.prod.website-files.com/5b5affb9e054d23e31dada55/6633910c7293e0eb10956014_starberry-logo-new%203.png"
            alt="Starberry Logo"
            style={{ height: "60px", objectFit: "contain" }}
          />
        </div>

        <p className="text-center text-muted">Login to your account</p>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="form-group">
            <label className="form-label">
              <FaUser className="icon" /> Username
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Enter your username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">
              <FaLock className="icon" /> Password
            </label>
            <input
              type="password"
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

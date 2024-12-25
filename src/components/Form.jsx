import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center items-center my-auto w-full min-h-screen bg-gray-500">
      <form
        className="bg-white p-6 rounded shadow-md max-w-sm flex flex-col justify-center items-center "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Login
        </h2>

        <div className="mb-4">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
            }
            label="Remember me"
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="!bg-blue-500 hover:!bg-blue-700"
          onClick={() => navigate("/getservices")}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

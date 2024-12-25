import { Button, TextField } from "@mui/material";
import React from "react";

const GetServices = () => {
  return (
    <div className="flex justify-center items-center my-auto w-full min-h-screen bg-gray-500">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col justify-center items-center gap-7">
        <TextField
          label="Enter Number"
          variant="outlined"
          fullWidth
          name="username"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="!bg-blue-500 hover:!bg-blue-700"
        >
          Get OTP
        </Button>
      </div>
    </div>
  );
};

export default GetServices;

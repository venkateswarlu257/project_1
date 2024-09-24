import React, { useState } from "react";
import MuiAlert, { AlertProps } from "@mui/lab/Alert"; 
import { Button } from "@mui/material";


const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Alerts: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      <h4>How to use Alert Component in React with TypeScript?</h4>

      <Button variant="contained" color="primary" onClick={handleShowAlert}>
        Show Alert
      </Button>

      {showAlert && (
        <div>
          <Alert severity="success">Sample Success Message</Alert>
          <Alert severity="error">Sample Error Message</Alert>
        </div>
      )}
    </div>
  );
};

export default Alerts;

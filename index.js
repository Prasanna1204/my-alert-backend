// index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Use port from environment or default to 3001

// Middleware
app.use(cors()); // Allow requests from any origin (your React app)
app.use(express.json()); // Allow the server to read JSON from the request body

// The main endpoint that will receive alerts from your React app
app.post('/api/alert', (req, res) => {
  const alertData = req.body;

  console.log('✅ Received an alert:', alertData);
  
  // ==========================================================
  // In the future, your code to send an SMS via Twilio
  // or notify officials would go here.
  // = a=========================================================

  res.status(200).json({ 
    message: 'Alert received successfully!',
    data: alertData 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
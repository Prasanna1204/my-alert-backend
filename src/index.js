const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Main endpoint to receive alerts
app.post('/api/alert', (req, res) => {
  const alertData = req.body;
  console.log('✅ Received an alert:', alertData);

  // In a real system, you would add code here to notify officials
  // via SMS (Twilio), email, or another API.

  res.status(200).json({ 
    message: 'Alert received successfully!',
    data: alertData 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
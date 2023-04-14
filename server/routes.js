// const express = require('express');
// const db = require('./db.js');

// const router = express.Router();

// router.post('/submitForm', (req, res) => {
//   const {  userName,
//   password,
//   serverAddress,
//   account,
//   senderCompId,
//   sessionQualifier,
//   targetCompId,
//   sharedId,
//   currency } = req.body; // assuming your form has these fields

//   const query = `INSERT INTO session ( userName,
//     password,
//     serverAddress,
//     account,
//     senderCompId,
//     sessionQualifier,
//     targetCompId,
//     sharedId,
//     currency) VALUES (?, ?, ?,?,?, ?, ?,?)`;
//   db.query(query, [ userName,
//     password,
//     serverAddress,
//     account,
//     senderCompId,
//     sessionQualifier,
//     targetCompId,
//     sharedId,
//     currency], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to submit form data' });
//     } else {
//       res.json({ message: 'Form data submitted successfully' });
//     }
//   });
// });

// module.exports = router;
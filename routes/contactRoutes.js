const express = require("express");
const router = express.Router();
const Conatct = require('../models/Contact');
const { submitContactForm } = require("../controllers/contactController");

// Route to handle contact form submission
router.post("/submit", submitContactForm) => {
  const { email, phone, message } = req.body;

  try {
    const newContact = new Contact({ email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'An error occurred while saving the contact information.' });
  }
};

module.exports = router;

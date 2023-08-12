const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME, // Specify the database name here
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const kuralSchema = new mongoose.Schema({
  no: Number,
  kural: String,
  meaning: String,
  explanation: String,
});

const Kural = mongoose.model(process.env.COLLECTION_NAME, kuralSchema);

app.get('/kural', async (req, res) => {
  try {
    const no = req.query.no;
    const kural = await Kural.findOne({ no: no });
    res.json(kural);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the Kural.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

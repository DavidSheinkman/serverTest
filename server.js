const { MongoClient } = require('mongodb');
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const mongoURI = 'mongodb+srv://david:Poilkjmnb!@cluster0.yshjcqa.mongodb.net/zoo?retryWrites=true&w=majority';

// Create a MongoDB client instance and connect to the database
const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

async function startServer() {
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log("Connected to MongoDB");

    // Start the Express server after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();

app.get("/api", (req, res) => {
  res.json(Pictures);
});

app.get("/api/:id", async (req, res) => {
  const meetupId = req.params.id;

  try {
    const db = client.db();
    const animals = db.collection('animals');
    
    const query = { id: meetupId };
    const result = await animals.findOne(query);
    console.log(result);

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Meetup not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

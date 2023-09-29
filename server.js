const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());


const PORT = process.env.PORT || 5000;



const mongoURI = 'mongodb+srv://david:Poilkjmnb!@cluster0.yshjcqa.mongodb.net/zoo?retryWrites=true&w=majority';

app.get("/api", (req, res) => {
  res.json(Pictures);
});


app.get("/api/:id", async (req, res) => {
  const meetupId = req.params.id;

  try {
    const client = await MongoClient.connect( 'mongodb+srv://david:Poilkjmnb!@cluster0.yshjcqa.mongodb.net/zoo?retryWrites=true&w=majority');
    const db = client.db();

    const animals = db.collection('animals');
    console.log(animals);

    

    const query = { ["id"]: meetupId };
    const result = await animals.findOne(query);
    console.log(result);
    client.close();

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Meetup not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
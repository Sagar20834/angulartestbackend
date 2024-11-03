const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sagarsah87188:9NiIxbrii33Tl36s@blogapp.oq4kxbg.mongodb.net/Angular?retryWrites=true&w=majority&appName=BlogApp",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

module.exports = mongoose;

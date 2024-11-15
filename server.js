const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnect"); // Aashu Code
const connectDatabase = require("./config/dbConnection"); // Ajay Code

//connectDb();
connectDatabase();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost:27017').then(() => console.log('connected mongo db')).catch(() => console.log('Error connect mongo db'));

app.listen(3000, () => {
    console.log('Server is running')
});
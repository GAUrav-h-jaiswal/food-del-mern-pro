import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://d3v17lucifer:piyush1234@cluster0.dqrcd.mongodb.net/gaurav', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
};

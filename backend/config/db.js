import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gauravjaiswal120987:Piyush909630@cluster0.ftmf5.mongodb.net/gaurav', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
};

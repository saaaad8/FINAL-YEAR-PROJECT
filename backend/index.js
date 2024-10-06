const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

// const Admin = require("./models/adminSchema.js")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("NOT CONNECTED TO NETWORK", err);
    });

    // // Function to add an admin
    // async function addAdmin() {
    //     try {
    //         const newAdmin = new Admin({
    //             name: "Saad Shaikh", // Replace with the admin's name
    //             email: "saad@example.com", // Replace with the admin's email
    //             password: "1234",  // Replace with the admin's password (hashed in a real app)
    //             schoolName: "PC"  // Replace with the school name
    //         });
    
    //         await newAdmin.save();
    //         console.log('Admin successfully added to the database');
    //     } catch (error) {
    //         console.error('Error adding admin:', error);
    //     }
    // }
    
    // // Call the function to add an admin
    // addAdmin();

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});

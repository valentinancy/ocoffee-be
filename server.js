const express = require("express");
const cors = require("cors");
const connectDB = require("./db/Connection");
const app = express();
app.use(cors());

connectDB();
app.use(express.json({ extended: false }));
app.use("/menus", require("./routes/Menu"));
app.use("/merchants", require("./routes/Merchant"));
app.use("/orders", require("./routes/Order"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started...");
});

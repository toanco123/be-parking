import express from "express";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import cardRouters from "./routes/cardRouters";
import priceRouters from "./routes/priceRouters";
import parkingLotRouters from "./routes/parkingLotRouters";
import parkingRecordRouters from "./routes/parkingRecordRouters";
import bodyParser from "body-parser";
import "dotenv/config";
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/card", cardRouters);
app.use("/price", priceRouters);
app.use("/parking-lot", parkingLotRouters);
app.use("/parking-record", parkingRecordRouters);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

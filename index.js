import express from "express";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Sever Running On port 3000"));

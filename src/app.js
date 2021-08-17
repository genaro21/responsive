const express = require("express");
const app = express();
const path = require("path");

app.get("/pagina1", (req, res) => {
  const filePath = path.join(__dirname, "pages", "pagina1.html");
  console.log(filePath);
  res.sendFile(filePath);
});

app.get("/pagina2", (req, res) => {
  const filePath = path.join(__dirname, "pages", "pagina2.html");
  console.log(filePath);
  res.sendFile(filePath);
});

const publicPath = path.join("src", "public");
console.log(publicPath);
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Server is running on port: ", 3000);
});

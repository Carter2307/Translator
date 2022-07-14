let express = require("express");
const multer = require("multer");
let api = require("translation-google");
let { translator } = require("./translator");

const upload = multer();

let app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", "./"); // specify the views directory
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: " " });
});

app.post("/", upload.none(), async (req, res) => {
  if (!req.body.text) return;
  //res.sendStatus(200);

  let data = await translator(req.body.text, api);
  //let textData = `[:sk]${data.sk.text}[:de]${data.de.text}[:nl]${data.nl.text}[:]`;

  res.send(data);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is listen port " + port);
});

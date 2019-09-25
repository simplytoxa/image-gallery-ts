const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const imageRoutes = require("./routes/images");
const MONGO_URL = "";

const app = (module.exports = express());
const PORT = process.env.PORT || 8000;
app.set("port", PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use(cookieParser());
app.use(cors());

app.use(imageRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

async function start() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log("Express server listening on port " + PORT);
    });
  } catch (err) {
    console.error(err);
  }
}

start();

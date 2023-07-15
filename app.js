import Express from "express";
const app = new Express();

app.use((req, res, next) => {
  res.send("<h1>Hello world!</h1>");
});

app.listen(666);

import app from "./app";
const PORT = process.env.PORT || 3000;

let server;

const main = () => {
  server = app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT} ✅`);
  });
};

main();

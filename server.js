import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Listening at the port ${port}`);
  console.log(`CTRL + Click at htttp://localhost:${port}`);
});

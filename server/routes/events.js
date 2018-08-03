export default function (app) {
  app.route('/api/events/')
    .get((req, res) => {
      res.status(200).send('test');
    });
}

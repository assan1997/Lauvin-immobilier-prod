var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', (req, res) => {
  axios.get('https://apiimmobilier.herokuapp.com/allItems').then((result) => {
    res.render('index.ejs', { items: result.data });
  });
});
router.get('/propriete/:id', (req, res) => {
  axios
    .get(`https://apiimmobilier.herokuapp.com/item/${req.params.id}`)
    .then((result) => {
      res.render('single-property.ejs', { item: result.data });
    });
});
router.get('/search', (req, res) => {
  res.redirect('/');
});
router.post('/search', (req, res) => {
  let datas = {
    ...req.body,
  };
  axios
    .get(
      `http://localhost:5000/search/?location=${datas.location}&propertyType=${datas.propertyType}&status=${datas.status}&rooms=${datas.rooms}&baths=${datas.baths}`
    )
    .then((items) => {
      res.render('search.ejs', { items: items.data });
    });
});
module.exports = router;

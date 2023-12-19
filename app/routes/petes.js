
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/search', function (req, res) {
    return res.render('../views/petes/search.html');
});


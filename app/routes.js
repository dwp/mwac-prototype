
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const firstRoutes = require('./routes/first_pass')
const sl = require('./routes/searchlight')
const ucCloneRoutes = require('./routes/uc_clone');
const second = require('./routes/second');
const utils = require('./routes/utils');

router.use(utils);

router.use('/first_pass', firstRoutes)
router.use('/searchlight', sl);
router.use('/uc_clone',ucCloneRoutes )
router.use('/second', second)


router.get('/search', function (req, res) {
    return res.render('../views/first_pass/search.html');
});

router.post('/search', function (req, res) {
    return res.redirect('/first_pass/home');
});

// Version 2 - appointment amending

router.post('/version2/workcoach/edit-appt/attended', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version2/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/version2/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version2/workcoach/edit-appt/rebook/type')
  } else {
    res.redirect('/version2/workcoach/edit-appt/cancel')
  }
})

// Version 3 - appointment amending

router.post('/version3/workcoach/edit-appt/attended', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version3/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/version3/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version3/workcoach/edit-appt/rebook/type')
  } else {
    res.redirect('/version3/workcoach/edit-appt/cancel')
  }
})

// Version 4 - appointment amending

router.post('/version4/workcoach/edit-appt/attended', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version4/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/version4/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version4/workcoach/edit-appt/rebook/type')
  } else {
    res.redirect('/version4/workcoach/edit-appt/cancel')
  }
})

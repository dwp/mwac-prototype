
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

// Version 5 - appointment amending

router.post('/version5/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version5/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/version5/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version5/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version5/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version5/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version5/workcoach/edit-appt/claimant-view-attended', function (req, res) {

  let notes = req.session.data['appointment-notes']

  if (notes.length != 0) {
    res.redirect('/version5/workcoach/edit-appt/claimant-view-attended')
  } else {
    res.redirect('/version5/workcoach/edit-appt/attended-error')
  }
})

router.post('/version5/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version5/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version5/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version5/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version5/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version5/workcoach/edit-appt/cancel-error')
  }
})

// Version 6 - appointment amending

router.post('/version6/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version6/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/version6/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version6/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version6/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version6/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version6/workcoach/edit-appt/claimant-view-attended', function (req, res) {

  let notes = req.session.data['appointment-notes']

  if (notes.length != 0) {
    res.redirect('/version6/workcoach/edit-appt/claimant-view-attended')
  } else {
    res.redirect('/version6/workcoach/edit-appt/attended-error')
  }
})

router.post('/version6/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version6/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version6/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version6/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version6/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version6/workcoach/edit-appt/cancel-error')
  }
})

// Version 7 - appointment amending

router.post('/version7/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version7/workcoach/edit-appt/attended-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version7/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version7/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version7/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version7/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version7/workcoach/edit-appt/claimant-view-attended', function (req, res) {

  let notes = req.session.data['appointment-notes']

  if (notes.length != 0) {
    res.redirect('/version7/workcoach/edit-appt/claimant-view-attended')
  } else {
    res.redirect('/version7/workcoach/edit-appt/attended-error')
  }
})

router.post('/version7/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version7/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version7/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version7/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version7/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version7/workcoach/edit-appt/cancel-error')
  }
})

router.post('/version7/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version7/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version7/workcoach/edit-appt/attended-notes')
  }
})

// ID journey 2 and 3

router.post('/version6/workcoach/edit-appt/appointment-details-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version6/workcoach/edit-appt/attended-v2-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version6/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version6/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version6/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version6/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version6/workcoach/edit-appt/appointment-details-3-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version6/workcoach/edit-appt/attended-v3-photo-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version6/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version6/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version6/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version6/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version6/workcoach/edit-appt/claimant-view-attended-2', function (req, res) {

  let notes = req.session.data['appointment-notes']

  if (notes.length != 0) {
    res.redirect('/version6/workcoach/edit-appt/claimant-view-attended')
  } else {
    res.redirect('/version6/workcoach/edit-appt/claimant-view-attended')
  }
})






// MVP - appointment amending

router.post('/MVP/workcoach/edit-appt/attended', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/MVP/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/MVP/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/MVP/workcoach/edit-appt/rebook/type')
  } else {
    res.redirect('/MVP/workcoach/edit-appt/cancel')
  }
})

// Beta 1 - appointment amending

router.post('/beta1/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/beta1/workcoach/edit-appt/attended-wsr')
  } else if (appointment === 'not-attended') {
    res.redirect('/beta1/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/beta1/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/beta1/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/beta1/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/beta1/workcoach/edit-appt/amend-3-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/beta1/workcoach/edit-appt/attended')
  } else if (appointment === 'not-attended') {
    res.redirect('/beta1/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/beta1/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/beta1/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/beta1/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/beta1/workcoach/edit-appt/claimant-view-attended', function (req, res) {

  let notes = req.session.data['appointment-notes']

  if (notes.length != 0) {
    res.redirect('/beta1/workcoach/edit-appt/claimant-view-attended')
  } else {
    res.redirect('/beta1/workcoach/edit-appt/attended-error')
  }
})

router.post('/beta1/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/beta1/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/beta1/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/beta1/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/beta1/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/beta1/workcoach/edit-appt/cancel-error')
  }
})

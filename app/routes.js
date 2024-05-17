
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

router.post('/version7/workcoach/edit-appt/attended-photo-id', function (req, res) {

  let idType = req.session.data['id-types']

  if (idType === 'No') {
    res.redirect('/version7/workcoach/edit-appt/attended-kbv-id')
  } else {
    res.redirect('/version7/workcoach/edit-appt/attended-photo-id')
  }
})

router.post('/version7/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version7/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version7/workcoach/edit-appt/kbv-notes')
  }
})

// Version 7 - duration routing - existing claim

router.post('/version7/workcoach/existing-claim/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/version7/workcoach/existing-claim/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/version7/workcoach/existing-claim/appointment-duration-wsr')
  } else {
    res.redirect('/version7/workcoach/existing-claim/appointment-duration-flex')
  }
})

// Version 7 - duration routing - existing claim v2

router.post('/version7/workcoach/existing-claim-v2/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/version7/workcoach/existing-claim-v2/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/version7/workcoach/existing-claim-v2/appointment-duration-wsr')
  } else {
    res.redirect('/version7/workcoach/existing-claim-v2/appointment-duration-flex')
  }
})

// Version 7 - duration routing - existing claim v3

router.post('/version7/workcoach/existing-claim-v3/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/version7/workcoach/existing-claim-v3/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/version7/workcoach/existing-claim-v3/appointment-duration-wsr')
  } else {
    res.redirect('/version7/workcoach/existing-claim-v3/appointment-duration-flex')
  }
})

// Version 8

router.post('/version8/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version8/workcoach/edit-appt/attended-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version8/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version8/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version8/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version8/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version8/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version8/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version8/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version8/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version8/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version8/workcoach/edit-appt/cancel-error')
  }
})

router.post('/version8/workcoach/edit-appt/attended-photo-id', function (req, res) {

  let idType = req.session.data['id-types']

  if (idType === 'No') {
    res.redirect('/version8/workcoach/edit-appt/attended-kbv-id')
  } else {
    res.redirect('/version8/workcoach/edit-appt/attended-photo-id')
  }
})

router.post('/version8/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version8/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version8/workcoach/edit-appt/kbv-notes')
  }
})

router.post('/version8/workcoach/existing-claim-v3/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/version8/workcoach/existing-claim-v3/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/version8/workcoach/existing-claim-v3/appointment-duration-wsr')
  } else {
    res.redirect('/version8/workcoach/existing-claim-v3/appointment-duration-flex')
  }
})


// Version 1 ESA - appointment amending

router.post('/version1-esa/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version1-esa/workcoach/edit-appt/attended-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version1-esa/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version1-esa/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version1-esa/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version1-esa/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version1-esa/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version1-esa/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version1-esa/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version1-esa/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version1-esa/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version1-esa/workcoach/edit-appt/cancel-error')
  }
})

router.post('/version1-esa/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version1-esa/workcoach/edit-appt/kbv-failed')
  } else if (kbvFail === 'Yes') {
    res.redirect('/version1-esa/workcoach/edit-appt/kbv-notes')
  } else {
    res.redirect('/version1-esa/workcoach/edit-appt/attended-notes')
  }
})

// Version 2 ESA - appointment amending

router.post('/version2-esa/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version2-esa/workcoach/edit-appt/attended-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version2-esa/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version2-esa/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version2-esa/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version2-esa/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version2-esa/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version2-esa/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version2-esa/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/cancel-error')
  }
})

router.post('/version2-esa/workcoach/edit-appt/attended-photo-id', function (req, res) {

  let idType = req.session.data['id-types']

  if (idType === 'No') {
    res.redirect('/version2-esa/workcoach/edit-appt/attended-kbv-id')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/attended-photo-id')
  }
})

router.post('/version2-esa/workcoach/edit-appt/attended-photo-id-appointee', function (req, res) {

  let idType = req.session.data['id-types-appointee']

  if (idType === 'No') {
    res.redirect('/version2-esa/workcoach/edit-appt/attended-kbv-id-appointee')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/attended-photo-id-appointee')
  }
})

router.post('/version2-esa/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version2-esa/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/attended-id-appointee')
  }
})

router.post('/version2-esa/workcoach/edit-appt/kbv-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version2-esa/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version2-esa/workcoach/edit-appt/kbv-notes')
  }
})

router.post('/version2-esa/workcoach/existing-claim-v3/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/version2-esa/workcoach/existing-claim-v3/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/version2-esa/workcoach/existing-claim-v3/appointment-duration-wsr')
  } else {
    res.redirect('/version2-esa/workcoach/existing-claim-v3/appointment-duration-flex')
  }
})

// Version 2.2 ESA - appointment amending

router.post('/version2-esa-2/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/attended-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/version2-esa-2/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/version2-esa-2/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/version2-esa-2/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/version2-esa-2/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/cancel-error')
  }
})

router.post('/version2-esa-2/workcoach/edit-appt/attended-photo-id', function (req, res) {

  let idType = req.session.data['id-types']

  if (idType === 'No') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/attended-kbv-id')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/attended-photo-id')
  }
})

router.post('/version2-esa-2/workcoach/edit-appt/attended-photo-id-appointee', function (req, res) {

  let idType = req.session.data['id-types-appointee']

  if (idType === 'No') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/attended-kbv-id-appointee')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/attended-photo-id-appointee')
  }
})

router.post('/version2-esa-2/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/attended-id-appointee')
  }
})

router.post('/version2-esa-2/workcoach/edit-appt/kbv-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/version2-esa-2/workcoach/edit-appt/kbv-failed')
  } else {
    res.redirect('/version2-esa-2/workcoach/edit-appt/kbv-notes')
  }
})

router.post('/version2-esa-2/workcoach/existing-claim-v3/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/version2-esa-2/workcoach/existing-claim-v3/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/version2-esa-2/workcoach/existing-claim-v3/appointment-duration-wsr')
  } else {
    res.redirect('/version2-esa-2/workcoach/existing-claim-v3/appointment-duration-flex')
  }
})


// MWAC and SO - appointment amending

router.post('/mwac-so/workcoach/edit-appt/amend-2-error', function (req, res) {

  let appointment = req.session.data['appointmentActions']

  if (appointment === 'attended') {
    res.redirect('/mwac-so/workcoach/edit-appt/attended-id')
  } else if (appointment === 'not-attended') {
    res.redirect('/mwac-so/workcoach/edit-appt/not-attended')
  } else if (appointment === 'rebook') {
    res.redirect('/mwac-so/workcoach/edit-appt/rebook/type')
  } else if (appointment === 'cancel') {
    res.redirect('/mwac-so/workcoach/edit-appt/cancel')
  } else {
    res.redirect('/mwac-so/workcoach/edit-appt/amend-2-error')
  }
})

router.post('/mwac-so/workcoach/edit-appt/claimant-view-not-attended', function (req, res) {

  let notesfta = req.session.data['appointment-notes-not-attended']

  if (notesfta.length != 0) {
    res.redirect('/mwac-so/workcoach/edit-appt/claimant-view-not-attended')
  } else {
    res.redirect('/mwac-so/workcoach/edit-appt/not-attended-error')
  }
})

router.post('/mwac-so/workcoach/edit-appt/claimant-view-cancelled', function (req, res) {

  let notescancel = req.session.data['cancellation-notes']

  if (notescancel.length != 0) {
    res.redirect('/mwac-so/workcoach/edit-appt/claimant-view-cancelled')
  } else {
    res.redirect('/mwac-so/workcoach/edit-appt/cancel-error')
  }
})

router.post('/mwac-so/workcoach/edit-appt/attended-notes', function (req, res) {

  let kbvFail = req.session.data['kbv-check']

  if (kbvFail === 'No') {
    res.redirect('/mwac-so/workcoach/edit-appt/kbv-failed')
  } else if (kbvFail === 'Yes') {
    res.redirect('/mwac-so/workcoach/edit-appt/kbv-notes')
  } else {
    res.redirect('/mwac-so/workcoach/edit-appt/attended-notes')
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
    res.redirect('/beta1/workcoach/edit-appt/not-attended-wsr')
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

router.post('/beta1/workcoach/existing-claim-v3/appointment-duration', function (req, res) {

  let type = req.session.data['appointment-type']

  if (type === 'New claim appointment') {
    res.redirect('/beta1/workcoach/existing-claim-v3/appointment-duration-new-claim')
  } else if (type === 'Work search review') {
    res.redirect('/beta1/workcoach/existing-claim-v3/appointment-duration-wsr')
  } else {
    res.redirect('/beta1/workcoach/existing-claim-v3/appointment-duration-flex')
  }
})


////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// V1_2-4 Identify, match and refer ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

///

/////////////////  WHP-PIONEER ///////////////
// run this code when a form is submitted to 'address-pioneer' page

router.post('/address-pioneer-error-2-4', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    res.redirect('identify-match-refer/V1_2-4/which-jcp')
  } else if (answer === 'incorrect') {
    res.redirect('identify-match-refer/V1_2-3/not-suitable-address')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/address-pioneer-error')
  }
});

/////////////////  AVAILABLE OPPORTUNITIES ///////////////
// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2e', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2-1/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2-4/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2-4/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2-4/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2-4/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2-4/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2-4/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2-4/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2-4/whp-core/whp-mee')
  } else {
    res.redirect('identify-match-refer/V1_2-2/available-opportunities-error')
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// V1_2-3 Identify, match and refer ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

///

/////////////////  WHP-PIONEER ///////////////
// run this code when a form is submitted to 'address-pioneer' page

router.post('/address-pioneer-error-2-3', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    res.redirect('identify-match-refer/V1_2-3/which-jcp')
  } else if (answer === 'incorrect') {
    res.redirect('identify-match-refer/V1_2-3/not-suitable-address')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/address-pioneer-error')
  }
});

/////////////////  AVAILABLE OPPORTUNITIES ///////////////
// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2d', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2-1/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-mee')
  } else {
    res.redirect('identify-match-refer/V1_2-2/available-opportunities-error')
  }
});

/////////////////  AVAILABLE OPPORTUNITIES – DUPLICATE REFERRALS ///////////////
// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_duplicates_3', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2-1/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2-3/duplicate-referral/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2-3/whp-core/whp-mee')
  } else {
    res.redirect('identify-match-refer/V1_2-2/available-opportunities-error')
  }
});

/////////////////  PIONEER REASONABLE ADJUSTMENTS ///////////////
// run this code when a form is submitted to 'reasonable adjustments' page

router.post('/adjustments-2-3', function (req, res) {
  var answer = req.session.data['ExtraSupport']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-check-answers')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-reasonable-adjustments-error')
  }
});

/////////////////  WHP-CORE PHONE ///////////////
// run this code when a form is submitted to 'is the phone number correct' page

router.post('/core-phone-2-3', function (req, res) {
  var answer = req.session.data['contactPhone']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-3/whp-core/email-a')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-core/phone-a-error-a')
  }
});

/////////////////  WHP-CORE EMAIL ///////////////
// run this code when a form is submitted to 'is the email address correct' page

router.post('/core-email-2-3', function (req, res) {
  var answer = req.session.data['contactEmail']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-3/whp-core/reasonable-adjustments-a')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-core/email-a-error-a')
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// V1_2-2 Identify, match and refer ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////  AVAILABLE OPPORTUNITIES ///////////////
// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2c', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2-1/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2-2/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2-2/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2-2/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2-2/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2-2/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2-2/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2-2/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2-2/whp-core/whp-mee')
  } else {
    res.redirect('identify-match-refer/V1_2-2/available-opportunities-error')
  }
});

/////////////////  WHP-PIONEER ///////////////
// run this code when a form is submitted to 'address-pioneer' page

router.post('/address-pioneer-error', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    res.redirect('identify-match-refer/V1_2-2/whp-pioneer/contact-details-pioneer')
  } else if (answer === 'incorrect') {
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/address-pioneer-error')
  }
});


/////////////////  PIONEER REASONABLE ADJUSTMENTS ///////////////
// run this code when a form is submitted to 'reasonable adjustments' page

router.post('/adjustments', function (req, res) {
  var answer = req.session.data['ExtraSupport']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-2/whp-pioneer/signposted-referral')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-reasonable-adjustments-error')
  }
});

/////////////////  WHP-CORE ///////////////
// run this code when a form is submitted to 'whp-core/address-a' page

router.post('/address_2-2-whp', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2-2/whp-core/phone-a')
  } else {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});


/////////////////  WHP-CORE PHONE ///////////////
// run this code when a form is submitted to 'is the phone number correct' page

router.post('/core-phone-2-2', function (req, res) {
  var answer = req.session.data['contactPhone']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-2/whp-core/email-a')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-core/phone-a-error-a')
  }
});

/////////////////  WHP-CORE EMAIL ///////////////
// run this code when a form is submitted to 'is the email address correct' page

router.post('/core-email-2-2', function (req, res) {
  var answer = req.session.data['contactEmail']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-2/whp-core/reasonable-adjustments-a')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-core/email-a-error-a')
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// V1_2-1 Identify, match and refer ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////  AVAILABLE OPPORTUNITIES ///////////////
// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2b', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2-1/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-mee')
  } else {
    res.redirect('identify-match-refer/V1_2-1/available-opportunities-error')
  }
});


/////////////////  RESTART ///////////////
// run this code when a form is submitted to 'address-a' page

router.post('/address_2-1a', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2-1/restart/phone-a')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});

/////////////////  WHP-CORE ///////////////
// run this code when a form is submitted to 'whp-core/address-a' page

router.post('/address_2-1-whp', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2-1/whp-core/phone-a')
  } else {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});

/////////////////  WHP-CORE PHONE ///////////////
// run this code when a form is submitted to 'is the phone number correct' page

router.post('/core-phone', function (req, res) {
  var answer = req.session.data['contactPhone']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-1/whp-core/email-a')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-core/phone-a-error-a')
  }
});

/////////////////  WHP-CORE EMAIL ///////////////
// run this code when a form is submitted to 'is the email address correct' page

router.post('/core-email', function (req, res) {
  var answer = req.session.data['contactEmail']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-1/whp-core/reasonable-adjustments-a')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-core/email-a-error-a')
  }
});

/////////////////  WHP-PIONEER ///////////////
// run this code when a form is submitted to 'address-pioneer' page

router.post('/address-pioneer-error-2-1', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/contact-details-pioneer')
  } else if (answer === 'incorrect') {
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/address-pioneer-error')
  }
});


/////////////////  PIONEER REASONABLE ADJUSTMENTS ///////////////
// run this code when a form is submitted to 'reasonable adjustments' page

router.post('/adjustments-2-1', function (req, res) {
  var answer = req.session.data['ExtraSupport']
  console.log(answer, 'submitted-answer')

  if (answer === 'yes') {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/signposted-referral')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-reasonable-adjustments-error')
  }
});


/////////////////  PIONEER SIGNPOSTED REFERRAL ///////////////
// run this code when a form is submitted to 'is this signposted' page

router.post('/signposted', function (req, res) {
  var answer = req.session.data['SignpostedReferral']
  console.log(answer, 'submitted-answer')

  if (answer === 'sign') {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/which-jcp')
  } else {
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/signposted-referral-error')
  }
});


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// DUPLICATE REFERRALS – AVAILABLE OPPORTUNITIES ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// run this code when a form is submitted to 'available-opportunities' page on the duplicate referral journey

router.post('/choose-programme_duplicate_journey', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2-1/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2-1/duplicate-referral/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2-1/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2-1/whp-core/whp-mee')
  }
});

/////////////////  WHP-PIONEER – DUPLICATE REFERRALS ///////////////
// run this code when a form is submitted to 'address-pioneer' page

router.post('/address_pioneer_duplicate_referral', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2-1/duplicate-referral/whp-pioneer/contact-details-pioneer')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});

///////////////////////////////////////////////  OLDER VERSIONS /////////////////////////////////////////////



// run this code when a form is submitted to 'report-progress' page

router.post('/report-progress', function (req, res) {
  var answer = req.session.data['what-update']
  if (answer === 'record-an-outcome') {
    // Send user to start on opportunity page
    res.redirect('/referral-management/prap-admin/record-an-outcome')
  } else if (answer === 'raise-query') {
    // Send user to record an outcome page
    res.redirect('/referral-management/prap-admin/raise-a-query')
  } else {
    // Send user to request to end page
    res.redirect('#')
  }
});


// run this code when a form is submitted to 'start-on-opportunity' page. NB: This may need evolving as the journey evolves

router.post('start-date-submitted', function (req, res) {
  var answer = req.session.data['when-did-the-citizen-start']
  if (answer === 'when-started') {
    // Send user to start date submitted
    res.redirect('start-date-submitted')
  } else if (answer === 'when-started-2') {
    // Send user to start date submitted
    res.redirect('start-date-submitted')
  } else {
    // Send user to start date submitted
    res.redirect('start-date-submitted')
  }
});


// run this code when a form is submitted to 'any of the referrals pages

router.post('/referrals-pending-b', function (req, res) {
  var answer = req.session.data['status']
  if (answer === 'all-referrals') {
    // Send user to all-referrals-b page
    res.redirect('/referral-management/prap-admin/referrals-all-b')
  } else if (answer === 'active-referrals') {
    // Send user to referrals-active-b page
    res.redirect('/referral-management/prap-admin/referrals-active-b')
  } else if (answer === 'pending-referrals') {
    // Send user to referrals-pending-b page
    res.redirect('/referral-management/prap-admin/referrals-pending-b')
  } else if (answer === 'rejected-referrals') {
    // Send user to referrals-returned-b page
    res.redirect('/referral-management/prap-admin/referrals-returned-b')
  } else {
    // Send user to referrals all page
    res.redirect('referrals-all-b')
  }
});


// run this code when a form is submitted to 'record-an-outcome' page

router.post('/record-an-outcome', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'started-self-employment') {
    // Send user to start on opportunity page
    res.redirect('/referral-management/prap-admin/started-self-employment')
  } else if (answer === '6-months-self-employment') {
    // Send user to record an outcome page
    res.redirect('/referral-management/prap-admin/self-employment-details')
  }
});

// run this code when a form is submitted to 'referrals-pending-b' page

router.post('/referrals-pending-b', function (req, res) {
  var answer = req.session.data['which-outcome']
  if (answer === 'started-self-employment') {
    // Send user to start on opportunity page
    res.redirect('/started-self-employment')
  } else
    if (answer === '6-months-self-employment') {
      // Send user to record an outcome page
      res.redirect('/self-employment-details')
    }
});


// *** ROUTING FOR IDENTIFY MATCH AND REFER LAST UPDATED SO BETA SPRINT 1 ***

// run this code when a form is submitted to 'employment and training restrictions' page


router.post('/restrictions', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_0/not-suitable-restrictions')
  } else if (answer === 'sam-doe-address') {
    // Send user to Are the address details correct?
    res.redirect('identify-match-refer/V1_0/sam-doe-address')
  }
});

// run this code when a form is submitted to 'Address details page' page

router.post('/address', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-a')
  } else if (answer === 'not-suitable-address') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_0/not-suitable-address')
  }
});


// run this code when a form is submitted to 'Contact details a page' page

router.post('/contact', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details-b') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-b')
  } else if (answer === 'sam-doe-contact-details-update-a') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-update-a')
  }
});

// run this code when a form is submitted to 'Contact details b page' page

router.post('/contact-b', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-update-b')
  }
});


// run this code when a form is submitted to 'opportunity-matched-c' page

router.post('/choose-programme', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/description-of-restart')
  } else
    if (answer === 'whp') {
      // Send user to record an outcome page
      res.redirect('identify-match-refer/V1_0/description-of-whp')
    }
})


// run this code when a form is submitted to 'opportunity-matched' page

router.post('/match-programme-answers', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-update-b')
  }
})

// run this code when a form is submitted to 'opportunity-matched' page

router.post('/match-programme-answers', function (req, res) {
  var answer = req.session.data['which-programme']
  console.log(answer, 'submitted-answer')
  if (answer === 'restart-scheme') {
    // Send user to description of restart page
    res.redirect('identify-match-refer/V1_0/description-of-restart')
  } else

    if (answer === 'work-health-programme') {
      // Send user to exit page make referral via LMS
      res.redirect('identify-match-refer/V1_0/exit-LMS')
    } else if (answer === 'intensive-personalised-employment-support-programme') {
      // Send user to exit page make referral via LMS
      res.redirect('identify-match-refer/V1_0/exit-LMS')
    }
});

// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for Restart

router.post('/suitable-2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_0/reasonable-adjustments')
  } else if (answer === 'not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_0/not-suitable')
  }
});

// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for WHP

router.post('/suitable-whp', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_0/reasonable-adjustments-whp')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_0/whp-not-suitable')
  }
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////// V1_1 Identify, match and refer. ///////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// run this code when a form is submitted to 'employment and training restrictions' page

router.post('/restrictions_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_1/not-suitable-restrictions')
  } else if (answer === 'sam-doe-address') {
    // Send user to Are the address details correct?
    res.redirect('identify-match-refer/V1_1/sam-doe-address')
  }
});

// run this code when a form is submitted to 'Address details page' page

router.post('/address_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-a')
  } else if (answer === 'not-suitable-address') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_1/not-suitable-address')
  }
});


// run this code when a form is submitted to 'Contact details a page' page

router.post('/contact_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details-b') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-b')
  } else if (answer === 'sam-doe-contact-details-update-a') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-update-a')
  }
});


// run this code when a form is submitted to 'Contact details b page' page

router.post('/contact-b_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_1/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-update-b')
  }
});


// run this code when a form is submitted to 'opportunity-matched-c' page

router.post('/choose-programme_1', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_1/restart-suitability')
  } else if (answer === 'whp') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_1/whp-suitability')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for Restart

router.post('/suitable-2_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_1/reasonable-adjustments')
  } else if (answer === 'not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_1/not-suitable')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for WHP

router.post('/suitable-whp_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_1/whp-reasonable-adjustments')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_1/whp-not-suitable')
  }
});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////// V1_2 Identify, match and refer ////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// run this code when a form is submitted to 'employment and training restrictions' page

router.post('/restrictions_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'sam-doe-address') {
    // Send user to Are the address details correct?
    res.redirect('identify-match-refer/V1_2/sam-doe-address')
  }
});

// run this code when a form is submitted to 'address details' page

router.post('/address_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-a')
  } else if (answer === 'not-suitable-address') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});


// run this code when a form is submitted to 'contact details a' page

router.post('/contact_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details-b') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-b')
  } else if (answer === 'sam-doe-contact-details-update-a') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-update-a')
  }
});


// run this code when a form is submitted to 'Contact details b page' page

router.post('/contact-b_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_2/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-update-b')
  }
});


// run this code when a form is submitted to 'opportunity-matched-c' page

router.post('/choose-programme_2', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_2/restart-suitability')
  } else if (answer === 'whp') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_2/whp-suitability')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for Restart'

router.post('/suitable-2_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_2/reasonable-adjustments')
  } else if (answer === 'not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_2/not-suitable')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for WHP'

router.post('/suitable-whp_2_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_2/whp-reasonable-adjustments')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_2/whp-not-suitable')
  }
});


// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2a', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-mee')
  }
});

// run this code when a form is submitted to 'whp-dc' page

router.post('/suitable-whp_2_2a', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_2/employment-and-training-restrictions-a')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_2/whp-not-suitable')
  }
});


/////////////////  RESTART ///////////////

// run this code when a form is submitted to 'employment and training restrictions-a' page

router.post('/restrictions_2a', function (req, res) {
  var answer = req.session.data['restrictions']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'suitable') {
    // Send user to 'address-a' page?
    res.redirect('identify-match-refer/V1_2/restart/address-a')
  }
});

// run this code when a form is submitted to 'address-a' page

router.post('/address_2a', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/restart/phone-a')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});



/////////////////  WHP-CORE ///////////////


// run this code when a form is submitted to 'employment and training restrictions-whp' page

router.post('/restrictions_2-whp', function (req, res) {
  var answer = req.session.data['restrictions']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'suitable') {
    // Send user to 'address-a' page?
    res.redirect('identify-match-refer/V1_2/whp-core/address-a')
  }
});

// run this code when a form is submitted to 'whp-core/address-a' page

router.post('/address_2-whp', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/whp-core/phone-a')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});



/////////////////  WHP-PIONEER ///////////////

// run this code when a form is submitted to 'employment and training restrictions-pioneer' page

router.post('/restrictions_2-pioneer', function (req, res) {
  var answer = req.session.data['restrictions']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'suitable') {
    // Send user to 'address-a' page?
    res.redirect('identify-match-refer/V1_2/whp-pioneer/address-pioneer')
  }
});


// run this code when a form is submitted to 'address-pioneer' page

router.post('/address_2-pioneer', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/whp-pioneer/contact-details-pioneer')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});

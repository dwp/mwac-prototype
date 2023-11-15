
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {

  const now = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const addDaysToDate = (num) => {
    const now = new Date();
    now.setDate(now.getDate() + num);
    return now
  }
  const spreadDate = (now, longer = 0) => {
    return `${now.getDate()} ${monthNames[now.getMonth() + longer]} ${now.getFullYear()}`
  }
  res.locals.todaysDate = spreadDate(new Date());


  res.locals.modifyDate = (num, verbose = false) => {
    const longer = verbose ? 12 : 0;
    const date = addDaysToDate(num);
    return spreadDate(date, longer);
  }
  res.locals.getWeek = (num) => {
    const now = new Date();
    now.setDate(now.getDate() + num);
    const d = {
      d: now.getDate(),
      m: now.getMonth(),
      y: now.getFullYear() 
    }
    const dayOfWeek = now.getDay();

    return [
        spreadDate(new Date(new Date(d.y, d.m, d.d).setDate(d.d + 1 - dayOfWeek))),
        spreadDate(new Date(new Date(d.y, d.m, d.d).setDate(d.d + 2 - dayOfWeek))),
        spreadDate(new Date(new Date(d.y, d.m, d.d).setDate(d.d + 3 - dayOfWeek))),
        spreadDate(new Date(new Date(d.y, d.m, d.d).setDate(d.d + 4 - dayOfWeek))),
        spreadDate(new Date(new Date(d.y, d.m, d.d).setDate(d.d + 5 - dayOfWeek)))
    ]
  }

  next();
});

module.exports = router;
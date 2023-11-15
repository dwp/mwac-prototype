// function ready (fn) {
//   if (document.readyState !== 'loading') {
//     // IE9 support
//     fn()
//   } else {
//     // Everything else
//     document.addEventListener('DOMContentLoaded', fn)
//   }
// }

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

// ready(() => {
//   window.GOVUKFrontend.initAll()
// })

// Set month names
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var monthNamesShort = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

// Show current date
date = new Date();
y = date.getFullYear();
m = date.getMonth();
d = date.getDate();

if(document.querySelector(".date")) {
  document.querySelector(".date").innerHTML = d + " " + monthNames[m] + " " + y;
}

if(document.querySelector(".short-date")) {
  document.querySelector(".short-date").innerHTML = d + " " + monthNamesShort[m] + " " + y;
}

if(document.querySelector(".month")) {
  document.querySelector(".month").innerHTML = monthNames[m] + " " + y;
}

// Show old date
newDate = new Date();
var numberOfDaysToAdd = -14;
newDate.setDate(newDate.getDate() + numberOfDaysToAdd);
ny = newDate.getFullYear();
nm = newDate.getMonth();
nd = newDate.getDate();

if(document.querySelector(".old-date")) {
  document.querySelector(".old-date").innerHTML = nd + " " + monthNames[nm] + " " + ny;
}

if(document.querySelector(".old-date-short")) {
  document.querySelector(".old-date-short").innerHTML = nd + " " + monthNamesShort[nm] + " " + ny;
}

// convert month numbers to names
var months = document.querySelector(".months");

if(document.querySelector(".months")) {
    function numberToMonths() {
        months.innerHTML = months.innerHTML.replace('01', 'January');
        months.innerHTML = months.innerHTML.replace('02', 'February');
        months.innerHTML = months.innerHTML.replace('03', 'March');
        months.innerHTML = months.innerHTML.replace('04', 'April');
        months.innerHTML = months.innerHTML.replace('05', 'May');
        months.innerHTML = months.innerHTML.replace('06', 'June');
        months.innerHTML = months.innerHTML.replace('07', 'July');
        months.innerHTML = months.innerHTML.replace('08', 'August');
        months.innerHTML = months.innerHTML.replace('09', 'September');
        months.innerHTML = months.innerHTML.replace('10', 'October');
        months.innerHTML = months.innerHTML.replace('11', 'November');
        months.innerHTML = months.innerHTML.replace('12', 'December');
    }
    numberToMonths();
}

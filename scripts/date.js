const datefield = document.querySelector("time");

 //derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(now);

console.log(fulldate.getFullYear());
document.getElementById("todayyear").textContent = fulldate.getFullYear();
document.getElementById("currentdate").textContent = document.lastModified;

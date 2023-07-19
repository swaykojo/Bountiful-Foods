 const datefield = document.querySelector("time");

 //derive the current date using a date object
 const now = new Date();
 const fulldate = new Intl.DateTimeFormat("en-us",{dateStyle: "full"}).format(now);

datefield.textContent = fulldate;


let d = new Date();
const year = d.getFullYear()
document.getElementById("currentdate").textContent = new Date()
document.getElementById("todayyear").textContent = year
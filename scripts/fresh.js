const freshFriutsData = fetch("../JSON/data.json").then((data) => 
  data.json ());

const orderButton = document.getElementById("place-order");
const friutSelector = document.querySelectorAll("select");

freshFriutsData.then((mixFriut) => {
    console.log(mixFriut)
    friutSelector.forEach(selectors => {
        mixFriut.forEach(friut => {
            let item = document.createElement("option");
            item.textContent = friut.name;
            selectors.appendChild(item);
        })
    })
}) 

const orderInfo = () => {
      let localOrder = window.localStorage.getItem("orderTally1")
      if (localOrder === "NaN") {
        localOrder = 0;
    }
    localOrder = window.localStorage.setItem("orderTally1", localOrder+1);
}

const customerOrder = () => {
    document.getElementById("O-name").textContent = document.getElementById("first").value
    document.getElementById("o-email").textContent = document.getElementById("email").value
    document.getElementById("o-phone").textContent = document.getElementById("phone").value
    document.getElementById("o-top1").textContent = document.getElementById("top1").value
    document.getElementById("o-top2").textContent = document.getElementById("top2").value
    document.getElementById("o-top3").textContent = document.getElementById("top3").value
}

const totalNutrition = () => {
    let totalCarbs = 0;
    let totalProt = 0;
    let totalFat = 0;
    let totalCalo = 0;
    let totalSugar = 0;

    freshFriutsData.then(data => {
        friutSelector.forEach(choiceFruit => {
            data.forEach(friut =>{
                if (choiceFruit.value == friut.name) {
                    myfriut = friut.nutritions
                    totalCarbs += myfriut.carbohydrates;
                    totalProt += myfriut.protein;
                    totalFat += myfriut.fat;
                    totalCalo += myfriut.calories;
                    totalSugar += myfriut.sugar;
                }
            })
        })
        document.getElementById("totalCarbs").textContent = totalCarbs;
        document.getElementById("totalProtein").textContent = totalProt;
        document.getElementById("totalFat").textContent = totalFat;
        document.getElementById("totalSugar").textContent = totalSugar;
        document.getElementById("totalCalories").textContent = totalCalo;
    })
}

orderButton.addEventListener("click", () => {
    orderInfo();
    customerOrder();
    totalNutrition();

  });

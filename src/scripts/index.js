import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

import("../DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
        <div class="list_restaurant">
            <div class="city">${data["city"]}</div>
            <img class="list_restaurant_img" src="${data["pictureId"]}" alt="${
      data["name"]
    }" title="${data["name"]}">
            <div class="list_restaurant_content">
                <p class="list_restaurant_rating">
                    Rating : 
                    <a class="list_rating" ">${data["rating"]}</a>
                </p>
                <h1 class="list_restaurant_title" id="id"><a href="#">${
                  data["name"]
                }</a></h1>
                <div class="list_restaurant_desc">${data["description"].slice(
                  0,
                  200
                )}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector("#restaurant").innerHTML = dataList;
});

const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const bgSidebar = document.querySelector(".bg-sidebar");

burger.addEventListener("click", function () {
  this.classList.toggle("change");
  sidebar.classList.toggle("change");
  bgSidebar.classList.toggle("change");
});

bgSidebar.addEventListener("click", function () {
  this.classList.remove("change");
  sidebar.classList.remove("change");
  burger.classList.remove("change");
});

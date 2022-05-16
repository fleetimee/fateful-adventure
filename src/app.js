const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

fetch('./json/db.json')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    appendData(data);
  })
  .catch(function(err){
    console.log('error:' + err);
  });
  function appendData(data){
    var products = document.getElementById("Products")
    for (let i=0; i<data.length; i++){
      var div = document.createElement("div")
      div.innerHTML = 'id' + data[i].id + ' ' + data[i].title;
      products.appendChild(div)
    }
  }
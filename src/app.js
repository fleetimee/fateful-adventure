const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const url = 'https://fakestoreapi.com/products'

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

fetch(url)
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
    var products = document.getElementById("products")
    for (let i=0; i<data.length; i++){
      var div = document.createElement("div")
      div.innerHTML = `
      <div class='container p-2'>
      id : ${data[i].id} nama : ${data[i].title}
      </div>
      `
      products.appendChild(div)
      console.log(data)
    }
  }
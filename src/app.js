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
      <a href='/'>
      <div class='p-2' style="width: 200px;">
      <img src=${data[i].image} class='w-120px' />
      <h2 class="text-sm text-left">${data[i].price}</h2>
      <h1 class="text-base">${data[i].title}</h1>
      </div>
      </a>
      `
      products.appendChild(div).className = "grid-cols-4 md:grid-cols-6 flex flex-col items-center"
      console.log(data)
    }
  }
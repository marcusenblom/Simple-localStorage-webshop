$(document).ready(function() {
  
  let allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];

  let id = (JSON.parse(localStorage.getItem("detailId")) || []) - 1;

  let detailProduct = allProducts[id];

  $(".detailImage").attr("src", detailProduct.src)
  $(".detailHeader").html(detailProduct.title)
  $(".detailPrice").html("<b>Pris: </b>" + detailProduct.price + "SEK")
  $(".detailDescription").html(detailProduct.description)
  $(".screen").html("<b>Skärmtyp: </b>" + detailProduct.specs[0])
  $(".processor").html("<b>Processor: </b>" + detailProduct.specs[1])
  $(".ram").html("<b>Ram-minne: </b>" + detailProduct.specs[2])

  $("#addToCart").on("click", function() {
    let newArray = [];

    if (localStorage.getItem("cart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("cart")) || [];

      for (let i = 0; i < currentCartItems.length; i++) {
        newArray.push(currentCartItems[i]);
      };

      newArray.push(detailProduct);

    } else {
      newArray.push(detailProduct);
    };

    localStorage.setItem("cart", JSON.stringify(newArray));
    counter();
  });








});
$(document).ready(function() {
  
    let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

    let index = -1;
    cartProducts.forEach(element => {

        let productContainer = $("<div>").addClass("productContainer").appendTo($(".flex-container"));

        let imageContainer = $("<div>").addClass("imageContainer").appendTo(productContainer);
        let image = $("<img>").attr("src", element.src).addClass("productImage").appendTo(imageContainer);

        let productInfoContainer = $("<div>").addClass("productInfoContainer").appendTo(productContainer);
        let title = $("<span>").html(element.title).addClass("title").appendTo(productInfoContainer);
        let price = $("<span>").html("<b>" + element.price + " SEK </b>").addClass("price").appendTo(productInfoContainer);
        let remove = $("<button>").html("Ta bort").addClass("removeButton btn btn-dark").appendTo(productInfoContainer);

        $(remove).on("click", function() {
          cartProducts.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cartProducts));
          window.open("checkout.html", "_self");
        })
        
        imageContainer.click(function(){
          localStorage.setItem("detailId", JSON.stringify(element.id));
          window.open("detail.html", "_self");
        });
        index += 1;
    });

    let totalPrice = 0;
    cartProducts.forEach(element => {
      totalPrice = totalPrice + element.price;
    });
    $(".totalPrice").html("Totalt pris: " + totalPrice).appendTo($(".totalPriceContainer"))

  
  });
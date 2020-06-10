$(document).ready(function() {

    function ProductClass(id, title, price, description, specs, src, src2) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.specs = specs;
        this.src = src;
        this.src2 = src2;
    };
    // Skapar upp produkterna. Detta hade jag vanligtvis gjort via ett adminverktyg som har koppling till databasen
    
    let product1 = new ProductClass(1, "MacBook 13 tum", 14999, "Bra dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo.", ["13.3 IPS (2560 x 1600)", "Intel Core i5", "8 GB"], "../images/macbook13.jpg", "../images/macbook13_2.jpg");
    let product2 = new ProductClass(2, "MacBook 14 tum", 15999, "Extra bra dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo. Fusce tristique scelerisque nisi ut pharetra. Fringilla vel vulputate vel, ultrices ut odio.", ["14.3 IPS (3200 x 1600)", "Intel Core i5", "8 GB"], "../images/macbook14.jpg", "../images/macbook_profile_2.jpg");
    let product3 = new ProductClass(3, "MacBook 15 tum", 16999, "Ännu bättre dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo. Fusce tristique scelerisque nisi ut pharetra", ["15.3 GDPR (2560 x 1900)", "Intel Core i7", "12 GB"], "../images/macbook15.jpg", "../images/macbook15_2.jpg");
    let product4 = new ProductClass(4, "MacBook 16 tum", 17999, "Extra bra dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo. Fusce tristique scelerisque nisi ut pharetra", ["16.8 GDPR (2560 x 1900)", "Intel Core i9", "16 GB"], "../images/macbook16.jpg", "../images/macbook_profile_1.jpg");
    let product5 = new ProductClass(5, "MacBook 17 tum", 18999, "Väldigt bra dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo.", ["17.3 GDPR (2560 x 1900)", "Intel Core i12", "24 GB"], "../images/macbook17.jpg", "../images/macbook17_2.jpg");
    let product6 = new ProductClass(6, "MacBook 18 tum", 19999, "Megabra dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi.", ["18.9 ULS (3900 x 4875)", "Intel Core i9++", "128 GB"], "../images/macbook18.jpg", "../images/macbook_profile_2.jpg");
    let product7 = new ProductClass(7, "MacBook 19 tum", 20999, "Superbra dator som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo. Fusce tristique scelerisque nisi ut pharetra", ["19.3 x2 madness (2560 x 1900)", "Intel MegaCore o13", "228 GB"], "../images/macbook19.jpg", "../images/macbook_profile_1.jpg");
    let product8 = new ProductClass(8, "MacBook 20 tum", 24999, "Den ultimata datorn som lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor mi, fringilla vel vulputate vel, ultrices ut odio. Integer vitae eleifend leo. Fusce tristique scelerisque nisi ut pharetra", ["20.3 NHL (9999 x 14999)", "Just Core i99", "350+ GB"], "../images/macbook20.jpg", "../images/macbook20_2.jpg");

    // Lagrar alla produkter i listan
    let listOfAllProducts = [product1, product2, product3, product4, product5, product6, product7, product8];

    localStorage.setItem("allProducts", JSON.stringify(listOfAllProducts));


    //  Skapar upp HTML för varje produkt i listan
    listOfAllProducts.forEach(element => {
    
        let productContainer = $("<div>").addClass("productContainer").appendTo($(".flex-container"));

        let imgSrc = element.src;
        let imgSrc2 = element.src2;
        let image = $("<img>").attr("src", imgSrc).addClass("productImage").mouseover(function() {
          image.attr("src", imgSrc2);
        }).mouseout(function() {
          image.attr("src", imgSrc);
        }).appendTo(productContainer);

        let productTitleContainer = $("<div>").addClass("productTitleContainer").appendTo(productContainer);
        let titleContainer = $("<div>").addClass("innerTitleContainer").appendTo(productTitleContainer);
        let title = $("<p>").html(element.title).addClass("titleFont").appendTo(titleContainer);
        let price = $("<p>").html(element.price + " SEK").addClass("priceP").appendTo(titleContainer);
        let descriptionContainer = $("<div>").addClass("descriptionContainer").appendTo(productContainer);

        let screenDiv = $("<div>").addClass("screenDiv").appendTo(descriptionContainer);
        let screenTitle = $("<div>").html("Skärmtyp: ").addClass("screenTitle").appendTo(screenDiv);
        let screenInfo = $("<div>").html(element.specs[0]).addClass("screenInfo").appendTo(screenDiv);

        let processorDiv = $("<div>").addClass("processorDiv").appendTo(descriptionContainer);
        let processorTitle = $("<div>").html("Processor: ").addClass("processorTitle").appendTo(processorDiv);
        let processorInfo = $("<div>").html(element.specs[1]).addClass("processorInfo").appendTo(processorDiv);

        let ramDiv = $("<div>").addClass("ramDiv").appendTo(descriptionContainer);
        let ramTitle = $("<div>").html("Ram-minne: ").addClass("ramTitle").appendTo(ramDiv);
        let ramInfo = $("<div>").html(element.specs[2]).addClass("ramInfo").appendTo(ramDiv);

        productContainer.click(function(){
          localStorage.setItem("detailId", JSON.stringify(element.id));
          window.open("detail.html", "_self");
        });

    });

    $("#amount").html("Visar: " + listOfAllProducts.length + " produkter");


});
$.ajax({
    url: "assets/json/data.json",
    type: "get",
    success: function (data) {
        let x = ``;
        let modal = ``;
        // console.log(data)
        $.each(data, function (keys, objects) {

            $.each(objects, function (objKeys, arrays) {
                // console.log(objKeys)
                // console.log(arrays.name)
                $.each(arrays, function (index, indexObject) {
                    // console.log(indexObject.name)
                    x += ` <div class="col-lg-3 mt-3">
                <div class="card">
                    <img class="card-img-top" src="${indexObject.image}" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">${indexObject.name}</h4>
                        <p class="card-text">${indexObject.price}</p>
                        <a href="#${indexObject.id}" data-bs-toggle="modal" class="btn btn-info" >details</a>
                    </div>
                </div>
                
            </div>`

                    modal += ` <div class="modal fade " id="${indexObject.id}" tabindex="-1"  aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${indexObject.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
         <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="${indexObject.image}" alt="Title" />
                   
                </div>
                
            </div>
            <div class="col-lg-8">
                <div class="card-body">
                    <h4 class="card-title">${indexObject.name}</h4>
                    <p class="card-text">${indexObject.price}</p>
                    <p class="card-text">${indexObject.description}</p>
                     <button type="button" class="btn btn-outline-primary" onclick="decreament()">-</button>
    <input type="text" name="" value="1" >
    <button type="button" class="btn btn-outline-primary" onclick="increament()">+</button>
    <span class="mt-3" id="alert"></span>
                </div>
            </div>
         </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="addToCart"onclick="addToCart('`+ indexObject.id + `')">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>`
                })
            })


        })
        $("#dataPro").html(x);
        $("#modalData").html(modal)

    }
})

function addToCart(id) {
    // console.log(id);
    let quantity = Number($("input[type='text']").val());
    $.ajax({
        url: "assets/json/data.json",
        type: "get",
        success: function (cartData) {
            $.each(cartData, function (keys, objects) {

                $.each(objects, function (objKeys, arrays) {
                    // console.log(objKeys)
                    // console.log(arrays.name)
                    $.each(arrays, function (index, indexObject) {
                        if (indexObject.id == id) {
                            let localData = JSON.parse(localStorage.getItem('data'));
                            console.log(localData);

                            if (localStorage.getItem('data') == null) {
                                localStorage.setItem('data', '[]');
                            }
                            let productObject = {
                                productId: indexObject.id,
                                productName: indexObject.name,
                                productPrice: indexObject.price,
                                productImage: indexObject.image,
                                productQty: quantity

                            }
                            localData.push(productObject);
                            localStorage.setItem("data", JSON.stringify(localData));
                            // console.log()
                            // console.log(indexObject.name)
                        }
                    })
                })


            })
        }
    })
}
let count = 1;

function increament() {
    let qty = $("input[type='text']");
    count++;
    qty.val(count);
    if (qty.val() > 1) {
        $("#alert").hide();
    }
    // console.log(qty.val());
}
function decreament() {
    let qty = $("input[type='text']");
    if (qty.val() > 1) {
        count--;
        qty.val(count);
    } else {
        $("#alert").show().html("atleast 1 product must be added into cart")


    }
}
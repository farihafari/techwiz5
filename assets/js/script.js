$.ajax({
    url:"assets/json/data.json",
    type:"get",
    success:function(data){
        let x =``;
        let modal =``;
        // console.log(data)
        $.each(data,function(keys,objects){
        if(keys=="mobiles"){
            $.each(objects,function(objKeys,arrays){
                // console.log(objKeys)
                // console.log(arrays.name)
                $.each(arrays,function(index,indexObject){
                    // console.log(indexObject.name)
                    x+=` <div class="col-lg-3 mt-3">
                <div class="card">
                    <img class="card-img-top" src="${indexObject.image}" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">${indexObject.name}</h4>
                        <p class="card-text">${indexObject.price}</p>
                        <a href="#${index}" data-bs-toggle="modal" class="btn btn-info" >details</a>
                    </div>
                </div>
                
            </div>`

modal+=` <div class="modal fade " id="${index}" tabindex="-1"  aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" >
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
                </div>
            </div>
         </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
                })
            })
        }
           
        })
        $("#dataPro").html(x);
        $("#modalData").html(modal)
    }
})
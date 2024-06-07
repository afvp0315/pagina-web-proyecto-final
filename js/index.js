document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".box3");
  const closeModalBtn = document.querySelector(".modal .close");

  const modalName = document.querySelector(".modal-price");
  const modalImg = document.querySelector(".modal-img");
  const modalPrice = document.querySelector(".modal-price");
  const modalDescription = document.querySelector(".modal-description");
  const heroFormModal = document.getElementById("hero-form-modal");
  

  let productsCart = [];

  const showModal = () => {
    heroFormModal.style.display = "block";
  };

  const closeModal = () => {
    heroFormModal.style.display = "none";
  };

  const loadHeroes = async () => {
    const heroes = await api.getHeroes();
    console.log(heroes);
    productsContainer.innerHTML = "";
    heroes.forEach((hero) => {
      const heroCard = document.createElement("div");
      heroCard.className = "product-card";
      heroCard.innerHTML = `
                    

                   
          
            <div class="image-product">
            <img src="${hero.image}" alt="${hero.name}">
            </div>
            <div class="buttons">
              <div>
                <button class="informacionProducto">${hero.name}</button>
              </div>
            
            </div>
          
        `;
        const informacionBtn = heroCard.querySelector(".informacionProducto");
        console.log(informacionBtn);
        informacionBtn.addEventListener("click", () => {
          modalName.textContent = hero.name;
          modalImg.src = hero.image;
          modalPrice.textContent = hero.price;
          modalDescription.textContent = hero.description;
  
  
 

        showModal();

        let addCartBtn = document.querySelector(".addCartBtn");
        
         // Event listener para agregar el héroe al carrito
    
    addCartBtn.addEventListener("click", () => {
      productsCart=[];
      productsCart = productsCart.concat(hero);
      console.log('Producto agregado al carrito:', hero);
      console.log('Carrito actual:', productsCart);
      addCartBtn.removeEventListener("click",() =>{console.log("hola",productsCart)});
      closeModal();
    });
       
        });

       

      
      
      productsContainer.appendChild(heroCard);
    });
  };
  closeModalBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === heroFormModal) {
      closeModal();
    }
  });
 
  loadHeroes();
});

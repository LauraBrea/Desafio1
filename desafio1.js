console.clear();

class ProductManager {

  constructor () {
    this.products = [];  }

      addProduct (title, description, price, thumbnail, code, stock ) {

          const product = {
            id: this.#getMaxId() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
          };
          
          if (title == "" || description == "" || price == "" || thumbnail == "" || code == "" || stock== "" ) {
            console.log ("Incomplete data");
       
          } else {
            this.products.push (product);
            console.log (this.products); 
          }
        };


    getProducts () {
      if (this.products.length === 0) {
        console.log("Empty list");
        return;
        } else {
        console.log(this.products);
      }
    };

    getProductById (idProduct) {
      const product = this.#getId(idProduct);
        if (product) {
          console.log(product);
        } else {
          console.log("Not found");
        }
    };

    #getMaxId() {
      let maxId = 0;
      this.products.map((product) => {
        if (product.id > maxId) maxId = product.id;
      });
      return maxId;
    };

    #getId(idProduct) {
      return this.products.find((product) => product.id === idProduct);
    };
}


const productManager = new ProductManager();

/* muestra leyenda lista vacía */
productManager.getProducts ();

/* se cargan productos */
productManager.addProduct ("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123", 25);
productManager.addProduct ("producto prueba","Este es un producto prueba",200,"Sin imagen","abc124", 25);
productManager.addProduct ("producto prueba","Este es un producto prueba",200,"Sin imagen","abc125", 25);

/* muestra lista de productos cargados */
productManager.getProducts ();

/* no agrega por código repetido --- PENDIENTEEEEEE SIN RESOLVER */
productManager.addProduct ("producto prueba","Este es un producto prueba",200,"Sin imagen","abc125", 25);

/* no agrega por falta de datos */
productManager.addProduct ("","Este es un producto prueba",200,"Sin imagen","abc126", 25);

/* muestra producto seleccionado por ID */
productManager.getProductById (3);

/* id no encontrado */
productManager.getProductById (8);





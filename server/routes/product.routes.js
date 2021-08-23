const ProductController = require("../controllers/product.controller");
module.exports = (app) => {
  app.get("/api/product", ProductController.getAllProduct);
  app.get("/api/product/:productId", ProductController.getOneProduct);
  app.post("/api/product", ProductController.addNewProduct);
  app.delete("/api/product/:productId", ProductController.removeProduct);
  app.put("/api/product/:productId", ProductController.updateProduct);
};

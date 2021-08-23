const Product = require("../models/product.model");

// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     })
// }

const addNewProduct = (request, response) => {
  const { body } = request;

  Product.create({
    title: body.title,
    price: body.price,
    description: body.description,
  })
    .then((newProduct) => response.json({ newProduct }))
    .catch((err) => response.json({ err }));
};

const getAllProduct = (request, response) => {
  const { body } = request;

  Product.find()
    .then((allProducts) => {
      response.json({ allProducts });
    })
    .catch((err) => response.json({ error: err }));
};

const removeProduct = (request, response) => {
  const { body } = request;

  Product.deleteOne({ _id: request.params.productId })
    .then((deletedProduct) =>
      response.json({ message: "Product deleted: ", deletedProduct })
    )
    .catch((err) => response.json({ error: err }));
};

const getOneProduct = (request, response) => {
  const { body } = request;
  Product.findById({ _id: request.params.productId })
    .then((oneProduct) => response.json({ oneProduct }))
    .catch((err) => response.json({ error: err }));
};

const updateProduct = (request, response) => {
  const { body } = request;
  Product.findOneAndUpdate({ _id: request.params.productId }, body, {
    new: true,
    runValidators: true,
  })
    .then((product) => response.json({ product }))
    .catch((err) => response.json({ error: err }));
};

module.exports = {
  addNewProduct,
  getAllProduct,
  removeProduct,
  getOneProduct,
  updateProduct,
};

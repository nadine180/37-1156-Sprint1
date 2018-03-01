var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Perihanproducts = mongoose.model('Perihan');

module.exports.getProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.perihanproductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  Perihanproducts.findById(req.params.perihanproductsId).exec(function(err, product) {
    if (err) {
      return next(err);
    }
    if (!product) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product retrieved successfully.',
      data: product
    });
  });

 
};

module.exports.getProducts = function(req, res, next) {
  Perihanproducts.find({}).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'Products retrieved successfully.',
      data: products
    });
  });
};



module.exports.getProductsByComponent = function(req, res, next) {
    if (!Validations.isString(req.params.component)) {
      return res.status(422).json({
        err: null,
        msg: 'component parameter must be a valid string.',
        data: null
      });
    }
    Perihanproducts.find({
      component: req.params.component
    }).exec(function(err, products) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg:
          'Products in ' +
          req.params.component +
          ' retrieved successfully.',
        data: products
      });
    });
  };

module.exports.getProductsBySeller = function(req, res, next) {
    if (!Validations.isString(req.params.seller)) {
      return res.status(422).json({
        err: null,
        msg: 'seller parameter must be a valid string.',
        data: null
      });
    }
    Perihanproducts.find({
      seller: req.params.seller
    }).exec(function(err, products) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg:
          'Products with seller ' +
          req.params.seller +
          'retrieved successfully.',
        data: products
      });
    });
  };



module.exports.getProductsBelowPrice = function(req, res, next) {
  if (!Validations.isNumber(req.params.price)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid number.',
      data: null
    });
  }
  Perihanproducts.find({
    price: {
      $lt: req.params.price
    }
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'Products priced below ' +
        req.params.price +
        ' retrieved successfully.',
      data: products
    });
  });
};

module.exports.createProduct = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price) &&
    req.body.component &&
    Validations.isString(req.body.component) &&
    req.body.seller &&
    Validations.isString(req.body.seller);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) , price(Number) , component(String) and seller(String) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  Perihanproducts.create(req.body, function(err, product) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'Product was created successfully.',
      data: product
    });
  });
};

module.exports.updateProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.perihanproductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  var valid =
  req.body.name &&
  Validations.isString(req.body.name) &&
  req.body.price &&
  Validations.isNumber(req.body.price) &&
  req.body.component &&
  Validations.isString(req.body.component) &&
  req.body.seller &&
  Validations.isString(req.body.seller);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) , price(Number) , component(String) and seller(String) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  Perihanproducts.findByIdAndUpdate(
    req.params.perihanproductsId,
    {
      $set: req.body
    },
    { new: true }
  ).exec(function(err, updatedProduct) {
    if (err) {
      return next(err);
    }
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was updated successfully.',
      data: updatedProduct
    });
  });
};

module.exports.deleteProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.perihanproductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  Perihanproducts.findByIdAndRemove(req.params.perihanproductsId).exec(function(
    err,
    deletedProduct
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was deleted successfully.',
      data: deletedProduct
    });
  });
};

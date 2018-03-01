var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  NadineproductCtrl = require('../controllers/NadineController');


  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');

   //-------------------------------Nadine Routes-----------------------------------

   router.get('/Nadine/getProducts', NadineproductCtrl.getProducts);
   router.get('/Nadine/getProduct/:NadineproductsId', NadineproductCtrl.getProduct);
   router.post('/Nadine/createProduct', NadineproductCtrl.createProduct);
   router.get('/Nadine/getProductsBySeller/:seller',NadineproductCtrl.getProductsBySeller);

   router.get('/Nadine/getProductsByComponent/:component',
   NadineproductCtrl.getProductsByComponent
   );
   router.patch('/Nadine/updateProduct/:NadineproductsId', NadineproductCtrl.updateProduct);
   router.delete('/Nadine/deleteProduct/:NadineproductsId', NadineproductCtrl.deleteProduct);

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get('/product/getProductsBelowPrice/:price',productCtrl.getProductsBelowPrice);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);


module.exports = router;

var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  perihanproductCtrl = require('../controllers/PerihanController');


  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');

   //-------------------------------Perihan Routes-----------------------------------

   router.get('/perihan/getProducts', perihanproductCtrl.getProducts);
   router.get('/perihan/getProduct/:perihanproductsId', perihanproductCtrl.getProduct);
   router.post('/perihan/createProduct', perihanproductCtrl.createProduct);
   router.get('/perihan/getProductsBySeller/:seller',perihanproductCtrl.getProductsBySeller);
 
   router.get('/perihan/getProductsByComponent/:component',
   perihanproductCtrl.getProductsByComponent
   );
   router.patch('/perihan/updateProduct/:perihanproductsId', perihanproductCtrl.updateProduct);
   router.delete('/perihan/deleteProduct/:perihanproductsId', perihanproductCtrl.deleteProduct);

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

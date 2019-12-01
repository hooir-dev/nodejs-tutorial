/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "00-course_introduction.html",
    "revision": "68ab6cd0cce5e5aa296a499f92d45b4a"
  },
  {
    "url": "01-web_concept.html",
    "revision": "62e388f291befd98566938b94e5f89fd"
  },
  {
    "url": "02-node_introduction.html",
    "revision": "5492c50f68eaeb4554d81f56d9788381"
  },
  {
    "url": "03-getting_started.html",
    "revision": "12beda324fa767f5592099431e02d8ac"
  },
  {
    "url": "04-module.html",
    "revision": "257e8d38f3eb81b0a9c8e850667a548d"
  },
  {
    "url": "05-package_npm.html",
    "revision": "49212f98bd4d610266365fc7748d1922"
  },
  {
    "url": "06-fs.html",
    "revision": "e5f9d2359398142aca32cf6d4c30db0b"
  },
  {
    "url": "07-web.html",
    "revision": "71ae715ee36180caa8cf30b29537aab2"
  },
  {
    "url": "08-express.html",
    "revision": "52154a8ec55dfbc4b4ab61b75ba053bf"
  },
  {
    "url": "09-db.html",
    "revision": "077cb7c501059503def6d1b441329bd6"
  },
  {
    "url": "10-web_db.html",
    "revision": "67ffe4d047570ac7f807b01b9ff48481"
  },
  {
    "url": "11-session_persistence.html",
    "revision": "45f0792cef942ef4aeb5bb0e0fad81e9"
  },
  {
    "url": "12-ajax.html",
    "revision": "d279df56870e6d381f1f5651f6382140"
  },
  {
    "url": "13-alibaixiu.html",
    "revision": "4fd1ef1f8e8024da9f50a35d02513d2d"
  },
  {
    "url": "14-asynchronous_ programming.html",
    "revision": "8d36805029da3c4385d7986a1e99ed06"
  },
  {
    "url": "15-dep_ops.html",
    "revision": "74bf398d2617dd901a07cdd99620dd5d"
  },
  {
    "url": "16-other.html",
    "revision": "125c3bbc6a4746745fb8d81796ddab6d"
  },
  {
    "url": "404.html",
    "revision": "dfc8691e148a4dc708bfd2da2c4a75a3"
  },
  {
    "url": "assets/css/0.styles.382af5d5.css",
    "revision": "439d826d57d7154c5ddbcf8f39f129c2"
  },
  {
    "url": "assets/img/01-1553324541135.6f3b9b37.jpg",
    "revision": "6f3b9b37bdf8d962c4659bba8056b211"
  },
  {
    "url": "assets/img/10-1553326798075.2111e8ea.png",
    "revision": "2111e8ea705c3be06ab2096114a3db13"
  },
  {
    "url": "assets/img/10.d013faf3.jpg",
    "revision": "d013faf37508dbb64eb32f85268fb063"
  },
  {
    "url": "assets/img/11-1553324277164-1553324278360.89c6f734.png",
    "revision": "89c6f73407f0022c007cd7fbd9c91c0c"
  },
  {
    "url": "assets/img/12-1553324286853.b338caf5.png",
    "revision": "b338caf55c0f4b284dda5561fdd31350"
  },
  {
    "url": "assets/img/13-1553324293721.dad938d0.png",
    "revision": "dad938d06b48c8ff8e5c886fa945dfe0"
  },
  {
    "url": "assets/img/14-1553324301121.ad01e678.png",
    "revision": "ad01e67825fe61122c34f917b4dfcfcc"
  },
  {
    "url": "assets/img/15-1553324308931.d58689a0.png",
    "revision": "d58689a0c7d380f85869c15ff7d4c433"
  },
  {
    "url": "assets/img/1505995465005.0c7bb0ab.png",
    "revision": "0c7bb0ab653ae2b7d4dfc6fc0ca0eb7f"
  },
  {
    "url": "assets/img/1505996335305.acd35e35.png",
    "revision": "acd35e35fafb3b4f598d38df3b0664bd"
  },
  {
    "url": "assets/img/1505997349857.e9baa1e4.png",
    "revision": "e9baa1e4bd873887f88d70e736fcfb52"
  },
  {
    "url": "assets/img/1505998898900.a35bfbcb.png",
    "revision": "a35bfbcb0fdddb6ee68d7859c50d1696"
  },
  {
    "url": "assets/img/1505999461533.2b861ffc.png",
    "revision": "2b861ffc0c9fef9c25723734ae76edb8"
  },
  {
    "url": "assets/img/1506132097583.7374d2da.png",
    "revision": "7374d2daaebc1668f8a400cfb0f63424"
  },
  {
    "url": "assets/img/1506132675132.53a4cfbb.png",
    "revision": "53a4cfbb0303fc96038602ec267d74d5"
  },
  {
    "url": "assets/img/1506136421939.f3a4b649.png",
    "revision": "f3a4b6493bf1040ca84b0c01353f4d89"
  },
  {
    "url": "assets/img/1536371845715-1553324735445.6979966b.png",
    "revision": "6979966b9bf9067d8b8937370b4992a1"
  },
  {
    "url": "assets/img/1536372579821-1553324753314.45bd0a99.png",
    "revision": "45bd0a9944a4a3b439a22804b161fab8"
  },
  {
    "url": "assets/img/1550288929984-1553324487328.b2ba056a.png",
    "revision": "b2ba056a287b8225e3de96d41e3e007f"
  },
  {
    "url": "assets/img/1550289044586.0200230f.png",
    "revision": "0200230f99af0cb9c6793870e7b0fc46"
  },
  {
    "url": "assets/img/1550289096156-1553324524881.7aa75ecd.png",
    "revision": "7aa75ecd49051911ce6041cb51ccb5a2"
  },
  {
    "url": "assets/img/1550289337358-1553324455309.48f89b97.png",
    "revision": "48f89b97fc5f0d324c1e92b46b6bbe5f"
  },
  {
    "url": "assets/img/1550289488104.64c77e97.png",
    "revision": "64c77e97f815989e10e1f2b4c89ab3d1"
  },
  {
    "url": "assets/img/1550289621488-1553324591711.e6952904.png",
    "revision": "e69529043cb64ddf43c1e81074969f82"
  },
  {
    "url": "assets/img/1550289670811-1553324608487.b5d9b265.png",
    "revision": "b5d9b265dac044dc54c83cd166957090"
  },
  {
    "url": "assets/img/1550289999095-1553324624155.7b6d7f75.png",
    "revision": "7b6d7f75b9f00cd010d3bb3266ca6538"
  },
  {
    "url": "assets/img/1550290151743.5de3c3a0.png",
    "revision": "5de3c3a04bc55bd83e60c374f5703b4a"
  },
  {
    "url": "assets/img/1550290298850-1553324653395.5b85c211.png",
    "revision": "5b85c2113e09ed023bda5128caaf3781"
  },
  {
    "url": "assets/img/1550290417874-1553324667796.407c6a67.png",
    "revision": "407c6a679dc603acbc3ef61947bc7b93"
  },
  {
    "url": "assets/img/1550290590762-1553324682276.be49120a.png",
    "revision": "be49120aea4c5ad696747f0074e5281e"
  },
  {
    "url": "assets/img/1550290764529.3cf44420.png",
    "revision": "3cf44420dd38f17a186556ff4c4e660d"
  },
  {
    "url": "assets/img/1550715695394-1553325297231.79559769.png",
    "revision": "79559769891394b8949dec42e370972b"
  },
  {
    "url": "assets/img/1550715805092-1553325280403.ede95b4d.png",
    "revision": "ede95b4dbcab903514592b45851492c9"
  },
  {
    "url": "assets/img/1550715834037-1553325311016.427a3e82.png",
    "revision": "427a3e82b04b924c183ede9f315a830f"
  },
  {
    "url": "assets/img/1550715854650-1553325326587.95849431.png",
    "revision": "95849431975d38493039860aed981954"
  },
  {
    "url": "assets/img/1550715877585-1553325343238.d128367a.png",
    "revision": "d128367a19d5490e658c138808d41b36"
  },
  {
    "url": "assets/img/1550715998056-1553325358646.2a06e0b3.png",
    "revision": "2a06e0b33571c3b1b516c5e222cafbcb"
  },
  {
    "url": "assets/img/1550716026560-1553325371829.85658e20.png",
    "revision": "85658e207325e85ea20380603675694b"
  },
  {
    "url": "assets/img/1550717040205-1553325385819.a12958fa.png",
    "revision": "a12958fa1f409788b189cab90cd5cc7d"
  },
  {
    "url": "assets/img/1550717326882-1553325399932.8badb883.png",
    "revision": "8badb883af1447bd5870c1f23a15ec1b"
  },
  {
    "url": "assets/img/1550717525173-1553325412893.85b15b8d.png",
    "revision": "85b15b8ddebd67a3fc2a2ce96ca82d6f"
  },
  {
    "url": "assets/img/1550718010509-1553325425301.e9d33c80.png",
    "revision": "e9d33c80c42b2c3410799436e7ced8ff"
  },
  {
    "url": "assets/img/1550718521440-1553325438148.031a7ead.png",
    "revision": "031a7eadb757d380e18120329162e0bf"
  },
  {
    "url": "assets/img/15510607153031553325852818.076d716b.png",
    "revision": "076d716b30f03f529e18bf61ad2b6c57"
  },
  {
    "url": "assets/img/15510610722671553325871563.60d91195.png",
    "revision": "60d911952f5dd28a900fbadef99fa787"
  },
  {
    "url": "assets/img/15510612439851553325885249.fb05eb94.png",
    "revision": "fb05eb9465e77eb59fd7b15849369438"
  },
  {
    "url": "assets/img/1551061350487-1553325901395.11c38a80.png",
    "revision": "11c38a8044dc5ee74c7d3fb8a243ab97"
  },
  {
    "url": "assets/img/1551061854487-1553325913136.730a39db.png",
    "revision": "730a39db4bb1c6f184501c686e37acea"
  },
  {
    "url": "assets/img/1551061868775-1553325925905.fef3a91c.png",
    "revision": "fef3a91c7d3bf8ea386410a0b266f110"
  },
  {
    "url": "assets/img/1551063381578-1553325940371.9852f030.png",
    "revision": "9852f030a44746ee4d77bd9dfd134e71"
  },
  {
    "url": "assets/img/1551063585441-1553325952667.8ec16f5b.png",
    "revision": "8ec16f5b33a1ad62a68a2488c0d5a900"
  },
  {
    "url": "assets/img/1551063766595-1553325964783.6d97f847.png",
    "revision": "6d97f847280ac8a28908bd37c5df6117"
  },
  {
    "url": "assets/img/1551063901990-1553325975966.d14a759f.png",
    "revision": "d14a759fe73dd0b321e923d3211270b0"
  },
  {
    "url": "assets/img/1551065279553-1553326075223.b2d2b9d6.png",
    "revision": "b2d2b9d68af6db752596439e1d39870c"
  },
  {
    "url": "assets/img/1551066997772-1553326150484.ee67c0aa.png",
    "revision": "ee67c0aaeee349d8b6bddb748c598cd5"
  },
  {
    "url": "assets/img/1551067231054-1553326164922.034df864.png",
    "revision": "034df86452f62be32c1fbfbfde79fe1d"
  },
  {
    "url": "assets/img/1551067737212-1553326179172.a6668553.png",
    "revision": "a6668553a0a2f4e92d95b3cb8d26f293"
  },
  {
    "url": "assets/img/1551320851108-1553326370270.d1fed00b.png",
    "revision": "d1fed00bd9d79a8a6dbbdd66f748bcbe"
  },
  {
    "url": "assets/img/1551320870007-1553326386522.67d86d88.png",
    "revision": "67d86d88db6358db1999178cf6caec3f"
  },
  {
    "url": "assets/img/1551320890497-1553326398483.5e6b6f76.png",
    "revision": "5e6b6f7604ecdc8f9f213edf52026cd1"
  },
  {
    "url": "assets/img/1551320910942-1553326411361.8173114a.png",
    "revision": "8173114a892b043a34671f8be348c097"
  },
  {
    "url": "assets/img/1551320968813-1553326423966.87837638.png",
    "revision": "87837638416cd34b385a4cdb25e6f986"
  },
  {
    "url": "assets/img/1551322357558-1553326457724.ea43dc78.png",
    "revision": "ea43dc78d2b3fa117dc81ffb5455a6b8"
  },
  {
    "url": "assets/img/1551323509153-1553326486532.a1055a0d.png",
    "revision": "a1055a0dd1b7da5874f10ab125cf6060"
  },
  {
    "url": "assets/img/1551323585382-1553326497984.215e4310.png",
    "revision": "215e431017f8519bfda12d3860c312d0"
  },
  {
    "url": "assets/img/1551323990492-1553326510353.c1824ead.png",
    "revision": "c1824ead34ddcb3dfdfb4b8124201708"
  },
  {
    "url": "assets/img/1551325799431-1553326526688.e360a3d9.png",
    "revision": "e360a3d9bab2b5e39e8ec06d63fb4eb5"
  },
  {
    "url": "assets/img/1551325842809-1553326543131.9dbe0a49.png",
    "revision": "9dbe0a496f2fd4e88f6dd53a5f200247"
  },
  {
    "url": "assets/img/1551325870327-1553326563296.091886df.png",
    "revision": "091886df0171ae8f0938b12efc524a3f"
  },
  {
    "url": "assets/img/1551327580077-1553326845864.2077f450.png",
    "revision": "2077f450b8a40609f81badb9ce6e0ca4"
  },
  {
    "url": "assets/img/1551327622780-1553326831568.b653645e.png",
    "revision": "b653645ef216f3c255f7fcdd140500e6"
  },
  {
    "url": "assets/img/1551859111822.8ba2cbff.png",
    "revision": "8ba2cbff3083b76d6941f6129ddb7ea7"
  },
  {
    "url": "assets/img/1551870035033.8595c403.png",
    "revision": "8595c403c1c128096491686ee9f86b4b"
  },
  {
    "url": "assets/img/1552019045020.b57f02e0.png",
    "revision": "b57f02e05090147f88c80bb8a3c5a8c0"
  },
  {
    "url": "assets/img/1552019250524.80390579.png",
    "revision": "80390579f14f400f64bbd221ef425d4d"
  },
  {
    "url": "assets/img/16-1553324315893.f992faa8.png",
    "revision": "f992faa8597b1e493cdd9b39362f33f2"
  },
  {
    "url": "assets/img/17-1553324322911.41be5044.png",
    "revision": "41be50445b7318554b9d3ae47a4670df"
  },
  {
    "url": "assets/img/18.30daf827.png",
    "revision": "30daf827204d50f6efdcd7653f5cdfe5"
  },
  {
    "url": "assets/img/2015-07-15_55a6794639322.1416ddab.jpg",
    "revision": "1416ddabad3dcd4ffca600f88a7613cb"
  },
  {
    "url": "assets/img/4-1553325560473-1553325562016.a63eac22.png",
    "revision": "a63eac2297ea3fe1f6f8dbebb885cacc"
  },
  {
    "url": "assets/img/4310973-50fc9497129afbf2.5f0f7157.png",
    "revision": "5f0f715780828ef7e8dc1210d669c556"
  },
  {
    "url": "assets/img/4310973-d08c039d7ef0dada.08751ff1.png",
    "revision": "08751ff1c109334ab4bc7c9e7eeb60df"
  },
  {
    "url": "assets/img/4310973-f244fd91439f1e69.7d77e055.png",
    "revision": "7d77e0559753b666af2181adde8c0936"
  },
  {
    "url": "assets/img/489283f0-1b98-11e7-a4a6-57c560a3eb5c.31233fc4.png",
    "revision": "31233fc45412cf01feed64ca1dc3a8b6"
  },
  {
    "url": "assets/img/55.ae0c21c1.jpg",
    "revision": "ae0c21c163c576f14a42c3e8862f59be"
  },
  {
    "url": "assets/img/66.a31b637a.jpg",
    "revision": "a31b637acece0e58059bbcd2519868c3"
  },
  {
    "url": "assets/img/7-1553326578248-1553326579095.efaa1e41.png",
    "revision": "efaa1e4193bbcd14403d499a7a7e0e04"
  },
  {
    "url": "assets/img/71553324174393.ff99bfa0.jpg",
    "revision": "ff99bfa01a958372edfc6e2079c9dbb7"
  },
  {
    "url": "assets/img/8-1553326592948-1553326593691.13bbd97d.png",
    "revision": "13bbd97d721379e0dad35b20b65375de"
  },
  {
    "url": "assets/img/8.104a3c33.jpg",
    "revision": "104a3c330eea7d143fd82bd366337e17"
  },
  {
    "url": "assets/img/9-1553324249377.f13788d0.jpg",
    "revision": "f13788d01761fea7b6f6496f3f5ecbe9"
  },
  {
    "url": "assets/img/9-1553326786273.0380202a.png",
    "revision": "0380202aac1e3d8285ddab40433ced09"
  },
  {
    "url": "assets/img/a4.f912dbde.jpg",
    "revision": "f912dbdef3d1a8d76f5ec4c0aa1de853"
  },
  {
    "url": "assets/img/apache-process.5d525d31.png",
    "revision": "5d525d3168482e447546c88127c29770"
  },
  {
    "url": "assets/img/bg2019020901.60b2d05e.jpg",
    "revision": "60b2d05eb70b31d802a4a250e38e1b82"
  },
  {
    "url": "assets/img/browser-server.f81905fc.png",
    "revision": "f81905fc16ce556d3fe529d81c00e032"
  },
  {
    "url": "assets/img/callback-hell.b9c59b9f.jpg",
    "revision": "b9c59b9f2a21674c49851c2e80106bd5"
  },
  {
    "url": "assets/img/connection-pool.f6eda4aa.png",
    "revision": "f6eda4aade793bc32751a73ea0c5dbaa"
  },
  {
    "url": "assets/img/eventloop.742d9b00.jpg",
    "revision": "742d9b00af4e43a1acedca9d45630ed7"
  },
  {
    "url": "assets/img/express-mw.8a933c0d.png",
    "revision": "8a933c0d1324ea042e9289f02680d734"
  },
  {
    "url": "assets/img/Fetching_a_page.8cfeef1d.png",
    "revision": "8cfeef1da5e1405e13cdef7e2d64f50d"
  },
  {
    "url": "assets/img/HTTP_Request_Headers2.0494d8d2.png",
    "revision": "0494d8d2524eaf2068cfa9f34ed5d271"
  },
  {
    "url": "assets/img/HTTP_Request.d2fb5602.png",
    "revision": "d2fb56022283926751de8706c41d2736"
  },
  {
    "url": "assets/img/HTTP_Response_Headers2.8497c0f1.png",
    "revision": "8497c0f1630b01d3d83f26cf1be64a7b"
  },
  {
    "url": "assets/img/HTTP_Response.94e095a3.png",
    "revision": "94e095a3fcf89fd3e3fd792d5de89ba2"
  },
  {
    "url": "assets/img/http-req-res.3c623f3b.png",
    "revision": "3c623f3b3f07e9c48de565a47f4ea480"
  },
  {
    "url": "assets/img/HTTPMsg2.d85a98a6.png",
    "revision": "d85a98a68cc6792765427177a8c9c43d"
  },
  {
    "url": "assets/img/HTTPMsgStructure2.89fd155f.png",
    "revision": "89fd155f82267d25697f050e1faf7ce6"
  },
  {
    "url": "assets/img/image-20181107154211879.4bfeefd5.png",
    "revision": "4bfeefd5c57cec4669d1fc2b890c93e7"
  },
  {
    "url": "assets/img/image-20181120125258392-2689578.ecfeca2b.png",
    "revision": "ecfeca2be1c7019502fce3bbd783764b"
  },
  {
    "url": "assets/img/image-20181120125456932-2689696.66f95f21.png",
    "revision": "66f95f21bd8c0959090dffad8804a02e"
  },
  {
    "url": "assets/img/image-20181120125522493-2689722.594f169e.png",
    "revision": "594f169eee0fac83ea5e7c631d171a24"
  },
  {
    "url": "assets/img/image-20181120125605674-2689765.990c21ca.png",
    "revision": "990c21cac4061f2a271e8302da1d1eab"
  },
  {
    "url": "assets/img/image-20181120125801058-2689881.bb2aefff.png",
    "revision": "bb2aefffb25c33f845a8ff6aed4c1b5a"
  },
  {
    "url": "assets/img/image-20181120125831374-2689911.5e8e657f.png",
    "revision": "5e8e657fa2fee6f5795d6858296eacf0"
  },
  {
    "url": "assets/img/image-20181120125856275-2689936.d1aca723.png",
    "revision": "d1aca723335394d893f2cc11ea0ee50d"
  },
  {
    "url": "assets/img/image-20181120125920281-2689960.2da01696.png",
    "revision": "2da016967df96d90d1014ff49281e5e5"
  },
  {
    "url": "assets/img/image-20181125015056630-3081856.a0501116.png",
    "revision": "a0501116df2ecf82357188b34736a525"
  },
  {
    "url": "assets/img/image-20181125015151524-3081911.cadccadd.png",
    "revision": "cadccadd22770694bf35681a94ca51cc"
  },
  {
    "url": "assets/img/image-20181125015215072-3081935.82a62b60.png",
    "revision": "82a62b6000c4a75187d1fa15452e62f7"
  },
  {
    "url": "assets/img/image-20181125015319951-3081999.4e0d8375.png",
    "revision": "4e0d837593d788ba5d4e5474ddb99010"
  },
  {
    "url": "assets/img/image-20181125015513934-3082113.ae39e13c.png",
    "revision": "ae39e13c1a299b1d1bab42063d0d7b36"
  },
  {
    "url": "assets/img/image-20181125015635130-3082195.561f18e0.png",
    "revision": "561f18e04635be72de6bef5c70535eac"
  },
  {
    "url": "assets/img/image-20181125015709088-3082229.e6580c06.png",
    "revision": "e6580c068608c28e8a4801c835257c96"
  },
  {
    "url": "assets/img/image-20181125015818182-3082298.f8f92b41.png",
    "revision": "f8f92b41180b7fd39db856e2d37c77f4"
  },
  {
    "url": "assets/img/image-20181125015834142-3082314.ac1af51d.png",
    "revision": "ac1af51d3516c4e12790de2f42e78551"
  },
  {
    "url": "assets/img/multi-thread.d38947c3.jpg",
    "revision": "d38947c3e1a6141a72f1d188c53a9188"
  },
  {
    "url": "assets/img/multiple-network.57247e9a.png",
    "revision": "57247e9a455cc89784361b877793ae72"
  },
  {
    "url": "assets/img/nodejs-require.851bca4a.jpg",
    "revision": "851bca4acc603ce08d1011243191f665"
  },
  {
    "url": "assets/img/ryandahl.20655114.jpg",
    "revision": "20655114a3cd87baf6bfa9eead6b71ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/shell.1a04016e.jpg",
    "revision": "1a04016e0d6bcb8cb32a6aa804970502"
  },
  {
    "url": "assets/img/single-network.9a643616.png",
    "revision": "9a643616b15312b4bc8a9d4c51d55ad5"
  },
  {
    "url": "assets/img/water-middleware.171fda80.jpeg",
    "revision": "171fda805c52e182bcf69d18eed4a045"
  },
  {
    "url": "assets/img/web-server.ef6cedc6.png",
    "revision": "ef6cedc611c2a94ffcca445d5db8d582"
  },
  {
    "url": "assets/js/10.5b11cab0.js",
    "revision": "33af6c671602f17edab2104f9eaed709"
  },
  {
    "url": "assets/js/11.bf1f3f16.js",
    "revision": "9e52a2eeba50b951bede7a6bd4573521"
  },
  {
    "url": "assets/js/12.d6508346.js",
    "revision": "1d68633dcbfc9396bfddd5a08c236ff1"
  },
  {
    "url": "assets/js/13.52f6c1ad.js",
    "revision": "7e29ca82cebbd3b7fef91982bebe3450"
  },
  {
    "url": "assets/js/14.c75697e3.js",
    "revision": "ab41243f818d161fe9a5a17434ce9936"
  },
  {
    "url": "assets/js/15.775c8708.js",
    "revision": "50191188973b1f7b945b7c40e8af9fdf"
  },
  {
    "url": "assets/js/16.10809650.js",
    "revision": "613d3a2227523279f290a1e5b7db89c1"
  },
  {
    "url": "assets/js/17.60279c5d.js",
    "revision": "477a3b8f1068db38b54b87d392738d35"
  },
  {
    "url": "assets/js/18.421777c3.js",
    "revision": "414a2b6e52dbb2604942b2ff702803b7"
  },
  {
    "url": "assets/js/19.960356be.js",
    "revision": "e300e56041977e811a4299a98bfbf72f"
  },
  {
    "url": "assets/js/2.0e940fbb.js",
    "revision": "ee7e3bc6e6f8b8a866300b16eddc6453"
  },
  {
    "url": "assets/js/20.4c2a40dc.js",
    "revision": "fb0efca197d85e28d77d91d9f98f13d1"
  },
  {
    "url": "assets/js/21.73a1e8cb.js",
    "revision": "fe6228ef32574341895d37073efb2d28"
  },
  {
    "url": "assets/js/3.07be1171.js",
    "revision": "6106a67b09c79355bd5b500e0ab1736c"
  },
  {
    "url": "assets/js/4.7a89c0f9.js",
    "revision": "5b4e065fba4fdc7cc3746474a96da588"
  },
  {
    "url": "assets/js/5.5ba4cb83.js",
    "revision": "5689a321bb2457efa7351fddfc0da68e"
  },
  {
    "url": "assets/js/6.b7415607.js",
    "revision": "3d9edae1c768b72aa56b07e80bc731d7"
  },
  {
    "url": "assets/js/7.719e35e5.js",
    "revision": "4ba2c122b837c0c687f13b9cbe3d92d8"
  },
  {
    "url": "assets/js/8.d8593f62.js",
    "revision": "a881cf8f4225d292655d09494bfe731b"
  },
  {
    "url": "assets/js/9.52f01050.js",
    "revision": "3bab836a51850d0ade5e7ac5840c0344"
  },
  {
    "url": "assets/js/app.8174091a.js",
    "revision": "bea7d1b09586a69ac9335d5bfb4c439d"
  },
  {
    "url": "icons/favicon.png",
    "revision": "adbe265cf4d3f10447eb015f0951c53c"
  },
  {
    "url": "index.html",
    "revision": "5c5286ff03a1062ef256e342f76f3103"
  },
  {
    "url": "nodejs-new-pantone-black.png",
    "revision": "f8dab57d048fabd69ea16c67e1615b86"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

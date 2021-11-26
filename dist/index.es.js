import n from"react";function o(n,o){void 0===o&&(o={});var t=o.insertAt;if(n&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}o(".hello-world {\n  background-color: brown;\n  color: white;\n}\n");const t=()=>n.createElement("div",{className:"hello-world"},"Hello World !"),e=()=>n.createElement("div",null,"Hello SASS !");o(".Centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.CardHorizontal {\n  display: flex;\n  margin-bottom: 35px;\n  position: relative;\n  overflow: hidden;\n  width: 730px;\n  border: 1px black solid;\n}\n.CardHorizontal__image {\n  min-width: 50%;\n  position: relative;\n  min-height: 250px;\n  overflow: hidden;\n}\n.CardHorizontal__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  object-fit: cover;\n}\n.CardHorizontal .image-badge {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: auto;\n  width: 60%;\n}\n.CardHorizontal__details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  padding: 32px;\n  text-align: center;\n  max-width: 50%;\n}\n.CardHorizontal__logo {\n  display: block;\n  margin: 0 auto;\n  max-height: 75px;\n  max-width: 100%;\n}\n.CardHorizontal__discount {\n  font-size: 62px;\n  font-weight: 900;\n  line-height: 1;\n  padding: 15px;\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .CardHorizontal__discount {\n    font-size: 42px;\n  }\n}\n@media (max-width: 991.98px) {\n  .CardHorizontal__discount {\n    font-size: 50px;\n  }\n}\n.CardHorizontal__discount-free {\n  font-size: 25px;\n  font-weight: 900;\n  line-height: 1.2;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  word-break: break-word;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.CardHorizontal__heading {\n  font-size: 16px;\n  line-height: 25px;\n  font-weight: 400;\n}\n.CardHorizontal__description {\n  font-size: 10px;\n  padding: 20px 0;\n}\n.CardHorizontal__coupon-btn {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 5px 30px;\n  font-size: 20px;\n  line-height: 32px;\n  min-width: 70%;\n}\n.CardHorizontal__coupon-code-btn {\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #fff;\n  border-color: #000;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 42px;\n  min-width: 70%;\n  text-decoration: none;\n  display: inline-block;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 100%;\n}\n.CardHorizontal__coupon-code-btn.my-list-coupon-button {\n  margin: 20px auto 0;\n}\n.CardHorizontal__coupon-code-btn .coupon-code {\n  width: 70%;\n  background-color: white;\n  color: black;\n  float: left;\n  cursor: auto;\n  border: 1px solid #000;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.2;\n  min-height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.CardHorizontal__coupon-code-btn .rabatte-button {\n  width: 140px;\n  font-size: 14px;\n}\n.CardHorizontal__coupon-code-btn .rabatte-button-brand {\n  width: 100%;\n  font-size: 20px;\n}\n.CardHorizontal__coupon-code-btn .copy-btn {\n  width: 30%;\n  float: left;\n  padding: 11px 0;\n  background-color: #000;\n  border: 1px solid #000;\n  border-left: 0;\n  cursor: pointer;\n  display: table;\n  user-select: none;\n}\n.CardHorizontal__coupon-code-btn .copy-btn p {\n  font-size: 10px;\n  line-height: 10px;\n  font-weight: 700;\n  padding: 0 10%;\n  margin-bottom: 0rem;\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.CardHorizontal__coupon-code-btn p {\n  margin-bottom: 0rem;\n  background-color: #000;\n}\n.CardHorizontal__coupon-code-btn a {\n  width: 280px;\n  height: 42px;\n  text-decoration: none;\n  background-color: black;\n  color: white;\n  padding: 8px 23px;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 25px;\n}\n.CardHorizontal__coupon-code {\n  font-size: 20px;\n  line-height: 32px;\n  padding: 7px 30px;\n  min-width: 70%;\n  display: inline-block;\n  border: 1px solid #000;\n  font-weight: 700;\n}\n.CardHorizontal__image-badge {\n  background-color: #000;\n  font-size: 20px;\n  position: absolute;\n  width: 400px;\n  text-align: center;\n  color: #fff;\n  padding: 10px;\n  font-weight: 900;\n  transform: rotate(-45deg);\n  left: -50px;\n  transform-origin: 0% 50%;\n  top: 200px;\n}\n.CardHorizontal__download {\n  padding: 7px 10px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n  color: #fff;\n}\n.CardHorizontal .Like {\n  position: absolute;\n  left: 42%;\n  bottom: 20px;\n}\n");const i=({coupon:o,className:t=""})=>o?n.createElement("div",{className:"container pad-lr-10"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-8 col-12",id:"coupons"},n.createElement("div",{className:`CardHorizontal ${t}`})))):null;export{i as CardHorizontal,e as HelloSASS,t as HelloWorld};

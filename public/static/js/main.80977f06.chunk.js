(this["webpackJsonpsuper-pizza-client"]=this["webpackJsonpsuper-pizza-client"]||[]).push([[0],{40:function(e,t,a){e.exports=a(62)},45:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),s=a.n(c),i=(a(45),a(34)),l=a(3),o=a(4),m=a(7),d=a(5),u=a(8),p=a(10),E=a(19),h=(a(46),function(e){var t=e.url,a=e.method,n=e.body,r=e.handleSuccess,c=e.handleError,s=t;"/"===t[0]&&(s=t.substr(1)),fetch("".concat("/api/v1","/").concat(s),{method:a,body:n?JSON.stringify(n):void 0,credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json, text-plain, */*","X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.status>=200&&e.status<300?e.json():e.json().then((function(e){throw e}))})).then(r).catch(c)}),v=a(12),b=a(11),N=a(22),f=a.n(N),y=30,g=.89,O=function(e){var t=e.price,a=e.currency;return"usd"===a?"".concat(t.toFixed(2)," USD"):"eur"===a?"".concat((g*t).toFixed(2)," EUR"):void 0},z=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={isProductDescriptionModalVisible:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"showProductDescriptionModal",value:function(){this.setState({isProductDescriptionModalVisible:!0}),document.getElementsByTagName("html")[0].classList.add("is-clipped")}},{key:"hideProductDescriptionModal",value:function(){this.setState({isProductDescriptionModalVisible:!1}),document.getElementsByTagName("html")[0].classList.remove("is-clipped")}},{key:"getQuantityAddedToCart",value:function(){var e=this,t=0;return this.props.cart&&this.props.cart.map((function(a){return a.id===e.props.pizza.id&&(t=a.quantity),a})),t}},{key:"incrementQuantity",value:function(){var e=this.getQuantityAddedToCart();this.props.onUpdateQuantity(this.props.pizza.id,e+1)}},{key:"decrementQuantity",value:function(){var e=this.getQuantityAddedToCart();1===e?this.props.onRemoveFromCart(this.props.pizza.id):this.props.onUpdateQuantity(this.props.pizza.id,e-1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image pointer",onClick:function(){return e.showProductDescriptionModal()}},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:this.props.pizza.image_url,alt:"Placeholder"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"title is-4"},this.props.pizza.name),r.a.createElement("div",{className:"subtitle is-6"},O({price:this.props.pizza.price,currency:this.props.currency})),r.a.createElement("div",{className:"content ellipsis is-ellipsis-3 pointer",onClick:function(){return e.showProductDescriptionModal()}},this.props.pizza.description)),r.a.createElement("footer",{className:"card-footer"},this.getQuantityAddedToCart()>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-footer-item"},r.a.createElement("div",{className:"columns is-mobile"},r.a.createElement("div",{className:"column pointer",onClick:function(){return e.decrementQuantity()}},r.a.createElement(v.a,{icon:b.c})),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"quantity"},this.getQuantityAddedToCart())),r.a.createElement("div",{className:"column pointer",onClick:function(){return e.incrementQuantity()}},r.a.createElement(v.a,{icon:b.f})))),r.a.createElement(p.b,{className:"card-footer-item pointer",to:"/cart"},r.a.createElement(v.a,{icon:b.g}))):r.a.createElement("div",{className:"card-footer-item pointer",onClick:function(){return e.props.onAddToCart({id:e.props.pizza.id,name:e.props.pizza.name,price:e.props.pizza.price,image_url:e.props.pizza.image_url})}},r.a.createElement("div",{className:"has-text-danger"},"Add to cart")))),r.a.createElement("div",{className:f()({modal:!0,"is-active":this.state.isProductDescriptionModalVisible}),id:"productDescriptionModal"},r.a.createElement("div",{className:"modal-background",onClick:function(){return e.hideProductDescriptionModal()}}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("header",{className:"modal-card-head"},r.a.createElement("p",{className:"modal-card-title"},this.props.pizza.name),r.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(){return e.hideProductDescriptionModal()}})),r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{style:{maxWidth:200}},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:this.props.pizza.image_url,alt:"Placeholder"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"title is-6"},O({price:this.props.pizza.price,currency:this.props.currency})),r.a.createElement("div",{className:"content"},this.props.pizza.description)))))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={pizzas:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h({url:"/pizzas",method:"GET",handleSuccess:function(t){e.setState({pizzas:t})},handleError:function(e){console.error("error",e)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-multiline"},this.state.pizzas.map((function(t){return r.a.createElement(z,{currency:e.props.currency,pizza:t,key:t.id,cart:e.props.cart,onAddToCart:function(t){return e.props.onAddToCart(t)},onRemoveFromCart:function(t){return e.props.onRemoveFromCart(t)},onUpdateQuantity:function(t,a){return e.props.onUpdateQuantity(t,a)}})})))))}}]),t}(r.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getCartTotal",value:function(){var e=y;return this.props.cart.map((function(t){e+=t.quantity*t.price})),e}},{key:"incrementQuantity",value:function(e,t){this.props.onUpdateQuantity(t,e+1)}},{key:"decrementQuantity",value:function(e,t){1===e?this.props.onRemoveFromCart(t):this.props.onUpdateQuantity(t,e-1)}},{key:"render",value:function(){var e=this;return this.props.cart.length?r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title has-text-centered"},"Your cart"),r.a.createElement("div",{className:"subtitle has-text-centered"},this.props.cart.length," item(s)"),this.props.cart.map((function(t){return r.a.createElement("div",{className:"columns is-vcentered card",key:t.id},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("figure",{className:"image is-64x64 is-inline-block"},r.a.createElement("img",{src:t.image_url,alt:t.name}))),r.a.createElement("div",{className:"column has-text-centered"},t.name),r.a.createElement("div",{className:"column has-text-centered"},O({price:t.price,currency:e.props.currency})),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("div",{style:{maxWidth:100},className:"is-inline-block"},r.a.createElement("div",{className:"columns is-mobile"},r.a.createElement("div",{className:"column pointer"},r.a.createElement(v.a,{icon:b.c,onClick:function(){return e.decrementQuantity(t.quantity,t.id)}})),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"quantity"},t.quantity)),r.a.createElement("div",{className:"column pointer"},r.a.createElement(v.a,{icon:b.f,onClick:function(){return e.incrementQuantity(t.quantity,t.id)}}))))),r.a.createElement("div",{className:"column has-text-centered"},O({price:t.price*t.quantity,currency:e.props.currency})))})),r.a.createElement("div",{className:"columns card"},r.a.createElement("div",{className:"column is-hidden-mobile"}),r.a.createElement("div",{className:"column is-hidden-mobile"}),r.a.createElement("div",{className:"column is-hidden-mobile"}),r.a.createElement("div",{className:"column has-text-centered"},"Delivery charges"),r.a.createElement("div",{className:"column has-text-centered"},O({price:y,currency:this.props.currency}))),r.a.createElement("div",{className:"columns card"},r.a.createElement("div",{className:"column is-hidden-mobile"}),r.a.createElement("div",{className:"column is-hidden-mobile"}),r.a.createElement("div",{className:"column is-hidden-mobile"}),r.a.createElement("div",{className:"column has-text-centered"},"Total"),r.a.createElement("div",{className:"column has-text-centered"},O({price:this.getCartTotal(),currency:this.props.currency}))),r.a.createElement("div",{className:"has-text-centered"},r.a.createElement(p.b,{to:"/address",className:"button is-danger"},"Enter address")))):r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title has-text-centered"},"Cart empty!"),r.a.createElement("div",{className:"subtitle has-text-centered"},"Go to the menu and add some pizzas!")))}}]),t}(r.a.Component),j=a(2),k=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={orderConfirmed:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.orderConfirmed?r.a.createElement(E.a,{to:"/thank-you"}):r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(j.d,{enableReinitialize:!0,initialValues:{email:this.props.loggedInUser?this.props.loggedInUser.email:"",phone:"",address:"",zip_code:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.phone||(t.phone="Required"),e.address||(t.address="Required"),e.zip_code||(t.zip_code="Required"),t},onSubmit:function(t,a){var n=a.setSubmitting;setTimeout((function(){h({url:"/orders",method:"POST",body:{customer_email:t.email,address:t.address,zip_code:t.zip_code,phone:t.phone,cart:e.props.cart},handleSuccess:function(t){e.props.onEmptyCart(),e.setState({orderConfirmed:!0})},handleError:function(e){alert("Error processing order"),n(!1)}})}),400)}},(function(t){var a=t.isSubmitting;return r.a.createElement(j.c,null,r.a.createElement("div",{className:"title has-text-centered"},"Please enter your address"),r.a.createElement("div",{className:"subtitle has-text-centered"},"and contact details"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement(j.b,{type:"email",name:"email",className:"input",disabled:!!e.props.loggedInUser}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(v.a,{icon:b.b}))),r.a.createElement(j.a,{name:"email",component:"p",className:"help is-danger"}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Phone"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement(j.b,{type:"text",name:"phone",className:"input"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(v.a,{icon:b.d}))),r.a.createElement(j.a,{name:"phone",component:"p",className:"help is-danger"})))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Address"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{component:"textarea",name:"address",className:"textarea"})),r.a.createElement(j.a,{name:"address",component:"p",className:"help is-danger"})),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-half"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Zip code"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"text",name:"zip_code",className:"input"})),r.a.createElement(j.a,{name:"zip_code",component:"p",className:"help is-danger"}))))),r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("button",{type:"submit",className:"button is-danger",disabled:a},"Confirm order")))}))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement(v.a,{icon:b.a,style:{fontSize:50}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"subtitle"},"Your order has been placed. ",r.a.createElement("br",null)," Your Super Pizza is on the way.")))}}]),t}(r.a.Component),x=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={isMenuOpen:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"openMenu",value:function(){this.setState({isMenuOpen:!0})}},{key:"closeMenu",value:function(){this.setState({isMenuOpen:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(p.b,{className:"navbar-item",to:"/"},r.a.createElement(v.a,{icon:b.e,size:"lg"})),r.a.createElement("a",{role:"button",className:f()({"navbar-burger":!0,burger:!0,"is-active":this.state.isMenuOpen}),onClick:function(){return e.state.isMenuOpen?e.closeMenu():e.openMenu()},"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:f()({"navbar-menu":!0,"is-active":this.state.isMenuOpen})},r.a.createElement("div",{className:"navbar-start",onClick:function(){return e.closeMenu()}},r.a.createElement(p.b,{to:"/",className:"navbar-item"},"Menu")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{value:this.props.currency,onChange:function(t){return e.props.onCurrencySelect(t.target.value)}},r.a.createElement("option",{value:"usd"},"USD"),r.a.createElement("option",{value:"eur"},"EUR")))),r.a.createElement("div",{className:"navbar-item",onClick:function(){return e.closeMenu()}},r.a.createElement("div",{className:"buttons"},this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{className:"button is-primary",to:"/orders"},r.a.createElement("strong",null,"My Orders")),r.a.createElement("button",{className:"button is-light",onClick:function(){return e.props.onLogOut()}},r.a.createElement("strong",null,"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{className:"button is-primary",to:"/register"},r.a.createElement("strong",null,"Sign up")),r.a.createElement(p.b,{className:"button is-light",to:"/login"},"Log in")),r.a.createElement(p.b,{className:"button is-white",to:"/cart"},r.a.createElement("span",{className:"icon"},r.a.createElement(v.a,{icon:b.g})),!!this.props.cartCount&&r.a.createElement("div",{className:"count"},"(",this.props.cartCount,")")))))))}}]),t}(r.a.Component),M=a(26),U=a.n(M),_=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={formSubmitted:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.loggedInUser?r.a.createElement(E.a,{to:"/orders"}):this.state.formSubmitted?r.a.createElement(E.a,{to:"/login"}):r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(j.d,{initialValues:{name:"",email:"",password:"",password_confirmation:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.name||(t.name="Required"),e.password||(t.password="Required"),e.password_confirmation||(t.password_confirmation="Required"),e.password.length<8&&(t.password="Password should be at least 8 characters long"),e.password!==e.password_confirmation&&(t.password_confirmation="Passwords do not match"),t},onSubmit:function(t,a){var n=a.setSubmitting;setTimeout((function(){h({url:"register",method:"POST",body:{email:t.email,name:t.name,password:t.password,password_confirmation:t.password_confirmation},handleSuccess:function(t){e.setState({formSubmitted:!0})},handleError:function(e){U()(r.a.createElement("p",null,e.errors?e.errors[Object.keys(e.errors)[0]]:e.message)),n(!1)}})}),400)}},(function(e){var t=e.isSubmitting;return r.a.createElement(j.c,null,r.a.createElement("div",{className:"title has-text-centered"},"Register"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"email",name:"email",className:"input"})),r.a.createElement(j.a,{name:"email",component:"p",className:"help is-danger"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"text",name:"name",className:"input"})),r.a.createElement(j.a,{name:"name",component:"p",className:"help is-danger"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"password",name:"password",className:"input"})),r.a.createElement(j.a,{name:"password",component:"p",className:"help is-danger"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Confirm password"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"password",name:"password_confirmation",className:"input"})),r.a.createElement(j.a,{name:"password_confirmation",component:"p",className:"help is-danger"}))),r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("button",{type:"submit",className:"button is-danger",disabled:t},"Register")))}))))}}]),t}(r.a.Component),I=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={formSubmitted:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.formSubmitted?r.a.createElement(E.a,{to:"/orders"}):r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(j.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t},onSubmit:function(t,a){var n=a.setSubmitting;setTimeout((function(){h({url:"login",method:"POST",body:{email:t.email,password:t.password},handleSuccess:function(t){e.props.onLogin(),e.setState({formSubmitted:!0})},handleError:function(e){U()(r.a.createElement("p",null,e.errors?e.errors[Object.keys(e.errors)[0]]:e.message)),n(!1)}})}),400)}},(function(e){var t=e.isSubmitting;return r.a.createElement(j.c,null,r.a.createElement("div",{className:"title has-text-centered"},"Login"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"email",name:"email",className:"input"})),r.a.createElement(j.a,{name:"email",component:"p",className:"help is-danger"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("div",{className:"control"},r.a.createElement(j.b,{type:"password",name:"password",className:"input"})),r.a.createElement(j.a,{name:"password",component:"p",className:"help is-danger"}))),r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("button",{type:"submit",className:"button is-danger",disabled:t},"Login")))}))))}}]),t}(r.a.Component),T=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={unauthorised:!1,isLoadingOrders:!0,orders:[]},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h({url:"/orders",method:"GET",handleSuccess:function(t){e.setState({orders:t,isLoadingOrders:!1})},handleError:function(t){e.setState({unauthorised:!0})}})}},{key:"render",value:function(){var e=this;if(this.state.unauthorised)return r.a.createElement(E.a,{to:"/login"});if(!this.state.orders.length&&!this.state.isLoadingOrders)return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"subtitle has-text-centered"},"No orders found. Visit our menu for delicious pizzas!"));var t=this.state.orders.map((function(t){return r.a.createElement("div",{className:"box",key:t.id},r.a.createElement("div",null,r.a.createElement("b",null,"Order Id:")," ",t.id," | ",r.a.createElement("b",null,"Date:")," ",t.created_at," | ",r.a.createElement("b",null,"Items:")," ",t.suborders.length," |",r.a.createElement("b",null," Cost: ")," ",O({price:t.cost+t.delivery_fee,currency:e.props.currency})),r.a.createElement("div",null,t.suborders.map((function(e){return r.a.createElement("div",{className:"is-inline-block box",style:{margin:5}},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:e.pizza.image_url,alt:e.pizza.name})),e.pizza.name)}))))}));return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},t))}}]),t}(r.a.Component),q=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],currency:localStorage.getItem("currency")||"usd",loggedInUser:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loginUser()}},{key:"loginUser",value:function(){var e=this;h({url:"/auth",method:"GET",handleSuccess:function(t){e.setState({loggedInUser:t})},handleError:function(e){}})}},{key:"currencySelect",value:function(e){localStorage.setItem("currency",e),this.setState({currency:e})}},{key:"addToCart",value:function(e){var t=e.pizza;t.quantity=1,this.setState({cart:[].concat(Object(i.a)(this.state.cart),[t])}),localStorage.setItem("cart",JSON.stringify([].concat(Object(i.a)(this.state.cart),[t])))}},{key:"removeFromCart",value:function(e){var t=e.id,a=this.state.cart.filter((function(e){return e.id!==t}));this.setState({cart:a}),this.state.cart.length?localStorage.setItem("cart",JSON.stringify(a)):localStorage.removeItem("cart")}},{key:"updateQuantity",value:function(e){var t=e.id,a=e.quantity,n=this.state.cart.map((function(e){return e.id===t&&(e.quantity=a),e}));this.setState({cart:n}),localStorage.setItem("cart",JSON.stringify(n))}},{key:"emptyCart",value:function(){localStorage.removeItem("cart"),this.setState({cart:[]})}},{key:"logOutUser",value:function(){h({url:"/logout",method:"POST",handleSuccess:function(e){window.location.reload()},handleError:function(e){window.location.reload()}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(x,{cartCount:this.state.cart.length,onCurrencySelect:function(t){return e.currencySelect(t)},currency:this.state.currency,loggedInUser:this.state.loggedInUser,onLogOut:function(){return e.logOutUser()}}),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/"},r.a.createElement(S,{currency:this.state.currency,cart:this.state.cart,onAddToCart:function(t){return e.addToCart({pizza:t})},onUpdateQuantity:function(t,a){return e.updateQuantity({id:t,quantity:a})},onRemoveFromCart:function(t){return e.removeFromCart({id:t})}})),r.a.createElement(E.b,{path:"/cart"},r.a.createElement(C,{cart:this.state.cart,currency:this.state.currency,onUpdateQuantity:function(t,a){return e.updateQuantity({id:t,quantity:a})},onRemoveFromCart:function(t){return e.removeFromCart({id:t})}})),r.a.createElement(E.b,{path:"/address"},r.a.createElement(k,{cart:this.state.cart,onEmptyCart:function(){return e.emptyCart()},loggedInUser:this.state.loggedInUser})),r.a.createElement(E.b,{path:"/thank-you"},r.a.createElement(w,null)),r.a.createElement(E.b,{path:"/login"},r.a.createElement(I,{onLogin:function(){return e.loginUser()}})),r.a.createElement(E.b,{path:"/register"},r.a.createElement(_,null)),r.a.createElement(E.b,{path:"/orders"},r.a.createElement(T,{currency:this.state.currency}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"\xa9 Super Pizzas. Developed for Innoscripta."))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.80977f06.chunk.js.map
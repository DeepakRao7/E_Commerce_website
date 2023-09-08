// header js code for use in every page 
header.innerHTML ='<div class="container-fluid text-center " id="fixed-nav-bar">'+
'<div class="row navbar-rows" id="nav-barfistpart">'+
'<div class="col-12 col-lg-3 col-md-3 col-sm-3 logo-site">'+
'<a class="navbar-brand" href="index.html">'+
      '<img class="logo-img" src="logo.jpg" alt="logo">'+
'</a>'+
'</div>'+
'<div class="col-12 col-lg-6 col-md-6 col-sm-6">'+
'<div class="input-group rounded">'+
'<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />'+
'<button class="search"><i class="fas fa-search"></i></button>'+
'</div>'+
'</div>'+
'<div class="col-12 col-lg-3 col-md-3 col-sm-3" id="cart-login">'+
'<a class="nav-item" id="login-btn" aria-current="page" href="loginpage.html">'+
'<button type="button" class="btn btn-outline"><i class="fa-solid fa-user"></i>Login</button>'+
'</a>'+
'<a class="nav-item" id="cart" href="cart.html"><i class="fa-solid fa-cart-shopping fa-lg"></i></a>'+
'</div>'+
'</div>'+
'<!-- creating a nav bar which contain all the page link in short-cut -->'+
'<div class="row navbar-rows" id="fixed-nav">'+
'<ul class="nav justify-content-center">'+
'<li class="nav-item">'+
'<a class="nav-link" aria-current="page" href="index.html">Home</a>'+
'</li>'+
'<!-- Drop down for mens-->'+
'<li class="nav-item dropdown">'+
'<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Mens</a>'+
'<ul class="dropdown-menu">'+
'<li><a class="dropdown-item"href="allproductsmens.html">All productos</a></li>'+
      '<li><a class="dropdown-item" href="hoodies.html">Hoodies</a></li>'+
      '<li><a class="dropdown-item" href="pantsmen.html">Pants</a></li>'+
      '<li><a class="dropdown-item" href="shirts.html">Shirts</a></li>'+
    '</ul>'+
  '</li>'+
  '<!--Drop-down for womens-->'+
  '<li class="nav-item dropdown">'+
    '<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Womens</a>'+
    '<ul class="dropdown-menu">'+
      '<li><a class="dropdown-item" href="All-productswomen.html">All productos</a></li>'+
      '<li><a class="dropdown-item" href="dresses.html">Dresses</a></li>'+
      '<li><a class="dropdown-item" href="Pantswomen.html">Pants</a></li>'+
      '<li><a class="dropdown-item" href="Skirts.html">Skirts</a></li>'+
    '</ul>'+
  '</li>'+
  '<!--kids section of nav bar -->'+
  '<li class="nav-item">'+
    '<a class="nav-link" aria-current="page" href="kids.html">Kids</a>'+
  '</li>'+
  '<li class="nav-item">'+
'<a class="nav-link" aria-current="page" href="Contact.html">Contact</a>'+
'</li>'+
'</ul>'+
'</div>'+
'</div>';


//footer js code 
footer.innerHTML='<footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary ">'+
'<div class="container text-center">'+
  '<div class="row">'+

    '<div class="col-12 col-lg-3 col-md-3 col-sm-6">'+
    '<h5> Women</h5>'+
    '<ul class="list-unstyled">'+
      '<li class=""><a href="dresses.html">Dresses</a></li>'+
      '<li class=""><a href="Pantswomen.html">Pants</a></li>'+
      '<li class=""><a href="Skirts.html">Skirts</a></li>'+
    '</ul>'+
  '</div>'+
  '<div class="col-12 col-lg-3 col-md-3 col-sm-6">'+
    '<h5>Men</h5>'+
    '<ul class="list-unstyled">'+
      '<li class=""><a href="shirts.html">Shirt</a></li>'+
     '<li class=""><a href="hoodies.html"> Hoodies</a></li>'+
      '<li class=""><a href="pantsmen.html">Pants</a></li>'+
    '</ul>'+
  '</div>'+
  '<div class="col-12 col-lg-3 col-md-3 col-sm-6">'+
    '<h5>Kids</h5>'+
      '<ul class="list-unstyled">'+
      '<li class=""><a href="kids.html">kids</a></li>'+
    '</ul>'+
    '</div>'+
    '<div class="col-12 col-lg-3 col-md-3 col-sm-6">'+
     '<h5>Link</h5>'+
      '<ul class="list-unstyled">'+
          '<li class=""><a href="index.html">Home</a></li>'+
         '<li class=""><a href="loginpage.html">Login</a></li>'+
         '<li class=""><a href="Contact.html">Contact</a></li>'+
      '</ul>'+
   '</div>'+
 '</div>'+
 '<!--Footer for copywriter-->'+
 '<div class="row copyright">'+
 '<p>copyright@E-Commerce 2023-24</p>'+
 '</div>'+
'</div>'+
'</footer>';
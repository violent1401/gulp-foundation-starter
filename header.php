<?php define('TEMPLATE_URI','.');?>

<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title></title>
    <link rel="shortcut icon" href="img/favicon.png">
    <link href="assets/css/foundation.min.css" rel="stylesheet">
    <link href="assets/css/foundation-ext.css" rel="stylesheet">
    <link href="assets/css/fonts.css" rel="stylesheet">
    <link href="assets/css/elements-style.css" rel="stylesheet">
    <link href="assets/css/owl.carousel.min.css" rel="stylesheet">    
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <div class="row">
        <div class="large-4 columns">
          <div class="logobox">
            <a href="#" class="logo"><img src="<?php echo TEMPLATE_URI; ?>/assets/img/logo.png" alt=""></a>
          </div>
        </div>
        <div class="large-8 columns">
          <a data-open="exampleModal1">Modal</a>
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li>
                <a href="#">One</a>
                <ul class="menu vertical">
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                </ul>
              </li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

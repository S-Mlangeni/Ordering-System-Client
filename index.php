<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drinks Ordering System</title>
    <script src="https://kit.fontawesome.com/381f1a30ca.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    
    
</head>
<body>
    <div class="main-wrapper">
        <div class="wrapper">
            <h1>Orders</h1>
            <i class="fas fa-spinner fa-spin fas-off"></i>
            <div id="orders"></div>
            <p>Place your order below.</p>
            <input type="text" id="name" placeholder="Enter your name"><br>
            <input type="text" id="drink" placeholder="Enter your favourite drink"><br>
            <button id="order-btn">Order</button>
        </div>
    </div>

    

    <!-- Scripts -->
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/main.js"></script>
</body>
</html>
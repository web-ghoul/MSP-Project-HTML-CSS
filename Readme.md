Team Roles : 
    1- Google Fonts (webGhoul's Task)
    2- Images and Fonts (Manar's Task) [https://fontawesome.com/]
    3- CSS Framework (Done)
    4- HTML Tags (https://www.w3schools.com/TAGS/default.asp)
    5- Responsive Sizes (1200px , 992px ,768px)
    6- JS and Plugins

Main Of Html Page :

    //Start
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!-- website Icon -->
                <link rel="icon" href="../images/logo/logo-1.png">
                <!-- Font // font-family: 'Oswald', sans-serif;-->
                <link rel="stylesheet" href="../css/fonts/oswald.css">
                <!-- Font // font-family: 'Great Vibes', cursive; -->
                <link rel="stylesheet" href="../css/fonts/great-vibes.css">
                <!-- Font // font-family: 'Mulish', sans-serif; -->
                <link rel="stylesheet" href="../css/fonts/mulish.css">
                <!-- Framework -->
                <link rel="stylesheet" href="../css/styles/framework.css">
                <!-- CSS File -->
                <link rel="stylesheet" href="../css/styles/home.css">
                <!-- Fontawesome -->
                <link rel="stylesheet" href="./fontawesome/css/all.css">
                <!-- Header File CSS -->
                <link rel="stylesheet" href="../css/styles/header.css">
                <!-- Footer File CSS -->
                <link rel="stylesheet" href="../css/styles/footer.css">
                <title>Home</title>
            </head>
            
            <body>
                <main>
                    <div class="container grid j-c-c a-i-c">
                        <!--Start Header-->
                        <header>
                            <div class="contain flex j-c-bet a-i-c">
                                <div class="logo flex j-c-s a-i-c">
                                    <a href="../index.html">
                                        <picture>
                                            <img src="../images//logo/logo.jpg" alt="">
                                        </picture>
                                    </a>
                                </div>
                                <ul class="lists flex j-c-c a-i-c">
                                    <li class="flex a-i-c j-c-c">
                                        <div class="cat flex j-c-c a-i-c">
                                            <a href="">Pizza</a>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                        </ul>
                                    </li>
                                    <li class="flex a-i-c j-c-c">
                                        <div class="cat flex j-c-c a-i-c">
                                            <a href="">Sandwich</a>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                        </ul>
                                    </li>
                                    <li class="flex a-i-c j-c-c">
                                        <div class="cat flex j-c-c a-i-c">
                                            <a href="">Chinese</a>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                        </ul>
                                    </li>
                                    <li class="flex a-i-c j-c-c">
                                        <div class="cat flex j-c-c a-i-c">
                                            <a href="">Italian</a>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                            <li>Burger</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="details flex j-c-e a-i-c">
                                    <div class="search flex j-c-c a-i-c">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <div class="profile flex j-c-c a-i-c">
                                        <i class="fa-regular fa-user"></i>
                                    </div>
                                    <div class="cart flex j-c-c a-i-c">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                                <div class="res flex j-c-bet a-i-c">
                                    <i id="listIcon" class="fa-solid fa-list"></i>
                                    <ul class="lists grid j-c-str a-i-c">
                                        <li class="grid a-i-c j-c-str">
                                            <div class="cat flex j-c-bet a-i-c">
                                                <a href="">Pizza</a>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>
                                            <ul class="list grid j-c-str a-i-c">
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                            </ul>
                                        </li>
                                        <li class="grid a-i-c j-c-str">
                                            <div class="cat flex j-c-bet a-i-c">
                                                <a href="">Sandwich</a>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>
                                            <ul class="list grid j-c-s a-i-c">
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                            </ul>
                                        </li>
                                        <li class="grid a-i-c j-c-str">
                                            <div class="cat flex j-c-bet a-i-c">
                                                <a href="">Chinese</a>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>
                                            <ul class="list grid j-c-s a-i-c">
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                            </ul>
                                        </li>
                                        <li class="grid a-i-c j-c-str">
                                            <div class="cat flex j-c-bet a-i-c">
                                                <a href="">Italian</a>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>
                                            <ul class="list grid j-c-s a-i-c">
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                                <li>Burger</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div class="details flex j-c-e a-i-c">
                                        <div class="search flex j-c-c a-i-c">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <div class="profile flex j-c-c a-i-c">
                                            <i class="fa-regular fa-user"></i>
                                        </div>
                                        <div class="cart flex j-c-c a-i-c">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <!--End Header-->

                        <!--Start Directory Section-->
                        <section class="directory">
                            <div class="contain flex a-i-c j-c-c t-a-c">
                                <span> <a href="../index.html">Home</a> / Log In To Your Account</span>
                            </div>
                        </section>
                        <!--End Directory Section-->

                        <section class="">
                            <div class="contain">
                                <!--Your Code Here-->
                            </div>
                        </section>

                        <!--Start Footer-->
                        <footer>
                            <div class="contain">
                                <picture>
                                    <img src="../images/main/vegetables.png" alt="">
                                </picture>
                                <div class="sign-up grid j-c-c a-i-c">
                                    <div class="text grid j-c-s a-i-c">
                                        <h3 class="flex j-c-s a-i-c">
                                            <i class="fa-regular fa-envelope"></i>
                                            <span class="t-a-s">SIGN UP FOR NEWSLETTER</span>
                                        </h3>
                                        <p class="t-a-s">Sign up with us and get latest deals, offers & updates about store.</p>
                                    </div>
                                    <form action="POST">
                                        <input type="email" placeholder="Your email address">
                                        <input type="submit" value="sign up">
                                    </form>
                                </div>
                                <article class="grid j-c-c a-i-s">
                                    <div class="info grid j-c-s a-i-c">
                                        <div class="title">PRODUCTS</div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>Terms and conditions of use</li>
                                            <li>About us</li>
                                            <li>Secure payment</li>
                                            <li>Legal Notice</li>
                                            <li>Contact us</li>
                                        </ul>
                                    </div>
                                    <div class="info grid j-c-s a-i-c">
                                        <div class="title">SERVICES</div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>About us</li>
                                            <li>Secure payment</li>
                                            <li>Prices drop</li>
                                            <li>New products</li>
                                            <li>Contact us</li>
                                        </ul>
                                    </div>
                                    <div class="info grid j-c-s a-i-c">
                                        <div class="title">YOUR ACCOUNT</div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li>Personal info</li>
                                            <li>Orders</li>
                                            <li>Credit slips</li>
                                            <li>Addresses</li>
                                            <li>Vouchers</li>
                                        </ul>
                                    </div>
                                    <div class="info grid j-c-s a-i-c">
                                        <div class="title">STORE INFORMATION</div>
                                        <ul class="list grid j-c-s a-i-c">
                                            <li class="flex j-c-s a-i-c">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <span>Demo Store - United States</span>
                                            </li>
                                            <li class="flex j-c-s a-i-c">
                                                <i class="fa-solid fa-phone"></i>
                                                <span>+91 0123456789</span>
                                            </li>
                                            <li class="flex j-c-s a-i-c">
                                                <i class="fa-regular fa-square-caret-up"></i>
                                                <span>0123456789</span>
                                            </li>
                                            <li class="flex j-c-s a-i-c">
                                                <i class="fa-solid fa-envelope"></i>
                                                <span>demo@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                                <div class="foot grid j-c-c a-i-c">
                                    <picture>
                                        <img src="../images/footer/cms-bg-pattern.png" alt="">
                                    </picture>
                                    <span class="t-a-c flex j-c-c a-i-c">© 2023 - Ecommerce software by PrestaShop™</span>
                                    <div class="imgs flex j-c-c a-i-c">
                                        <picture>
                                            <img src="../images//footer//payment-paypal.png" alt="">
                                        </picture>
                                        <picture>
                                            <img src="../images/footer/payment-visa.png" alt="">
                                        </picture>
                                        <picture>
                                            <img src="../images//footer/payment-mastercard.png" alt="">
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        <!--End Footer-->
                    </div>
                </main>

                <!-- Start Sticky-to-top -->
                <div id="sticky" class="sticky-to-top hide flex j-c-c a-i-c">
                    <i class="fa-solid fa-angle-up"></i>
                </div>
                <!-- End Sticky-to-top -->

                <!--Scripts-->
                <!--Header Script-->
                <script src="../js/header.js"></script>

                <!--Footer Script-->
                <script src="../js/footer.js"></script>

                <!--Sticky-to-top Script-->
                <script src="../js/sticky.js"></script>
            </body>
        </html>
    //End

Our Responsive Sizes :

    @media (max-width:1200px) {}

    @media (max-width:992px) {}

    @media (max-width:768px) {}

    @media (max-width:640px) {}

Our Fonts :
    font-family: 'Oswald', sans-serif;
    font-family: 'Great Vibes', cursive;

The Clone : [https://demo.templatemonster.com/demo/186430.html?_gl=1*15zh827*_ga*MTgxNTU0NTI5Ny4xNjc1NjE1MjU5*_ga_FTPYEGT5LY*MTY3NTY3Mzg2Mi4yLjEuMTY3NTY3NDY0OS4xMi4wLjA.&_ga=2.105485891.1773845460.1675615261-1815545297.1675615259]
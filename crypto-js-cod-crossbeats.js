<!DOCTYPE html>
<html lang="{{ locale }}" dir="{{ direction }}" class="{{ checkout_html_classes }}">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0">
    <meta name="referrer" content="origin">

    <title>{{ page_title }}</title>

    {{ content_for_header }}
    {{ checkout_stylesheets }}
    {{ checkout_scripts }}

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/aes.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-utf8.min.js"></script>

    
    <style type="text/css">
      #timer{
        text-align: center; 
        display: block;
      }
      #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        filter:alpha(opacity=70);
        -moz-opacity:0.7;
        -khtml-opacity: 0.7;
        opacity: 0.7;
        z-index: 100;
        display: none;
      }
      #headingTag{
        text-align:center;
        font-weight: 700;
        margin-top: 23px;
        font-size:23px;
      }
      .cod_popup a{
        border-radius: 50%;
        background: #faded3;
        padding: 7px 3px;
        text-decoration: none;
        float: right;
      }
      a.changeNumberLink {
        background-color: transparent;
      }
      .popup{
        width: 100%;
        margin: 0 auto;
        display: none;
        position: fixed;
        z-index: 101;
        height: 100%;
        background: #00000091;
      }
      .cod_popup{
        min-width: 500px;
        width: 500px;
        min-height: 150px;
        margin: 140px auto;
        background: #fff;
        position: relative;
        z-index: 103;
        padding: 15px 35px;

        box-shadow: 0 2px 5px #000;
      }
      .cod_popup p{
        text-align: center;
        clear: both;
        color: #555555;
        /* text-align: justify; */
        font-size: 14px;
        font-family: sans-serif;
        margin-bottom: 24px;
        margin-top:14px;
      }
      .cod_popup p a{
        color: #d91900;
        font-weight: bold;
      }
      .cod_popup input{
        border: 1px solid #c9c9ca;
        width: 360px;
        height: 24px;
        color: #b6b6b6;
        padding: 8px;
        margin: 0px auto;
        display: block;
      }
      .cod_popup .btn{
        cursor: pointer;
        display: block;
        margin:0px auto;
        background-color: #fe500c;
        background-clip: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px transparent solid;
        border-radius: 0px;
        color: white;
        font-weight: 500;
        padding: 0px;
        width: 230px;
        height: 42px;
        text-align: center;
      }
      .cod_popup .btn-warning{
        background-color: inherit;
        color: #fe500c;
        position: relative;
        right: 35px;
        margin-left: 0px;
        margin-top: -7px;
      }
      .cod_popup .x{
        float: right;
        height: 35px;
        left: 22px;
        position: relative;
        top: -25px;
        width: 34px;
      }
      .cod_popup .x:hover{
        cursor: pointer;
      }
      .close {
        position: absolute;
        right: 14px;
        top: 13px;
        width: 28px;
        height: 21px;
        opacity: 1;
      }
      .close:hover {
        opacity: 1;

      }
      .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #fe500c;
      }
      .close:before {
        transform: rotate(45deg);
      }
      .close:after {
        transform: rotate(-45deg);
      }
      .otp_badge{
        color: #fe500c;
        left: 62px;
        font-size: 12px;
        position: relative;
      }

      .offer_promotion_area {
        background-color: #fe500c;
        margin: auto;
        padding: 10px 5px;
      }
      .offer_promotion_area img {
        padding: 0 10px;
      }
      .offer_promotion_area p {
        width: 100%;
        color: #fff;
        display: inline-flex;
        vertical-align: middle;
      }
      .Order-Summary {
        font-family: 'Barlow', sans-serif;
        font-size: 24px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.3;
        letter-spacing: 1px;
        color: #373434;
        margin-bottom: 40px;
      }
      .checkout-accordian .accordion {
        background-color: transparent;
        cursor: pointer;
        padding: 10px 20px;
        width: 100%;
        border: 1px solid rgba(103, 103, 103, 0.3);
        border-radius: 4px;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
        font-family: 'Barlow', sans-serif;
        font-weight: bold;
        font-style: italic;
        font-stretch: normal;
        line-height: 1.17;
        letter-spacing: normal;
        color: #676767;
        margin-bottom: 10px;
      }
      .checkout-accordian .accordion.active{
        background-color: #fe500c;
        color: #fff;
        border: 1px solid #fe500c;
      }
      .checkout-accordian .accordion:after {
        content: url("{{ 'pencil-icon.png' | asset_url }}");
          font-weight: bold;
          float: right;
          margin-left: 5px;
          width: 20px;
          }
      .checkout-accordian .accordion.active+.panel {
        margin-bottom: 20px;
      }
      .checkout-accordian .accordion.active:after {
        content: url("https://cdn.shopify.com/s/files/1/0068/7610/2727/files/up-white_copy.png?4040");
      }
      .panel {
        background-color: transparent;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }

      .express_checkout_promotion {
        border-radius: 4px;
        border: solid 1px rgba(103, 103, 103, 0.3);
        display: inline-block;
        margin-bottom: 20px;
      }
      .express_checkout_promotion .left, .express_checkout_promotion .right {
        width: 40%;
        padding: 4%;
        display: inline-block;
        vertical-align: middle !important;
      }
      .express_checkout_promotion p {
        margin: 11px 0;

      }
      .express_checkout_promotion .left {
        font-size: 14px;
      }
      .express_checkout_promotion .right {
        text-align: center;
      }
      .express_checkout_promotion img {
        max-width: 158px;
        margin: 5px 0;
        width: 100%;
      }
      .step__footer__previous-link {
        margin: 15px 0;
      }
      @media only screen and (min-width: 1000px) {
        .wrap {
          padding: 0;
          width: 100%;
          max-width: 100%;
        }
        .main_background {
          background-color: #fff5f1;
        }
        .main {
          padding: 20px 20px 100px 100px !important;
          width: 40%;
          margin: 0 auto;
          background: #fff;
        }
        .sidebar {
          padding: 20px 100px 100px 50px !important;
          width: 42%;
          margin: 0 auto;
          background-color: #fff5f1;
        }
        .Order-Summary {
          display: block;
        }
      }
      .page-width {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
      } 
      .ordersummrysection {
        background-color: rgba(239,239,239,0.34);

      }
      .rightnav {
        display: inline-block;
        vertical-align: middle;
        width: 84%;
        text-align: right;
      }
      .leftlogo {
        width: 15%;
        display: inline-block;
        vertical-align: middle;
      }
      ul.navul li {
        list-style: none;
        display: inline-block;
        vertical-align: middle;
        margin-left: 20px;
      }
      ul.navul li a {
        font-family: 'Barlow', sans-serif;
        font-size: 12px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 1px;
        color: #373434;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
      }
      header.orderheader {
        padding: 15px 0;
      }
      @media screen and (max-width: 480px){
        .cod_popup{
          min-width:300px;
          width:300px;
          margin: 50px auto;
        }
        .cod_popup input {
          width: 275px;
        }
        .otp_badge {
          left: 5px;
        }
        a.changeNumberLink{
          float: inherit;
          text-align: center;
          display: block;
        }
        .cod_popup .btn-warning{
          right:0px;
          margin-left:40px;
        }
        .express_checkout_promotion .left {

          width: 100%;
        }
        .right img:last-child {
          display: none;
        }
        a.logo.logo--left {
          text-align: center;
        }
        .express_checkout_promotion p {
          font-size: 12px;
        }
        .policy-list__item:last-child {
          margin-right: 0;
        }
        .policy-list__item {
          font-size: 10px;
          margin-right: 9px;
        }
      }
    </style>
  
  {% include 'shogun-head' %}
</head>

  <body>

    {{ skip_to_content_link }}

    <div class="banner" data-header>
      <div class="wrap">
        {{ content_for_logo }}
      </div>
    </div>

    {{ order_summary_toggle }}

    <div class="content" data-content>
      <div class="wrap main_background">
        <div class="main" role="main">
          <div class="main__header">
            {{ content_for_logo }}
            {{ breadcrumb }}
            {{ alternative_payment_methods }}
          </div>
          <div class="main__content">

            {% comment %}
            <div class="express_checkout_promotion">
              <div class="left">
                <h3>EXPRESS CHECKOUT</h3>
                <p>Now checkout with your favourite products much faster and more securely!</p>
                {% if customer == blank %}
                <p>Already have an account with us? {{ 'customer.register.sign_in_html' | t | customer_login_link }}</p>
                {% endif %}
              </div>
              <div class="right">
                {{ "paypal-button.png" | asset_url | img_tag }}
                {%comment%}{{ "amazon-pay.png" | asset_url | img_tag }}{%endcomment%}
                <img src="{{ "amazon-pay.png" | asset_url }}" style="opacity:0;">
              </div>
            </div>
            {% endcomment %}

            <div class="checkout-accordian">

              <div class="panel active">
                {{ content_for_layout }}
              </div>

            </div>

            <div class="thank-you-page">

            </div>

          </div>
          <div class="main__footer" style="display: nones;">
            {{ content_for_footer }}
          </div>


        </div>
        <div class="sidebar" role="complementary">
          <div class="sidebar__header">
            {{ content_for_logo }}
          </div>
          <div class="sidebar__content">
            <div class="Order-Summary">Order Summary</div>
            {{ content_for_order_summary }}
          </div>
        </div>
      </div>
    </div>

    {{ tracking_code }}

    <div class='popup'>
      <div class='cod_popup'>
        <a href='#' class='close'></a>
        <h1 id= "headingTag">Cash On Delivery Verification</h1>
        <p>A <b>verification code</b> has been sent to <b>{{checkout.shipping_address.phone | split: ' ' | join: ''}}</b> via SMS, please enter the code below to confirm the order.
        </p>
        <input type="" class="form-control" id="userInputOtpTextfield" placeholder="Enter Verification Code"/>
        <span class="otp_badge" id="otpWarning"></span>
        <br/>

        <button type="button" class="btn btn-primary" id= "confirmOtp">Verify OTP</button><br>
        <span id="timer"></span>
        <a href="/checkout?step=contact_information" class="changeNumberLink" >Change Number ?</a>
        <button type="button" class="btn btn-warning" id="resendButton">Resend OTP</button>

      </div>
    </div>

  </body>

</html>

<script src="{{ 'jquery.min.js' | asset_url }}"></script>
<script type="text/javascript">

  $(document).ready(function(){

    console.log(Shopify.Checkout.step);


    $(".field__input-btn[data-trekkie-id='apply_discount_button'], .tag__button").on('click', function(e){
      e.preventDefault();
      $(this).parents('form').submit();
    });

    console.log(Shopify.Checkout.step);

    var accBtn1 = '<button class="accordion" data-step="contact_information">Step 1: Personal Details</button>';
    var accBtn2 = '<button class="accordion" data-step="shipping_method">Step 2: Shipping Method</button>';
    var accBtn3 = '<button class="accordion" data-step="payment_method">Step 3: Payment Method</button>';

    if(Shopify.Checkout.step == "contact_information"){
      $(".checkout-accordian").prepend(accBtn1).append(accBtn2).append(accBtn3);
    }else if(Shopify.Checkout.step == "shipping_method"){
      $(".checkout-accordian").prepend(accBtn2).prepend(accBtn1).append(accBtn3);
    }else if(Shopify.Checkout.step == "payment_method"){
      $(".checkout-accordian").prepend(accBtn3).prepend(accBtn2).prepend(accBtn1);
    }


    $(".thank-you-page").hide();

    if(typeof Shopify.Checkout.step === "undefined" || Shopify.Checkout.step == "thank_you"){
      var thankYouPageContent = $(".checkout-accordian .panel").html();
      var sidebar = $(".sidebar").html();
      $("body").html('<link href="https://fonts.googleapis.com/css?family=Barlow:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet"> <div class="ordersummrysection"> <header class="orderheader"> <div class="page-width"> <div class="leftlogo"> <img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/group-26.png?v=1563614558" > </div> <div class="rightnav"> <ul class="navul"> <li><a href="/collections/all">Our products</a></li> <li><a href="/collections/all">Shortlist</a></li> <li><a href="/collections/all">Help & support</a></li> <li><a href="/collections/all">Sound Byte</a></li> <li><a href="/search"><img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/search.png?17220"> </a></li> <li><a href="/cart"><img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/shop.png?17220"></a></li> <li><a href="/account"><img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/user-line.png?17220"></a></li> </ul> </div> </div> </header> <div class="Mask"> <div class="rightsecton"> <img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/tick.png?17221"> <p class="Your-order-has-been">Your order has been successfully placed</p> <h4 class="Thank-you-for-shoppi">Thank you for shopping with us!</h4> <div class="Rectangle"> <a href="https://crossbeats-development-store.myshopify.com/" >Continue Shopping</a> </div> </div> <div class="leftsecton"> <div class="inerleft"> <img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/group-6.png?17222"> <p class="Paragraph-Copy-8">As a first time customer you have availed ₹150/- off on your next purchase!</p> <div class="View-offers"> <a href="/" >View offers</a> </div> </div> </div> </div> <div class="order_details_section"><div class="page-width"><div class="order_detail_sidebar_content">'+sidebar+'</div>'+thankYouPageContent+'</div> </div> <div class="fooetersection"> <footer> <div class="page-width"> <div class="fooerleft"> <h2 class="wireframe">We’d love to hear from you.</h2> <p class="new-wireframe">If you have any concerns or question feel free to reach out to us.</p> </div> <div class="rightfooter"> <div class="setp1se"> <img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/address_2x_310617b4-7ddf-4c56-b805-d6ba205bfcbe_60x60.png?v=1563174411"> <p><a href="https://www.google.com/maps/place/385+Noah+Pl+%23878,+McDonough,+GA+30252,+USA/@33.494452,-84.116158,17z/data=!3m1!4b1!4m5!3m4!1s0x88f45010d2f95313:0xdadd8fdc5ead98a9!8m2!3d33.494452!4d-84.1139693" target="_blank">385 Noah Place Suite 878 </a></p> </div> <div class="setp1se"> <img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/phone_2x_a0a34834-8d8a-4c5b-af8c-e3d00d8cf790_60x60.png?v=1563174462"> <p><a href="tel:877-255-7945" target="_blank">877-255-7945 </a></p> </div> <div class="setp1se"> <img src="https://cdn.shopify.com/s/files/1/0068/7610/2727/files/mail_2x_ec4e05c0-7785-48eb-aeca-b9fc14aeeaca_60x60.png?v=1563174499"> <p><a href="mailto:Info@form.com" >Info@form.com </a></p> </div> </div> </div> </footer> </div> <style type="text/css"> .page-width { position: relative; max-width: 1200px; margin: 0 auto; padding: 0 30px; } .order_details_section { display: inline-block; width: 100%; margin: 0 0 40px 0; } .order_details_section .order_detail_sidebar_content, .order_details_section .step, .order_details_section .section { width: 40%; float: left; padding: 20px 5%; } .order_details_section .step__footer { display: block; width: 90%; margin: 0; padding: 0 5%; float: left;} .ordersummrysection { background-color: rgba(239,239,239,0.34); top: 0; width: 100%; } .rightnav { display: inline-block; vertical-align: middle; width: 84%; text-align: right; } .leftlogo { width: 15%; display: inline-block; vertical-align: middle; } ul.navul li { list-style: none; display: inline-block; vertical-align: middle; margin-left: 20px; } ul.navul li a { font-family: "Barlow", sans-serif; font-size: 12px; font-weight: 900; font-style: normal; font-stretch: normal; line-height: normal; letter-spacing: 1px; color: #373434; text-align: center; text-decoration: none; text-transform: uppercase; } header.orderheader { padding: 15px 0; } .Your-order-has-been { font-family: "Roboto", sans-serif; font-size: 16.4px; font-weight: 500; font-style: normal; font-stretch: normal; line-height: normal; letter-spacing: 0.14px; text-align: center; color: #ffffff; } .Thank-you-for-shoppi { font-family: "Barlow", sans-serif; font-size: 21.1px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: normal; letter-spacing: normal; text-align: center; color: #ffffff; margin-bottom: 40px; } .Mask { opacity: 0.95; background-image: linear-gradient(106deg, #d16e20, #d82323); padding: 5%; } .Rectangle a { font-family: "Barlow", sans-serif; font-size: 16.2px; font-weight: 600; font-style: normal; font-stretch: normal; line-height: 0.89; letter-spacing: normal; text-align: center; color: #fe500c; background: #fff; padding: 10px 25px; text-decoration: none; } .Paragraph-Copy-8 { font-family: "Roboto", sans-serif; font-size: 12px; font-weight: 500; font-style: normal; font-stretch: normal; line-height: normal; letter-spacing: normal; text-align: center; color: #ffffff; margin-bottom: 40px; } .View-offers a{ font-family: "Barlow", sans-serif; font-size: 16.2px; font-weight: 600; font-style: normal; font-stretch: normal; line-height: 0.89; letter-spacing: normal; text-align: center; color: #fe500c; background: #fff; padding: 10px 25px; text-decoration: none; } .leftsecton, .rightsecton { display: inline-block; width: 49%; text-align: center; vertical-align: middle; } .inerleft { width: 31%; margin: 0 auto; border: 1px dashed #fff; padding: 7% 10px; } .wireframe { font-family: "Roboto", sans-serif; font-size: 26px; font-weight: normal; font-style: normal; font-stretch: normal; line-height: 1.15; letter-spacing: normal; color: #ffffff !important; margin-bottom: 10px; } .new-wireframe{ font-family: "Roboto", sans-serif; font-size: 16px; font-weight: normal; font-style: normal; font-stretch: normal; line-height: 1.25; letter-spacing: normal; color: #ffffff; } .fooetersection { background-image: linear-gradient(98deg, #d16e20, #d82323); padding: 40px 0; clear: both; width: 100%; z-index: 9999999; } .rightfooter, .fooerleft { display: inline-block; vertical-align: middle; } .fooerleft { width: 30%; } .rightfooter { width: 69%; text-align: right; } .setp1se { display: inline-block; width: 25%; text-align: center; } .setp1se a { font-family: "Roboto", sans-serif; font-size: 16px; font-weight: normal; font-style: normal; font-stretch: normal; line-height: 1.25; letter-spacing: normal; color: #ffffff; text-decoration: none; } .page--no-banner .main, .page--no-banner .sidebar { height: 550px !important; } .thank-you__additional-content { margin-bottom: 61%; } .sidebar { background-color: #fff!important; margin-top: 32% !important; } .content-box:first-of-type { display: none!important; } .main { margin-left: -100px !important; } .main__header { display: none!important; } h1.visually-hidden { display: none!important; } .section__header.os-header { display: none; } .main_background { background-color: #ffffff!important; } .section {  } .step__footer { margin-left: 100px; } .order_details_section .step .section { width: 100%; } @media only screen and (max-width: 1440px) { .fooetersection { } .sidebar { margin-top: 38% !important; } .thank-you__additional-content { margin-bottom: 64%; } .section {  } } @media only screen and (max-width: 1319px) { .Mask { padding: 1%; } .inerleft { width: 46%; margin: 0 auto; border: 1px dashed #fff; padding: 3% 0px; } .Thank-you-for-shoppi { margin-bottom: 15px; } .Rectangle a { font-size: 14.2px; } .fooetersection {  } } @media only screen and (max-width: 1023px) { .sidebar__header{display: block; !important}.js .order-summary--is-collapsed { height: auto !important; visibility: visible !important; } .express_checkout_promotion{ display: none;} .ordersummrysection {  } .fooetersection { bottom: 0;  } .sidebar { margin-top: 0% !important; } .thank-you__additional-content { margin-bottom: 0; } .page--no-banner .main, .page--no-banner .sidebar { height: auto !important; } .content-box:first-of-type { display: block!important; } .section {  } .step__footer { margin-left: 100px; } .page-width { position: relative; max-width: 100%; margin: 0 auto; } } @media only screen and (max-width: 600px) { .leftsecton, .rightsecton { display: block; width: 100%; text-align: center; vertical-align: middle; padding: 30px 0; } .order_details_section .order_detail_sidebar_content, .order_details_section .step, .order_details_section .section { width: 100%; float: left; padding: 20px 0; } .fooerleft { width: 100%; text-align: center; } .rightfooter { width: 100%; text-align: center; } .setp1se { display: inline-block; width: 100%; text-align: center; margin: 15px 0; } header.orderheader { display: none; } .inerleft { width: 85%;  padding: 5% 0px; } .Thank-you-for-shoppi { margin-bottom: 25px; }} </style>');
    }

    console.log(Shopify.Checkout.step);

    var selected_step = '';

    $(".accordion").each(function(){
      var step = $(this).attr("data-step");
      if(step == Shopify.Checkout.step){
        selected_step = Shopify.Checkout.step;
        $(this).addClass(selected_step);
      }else{
        $(this).addClass("other_steps");
      }
    });

    if(typeof Shopify.Checkout.step !== "undefined"){
      $("."+selected_step).click(function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          // panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.maxHeight = "none";
        } 
      });
    }

    $("."+Shopify.Checkout.step).trigger("click");

    //     var current_page_url = window.location.href.split('?')[0];
    var current_page_url = [location.protocol, '//', location.host, location.pathname].join('');

    $(".other_steps").click(function(e){
      e.preventDefault();
      var step_to_move = $(this).attr("data-step");
      window.location = current_page_url + '?step=' + step_to_move;
    });

    //$(".section--payment-method .section__content .content-box legend").after('<div class="offer_promotion_area radio-wrapper content-box__row"><p>{{ "noun-timer.png" | asset_url | img_tag }}OFFER: Avail extra 5% off on online payments</p></div>');

    if($(".section--payment-method .section__content .content-box legend").length > 0){
      $(".section--payment-method .section__content .content-box legend").after('<div class=" radio-wrapper content-box__row"><p style="line-height: 0.8em;"><img src="{{ "checkoutimagepay.png" | asset_url }}" style="width:100%; margin:0 auto;border-radius: 4px;"></p></div>');
                                                                                } 
                                                                                else{
                                                                                if($(".section--payment-method .section__content div[data-payment-subform=required]").length > 0){
        $(".section--payment-method .section__content div[data-payment-subform=required]").before('<div class=""><p style="line-height: 0.8em;"><img src="{{ "checkoutimagepay.png" | asset_url }}" style="width:100%; margin:0 auto;border-radius: 4px;"></p></div>');                                                                            
                                                                                                  }

                                                                                                  }

                                                                                                  });

</script>

<style>

</style>

<script type="text/javascript">

  if(ShopifyAnalytics.meta.page.path == "/checkout/contact_information") {
    var el = document.getElementById("checkout_shipping_address_phone");
    el.addEventListener('keyup', function() {
      el.setAttribute("onKeyPress","if(this.value.split(' ').join('').length==10) return false;")

      let testing = /^-?\d+\.?\d*$/
      if(el.value.match(testing)){
        console.log('match')
      }else if(el.value.includes(' ')) {
        console.log('leave')
      }else {
        el.value = ''
      }
      //      if(el.value)
    })
  }

  $( document ).ready(function() {
    if ($(".section--payment-method .content-box__row[data-gateway-group='manual'] input").is(':checked')){
      setTimeout(() => {
                 codPopUp()
    },3000)
  }     
                      });

  let mobileNumber;
  let generatedOtp, userEnteredOtp,timerSetUp;
  let shop = "{{ shop.domain }}"
  let sessionActivated = false;
  let completeOrderParentTag = document.getElementsByClassName('step__footer__continue-btn')
  let otpWarningHandle = document.getElementById('otpWarning')
  let userInputOtpTextfieldHandle = document.getElementById('userInputOtpTextfield')
  let confirmOtpHandle = document.getElementById('confirmOtp')
  let timerHandle = document.getElementById('timer')
  let resendButtonHandle = document.getElementById('resendButton')


  userInputOtpTextfieldHandle.addEventListener('change', function(e) {
    userEnteredOtp = e.target.value
  })


  resendButtonHandle.addEventListener('click', function() {
    otpWarningHandle.innerText = ''
    userInputOtpTextfieldHandle.value = ''
    axios.post('https://189be66a.ngrok.io/otp/resend_otp',{mobileNumber,shop}).then(res => {
      if(res.status == 200) {
        var encryptedOtp = res.data.otp;
        var bytes = CryptoJS.AES.decrypt(encryptedOtp, 'klocmasterkey');
        var originalOtp = bytes.toString(CryptoJS.enc.Utf8)
        generatedOtp = Number(originalOtp)
        console.log('otp', generatedOtp)
      }else {
        otpWarningHandle.innerText = 'Something went wrong Please try later'
      }
    }).catch(err => {
      if(!err.response) {
        otpWarningHandle.innerText = 'Internal Server Error'
      } else if(err.response.status == 503) {
        otpWarningHandle.innerText = 'Error from service provider'
      } else if(err.response.status == 400) {
        otpWarningHandle.innerText = 'Bad Request'
      } else  {
        otpWarningHandle.innerText = 'Internal Server Error'
      }
    })
    resendButtonHandle.setAttribute('style',"visibility:hidden")
    timerHandle.setAttribute('style', "visibility:none")
    document.getElementById('timer').innerHTML =
      01 + ":" + 00;
    setTimeout(startTimer, 1000);
  })


  confirmOtpHandle.addEventListener('click', function() {
    let otp = userEnteredOtp
    if(userEnteredOtp) {
      console.log(userEnteredOtp)
      axios.post('https://189be66a.ngrok.io/otp/verify_otp',{otp,mobileNumber,shop}).then(resp => {
        if(resp.data.isVerifiedOtp ) {
          sessionActivated = true;
          $('.popup').hide();
          completeOrderParentTag[0].removeAttribute('disabled')
          completeOrderParentTag[0].style.cursor = null;
        } else {
          otpWarningHandle.innerText = 'Invalid OTP'      	
        }
      }).catch(err => {
        if(!err.response) {
          otpWarningHandle.innerText = 'Internal Server Error'
        }else if(err.response.status == 500) {
          otpWarningHandle.innerText = 'Something went wrong'
        }else if(err.response.status == 404) {
          otpWarningHandle.innerText = 'Invalid OTP'
        }
      })
    } else {
      otpWarningHandle.innerText = 'Please Enter Otp'
    }
  })

  function codPopUp() {
    console.log('popup called')
    if( sessionActivated == false) {
      {% if {{checkout.shipping_address.phone | split: ' ' | join: '' }} %}

      mobileNumber = {{checkout.shipping_address.phone | split: ' ' | join: '' }}
        let mobileNumberToString = mobileNumber.toString()
        if(mobileNumberToString.length >=10) {
          if(mobileNumberToString.length>10) {
            let mobileNumberLength = mobileNumberToString.length -10
            console.log(mobileNumberLength,'lenght')
            mobileNumber = mobileNumberToString.slice(mobileNumberLength)
            console.log(mobileNumber)
          }
          clearTimeout(timerSetUp)
          otpWarningHandle.innerText = ''
          userInputOtpTextfieldHandle.value = ''
          completeOrderParentTag[0].setAttribute("disabled", true)
          completeOrderParentTag[0].style.cursor = "not-allowed";
          resendButtonHandle.setAttribute('style', "visibility:hidden")
          timerHandle.setAttribute('style',"visibility: none")
          setTimeout(startTimer, 1000);
          timerHandle.innerHTML =
            01 + ":" + 00;
          popupcod()
          axios.post('https://189be66a.ngrok.io/otp/generate_new_otp',{mobileNumber,shop}).then(res => {
            if(res.status == 200) {
              var encryptedOtp = res.data.otp;
              var bytes = CryptoJS.AES.decrypt(encryptedOtp, 'klocmasterkey');
              var originalOtp = bytes.toString(CryptoJS.enc.Utf8)
              generatedOtp = Number(originalOtp)
              console.log('otp', generatedOtp)
            }else {
              otpWarningHandle.innerText = 'Something went wrong Please try later'
            }
          }).catch(err => {
            otpWarningHandle.innerText = 'Something went wrong Please try later'
          })
        }else {
          completeOrderParentTag[0].setAttribute("disabled", true)
          completeOrderParentTag[0].style.cursor = "not-allowed";
          swal(`${mobileNumberToString} Not a valid mobile number `, "Please enter valid mobile number");

        }

      {% endif %}
    }
  }

  $(document).on("click",".section--payment-method .content-box__row[data-gateway-group='manual'] input",function(){
    setTimeout(() => {
               codPopUp()
  },3000)
  });


  $(document).on("click",".section--payment-method .content-box__row:first input", function(){
    completeOrderParentTag[0].removeAttribute('disabled')
    completeOrderParentTag[0].style.cursor = null;	
  });

  //   $(document).on('click','#checkout_payment_gateway_25575096391',function() {  		
  //     completeOrderParentTag[6].childNodes[1].removeAttribute('disabled')
  //     completeOrderParentTag[6].childNodes[1].style.cursor = null;
  //   }) 

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m == 0 && s == 0) {
      resendButtonHandle.setAttribute('style',"visibility: none")
      timerHandle.setAttribute('style',"visibility: hidden")
      clearTimeout(timerSetUp)
      return false
    }

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    timerSetUp = setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

  if(ShopifyAnalytics.meta.page.path == "/checkout/payment") {
    let data = {
      mobileNumber:{{checkout.shipping_address.phone | split: ' ' | join: '' }},
      shop

    }
    axios.post("https://189be66a.ngrok.io/otp/session_verify/",data).then(resData => {
      sessionActivated = resData.data.sessionValid
      console.log(sessionActivated)
    }).catch(err => {
      console.log(err)
    })
  }

</script>

<script type='text/javascript'>
  function popupcod(){
    $('.popup').show();
    //     var overlay = $('<div id="overlay"></div>');
    //     overlay.show();
    //     overlay.appendTo(document.body);
  }
  $('.x').click(function(){
    $('.popup').hide();
    //       $('#overlay').hide();
  });

  $('.close').click(function(){
    $('.popup').hide();
    //       $('#overlay').hide();
    clearTimeout(timerSetUp)
  });
</script>  

<!-- <script>
$(document).on("click","#checkout_payment_gateway_25839894599", function(){
alert('hi');
});
</script> -->

<!-- <script>
  // console.log(this);
  let allAddress = {};

  {% if customer.id %}
  let customerId = {{ customer.id }};
  {% else %}
  let customerId;
  {% endif %}

  let radioButtons = document.getElementsByName('address');
  let sameAsBilling = document.querySelectorAll('#checkout_different_billing_address_false')[0];

  let footerHandle = document.getElementsByClassName('step__footer');
  footerHandle[0].style.display = 'inline';

  let shippingAddressHandle = document.getElementsByClassName('section__header');
  for(let y = 0; y < shippingAddressHandle.length; y++) {
    if(ShopifyAnalytics.meta.page.path == "/checkout/contact_information") {
      shippingAddressHandle[1].setAttribute('id','ship');
    }
  }
  let shipHandle = document.getElementById('ship');

  if(shipHandle && customerId) {
    butnDiv1 = document.createElement('div');
    butnDiv1.setAttribute('class','addNewAddress');
    butnDiv1.style.marginTop = '8px';
    butn1 = document.createElement('button');
    butn1.setAttribute('id','newShippingAddress');
    butn1.innerText = 'Add New/Edit Address';
    butn1.style.backgroundColor = 'orange';
    butn1.style.padding = '8px 8px 8px 8px';
    butn1.style.borderRadius = '4px 0px 0px 4px';
    butn2 = document.createElement('button');
    butn2.innerText = 'Hide';
    butn2.setAttribute('id','hide');
    butn2.style.backgroundColor = 'pink';
    butn2.style.padding = '8px 8px 8px 8px';
    butn2.style.borderRadius = '0px 4px 4px 0px';
    butnDiv1.appendChild(butn1);
    butnDiv1.appendChild(butn2);
    shipHandle.appendChild(butnDiv1);
  }

  let billHandle;
  if(ShopifyAnalytics.meta.page.path == "/checkout/payment" && customerId) {
    let billingAddressHandle = document.getElementsByClassName('section__header');
    console.log(billingAddressHandle);
    billingAddressHandle[2].setAttribute('id','bill');
    billHandle = document.getElementById('bill');

    butnDiv2 = document.createElement('div');
    butnDiv2.setAttribute('class','addNewAddress');
    butnDiv2.style.marginTop = '8px';
    butn3 = document.createElement('button');
    butn3.setAttribute('id','newBillingAddress');
    butn3.innerText = 'Add New/Edit Address';
    butn3.style.backgroundColor = 'orange';
    butn3.style.padding = '8px 8px 8px 8px';
    butn3.style.borderRadius = '4px 0px 0px 4px';
    butn4 = document.createElement('button');
    butn4.innerText = 'Hide';
    butn4.setAttribute('id','hide');
    butn4.style.backgroundColor = 'pink';
    butn4.style.padding = '8px 8px 8px 8px';
    butn4.style.borderRadius = '0px 4px 4px 0px';
    butnDiv2.appendChild(butn3);
    butnDiv2.appendChild(butn4);
    billHandle.appendChild(butnDiv2);
  }

  let addShippingAddress = document.getElementById('checkout_shipping_address_id');  
  let shippingFirstName = document.getElementById('checkout_shipping_address_first_name');
  let shippingLastName = document.getElementById('checkout_shipping_address_last_name');
  let shippingAddress1 = document.getElementById('checkout_shipping_address_address1');
  let shippingAddress2 = document.getElementById('checkout_shipping_address_address2');
  let shippingCity = document.getElementById('checkout_shipping_address_city');
  let shippingCountry = document.getElementById('checkout_shipping_address_country');
  let shippingState = document.getElementById('checkout_shipping_address_province');
  let shippingZip = document.getElementById('checkout_shipping_address_zip');
  let shippingPhone = document.getElementById('checkout_shipping_address_phone');

  let addBillingAddress = document.querySelectorAll('#checkout_billing_address_id')[2];

  if(customerId && ShopifyAnalytics.meta.page.path == "/checkout/contact_information"){
    document.getElementsByClassName('section__title')[1].innerText = 'Select Shipping Address';
    document.getElementsByClassName('field__input-wrapper field__input-wrapper--select')[0].parentNode.style.display = 'none';

    if(addShippingAddress) {
      addShippingAddress.addEventListener('mouseover', function() {
        addShippingAddress.disabled = true;
      }, false);
    }
  }

  if(customerId && ShopifyAnalytics.meta.page.path == "/checkout/payment") {
    document.getElementsByClassName('section__title')[2].innerText = 'Select Billing Address';
    document.getElementsByClassName('field__input-wrapper field__input-wrapper--select')[0].parentNode.style.display = 'none';

    if(addBillingAddress) {
      addBillingAddress.addEventListener('mouseover', function() {
        addBillingAddress.disabled = true;
      }, false);
    }
  }

  let unselectAddress = document.getElementsByClassName('selectAddress');
  if(sameAsBilling) {
    sameAsBilling.addEventListener('click', function() {
      for(let c = 0; c < unselectAddress.length; c++) {
        let uncheckArray = unselectAddress[c].children;
        for(let d = 0; d < uncheckArray.length; d++) {
          if(uncheckArray[d].checked) {
            let uncheckElement = uncheckArray[d].parentNode;
            uncheckArray[d].checked = false;
            uncheckElement.style.border = '1px solid #ddd';
            uncheckElement.style.backgroundColor = '#fff';
          }
        }
      }
    }, false);
  }

  if(customerId && (ShopifyAnalytics.meta.page.path == "/checkout/contact_information" || ShopifyAnalytics.meta.page.path == "/checkout/payment")) {
    let formHandle = document.getElementsByClassName('section__content');
    formHandle[1].style.display = 'none';
    formHandle[1].style.marginBottom = '8px';
  }

  let addNewShippingAddressHandle = document.getElementById('newShippingAddress');
  if(addNewShippingAddressHandle) {
    addNewShippingAddressHandle.addEventListener('click', function(e) {
      e.preventDefault();

      for(let uh = 0; uh < radioButtons.length; uh++) {
        radioButtons[uh].checked = false;
        let unhighlightChecked = radioButtons[uh].parentNode;
        unhighlightChecked.style.border = '1px solid #ddd';
        unhighlightChecked.style.backgroundColor = '#fff';
      }

      let formHandle = document.getElementsByClassName('section__content');
      formHandle[1].style.display = '';

      let shippingFirstName = document.getElementById('checkout_shipping_address_first_name');
      let shippingLastName = document.getElementById('checkout_shipping_address_last_name');
      let shippingAddress1 = document.getElementById('checkout_shipping_address_address1');
      let shippingAddress2 = document.getElementById('checkout_shipping_address_address2');
      let shippingCity = document.getElementById('checkout_shipping_address_city');
      let shippingCountry = document.getElementById('checkout_shipping_address_country');
      let shippingState = document.getElementById('checkout_shipping_address_province');
      let shippingZip = document.getElementById('checkout_shipping_address_zip');
      let shippingPhone = document.getElementById('checkout_shipping_address_phone');

      shippingFirstName.value = '';
      shippingLastName.value = '';
      shippingAddress1.value = '';
      shippingAddress2.value = '';
      shippingCity.value = '';
      shippingCountry.value = '';
      shippingState.value = '';
      shippingZip.value = '';
      shippingPhone.value = '';

    }, false);
  }

  let addNewBillingAddressHandle = document.getElementById('newBillingAddress');
  if(addNewBillingAddressHandle) {
    addNewBillingAddressHandle.addEventListener('click', function(e) {
      e.preventDefault();

      for(let uh = 0; uh < radioButtons.length; uh++) {
        radioButtons[uh].checked = false;
        let unhighlightChecked = radioButtons[uh].parentNode;
        unhighlightChecked.style.border = '1px solid #ddd';
        unhighlightChecked.style.backgroundColor = '#fff';
      }

      let billingRadio = document.getElementsByClassName('radio__input');
      billingRadio[4].children[0].checked = true;

      let billing = document.querySelectorAll('#section--billing-address__different');
      billing[0].setAttribute('class','radio-group__row content-box__row content-box__row--secondary');

      let billingFirstName = document.querySelectorAll('#checkout_billing_address_first_name')[0];
      let billingLastName = document.querySelectorAll('#checkout_billing_address_last_name')[0];
      let billingAddress1 = document.querySelectorAll('#checkout_billing_address_address1')[0];
      let billingAddress2 = document.querySelectorAll('#checkout_billing_address_address2')[0];
      let billingCity = document.querySelectorAll('#checkout_billing_address_city')[0];
      let billingCountry = document.querySelectorAll('#checkout_billing_address_country')[0];
      let billingState = document.querySelectorAll('#checkout_billing_address_province')[0];
      let billingZip = document.querySelectorAll('#checkout_billing_address_zip')[0];
      let billingPhone = document.querySelectorAll('#checkout_billing_address_phone')[0];

      billingFirstName.value = '';
      billingLastName.value = '';
      billingAddress1.value = '';
      billingAddress2.value = '';
      billingCity.value = '';
      billingCountry.value = '';
      billingState.value = '';
      billingZip.value = '';
      billingPhone.value = '';

      billingFirstName.disabled = false;
      billingLastName.disabled = false;
      billingAddress1.disabled = false;
      billingAddress2.disabled = false;
      billingCity.disabled = false;
      billingZip.disabled = false;
      billingPhone.disabled = false;
      billingCountry.disabled = false;
      billingState.disabled = false;
    }, false);
  }

  let hideHandle = document.getElementById('hide');
  if(hideHandle) {
    hideHandle.addEventListener('click', function(e) {
      e.preventDefault();

      if(ShopifyAnalytics.meta.page.path == "/checkout/contact_information") {
        let formHandle = document.getElementsByClassName('section__content');
        formHandle[1].style.display = 'none';
      }

      if(ShopifyAnalytics.meta.page.path == "/checkout/payment") {
        let billing = document.querySelectorAll('#section--billing-address__different');
        billing[0].setAttribute('class','radio-group__row content-box__row content-box__row--secondary hidden');
      }
    }, false);
  }

  function getAddress() {
    for(let uh = 0; uh < radioButtons.length; uh++) {
      let unhighlightChecked = radioButtons[uh].parentNode;
      unhighlightChecked.style.border = '1px solid #ddd';
      unhighlightChecked.style.backgroundColor = '#fff';
    }

    for(let i = 0; i < radioButtons.length; i++) {

      if(radioButtons[i].checked) {

        let formHandle = document.getElementsByClassName('section__content');
        formHandle[1].style.display = '';

        let highlightChecked = radioButtons[i].parentNode;
        highlightChecked.style.border = '1px solid #ed3a33';
        highlightChecked.style.backgroundColor = '#fdf3ef';

        if(ShopifyAnalytics.meta.page.path == "/checkout/contact_information") {

          shippingFirstName.value = JSON.parse(radioButtons[i].value).firstName;
          let shippingFirstNameLabel = shippingFirstName.parentNode.parentNode;
          shippingFirstNameLabel.setAttribute('class','field field--required field--half field--show-floating-label');

          shippingLastName.value = JSON.parse(radioButtons[i].value).lastName;
          let shippingLastNameLabel = shippingLastName.parentNode.parentNode;
          shippingLastNameLabel.setAttribute('class','field field--required field--half field--show-floating-label');

          shippingAddress1.value = JSON.parse(radioButtons[i].value).address1;
          let shippingAddress1Label = shippingAddress1.parentNode.parentNode; 
          shippingAddress1Label.setAttribute('class','field field--required field--show-floating-label');

          shippingAddress2.value = JSON.parse(radioButtons[i].value).address2;
          let shippingAddress2Label = shippingAddress2.parentNode.parentNode;
          shippingAddress2Label.setAttribute('class','field field--optional field--show-floating-label');

          shippingCity.value = JSON.parse(radioButtons[i].value).city;
          let shippingCityLabel = shippingCity.parentNode.parentNode;
          shippingCityLabel.setAttribute('class','field field--required field--show-floating-label');

          shippingZip.value = JSON.parse(radioButtons[i].value).zip;
          let shippingZipLabel = shippingZip.parentNode.parentNode;
          shippingZipLabel.setAttribute('class','field field--required field--show-floating-label field--third');

          shippingPhone.value = JSON.parse(radioButtons[i].value).phone;
          let shippingPhoneLabel = shippingPhone.parentNode.parentNode;
          shippingPhoneLabel.setAttribute('class','field field--required field--show-floating-label');

          let country = JSON.parse(radioButtons[i].value).country;          
          for(let j = 0; j < shippingCountry.length; j++) {
            if(shippingCountry[j].value == country) {
              shippingCountry.value = shippingCountry[j].value;
            }
          }

          let shippingState = document.getElementById('checkout_shipping_address_province');
          let shippingStateValue = JSON.parse(radioButtons[i].value).provinceCode;
          for(let k = 0; k < shippingState.length; k++) {
            if(shippingState[k].value == shippingStateValue) {
              shippingState.value = shippingState[k].value;
            }
          }

        } else if(ShopifyAnalytics.meta.page.path == "/checkout/payment") {

          let highlightChecked = radioButtons[i].parentNode;
          highlightChecked.style.border = '1px solid #ed3a33';
          highlightChecked.style.backgroundColor = '#fdf3ef';

          let billingRadio = document.getElementsByClassName('radio__input');
          billingRadio[4].children[0].checked = true;

          let billing = document.querySelectorAll('#section--billing-address__different');
          billing[0].setAttribute('class','radio-group__row content-box__row content-box__row--secondary');

          let billingFirstName = document.querySelectorAll('#checkout_billing_address_first_name')[0];
          let billingLastName = document.querySelectorAll('#checkout_billing_address_last_name')[0];
          let billingAddress1 = document.querySelectorAll('#checkout_billing_address_address1')[0];
          let billingAddress2 = document.querySelectorAll('#checkout_billing_address_address2')[0];
          let billingCity = document.querySelectorAll('#checkout_billing_address_city')[0];
          let billingCountry = document.querySelectorAll('#checkout_billing_address_country')[0];
          let billingState = document.querySelectorAll('#checkout_billing_address_province')[0];
          let billingZip = document.querySelectorAll('#checkout_billing_address_zip')[0];
          let billingPhone = document.querySelectorAll('#checkout_billing_address_phone')[0];

          billingFirstName.value = JSON.parse(radioButtons[i].value).firstName;
          let billingFirstNameLabel = billingFirstName.parentNode.parentNode;
          billingFirstNameLabel.setAttribute('class','field field--required field--half field--show-floating-label');

          billingLastName.value = JSON.parse(radioButtons[i].value).lastName;
          let billingLastNameLabel = billingLastName.parentNode.parentNode;
          billingLastNameLabel.setAttribute('class','field field--required field--half field--show-floating-label');

          billingAddress1.value = JSON.parse(radioButtons[i].value).address1;
          let billingAddress1Label = billingAddress1.parentNode.parentNode;
          billingAddress1Label.setAttribute('class','field field--required field--show-floating-label');

          billingAddress2.value = JSON.parse(radioButtons[i].value).address2;
          let billingAddress2Label = billingAddress2.parentNode.parentNode;
          billingAddress2Label.setAttribute('class','field field--optional field--show-floating-label');

          billingCity.value = JSON.parse(radioButtons[i].value).city;
          let bilingCityLabel = billingCity.parentNode.parentNode;
          bilingCityLabel.setAttribute('class','field field--required field--show-floating-label');

          billingZip.value = JSON.parse(radioButtons[i].value).zip;
          let billingZipLabel = billingZip.parentNode.parentNode;
          billingZipLabel.setAttribute('class','field field--required field--third field--show-floating-label');

          billingPhone.value = JSON.parse(radioButtons[i].value).phone;
          let billingPhoneLabel = billingPhone.parentNode.parentNode;
          billingPhoneLabel.setAttribute('class','field field--required field--show-floating-label');

          let country = JSON.parse(radioButtons[i].value).country; 
          for(let m = 0; m < billingCountry.length; m++) {
            if(billingCountry[m].value == country) {
              billingCountry.value = billingCountry[m].value;
            }
          }

          let billingStateValue = JSON.parse(radioButtons[i].value).provinceCode;
          for(let n = 0; n < billingState.length; n++) {
            if(billingState[n].value == billingStateValue) {
              billingState.value = billingState[n].value;
            }
          }

          billingFirstName.disabled = false;
          billingLastName.disabled = false;
          billingAddress1.disabled = false;
          billingAddress2.disabled = false;
          billingCity.disabled = false;
          billingZip.disabled = false;
          billingPhone.disabled = false;
          billingCountry.disabled = false;
          billingState.disabled = false;

        }
      }
    }
  }

  function getAddresses() {
    // fetch(`https://96a6dcdd.ngrok.io/customers/${customerId}`)
    fetch(`https://shipping.crossbeats.in/customers/${customerId}`)
    .then(function(res) {
      if(res.status == '200') {
        return res.json();
      } else {
        let p = document.createElement('p');
        p.setAttribute('id','notfound');
        p.innerHTML = 'No Addresses Found!';

        if(ShopifyAnalytics.meta.page.path == "/checkout/contact_information") {
          shipHandle.appendChild(p);
        } else if(ShopifyAnalytics.meta.page.path == "/checkout/payment") {
          billHandle.appendChild(p); 
        }
      }
    })
    .then(function(data) {
      allAddress = data;

      let newShippingAddresses = [];
      if(allAddress !== undefined) {
        allAddress.shippingAddress.forEach((item) => newShippingAddresses.push(item.address));
      }
      let newBillingAddresses = [];
      if(allAddress !== undefined) {
        allAddress.billingAddress.forEach((item) => newBillingAddresses.push(item.address));
      }
      let shippingAddresses = newShippingAddresses.slice(-2, newShippingAddresses.length);
      let billingAddresses = newBillingAddresses.slice(-2, newBillingAddresses.length);

      if(ShopifyAnalytics.meta.page.path == "/checkout/contact_information") {

        for(let a = 0; a < shippingAddresses.length; a++) {

          let div = document.createElement('div');
          div.setAttribute('class','selectAddress');

          let obj = {
            firstName: shippingAddresses[a].first_name,
            lastName: shippingAddresses[a].last_name,
            name: shippingAddresses[a].name,
            address1: shippingAddresses[a].address1,
            address2: shippingAddresses[a].address2,
            city: shippingAddresses[a].city,
            province: shippingAddresses[a].province,
            provinceCode: shippingAddresses[a].province_code,
            country: shippingAddresses[a].country,
            countryCode: shippingAddresses[a].country_code,
            zip: shippingAddresses[a].zip,
            phone: shippingAddresses[a].phone
          };

          let input = document.createElement('input');
          input.setAttribute('class','input-radio');
          input.setAttribute('type','radio');
          input.setAttribute('name','address');
          input.setAttribute('onchange','getAddress()');
          input.setAttribute('value',JSON.stringify(obj));

          let div2 = document.createElement('div');
          div2.setAttribute('class','previousAddress');

          div2.innerHTML = `
${shippingAddresses[a].first_name ? `${shippingAddresses[a].first_name}` : ``}
${shippingAddresses[a].last_name ? `${shippingAddresses[a].last_name},` : ``}
${shippingAddresses[a].address1 ? `${shippingAddresses[a].address1},` : ``}
${shippingAddresses[a].address2 ? `${shippingAddresses[a].address2},` : ``}
${shippingAddresses[a].city ? `${shippingAddresses[a].city},` : ``}
${shippingAddresses[a].province ? `${shippingAddresses[a].province},` : ``}
${shippingAddresses[a].country ? `${shippingAddresses[a].country}` : ``}
${shippingAddresses[a].zip ? `- ${shippingAddresses[a].zip}.` : ``}
${shippingAddresses[a].phone ? `Phone: ${shippingAddresses[a].phone}` : ``}
`;

          div.appendChild(input);
          div.appendChild(div2);

          shipHandle.appendChild(div);
        }

      } else if(ShopifyAnalytics.meta.page.path == "/checkout/payment") {

        for(let b = 0; b < billingAddresses.length; b++) {

          let div = document.createElement('div');
          div.setAttribute('class','selectAddress');

          let obj = {
            firstName: billingAddresses[b].first_name,
            lastName: billingAddresses[b].last_name,
            name: billingAddresses[b].name,
            address1: billingAddresses[b].address1,
            address2: billingAddresses[b].address2,
            city: billingAddresses[b].city,
            province: billingAddresses[b].province,
            provinceCode: billingAddresses[b].province_code,
            country: billingAddresses[b].country,
            countryCode: billingAddresses[b].country_code,
            zip: billingAddresses[b].zip,
            phone: billingAddresses[b].phone
          };

          let input = document.createElement('input');
          input.setAttribute('class','input-radio');
          input.setAttribute('type','radio');
          input.setAttribute('name','address');
          input.setAttribute('onchange','getAddress()');
          input.setAttribute('value',JSON.stringify(obj));

          let div2 = document.createElement('div');
          div2.setAttribute('class','previousAddress');

          div2.innerHTML = `
${billingAddresses[b].first_name ? `${billingAddresses[b].first_name}` : ``}
${billingAddresses[b].last_name ? `${billingAddresses[b].last_name},` : ``}
${billingAddresses[b].address1 ? `${billingAddresses[b].address1},` : ``}
${billingAddresses[b].address2 ? `${billingAddresses[b].address2},` : ``}
${billingAddresses[b].city ? `${billingAddresses[b].city},` : ``}
${billingAddresses[b].province ? `${billingAddresses[b].province},` : ``}
${billingAddresses[b].country ? `${billingAddresses[b].country}` : ``}
${billingAddresses[b].zip ? `- ${billingAddresses[b].zip}.` : ``}
${billingAddresses[b].phone ? `Phone: ${billingAddresses[b].phone}` : ``}
`;

          div.appendChild(input);
          div.appendChild(div2);

          billHandle.appendChild(div);

        }
      }
    })
    .catch((e) => { console.log(e) })
  }

  window.addEventListener('load',function() { 
    if(customerId && (ShopifyAnalytics.meta.page.path == "/checkout/contact_information" || ShopifyAnalytics.meta.page.path == "/checkout/payment")){
      getAddresses();
    }
  }, false);
</script> -->

<style>
  @media only screen and (max-width: 600px){
    .selectAddress{
      width:88% !important;
    }  
  }
  .selectAddress {
    margin-right: 6px;
    border: 1px solid #ddd;
    padding: 12px;
    height: auto;
    margin-top: 8px;
    background-color: #fff;
    min-height: 90px;
    display: inline-block!important;
    width: 44%;
    vertical-align: middle;
  }
  .selectAddress:last-child{
    margin-right: 0px;
    margin-left: 6px;
  }
  .main .input-radio, .main .input-radio:hover{
    border-color: #ed3a33;
  }
  .input-radio:checked{
    box-shadow: 0 0 0 10px #ed3a33 inset;
  }
  :focus{
    outline: 0;
  }
  .section__content .content-box{
    clear: both;
  }
  .section--shipping-address .section__content, #section--billing-address__different {
    clear: both;
    background: #fef5f1;
    padding: 13px;
    border: 2px dashed #ed3b34;
  }
  .field__input-wrapper .field__input {
    border-radius: 0px
  }
  .selectAddress {
    display: -webkit-inline-box
  }
  .previousAddress{
    font-size: 10px;
    display: inline-block;
    vertical-align: top;
    width: 85%;
    margin-left: 15px;
  }
  .selectAddress input.input-radio {
    display: inline-block;
    vertical-align: middle;
    width: 18px;
  }
  .section__header {
    overflow: hidden;
    margin-bottom: 8px;
  }
  #notfound {
    background-color: #fef5f1;
    padding: 12px 12px 12px 12px;
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #ed3b34;
    margin-top: 4px;
    text-align: center;
  }
  .step__footer {
    margin-top: 8px;
  }
  .step__footer__continue-btn.btn {
    margin: 10px 0;
  }
</style>



<!-- Code for 5% off -->

{{ 'simply-checkout-style.scss.css' | asset_url | stylesheet_tag }}
  <div class='loading_me'>
    <div class="img">
      <p>We're processing...</p>
    </div>
  </div>
{% comment %}
{{ '//ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js' | script_tag }}
{% endcomment %}
<script type="text/javascript">
  window.simply = window.simply || {};
  window.cn = function(o){return"undefined"==typeof o||null==o||""==o.toString().trim()};
  window.cb = function(o){if(o == 'true'){return true}else{return false}};
      
  window.cart_data = [];
  window.codAppied = false;
  window.checkoutLineItem = [];
  $(".loading_me").appendTo('body');
  simply.shopDomain = "{{shop.domain}}";
  {%- for item in checkout.line_items -%}  
  var item  = {};
  item.id = '{{item.variant_id}}';
  item.quantity = '{{item.quantity}}';
  properties = {};
  {%- for pro in item.properties -%}
  {% if pro.last == 'cod' %}
  {%- assign cod = true -%}
  {% endif %}
  properties['{{pro.first}}'] = '{{pro.last}}';
  {%- endfor -%}
  item.properties = properties;
  window.cart_data.push(item);
  {%- endfor -%}
  var not_cod_input = $(".section--payment-method .content-box__row:first input");
  var cod_input = $(".section--payment-method .content-box__row[data-gateway-group='manual'] input");
  var disccount_banner = $(".section--payment-method .section__content");
  {%- if cod -%}
  cod_input.click();
  codAppied = true;
  disccount_banner.prepend("<p class='cod_banner'>GET EXTRA 5% OFF ON ONLINE PAYMENT</p>");
  {%- else -%}
  disccount_banner.prepend("<p class='cod_banner'>YOU’VE GOT 5% OFF ON YOUR ORDER</p>");
  {%- endif -%}
</script>
{{ 'simply.checkout-script.js' | asset_url | script_tag }} 

<!-- End of 5% off code -->

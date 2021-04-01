function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "اقرأ اقل"; 
        moreText.style.display = "inline";
    }
}
// main-slider
$('#main-slider').owlCarousel({
    center:true,
    rtl:true,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    mouseDrag:false,
    autoWidth:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items:1,
});

// product-slider
$('#items-slider').owlCarousel({
    center:true,
    rtl:true,
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    mouseDrag:false,
    autoWidth:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// Contact

$("#myform").validate({
    rules: {
        fullName: {
            required: true,
            minlength:3
        },
        uEmail: {
            required: true,
            email: true
        },
        mesText: {
            required: true,
        }
    },
    messages :{
        fullName : {
            required : 'Enter your name please'
        },
        uEmail: {
            required: 'Enter your correct mail',
        },
        mesText: {
            required: 'Enter your message please',
        }
    }
})

$(document).ready(function () {
    $('#iconCarousel').owlCarousel({
        nav: false,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        center: true,
        autoplaySpeed: 4200,
        autoplayTimeout: 4200,
        slideTransition: 'linear',
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            },
            1366: {
                items: 3
            }
        }
    });
    $('#featureProductCarousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            '<img src="https://cdn.shopify.com/s/files/1/0559/8553/7202/files/prev.png?v=1701683804" alt="">',
            '<img src="https://cdn.shopify.com/s/files/1/0559/8553/7202/files/next.png?v=1701683804" alt="">'
        ],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1200: {
                items: 3
            },
            1366: {
                items: 4
            }
        }
    })
    var existingLink = $('a.text-size--large.text-link').attr('href');
    $('a.text-size--large.text-link').replaceWith(function () {
        return `
            <a href="${existingLink}" target="_blank" rel="noopener noreferrer" class="text-size--large text-link">
                View All 
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                    <path d="M7.34183 1.00857C7.2334 1.11682 7.14737 1.2454 7.08867 1.38693C7.02998 1.52846 6.99977 1.68018 6.99977 1.83341C6.99977 1.98663 7.02998 2.13835 7.08867 2.27988C7.14737 2.42141 7.2334 2.54999 7.34183 2.65824L10.017 5.33341H1.16667C0.857247 5.33341 0.560501 5.45632 0.341709 5.67511C0.122917 5.89391 0 6.19065 0 6.50007C0 6.80949 0.122917 7.10624 0.341709 7.32503C0.560501 7.54382 0.857247 7.66674 1.16667 7.66674H10.017L7.34183 10.3419C7.12307 10.5607 7.00018 10.8574 7.00018 11.1667C7.00018 11.4761 7.12307 11.7728 7.34183 11.9916C7.56059 12.2103 7.85729 12.3332 8.16667 12.3332C8.47604 12.3332 8.77274 12.2103 8.9915 11.9916L14.483 6.50007L8.9915 1.00857C8.88325 0.900136 8.75468 0.814108 8.61314 0.755412C8.47161 0.696716 8.31989 0.666504 8.16667 0.666504C8.01344 0.666504 7.86173 0.696716 7.72019 0.755412C7.57866 0.814108 7.45009 0.900136 7.34183 1.00857Z" fill="#2B2929"/>
                </svg>
            </a>
        `;
    });

    $('button#close').click(function () {
        $('div#navbarNav').css('left', '-100%')
    })
    $('button#hamburger').click(function () {
        $('div#navbarNav').css('left', '0')
    })
    $('span.back.d-flex.gx-1.align-items-center').click(function () {
        $('.main_new_header ul.navbar-nav li>').find('ul').toggleClass('show')
    })
    $('.main_new_header section.search div#navbarNav li').click(function () {
        $(this).find('ul').toggleClass('show')
    })

    $('.search_icon').click(function () {
        $('.searchForm').toggleClass('show')
    })


    var slice_collection = 4;
    $(".load_more").click(function () {
        console.log('click');
        var hiddenElements = $(this).closest(".tab-pane").find(".collections_content:hidden");
        if (hiddenElements.length > 0) {
            hiddenElements.slice(0, slice_collection).slideDown();
            console.log('show');
        }
        if ($(this).closest(".tab-pane").find(".collections_content:hidden").length === 0) {
            $(this).hide();
            console.log('hide');
        }
    });

    var slice_blogs = 3;
    $("#view_more").click(function () {
        var hiddenElements = $(".more-blogs").find(".col-lg-4.col-md-6.col-sm-12:hidden");
        if (hiddenElements.length > 0) {
            hiddenElements.slice(0, slice_blogs).slideDown();
            console.log('show');
        }
        if ($(".more-blogs").find(".col-lg-4.col-md-6.col-sm-12:hidden").length === 0) {
            $(this).hide();
            console.log('hide');
        }
    });



    $('.loading-indicator').show();

    $.ajax({
        url: 'https://www.flasked.ph/cart',
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            var cartItems = $(data).find('.cart-form-item');

            // Clear the existing content in the cart pop-up
            $('.cart_show .cart_section').empty();

            // Iterate through each cart item
            cartItems.each(function (index, element) {
                var title = $(element).find('.cart-item__title').text().trim();
                var imageUrl = $(element).find('.cart-item__thumbnail img').attr('src');
                var price = $(element).find('.cart-item__price strong').text();
                var quantity = $(element).find('.qty-selector.product__quantity').val();
                var variant = $(element).find('span.cart-item__variant.text-size--small.text-color--opacity').text()
                var total = $(element).find('.cart__total strong.text-size--heading').text()

                // Create HTML for each product item
                var productItemHtml = `
                  <div class="product_item">
                      <div class="product_image">
                          <img src="${imageUrl}" alt="${title}">
                      </div>
                      <div class="product_info">
                          <h3>${title}</h3>
                          <span class="variant">${variant}</span>
                          <span class="other_info">Quantity: ${quantity}</span>
                          <span class="price">${price}</span>
                      </div>
                  </div>
              `;

                // Append the product item HTML to the cart pop-up
                $('.cart_section').append(productItemHtml);
                console.log(total)
                $('.subtotal_price').text(total)
            });


            // Hide loading indicator
            $('.loading-indicator').hide();

            console.log("Updated cart items successfully.");
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
            console.log("Status:", status);
            console.log("XHR:", xhr);

            // Hide loading indicator
            $('.loading-indicator').hide();
        }
    });

    // Function to update subtotal based on price and quantity


    $('.cart').hover(function () {
        var subtotal = 0;
        $('.cart_section .product_item').each(function () {
            var priceStr = $(this).find('.price').text().replace(/[^\d.]/g, ''); // Remove non-numeric characters
            var price = parseFloat(priceStr);
            var quantity = parseInt($(this).find('.other_info').text().replace('Quantity: ', ''));
            subtotal += price * quantity;
        });
        $('.subtotal_price').text('₱' + subtotal.toFixed(2));
    })

    // Bind change event handler to quantity inputs
    $('.cart_section .other_info').on('input', function () {
        updateSubtotal();
    });

    $('.dropdown-menu button').click(function () {
        var selectedText = $(this).text();
        $('.dropdown-toggle').text(selectedText);
    });

    //scroll to top
    $(".scroll_top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });



});



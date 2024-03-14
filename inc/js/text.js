$('section.homepage.proof-of-payment .upload').click(function () {
    $('input#27110-file').click()
})

function handleHover(sectionSelector) {
    var $joinNow = $(sectionSelector + ' a.join-now');
    var $image = $joinNow.find('img');
    var originalSrc = $image.attr('src');
    var hoverSrc = 'https://cdn.shopify.com/s/files/1/0515/7987/9601/files/white-right-arrow.png?v=1697616089'; // Replace with the actual hover image source

    $joinNow.hover(function () {
        $image.attr('src', hoverSrc);
        console.log('hover');
    }, function () {
        $image.attr('src', originalSrc);
    });
}

handleHover('section.homepage.join-our-group');
handleHover('section.homepage.warehouse.pt-0');
handleHover('section.homepage.warehouse');
handleHover('section.homepage.join-our-group.inquiries');

setEqualHeightForSection('section.homepage.choose-our-service', 'p');
setEqualHeightForSection('section.homepage.choose-our-service', 'h3');
function setEqualHeightForSection(sectionSelector, secondSelector) {
    var elementsToResize = $(sectionSelector).find(secondSelector);
    var tallestHeight = 0;
    elementsToResize.each(function () {
        var height = $(this).height();
        if (height > tallestHeight) {
            tallestHeight = height;
        }
    });
    elementsToResize.css('height', tallestHeight);
}
var currentURL = window.location.href;
var homepageURL = window.location.origin + '/?contact%5Btags%5D=newsletter&form_type=customer';
var newhomepageURL = 'https://www.cargoboss.ph/pages/new-home-page?contact%5Btags%5D=newsletter&form_type=customer';
var pTagAdded = false; // Flag to track if the <p> tag has been added
setInterval(() => {
    if (currentURL === newhomepageURL && !pTagAdded) {
        var $form = $('form#Contact_newsletter.form-single-field');
        var $pTag = $('<p>Thank you for subscribing</p>');
        $form.after($pTag);
        pTagAdded = true; // Set the flag to true to indicate the <p> tag has been added
    }
}, 2000);


setTimeout(function(){
    $.ajax({
        url: 'https://www.cargoboss.ph/products/guangzhou-to-manila-15-21-days',
        method: 'GET',
        success: function(data) {
          const $html = $(data);
          const ratersValue = $html.find('.loox-rating').data('raters');
          $('span.guanzhou_to_manila').text(ratersValue)
          console.log(ratersValue)
        },
        error: function(error) {
          console.error('Error fetching the HTML:', error);
        }
      });
    
    
      $.ajax({
        url: 'https://www.cargoboss.ph/products/shishi-to-manila',
        method: 'GET',
        success: function(data) {
          const $html = $(data);
          const ratersValue = $html.find('.loox-rating').data('raters');
          $('span.shishi_to_manila').text(ratersValue)
          console.log(ratersValue)
        },
        error: function(error) {
          console.error('Error fetching the HTML:', error);
        }
      });
    
    
    
      $.ajax({
        url: 'https://www.cargoboss.ph/products/yiwu-to-manila',
        method: 'GET',
        success: function(data) {
          const $html = $(data);
          const ratersValue = $html.find('.loox-rating').data('raters');
          $('span.yiwu_to_manila').text(ratersValue)
          console.log(ratersValue)
        },
        error: function(error) {
          console.error('Error fetching the HTML:', error);
        }
      });
    
    
      $.ajax({
        url: 'https://cargoboss.ph/products/fujian-to-manila',
        method: 'GET',
        success: function(data) {
          const $html = $(data);
          const ratersValue = $html.find('.loox-rating').data('raters');
          $('span.fujian_to_manila').text(ratersValue)
          console.log(ratersValue)
        },
        error: function(error) {
          console.error('Error fetching the HTML:', error);
        }
      });
},500)
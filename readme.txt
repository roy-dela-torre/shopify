shopify libraries command
{{ product.id }} => product id
{{ product.url }} => product url
{{ product.featured_image.src | img_url: '480x480' }} => image url and imamge instrisic size
{{ product.title }} => product title

<!-- For add to cart button -->
<form action="/cart/add" method="post" enctype="multipart/form-data" class="add_to_cart_form">
    <input type="hidden" name="id" value="{{ product.variants.first.id }}">
    <button type="submit" class="add_to_cart">Add to Cart</button>
</form>
<!-- For add to cart button -->


<!-- Check if product is sold out or not -->
{% if product.available == false %}
    <span class="sold_out">
        Sold Out
    </span>
{% endif %}
<!-- Check if product is sold out or not -->


<!-- Get Product Discount -->
{% if product.compare_at_price_max > product.price %}
<span class="product-item__badge product-item__badge--sale" style="background-color: #D14545; color: #ffffff">-{{ product.price | minus: product.compare_at_price_max | times: 100 | divided_by: product.compare_at_price_max | round }}%</span>
{% endif %}
<!-- Get Product Discount -->
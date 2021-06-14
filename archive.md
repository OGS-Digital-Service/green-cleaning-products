<ol class="flex flex-row flex-wrap mb-6 font-medium">
{% if products.category %}
<li class="caret oswald uppercase">{{ products.category }}</li>
{% else %} {% endif %}
{% if products.subcategory %}
<li class="caret oswald uppercase">{{ products.subcategory }}</li>
{% else %} {% endif %}
{% if products.manufacturer %}
<li class="caret oswald uppercase">{{ products.manufacturer }}</li>
{% else %} {% endif %}
{% if products.product %}
<li class="caret oswald uppercase">{{ products.product}}</li>
{% else %} {% endif %}
</ol> 
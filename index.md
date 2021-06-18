---
layout: layout-tablesort.njk
title: Green Cleaning Products
data: masterproductlist
---
<div class="flex-row">
<button class="border border-solid border-black p-4 m-4" onclick="ClearFilters()" >Clear Filters</button>
<label for="filter1"> Filter by Category </label><span class="filter1 border border-solid border-black p-2 m-2"></span> </div>


<table id="productstable" class="display">
<thead class="">
<tr>
<th>Product Category </th> 
<th>Product Type</th>
<th>Product Manufacturer</th> 
<th>Product Name</th>
<th>Meets Standard</th>
</tr>
</thead>
<tbody>
{% for products in masterproductlist %}
<tr> 
<td>{{ products.category }}</td>
<td>{%if products.general and products.bath and products.glass and products.carpet and products.vacuum !==null %} {% else %}
{% if products.general %} <span class="bg-gray-200 uppercase text-xs p-1 m-1">{{ products.general }}</span>{% endif %}{% if products.bath %}<span class="bg-gray-200 uppercase text-xs p-1 m-1">{{ products.bath }}</span>{% endif %}{% if products.glass %}<span class="bg-gray-200 uppercase text-xs p-1 m-1">{{ products.glass }}</span>{% endif %}{% if products.carpet %}<span class="bg-gray-200 uppercase text-xs p-1 m-1">{{ products.carpet }}</span>{% endif %}{% if products.vacuum %}<span class="bg-gray-200 uppercase text-xs p-1 m-1 whitespace-nowrap">{{ products.vacuum }}</span>{% endif %} {%endif%}
</td> 
<td>{{ products.manufacturer }}</td>
<td><a href="green-products/{{ products.productID }}/{{ products.category | slug }}/{{ products.manufacturer | slug }}/{{ products.product | slug }}/">{{ products.product }}</a></td>
<td>{% if products.GsCertified %}<span class="bg-gray-200 uppercase text-xs p-1 m-1 whitespace-nowrap">{{ products.GsCertified }}</span>{% endif %}{% if products.EcCertified %}<span class="bg-gray-200 uppercase text-xs p-1 m-1 whitespace-nowrap">{{ products.EcCertified }}</span>{% endif %}{% if products.CarpetStyle %}<span class="bg-gray-200 uppercase text-xs p-1 m-1 whitespace-nowrap">{{ products.CarpetStyle }}</span>{% endif %}</td>
</tr>
{% endfor %}
</tbody>
<tfoot>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tfoot>
</table>



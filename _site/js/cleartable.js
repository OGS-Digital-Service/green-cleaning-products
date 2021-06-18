function ClearFilters() {
  $('.clearthis').val('');  
  $('.dataTables_filter').val('');
	var table = $('#productstable').DataTable();
	table
	.search( '' )
	.columns().search( '' )
	.draw();}
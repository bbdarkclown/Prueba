/**
 * @author darkclown
 */

 $(document).ready(function(){
 	$("#list").jqGrid(
	{
  	url:'datos_panel_general.php', 
	datatype: "json",
	colNames:['MO','PO','Cliente'], 
	colModel:[ 
			  {name:'idmo', index:'idmo',width:120,align:'center'},
			  {name:'nombre', index:'nombre',width:200,align:'left',editable:true,editoptions:{size:40}},  
			  {name:'color', index:'color',align:'center',hidden:true,editable:false}
			], 	
	rowNum:20, 
	rowList:[10,20,30], 
	sortname: "caduca",
	sortorder: "asc",
	height:450/*'100%'*/, 
	forceFit: false, 	
	shrinkToFit: true,
	autowidth: true, //tomar todo el ancho 
	//loadonce: true,  cargar grid desabilutando el paginador
	//rownumbers: true,  
	viewrecords: true, 
	//imgpath: "themes/ui-lightness/images",
	loadComplete: function(){},
	afterInsertRow: function(rowid, aData){} ,
	//subGrid : true, 
	toolbar: [true,"top"],
	pager: $("#pager"),
	caption:"grid de prueba"}).navGrid('#pager',{add: false, edit: false, del: false, search: false,refresh:true,view:true},
														{},
														{},
														{},
														{}
	
	
	
	
	
	
	
	
	
	);
 	
	
	
	
	
	
 });
 
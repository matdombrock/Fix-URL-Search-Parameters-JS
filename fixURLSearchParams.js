if ('URLSearchParams' in window) {
  	var urlParams = new URLSearchParams(window.location.search);
	if(urlParams.has('id')){
		var id = urlParams.get('id')
		$.ajax({dataType: "json",url: "api.php?id="+id, success: function(result){
		            //ajax
		}});
	}
}else{
	url = window.location.href;
	url = url.split("?id=");
	var urlParams = url[1]
	if(urlParams != null){
		var id = urlParams;
		$.ajax({dataType: "json",url: "api.php?id="+id, success: function(result){
		            //ajax
		}});
	}
}

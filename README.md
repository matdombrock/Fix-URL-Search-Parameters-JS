# fixURLSearchParams.js
URLSearchParams() [https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams] does not work on mobile for iOS, this is an example of a workaround.
```js
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
```

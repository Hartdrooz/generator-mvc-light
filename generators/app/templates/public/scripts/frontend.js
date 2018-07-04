document.addEventListener('DOMContentLoaded', function() {
	var btnSend = document.getElementById('btnSend');
	var input = document.getElementById('inputMsg');
	var list = document.getElementById('listMessages');

	btnSend.addEventListener('click', function() {
		// use the fetch browser method
		if (input.value) {
			var url = '/api/hello/' + input.value;
			fetch(url)
				.then(function(response) {
					if (response.status == 200) {
						response.json().then(function(data) {
							var li = document.createElement('li');
							li.innerHTML = data;
							list.appendChild(li);
						});
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	});
});

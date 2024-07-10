document.getElementById('getButton').addEventListener('click', function() {
	fetch('http://10.0.0.73:5000/get')
		.then(response => response.json())
		.then(data => {
			document.getElementById('response').innerHTML = JSON.stringify(data);
		})
});

document.getElementById('postButton').addEventListener('click', function() {
	fetch('http://10.0.0.73:5000/post', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({key: 'value'}),
	})
	.then(response => response.json())
	.then(data => {
		document.getElementById('response').innerHTML = JSON.stringify(data);
	})
});
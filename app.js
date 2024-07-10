// document.getElementById('getButton').addEventListener('click', function() {
// 	fetch('http://10.0.0.73:5000/get')
// 		.then(response => response.json())
// 		.then(data => {
// 			document.getElementById('response').innerHTML = JSON.stringify(data);
// 		})
// });

// document.getElementById('postButton').addEventListener('click', function() {
// 	fetch('http://10.0.0.73:5000/post', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({key: 'value'}),
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		document.getElementById('response').innerHTML = JSON.stringify(data);
// 	})
// });
//function that gets called apon clicking login
IP = "http://127.0.0.1:5000" // add your ip along w/ port
function logIn() {
	document.getElementById('response').innerHTML = ""
	console.log("logging in!")
	userName = document.getElementById("uname").value
	password = document.getElementById('psw').value

	fetch(IP + "/post", {
		method: "POST",
		headers: {"Content-Type":"application/json"},
		body: JSON.stringify({"username":userName,"password":password})
	}).then(response => response.json()).then(data => {
		document.getElementById("response").innerHTML = JSON.stringify(data)
	})
}
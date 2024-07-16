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
	userName = getUser()
	password = getPassword()

	fetch(IP + "/post", {
		method: "POST",
		headers: {"Content-Type":"application/json"},
		body: JSON.stringify({"username":userName,"password":password})
	}).then(response => response.json()).then(data => {
		useResult(data)
	})
}

function useResult(result) {
	document.getElementById('response').innerHTML = ""
	document.getElementById('response').innerHTML = JSON.stringify(result)
}

function getUser() {
	return document.getElementById("username").value
}

function getPassword() {
	document.getElementById('password').value
}


function openBar(){
    // document.getElementById("navBar").style.width = "250px";
    document.getElementById("navBar").classList.add("open");
}

function closeBar(){
    // document.getElementById("navBar").style.width = "0";
    document.getElementById("navBar").classList.remove("open");
}

function openAiTest() {
    x = document.getElementById("Query").value
    document.getElementById("Query").value = ""
	fetch(IP + "/post", {
		method: "POST",
		headers: {"Content-Type":"application/json"},
        body: JSON.stringify({content: x})
	}).then(response => response.json()).then(data => {
		document.getElementById("response").innerHTML = data["result"]

	})
}
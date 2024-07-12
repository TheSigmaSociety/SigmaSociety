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
	return document.getElementById("uname").value
}

function getPassword() {
	document.getElementById('psw').value
}


//fade in fade out for main page

document.addEventListener("DOMContentLoaded", function() {
	const sections = document.querySelectorAll('.mainButtons');
	
	const observer = new IntersectionObserver( (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting){
				entry.target.classList.add('is-visible');
			}
		});
	});

	sections.forEach(section => {
		observer.observe(section);
	});

});
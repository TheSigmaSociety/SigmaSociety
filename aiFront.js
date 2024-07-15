IP = "http://127.0.0.1:5000" // add your ip along w/ port

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
// fetch(IP + "/post", {
// 	method: "POST",
// 	headers: {"Content-Type":"application/json"},
// 	body: JSON.stringify({"username":userName,"password":password,type: "action",$:""})
// }).then(response => response.json()).then(data => {
// 	if(useResult(data) == true) {
// 		nam = userName
// 		pass = password
// 	}
// })
IP = "http://127.0.0.1:5000" // add ip along w/ port
//function that gets called apon clicking login
function logIn() {
	userName = getUser()
	password = getPassword()

	//{"username":userName,"password":password,type: "action",$:""}
	sendToServer({"username":userName,"password":password,type: "action",$:""},(data) =>useResult(data));

}
//sends a post request to the server
function sendToServer(json,resultFunc) {
	fetch(IP + "/post", {
		method: "POST",
		headers: {"Content-Type":"application/json"},
		body: JSON.stringify(json)
	}).then(response => response.json()).then(data => resultFunc(data))
}
//must return a boolean indicating if login was successful or not
function useResult(result) {
	document.getElementById('response').innerHTML = ""
	if(result['status'] == false) document.getElementById('response').innerHTML = result['content']
	else document.getElementById('response').innerHTML = "login in successful"
	return result['status'] 
}
function getUser() {return document.getElementById("uname").value}
function getPassword() {return document.getElementById('psw').value}

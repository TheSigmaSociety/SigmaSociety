IP = "http://127.0.0.1:5000" // add ip along w/ port
function sendToServer(json,resultFunc) {
	fetch(IP + "/post", {
		method: "POST",
		headers: {"Content-Type":"application/json"},
		body: JSON.stringify(json)
	}).then(response => response.json()).then(data => resultFunc(data))
}
function create() {
	user = getCreateUser()
	pass = getCreatePass()
	sendToServer({username:user,password:pass,type:"create"},(data) => {
        console.log(data)
        if(data['result']) document.getElementById("response").innerHTML = "Account creation successful"
        else document.getElementById("response").innerHTML = "Username already taken"
    })
	
}
function getCreatePass() {return document.getElementById('psw').value}
function getCreateUser() {return document.getElementById("uname").value}
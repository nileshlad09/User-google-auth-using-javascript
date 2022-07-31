var googleButton = document.getElementById("google-button");
var container = document.getElementsByClassName("container")[0];
var img = document.getElementsByClassName("img")[0];
var getName = document.getElementsByClassName("name")[0];
var id = document.getElementsByClassName("id")[0];
var email = document.getElementsByClassName("email")[0];

// function to get response
function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);
  img.src = responsePayload.picture;
  getName.innerHTML = responsePayload.name;
  id.innerHTML = responsePayload.sub;
  email.innerHTML = responsePayload.email;
  container.style.display = "inline-block";
  googleButton.style.display = "none";
}

window.onload = function () {
  google.accounts.id.initialize({
    // replace your client id below
    client_id:
      "1007947313665-2do870t31t1q99167ivrh1onms16sms4.apps.googleusercontent.com",
    callback: handleCredentialResponse,
    auto_select: true,
    auto: true,
  });
  google.accounts.id.renderButton(
    document.getElementById("google-button"),
    { theme: "filled_blue", size: "medium", width: "200" } // customization attributes
  );
  // also display the One Tap dialog on right side
  // important for auto login
  google.accounts.id.prompt();
};

// function to decode the response.credential
function decodeJwtResponse(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

function signOut() {
  google.accounts.id.disableAutoSelect();
  // do anything on logout
  location.reload();
}

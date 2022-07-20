// 1007947313665-gq0set7mjml52tucon4e65gr8gr3edo2.apps.googleusercontent.com
const emailId = document.getElementById('emailId')
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    emailId.innerText=profile.getEmail();
    console.log("hi");
    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 
  }
console.log("hi");
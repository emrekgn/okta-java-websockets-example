var authClient = new OktaAuth({
  url: 'https://dev-239352.okta.com',
  clientId: '0oa14trc2aHwBOide357',
  redirectUri: 'http://localhost:8080'
});


var idToken = authClient.tokenManager.get('idToken')
    .then(idToken => {
      // If ID Token exists, output it to the console
      if (idToken) {
        console.log(`hi ${idToken.claims.email}!`);
      // If ID Token isn't found, try to parse it from the current URL
      }
      else if (location.hash) {
        authClient.token.parseFromUrl()
        .then(idToken => {
          console.log(`hi ${idToken.claims.email}!`);
          // Store parsed token in Token Manager
          authClient.tokenManager.add('idToken', idToken);
          console.log(idToken);
        });
      }
      else {
        // You're not logged in, you need a sessionToken
        authClient.token.getWithRedirect({
          responseType: 'id_token'
        });
      }
    });
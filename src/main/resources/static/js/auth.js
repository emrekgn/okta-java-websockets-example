var authClient = new OktaAuth({
  url: 'https://{yourOktaDomain}',
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientID}',
  redirectUri: 'http://localhost:8080'
});


if (authClient.token.isLoginRedirect()) {
  // Parse token from redirect url
  authClient.token.parseFromUrl()
    .then(data => {
        const { idToken } = data.tokens;
        const { accessToken } = data.tokens;

        authClient.tokenManager.add('accessToken', accessToken);
        authClient.tokenManager.add('idToken', idToken);

        window.location.hash='';
    });
} else {
  // Attempt to retrieve ID Token from Token Manager
  authClient.tokenManager.get('accessToken')
    .then(accessToken => {
      console.log(accessToken);
      if (accessToken) {
        console.log(accessToken.value);
      } else {
        // You're not logged in, you need a sessionToken
        authClient.token.getWithRedirect({
          responseType: ['token','id_token']
        });
      }
    })
}

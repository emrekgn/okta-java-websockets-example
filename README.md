# Tutorial: Java API for WebSocket

This repository contains all the code for testing Spring Framework WebSocket support with a Broker Server Application and a Javascript Client, using Okta authentication and access tokens for the WebSocket handshake.

**Prerequisites:**

- [Java 8](https://adoptopenjdk.net/)

## Getting Started

To install this example, run the following commands:
```bash
git clone https://github.com/indiepopart/java-websockets.git
cd java-websockets
```

### Create Client and Server Applications in Okta

Log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don’t have an account).

For the client:
1. From the **Applications** page, choose **Add Application**.
2. On the Create New Application page, select **SPA**.
3. Copy the **ClientId**.

For the Server:
1. From the **Applications** page, choose **Add Application**.
2. On the Create New Application page, select **Service**.
3. Copy the **Client ID** and **Client secret** from General Settings.

Go to the Dashboard home and copy the **Org URL** from the top right corner.

### Update The Javascript ClientID

Open the maven project and edit `src/main/resources/static/js/auth.js`. Update the **clientId** param in the client instantiation, setup the SPA clientId:

```Javascript
var authClient = new OktaAuth({
  url: 'https://{yourOktaDomain}',
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{yourClientID}',
  redirectUri: 'http://localhost:8080'
});
```

Edit `src/main/resources/application.yml` and update the issuer:

```yml
okta:
  oauth2:
    issuer: https://{yourOktaDomain}/oauth2/default
```

### Run with Maven

```shell
./mvnw spring-boot:run
```

Got to http://localhost:8080 and login with Okta.

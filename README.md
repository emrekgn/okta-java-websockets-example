# Tutorial: Java API for WebSocket

This repository contains all the code for testing Spring Framework WebSocket support with a Broker Server Application and a JavaScript Client, using Okta authentication and access tokens for the WebSocket handshake.

Please read [Tutorial: Develop Apps with Secure WebSockets in Java](https://developer.okta.com/blog/2019/10/09/java-spring-websocket-tutorial) to see how this app was created.

**Prerequisites:** [Java 8](https://adoptopenjdk.net/)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-java-websockets-example.git
cd okta-java-websockets-example
```

### Create Client and Server Applications in Okta

Log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don’t have an account).

1. From the **Applications** page, choose **Add Application**.
2. On the Create New Application page, select **SPA**.
3. On the next page, add `http://localhost:8080` as a Login redirect URI
4. Copy the **Client ID** from the General Settings

Go to the Dashboard home and copy the **Org URL** from the top right corner.

### Update The Javascript Client ID

Open the project and edit `src/main/resources/static/js/auth.js`. Update the **clientId** param in the client instantiation, and replace `{yourOktaDomain}` with your Org URL (e.g., `dev-123456.okta.com`).

```js
var authClient = new OktaAuth({
  url: 'https://{yourOktaDomain}',
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{yourClientID}',
  redirectUri: 'http://localhost:8080'
});
```

Edit `src/main/resources/application.yml` and update the issuer:

```yaml
okta:
  oauth2:
    issuer: https://{yourOktaDomain}/oauth2/default
```

### Run with Maven

```shell
./mvnw spring-boot:run
```

Go to http://localhost:8080 and login with Okta.

## Links

This example uses the [Okta Spring Boot Starter](https://github.com/okta/okta-spring-boot) and the [Okta Auth JS SDK](https://github.com/okta/okta-auth-js) to integrate with Okta.

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/10/09/java-spring-websocket-tutorial), or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

package com.okta.developer.websockets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationManager;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;

@EnableResourceServer
@Configuration
public class ResourceServerSecurityConfig extends ResourceServerConfigurerAdapter {

    @Value("${okta.client-id}")
    private String clientId;

    @Value("${okta.client-secret}")
    private String clientSecret;

    @Value("${okta.token-endpoint-url}")
    private String tokenEndpoingURL;

    @Value("${okta.resource-id}")
    private String resourceId;



    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().authenticated();
    }

    @Bean
    public ResourceServerTokenServices tokenServices(){
        RemoteTokenServices tokenServices = new RemoteTokenServices();
        tokenServices.setClientId(clientId);
        tokenServices.setClientSecret(clientSecret);
        tokenServices.setCheckTokenEndpointUrl(tokenEndpoingURL);
        return  tokenServices;
    }

    @Bean
    public OAuth2AuthenticationManager authenticationManager(){
        OAuth2AuthenticationManager authenticationManager = new OAuth2AuthenticationManager();
        authenticationManager.setResourceId(resourceId);
        authenticationManager.setTokenServices(tokenServices());

        return  authenticationManager;
    }
}

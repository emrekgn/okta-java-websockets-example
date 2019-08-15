package com.okta.developer.websockets;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfiguration;


@Configuration
public class ResourceServerSecurityConfig extends ResourceServerConfiguration {

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    public int getOrder() {
        return 4;
    }
}

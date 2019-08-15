package com.okta.developer.websockets;

import org.springframework.security.authentication.AbstractAuthenticationToken;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {


    private String accessToken;


    public JwtAuthenticationToken(String accessToken){
        super(null);
        this.accessToken = accessToken;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return this.accessToken;
    }
}

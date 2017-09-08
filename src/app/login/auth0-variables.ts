interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    //your auth0 client id
    CLIENT_ID: 'gPlh8xqyFoAc1Si6J186xOQXNC1Vol1m',
    //your auth0 domain
    CLIENT_DOMAIN: 'status-reporter.auth0.com',
    //Your auth0 api identifier
    AUDIENCE: 'status-reporter-api',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid'
};
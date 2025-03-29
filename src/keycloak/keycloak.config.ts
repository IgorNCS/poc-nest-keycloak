// keycloak.config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('keycloak', () => ({
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL || 'http://keycloak:8080',
  realm: process.env.KEYCLOAK_REALM || 'poc',
  clientId: process.env.KEYCLOAK_CLIENT_ID || 'meu-cliente',
  secret: process.env.KEYCLOAK_SECRET || 'meu-segredo',
  cookieKey: 'KEYCLOAK_JWT',
  logLevels: ['warn', 'error', 'debug'],
  useNestLogger: true,
}));

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KeycloakConnectModule, ResourceGuard, RoleGuard, AuthGuard, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';
import keycloakConfig from './keycloak.config';

@Module({
  imports: [
    ConfigModule.forFeature(keycloakConfig),
    KeycloakConnectModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          authServerUrl:  'http://localhost:8080',
          realm:  'meu-realm',
          clientId:  'meu-cliente',
          secret: 'XjQd9qex1EUyLxXcw0i6ElHMc3lnk7DN',
          cookieKey: configService.get('keycloak.cookieKey') || 'KEYCLOAK_JWT',
          logLevels: configService.get('keycloak.logLevels') || ['warn', 'error', 'debug'],
          useNestLogger: configService.get('keycloak.useNestLogger') || true,
          policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
          tokenValidation: TokenValidation.ONLINE,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: ResourceGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: RoleGuard,
    },
  ],
  exports: [KeycloakConnectModule],
})
export class KeycloakModule {}
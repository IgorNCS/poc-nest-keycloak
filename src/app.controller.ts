import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public, RoleMatchingMode, Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('protegido')
  getProtegido(): string {
    return 'Esta rota é protegida e requer autenticação';
  }

  @Get('admin')
  @Roles({ roles: ['admin', 'realm:admin'], mode: RoleMatchingMode.ANY })
  getAdmin(): string {
    return 'Esta rota requer a role de admin';
  }
}

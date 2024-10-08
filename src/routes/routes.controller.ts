import { Controller, Get } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get(['/','/home', '/index'])
  home() {
    return this.routesService.home();
  }

  @Get('/about')
  about() {
    return this.routesService.about();
  }

  @Get('/contact')
  contact() {
    return this.routesService.contact();
  }

  @Get('/dashboard')
  dashboard() {
    return this.routesService.dashboard();
  }

  @Get('/dashboard/settings')
  dashboardSettings() {
    return this.routesService.dashboardSettings();
  }

  @Get('/dashboard/profile')
  dashboardProfile() {
    return this.routesService.dashboardProfile();
  }

  @Get('/auth')
  auth() {
    return this.routesService.auth();
  }

  @Get('/auth/register')
  authRegister() {
    return this.routesService.authRegister();
  }

  @Get('/auth/login')
  authLogin() {
    return this.routesService.authLogin();
  }

  @Get('/error')
  error() {
    return this.routesService.error();
  }

}

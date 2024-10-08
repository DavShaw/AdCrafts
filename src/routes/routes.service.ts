import { Injectable } from '@nestjs/common';

@Injectable()
export class RoutesService {

  home() {
    return "This is the home page";
  }

  contact() {
    return "This is the contact page";
  }

  about() {
    return "This is the about page";
  }

  dashboard() {
    return "This is the dashboard";
  }

  dashboardSettings() {
    return "This is the dashboard settings";
  }

  dashboardProfile() {
    return "This is the dashboard profile";
  }

  auth() {
    return "This is the auth page";
  }

  authRegister() {
    return "This is the auth register page";
  }

  authLogin() {
    return "This is the auth login page";
  }

  error() {
    return "This is the error page";
  }

}

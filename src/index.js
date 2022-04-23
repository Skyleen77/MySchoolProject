// Controllers
import Login from './controllers/login';
import Register from './controllers/register';
import Student from './controllers/student';

const Routes = class {
  constructor() {
    this.routes = [
      {
        url: '/',
        controller: new Login()
      },
      {
        url: '/register',
        controller: new Register()
      },
      {
        url: '/student',
        controller: new Student()
      }
    ];
  }

  routesInit() {
    this.routes.forEach((route) => {
      const { url, controller } = route;
      const pathName = location.pathname;

      if (pathName === url) {
        controller.run();
      }
    });
  }

  run() {
    this.routesInit();
  }
};

const routes = new Routes();

routes.run();

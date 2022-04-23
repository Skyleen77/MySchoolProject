// Depdencies
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const Register = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  onHandleSubmit(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const instance = axios.create({
        baseURL: 'https://p378f02lt5.execute-api.eu-west-3.amazonaws.com/students-B3-melun/',
        headers: {
          'x-api-key': 'YUx93aI9qF2Qk2IQt9ZzI68A7JlHRr059ZUjaJZs',
          'Access-Control-Allow-Origin': 'http://127.0.0.1',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        }
      });

      const id = uuid();
      const firstname = form.firstname.value;
      const lastname = form.lastname.value;
      const email = form.email.value;
      const password = form.password.value;

      instance.post(`/students/?id=${id}&firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}`)
        .then((response) => {
          try {
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        });
    });
  }

  render() {
    this.el.innerHTML = `
      <div class="container container-login pt-5">
        <h1>Register</h1>
        <form id="form">
          <div class="mb-3">
            <label for="firstname" class="form-label">Firstname</label>
            <input type="text" class="form-control" id="firstname">
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Lastname</label>
            <input type="text" class="form-control" id="lastname">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
        <br>
        <p>Vous avez déjà un compte ? <a href="/">Se connecter</a></p>
      </div>
    `;
  }

  run() {
    this.render();
    const form = document.querySelector('#form');
    this.onHandleSubmit(form);
  }
};

export default Register;

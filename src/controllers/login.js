// Depdencies
import axios from 'axios';

const Login = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  onHandleSubmit(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const instance = axios.create({
        baseURL: 'https://p378f02lt5.execute-api.eu-west-3.amazonaws.com/students-B3-melun/',
        headers: {
          'x-api-key': 'YUx93aI9qF2Qk2IQt9ZzI68A7JlHRr059ZUjaJZs'
        }
      });

      instance.get(`/students/?email=${form.email.value}`)
        .then((response) => {
          try {
            const datas = response.data[0];
            if (form.password.value === datas.password) {
              document.location.href = `student?email=${form.email.value}`;
            } else {
              const passFeedback = document.querySelector('#passFeedback');
              passFeedback.style.display = 'block';
            }
          } catch (error) {
            const emailFeedback = document.querySelector('#emailFeedback');
            emailFeedback.style.display = 'block';
          }
        });
    });
  }

  render() {
    this.el.innerHTML = `
      <div class="container container-login pt-5">
        <h1>Login</h1>
        <form id="form">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailFeedback" class="invalid-feedback">
              Bad email !
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
            <div id="passFeedback" class="invalid-feedback">
              Bad password !
            </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
        <br>
        <p>Vous n'avez pas de compte ? <a href="/register">S'inscrire</a></p>
      </div>
    `;
  }

  run() {
    this.render();
    const form = document.querySelector('#form');
    this.onHandleSubmit(form);
  }
};

export default Login;

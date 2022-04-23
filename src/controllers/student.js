// Depdencies
import axios from 'axios';

const Student = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  render() {
    const instance = axios.create({
      baseURL: 'https://p378f02lt5.execute-api.eu-west-3.amazonaws.com/students-B3-melun/',
      headers: {
        'x-api-key': 'YUx93aI9qF2Qk2IQt9ZzI68A7JlHRr059ZUjaJZs'
      }
    });

    const url = document.location.href;
    const urlObj = new URL(url);
    const email = urlObj.searchParams.get('email');

    instance.get(`/students/?email=${email}`)
      .then((response) => {
        const datas = response.data[0];
        const display = `
          <div class="container pt-5 d-flex" style="justify-content: center;">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${datas.picture}" class="img-fluid rounded-start" alt="picture" style="height: 100%;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${datas.firstname} ${datas.lastname} <strong>#${datas.id}</strong></h5>
                    <p class="card-text">
                      <strong>Email:</strong> ${datas.email}<br>
                      <strong>Age:</strong> ${datas.age}<br>
                      <strong>Gender:</strong> ${datas.gender}<br>
                      <strong>Promo:</strong> ${datas.promo}<br>
                      <strong>Spécialité:</strong> ${datas.speciality}<br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        this.el.innerHTML = display;
      });
  }

  run() {
    this.render();
  }
};

export default Student;

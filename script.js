
const apiUrl = "https://randomuser.me/api/?results=20";
const listElement = document.getElementById('list');


let userList = []

const fetchUsers = () =>{
    fetch(apiUrl)
    .then((response)=> {
        return response.json()
    })
    .then((data) =>{

        userList= data.results;
        display(data.results);

    })
    .catch((error) =>{
        console.log(error);
    });

};

fetchUsers();

const display = (users) => {
    console.log(users);
    let str = "";

  users.map((user, i) =>{
    str += `<div class="card shadow p-2 rounded" style="width: 18rem;">
    <img src="${user.picture.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
      <p class="card-text"> 
      <ul class="list-unstyled">
    <li> <i class="fa-solid fa-phone"></i>  ${user.phone}</li>
    <li> <i class="fa-solid fa-envelope"></i>  ${user.email}</li>
    <li> <i class="fa-solid fa-calendar-days"></i>  ${user.dob.date.substr(0, 10)}</li>
    <li> <i class="fa-solid fa-location-dot"></i> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}, ${user.location.postcode}</li>
</ul>
      </p>
    </div>
  </div>`;
  })

  listElement.innerHTML = str;

  document.getElementById("user-count").innerText = users.length;
};



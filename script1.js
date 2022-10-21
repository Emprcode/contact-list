//  create UI
// call api to fetch 20 random user

const apiUrl = "https://randomuser.me/api/?results=20";

let userList = [];

const listElement = document.querySelector("#list");

const fetchUsers = (query) => {

    const url = query? apiUrl + "&" + query : apiUrl;
    fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data)=>{
        // console.log(data.results);

        userList = data.results;
        display(data.results);
    })
};

fetchUsers();



// loop through the user array and display on screen

const display = (users) => {
    console.log(users);
    let str = "";

  users?.map((user, i) =>{
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



// use search functionality to search their name

const handleOnSearch = (e) => {
    const value = e.value

    const filteredUser = userList.filter((user, i) =>{
        const name = user.name.first + user.name.last;
        return name.toLowerCase().includes(value.toLowerCase());

    });
    display(filteredUser);
}



// have filter to fetch users based on gender

const handleOnchange = (e) =>{
   const value = e.value

    const query = value? "gender=" + value : "";
      fetchUsers(query);
}
fetch('https://myapi-yi3a.onrender.com')
    .then(response => response.json())
    .then(json => {
        // console.log(json)

        json.forEach(element => {
           let students = document.getElementById('students');
         /*  let name = document.getElementById('name');
           let sex = document.getElementById('sex');
            let age = document.getElementById('age');
            let photo = document.getElementById('photo');
            let description = document.getElementById('description');

            name.innerHTML = element.name;
            sex.innerHTML = element.sex;
            age.innerHTML = element.age;
            photo.src = element.photo;
            description.innerHTML = element.description;*/
           

            let content= ` <div class="student-card">
            <div class="student-card-text">
                <h3>${element.name}</h3>
                <h5><span class="age">${element.age}</span> - <span class="sex">${element.sex}</span></h5>
                <p class="description">${element.description}</p>
                <a href="#" class="btn">More informations</a>
            </div>
            <div class="student-card-photo">
                <img src="${element.photo}" alt="">
            </div>
        </div>  `;
        let e = document.createElement('div');
        e.innerHTML=content;
        students.appendChild(e);


             
        });
    })
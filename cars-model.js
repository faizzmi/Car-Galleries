// Fetch the data from data.json
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {


        const carGallery = document.getElementById("car-gallery");
        const template = document.getElementById("car-card-template").content;

        data.cars.forEach(car => {
            const card = template.cloneNode(true);

            card.querySelector(".car-image").src = car.img;
            card.querySelector(".car-image").alt = `${car.brand} ${car.car_name}'s picture`;
            card.querySelector(".car-name").textContent = `${car.brand}`;
            card.querySelector(".type").textContent = car.engine.type;
            card.querySelector(".displacement").textContent = car.engine.displacement;
            card.querySelector(".configuration").textContent = car.engine.configuration;
            card.querySelector(".power").textContent = car.performance.power;
            card.querySelector(".time").textContent = car.performance.acceleration;
            card.querySelector(".mph").textContent = car.performance.top_speed.mph;
            card.querySelector(".kmh").textContent = car.performance.top_speed.kmh;
            card.querySelector(".series").textContent = car.car_name;
            card.querySelector(".year").textContent = car.year;
            card.querySelector(".country").alt = `${car.country.name}'s flag`;
            card.querySelector(".country").src = car.country.flag;

            carGallery.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching the data:", error);
    });

const requestURL = '/json/pizzas.json';

async function fetchPizzasJson() {
    const response = await fetch(requestURL);
    return await response.json();
}

fetchPizzasJson().then(pizza => {
    for (let index = 0; index < pizza.pizzas.length; index++) {
        let price = pizza.pizzas[index].price;
        let pizzaName = pizza.pizzas[index].name;
        let image = pizza.pizzas[index].image;
        let ingredients = pizza.pizzas[index].ingredients;

        pizzaSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src=${image} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${pizzaName}</h5>
                <p class="card-text">${ingredients}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${price} euros</li>
                <li class="list-group-item"></li>
                <li class="list-group-item"></li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link"></a>
                <a href="#" class="card-link"></a>
            </div>
        </div>`;
    }
});
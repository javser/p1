const container = document.querySelector('.container');
const coffees = [
  {
    name: 'Perspiciatis',
    image: 'https://media.giphy.com/media/3o6ZtlGkjeschymLNm/source.gif',
  },
];
const showCoffees = () => {
  let output = '';
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCoffees);

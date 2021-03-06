function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price, alt } = data;
  const picture = `./assets/photographers/PhotographersID/${portrait}`;

  function getPhotographerDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_card");
    $wrapper.classList.add(id);

    const photograph = `
    <a href="./photographer.html?id=${id}" tabindex="0">
      <div class="photographer_img">
        <img src="${picture}" alt="">
        <h2>${name}</h2>
      </div>
    </a>
    <div class="photographer_info" tabindex="0">
      <p class="city">${city + ", " + country}</p>
      <p class="tagline">${tagline}</p>
      <p class="price">${price + "&euro;" + "/jour"}</p>
    </div>
    `;

    $wrapper.innerHTML = photograph;

    return $wrapper;
  }
  return {
    id,
    name,
    portrait,
    city,
    country,
    tagline,
    price,
    alt,
    getPhotographerDOM,
  };
}

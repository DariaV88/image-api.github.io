const searchBtn = document.querySelector('.search__btn');
const search = document.getElementById('search');
const galleryContainer = document.querySelector('.gallery-container');

document.addEventListener('DOMContentLoaded', () => {
  search.focus();
  getFoto('spring');
});

searchBtn.addEventListener('click', () => {
  const value = search.value;
  document.querySelectorAll('.img').forEach((im) => im.remove());
  getFoto(value);
});

function getFoto(value) {
  const url = `https://api.unsplash.com/search/photos?page=1&per_page=15&orientation=landscape&extras=url_m&query=${value}&client_id=pNIETdSqBvriGIwcmpLMDlKuPBQWzJRsBC5gnGbtb4I`;
  async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    data.results.map((id) => {
      const imageSrc = id.urls.small;
      const img = `<div class="img" style="background-image: url(${imageSrc})">`;
      galleryContainer.insertAdjacentHTML('beforeend', img);
    });
  }
  getData();
}

document.onkeydown = (e) => {
  if (e.which == 13) {
    console.log('j');
    searchBtn.click();
  }
};

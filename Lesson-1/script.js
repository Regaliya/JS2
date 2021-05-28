const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) => {
  return `<div class="goods-item">
  <img class="goods-img" src="img/photo.png" alt="photo">
  <h3 class="goods-title">${title}</h3>
  <p class="goods-price">${price}</p>
  <button class="goods-button">Добавить</button>
  </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList;
}


renderGoodsList(goods); 

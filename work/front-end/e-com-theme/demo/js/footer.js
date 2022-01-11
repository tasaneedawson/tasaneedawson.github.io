const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML =`
    <div class="footer-content">
      <img src="img/light-logo.png" class="logo" alt="" />
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">men</li>
          <li><a href="#" class="footer-link">t-shirts</a></li>
          <li><a href="#" class="footer-link">sweatshirts</a></li>
          <li><a href="#" class="footer-link">shirts</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">shoes</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formal</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>  
        <ul class="category">
          <li class="category-title">women</li>
          <li><a href="#" class="footer-link">t-shirts</a></li>
          <li><a href="#" class="footer-link">sweatshirts</a></li>
          <li><a href="#" class="footer-link">shirts</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">shoes</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formal</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>  
      </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus suscipit doloremque quia a perferendis. Fugit soluta obcaecati qui sed ipsum? Modi aperiam ipsum alias illo praesentium vitae similique rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel, numquam reiciendis eveniet quaerat rem tempore libero quas autem praesentium enim exercitationem. Iste perferendis cum, harum fugit amet natus excepturi.</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
      </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>

  
  
  `;
}

createFooter();
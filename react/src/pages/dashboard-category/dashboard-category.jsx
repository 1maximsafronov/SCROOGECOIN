import DashboardNav from "../../components/dashboard-nav/dashboard-nav";


const DaashboardCategory = () => {

  return (
    <div className="dashboard">
      <DashboardNav activeItem="category" />
      <div className="dashboard__content">
        <div className="dashboard__wrapper">
          <div className="dashboard-category">
            <div className="dashboard-category__wrapper">
              <ul className="dashboard-category__list category-list">
                <li className="category-list__item" title="Продукты">
                  <img className="category-list__icon" src="img/category-icons/icon-cart.svg" alt="" />
                  <span className="category-list__name">Продукты</span>
                </li>
                <li className="category-list__item" title="Продукты">
                  <img className="category-list__icon" src="img/category-icons/icon-car.svg" alt="" />
                  <span className="category-list__name">Продукты</span>
                </li>
                <li className="category-list__item" title="Продукты">
                  <img className="category-list__icon" src="img/category-icons/icon-health.svg" alt="" />
                  <span className="category-list__name">Продукты</span>
                </li>
                <li className="category-list__item" title="Продукты">
                  <img className="category-list__icon" src="img/category-icons/icon-clothes.svg" alt="" />
                  <span className="category-list__name">Продукты</span>
                </li>
                <li className="category-list__item" title="Продукты">
                  <img className="category-list__icon" src="img/category-icons/icon-fun.svg" alt="" />
                  <span className="category-list__name">Продукты</span>
                </li>
                <li className="category-list__item" title="Продукты">
                  <img className="category-list__icon" src="img/category-icons/icon-home.svg" alt="" />
                  <span className="category-list__name">Продукты</span>
                </li>
                <li className="category-list__item" title="Продукты">
                </li>
                <li className="category-list__item" title="Продукты">
                </li>
                <li className="category-list__item" title="Продукты">
                </li>
                <li className="category-list__item" title="Продукты">
                </li>
                <li className="category-list__item" title="Продукты">
                </li>
                <li className="category-list__item" title="Продукты">
                </li>
              </ul>
              <a className="dashboard-category__button" href="dashboard-category-modal.html">
                Добавить категорию
              </a>
              <button className="dashboard-category__delete-button">
                Удалить категорию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaashboardCategory;

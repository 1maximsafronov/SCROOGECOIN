import DashboardNav from "../../components/dashboard-nav/dashboard-nav";


const DashboardBudget = () => {

  return (
    <div className="dashboard">
      <DashboardNav activeItem="budget" />
      <div className="dashboard__content">
        <div className="dashboard__wrapper">
          <div className="dashboard-budget">
            <div className="dashboard-budget__wrapper">
              <p className="dashboard-budget__total-amount">150 000</p>
              <div className="dashboard-budget__controls">
                <a className="dashboard-budget__controls-button" href="dashboard-budget-incom-modal.html">
                  Добавить доход
                </a>
                <a className="dashboard-budget__controls-button dashboard-budget__controls-button--orange" href="dashboard-budget-expenses-modal.html">
                  Добавить расходы
                </a>
              </div>

              <div className="dashboard-budget__histoy">
                <ul className="dashboard-budget__history-list">
                  <li className="dashboard-budget__history-item">
                    <span className="dashboard-budget__history-icon"></span>
                    <p className="dashboard-budget__history__name">
                      Стипендия
                    </p>
                    <p className="dashboard-budget__history-amount">
                      +5600 P
                    </p>
                  </li>
                  <li className="dashboard-budget__history-item">
                    <img className="dashboard-budget__history-icon" src="img/category-icons/icon-cart.svg" alt="" />
                    <p className="dashboard-budget__history__name">
                      Продукты
                    </p>
                    <p className="dashboard-budget__history-amount">
                      -430 P
                    </p>
                  </li>
                  <li className="dashboard-budget__history-item">
                    <img className="dashboard-budget__history-icon" src="img/category-icons/icon-fun.svg" alt="" />
                    <p className="dashboard-budget__history__name">
                      Развлечения
                    </p>
                    <p className="dashboard-budget__history-amount">
                      -1290 P
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardBudget;

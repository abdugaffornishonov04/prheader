import { Fragment, useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [headerResListShow, setheaderResListShow] = useState(false);

  const changeLanguage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLanguage((isTrue) => !isTrue);
      setIsLoading(false);
    }, 3000);
  };

  const openHeaderResponsiveList = () => {
    setheaderResListShow((isTrue) => !isTrue);
  };

  const closeHeaderResList = () => {
    setheaderResListShow(false)
  }

  return (
    <Fragment>
      <header className="header">
        <a href="/" className="header-logo">
          Logo
        </a>
        <nav>
          <ul className="header-list">
            <li>
              <a href="#">{language ? "О нас" : "Biz haqimizda"}</a>
            </li>
            <li>
              <a href="#">{language ? "Услуги" : "Xizmatlar"}</a>
            </li>
            <li>
              <a href="#">{language ? "Наши клиенты" : "Bizning Mijozlar"}</a>
            </li>
            <li>
              <a href="#">{language ? "Контакты" : "Bog'lanish"}</a>
            </li>
          </ul>
          <ul
            className={
              headerResListShow
                ? "header-list-on-responsive"
                : "header-list-on-responsive-false"
            }
          >
            <div className="hor-wrapper">
              <li>
                <a href="#">{language ? "О нас" : "Biz haqimizda"}</a>
              </li>
              <li>
                <a href="#">{language ? "Услуги" : "Xizmatlar"}</a>
              </li>
              <li>
                <a href="#">{language ? "Наши клиенты" : "Bizning Mijozlar"}</a>
              </li>
              <li>
                <a href="#">{language ? "Контакты" : "Bog'lanish"}</a>
              </li>

              <a href="tel:+998555187007" className="header-make-call">
                <img src="/public/phone-call.png" alt="call" />
                {language ? "Позвони мне" : "Telefon qiling"}
              </a>
              <div className="header-languages-dropdown">
                <button onClick={changeLanguage}>
                  <img
                    src={
                      language ? "/public/uzbekistan.png" : "/public/russia.png"
                    }
                    alt=""
                  />
                </button>
                {language ? "Языки" : "Tillar"}
              </div>

              <button onClick={closeHeaderResList} className="hor-close-button">
                <img src="/public/close.png" alt="close" />
              </button>
            </div>
          </ul>
          <div className="header-end-wrapper">
            <a href="tel:+998555187007" className="header-make-call">
              <img src="/public/phone-call.png" alt="call" />
            </a>
            <div className="header-languages-dropdown">
              <button onClick={changeLanguage}>
                <img
                  src={
                    language ? "/public/uzbekistan.png" : "/public/russia.png"
                  }
                  alt=""
                />
              </button>
            </div>
          </div>
        </nav>

        <button onClick={openHeaderResponsiveList} className="header-hamburger">
          <img src="/public/menu.png" alt="menu" />
        </button>
      </header>

      <div className={isLoading ? "loading-true" : "loading-false"}>
        <img
          src={language ? "/public/uzbekistan.png" : "/public/russia.png"}
          alt="loader image"
        />
      </div>
    </Fragment>
  );
};

export default Header;

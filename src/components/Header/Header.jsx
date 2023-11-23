import { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [headerResListShow, setheaderResListShow] = useState(false);
  const [languageDropDown, setLanguageDropDown] = useState(false);

  const changeLanguage = (e) => {
    console.log(e);
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
    setheaderResListShow(false);
  };

  useEffect(() => {
    const allAnchorTags = document.querySelectorAll(".header-list li a");

    const handleClick = (clickedElement) => {
      clickedElement.classList.add("a-style");

      allAnchorTags.forEach((el) => {
        if (el !== clickedElement) {
          el.classList.remove("a-style");
        }
      });
    };

    allAnchorTags.forEach((el) => {
      el.addEventListener("click", () => handleClick(el));
    });

    return () => {
      allAnchorTags.forEach((el) => {
        el.removeEventListener("click", () => handleClick(el));
      });
    };
  }, []);

  const showLangDropDown = () => {
    setLanguageDropDown((isTrue) => !isTrue);
  };

  return (
    <Fragment>
      <header className="header">
        <a href="/" className="header-logo">
          <img src="/mainlogo.png" alt="" />
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
                <img src="/phone-call.png" alt="call" />
                {language ? "Позвони мне" : "Telefon qiling"}
              </a>
              <div className="header-languages-dropdown">
                <button onClick={changeLanguage}>
                  <img
                    src={language ? "/uzbekistan.png" : "/russia.png"}
                    alt=""
                  />
                </button>
                {language ? "Языки" : "Tillar"}
              </div>

              <button onClick={closeHeaderResList} className="hor-close-button">
                <img src="/close.png" alt="close" />
              </button>
            </div>
          </ul>
          <div className="header-end-wrapper">
            <a href="tel:+998555187007" className="header-make-call">
              <p>+998555187007</p>
              <img src="/header-phonecch.png" alt="call" />
            </a>
            <div
              onClick={showLangDropDown}
              className="header-languages-dropdown"
            >
              <p>{language ? "Язык" : "Tillar"}</p>
              <img src="/world.png" alt="" />

              <div
                className={
                  languageDropDown ? "hld-dropdown-shown" : "hld-dropdown-none"
                }
              >
                <button
                  onClick={changeLanguage}
                  className="hld-dropdown-russian"
                >
                  <p>Russian</p>
                  <img src="/russia.png" alt="" />
                </button>
                <button onClick={changeLanguage} className="hld-dropdown-uzbek">
                  <p>Uzbek</p>
                  <img src="/uzbekistan.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <button onClick={openHeaderResponsiveList} className="header-hamburger">
          <img src="/menu.png" alt="menu" />
        </button>
      </header>

      <div className={isLoading ? "loading-true" : "loading-false"}>
        <img
          src={language ? "/uzbekistan.png" : "/russia.png"}
          alt="loader image"
        />
      </div>
    </Fragment>
  );
};

export default Header;

// image direction changed
// on my way to make languages select

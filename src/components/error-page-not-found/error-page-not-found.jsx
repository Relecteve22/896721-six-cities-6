import React from "react";
import {Link} from "react-router-dom";

const ErrorPageNotFound = () => {
  return (
    <section className="error">
      <h1 className="error__title">Страница не найдена!</h1>
      <Link className="error__link" to="/">
        <span>Перейти на главную страницу</span>
      </Link>
    </section>
  );
};

export default ErrorPageNotFound;

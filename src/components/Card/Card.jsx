import s from "./Card.module.scss";

export const Card = () => (
  <div>
    <img src="/img/chair.png" alt="Item image" />
    <div className={s.details}>
      <span className={s.title}>Chair</span>
      <span className={s.preis}>500 €</span>
    </div>
    <button className={s.button} type="submit">
      To cart
    </button>
  </div>
);

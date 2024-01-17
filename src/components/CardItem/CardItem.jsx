//import { Container } from "../../views/Container";
import { Card } from "../Card/Card";
import s from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={s.card}>
    <Card />
  </article>
);

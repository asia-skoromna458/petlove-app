import css from "./title.module.css";
interface TitleProps {
  children: React.ReactNode;
}
export default function Title({ children }: TitleProps) {
  return <h2 className={css.container}>{children}</h2>;
}

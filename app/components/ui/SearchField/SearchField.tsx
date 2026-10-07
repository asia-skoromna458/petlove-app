import Image from "next/image";
import css from "./SearchField.module.css";
export default function SearchField() {
  return (
    <>
      <label className={css.label}>
        <input type="text" placeholder="Search" className={css.searchInput} />
        <Image
          src="/icon/search-icon.svg"
          alt="Search icon"
          width={18}
          height={18}
          className={css.searchIcon}
        />
      </label>
    </>
  );
}

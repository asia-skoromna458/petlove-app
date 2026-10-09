import Image from "next/image";
import css from "./SearchField.module.css";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
export default function SearchField({
  value,
  onChange,
  className,
}: SearchFieldProps) {
  return (
    <>
      <label className={`${css.label} ${className ?? ""}`}>
        <input
          type="text"
          placeholder="Search"
          className={css.searchInput}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
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

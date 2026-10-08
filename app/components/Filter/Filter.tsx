"use client";
import Image from "next/image";
import Select from "react-select";
import SearchField from "../ui/SearchField/SearchField";
import css from "./Filter.module.css";

const CategoryOptions = [
  { value: "", label: "Show all" },
  { value: "sell", label: "Sell" },
  { value: "free", label: "Free" },
  { value: "lost", label: "Lost" },
  { value: "found", label: "Found" },
];
const GenderOptions = [
  { value: "", label: "Show all" },
  { value: "unknown", label: "Unknown" },
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "multiple", label: "Multiple" },
];
const TypeOptions = [
  { value: "", label: "Show all" },
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "monkey", label: "Monkey" },
  { value: "bird", label: "Bird" },
  { value: "snake", label: "Snake" },
  { value: "turtle", label: "Turtle" },
  { value: "lizard", label: "Lizard" },
  { value: "frog", label: "Frog" },
  { value: "fish", label: "Fish" },
  { value: "ants", label: "Ants" },
  { value: "bees", label: "Bees" },
  { value: "butterfly", label: "Butterfly" },
  { value: "spider", label: "Spider" },
  { value: "scorpion", label: "Scorpion" },
];

const selectClassNames = {
  control: () => css.control,
  menu: () => css.menu,
  menuList: () => css.menuList,
  option: ({ isSelected }: { isSelected: boolean }) =>
    isSelected ? css.optionActive : css.option,
};

const selectComponents = {
  IndicatorSeparator: null,
  DropdownIndicator: () => (
    <Image src="/icon/selecct-icon.svg" alt="" width={11} height={6} />
  ),
};
const locationComponent = {
  IndicatorSeparator: null,
  DropdownIndicator: () => (
    <Image src="/icon/search-icon.svg" alt="search" width={18} height={18} />
  ),
};

export default function Filter() {
  return (
    <div className={css.container}>
      <SearchField />
      <div className={css.selectRow}>
        <Select
          unstyled
          options={CategoryOptions}
          placeholder="Category"
          instanceId="category-select"
          className={`${css.select} ${css.smallSelect}`}
          classNames={selectClassNames}
          components={selectComponents}
        />
        <Select
          unstyled
          options={GenderOptions}
          placeholder="By gender"
          instanceId="gender-select"
          className={`${css.select} ${css.smallSelect} ${css.genderSelect}`}
          classNames={selectClassNames}
          components={selectComponents}
        />
      </div>
      <Select
        unstyled
        options={TypeOptions}
        placeholder="By type"
        instanceId="type-select"
        className={`${css.select} ${css.bigSelect} ${css.selectByType}`}
        classNames={selectClassNames}
        components={selectComponents}
      />
      <Select
        unstyled
        placeholder="Location"
        className={`${css.select} ${css.bigSelect} ${css.selectLocation}`}
        classNames={selectClassNames}
        components={locationComponent}
      />
      <hr className={css.divider} />
      <ul className={css.sortList}>
        <li className={css.sortItem}>
          <input type="radio" name="sort" />
          <p>Popular</p>
          <Image
            src="/icon/close_icon.svg"
            alt="cheked"
            width={18}
            height={18}
            className={css.closeIcon}
          />
        </li>
        <li className={css.sortItem}>
          <input type="radio" name="sort" />
          <p>Unpopular</p>
          <Image
            src="/icon/close_icon.svg"
            alt="cheked"
            width={18}
            height={18}
            className={css.closeIcon}
          />
        </li>
        <li className={css.sortItem}>
          <input type="radio" name="sort" />
          <p>Cheap</p>
          <Image
            src="/icon/close_icon.svg"
            alt="cheked"
            width={18}
            height={18}
            className={css.closeIcon}
          />
        </li>
        <li className={css.sortItem}>
          <input type="radio" name="sort" />
          <p>Expensive</p>
          <Image
            src="/icon/close_icon.svg"
            alt="cheked"
            width={18}
            height={18}
            className={css.closeIcon}
          />
        </li>
      </ul>
    </div>
  );
}

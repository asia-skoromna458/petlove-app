"use client";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useState } from "react";
import SearchField from "../ui/SearchField/SearchField";
import css from "./Filter.module.css";
import {
  getNoticeCategories,
  getNoticeSex,
  getNoticeSpecies,
} from "@/app/services/filter";

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

interface FilterProps {
  onFilterChange: (filters: {
    category?: string;
    species?: string;
    sex?: string;
    keyword?: string;
    sortBy?: "popular" | "unpopular" | "cheap" | "expensive";
  }) => void;
}

type SelectOption = {
  value: string;
  label: string;
};

export default function Filter({ onFilterChange }: FilterProps) {
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState<SelectOption[]>([]);
  const [genders, setGenders] = useState<SelectOption[]>([]);
  const [species, setSpecies] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [categoriesData, gendersData, speciesData] = await Promise.all([
          getNoticeCategories(),
          getNoticeSex(),
          getNoticeSpecies(),
        ]);

        setCategories([
          { value: "", label: "Show all" },
          ...categoriesData.map((value: string) => ({
            value,
            label: value.charAt(0).toUpperCase() + value.slice(1),
          })),
        ]);

        setGenders([
          { value: "", label: "Show all" },
          ...gendersData.map((value: string) => ({
            value,
            label: value.charAt(0).toUpperCase() + value.slice(1),
          })),
        ]);

        setSpecies([
          { value: "", label: "Show all" },
          ...speciesData.map((value: string) => ({
            value,
            label: value.charAt(0).toUpperCase() + value.slice(1),
          })),
        ]);
      } catch (error) {
        console.error("Failed to load filter options:", error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <div className={css.container}>
      <SearchField
        value={keyword}
        onChange={(value) => {
          setKeyword(value);
          onFilterChange({ keyword: value });
        }}
      />
      <div className={css.selectRow}>
        <Select
          unstyled
          options={categories}
          placeholder="Category"
          instanceId="category-select"
          className={`${css.select} ${css.smallSelect}`}
          classNames={selectClassNames}
          components={selectComponents}
          onChange={(option) => {
            onFilterChange({ category: option?.value || undefined });
          }}
        />
        <Select
          unstyled
          options={genders}
          placeholder="By gender"
          instanceId="gender-select"
          className={`${css.select} ${css.smallSelect} ${css.genderSelect}`}
          classNames={selectClassNames}
          components={selectComponents}
          onChange={(option) => {
            onFilterChange({ sex: option?.value || undefined });
          }}
        />
      </div>
      <Select
        unstyled
        options={species}
        placeholder="By type"
        instanceId="type-select"
        className={`${css.select} ${css.bigSelect} ${css.selectByType}`}
        classNames={selectClassNames}
        components={selectComponents}
        onChange={(option) => {
          onFilterChange({ species: option?.value || undefined });
        }}
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
        {[
          { label: "Popular", value: "popular" },
          { label: "Unpopular", value: "unpopular" },
          { label: "Cheap", value: "cheap" },
          { label: "Expensive", value: "expensive" },
        ].map(({ label, value }) => (
          <li className={css.sortItem} key={value}>
            <input
              type="radio"
              name="sort"
              value={value}
              onChange={() =>
                onFilterChange({
                  sortBy: value as
                    | "popular"
                    | "unpopular"
                    | "cheap"
                    | "expensive",
                })
              }
            />
            <p>{label}</p>
            <Image
              src="/icon/close_icon.svg"
              alt="close"
              width={18}
              height={18}
              className={css.closeIcon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { Data } from "react-data-grid-addons";

// Formatters to make the data in the grid look a lil prettier
const priceFormatter = price => {
  return price.value ? (
    <p>${price.value.toFixed(2).toLocaleString()}</p>
  ) : (
    <p className="text-center">-</p>
  );
};

const rankFormatter = rank => {
  return <p>#{Number(rank.value).toLocaleString()}</p>;
};

const numbFormatter = number => {
  return number.value ? (
    <p>{number.value.toLocaleString()}</p>
  ) : (
    <p className="text-center">-</p>
  );
};

const dateFormatter = date => {
  return date.value ? <p>{date.value}</p> : <p className="text-center">-</p>;
};

// Basic Row Sorter - Works like super simple and probably needs to be better
export const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

const selectors = Data.Selectors;

export const handleFilterChange = filter => filters => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

export const getRows = (rows, filters) => {
  return selectors.getRows({ rows, filters });
};

let default_options = {
  resizable: true,
  sortable: true,
  filterable: true
};

export let columns = [
  { key: "id", name: "ID", width: 40 },
  { key: "asin", name: "ASIN", width: 130 },
  { key: "title", name: "Product Title", width: 300 },
  { key: "brand", name: "Brand Name", width: 180 },
  { key: "price", name: "Price", formatter: priceFormatter, width: 80 },
  { key: "category", name: "Category", width: 150 },
  { key: "rank", name: "Rank", formatter: rankFormatter, width: 80 },
  {
    key: "est_sales",
    name: "Est. Sales",
    formatter: numbFormatter,
    width: 100
  },
  {
    key: "est_rev",
    name: "Est. Revenue",
    formatter: priceFormatter,
    width: 110
  },
  { key: "review_count", name: "Reviews", formatter: numbFormatter, width: 80 },
  { key: "review_score", name: "Rating", formatter: numbFormatter, width: 80 },
  {
    key: "date_listed",
    name: "Date Listed",
    formatter: dateFormatter,
    width: 170
  }
].map(el => ({ ...el, ...default_options }));

export const filters = {
  daily_units_range: {
    name: "daily_units_range",
    title: "Average Units Sold per Day",
    range: {min: 0, max: 100},
    value: { min: 0, max: 100 },
    format: (value) => (`${value.toLocaleString()}/day`)
  },
  price_range: {
    name: "price_range",
    title: "Average Price",
    range: {min: 0, max: 1000},
    value: { min: 0, max: 1000 },
    format: (value) => (`$${value.toLocaleString()}`)
  },
  review_count_range: {
    name: "review_count_range",
    title: "Average Number of Reviews",
    range: {min: 0, max: 500},
    value: { min: 0, max: 500 },
    format: (value) => (`${value.toLocaleString()}`)
  },
  bsr_range: {
    name: "bsr_range",
    title: "Average Rank",
    range: {min: 0, max: 500000},
    value: { min: 0, max: 500000 },
    format: (value) => (`#${value.toLocaleString()}`)
  }
};

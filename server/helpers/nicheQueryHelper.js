function nicheQuery(query) {
  let exclude_keywords = query.exclude_keywords.length > 0 ? `AND NOT text_search_columns @@ to_tsquery('${query.exclude_keywords.split(' ').join(' & ')}')` : '';
  let include_keywords = query.include_keywords.length > 0 ? `AND text_search_columns @@ to_tsquery('${query.include_keywords.split(' ').join(' & ')}')
  ORDER BY ts_rank_cd(text_search_columns, to_tsquery('${query.include_keywords.split(' ').join(' & ')}')) DESC` : '';
  let row_number = query.include_keywords.length > 0 ? `ROW_NUMBER () OVER (ORDER BY ts_rank_cd(text_search_columns, to_tsquery('${query.include_keywords.split(' ').join(' & ')}')) DESC) id` :
  `ROW_NUMBER () OVER (ORDER BY title DESC) id`;

  let select_query = `
        SELECT ${row_number},
        asin, title, brand, review_count, review_score, price, category, rank, est_sales, date_listed, est_rev, minimum_range, maximum_range, minimum_sales, maximum_sales 
        FROM expanded_product_information
        WHERE category IN (SELECT DISTINCT product_cat_name FROM product_cats WHERE product_cat_number = ANY(ARRAY[${query.categories}]))
        AND rank BETWEEN ${query.bsr_range_min} AND ${query.bsr_range_max}
        AND est_sales BETWEEN ${query.daily_units_range_min} AND ${query.daily_units_range_max}
        AND price BETWEEN ${query.price_range_min} AND ${query.price_range_max}
        AND review_count BETWEEN ${query.review_count_range_min} AND ${query.review_count_range_max}
        ${exclude_keywords}
        ${include_keywords}
    `;
  return db.many(select_query);
}

module.exports = nicheQuery;

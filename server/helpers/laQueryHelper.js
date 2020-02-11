function laQuery(asin) {
    let select_query = `
    SELECT ROW_NUMBER () OVER (ORDER BY ts_rank_cd(text_search_columns, (SELECT to_tsquery(replace(array_to_string(keyphrases, ' '), ' ', ' | ')) FROM expanded_product_information WHERE asin = '${asin}')) DESC) id, 
    asin, title, brand, review_count, review_score, price, category, rank, est_sales, date_listed, est_rev, minimum_range, maximum_range, minimum_sales, maximum_sales 
    FROM expanded_product_information
    WHERE text_search_columns @@
      (SELECT to_tsquery(replace(array_to_string(keyphrases, ' '), ' ', ' | ')) FROM expanded_product_information WHERE asin = '${asin}')
    ORDER BY ts_rank_cd(text_search_columns, 
      (SELECT to_tsquery(replace(array_to_string(keyphrases, ' '), ' ', ' | ')) FROM expanded_product_information WHERE asin = '${asin}')) DESC
      `;

      return db.many(select_query);
  }
  
module.exports = laQuery;
import React from "react";

function NicheFormCategoriesListing(props) {
  return (
    <div className="niche-cat-checkbox form-check pb-2">
      <label title for={`form_cat_${props.idx}`} className="form-check-label pl-2">
        {props.value}
        <input
          type="checkbox"
          name={`form_cat_${props.idx}`}
          id={`form_cat_${props.idx}`}
          className="form-check-input"
        ></input>
        <span className="niche-cat-checkmark"></span>
      </label>
    </div>
  );
}

export default NicheFormCategoriesListing;

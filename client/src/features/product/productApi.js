export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will bot hard code server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  // filter = {"category": ["smartphone", "laptops", "shoes"]}
  // sort = { _sort:"price", _order="desc"}

  //: on server need to support multi values in filter
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  // console.log(queryString);
  for (let key in sort) {
    queryString += `${key}=${sort}&`;
  }

  return new Promise(async (resolve) => {
    // TODO: we will bot hard code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}

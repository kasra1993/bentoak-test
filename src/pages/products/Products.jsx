import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";

import { useQuery } from "@tanstack/react-query";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.thumbnail || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 100,
  },
  {
    field: "description",
    type: "string",
    headerName: "Description",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "discountPercentage",
    headerName: "DiscountPercentage",
    type: "string",
    width: 100,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
    type: "number",
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 100,
    type: "string",
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
    type: "string",
  },

  {
    field: "stock",
    headerName: "Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((res) => res.json()),
  });
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data.products} />
      )}
    </div>
  );
};

export default Products;

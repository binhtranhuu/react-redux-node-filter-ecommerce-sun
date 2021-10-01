import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./actions/productActions";
import Navbar from "./components/Navbar";
import Paginate from "./components/Pagination";
import ProductList from "./components/Products";
import Sidebar from "./components/Sidebar";
import Sorts from "./components/Sorts";

function App() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const filters = useSelector((state) => state.filters);

  const {
    page,
    filterCategory,
    filterType,
    filterBrand,
    filterRating,
    filterPrice,
    filterName,
    orderBy,
  } = filters;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listProducts({
        page,
        filterCategory,
        filterType,
        filterBrand,
        filterRating,
        filterPrice,
        filterName,
        orderBy,
      })
    );
  }, [
    dispatch,
    page,
    filterCategory,
    filterType,
    filterBrand,
    filterRating,
    filterPrice,
    filterName,
    orderBy,
  ]);

  return (
    <div className="app">
      <Navbar />
      <section className="main">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="content">
          <Sorts />
          <ProductList products={products} />
          <Paginate />
        </div>
      </section>
    </div>
    // <div className="app">
    //   <Navbar />
    //   <section className="main">
    //     <aside className="sidebar">
    //       <Sidebar />
    //     </aside>
    //     <div className="content">
    //       {loading ? (
    //         <div className="loading">
    //           <Spin size="large" tip="Loading..." />
    //         </div>
    //       ) : error ? (
    //         <div>Error: {error}</div>
    //       ) : products.length === 0 ? (
    //         <div>No product found</div>
    //       ) : (
    //         <>
    //           <Sorts productCount={productCount} />
    //           <ProductList products={products} />
    //           <Paginate pagination={pagination} onPagination={setPagination} />
    //         </>
    //       )}
    //     </div>
    //   </section>
    // </div>
  );
}

export default App;

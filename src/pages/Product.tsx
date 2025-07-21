import DialogModal from "@/components/Common/dialog/DialogModal";
import PopOver from "@/components/Common/dialog/DialogModal";
import Delete from "@/components/ui/icon/Delete";
import { Popover } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchApi } from "@/hooks/useFetchApi";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Define an interface for the handler parameters
interface HandleClickParams {
  event: React.MouseEvent<HTMLTableRowElement>;
  data: Product;
}
const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const productApi = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchApi(productApi);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectProduct = (product: Product) => {
    // const isIncluded = selectedProducts.some((item) => item.id === product.id);
    // if (isIncluded) {
    //   setIsSelected(true);
    //   return;
    // }
    setSelectedProducts((prev) => {
      // console.log("prev selected:", prev);
      return [...prev, product];
    });
    setIsSelected(false);
    // console.log("isSelected", isSelected);
    // console.log("setSelectedProduct", product);
  };
  console.log("selectedProducts", selectedProducts);
  const handleRowClick = ({ event, data }: HandleClickParams) => {
    event.preventDefault();
    const clickedVal = event.target;
    console.log("clickedVal", clickedVal);
    if (data) {
      setIsChecked(true);
      console.log("isChecked", isChecked);
      console.log("isChecked data ", data);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (selectedProducts.length > 0) {
      timer = setTimeout(() => {
        setAnimate(true);
      }, 100); // or 10000 as per your need
    } else {
      setAnimate(false);
    }

    return () => clearTimeout(timer);
  }, [selectedProducts]);

  // const handleDeleteProduct = () => {
  //   if (selectedProduct) {
  //     setProducts(
  //       products.filter((product) => product.id !== selectedProduct.id)
  //     );
  //     setSelectedProduct(null);
  //   }
  // };

  if (loading)
    return (
      <div className="item-center min-h-dvh w-full">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="dark:text-white p-5 h-full">
      <div className="flex justify-between">
        <h1 className="text-4xl">Product List</h1>
        {selectedProducts.length > 0 && (
          <>
            <div
              className={`${
                animate ? "animate-down" : " "
              } opacity-0 box-shadow fixed top-0 min-w-[50%] flex justify-between p-5 left-1/2 transition-2 transform -translate-x-1/2 rounded-lg box-shadow bg-white z-10`}
            >
              <h4>
                <b>{selectedProducts.length}</b> items selected
              </h4>
              <Delete className="text-red-600 w-5" />
            </div>
          </>
        )}
      </div>
      <div className="h-full">
        <ScrollArea className="h-full">
          <table border={1} className="w-full">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                <th className="p-2">Item Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const hasData = selectedProducts.some((item) => {
                  return item.id === product.id;
                });
                return (
                  <tr
                    key={product.id}
                    data-list={`tableList-${index}`}
                    onClick={() => {
                      if (hasData) {
                        return;
                      }
                      setSelectedProducts([...selectedProducts, product]);
                    }}
                    className={`${
                      hasData ? "selected" : ""
                    } border-b border-gray-200 dark:border-gray-700 table-list`}
                  >
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        checked={hasData}
                        data-checkbox={`check-${index}`}
                      />
                    </td>
                    <td className="p-2">{product.title}</td>
                    <td className="p-2">{product.category}</td>
                    <td className="p-2">${product.price.toFixed(2)}</td>
                    <td className="p-2 text-center">
                      {/* <button
                        onClick={() => {
                          if (hasData) {
                            return;
                          }
                          setSelectedProducts([...selectedProducts, product]);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                      >
                        Select
                      </button> */}
                      <Link
                        to={`/product/${product.id}`}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ScrollArea>
      </div>

      {/* Delete Confirmation Popup */}
      {/* {selectedProducts && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Delete Product</h2>
            <p className="mb-4">
              Are you sure you want to delete{" "}
              <strong>{selectedProducts.title}</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedProducts(null)}
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProduct}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Product;

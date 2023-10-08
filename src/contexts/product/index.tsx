"use client";

import RatingDialog from "@/components/rating-dialog";
import { Products } from "@/firebase/collections/products";
import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../auth/context";
import { ProductContext } from "./context";
import { ProductContextProp, ProductContextState } from "./types";

function ProductContextProvider(props: ProductContextProp) {
  // let products = new Products();
  const { user } = useContext(AuthContext);
  const [state, setState] = useState<ProductContextState>({
    products: [],
    usersCartProducts: [],
    usersLikedProducts: [],
  });

  let [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  let [productsNeededReview, setProductNeededReview] = useState<AppProduct[]>(
    []
  );

  useEffect(() => {
    loadAllProduct();
    getProducts();
  }, [state, loadingProducts]);

  function getProducts() {
    let productNeededReview = state.products.filter((products) => {
      return user?.purchased?.some(
        (pro) => pro.productId === products.objectId && !pro.isReviewed && pro.dialogCancleCount<5
      );
    });
    setProductNeededReview(productNeededReview);
  }

  function loadAllProduct() {
    let product = new Products();

    product.getUsersAllProducts().then((pro) => {
      setState((pre) => ({ ...pre, products: pro ?? [] }));
      setLoadingProducts(false);
    });
  }

  function loadUsersSpecificProduct(userID: string) {
    
  }

  return (
    <ProductContext.Provider
      value={useMemo(() => {
        return {
          state,
          loadAllProduct,
          loadUsersSpecificProduct,
          isProductEmpty: state.products.length < 1,
          isProductLoading: loadingProducts,
        };
      }, [state])}
    >
      {props.children}

      {productsNeededReview.length > 0 && (
        <RatingDialog Products={productsNeededReview} />
      )}
    </ProductContext.Provider>
  );
}
const ProductContextConsumer = ProductContext.Consumer;

export { ProductContextConsumer, ProductContextProvider };

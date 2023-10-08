"use client";
import { User } from "firebase/auth";
import React from "react";
import { AuthContextType } from "./types";

export const ProductContext = React.createContext<AuthContextType>({
  loadUsersSpecificProduct: (userID: string) => [],
  loadAllProduct: () => [],
  isProductEmpty: false,
  isProductLoading: false,
  state: {
    products: [],
    usersCartProducts: [],
    usersLikedProducts: [],
  },
});

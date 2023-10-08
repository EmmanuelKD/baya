"use client";
import {
  DocumentData,
  QuerySnapshot,
  onSnapshot,
  where,
} from "firebase/firestore";
import _ from "lodash";
import { app } from "../config";
import { F_DB } from "../database";

export class Products extends F_DB {
  constructor() {
    super(app, "products-reviews");
  }

  async addListener(onDone: (snapshot: QuerySnapshot<DocumentData>) => void) {
    let docRef = this.getCollectionRef();
    if (docRef) {
      onSnapshot(docRef, onDone);
    }
  }

  async saveProductReview(data: ProductReviewType) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.addToDocumentCollection({
      docId: data.objectId,
      data: _data,
    });
  }

  async getProductReviewByProductId(productId?: string) {
    return this.getDocumentDataByCondition({
      conditions: productId ? [where("productId", "==", productId)] : [],
    }).then((snap) => {
      if (!snap?.empty) {
        return snap?.docs.map((doc) => {
          return doc.data() as ProductReviewType;
        })[0];
      } else {
        return null;
      }
    });
  }

 
}

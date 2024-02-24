import { ProductUpdateManyWithoutReviewsInput } from "./ProductUpdateManyWithoutReviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  products?: ProductUpdateManyWithoutReviewsInput;
  rating?: number;
  user?: UserWhereUniqueInput;
};

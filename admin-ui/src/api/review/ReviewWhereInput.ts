import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  rating?: IntFilter;
  user?: UserWhereUniqueInput;
};

import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  paymentintent?: string | null;
  paymentStatus?: boolean | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};

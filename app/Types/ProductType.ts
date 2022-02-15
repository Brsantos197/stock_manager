import { DateTime } from "luxon";

export default interface ProductType {
    id: number;
    name: string;
    type: string;
    category_id: number;
    created_at: DateTime;
    updated_at: DateTime;
  }
import { DateTime } from "luxon";

export default interface CategoryType {
    id: number;
    name: string;
    created_at: DateTime;
    updated_at: DateTime;
  }
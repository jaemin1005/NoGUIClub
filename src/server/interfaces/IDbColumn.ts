import { IData } from "@shared/interface/IData";

interface IDbColumn extends Pick<IData, "head" | "date"> {
  create_at : Date;
  update_at : Date;
  file_name : string;
  user_id : null | string;
  keywords : string;
}
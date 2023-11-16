import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentLikeWhereInput = {
  comment?: CommentWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

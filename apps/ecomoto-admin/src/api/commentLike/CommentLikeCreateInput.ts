import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentLikeCreateInput = {
  comment?: CommentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

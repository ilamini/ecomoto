import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentLikeUpdateInput = {
  comment?: CommentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

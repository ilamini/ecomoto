import { CommentLikeWhereInput } from "./CommentLikeWhereInput";
import { CommentLikeOrderByInput } from "./CommentLikeOrderByInput";

export type CommentLikeFindManyArgs = {
  where?: CommentLikeWhereInput;
  orderBy?: Array<CommentLikeOrderByInput>;
  skip?: number;
  take?: number;
};

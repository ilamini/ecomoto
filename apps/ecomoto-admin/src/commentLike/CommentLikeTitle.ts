import { CommentLike as TCommentLike } from "../api/commentLike/CommentLike";

export const COMMENTLIKE_TITLE_FIELD = "id";

export const CommentLikeTitle = (record: TCommentLike): string => {
  return record.id?.toString() || String(record.id);
};

import { CommentLike } from "../commentLike/CommentLike";
import { User } from "../user/User";
import { UserFeed } from "../userFeed/UserFeed";

export type Comment = {
  commentLikes?: Array<CommentLike>;
  comments: string | null;
  createdAt: Date;
  creator?: User | null;
  id: string;
  updatedAt: Date;
  userFeed?: UserFeed | null;
};

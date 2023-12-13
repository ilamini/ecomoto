import { CommentLike } from "../commentLike/CommentLike";
import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { JsonValue } from "type-fest";
import { UserFeed } from "../userFeed/UserFeed";

export type User = {
  commentLikes?: Array<CommentLike>;
  comments?: Array<Comment>;
  communities?: Array<Community>;
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userFeeds?: Array<UserFeed>;
  username: string;
  userType?: "Lessee" | "Lessor";
};

import { CommentLike } from "../commentLike/CommentLike";
import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { CommunityFeed } from "../communityFeed/CommunityFeed";
import { FeedLike } from "../feedLike/FeedLike";
import { JsonValue } from "type-fest";

export type User = {
  commentLikes?: Array<CommentLike>;
  comments?: Array<Comment>;
  communities?: Array<Community>;
  communityFeeds?: Array<CommunityFeed>;
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  feedLikes?: Array<FeedLike>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userType?: "Lessee" | "Lessor";
};

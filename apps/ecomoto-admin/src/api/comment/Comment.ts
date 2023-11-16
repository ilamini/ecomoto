import { CommentLike } from "../commentLike/CommentLike";
import { CommunityFeed } from "../communityFeed/CommunityFeed";
import { User } from "../user/User";

export type Comment = {
  commentLikes?: Array<CommentLike>;
  comments: string | null;
  communityFeed?: CommunityFeed | null;
  createdAt: Date;
  creator?: User | null;
  id: string;
  updatedAt: Date;
};

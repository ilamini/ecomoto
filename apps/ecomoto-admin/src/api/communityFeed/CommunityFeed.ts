import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { User } from "../user/User";
import { FeedLike } from "../feedLike/FeedLike";
import { Media } from "../media/Media";

export type CommunityFeed = {
  comments?: Array<Comment>;
  community?: Community | null;
  content: string;
  createdAt: Date;
  creator?: User | null;
  feedLikes?: Array<FeedLike>;
  id: string;
  medias?: Array<Media>;
  updatedAt: Date;
};

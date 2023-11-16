import { CommunityFeed } from "../communityFeed/CommunityFeed";
import { User } from "../user/User";

export type FeedLike = {
  communityFeed?: CommunityFeed | null;
  createdAt: Date;
  id: string;
  likedBy?: User;
  updatedAt: Date;
};

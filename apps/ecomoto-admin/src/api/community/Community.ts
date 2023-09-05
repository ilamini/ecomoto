import { CommunityFeed } from "../communityFeed/CommunityFeed";
import { User } from "../user/User";

export type Community = {
  communityFeeds?: Array<CommunityFeed>;
  communityHeadeImgUrl: string;
  createdAt: Date;
  description: string;
  id: string;
  members?: Array<User>;
  name: string;
  updatedAt: Date;
};

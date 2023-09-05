import { CommunityFeed } from "../communityFeed/CommunityFeed";
import { User } from "../user/User";

export type Comment = {
  comments: string | null;
  communityFeed?: CommunityFeed | null;
  createdAt: Date;
  creator?: User | null;
  id: string;
  updatedAt: Date;
};

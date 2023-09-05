import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { User } from "../user/User";

export type CommunityFeed = {
  comments?: Array<Comment>;
  community?: Community | null;
  content: string;
  createdAt: Date;
  creator?: User | null;
  id: string;
  updatedAt: Date;
};

import { Comment } from "../comment/Comment";
import { User } from "../user/User";
import { Media } from "../media/Media";

export type UserFeed = {
  comments?: Array<Comment>;
  content: string;
  createdAt: Date;
  creator?: User | null;
  id: string;
  media?: Array<Media>;
  updatedAt: Date;
};

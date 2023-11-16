import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type CommentLike = {
  comment?: Comment | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

import { CommentLikeUpdateManyWithoutUsersInput } from "./CommentLikeUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserFeedUpdateManyWithoutUsersInput } from "./UserFeedUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  commentLikes?: CommentLikeUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  communities?: CommunityUpdateManyWithoutUsersInput;
  deletedAt?: Date | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userFeeds?: UserFeedUpdateManyWithoutUsersInput;
  username?: string;
  userType?: "Lessee" | "Lessor";
};

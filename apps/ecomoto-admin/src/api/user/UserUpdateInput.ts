import { CommentLikeUpdateManyWithoutUsersInput } from "./CommentLikeUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { CommunityFeedUpdateManyWithoutUsersInput } from "./CommunityFeedUpdateManyWithoutUsersInput";
import { FeedLikeUpdateManyWithoutUsersInput } from "./FeedLikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  commentLikes?: CommentLikeUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  communities?: CommunityUpdateManyWithoutUsersInput;
  communityFeeds?: CommunityFeedUpdateManyWithoutUsersInput;
  deletedAt?: Date | null;
  email?: string;
  feedLikes?: FeedLikeUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  userType?: "Lessee" | "Lessor";
};

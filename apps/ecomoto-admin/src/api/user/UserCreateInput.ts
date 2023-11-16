import { CommentLikeCreateNestedManyWithoutUsersInput } from "./CommentLikeCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { CommunityFeedCreateNestedManyWithoutUsersInput } from "./CommunityFeedCreateNestedManyWithoutUsersInput";
import { FeedLikeCreateNestedManyWithoutUsersInput } from "./FeedLikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  commentLikes?: CommentLikeCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  communities?: CommunityCreateNestedManyWithoutUsersInput;
  communityFeeds?: CommunityFeedCreateNestedManyWithoutUsersInput;
  deletedAt?: Date | null;
  email: string;
  feedLikes?: FeedLikeCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  userType: "Lessee" | "Lessor";
};

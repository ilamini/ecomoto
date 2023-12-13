import { CommentLikeCreateNestedManyWithoutUsersInput } from "./CommentLikeCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserFeedCreateNestedManyWithoutUsersInput } from "./UserFeedCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  commentLikes?: CommentLikeCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  communities?: CommunityCreateNestedManyWithoutUsersInput;
  deletedAt?: Date | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userFeeds?: UserFeedCreateNestedManyWithoutUsersInput;
  username: string;
  userType: "Lessee" | "Lessor";
};

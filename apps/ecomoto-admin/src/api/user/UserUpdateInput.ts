import { CarUpdateManyWithoutUsersInput } from "./CarUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { CommunityFeedUpdateManyWithoutUsersInput } from "./CommunityFeedUpdateManyWithoutUsersInput";
import { RentalUpdateManyWithoutUsersInput } from "./RentalUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  cars?: CarUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  communities?: CommunityUpdateManyWithoutUsersInput;
  communityFeeds?: CommunityFeedUpdateManyWithoutUsersInput;
  deletedAt?: Date | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  rentals?: RentalUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  userType?: "Lessee" | "Lessor";
};

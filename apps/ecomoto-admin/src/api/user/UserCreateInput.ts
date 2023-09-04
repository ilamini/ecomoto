import { CarCreateNestedManyWithoutUsersInput } from "./CarCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { CommunityFeedCreateNestedManyWithoutUsersInput } from "./CommunityFeedCreateNestedManyWithoutUsersInput";
import { RentalCreateNestedManyWithoutUsersInput } from "./RentalCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  cars?: CarCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  communities?: CommunityCreateNestedManyWithoutUsersInput;
  communityFeeds?: CommunityFeedCreateNestedManyWithoutUsersInput;
  deletedAt?: Date | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  rentals?: RentalCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  userType: "Lessee" | "Lessor";
};

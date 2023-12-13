import { UserUpdateManyWithoutCommunitiesInput } from "./UserUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  communityHeadeImgUrl?: string;
  description?: string;
  members?: UserUpdateManyWithoutCommunitiesInput;
  name?: string;
};

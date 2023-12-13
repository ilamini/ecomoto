import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  communityHeadeImgUrl: string;
  description: string;
  members?: UserCreateNestedManyWithoutCommunitiesInput;
  name: string;
};

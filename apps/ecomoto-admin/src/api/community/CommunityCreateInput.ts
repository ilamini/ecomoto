import { CommunityFeedCreateNestedManyWithoutCommunitiesInput } from "./CommunityFeedCreateNestedManyWithoutCommunitiesInput";
import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  communityFeeds?: CommunityFeedCreateNestedManyWithoutCommunitiesInput;
  communityHeadeImgUrl: string;
  description: string;
  members?: UserCreateNestedManyWithoutCommunitiesInput;
  name: string;
};

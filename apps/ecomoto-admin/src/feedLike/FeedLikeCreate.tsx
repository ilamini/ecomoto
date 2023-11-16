import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommunityFeedTitle } from "../communityFeed/CommunityFeedTitle";
import { UserTitle } from "../user/UserTitle";

export const FeedLikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="communityFeed.id"
          reference="CommunityFeed"
          label="communityFeed"
        >
          <SelectInput optionText={CommunityFeedTitle} />
        </ReferenceInput>
        <ReferenceInput source="likedBy.id" reference="User" label="likeBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

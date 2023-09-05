import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommunityFeedTitle } from "../communityFeed/CommunityFeedTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <ReferenceInput
          source="communityFeed.id"
          reference="CommunityFeed"
          label="CommunityFeed"
        >
          <SelectInput optionText={CommunityFeedTitle} />
        </ReferenceInput>
        <ReferenceInput source="creator.id" reference="User" label="creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CommunityFeedTitle } from "../communityFeed/CommunityFeedTitle";

export const MediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="communittFeed.id"
          reference="CommunityFeed"
          label="communityFeed"
        >
          <SelectInput optionText={CommunityFeedTitle} />
        </ReferenceInput>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};

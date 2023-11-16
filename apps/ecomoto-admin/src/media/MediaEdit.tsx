import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CommunityFeedTitle } from "../communityFeed/CommunityFeedTitle";

export const MediaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

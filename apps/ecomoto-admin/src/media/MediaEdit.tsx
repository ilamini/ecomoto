import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserFeedTitle } from "../userFeed/UserFeedTitle";

export const MediaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="imageUrl" source="imageUrl" />
        <ReferenceInput
          source="userFeed.id"
          reference="UserFeed"
          label="UserFeed"
        >
          <SelectInput optionText={UserFeedTitle} />
        </ReferenceInput>
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};

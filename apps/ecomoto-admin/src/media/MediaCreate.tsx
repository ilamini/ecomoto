import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserFeedTitle } from "../userFeed/UserFeedTitle";

export const MediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

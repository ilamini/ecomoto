import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <BooleanInput label="is_read" source="isRead" />
        <TextInput label="message" multiline source="message" />
        <ReferenceInput source="userId.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

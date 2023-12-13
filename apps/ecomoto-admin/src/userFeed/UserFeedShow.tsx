import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERFEED_TITLE_FIELD } from "./UserFeedTitle";

export const UserFeedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="creator" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="userFeedId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserFeed"
              source="userfeed.id"
              reference="UserFeed"
            >
              <TextField source={USERFEED_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Media"
          target="userFeedId"
          label="medias"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdBy" source="createdBy" />
            <TextField label="ID" source="id" />
            <TextField label="imageUrl" source="imageUrl" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserFeed"
              source="userfeed.id"
              reference="UserFeed"
            >
              <TextField source={USERFEED_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="videoUrl" source="videoUrl" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

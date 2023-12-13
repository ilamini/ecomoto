import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { USERFEED_TITLE_FIELD } from "../userFeed/UserFeedTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="userType" source="userType" />
        <ReferenceManyField
          reference="CommentLike"
          target="userId"
          label="commentLikes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comment"
          target="user_id"
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
          reference="UserFeed"
          target="user_id"
          label="userFeeds"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

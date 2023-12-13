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

import { COMMENT_TITLE_FIELD } from "./CommentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERFEED_TITLE_FIELD } from "../userFeed/UserFeedTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="CommentLike"
          target="commentId"
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
      </SimpleShowLayout>
    </Show>
  );
};

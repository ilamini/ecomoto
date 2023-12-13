import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CommentLikeTitle } from "../commentLike/CommentLikeTitle";
import { UserTitle } from "../user/UserTitle";
import { UserFeedTitle } from "../userFeed/UserFeedTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="commentLikes"
          reference="CommentLike"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentLikeTitle} />
        </ReferenceArrayInput>
        <TextInput label="comments" multiline source="comments" />
        <ReferenceInput source="creator.id" reference="User" label="creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userFeed.id"
          reference="UserFeed"
          label="UserFeed"
        >
          <SelectInput optionText={UserFeedTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

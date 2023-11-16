import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommentTitle } from "../comment/CommentTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentLikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="comment.id" reference="Comment" label="comment">
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

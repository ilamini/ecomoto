import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  TextInput,
  PasswordInput,
  SelectInput,
} from "react-admin";

import { CommentLikeTitle } from "../commentLike/CommentLikeTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { CommunityTitle } from "../community/CommunityTitle";
import { UserFeedTitle } from "../userFeed/UserFeedTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="communities"
          reference="Community"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunityTitle} />
        </ReferenceArrayInput>
        <DateInput label="Deleted At" source="deletedAt" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="userFeeds"
          reference="UserFeed"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserFeedTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <SelectInput
          source="userType"
          label="userType"
          choices={[
            { label: "Lessee", value: "Lessee" },
            { label: "Lessor", value: "Lessor" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};

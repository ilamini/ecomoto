import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CommunityFeedTitle } from "../communityFeed/CommunityFeedTitle";
import { UserTitle } from "../user/UserTitle";

export const CommunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="communityFeeds"
          reference="CommunityFeed"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunityFeedTitle} />
        </ReferenceArrayInput>
        <TextInput label="communityHeadeImgUrl" source="communityHeadeImgUrl" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="members"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

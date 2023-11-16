import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { CommunityTitle } from "../community/CommunityTitle";
import { UserTitle } from "../user/UserTitle";
import { FeedLikeTitle } from "../feedLike/FeedLikeTitle";
import { MediaTitle } from "../media/MediaTitle";

export const CommunityFeedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="community.id"
          reference="Community"
          label="community"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <TextInput label="content" source="content" />
        <ReferenceInput source="creator.id" reference="User" label="creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="feedLikes"
          reference="FeedLike"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedLikeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="medias"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

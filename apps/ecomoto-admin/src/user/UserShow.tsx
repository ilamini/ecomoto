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

import { USER_TITLE_FIELD } from "./UserTitle";
import { COMMUNITYFEED_TITLE_FIELD } from "../communityFeed/CommunityFeedTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

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
        <ReferenceManyField reference="Car" target="lessorIdId" label="Cars">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="lessorId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="make" source="make" />
            <TextField label="model" source="model" />
            <TextField label="parkedLocation" source="parkedLocation" />
            <TextField label="registration_info" source="registrationInfo" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comment"
          target="user_id"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="comments" source="comments" />
            <ReferenceField
              label="CommunityFeed"
              source="communityfeed.id"
              reference="CommunityFeed"
            >
              <TextField source={COMMUNITYFEED_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CommunityFeed"
          target="ds"
          label="CommunityFeeds"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="community"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Rental"
          target="lesseeIdId"
          label="Rentals"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="car_id" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentLocation" source="currentLocation" />
            <TextField label="deletedAt" source="deletedAt" />
            <TextField label="destination" source="destination" />
            <TextField label="destinationGeoLoc" source="destinationGeoLoc" />
            <TextField label="ID" source="id" />
            <ReferenceField label="lessee_id" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="pickupAddress" source="pickupAddress" />
            <TextField label="pickupGeoLoc" source="pickupGeoLoc" />
            <TextField label="pickupTime" source="pickupTime" />
            <ReferenceField label="planId" source="plan.id" reference="Plan">
              <TextField source={PLAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rentalEndDatetime" source="rentalEndDatetime" />
            <TextField label="rentalRequestTime" source="rentalRequestTime" />
            <TextField
              label="rentalStartDatetime"
              source="rentalStartDatetime"
            />
            <TextField label="rentalStatus" source="rentalStatus" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

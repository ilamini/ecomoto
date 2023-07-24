import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CAR_TITLE_FIELD } from "./CarTitle";
import { ESCROW_TITLE_FIELD } from "../escrow/EscrowTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lessorId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="make" source="make" />
        <TextField label="model" source="model" />
        <TextField label="registration_info" source="registrationInfo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CarImage"
          target="carIdId"
          label="CarImages"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="car_id" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="deletedAt" source="deletedAt" />
            <TextField label="ID" source="id" />
            <TextField label="image_url" source="imageUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Rental" target="carIdId" label="Rentals">
          <Datagrid rowClick="show">
            <ReferenceField label="car_id" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentLocation" source="currentLocation" />
            <TextField label="deletedAt" source="deletedAt" />
            <TextField label="destination" source="destination" />
            <TextField label="destinationGeoLoc" source="destinationGeoLoc" />
            <ReferenceField
              label="Escrows"
              source="escrow.id"
              reference="Escrow"
            >
              <TextField source={ESCROW_TITLE_FIELD} />
            </ReferenceField>
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

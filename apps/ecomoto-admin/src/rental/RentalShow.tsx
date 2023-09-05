import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

export const RentalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="rentalStartDatetime" source="rentalStartDatetime" />
        <TextField label="rentalStatus" source="rentalStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

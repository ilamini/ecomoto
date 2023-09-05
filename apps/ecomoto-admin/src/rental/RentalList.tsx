import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";

export const RentalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rentals"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="rentalStartDatetime" source="rentalStartDatetime" />
        <TextField label="rentalStatus" source="rentalStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

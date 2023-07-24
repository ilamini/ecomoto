import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { EscrowTitle } from "../escrow/EscrowTitle";
import { UserTitle } from "../user/UserTitle";
import { PlanTitle } from "../plan/PlanTitle";

export const RentalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="carId.id" reference="Car" label="car_id">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <TextInput label="currentLocation" source="currentLocation" />
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <TextInput label="destination" source="destination" />
        <TextInput label="destinationGeoLoc" source="destinationGeoLoc" />
        <ReferenceInput source="escrows.id" reference="Escrow" label="Escrows">
          <SelectInput optionText={EscrowTitle} />
        </ReferenceInput>
        <ReferenceInput source="lesseeId.id" reference="User" label="lessee_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="pickupAddress" source="pickupAddress" />
        <TextInput label="pickupGeoLoc" source="pickupGeoLoc" />
        <DateTimeInput label="pickupTime" source="pickupTime" />
        <ReferenceInput source="planId.id" reference="Plan" label="planId">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
        <DateTimeInput label="rentalEndDatetime" source="rentalEndDatetime" />
        <DateTimeInput label="rentalRequestTime" source="rentalRequestTime" />
        <DateTimeInput
          label="rentalStartDatetime"
          source="rentalStartDatetime"
        />
        <SelectInput
          source="rentalStatus"
          label="rentalStatus"
          choices={[
            { label: "Requesting", value: "Requesting" },
            { label: "Accepted", value: "Accepted" },
            { label: "Rejected", value: "Rejected" },
            { label: "Active", value: "Active" },
            { label: "Completed", value: "Completed" },
            { label: "Extended", value: "Extended" },
            { label: "Settled", value: "Settled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};

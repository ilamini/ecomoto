import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
import { RentalList } from "./rental/RentalList";
import { RentalCreate } from "./rental/RentalCreate";
import { RentalEdit } from "./rental/RentalEdit";
import { RentalShow } from "./rental/RentalShow";
import { PlanList } from "./plan/PlanList";
import { PlanCreate } from "./plan/PlanCreate";
import { PlanEdit } from "./plan/PlanEdit";
import { PlanShow } from "./plan/PlanShow";
import { CommunityList } from "./community/CommunityList";
import { CommunityCreate } from "./community/CommunityCreate";
import { CommunityEdit } from "./community/CommunityEdit";
import { CommunityShow } from "./community/CommunityShow";
import { CommunityFeedList } from "./communityFeed/CommunityFeedList";
import { CommunityFeedCreate } from "./communityFeed/CommunityFeedCreate";
import { CommunityFeedEdit } from "./communityFeed/CommunityFeedEdit";
import { CommunityFeedShow } from "./communityFeed/CommunityFeedShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ecomoto"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
        <Resource
          name="Rental"
          list={RentalList}
          edit={RentalEdit}
          create={RentalCreate}
          show={RentalShow}
        />
        <Resource
          name="Plan"
          list={PlanList}
          edit={PlanEdit}
          create={PlanCreate}
          show={PlanShow}
        />
        <Resource
          name="Community"
          list={CommunityList}
          edit={CommunityEdit}
          create={CommunityCreate}
          show={CommunityShow}
        />
        <Resource
          name="CommunityFeed"
          list={CommunityFeedList}
          edit={CommunityFeedEdit}
          create={CommunityFeedCreate}
          show={CommunityFeedShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
      </Admin>
    </div>
  );
};

export default App;

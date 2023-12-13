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
import { CommunityList } from "./community/CommunityList";
import { CommunityCreate } from "./community/CommunityCreate";
import { CommunityEdit } from "./community/CommunityEdit";
import { CommunityShow } from "./community/CommunityShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { MediaList } from "./media/MediaList";
import { MediaCreate } from "./media/MediaCreate";
import { MediaEdit } from "./media/MediaEdit";
import { MediaShow } from "./media/MediaShow";
import { CommentLikeList } from "./commentLike/CommentLikeList";
import { CommentLikeCreate } from "./commentLike/CommentLikeCreate";
import { CommentLikeEdit } from "./commentLike/CommentLikeEdit";
import { CommentLikeShow } from "./commentLike/CommentLikeShow";
import { UserFeedList } from "./userFeed/UserFeedList";
import { UserFeedCreate } from "./userFeed/UserFeedCreate";
import { UserFeedEdit } from "./userFeed/UserFeedEdit";
import { UserFeedShow } from "./userFeed/UserFeedShow";
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
          name="Community"
          list={CommunityList}
          edit={CommunityEdit}
          create={CommunityCreate}
          show={CommunityShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Media"
          list={MediaList}
          edit={MediaEdit}
          create={MediaCreate}
          show={MediaShow}
        />
        <Resource
          name="CommentLike"
          list={CommentLikeList}
          edit={CommentLikeEdit}
          create={CommentLikeCreate}
          show={CommentLikeShow}
        />
        <Resource
          name="UserFeed"
          list={UserFeedList}
          edit={UserFeedEdit}
          create={UserFeedCreate}
          show={UserFeedShow}
        />
      </Admin>
    </div>
  );
};

export default App;

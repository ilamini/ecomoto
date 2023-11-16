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
import { CommunityFeedList } from "./communityFeed/CommunityFeedList";
import { CommunityFeedCreate } from "./communityFeed/CommunityFeedCreate";
import { CommunityFeedEdit } from "./communityFeed/CommunityFeedEdit";
import { CommunityFeedShow } from "./communityFeed/CommunityFeedShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { MediaList } from "./media/MediaList";
import { MediaCreate } from "./media/MediaCreate";
import { MediaEdit } from "./media/MediaEdit";
import { MediaShow } from "./media/MediaShow";
import { FeedLikeList } from "./feedLike/FeedLikeList";
import { FeedLikeCreate } from "./feedLike/FeedLikeCreate";
import { FeedLikeEdit } from "./feedLike/FeedLikeEdit";
import { FeedLikeShow } from "./feedLike/FeedLikeShow";
import { CommentLikeList } from "./commentLike/CommentLikeList";
import { CommentLikeCreate } from "./commentLike/CommentLikeCreate";
import { CommentLikeEdit } from "./commentLike/CommentLikeEdit";
import { CommentLikeShow } from "./commentLike/CommentLikeShow";
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
        <Resource
          name="Media"
          list={MediaList}
          edit={MediaEdit}
          create={MediaCreate}
          show={MediaShow}
        />
        <Resource
          name="FeedLike"
          list={FeedLikeList}
          edit={FeedLikeEdit}
          create={FeedLikeCreate}
          show={FeedLikeShow}
        />
        <Resource
          name="CommentLike"
          list={CommentLikeList}
          edit={CommentLikeEdit}
          create={CommentLikeCreate}
          show={CommentLikeShow}
        />
      </Admin>
    </div>
  );
};

export default App;

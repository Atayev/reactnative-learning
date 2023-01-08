import { View } from 'react-native'
import styled from "styled-components/native";



const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 2px;
`;
const PostImage = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 50px;
  margin: 15px;
  border: 1px solid black;
`;
const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

function FullPost() {
  return (
      <View style={{padding:20}}>
          <PostImage source={{ uri: "https://via.placeholder.com/600/1ee8a4" }} />
          <PostTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla assumenda quos doloribus reiciendis, corrupti perspiciatis saepe necessitatibus nam dignissimos pariatur aliquam facere nostrum sed in dolorem amet excepturi soluta.</PostTitle>
    </View>
  )
}

export default FullPost
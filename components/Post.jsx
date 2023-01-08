import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 2px;
`;
const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 15px;
  border: 1px solid black;
`;
const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

const PostDate = styled.Text`
  fontsize: 14px;
  font-weight: 500;
  color: gray;
`;
const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};

import { View } from "react-native";
import styled from "styled-components/native";

import { useEffect, useState } from "react";
import { Loading } from "./Loading";

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

function FullPost({route , navigation}) {
  const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState();
    
    const {id,title} = route.params
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/"+id);
    const data = await res.json();

    setItem(data);
    setIsLoading(false);
  };
    useEffect(() => {
        navigation.setOptions({
        title
    })
    fetchData();
  }, []);

  useEffect(fetchData, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: item?.url }} />
      <PostTitle>{item?.title}</PostTitle>
    </View>
  );
}

export default FullPost;

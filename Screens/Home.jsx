import { useEffect,useState } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    const items = data.splice(0, 10);

    setData(items);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <View>

      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              title={item.title}
              imageUrl={item.url}
              createdAt={item.albumId}
            />
          </TouchableOpacity>
        )}
      />
      {/* {data?.map((d) => (
        <Post key={d.id} title={d.title} imageUrl={d.url} createdAt={d.albumId} />
      ))} */}
    </View>
  );
}

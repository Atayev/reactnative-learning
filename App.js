import {
  StatusBar,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./Screens/Home";


export default function App() {
  
  return (
    <View>
      <HomeScreen />
      <StatusBar barStyle='light-content' />
    </View>
  );
}

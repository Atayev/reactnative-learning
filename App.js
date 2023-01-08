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
import { Navigation } from "./Screens/Navigation";

export default function App() {
  return <Navigation />;
}

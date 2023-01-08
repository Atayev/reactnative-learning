import { ActivityIndicator, View, Text } from "react-native";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        margin: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text>Loading content....</Text>
    </View>
  );
};

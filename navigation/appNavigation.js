import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

const appNavigation = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: "white"
					}
				}}>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default appNavigation;

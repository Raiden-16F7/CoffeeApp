import React from "react";
import { Image, View } from "react-native";
import { themeColors } from "../theme";

export default function CoffeCard({ item }) {
	return (
		<View
			style={{
				borderRadius: 40,
				backgroundColor: themeColors.bgDark,
				height: 350,
				width: 250
			}}>
			<View
				style={{
					shadowColor: "black",
					shadowRadius: 30,
					shadowOffset: { width: 0, height: 40 },
					shadowOpacity: 0.8
				}}
				className="flex-row justify-center -mt-14">
				<Image
					source={item.image}
					className="h-40 w-40 mx-11 -my-5"
				/>
			</View>
		</View>
	);
}

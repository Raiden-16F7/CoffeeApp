import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";

import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { categories, coffeeItems } from "../data";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/coffeeCard";

const HomeScreen = () => {
	const [activeCategory, setActiveCategory] = useState(1);

	return (
		<View className="flex-1 relative bg-white">
			<StatusBar style="auto" />
			<Image
				source={require("../assets/images/beansBackground1.png")}
				className="w-full absolute -top-5 opacity-10"
				style={{ height: 220 }}
			/>

			<SafeAreaView className="flex-1">
				{/* Header Bar Icons */}
				<View className="px-4 flex-row justify-between items-center">
					<Image
						source={require("../assets/images/avatar.png")}
						className="h-9 w-9 rounded-full"
					/>
					<View className="flex-row items-center space-x-2">
						<MapPinIcon
							size={25}
							color={themeColors.bgLight}
						/>
						<Text className="text-base font-semibold">Lahore,LHR</Text>
					</View>
					<BellIcon
						size={27}
						color={"black"}
					/>
				</View>

				{/* Search Bar */}
				<View className="mx-5 mt-14">
					<View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
						<TextInput
							placeholder="Search"
							className="p-3 flex-1 font-semibold text-gray-700"
						/>
						<TouchableOpacity
							className="rounded-full p-2"
							style={{ backgroundColor: themeColors.bgLight }}>
							<MagnifyingGlassIcon
								size={25}
								color={"white"}
								strokeWidth={2}
							/>
						</TouchableOpacity>
					</View>
				</View>

				{/* Categories */}
				<View className="px-5 mt-6">
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={categories}
						keyExtractor={(item) => item.id}
						className="overflow-visible"
						renderItem={({ item }) => {
							let isActive = item.id == activeCategory;
							let activeTextClass = isActive ? "white" : "black";

							return (
								<TouchableOpacity
									onPress={() => setActiveCategory(item.id)}
									style={{
										backgroundColor: isActive
											? themeColors.bgLight
											: "rgba(0,0,0,0.07)"
									}}
									className="p-4 px-5 rounded-full mr-2 shadow">
									<Text
										className="font-semibold drop-shadow-lg shadow-black/80"
										style={{ color: activeTextClass }}>
										{item.title}
									</Text>
								</TouchableOpacity>
							);
						}}
					/>
				</View>

				{/* Coffee Cards */}
				<View className="mt-16 py-2">
					<Carousel
						containerCustomStyle={{ overflow: "visible", paddingTop: 40 }}
						data={coffeeItems}
						renderItem={({ item }) => <CoffeeCard item={item} />}
						firstItem={1}
						inactiveSlideOpacity={0.75}
						style={{ padding: 20 }}
						inactiveSlideScale={0.77}
						sliderWidth={400}
						itemWidth={260}
						itemHeight={450}
						backgroundColor="#000"
						slideStyle={{ display: "flex", alignItems: "center" }}
					/>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default HomeScreen;

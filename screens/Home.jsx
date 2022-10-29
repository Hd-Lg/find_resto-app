import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    Categories,
    HeaderTabs,
    SearchBar,
    RestaurantItems,
    localRestaurants,
} from "../components";

const YELP_API_KEY =
    "qHG57zuNoA5-VJeDIitOJMy-lknKKwOqvuXj_eGOzhm7yKVkUJIW72DAGVsev3aP1O-Cyl3hKxI1BTnqETjheEyZNWQ034McMpP8eopWy0ViA1w0Lv6WJHQkbGUFY3Yx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    function getRestaurantsFromYelp() {
        const yelpUrl =
            "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Lille";

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((response) => response.json())
            .then((json) => setRestaurantData(json.businesses));
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
}

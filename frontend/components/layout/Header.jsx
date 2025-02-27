import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        console.log(searchText)
        setSearchText("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput 
                    style={styles.input}
                    placeholder="Search item"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
                <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
                    <AntDesign name="search1" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: "#004aab",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 30,
        borderWidth:0.5,
        borderColor:"white"
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 15,
        color: "white",
        paddingLeft: 10,
        outlineStyle:"none"
    },
    iconButton: {
        padding: 8,
    },
});

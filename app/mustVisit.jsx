import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { placesToVisit } from "@/constants/coffeePlacesToVisit";
const mustVisit = () => {
  const [toVisit, setToVisit] = useState(
    placesToVisit.sort((a, b) => b.id - a.id)
  );
  const [text, setText] = useState("");

  const addToVisit = () => {
    if (text.trim()) {
      const newId = toVisit.length > 0 ? toVisit[0] + 1 : 1;
      setToVisit([{ id: newId, title: text, visited: false }, ...toVisit]);
      setText("");
    }
  };

  const toggleVisit = (id) => {
    setToVisit(
      toVisit.map((visit) =>
        visit.id === id ? { ...visit, visited: !visit.visited } : visit
      )
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text onPress={() => toggleVisit(item.id)}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Add a place"
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addToVisit}>
          <Text>Add a place</Text>
        </Pressable>
      </View>
      <FlatList
        data={toVisit}
        renderItem={renderItem}
        keyExtractor={(visit) => visit.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
};

export default mustVisit;

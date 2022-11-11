import { View, Text } from 'react-native'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions/index";
//import Card from "./Card";
import { styles } from '../styles/styles'

export default function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Este es el Home!!!</Text>
    </View>
  )
}
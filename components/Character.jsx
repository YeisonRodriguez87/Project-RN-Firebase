import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const Character = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
            <Image
                style={styles.imgSize}
                source={{uri: item.img}}
            />
        </View>
    )
}

export default Character
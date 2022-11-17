import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const Character = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgSize}
                source={{uri: item.img}}
            />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.nickname}</Text>
            <Text style={styles.text}>{item.status}</Text>
        </View>
    )
}

export default Character
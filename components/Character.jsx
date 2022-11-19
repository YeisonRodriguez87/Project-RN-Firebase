import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const Character = ({ item }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subheadingCard}>{item.name}</Text>
                <Image
                    style={styles.imgSize}
                    source={{uri: item.img}}
                />
            </View>
        </View>
    )
}

export default Character
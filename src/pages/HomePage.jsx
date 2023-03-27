// imports
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { increment, decrement, store } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'
import { ImageSlider } from 'react-native-image-slider-banner'
import { useState } from 'react'

// page
const HomePage = () => {
    // store data
    const dispatch = useDispatch()

    // data
    const state_counter = useSelector((state) => state.counter.value)
    const [search_value, updateSearchValue] = useState('')
    const images = [
        {
            img: 'https://source.unsplash.com/1024x768/?nature'
        },
        {
            img: 'https://source.unsplash.com/1024x768/?water'
        },
        {
            img: 'https://source.unsplash.com/1024x768/?nature'
        },
        {
            img: 'https://source.unsplash.com/1024x768/?tree'
        }
    ]
    const items = [1, 2, 3, 4, 5, 6]

    // methods
    function incrementState() {
        dispatch(increment())
    }

    function decrementState() {
        dispatch(decrement())
    }

    function searchItemOfItems() {
        console.log('you are searched')
    }

    // elements
    const ItemBoxes = () => {
        return items.map((item) => {
            return (
                <View style={style.item_box} key={item}>
                    <Text>
                        Items
                    </Text>
                </View>
            )
        })
    }

    return (
        <ScrollView style={style.parent_view}>
            <TextInput style={style.input} placeholder='Qidiruv...' value={search_value} onChangeText={(text) => updateSearchValue(text)} underlineColorAndroid="transparent" inlineImageLeft='search_icon' onSubmitEditing={() => searchItemOfItems()} />
            <ImageSlider data={images} autoPlay={true} timer={5000} />

            <View>
                <Text style={style.popular_text}>
                    Ommabop tovarlar
                </Text>

                <View style={style.item_box_parent}>
                    {ItemBoxes()}
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    parent_view: {
        padding: 10
    },
    popular_text: {
        fontSize: 20,
        color: 'rgba(0,0,0,0.5)',
        marginBottom: 10,
        marginTop: 8
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        padding: 10
    },
    item_box_parent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        justifyContent: 'center'
    },
    item_box: {
        width: 180,
        height: 300,
        backgroundColor: '#fff'
    }
})

export default HomePage
// imports
import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import LocalStorage from 'sync-storage'
import { increment, decrement, store } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'
import {ImageSlider} from 'react-native-image-slider-banner'

// page
const HomePage = () => {
    // data
    let [result, setResult] = useState(null)

    // store data
    const dispatch = useDispatch()

    // data
    const state_counter = useSelector((state) => state.counter.value)

    // methods
    async function getFirstData() {
        await LocalStorage.set('use', '10')
        setResult(LocalStorage.get('use'))
    }

    function incrementState() {
        dispatch(increment())
    }

    function decrementState() {
        dispatch(decrement())
    }

    // mounted
    useEffect(() => {
        getFirstData()
    }, [])

    const images = [
        {
            img: 'https://source.unsplash.com/1024x768/?nature'
        },
        {
            img: 'https://source.unsplash.com/1024x768/?water'
        },
        {
            img: 'https://source.unsplash.com/1024x768/?girl'
        },
        {
            img: 'https://source.unsplash.com/1024x768/?tree'
        }
      ]
    return (
        <View>
            <ImageSlider data={images} autoPlay={true} timer={5000}/>
            <View style={style.button}>
                <Button title='-' color='orange' onPress={() => decrementState()} />
                <Text>
                    {JSON.stringify(state_counter)}
                </Text>
                <Button title='+' onPress={() => incrementState()} />
            </View>

            <Text>
                Home page
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        width: 100,
        gap: 10,
        flexDirection: 'row'
    }
})

export default HomePage
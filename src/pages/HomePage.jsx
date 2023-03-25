// imports
import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import LocalStorage from 'sync-storage'
import { increment, decrement, store } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'

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

    return (
        <View>
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
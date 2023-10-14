import React, { useContext, useEffect, useState } from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import images from '../constants/images';
import DrawerContent from './DrawerContent';
import { useReducedMotion } from 'react-native-reanimated';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AddNotes from './AddNotes';
import NoteContext from '../context/ChatContext';
import Notes from './Notes';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const [img, setImg] = useState(true)
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
    }, [])     

    const CustomHeaderLeft = ({ navigation }) => (
        <View>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                    source={img ? images.image3 : images.image4}   
                    style={styles.icon1}
                />
            </TouchableOpacity>
        </View>
    );

    const drawerScreens = notes.map((note) => (
        <Drawer.Screen
            name={note.title}
            component={ Notes }
            initialParams={{ noteTitle: note.title, noteKey: note._id, noteDesc: note.description }}
            key={note._id}
        />
    ));

    return (
        <Drawer.Navigator screenOptions={
            ({ navigation }) => ({
                drawerType: 'slide',
                headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
            })
        }
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Add Note"
                component={AddNotes}
            />
            {drawerScreens}
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    icon1: {
        marginLeft: 10,
        height: 20,
        width: 20,
    }
})

export default DrawerNavigator;

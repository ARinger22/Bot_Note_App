import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import AddNotes from './AddNotes';
import images from '../constants/images';
import NoteContext from '../context/ChatContext';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const DrawerContent = (props) => {
    const context = useContext(NoteContext)
    const { notes, getNotes, deleteNotes } = context

    const deleteNote = (id) => {
        deleteNotes(id)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <DrawerItem
                    label='+ Add Note Here'
                    icon={() => (
                        <Image source={images.image5} style={{ width: 60, height: 40 }} resizeMode='contain' />
                    )}
                    onPress={() => {
                        props.navigation.navigate('Add Note')
                    }}
                />
                {notes.map((note) => (
                    <DrawerItem
                        key={note._id}
                        label={note.title}
                        icon={() => (
                            <View style={{ flexDirection: 'row', alignItems: 'center', 
                                borderWidth: 1, borderBlockColor: 'black', paddingBottom: 3, marginTop: -10  }} >
                                <Image source={images.image5} style={{ width: 50, height: 30 }} resizeMode='contain' />
                                <Text style={[styles.middleText, { flex: 1 }]} >{note.title}</Text>
                                {/* <Image source={images.image7} style={{ width: 25, height: 30 }} resizeMode='contain' /> */}
                                <TouchableOpacity onPress={() => deleteNote(note._id)} >
                                        <Image
                                            source={images.image6}
                                            style={{ width: 50, height: 30, }}
                                            resizeMode='contain'
                                        />
                                </TouchableOpacity>
                            </View>
                        )}
                        onPress={() => {
                            props.navigation.navigate(note.title);
                        }}

                    />
                ))}

                {/* <DrawerItem
                    label='Home'
                    onPress={() => {
                        props.navigation.navigate('Open History')
                    }}
                /> */}
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    middleText: {
        marginLeft: 10,
        color: 'black',
    },
})


export default DrawerContent;

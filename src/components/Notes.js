import React, { useContext, useEffect } from 'react';
import {View} from 'react-native';
import NoteContext from '../context/ChatContext';
import { FlatList } from 'react-native-gesture-handler';
import NoteItems from './NoteItems';

const Notes =({route}) => {
    const {noteTitle, noteKey, noteDesc} = route.params

    return (
        <View>
            <NoteItems key={noteKey} noteKey={noteKey} 
                noteTitle={noteTitle} noteDesc={noteDesc} />
        </View>
    );
};

export default Notes;

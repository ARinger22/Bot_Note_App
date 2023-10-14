import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import NoteContext from '../context/ChatContext';

const NoteItems =(props) => {
    const context = useContext(NoteContext);
    const { editNotes } = context
    const {noteTitle, noteKey, noteDesc} = props;
    const [note, setNote] = useState({ title: noteTitle, description: noteDesc });

    const onChange = (text, fieldname) => {
        setNote({ ...note, [fieldname]: text })
    }

    const handleClick = (e) => {
        if (note.title.trim() == '' || note.description.trim() === '') {
            setTimeout(() => {
                Alert.alert('title and description both must be filled')
            }, 2000)
        }
        else {
            Alert.alert('Note has been updated successfully')
            // console.log(note);
            editNotes(noteKey, note.title, note.description);
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.4}
            style={styles.mainContainer} 
        >
            <View  >
                <ScrollView>
                    <View style={styles.inputContainer} >
                        <TextInput
                            name="title"
                            style={styles.TextInput}
                            placeholder="title...."
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => onChange(text, "title")}
                            value={note.title}  
                        />
                    </View>
                    <View style={styles.inputContainer} >
                        <TextInput
                            name="description"
                            style={styles.TextInput}
                            placeholder="description....."
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => onChange(text, "description")}
                            multiline={true}
                            numberOfLines={6}
                            value={note.description}
                        />
                    </View>
                    <View style={styles.buttonStyle} >
                        <Button title='Save Changes'
                            color="#f194ff"
                            onPress={handleClick}
                        />
                    </View>
                </ScrollView>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        marginTop: 10,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        marginVertical: 8,
    },
    TextInput: {
        width: 300,
        marginLeft: 10,
        color:'black',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#003f5c',
        borderRadius: 5,
        margin: 10,
    },
})


export default NoteItems;

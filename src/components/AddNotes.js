import React, { useContext, useState } from 'react';
import { Alert, Button, ScrollViewComponent, StyleSheet, View } from 'react-native';
import NoteContext from '../context/ChatContext';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const AddNotes = () => {
    const [note, setNote] = useState({ title: "", description: "" });
    const [description, setdescription] = useState("");
    const context = useContext(NoteContext)
    const {addNotes} = context
    const handleClick = async (e) => {
        if (note.title.trim() == '' || note.description.trim() === '') {
            setTimeout(() => {
                Alert.alert('title and description both must be filled')
            }, 2000)
        }
        else {
            Alert.alert('Note has been added successfully')
            // console.log(note);  
            await addNotes(note.title, note.description);
            setNote({ title: "", description: "" });
        }
    }

    const onChange = (text, fieldname) => {
        setNote({ ...note, [fieldname]: text })
    }
    return (
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
                <Button title='submit'
                    color="#f194ff"
                    onPress={handleClick}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
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

export default AddNotes;


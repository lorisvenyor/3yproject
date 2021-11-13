import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Alert, Dimensions} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../shared/Colors";
import TodoList from "../components/TodoList";
import AddListModal from "../components/AddListModal";
import Fire from "../config/Fire";
import {SafeAreaView} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from "react-native-gesture-handler";


export default class Todolists extends React.Component {
    state = {
        addTodoVisible: false, // setting task automatically to false
        lists: [],
        user: {},
        
    };

    componentDidMount() {
        firebase = new Fire((error, user) => {
            if (error) {
                return alert("Error");
            }

            firebase.getLists(lists => {
                this.setState({ lists, user }, () => {
                    
                });
            });

            this.setState({ user });
        });
    }

    componentWillUnmount() {
        firebase.detach();
    }

    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible });
    }

    renderList = list => {
        return <TodoList list={list} updateList={this.updateList} deleteList={this.deleteList}  />
      }

    addList = list => { // ading list name and todo's etc to firestore
        firebase.addList({
            name: list.name,
            color: list.color,
            todos: []
        })
    }

    deleteList = list => { // deleting list in firestore
       
        firebase.deleteList(list); 
      }

    updateList = list => { // updating list in firestore
        firebase.updateList(list);
    }

    render() {
     
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <ScrollView>

            <View style={{
                alignItems: "center",
                justifyContent: "center"
            }}>            

                <Modal
                    animationType="fade"
                    visible={this.state.addTodoVisible}
                    onRequestClose={() => this.toggleAddTodoModal()}>
                    <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
                </Modal>

                <View style={{ marginVertical: 50 }}>
                    <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
                        <AntDesign 
                        name="plus"
                         size={25} 
                         color={colors.orange} />
                    </TouchableOpacity>
                    <Text style={styles.add}>Add new list</Text>
                </View>

                <View style={{height: 400}}>
                    <FlatList
                        data={this.state.lists}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderList(item)}
                        keyboardShouldPersistTaps="always"
                    />
                </View>
            
            </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    divider: {
        backgroundColor: colors.orange,
        height: 1,
        flex: 1,
        alignSelf: "center"
    },
   
    addList: {
        borderWidth: 8,
        borderColor: colors.orange,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        color: colors.orange,
        fontWeight: '500',
        fontSize: 18,
        marginTop: 15
    },
    button_orange: {
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "orange",
        paddingVertical: 8,
        borderRadius: 20
    },
    button_white: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "orange",
        paddingVertical: 5,
        borderRadius: 20,
        paddingHorizontal: 30,
        marginHorizontal: 50,
    }
})
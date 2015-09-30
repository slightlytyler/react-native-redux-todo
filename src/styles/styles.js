'use strict';

import React from 'react-native';

var { StyleSheet } = React;

export default StyleSheet.create({
    navigator: {
        flex: 1
    },

    todosContainer: {
        flex: 1
    },

    todosList: {
        flex: 1
    },

    todosListContainer: {
        flex: 1
    },

    todo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },

    editTodo: {
        marginTop: 74,
        margin: 10,
        padding: 10,
        height: 40,
        backgroundColor: '#f9f9f9',
        borderRadius: 12
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },

    newButton: {
        marginBottom: 0,
        borderRadius: 0,
    },

    text: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },

    completed: {
        color: '#5bbd72',
        textDecorationLine: 'line-through'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    }
});
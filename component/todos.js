import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, TextInput, StyleSheet, FlatList } from 'react-native';
import {
    Spinner, ListItem, CheckBox, Body, Text, Container, Header,
    Left, Right, Button, Icon, Title, Item, Input
} from "native-base"

import { getTodos } from "../_redux/_actions/todo"

// parent component
class Todos extends Component {

    constructor() {
        super();
        this.state = {
            inputName: "",
            search: ""
        }
    }

    componentDidMount() {
        this.props.getTodos()
    }
    renderItem = ({ item }) => {
        return (
            <Item value={item} />
        )
    }

    render() {
        const { data, isLoading } = this.props.todo
        let searchResult;
        if (this.state.search == '') {
            searchResult = []
        } else {
            searchResult = data.filter(searchRes => searchRes.title.toLowerCase().includes(this.state.search))

        }

        return (
            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Todo</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Header searchBar>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" value={this.state.search} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>



                {isLoading ?
                    <View style={styles.spinnerBody}>
                        <Spinner />
                    </View> :
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <ListItem>
                                <CheckBox color="green" />
                                <Body>
                                    <Text>{item.title}</Text>
                                </Body>
                            </ListItem>
                        )}
                    />}

            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.Todos
    };
};



export default connect(mapStateToProps, { getTodos })(Todos);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    item: {
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    itemText: {
        fontWeight: 'bold'
    },
    spinnerBody: {
        height: '100%',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
})
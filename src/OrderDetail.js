import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image
} from 'react-native';


var riderData = [
    {
        name: 'Rider 1',
        id: 1,
        trip: 12345
    },
    {
        name: 'Rider 2',
        id: 2,
        trip: 12346
    },
    {
        name: 'Rider 3',
        id: 3,
        trip: 12347
    }
];

var order = [
    {
        id: 12345,
        drop: {
            address_line_1: 'Drop Address 1',
            address_line_2: 'Drop Address 2',
            city: 'delhi',
            state: 'Delhi'
        },
        pickup: {
            address_line_1: 'Pickup address 1',
            address_line_2: 'Pickup address 2',
            city: 'delhi',
            state: 'Delhi'
        },
        sender: {
            name: 'Sender 1',
            mobile: 9999999999
        },
        receiver: {
            name: 'Receiver 1',
            mobile: 8888888888
        }
    },
    {
        id: 12346,
        drop: {
            address_line_1: 'Drop Address 1',
            address_line_2: 'Drop Address 2',
            city: 'delhi',
            state: 'Delhi'
        },
        pickup: {
            address_line_1: 'Pickup address 1',
            address_line_2: 'Pickup address 2',
            city: 'delhi',
            state: 'Delhi'
        },
        sender: {
            name: 'Sender 2',
            mobile: 9999999999
        },
        receiver: {
            name: 'Receiver 2',
            mobile: 8888888888
        }
    },
    {
        id: 12347,
        drop: {
            address_line_1: 'Drop Address 1',
            address_line_2: 'Drop Address 2',
            city: 'delhi',
            state: 'Delhi'
        },
        pickup: {
            address_line_1: 'Pickup address 1',
            address_line_2: 'Pickup address 2',
            city: 'delhi',
            state: 'Delhi'
        },
        sender: {
            name: 'Sender 3',
            mobile: 9999999999
        },
        receiver: {
            name: 'Receiver 3', mobile: 8888888888
        }
    },
];

const OrderDetail = function () {

    const Item = ({ item }) => {
        function newRiderArray(data) {
            if (data.trip === item.id) {
                return data.name
            }
        }
        let newArray = riderData.filter(newRiderArray)
        return (
            <View style={styles.container}>
                <View style={styles.TrackCircleContainer}>
                    <View style={styles.greenOuterCircle}>
                        <View style={styles.greenInnerCircle}>
                        </View>
                    </View>
                    <View style={styles.pickUpContainer}>
                        <Text style={styles.pickFromHeading}>Pickup from</Text>
                        <Text style={styles.pickFromText}>{item.pickup.address_line_1}</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: 1, borderWidth: 1, marginLeft: 10, borderStyle: 'dashed', backgroundColor: '#D3D3D3' }}>
                </View>
                <View style={styles.TrackCircleContainer}>
                    <View style={styles.purpleOuterCircleContainer}>
                        <View style={[styles.greenInnerCircle, { backgroundColor: 'purple' }]}>
                        </View>
                    </View>
                    <View style={styles.pickUpContainer}>
                        <Text style={styles.pickFromHeading}>Drop to</Text>
                        <Text style={styles.pickFromText}>{item.drop.address_line_1}</Text>
                    </View>
                </View>
                <View style={styles.onWayPickupRow}>
                    <Text style={styles.onWayPickUpText}>On way to pickup</Text>
                    <Text style={styles.packageIdText}> Package Id: 343</Text>
                </View>
                <View style={styles.borderStyle}>
                </View>
                <View style={styles.riderDetailContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.profileIcon}>
                            <Image source={require('../user.png')} />
                        </View>
                        <Text style={styles.riderNameText}>
                            {newArray[0].name}
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../phone.png')}
                            style={{ alignSelf: 'flex-end' }}
                        />
                    </View>
                </View>
                <View style={styles.borderStyle}>
                </View>
                <View style={styles.pickUpOtpContainer}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickUpByOtpHeadText}> Pickup by </Text>
                        <Text style={styles.timeText}> 08:40pm</Text>
                    </View>
                    <View style={styles.verticalSeparator}>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickUpByOtpHeadText}>Pickup OTP</Text>
                        <View style={styles.otpSubContainer}>
                            <Text style={styles.otpText}>5467</Text>
                            <Image source={require('../phone.png')}
                                style={styles.otpImage}
                            />
                        </View>
                    </View>
                </View>

            </View>
        )
    }


    const renderItem = ({ item, i }) => {
        return (
            <View style={{ flex: 1 }}>
                <Item item={item} />
            </View>
        );
    }

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={order}
                renderItem={renderItem}
                keyExtractor={(item, i) => item.id}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    flatListContainer:{
        flex: 1 
    },
    container: {
        margin: 15,
    },
    TrackCircleContainer: {
        flexDirection: 'row'
    },
    greenOuterCircle: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 12,
        flexDirection: 'column',
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greenInnerCircle: {
        height: 10,
        width: 10,
        backgroundColor: 'green',
        borderRadius: 5
    },
    pickUpContainer: {
        flexDirection: 'column',
        marginLeft: 20
    },
    pickFromHeading: {
        fontWeight: 'bold'
    },
    pickFromText: {
        color: '#D3D3D3'
    },
    purpleOuterCircleContainer: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 12,
        flexDirection: 'column',
        borderColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },
    onWayPickupRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    onWayPickUpText: {
        fontSize: 18,
        margin: 20,
        fontWeight: 'bold'
    },
    packageIdText: {
        fontSize: 13,
        marginTop: 24,
        color: 'black'
    },
    riderDetailContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    profileIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#B19CD9",
        justifyContent: 'center',
        alignItems: 'center'
    }, riderNameText: {
        color: 'black',
        alignSelf: 'center',
        marginLeft: 20
    },

    borderStyle: {
        height: 2,
        backgroundColor: '#D3D3D3',
        marginTop: 10
    },
    pickUpOtpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    pickUpByOtpHeadText:{
        fontSize:12
    },
    timeText: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold'
    },
    verticalSeparator: {
        width: 2,
        backgroundColor: '#D3D3D3',
        height: 40
    }, 
    otpSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    otpText: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold'
    },
    otpImage: {
        height: 15,
        width: 15,
        marginLeft: 10,
        marginTop: 10
    }
})


export default OrderDetail




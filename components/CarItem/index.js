import React from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'
import styles from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock } from '@fortawesome/free-solid-svg-icons'

 const CarItem = () => {
    return (
        <View style = {styles.carContainer}>
            <ImageBackground
            source={require("../../assets/background.png")}
            style={styles.backgroundImage} 
            />

            <View style={styles.header} >{/*Header*/}
                <TouchableOpacity> 
                <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24} />
                </TouchableOpacity> 
                <Text style={styles.headerTitle}>My Tesla</Text>

                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={ faToolbox} size={24} />
                </TouchableOpacity> 
            </View>

            <View style={styles.batterySection}>{/*Battery Section*/}
                <Image
                source={require("../../assets/battery.png")}
                style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>
                   235 miles
                </Text>

            </View>

            {/* 
            <View style={styles.status}>   
                <Text style={styles.statusText}>
                   Parked
                </Text>

            </View>
*/}
           {/*Control Icons */}
            <View style={styles.controls}>  
                
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ faFan} size={24} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={ faKey} size={24} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.controlsButton} >
                        <FontAwesomeIcon style={styles.icon} icon={ faLock} size={24} />
                    </View>
                </TouchableOpacity>

            </View>


        </View>


       
    )
};

export default CarItem;
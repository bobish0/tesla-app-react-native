import React, {useState} from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/index'

 const CarItem = () => {
    
    const[locked,setLocked] = useState(false) /*initial state, false = unlocked*/
    
    const clickLock = () => {
        if(locked){
            setLocked(false);
        }else{
            setLocked(true);
        }
    }
    
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
            
            <ScrollView>
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

                <TouchableOpacity
                onPress={clickLock}
                >
                    <View style={styles.controlsButton} >
                        <FontAwesomeIcon style={styles.icon} icon={ locked ? faLock : faUnlockAlt} size={24} />
                    </View>
                </TouchableOpacity>

            </View>
            
            {/*Menu */}
            <Menu />
            </ScrollView>
        </View>
       
    )
};

export default CarItem;

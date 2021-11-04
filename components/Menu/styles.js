import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    menuItems:{
        marginTop:50,
        marginLeft:20,
        marginRight:20,
    },
    menuRow:{
        flexDirection:"row",
        alignItems: "center",
        marginTop:15,
        marginBottom:15,
    },
    menuText:{
        color:"white",
        fontSize:16,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform:"uppercase",

    },
    subTitle:{
        color:"grey",
        fontSize:14,
        marginLeft:15,
    },
    menuTextBox:{
        flexGrow:1,

    },
    icon:{
        color:"white",
    },
    arrowIcon:{
        color:"grey",
    }

})

export default styles;
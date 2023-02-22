import { Pressable,View,Text,Animated,Easing } from "react-native";
import {useRef} from 'react'
const PressButton = ({text,setStringState,funcType,textColor,setFinalString,stringState,setShowString,buttonColor,moveString}) => {
    const animated = useRef(new Animated.Value(0)).current;;

    const PressAnimation = () => {
        Animated.timing(animated,{
            toValue: 5,
            duration: 50,
            easing: Easing.bounce,
            useNativeDriver: false,
          }).start(()=> {
            Animated.timing(animated,{
                toValue: 0,
                duration: 50,
                easing: Easing.bounce,
                useNativeDriver: false,
              }).start()
          })
  
    }
  
    return(
        <Animated.View style={{width:"80%",height:"80%",backgroundColor:buttonColor,justifyContent:'center',alignItems:'center',borderRadius:30,top:animated,elevation:10}}>
        <Pressable
        onPress={()=>{
            if(funcType=="clear"){
                PressAnimation()
                setStringState("")
                setFinalString("")
                setShowString(true)
            }else if(funcType=="eval"){
                PressAnimation()  
                setStringState(prevState => prevState.replace("×","*"))
                setStringState(prevState => prevState.replace("−","-"))
                setStringState(prevState => prevState.replace("÷","/"))                
                setStringState(prevState => (eval(prevState)))
                setFinalString((eval(stringState)))
                setStringState((eval(stringState)))
                setShowString(false)
                moveString()
            }else if(funcType=="<"){
                if(stringState!=undefined){
                    PressAnimation()  
                    setStringState(prevState => prevState.slice(0,-1))
                    setFinalString(prevState => prevState.slice(0,-1))
                    setShowString(true)    
                }else{
                    PressAnimation()  
                    setStringState("")
                    setFinalString("")
                    setShowString(true)    
                }

            }
            else{
                if(text!="^"){
                    PressAnimation()  
                    setStringState(prevState => prevState+funcType)
                    setFinalString(prevState => prevState+text)
                    setShowString(true)  
                }
            }

        }} 
        style={{backgroundColor:buttonColor,width:"100%",height:"100%",justifyContent:'center',alignItems:'center',borderRadius:30}}>
            <Text style={{color:textColor,fontSize:32,fontWeight:"300",textAlign:'center',textAlignVertical:'center'}}>{text}</Text>
        </Pressable>
        </Animated.View>

    )
}

export default PressButton
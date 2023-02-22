import { useState,useRef, useEffect } from 'react'
import {Text, View,Animated} from 'react-native'
import PressButton from './Components/PressButton'

const App = () => {
  const [stringState,setStringState] = useState("")
  const [finalString,setFinalString] = useState("")
  const [showString,setShowString] = useState(true)
  const finalVal = () => {
    try {
      return stringState[stringState.length-1]=="+" || stringState[stringState.length-1]=="-" || stringState[stringState.length-1]=="/" || stringState[stringState.length-1]=="*"?
      (stringState.slice(0,-1).indexOf("+")==(-1) || stringState.slice(0,-1).indexOf("-")==(-1) 
      || stringState.slice(0,-1).indexOf("/")==(-1) || stringState.slice(0,-1).indexOf("*")==(-1)?eval(stringState.slice(0,-1)):(stringState.slice(0,-1))):
      eval(stringState)  
    }
    catch(e){
      return "Error"
    }

  }

  const animated = useRef(new Animated.Value(0)).current;
  const fontAni = useRef(new Animated.Value(25)).current;
  const opaAni = useRef(new Animated.Value(1)).current;
  const opaAniMain = useRef(new Animated.Value(1)).current;
  const moveString = () =>{
    Animated.sequence([
      Animated.parallel([
        Animated.timing(animated,{
          toValue: -50,
          duration:600,
          useNativeDriver:false,
        }),
        Animated.timing(fontAni,{
          toValue: 50,
          duration:600,
          useNativeDriver:false,
        }),
        Animated.timing(opaAni,{
          toValue: 0,
          duration:600,
          delay:500,
          useNativeDriver:false,
        }),
        Animated.timing(opaAniMain,{
          toValue: 0,
          duration:1,
          useNativeDriver:false,
        }),
        ]),
        Animated.parallel([
          Animated.timing(animated,{
            toValue: 0,
            duration:10,
            useNativeDriver:false,
          }),
          Animated.timing(fontAni,{
            toValue: 25,
            duration:10,
            useNativeDriver:false,
          }),
          Animated.timing(opaAniMain,{
            toValue: 1,
            duration:10,
            useNativeDriver:false,
          }),
          ])
    ]).start(()=>{
            Animated.timing(opaAni,{
            toValue: 1,
            duration:10,
            useNativeDriver:false,
          })
    })
  }



  return(
    <View style={{flex:1,backgroundColor:'#fbfbfe',justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:3,justifyContent:'center',alignItems:'flex-end',width:"94%",top:70}}>
          <Animated.Text style={{color:'#1c8be5',fontSize:50,textAlign:'right',opacity:opaAniMain,backgroundColor:"white"}}>{finalString}</Animated.Text>
          <Animated.Text style={[{color:'black',fontSize:fontAni,top:animated,backgroundColor:'white'},showString?{opacity:1}:{opacity:1}]}>
          {finalVal()}</Animated.Text>
        </View>
        <View style={{flex:4,width:"97.5%",alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                     <PressButton text={"AC"} setStringState={setStringState}  funcType={"clear"} textColor={"white"} buttonColor={"#1180e3"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"^"} setStringState={setStringState} textColor={"black"} funcType={"**"}  buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"<"} textColor={"white"} funcType={"<"} buttonColor={"#364253"} setStringState={setStringState} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <PressButton text={"÷"} setStringState={setStringState} textColor={"white"} funcType={"/"} buttonColor={"#1180e3"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                     <PressButton text={"7"} setStringState={setStringState} textColor={"black"} funcType={"7"}  buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"8"} setStringState={setStringState} textColor={"black"} funcType={"8"}  buttonColor={"white"}  setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"9"} setStringState={setStringState} textColor={"black"} funcType={"9"}  buttonColor={"white"}  setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <PressButton text={"×"} setStringState={setStringState} textColor={"white"} funcType={"*"} buttonColor={"#1180e3"}setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"4"} setStringState={setStringState} textColor={"black"} funcType={"4"} buttonColor={"white"}  setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"5"} setStringState={setStringState} textColor={"black"} funcType={"5"}  buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"6"} setStringState={setStringState} textColor={"black"} funcType={"6"}  buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <PressButton text={"−"} setStringState={setStringState} textColor={"white"} funcType={"-"} buttonColor={"#1180e3"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"3"} setStringState={setStringState} textColor={"black"} funcType={"3"}  buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"2"} setStringState={setStringState} textColor={"black"} funcType={"2"} buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"1"} setStringState={setStringState} textColor={"black"} funcType={"1"} buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <PressButton text={"+"} setStringState={setStringState} textColor={"white"} funcType={"+"} buttonColor={"#1180e3"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"%"} setStringState={setStringState} textColor={"black"} funcType={"%"} buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString}   />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"0"} setStringState={setStringState} textColor={"black"} funcType={"0"}  buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <PressButton text={"."} setStringState={setStringState} textColor={"black"} funcType={"."} buttonColor={"white"} setFinalString={setFinalString} setShowString={setShowString} />
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <PressButton text={"="} setStringState={setStringState} funcType={"eval"} textColor={"white"}  buttonColor={"#1180e3"} stringState={stringState} setFinalString={setFinalString} setShowString={setShowString} moveString={moveString}  />
                  </View>
            </View>
        </View>
    </View>
  )
} 
export default App
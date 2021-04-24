import React, { Component } from "react";
import {
 Animated,
 Dimensions,
 TouchableHighlight,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import {ListItem,Icon} from "react-native-elements"
import {SwipeListView} from 'react-native-swipe-list-view'
import firebase from "firebase";
import db from "../config.js";

export default class SwipeableFlatlist extends Component{
  constructor(props){
    super(props)
    this.state={
      allNotifications:this.props.allNotifications
    }
  }

  updateMarkAsRead=(notification)=>{
    db.collection('all_notifications').doc(notifiation.doc_id).update({
      notification_status:'read'
    })
  }

  onSwipeValueChange=(swipeData)=>{
    var allNotifications = this.state.allNotifications;
    const {key,value} = swipeData
    if(value<-Dimensions.get('window').width)
    {
      const newData = [...allNotifications]
      this.updateMarkAsRead(allNotifications[key])
      newData.splice(key,1);
      this.setState({
        allNotifications:newData
      })
  
    }
  }

  renderItem=data=>(
    <Animated.View>
      <ListItem 
        leftElement={<Icon name='Book' type='font-awesome' color='#696969'/>}
        title = {data.item.item_name }
        titleStyle={{color:'black',fontWeight:"bold"}}
        subtitle={data.item.message}
        bottomDivider
      
      />
    </Animated.View>
  )

  renderHiddenItem=()=>(
    <View style={styles.rowBack}>
      <View style={[styles.backRightButton,styles.backRightButtonRight]}>
          <Text style={styles.backTextWhite}>Marked as read</Text>
      </View>
    </View>
  )

  render(){
    return(
      <View style={styles.container}>
        <SwipeListView 
          disableRightSwipe
          data={this.state.allNotifications}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={-Dimensions.get('window').width}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onSwipeValueChange={this.onSwipeValueChange}
          keyExtractor={(item,index)=>index.toString()}
        />
      </View>
    )
  }

  
}

const styles = StyleSheet.create({
  rowBack:{
    alignItems:'center',
    backgroundColor:'#29b6f6',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:15,
  },
  container:{
    backgroundColor:'white',
    flex:1,
  },
  backTextWhite:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
    alignSelf:"flex-start"
  },
  backRightButton:{
    alignItems:'center',
    justifyContent:'center',
    bottom:0,
    top:0,
    position:"absolute",
    width:100,
  },
  backRightButtonRight:{
    backgroundColor:'#29b6f6',
    right:0
  }
})
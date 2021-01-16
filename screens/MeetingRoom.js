import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native'
// import {
//   RTCPeerConnection,
//   RTCIceCandidate,
//   RTCSessionDescription,
//   RTCView,
//   MediaStream,
//   MediaStreamTrack,
//   mediaDevices,
//   registerGlobals
// } from 'react-native-webrtc';

class MeetingRoom extends Component {
  constructor(props) {
    super(props)
  }

  //  componentDidMount() {
  //   let isFront = true;
  //    mediaDevices.enumerateDevices().then((sourceInfos) => {
  //     console.log(sourceInfos);
  //     let videoSourceId;
  //     for (let i = 0; i < sourceInfos.length; i++) {
  //       const sourceInfo = sourceInfos[i];
  //       if (
  //         sourceInfo.kind == "videoinput" &&
  //         sourceInfo.facing == (isFront ? "front" : "environment")
  //       ) {
  //         videoSourceId = sourceInfo.deviceId;
  //       }
  //     }
  //     mediaDevices
  //       .getUserMedia({
  //         audio: true,
  //         video: {
  //           width: 640,
  //           height: 480,
  //           frameRate: 30,
  //           facingMode: isFront ? "user" : "environment",
  //           deviceId: videoSourceId,
  //         },
  //       })
  //       .then((stream) => {
  //         console.log(stream)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   });
  // }

  render() {
    return (
      <View>
      <Text>Heo</Text>
    </View>
    )
  }
}

export default MeetingRoom;

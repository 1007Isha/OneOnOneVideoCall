import React from "react";
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1979503084;
        const serverSecret = "e720c79030ecb6cef7add5ea745758fb";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Isha Goyal");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: ` http://localhost:3000/room/${roomId}`
                }

            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,

        })
    }
    return (
        <>
            <div style={{"background":"black","width":"100vw","height":"100vh"}}>
                <div style={{"margin":"auto"}}>
                    <div ref={myMeeting} />
                </div>
            </div>
        </>

    )
}
export default RoomPage;
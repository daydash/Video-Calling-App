// VideoCallPage.js
import React, { useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import "../css/VideoCallPage.css";

const VideoCallPage = () => {
	const { userId } = useParams();
	const history = useHistory();
	const { user, logout } = useAuth();

	const localVideoRef = useRef();
	const remoteVideoRef = useRef();
	let localStream;
	let remoteStream;
	let peerConnection;

	useEffect(() => {
		if (!user) {
			history.push("/login");
		}

		initializeWebRTC();

		return cleanup;
	}, [user, history]);

	const initializeWebRTC = async () => {
		try {
			localStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});
			localVideoRef.current.srcObject = localStream;

			// Create peer connection
			peerConnection = new RTCPeerConnection();

			// Add local stream to peer connection
			localStream
				.getTracks()
				.forEach((track) => peerConnection.addTrack(track, localStream));

			// Set up event handlers for ICE candidates and remote stream
			peerConnection.onicecandidate = handleICECandidate;
			peerConnection.ontrack = handleTrack;

			// Create offer
			const offer = await peerConnection.createOffer();
			await peerConnection.setLocalDescription(offer);

			// Implement signaling to exchange offer with the other user
			// For simplicity, you might use WebSocket or another signaling method
		} catch (error) {
			console.error("Error accessing media devices:", error);
		}
	};

	const handleICECandidate = (event) => {
		// Implement ICE candidate exchange with the other user
	};

	const handleTrack = (event) => {
		remoteStream = event.streams[0];
		remoteVideoRef.current.srcObject = remoteStream;
	};

	const cleanup = () => {
		// Implement cleanup logic when the component unmounts
		if (localStream) {
			localStream.getTracks().forEach((track) => track.stop());
		}
		if (remoteStream) {
			remoteStream.getTracks().forEach((track) => track.stop());
		}
		if (peerConnection) {
			peerConnection.close();
		}
	};

	const handleHangup = () => {
		// Implement hangup logic, close peer connection, and redirect to the list page
		cleanup();
		history.push("/list");
	};

	return (
		<div className="container">
			<h2>Video Call with {userId}</h2>
			<div className="video-container">
				<video ref={localVideoRef} autoPlay playsInline muted id="localVideo" />
				<video ref={remoteVideoRef} autoPlay playsInline id="remoteVideo" />
			</div>
			<div className="controls">
				<button onClick={handleHangup} id="hangupBtn">
					Hangup
				</button>
			</div>
		</div>
	);
};

export default VideoCallPage;


function playVideo(){
  		videoPlayer.mb.publish(OO.EVENTS.PLAY);
  		$('#playButton').attr('disabled', 'disabled');
  		$('#pauseButton').removeAttr('disabled');
  	}

  	function pauseVideo(){
  		videoPlayer.mb.publish(OO.EVENTS.PAUSE);
  		$('#pauseButton').attr('disabled', 'disabled');
  		$('#playButton').removeAttr('disabled');
  	}

  	function destroyPlayer(){
  		videoPlayer.destroy(function() { alert("This is why you can't have nice things"); });
  	}

  	function videoDescription(){
  		var description = videoPlayer.getDescription();
  		alert(description);
  	}

  	function seekTo (second) {
  		videoPlayer.seek(second);
  	}

  	function changeName (newName) {
  		var string_to_sign = "a2fjRP66cIzbKDZ6cPKz4vHy16bifMNHz5J-P87vPATCH/v2/assets/w5Y2l0cDroA7MFkyARCfbq3P-vwBOv96api_key=txZjgyOsJv-mdazLGrgH-fG5JLY2.jHc_Eexpires=1413374730"
  		string_to_sign += JSON.stringify({"name": newName});
      alert(string_to_sign)
  		signature = Base64.encode(string_to_sign).substring(0,42);
      signature = encodeURI(signature);
      alert(signature)
  		$.ajax({
			  url : 'https://api.ooyala.com/v2/assets/w5Y2l0cDroA7MFkyARCfbq3P-vwBOv96?api_key=txZjgyOsJv-mdazLGrgH-fG5JLY2.jHc_E&signature='+signature+'&expires=1413374730',
			  data : JSON.stringify({"name": newName}),
			  type : 'PATCH',
			  processData: false,
			  dataType: 'json'
		});
  	}
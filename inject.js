// this is the code which will be injected into a given page...

(function() {
	try{
		if (document.getElementById("wdp-overlay").hasAttribute("hidden") == false){
			document.getElementById("xboxdeployment-deploynewapp-toggleerauwp-formgroup").removeAttribute("hidden");
		}
	}
	catch {
		try{
			// display the hidden hdr button in the media 
			if (document.getElementById("mediacapture-capturescreenshotbutton").hasAttribute("hidden") == false){
				document.getElementById("mediacapture-hdr").removeAttribute("hidden");
			}
		}
		catch{
			try{
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Game event data</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/GameEventData/GameEventData.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Remote front panel</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/XboxRemoteFrontPanel/XboxRemoteFrontPanel.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Update console OS recovery</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/XboxRemoteRecovery/XboxRemoteRecovery.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Xbox automation</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/XboxUnattendedSetup/XboxUnattendedSetup.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Xbox unattended settings</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/XboxUnattendedSetup/XboxUnattendedSettings.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Device Certificate</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","menu/devicecert/devicecert.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Bluetooth</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/bluetooth/bluetooth.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Device manager</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/devicemanager/devicemanager.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Devices</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/devices/devices.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>ETW logging</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/etw/etw.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Features</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/features/features.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Installed Apps</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/installedapps/installedapps.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Kernel Crash Settings</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/KernelCrashSettings/KernelCrashSettings.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Live Kernel Dumps</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/LiveKernelDumps/LiveKernelDumps.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Live Process Dumps</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/LiveprocessDumps/LiveprocessDumps.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Perf Tracing</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/PerfTracing/PerfTracing.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
				var listNode = document.getElementById("wdp-addtool-availabletools"),
				textNode = document.createTextNode(""),
				liNode = document.createElement("LI");
				liNode.innerHTML = "<input type=\"checkbox\"><label>Running Processes</label>";
				liNode.className = "wdp-addtool-tool"
				liNode.setAttribute("data-dock-uri","tools/RunningProcesses/RunningProcesses.htm")
				liNode.appendChild(textNode);
				listNode.appendChild(liNode);
			}
			catch{
				try{
					document.getElementById("xboxunattendedsetup-download").removeAttribute("hidden");
					document.getElementById("xboxunattendedsetup-retrieve").removeAttribute("disabled");
					document.getElementById("xboxunattendedsetup-fpd-add").removeAttribute("hidden");
					document.getElementById("xboxremoterecovery-update-button").removeAttribute("disabled");
				}
				catch{
					alert("you dont seem to be on one of the compatible pages please make sure you are then try again");
				}
			}
		}
	}
})();

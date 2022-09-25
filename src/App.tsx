import React, { useState } from "react";
import "./App.css";
import {
  Launcher,
  useLaunch,
  useIsOpen,
  Intercom,
  Window,
} from "@relaycc/receiver";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return <Chat />;
}

function Chat() {
  const launch = useLaunch();
  const isOpen = useIsOpen();

  return (
    <div className="full-flex-centered">
      <h1 className="header">Relay Receiver Example App</h1>
      <h1>First connect a wallet</h1>
      <ConnectButton />

      <Intercom>
        <Window />
      </Intercom>
      <Launcher />
    </div>
  );
}

export default App;

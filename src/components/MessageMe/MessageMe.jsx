import { useState } from "react";

const MessageMe = () => {
  const [openChat, setOpenChat] = useState(false);

  const handleOpenChat = () => {
    setOpenChat((isTrue) => !isTrue)
  }

  return (
    <div className="message-me-wrapper">
      <button onClick={handleOpenChat} className="message-me-button">
        <img src={openChat ? "/public/closechat.png" : "/openchat.png"} alt="" />
      </button>
      <div
        className={
          openChat ? "message-me-content-true" : "message-me-content-false"
        }
      >
        <div className="mmc-profile">
          <img src="/mainperson.png" alt="" />
          <div className="mmc-profile-info">
            <p>Jamshidbek Kobulov</p>
            <span>Tashkent</span>
          </div>
        </div>
        <div className="mmc-messages-in">
          <div className="mmcmi-first-message">
            <p>Kompaniya haqida bilmoqchiman</p>
          </div>
          <div className="mmcmi-second-message">
            <p>Kompaniya nima xizmatlar taklif qiladi</p>
          </div>
          <div className="mmcmi-second-message">
            <p>
              Siz bilan qanday bog{"'"}lansak bo{"'"}ladi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  // Emoji Module
  const [open, setOpen] = useState(false);

  // update the input with text
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  /* const handleEmoji = (e) => {
    //console.log("Emoji Events: ", e);

    setText((prev) => prev + e.emoji);
    setOpen(false);
  }; */

  // check values after handleEmoji is run
  //console.log("Input Text: ", text);

  return (
    <div className="chat">
      {/* Top Section Chat List */}

      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />

          <div className="texts">
            <span>Herman Adu</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      {/*  Center Section Chats */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />

          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s,
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s,
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />

          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s,
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="./sunset.jpg" alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s,
            </p>

            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />

          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s,
            </p>

            <span>1 min ago</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />

          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>

        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;

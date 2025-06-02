import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Chat = () => {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", "hv8KvMH1C07lqzxAKSXT"),
      (res) => {
        setChat(res.data());
      }
    );

    return () => {
      unSub();
    };
  }, []);

  console.log("Chat: ", chat);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  // check values - handleEmoji
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

        <div ref={endRef}></div>
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

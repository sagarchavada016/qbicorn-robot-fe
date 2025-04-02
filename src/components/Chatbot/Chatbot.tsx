"use client";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    setSendingMessage(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm here to help!", sender: "bot" },
      ]);
      setSendingMessage(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 right-6 flex flex-col items-end">
      {isOpen && (
        <div className="bg-gradient-qbi shadow-xl rounded-2xl p-4 w-[300px] h-[400px] lg:w-[586px]  lg:h-[619px] mb-2   flex flex-col">
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-auto p-2 space-y-4"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${
                  msg.sender === "user" ? "justify-end" : ""
                }`}
              >
                {msg.sender === "bot" && (
                  <Image
                    src="/assets/logos/logo.png"
                    alt="Bot"
                    width={30}
                    height={30}
                    className="w-7 h-7 rounded-full"
                  />
                )}
                <div
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-[#3A3939] text-white self-end p-3"
                      : "bg-[#3C4235] text-white self-start p-3"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <Image
                    src="/assets/logos/logo.png"
                    alt="User"
                    width={30}
                    height={30}
                    className="w-7 h-7 rounded-full"
                  />
                )}
              </div>
            ))}
            {sendingMessage && (
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
              </div>
            )}
          </div>
          {/* <div className="flex items-center gap-2 mt-2 bg-gray-100 p-2 rounded-lg">
            <button className="p-2">
              <Icon icon="ic:baseline-mic" className="w-5 h-5 text-gray-500" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg p-2"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              <Icon icon="ic:baseline-send" className="w-5 h-5" />
            </button>
          </div> */}
          <div className="p-0 sm:p-3 lg:p-4">
            <div className="flex items-center bg-black rounded-lg p-2 sm:p-3 lg:px-4 xl:px-4  lg:py-3 xl:py-3  max-w-[100%] sm:max-w-[600px] lg:max-w-[800px] mx-auto">
              <button
                // variant="solid"
                color="blue"
                // onClick={() => sendMessage(message)}
                disabled={sendingMessage}
                className="mr-2 bg-transparent cursor-pointer hidden md:block"
              >
                <Image
                  src="/assets/logos/logo.png"
                  alt=""
                  width={30}
                  height={30}
                  className="w-5 sm:w-6 2xl:w-8"
                />
              </button>
              <input
                type="text"
                className="flex-grow bg-transparent text-white text-sm  outline-none"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <div className="flex items-center">
                <button
                  //   variant="solid"
                  color="blue"
                  onClick={() => console.log("mic")}
                  disabled={sendingMessage}
                  className="ml-2 cursor-pointer bg-transparent"
                >
                  {/* <IoMicOutline className="text- sm:text-2xl lg:text-2xl" /> */}
                </button>
                <button
                  //   variant="solid"
                  color="blue"
                  onClick={() => sendMessage()}
                  disabled={sendingMessage}
                  className="ml-1 cursor-pointer bg-primary"
                >
                  {/* <FaArrowRight className="text-sm sm:text-base lg:text-lg" /> */}
                  <Icon icon="ic:baseline-send" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-2 right-4 flex items-center gap-2 px-4 py-4 bg-gradient-qbi  rounded-[13px] shadow-lg"
      >
        <Image
          src="/assets/logos/logo.png"
          alt="User"
          width={30}
          height={30}
          className="w-10 h-10 rounded-full"
        />
      </button>
    </div>
  );
}

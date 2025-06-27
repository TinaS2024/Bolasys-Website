import { BubbleChat } from 'flowise-embed-react';

const Chatbot = () => {
    return(
        <BubbleChat
            chatflowid="3a2e7c58-1827-4dbd-adb6-1e30a1ff5035"
            apiHost="http://localhost:3000"
            chatflowConfig={{
          
            }}
            theme={{
                button: {
                    backgroundColor: "#0e2d38",
                    right:20,
                    bottom:20,
                    size:48,
                    dragAndDrop: true,
                    iconColor: "white",
                    autoWindowOpen: {
                        autoOpen: true,
                        openDelay:2,
                        autoOpenOnMobile: false
                    }
                },
                tooltip: {
                    showTooltip: false,
                    tooltipMessage: "",
                    tooltipBackgroundColor: "black",
                    tooltipTextColor: "white",
                    tooltipFontSize: 16
                },
                customCSS: "",
                chatWindow: {
                    showTitle: true,
                    showAgentMessages: true,
                    title: "Bolasys Chatbot",
                    titleAvatarSrc: "logo.png",
                    welcomeMessage: "Hallo, ich bin ein Chatbot der Firma Bolasys GmbH.",
                    errorMessage: "Leider ist der Chatbot zur Zeit nicht erreichbar.",
                    backgroundColor: "#ffffff",
                    backgroundImage: "Irgendein Bild",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                     starterPrompts: [
                    "Was macht die Firma Bolasys?"
                    ],
                    starterPromptFontSize:15,
                    clearChatOnReload: false,
                    sourceDocsTitle: "Quelle",
                    renderHTML: true,
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "chatbot.png"
                    },
                    userMessage: {
                        backgroundColor: "#0e2d38",
                        textColor: "#white",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png"
                    },
                    textInput: {
                        placeholder: "Gib deine Frage ein!",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#0e2d38",
                        maxChars: 50,
                        maxCharsWarningMessage: "You exceeded the characters limit. Please input less than 50 characters.",
                        autoFocus: true,
                        sendMessageSound: false,
                        receiveMessageSound: false,
                    },
                    feedback: {
                        color: "#303235",
                    },
                    dateTimeToggle: {
                        date: true,
                        time: true
                    },
                    footer: {
                        textColor: "#303235",
                        text: "Powered by",
                        company: "Flowise",
                        companyLink: "https://flowiseai.com"
                    }
                }

            }}
            
        />
    )
}

export default Chatbot;
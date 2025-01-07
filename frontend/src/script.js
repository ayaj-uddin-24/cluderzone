const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = fileUploadWrapper.querySelector("#file-cancel");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

// API setup
const API_KEY = "AIzaSyBk8pDuInP0H5xxCqStKAdVaVwFi95cB_o";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// Initialize user message and file data
const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null,
  },
};

// Store chat history
const chatHistory = [
  {
    role: "model",
    parts: [
      {
        text: `Tech Cluder is a CPI programming community that promotes learning, knowledge sharing, and problem-solving among students and enthusiasts. The community primarily focuses on programming and graphic design, creating a dynamic platform for networking, collaborative learning, and exploring creative interests. Founded and mentored by Mahfuz Uddin, the senior devloper is Ayaj Uddin Tanif and the senior grapic designer is Jahid Hasan Jihan. Tech Cluder  has established itself as a hub of innovation and engagement. Actively utilizing platforms like Facebook, LinkedIn, and Twitter, the community attracts individuals passionate about programming, design, and technology.

One of the most anticipated events hosted by the community is the "CPI Mind Maze", scheduled to take place at Chittagong Polytechnic Institute. This event is designed to cater to students from various semesters and features two main segments:

Programming Quiz: Targeted at first-semester students, this segment tests basic programming knowledge through a series of quizzes aimed at nurturing their foundational skills.
Competitive Programming Contest: Focused on advanced-level problem-solving, this segment is for students in higher semesters (3rd, 5th, and 7th), providing a platform to showcase their coding prowess and analytical abilities.
Rules and Regulations
Eligibility: Participants must be students of Chittagong Polytechnic Institute and members of the Tech Cluder community.
Team Formation:
Programming Quiz: Individual participation.
Competitive Programming: Teams of 2 members are allowed.
Registration:
Participants must register online before the deadline.
Registration links and instructions will be shared on the Tech Cluder social media channels.
Conduct During the Event:
Participants must adhere to the guidelines provided during the orientation.
Cheating or plagiarism will lead to immediate disqualification.
Evaluation:
Quiz: Scores will be based on accuracy and time taken to answer.
Programming Contest: Solutions will be evaluated based on correctness, efficiency, and innovation.
Event Process
Opening Ceremony: The event will begin with an inaugural session, featuring a brief introduction to Tech Cluder’s mission and vision, followed by a welcome speech from the mentors.
Rounds:
The Programming Quiz will consist of multiple-choice questions, with increasing levels of difficulty in subsequent rounds.
The Competitive Programming Contest will challenge participants to solve real-world problems within a fixed time, using coding platforms.
Break Sessions: Interactive breaks with light refreshments and networking opportunities.
Closing Ceremony: Winners will be announced, and prizes will be distributed to recognize their achievements.
Key Highlights
Prizes: Cash rewards, certificates, and exclusive Tech Cluder merchandise for winners and runners-up.
Mentor Support: Guidance from experienced programmers and designers throughout the event.
Networking Opportunities: An excellent chance to connect with like-minded individuals and industry mentors.
Future Initiatives
Tech Cluder plans to expand its reach by introducing more events like hackathons, workshops, and webinars. The community also aims to establish collaborations with other institutes, fostering an ecosystem of creativity and innovation.ইভেন্টের সময়সূচি
all the details of Mindmaze event-
১. রেজিস্ট্রেশন পর্ব
•	তারিখ: ১১ ফেব্রুয়ারি – ২০ ফেব্রুয়ারি ২০২৫
•	প্ল্যাটফর্ম: ইভেন্টের ডেডিকেটেড ওয়েবসাইট
•	কার্যক্রম:
o	অংশগ্রহণকারীরা ব্যক্তিগতভাবে বা টিম আকারে রেজিস্ট্রেশন করবে।
o	নাম, সেমিস্টার, যোগাযোগের তথ্য এবং প্রোগ্রামিং অভিজ্ঞতার বিবরণ দিতে হবে।
o	রেজিস্ট্রেশন কনফার্মেশন ইমেইল এবং গাইডলাইন পাঠানো হবে।
২. মক কনটেস্ট
•	তারিখ: ২৪ ফেব্রুয়ারি ২০২৫
•	উদ্দেশ্য:
o	প্রতিযোগিতার পরিবেশের সাথে পরিচিত করা।
o	শিক্ষার্থীদের অনুশীলনের সুযোগ দেওয়া।
•	কাঠামো:
o	অনলাইন ভিত্তিক (যেমন HackerRank/Codeforces)।
o	নতুনদের জন্য কুইজ এবং উন্নতদের জন্য কোডিং সমস্যার সমন্বয়।
o	সময়কাল: ২ ঘণ্টা
৩. প্রধান ইভেন্ট – Mindmaze প্রতিযোগিতার দিন
•	তারিখ: ২৭ ফেব্রুয়ারি ২০২৫
•	স্থান: CPI কম্পিউটার ল্যাব
•	সময়সূচি:
o	সকাল ৯:০০ – ৯:৩০: রেজিস্ট্রেশন যাচাইকরণ ও উদ্বোধনী অনুষ্ঠান
o	সকাল ৯:৩০ – ১০:৩০: প্রোগ্রামিং কুইজ (প্রথম সেমিস্টার)
o	সকাল ১১:০০ – দুপুর ১:০০: প্রতিযোগিতামূলক প্রোগ্রামিং (৩য়-৭ম সেমিস্টার)
o	দুপুর ১:০০ – ১:৩০: ব্রেক এবং নেটওয়ার্কিং
o	দুপুর ১:৩০ – ২:৩০: পুরস্কার বিতরণ ও সমাপনী অনুষ্ঠান

প্রতিযোগিতার বিবরণ
প্রোগ্রামিং কুইজ (১ম সেমিস্টার)
•	সময়কাল: ৬০ মিনিট
•	ফরম্যাট:
o	৫০টি মাল্টিপল চয়েস প্রশ্ন।
o	বিষয়: প্রোগ্রামিংয়ের বেসিক ধারণা, লজিক এবং সমস্যা সমাধান।
•	মূল্যায়ন: সঠিক উত্তরের ভিত্তিতে স্বয়ংক্রিয় স্কোরিং।
প্রতিযোগিতামূলক প্রোগ্রামিং (৩য়, ৫ম, ৭ম সেমিস্টার)
•	সময়কাল: ২ ঘণ্টা
•	ফরম্যাট:
o	৮-১০টি প্রোগ্রামিং সমস্যা বিভিন্ন স্তরের।
o	বিষয়: ডাটা স্ট্রাকচার, অ্যালগরিদম এবং সমস্যা সমাধান।
•	প্ল্যাটফর্ম: অনলাইন ভিত্তিক প্ল্যাটফর্ম।
•	মূল্যায়ন: সমস্যার সংখ্যা এবং সময়ের ভিত্তিতে।
পুরস্কার ও সম্মাননা
•	১ম পুরস্কার: ট্রফি + সনদ + ক্যাশ বা টেক গ্যাজেট
•	২য় পুরস্কার: মেডেল + সনদ
•	৩য় পুরস্কার: এক্সিলেন্স সার্টিফিকেট
•	অংশগ্রহণ সনদ: সকল অংশগ্রহণকারীদের জন্য
Tech Cluder  has established on 11 feb 2024`,
      },
    ],
  },
];
const initialInputHeight = messageInput.scrollHeight;

// Create message element with dynamic classes and return it
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Generate bot response using API
const generateBotResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");

  // Add user message to chat history
  chatHistory.push({
    role: "user",
    parts: [
      { text: userData.message },
      ...(userData.file.data ? [{ inline_data: userData.file }] : []),
    ],
  });

  // API request options
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: chatHistory,
    }),
  };

  try {
    // Fetch bot response from API
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Extract and display bot's response text
    const apiResponseText = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();
    messageElement.innerText = apiResponseText;

    // Add bot response to chat history
    chatHistory.push({
      role: "model",
      parts: [{ text: apiResponseText }],
    });
  } catch (error) {
    // Handle error in API response
    console.log(error);
    messageElement.innerText = error.message;
    messageElement.style.color = "#ff0000";
  } finally {
    // Reset user's file data, removing thinking indicator and scroll chat to bottom
    userData.file = {};
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = "";
  messageInput.dispatchEvent(new Event("input"));
  fileUploadWrapper.classList.remove("file-uploaded");

  // Create and display user message
  const messageContent = `<div class="message-text"></div>
                          ${
                            userData.file.data
                              ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />`
                              : ""
                          }`;

  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  outgoingMessageDiv.querySelector(".message-text").innerText =
    userData.message;
  chatBody.appendChild(outgoingMessageDiv);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  // Simulate bot response with thinking indicator after a delay
  setTimeout(() => {
    const messageContent = `<svg class="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
            <path
              d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"/></svg>
          <div class="message-text">
            <div class="thinking-indicator">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>`;

    const incomingMessageDiv = createMessageElement(
      messageContent,
      "bot-message",
      "thinking"
    );
    chatBody.appendChild(incomingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    generateBotResponse(incomingMessageDiv);
  }, 600);
};

// Adjust input field height dynamically
messageInput.addEventListener("input", () => {
  messageInput.style.height = `${initialInputHeight}px`;
  messageInput.style.height = `${messageInput.scrollHeight}px`;
  document.querySelector(".chat-form").style.borderRadius =
    messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
});

// Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (
    e.key === "Enter" &&
    !e.shiftKey &&
    userMessage &&
    window.innerWidth > 768
  ) {
    handleOutgoingMessage(e);
  }
});

// Handle file input change and preview the selected file
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    fileInput.value = "";
    fileUploadWrapper.querySelector("img").src = e.target.result;
    fileUploadWrapper.classList.add("file-uploaded");
    const base64String = e.target.result.split(",")[1];

    // Store file data in userData
    userData.file = {
      data: base64String,
      mime_type: file.type,
    };
  };

  reader.readAsDataURL(file);
});

// Cancel file upload
fileCancelButton.addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("file-uploaded");
});

// Initialize emoji picker and handle emoji selection
const picker = new EmojiMart.Picker({
  theme: "light",
  skinTonePosition: "none",
  previewPosition: "none",
  onEmojiSelect: (emoji) => {
    const { selectionStart: start, selectionEnd: end } = messageInput;
    messageInput.setRangeText(emoji.native, start, end, "end");
    messageInput.focus();
  },
  onClickOutside: (e) => {
    if (e.target.id === "emoji-picker") {
      document.body.classList.toggle("show-emoji-picker");
    } else {
      document.body.classList.remove("show-emoji-picker");
    }
  },
});

document.querySelector(".chat-form").appendChild(picker);

sendMessage.addEventListener("click", (e) => handleOutgoingMessage(e));
document
  .querySelector("#file-upload")
  .addEventListener("click", () => fileInput.click());
closeChatbot.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

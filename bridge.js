
// 1. IMPLEMENTATIONS (Low-Level Details)
const sendViaSMS = (recipient, message) => {
  console.log(`sms sent to ${recipient}: "${message}"`);
};
const sendViaEmail = (recipient, message) => {
  console.log(`email sent to ${recipient}: "${message}"`);
};
const sendViaPush = (recipient, message) => {
  console.log(`push notification sent to ${recipient}: "${message}"`);
};
// 2. ABSTRACTION (High-Level Logic)
const createNotifier = (sendChannel) => {
  return {
    sendAlert: (user, text) => {
      const formattedMessage = ` alert : ${text.toUpperCase()}`;
      sendChannel(user, formattedMessage);
    },
    
    sendReport: (user, data) => {
      const formattedMessage = ` daily report: ${JSON.stringify(data)}`;
      sendChannel(user, formattedMessage);
    }
  };
};
const smsNotifier = createNotifier(sendViaSMS);
smsNotifier.sendAlert("Ammar", "server memory usage is high!");
const emailNotifier = createNotifier(sendViaEmail);
emailNotifier.sendReport("Ammar", { totalOrders: 42, revenue: "$1,200" });
const pushNotifier = createNotifier(sendViaPush);
pushNotifier.sendAlert("Ali", "you have a new direct message.");

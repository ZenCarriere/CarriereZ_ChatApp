import ChatMessage from "./components/TheMessageComponent.js"
import NotificationMessage from "./components/NotificationComponent.js"

(() => {
    console.log('fired');

    //load the socket library and make a connecty
    const socket = io();

    //event handling
    function setUserId({sID}) {

        vm.socketID = sID;
    }

    function appendMessage(message) {
        vm.messages.push(message);
    }

    function appendNotification(notification) {
        vm.notifications.push(notification);
    }

    const vm = new Vue({
        data: {
            messages: [],
            notifications: [],
            nickname: "",
            username: "",
            socketID: "",
            message: ""
        },

        created: function() {
            console.log('its alive!!');
        },

        methods: {
            dispatchMessage(){
                socket.emit('chatmessage', {content: this.message, name: this.nickname || "Secret Chatot"});

                this.message = "";
            },

        },

        components: {
            newmessage: ChatMessage,
            newnotification: NotificationMessage
        }
    }).$mount("#app");

    socket.addEventListener("connected", setUserId);
    socket.addEventListener("connected", appendNotification);
    socket.addEventListener('message', appendMessage);
})();
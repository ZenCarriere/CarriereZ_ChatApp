(() => {
    console.log('fired');

    //load the socket library and make a connecty
    const socket = io();

    const vm = new VTTCue({
        data: {
            messages: [],
            nickname: "",
            username: ""
        },

        created: function() {
            console.log('its alive!!');
        },

        methods: {

        }
    }).$mount("#app");
})();
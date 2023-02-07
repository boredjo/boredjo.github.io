function sendMessage(message) {
    fetch("https://gotify.jokaendler.eu/message", {
        method: "post",
        headers: {
            'X-Gotify-Key': 'A06KxOiecnECwpA',
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            "message": message,
            "priority": 2,
            "title": "Message"
        })
    })
}
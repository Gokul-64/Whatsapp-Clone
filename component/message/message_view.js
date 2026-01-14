var message_view = {
    template:`
        <div class="message_root">
            <div id="messageView" >
                <div class="contact_item" v-for="contact in contactList" :key="contact.name">
                    <div id="image">
                        <img :src="contact.profile" alt="profile pic">
                    </div>
                    <div id="info">
                        <div id="name_time">
                            <div id="name">{{ contact.name }}</div>
                            <div id="time">{{ contact.time }}</div>
                        </div>
                        <div id="last_message">{{ contact.lastMessage }} </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props:{
        contactList:{ type: Array, default: () => [] }
    }
}
var chat_content_view={
    template:
    `
        <div class="content_root">
            <div id="image" v-html="image"></div>
            <div id="content">
                <div id="header">WhatsApp Web</div>
                <div id="desc">Send and receive messages without keeping your phone online.<br>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</div>
            </div>
            <div id="footer">
                Your personal messages are end-to-end encrypted
            </div>
        </div>
    `,
    props:{
        image:{type:String,default:""}
    }
}
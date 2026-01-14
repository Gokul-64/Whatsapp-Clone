var message_controller = {
    template:`
        <message-view :contactList="contactList"></message-view>
    `,
    data(){
        return{
            contactList:[
                {name:"Peter", profile:`assets/spidy.png`, lastMessage:"I lost my gwen..", time:"10:30 pm"},
                {name:"Ben Tennyson", profile:`assets/ben10.png`, lastMessage:"It's hero time", time:"9:15 am"},
                {name:"Hiccup", profile:`assets/hiccup.png`, lastMessage:"Lost myself", time:"Yesterday"},
                {name:"Mr. Bean", profile:`assets/mrbean.png`, lastMessage:"Teddy....", time:"Wednesday"},
                {name:"Scooby doo", profile:`assets/scooby.png`, lastMessage:"do do dooo", time:"Monday"},
            ]
        }
    }
}
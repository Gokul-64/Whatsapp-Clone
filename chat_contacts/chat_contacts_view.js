var chat_contacts_view = {
    template: `
        <div class="contacts_root">
            <div id="header">
                <div id="contents">
                    <div id="title">WhatsApp</div>
                    <div id="accessIcon">
                        <div id="new">
                            <router-link to="/new-chat" class="newchat">
                                <div id="icon" v-html="iconList.new"></div>
                            </router-link>
                        </div>
                        <div id="more">
                            <div id="icon" v-html="iconList.more"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div id="searchField">
                    <span id="search" v-html="iconList.search"></span>
                    <input type="text" placeholder="Ask Meta AI or Search" v-model="searchValue">
                    <span id="close" v-html="iconList.close" v-if="searchValue.length > 0" @click="clearsearchValue"></span>
                </div>
                
                <div id="filterSection">
                    <div class='filter-pill' :class="{ active: activeFilter === 'all'}" @click="activeFilter = 'all'">All</div>
                    <div class='filter-pill' :class="{ active: activeFilter === 'unread'}" @click="activeFilter = 'unread'">Unread</div>
                    <div class='filter-pill' :class="{ active: activeFilter === 'groups'}" @click="activeFilter = 'groups'">Groups</div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            searchValue: '',
            activeFilter: 'all' 
        }
    },
    props: {
        iconList: { type: Object, default: () => ({}) }
    },
    methods: {
        clearsearchValue() {
            this.searchValue = '';
        }
    }
}
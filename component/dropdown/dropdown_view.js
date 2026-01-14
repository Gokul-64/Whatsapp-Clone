var dropdown_view = {
    template:`
        <div id="dropdown_menu">
            <div id="content">
                <div id="top_section">
                    <div class="dropdown_item" v-for="item in top_iconList" :key="item.name">
                        <div id="icon_group">
                            <div class="icon" v-html="item.svg"></div>
                            <div class="label">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div id="bottom_section">
                    <div class="dropdown_item2" v-for="item in bottom_iconList" :key="item.name">
                        <div id="icon_group">
                            <div class="icon" v-html="item.svg"></div>
                            <div class="label">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props:{
        top_iconList: { type: Array, default: () => [] },
        bottom_iconList: { type: Array, default: () => [] }
    }
}
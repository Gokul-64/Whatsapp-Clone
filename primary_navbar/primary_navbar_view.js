var primary_navbar_view = {
    template: `
        <div class="primary_navbar_root">
            <div id="top">
                <div id="header-icons">
                    <router-link v-for="item in iconList" :key="item.name" :to="item.path" class="nav-item" active-class="active-icon">
                    <div id="icon" v-html="item.svg"></div>
                    </router-link>
                </div>
            </div>
            
            <div id="bottom">
                <div id="footer-icons">
                    <router-link v-for="item in footerIconList" :key="item.name" :to="item.path" class="nav-item">
                        <div id="icon" v-html="item.svg"></div>
                    </router-link>
                </div>
            </div>
        </div>
    `,
    props: {
        iconList: { type: Array, default: () => [] },
        footerIconList: { type: Array, default: () => [] }
    }
}
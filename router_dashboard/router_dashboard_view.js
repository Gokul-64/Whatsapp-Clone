var router_dashboard_view ={
    template:`
        <div id="whatsapp-dashboard">
            <div id="view">
                <div id="navbar-left">
                    <primary-navbar-controller ></primary-navbar-controller>
                </div>
                <div id="chat">
                    <router-view></router-view>
                </div>
                <div id="content">
                    <chat-content-controller></chat-content-controller>
                </div>
            </div>
        </div>
    `,

}
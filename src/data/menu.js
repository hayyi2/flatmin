
const layoutsMenu = {
    stacked: {
        label: "Stacked",
        url: "layout/stacked.html",
        icon: "layout-navbar"
    },
    sidebar: {
        label: "Sidebar",
        url: "layout/sidebar.html",
        icon: "layout-sidebar",
    },
    moreLayouts: {
        divider: true,
    },
    combined: {
        label: "Combined",
        url: "layout/combined.html",
    },
    contentSidebar: {
        label: "Content Sidebar",
        url: "layout/content-sidebar.html",
    },
    // narrow: {
    //     label: "Sidebar Narrow",
    //     url: "index.html",
    // },
}

const elementsMenu = {
    form: {
        label: "Forms",
        url: "element/forms.html",
        icon: "checkbox",
    },
    table: {
        label: "Tables",
        url: "element/tables.html",
        icon: "table",
    },
    widget: {
        label: "Widgets",
        url: "element/widgets.html",
        icon: "layout-grid",
    },
    components: {
        label: "Components",
        url: "element/components.html",
        icon: "components",
    },
}

const authPagesMenu = {
    login: {
        label: "Login",
        url: "page/auth/login.html",
        icon: "login",
    },
    register: {
        label: "Register",
        url: "page/auth/register.html",
        icon: "user-plus",
    },
}

const pagesMenu = {
    empty: {
        label: "Empty",
        url: "page/empty.html",
        icon: "file",
    },
    error: {
        label: "Error",
        url: "page/error.html",
        icon: "file-alert",
    },
}

module.exports = {
    navbar: {
        index: {
            label: "Dashboard",
            url: "",
            icon: 'dashboard',
        },
        layout: {
            label: "Layouts",
            icon: 'layout',
            subMenuKeys: Object.keys(layoutsMenu),
            subMenu: layoutsMenu,
        },
        elements: {
            label: "Elements",
            icon: 'layers-subtract',
            subMenuKeys: Object.keys(elementsMenu),
            subMenu: elementsMenu,
        },
        pages: {
            label: "Pages",
            icon: 'files',
            subMenuKeys: Object.keys({ ...pagesMenu, ...authPagesMenu }),
            subMenu: {
                ...pagesMenu,
                authPages: {
                    divider: true,
                },
                ...authPagesMenu
            },
        },
    },
    sidenav: {
        index: {
            label: "Dashboard",
            link: "",
            icon: 'dashboard',
        },
        layout: {
            label: "Layouts",
            icon: 'layout',
            subMenuKeys: Object.keys(layoutsMenu),
            subMenu: layoutsMenu,
        },
        elements: {
            divider: true,
            label: "Elements",
        },
        ...elementsMenu,
        examples: {
            divider: true,
            label: "Examples",
        },
        pages: {
            label: "Pages",
            icon: 'files',
            subMenuKeys: Object.keys(pagesMenu),
            subMenu: pagesMenu,
        },
        auth: {
            label: "Authentications",
            icon: 'lock',
            subMenuKeys: Object.keys(authPagesMenu),
            subMenu: authPagesMenu,
        },
        more: {
            divider: true,
            label: "More Menu",
        },
        submenu: {
            label: "Submenu",
            icon: 'subtask',
            subMenuKeys: [],
            subMenu: {
                satu: {
                    label: "Submenu Satu",
                    link: "#",
                },
                dua: {
                    label: "Submenu Dua",
                    link: "#",
                },
                moreMenu: {
                    divider: true,
                },
                tiga: {
                    label: "Submenu Tiga",
                    link: "#",
                },
            },
        },
    },
};
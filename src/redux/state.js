const state = {
    profile: {id: 1, name: "Dmitry K.", avatar: "https://www.1zoom.ru/big2/946/289597-frederika.jpg"},
    profilePage: {
        postsJSON: [
            { id: 1, post: ["Hi, how are you?"] },
            { id: 2, post: ["It's my first post"] },
            { id: 3, post: ["It's my first post", "lorem ipsum dolor sit amet"] }
        ]
    },
    dialogsPage: {
        messageJSON: [
            { id: 1, class: "", message: "Hi" },
            { id: 2, class: "received", message: "How are you?" },
            { id: 3, class: "", message: "Lorem" },
            { id: 4, class: "received", message: "i'm fine" },
            { id: 5, class: "", message: "ok" },
        ],
        dialogJSON: [
            {id: 1, name: "Sveta", avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
            {id: 2, name: "Vasya", avatar: "https://www.neizvestniy-geniy.ru/images/users/2020/04/148421.jpg"},
            {id: 3, name: "Andrey", avatar: "https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg"},
            {id: 4, name: "Tolya", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1840282110015164616/7818A12638C3A4AA5A7EBBBD4CA1FBB430BF7F67/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
            {id: 5, name: "Tanya", avatar: "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},
            {id: 6, name: "Slava", avatar: "https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png"},
        ],
    },
    aside: {
        friends:[
            {id: 1, name: "Sveta", avatar: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
            {id: 2, name: "Vasya", avatar: "https://www.neizvestniy-geniy.ru/images/users/2020/04/148421.jpg"},
            {id: 3, name: "Andrey", avatar: "https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg"},
            {id: 4, name: "Tolya", avatar: "https://steamuserimages-a.akamaihd.net/ugc/1840282110015164616/7818A12638C3A4AA5A7EBBBD4CA1FBB430BF7F67/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},
            {id: 5, name: "Tanya", avatar: "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"},
            {id: 6, name: "Slava", avatar: "https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png"},
        ]
    }
}

export default state;
export default {
    target: 'static',
    head: {
        title: 'Title de mon site',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'La description de mon site web'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/FAVICON.png' }
        ]
    },
    css: [
        '~/assets/css/main.css'
    ]
}
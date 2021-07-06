<template>
    <div class="home">
        <img id="logo" src="~/assets/images/logo-vertical.svg" />
        <p class="slogan">Site en cours de construction...</p>
        <div class="contact">
            <a href="tel:0610646323" class="tile-contact">
                <img src='~/assets/images/phone.svg'>
                <span>06 10 64 63 23</span>
            </a>
            <a href="mailto:nathaliecartiertherapie@gmail.com" class="tile-contact">
                <img src='~/assets/images/mail.svg'>
                <span>nathaliecartiertherapie@gmail.com</span>
            </a>
        </div>
    </div>
</template>

<style>
@media screen and (max-width: 768px) {
    .contact {
        flex-direction: column;
    }
    .tile-contact {
        padding: 15px 0px;
    }
    #logo {
        width: 215px;
    }
    .slogan {
        font-size: 1.3em;
    }
}
</style>
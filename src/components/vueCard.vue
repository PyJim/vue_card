<template>
    <div class="animated-card">
        <div class="imgBx">
            <img :src='image' alt="">
        </div>
        <div class="content">
            <h2>{{ name }}</h2>
            <p>{{ text }}</p>
            <button v-if="isButton" @click="action">{{ linktext }}</button>
            <a v-else :href='link'>{{ linktext }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vueCard',
        props: {
            name: String,
            text: String,
            txtColor: {
                type: String,
                default: '#333'
            },
            linktext: String,
            image: String,
            link: String,
            mainColor: {
                type: String,
                default: '#000',
            },
            bgColor: {
                type: String,
                default: '#fff',
            },
            isButton: {
                type: Boolean,
                default: false,
            },
            action: Function,
        },
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    .animated-card{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 350px !important;
        height: 300px !important;
        background: v-bind(bgColor) !important;
        border-radius: 20px;
        box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
        transition: 0.5s;
    }

    .animated-card:hover{
        height: 350px !important;
        cursor: pointer;
    }

    .animated-card .imgBx{
        position: absolute;
        top: 20px;
        width: 300px;
        height: 220px;
        background: #333;
        border-radius: 12px;
        overflow: hidden;
        transition: 0.5s;
    }

    .animated-card:hover .imgBx{
        top: -100px;
        scale: 0.75;
        box-shadow: 0 15px 45px rgba(0,0,0,0.2);
    }

    .animated-card .imgBx img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: v-bind(mainColor) !important;
        object-fit: cover;
    }

    .animated-card .content{
        position: absolute;
        top: 252px;
        width: 100%;
        padding: 0 30px;
        height: 35px;
        overflow: hidden;
        text-align: center;
        background: transparent;
        transition: 0.5s;
    }

    .animated-card:hover .content{
        top: 130px;
        height: 250px;
    }

    .animated-card .content h2{
        font-size: 1.5em;
        font-weight: 700;
        color: v-bind(mainColor) !important;
        background: transparent;
    }

    .animated-card .content p{
        color: v-bind(txtColor) !important;
        background: transparent;
        max-height: 50px;
        margin: 20px 0 25px;
        height: auto;
        visibility: hidden;
    }

    .animated-card:hover .content p,
    .animated-card:hover .content a,
    .animated-card:hover .content button{
        visibility: visible;
    }

    .animated-card .content a,
    .animated-card .content button{
        position: relative;
        top: 15px;
        display: inline-block;
        padding: 12px 25px;
        background: v-bind(mainColor) !important;
        color: v-bind(bgColor) !important;
        font-weight: 500;
        text-decoration: none;
        border-radius: 8px;
        visibility: hidden;
        transition: 0.5s;
    }
    .animated-card:hover a:hover,
    .animated-card:hover button:hover{
        color: v-bind(mainColor) !important;
        border: 2px solid v-bind(mainColor) !important;
        background: v-bind(bgColor) !important;

    }
</style>
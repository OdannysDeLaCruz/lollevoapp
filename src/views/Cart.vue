<template>
    <ion-page>
        <ion-header class="header">
        <ion-toolbar color="primary" class="header__toolbar header__toolbar--primary">
            <ion-buttons slot="start">
                <ion-button @click="router.go(-1)">
                    <ion-icon :icon="arrowBack" />
                </ion-button>
            </ion-buttons>
            <ion-title class="header__title">Carrito</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="content">
                <div
                    v-for="product in cart"
                    :key="product.id"
                    class="cart__item"
                >
                    <div class="cart__wrapper-image">
                        <img class="cart__item__img" :src="product.image" alt="">
                    </div>
                    <div class="cart__item__body">
                        <span class="cart__item__name">{{ product.name }}</span>
                        <span class="cart__item__price">{{ utils.formatPrice(product.price) }}</span>
                        <span class="cart__item__quantity">{{ product.quantity }}</span>
                    </div>
                </div>
            </div>
        </ion-content>
        <ion-footer class="detail__footer">
            <button class="deatil__button-add" @click="addProductToCart">Ir a pagar</button>
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonFooter, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { arrowBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import utils from '@/utils/index'

export default  defineComponent({
    name: 'CartPage',
    components: { IonHeader, IonToolbar, IonFooter, IonTitle, IonContent, IonPage, IonButtons, IonButton, IonIcon },
    setup() {
        const router = useRouter()
        const store = useStore()
        const cart = ref([])

        onMounted(async () => {
            cart.value = store.getters.getCart
            console.log(cart.value)
        })

        const imageIds = [1,2,3,4,5,6,7,8,9,10,12,13,14]
        const ramdonImage = () => {
            const id = Math.floor(Math.random() * (imageIds.length - 1) + 1)
            const data = { 
                name: require(`@/assets/products/${id}.png`) 
            }
            return data.name
        } 

        return {
            router,
            arrowBack,
            cart,
            utils,
            ramdonImage
        }
    }
});
</script>
<style lang="scss" scoped>
.header__toolbar--primary {
    --padding-end: 16px;
    --padding-start: 16px;
    --padding-top: 20px;
    --padding-bottom: 20px;
}
.header__title {
    padding: 0px;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
}
.content {
    padding: 16px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cart__item {
    display: flex;
    align-items: center;
    height: 183px;
    width: 375px;
    margin-bottom: 16px;
    padding: 16px 16px 16px;
    border-bottom: 1px solid #cccc;
}
.cart__wrapper-image {
    height: 102px;
    width: 102px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 15px;
}
.cart__item__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.cart__item__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.cart__item__name {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: #4F4F4F;
    margin-bottom: 11px;
}
.cart__item__price {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #33907C;
    margin-bottom: 11px;
}
.cart__item__quantity {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #4F4F4F;
}
.detail__footer {
    padding: 16px;
    background: #fff;
}
.deatil__button-add {
    height: 48px;
    width: 100%;
    border-radius: 24px;
    background: #33907C;
    color: #fff;
}
</style>

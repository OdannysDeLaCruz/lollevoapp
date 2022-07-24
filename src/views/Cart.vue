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
            <template v-if="cart.length">
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
            </template>
            <template v-else>
                <div class="cart__empty">Carrito vacío</div>
            </template>
        </ion-content>
        <ion-footer class="detail__footer">
            <button class="deatil__button-add" @click="createOrder">Ir a pagar</button>
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonFooter, IonTitle, IonContent, IonButtons, IonButton, IonIcon, alertController } from '@ionic/vue';
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
        const user:any = ref()

        onMounted(async () => {
            user.value = store.getters.getUser
        })
        onUpdated(() => {
            cart.value = store.getters.getCart
        })

        const imageIds = [1,2,3,4,5,6,7,8,9,10,12,13,14]
        const ramdonImage = () => {
            const id = Math.floor(Math.random() * (imageIds.length - 1) + 1)
            const data = { 
                name: require(`@/assets/products/${id}.png`) 
            }
            return data.name
        } 

        const presentAlert = async (m?: string) => {
            const alert = await alertController.create({
                cssClass: 'my-custom-class',
                header: 'Notificación',
                subHeader: 'Pedido creado',
                message: 'Su pedido ha sido creado',
                buttons: [
                    {
                        text: 'Seguir comprando',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            router.push({
                                name: 'Market'
                            })
                        },
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            // return true
                        },
                    },
                ],
            });
            await alert.present();
        }

        const createOrder = async() => {
            const user_id = store.getters.getUserId

            // Create order
            const order = new FormData()
            order.append('user_id', user_id)

            const url = `${process.env.VUE_APP_API_HOST_LOLLEVO}/orders`
            fetch(url, {
                method: 'POST',
                body: order
            })
            .then(data => data.json())
            .then(async (order) => {                
                if(order.id) {
                    for(const product of cart.value) {
                        const url = `${process.env.VUE_APP_API_HOST_LOLLEVO}/orders/details`
                        const data = new FormData()
                        data.append('amount', `${(product as any).quantity * (product as any).price}`)
                        data.append('quantity', (product as any).quantity)
                        data.append('order_id', order.id)
                        data.append('product_id', (product as any).id)
                        
                        fetch(url, {
                            method: 'POST',
                            body: data
                        }).then(data => data.json())
                        .then(res => console.log(res))
                    }

                    cart.value = []
                    store.commit('clearCart', [])
                    presentAlert()
                    // router.push({ name: 'Market' })
                }  
            })
            // const res = await response.json() 
            // console.log(res.data)
            
        }

        return {
            router,
            arrowBack,
            cart,
            utils,
            ramdonImage,
            createOrder
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
    // height: 90%;
    padding: 16px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cart__item {
    display: flex;
    align-items: center;
    height: 140px;
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
.cart__empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
}
</style>

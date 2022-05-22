<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header class="header" :translucent="true" collapse="fade" mode="ios">
                <ion-toolbar color="transparent" class="header__toolbar header__toolbar--primary">
                    <ion-buttons slot="start">
                        <ion-button @click="router.go(-1)" style="background: #ffffffaa; border-radius: 125px">
                            <ion-icon :icon="arrowBack" style="color: #000000;"/>
                        </ion-button>
                    </ion-buttons>
                    <ion-buttons slot="end">
                        <ion-button style="background: #ffffffaa; border-radius: 125px">
                            <ion-icon :icon="heart" style="color: #000000;"/>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <div class="detail">
                <div class="detail__wrapper-image">
                    <img :src="product.image" class="detail__image" alt="">
                </div>
                <div class="detail__content">
                    <h1 class="detail__name">{{ product.name }}</h1>
                    <p class="detail__price">${{ product.price }}</p>
                    <article class="detail__description">
                        {{ product.description }}
                    </article>
                </div>
            </div>
        </ion-content>
        <ion-footer class="detail__footer">
            <button class="deatil__button-add">Agregar al carrito</button>
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IonPage, IonHeader, IonFooter, IonToolbar, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { arrowBack, heart } from 'ionicons/icons';
import { useRouter, useRoute } from 'vue-router';

export default  defineComponent({
  name: 'ProductDetail',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonButton, IonIcon, IonFooter },
  setup() {
      const router = useRouter()
      const route = useRoute()
      const product: any = ref({})

      onMounted(async () => {
          const url = `${process.env.VUE_APP_API_HOST_LOLLEVO}/products/${route.params.id}`
          const response = await fetch(url)
          const data = await response.json()          
          console.log(data)
          const image = ramdonImage()
          data.image = image
          product.value = data
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
          route,
          arrowBack,
          heart,
          product,
          ramdonImage
      }
  }
});
</script>
<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
}
.header__toolbar--primary {
    --padding-end: 16px;
    --padding-start: 16px;
    --padding-top: 10px;
    --padding-bottom: 10px;
}
.header__title {
    padding: 0px;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
}
.detail__content {
    padding: 16px;
}
.detail__wrapper-image {
    height: 226px;
    width: 100%;
}
.detail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.detail__name {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    margin: 0px 0px 10px;
    color: #4F4F4F;
}
.detail__price {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #33907C;
}
.detail__description {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.16500000655651093px;
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

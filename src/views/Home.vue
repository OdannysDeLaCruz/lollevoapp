<template>
    <ion-page>
        <ion-header class="header">
        <ion-toolbar color="primary" class="header__toolbar header__toolbar--primary">
            <ion-buttons slot="end">
                <ion-button>
                    <IconCart />
                </ion-button>
            </ion-buttons>
            <ion-title class="header__title">Productos</ion-title>
        </ion-toolbar>
        <ion-toolbar color="primary" class="header__toolbar header__toolbar--secondary">
            <div class="search">
                <IconSearch class="search__icon"/>
                <input type="text" class="search__input" placeholder="Buscar productos">
            </div>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="category">
                <div v-for="(category, index) in categories"
                    :key="index" 
                    class="category__item" 
                    @click="router.push({name: 'Category', params: { category: category.name }})" >
                        <img class="category__image" :src="renderImage(category.image).name" alt="">
                        <span class="category__name">{{ category.name }}</span>
                </div>
               
                <div class="category__item" @click="router.push({name: 'Category', params: { category: 'All' }})">
                    <span class="category__name category__name--black-color">Ver todos</span>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'HomePage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonButton, IconCart, IconSearch },
  setup() {
      const router = useRouter()
      const categories = [
          { name: 'Bebidas', image: 'bebidas.png' },
          { name: 'Panaderia', image: 'panaderia.png' },
          { name: 'Vegetales', image: 'verduras.png' },
          { name: 'Frutas', image: 'frutas.png' },
          { name: 'Huevos', image: 'huevos.png' },
          { name: 'Dulces', image: 'dulces.png' },
          { name: 'Casa', image: 'hogar.png' },
          { name: 'Para tu mascota', image: 'mascotas.png' },
      ]

      const renderImage =  (image: string) => {

          const data = { 
              name: require('@/assets/category/'+image) 
          }

          return data
      }

      return {
          router,
          categories,
          renderImage
      }
  }
});
</script>
<style lang="scss" scoped>
.header {
    // padding-top: 30px
}
.header__toolbar--primary {
    --padding-end: 16px;
    --padding-start: 16px;
    --padding-top: 40px;
    --padding-bottom: 23px;
}
.header__toolbar--secondary {
    --padding-start: 20px;
    --padding-end: 20px;
}
.header__title {
    padding: 0px;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
}
.search {
    width: 100%;
    display: flex;
    align-items: center;
    background: #ffffff;
    height: 46px;
    width: 100%;
    padding: 11px 11px 11px 18px;
    border-radius: 125px;
    overflow: hidden;
}
.search__icon {
    width: 10%;
}
.search__input {
    width: 100%;
    height: 100%;
    padding-left: 30px;
    margin-right: 20px;
    border: none;
}
.search__input::placeholder {
    color: #4F4F4F;
    opacity: 0.2;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
}
.category {
    margin-top: 20px;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(3, 1fr);
}
.category__item {
    position: relative;
}
.category__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.category__name {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    color: #ffffff;
    background: rgba(0, 0, 0, .5);
    font-size: 11px;
    font-weight: 600;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.category__name--black-color {
    color: #000000;
    background: white;
    border: 1px solid;
}
</style>

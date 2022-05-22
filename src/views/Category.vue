<template>
    <ion-page>
        <ion-header class="header">
        <ion-toolbar color="primary" class="header__toolbar header__toolbar--primary">
            <ion-buttons slot="start">
                <ion-button @click="router.go(-1)">
                    <ion-icon :icon="arrowBack" />
                </ion-button>
            </ion-buttons>
            <ion-title class="header__title">{{ route.params.category }}</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="content">
                <ProductCard 
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import ProductCard from '@/components/ProductCard.vue';
import { arrowBack } from 'ionicons/icons';
import { useRouter, useRoute } from 'vue-router';

export default  defineComponent({
  name: 'CategoryPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonButton, IonIcon, ProductCard },
  setup() {
      const router = useRouter()
      const route = useRoute()
      const products = ref([])

      onMounted(async () => {
          const url = `${process.env.VUE_APP_API_HOST_LOLLEVO}/products`
          const response = await fetch(url)
          const data = await response.json()          
          products.value = data.data
      })

      return {
          router,
          route,
          arrowBack,
          products
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
    margin-top: 30px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    justify-items: center;
}
</style>

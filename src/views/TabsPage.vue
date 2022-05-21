<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home/market">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/home/search">
          <ion-icon :icon="search" />
          <ion-label>Buscar</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/home/orders">
          <ion-icon :icon="reader" />
          <ion-label>Mis pedidos</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/home/profile">
          <ion-icon :icon="person" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, search, reader, person } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
      return {
          home,
          search, 
          reader, 
          person,
      }
  }
});
</script>

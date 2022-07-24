<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header> -->
      
      <!-- <ExploreContainer name="Tab 3 page" /> -->

      <div id="container">
        <strong>{{  }}</strong>
        <p><a href="#" @click.prevent="logout">Cerrar sesión</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Tab3Page',
    components: { IonContent, IonPage },
    setup() {
        const store = useStore()
        const router = useRouter()

        const logout = () => {
            store.commit('logoutUser', [])    
            router.push({
                name: 'Login'
            })
        }
        return {
            logout
        }
    }
});
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-conten-custom">
        <FormLogin />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue';
import { IonPage, IonContent, alertController  } from '@ionic/vue';
import FormLogin from '@/components/FormLogin.vue';
import { useRoute } from 'vue-router';
import router from '@/router';

export default  defineComponent({
    name: 'Tab1Page',
    components: { FormLogin, IonContent, IonPage },
    setup() {
        const route = useRoute()

        const presentAlert = async (m?: string) => {

            const alert = await alertController.create({
                cssClass: 'my-custom-class',
                header: 'Notificación',
                subHeader: 'Usuario creado',
                message: 'Ya puedes ingresar y comprar tu productos favoritos',
                buttons: ['OK'],
            });
            await alert.present();
            await alert.onDidDismiss();
            router.push({
                name: 'Login'
            })
        }

        onUpdated(() => {
            if(route.query.isNewCreate) {
                presentAlert()
            }
        })
    }
});
</script>
<style lang="scss" scoped>
.ion-conten-custom {
    --padding-start: 32px;
    --padding-end: 32px;
    --background: #33907C;
}
</style>
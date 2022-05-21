<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-conten-custom">
        <FormLogin />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import FormLogin from '@/components/FormLogin.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { FormLogin, IonContent, IonPage }
});
</script>
<style lang="scss" scoped>
.ion-conten-custom {
    --padding-start: 32px;
    --padding-end: 32px;
    --background: #33907C;
}
</style>
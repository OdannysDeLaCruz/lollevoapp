<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-conten-custom">
        <FormRegister />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import FormRegister from "@/components/FormRegister.vue";

export default  defineComponent({
  name: 'Tab1Page',
  components: { FormRegister, IonContent, IonPage }
});
</script>
<style lang="scss" scoped>
.ion-conten-custom {
    --padding-start: 32px;
    --padding-end: 32px;
    --background: #33907C;
}
</style>
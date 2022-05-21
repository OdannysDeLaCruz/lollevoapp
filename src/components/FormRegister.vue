<template>
    <div class="form">
        <h1 class="form__title">Bienvenid@s a Lollevo</h1>
        <span class="form_subtitle">Registra tu cuenta</span>

        <div class="form__group">
            <ion-input class="form__input" placeholder="Primer nombre"></ion-input>
        </div>
        <div class="form__group">
            <ion-input class="form__input" placeholder="Apellidos"></ion-input>
        </div>
        <div class="form__group">
            <ion-input class="form__input" placeholder="Email/Número celular"></ion-input>
        </div>
        <div class="form__group">
            <ion-input class="form__input" placeholder="Contraseña"></ion-input>
        </div>
        <div class="form__group">
            <ion-input class="form__input" placeholder="Repita contraseña"></ion-input>
        </div>
        <div class="form__group">
            <button class="form__button" expand="full">Crear</button>
        </div>
        <div class="form__group">
            <a href="#" class="form__link" @click.prevent="router.push({name: 'Login'})">Ya tienes una cuenta ? <strong>Inicia sesión</strong></a>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonInput } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'FormLogin',
  components: { IonInput },
  setup() {
      const router = useRouter()

      return {
          router
      }
  }
});
</script>
<style lang="scss" scoped>
.form {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: -0.5788236856460571px;
    text-align: center;
    margin-bottom: 60px;
    color: #fff;
}
.form_subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.3858824074268341px;
    text-align: left;
    margin-bottom: 40px;
    color: #fff;
}
.form__group {
    width: 100%;
    margin-bottom: 16px;
}
.form__input {
    width: 100%;
    height: 48px;
    border: 1px solid #FFFFFF;
    border-radius: 24px;
    --color: #fff;
    --padding-start: 16px;
    --placeholder-opacity: 1;
}
.form__button {
    height: 48px;
    width: 100%;
    background: #FFFFFF;
    color: #13B58C;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3858824074268341px;
}
.form__link {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.43411770462989807px;
    color: #fff;
    text-align: center;
    margin: 40px auto;
    display: block;
    text-decoration: none;
}
</style>
<template>
    <div class="form">
        <h1 class="form__title">Bienvenid@s a Lollevo</h1>
        <span class="form_subtitle">Registra tu cuenta</span>

        <div class="form__group">
            <input type="text" class="form__input" placeholder="Primer nombre" v-model="name" />
        </div>
        <div class="form__group">
            <input type="text" class="form__input" placeholder="Apellidos" v-model="lastname" />
        </div>
        <div class="form__group">
            <input type="email" class="form__input" placeholder="Email" v-model="email" />
        </div>
        <div class="form__group">
            <input type="password" class="form__input" placeholder="Contraseña" v-model="password" />
        </div>
        <div class="form__group">
            <input type="password" class="form__input" placeholder="Repita contraseña" v-model="repeatPassword"/>
        </div>
        <div class="form__group">
            <button class="form__button" @click="getData()">Crear</button>
        </div>
        <div class="form__group">
            <span class="form__link" @click="router.push({name: 'Login'})">Ya tienes una cuenta ? <strong>Inicia sesión</strong></span>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'FormRegister',
//   components: {  },
    setup() {
        const router = useRouter()
        const name = ref('')
        const lastname = ref('')
        const email = ref('')
        const password = ref('')
        const repeatPassword = ref('')

        const onInput = (event: any) => {
            console.log(event.target)
        } 
        const getData = async() => {
            const data = new FormData()
            data.append('name', name.value)
            data.append('email', email.value)
            data.append('password', password.value)

            const url = `${process.env.VUE_APP_API_HOST_LOLLEVO}/users/`
            const response = await fetch(url, { 
                method: 'POST',
                body: data
            })
            
            if(response.status === 201) {
                await response.json()    
                router.push({
                    name: 'Login',
                    query: {
                        'isNewCreate': 'true'
                    }
                })
            } else {
                alert('Ha ocurrido un error, intente de nuevo.')
            }
        }

      return {
          router,
          name,
          lastname,
          email,
          password,
          repeatPassword,
          onInput,
          getData
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
    background: transparent;
    width: 100%;
    height: 48px;
    border: 1px solid #FFFFFF;
    border-radius: 24px;
    color: #fff;
    padding-left: 16px;
    outline: none;
}
.form__input::placeholder {
    color: #fff;
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
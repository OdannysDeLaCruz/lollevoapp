<template>
    <div class="product">
        <div class="product__wrapper-image">
            <img class="product__image" :src="ramdonImage()" alt="">
        </div>
        <div class="product__body">
            <h2 class="product__name">{{ product.name }}</h2>
            <div class="product__price">{{ product.price }}</div>
            <div class="product__add" @click="$router.push({ name: 'ProductDetail', params: { id: product.id } })"> + </div>    
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            require: true
        }
    },
    setup() {
        const imageIds = [1,2,3,4,5,6,7,8,9,10,12,13,14]
        const ramdonImage = () => {
            const id = Math.floor(Math.random() * (imageIds.length - 1) + 1)
            const data = { 
                name: require(`@/assets/products/${id}.png`) 
            }
            return data.name
        } 
        
        return {
            ramdonImage
        }
    },
})
</script>

<style lang="scss" scoped>
.product {
    height: 200px;
    min-width: 120px;
    max-width: 160px;
    border-radius: 10px;
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.product__wrapper-image {
    height: 128px;
    width: 100%;
}
.product__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.product__body {
    height: 72px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.product__name {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #4A4A4A;
    margin: 0px 0px 10px;
}
.product__price {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    color: #33907C;
}
.product__add {
    width: 30px;
    height: 30px;
    background: #33907C;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
    box-shadow: 3px 3px 10px 0px #6e6e6ea8;
}
</style>
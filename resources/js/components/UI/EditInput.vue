<template>
    <div>
    <h4 @click="showFormLocal = true" :class="{'text': 1, 'small' : (variant == 'small')}" v-if="!showFormLocal">{{ inputText }}</h4>
        <b-form @submit.prevent="action" v-if="showFormLocal" ref="refForm" >
            <b-form-group class="editing-text">
                <b-form-input v-model="inputText" ref="refInput" :placeholder="placeholder"></b-form-input>
                <div class="input-buttons">
                    <b-button type="submit" variant="default">
                        <b-icon icon="check" variant="dark"></b-icon>
                    </b-button>
                    <b-button type="button" variant="default" @click="cancelEvent">
                        &times;
                    </b-button>
                </div>
            </b-form-group>
            </b-form>
    </div>  
</template>

<script>

export default ({
    props: ['text', 'placeholder', 'variant', 'showForm'],
    mounted() {

    },
    data() {
        return {
            inputText: this.text,
            showFormLocal: this.showForm
        }
    },
    watch: {
        showFormLocal(val) {
         
            if(val)
            {
                this.$nextTick(() => {
                    console.log(this.$refs);
                    this.$refs.refForm.focus()
                    this.$refs.refInput.focus()
                })
            }
                
        }
    },
    methods: {
        action() {
            this.$emit('action', this.inputText);
            this.showFormLocal = false;
        },

        cancelEvent() {
            this.inputText = this.text;
            this.showFormLocal = false;
            this.$emit('onCancel');
        },
        onBlurForm() {
            if(this.inputText !== this.text)
                this.action()
            else
                this.cancelEvent()    
        }
    }
})
</script>

<style scoped>
    .text {
        padding: 10px;
        min-height: 20px;
        cursor: pointer;
        transition: all 0.1s;
        margin-bottom: 20px;
        word-break: break-all;
    }

    .text.small {
        padding: 2px;
        min-height: 20px;
        margin: 0;
    }

    .text:hover {
        background: #eaeaea;
    }

    .editing-text {
        position: relative;
    }

    
    .text .editing-text input {
        font-size: 1.3rem;
        box-shadow: none;
    }

    .text.small .editing-text input {
        font-size: 1rem;
    }

    .input-buttons {
        position: absolute;
        z-index: 2;
        right: 0;
    }

    .input-buttons button {
        background: #fff;
    }    
</style>
<template>
    <div id="register">
        <div class="centered-box">
            <div class="m-5">
                <h3>Create a new account</h3>

                <b-form class="mt-3 mb-3">
                    <b-form-group>
                        <b-form-input placeholder="Full Name" required></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input placeholder="Email Address" required></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input placeholder="Username" required></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input placeholder="Password" required></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary" block>Login</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Register',
      components: {

      }
    }
</script>

<style>
    #register {
        background: #292c33;
        height: 100vh;
        padding: 0;
        margin: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .centered-box {
        background: #ffffff;
    }
</style>

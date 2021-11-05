<template>
    <div id="login">
        <div class="centered-box">
            <div class="m-5">
                <img src="../assets/bogus-logo.png" class="img-fluid mx-auto d-block pt-2" width="160px" />
                <b-form class="mt-3 mb-3">
                    <b-form-group>
                        <b-form-input placeholder="Username" required></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input placeholder="Password" required></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary" block>Login</b-button>
                </b-form>

                <p>Register for a new <b-link to="/register">account</b-link>.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Login',
      components: {

      }
    }
</script>

<style>
    #login {
        background: #224C74 radial-gradient(#336699, #1e385c);
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

<template>
  <div class="body">
    <SectionScrollable>
        <HeaderLogo/>

        <div class="m-3">
            <!-- <b-form>
                <b-form-group id="input-group-1" label="Email address" label-for="input-1" description="We'll never share your email with anyone else.">
                    <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Name" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Run" label-for="input-3">
                    <b-form-select id="input-3" v-model="form.run" :options="runs" required></b-form-select>
                </b-form-group>

                <b-form-group label="Comments">
                    <b-form-textarea id="textarea" v-model="text" placeholder="The run was..." rows="3" max-rows="6"></b-form-textarea>
                </b-form-group>

                <b-form-group label="Upload Image" label-cols-sm="2">
                    <b-form-file id="file-small" size="md"></b-form-file>
                </b-form-group>

                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
                        <b-form-checkbox value="me">Yes, I agree to the terms &amp; conditions to upload an image.</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>

                <b-button type="submit" variant="success" block>Upload</b-button>
            </b-form> -->
        </div>

    </SectionScrollable>

    <Footer/>
  </div>
</template>

<script>
    import SectionScrollable from '@/components/SectionScrollable.vue'
    import HeaderLogo from '@/components/HeaderLogo.vue'
    import Footer from '@/components/Footer.vue'

    export default {
      name: 'Upload',
      components: {
          SectionScrollable,
          HeaderLogo,
          Footer
      }
    }
</script>

<style>
    html, body {height: 100%; margin: 0; padding: 0}

    .body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

</style>

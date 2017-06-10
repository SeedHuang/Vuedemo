<template>
    <div class="test">
        <span v-html="title"></span>
        <p>
            First Name: {{user.firstName}}

        </p>
        <span v-text="user.lastName"></span>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data () {
            return {
                title: '<h1>Hello My World</h1>',
                user: {
                    'firstName': 'Huang',
                    'lastName': 'Chunhua'
                }
            }
        }
    }
</script>
<style scoped>
        .test {
            color: red
        }
</style>

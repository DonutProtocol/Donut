import headerView from '../../components/header-model/header-model.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        headerView
    },
    methods: {
        Chainrz(){
            this.$router.push("/Chain");
        }
    }
}
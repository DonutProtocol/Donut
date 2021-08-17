import headerView from '../../components/header-model/header-model.vue'
export default {
  data() {
    return {
      states: false,
    }
  },
  components: {
    headerView
  },
  methods: {
    duplicates() {
      this.states = !this.states;
    },
    Chainrz() {
      this.$router.push("/Chain");
    }
  }
}
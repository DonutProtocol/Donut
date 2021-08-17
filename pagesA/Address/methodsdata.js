import headerView from '../../components/header-model/header-model.vue'
export default {
  data() {
    return {
      selecto: true,
      selectt: false,
      selects: false,
      states: false,
      statest: false,
      List: [{
          page: "1",
          state: true,
        },
        {
          page: "2",
          state: false,
        },
      ],
    }
  },
  components: {
    headerView
  },
  methods: {
    switchs(e) {
      if (e == 1) {
        this.selecto = true;
        this.selectt = false;
        this.selects = false;
      }
      if (e == 2) {
        this.selecto = false;
        this.selectt = true;
        this.selects = false;
      }
      if (e == 3) {
        this.selecto = false;
        this.selectt = false;
        this.selects = true;
      }
    },
    duplicates() {
      this.states = !this.states;
    },
    switchst(e) {
      for (var i in this.List) {
        if (this.List[i].page == e.page) {
          this.List[i].state = true;
        } else {
          this.List[i].state = false;
        }
      }
    },
    ckbalance() {
      this.$router.push("/balance");
    },
    Chainrz() {
      this.$router.push("/Chain");
    }
  }
}
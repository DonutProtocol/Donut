import tableerView from '../../components/tableer/tableer.vue'
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
      statuso:false,
      statust:false,
      statuss:false,
      nameo:"More",
      namet:"More",
      names:"More",
    }
  },
  components: {
    tableerView,
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
    Addres() {
      this.$router.push("/Address");
    },
    changes(e){
      if(e==1){
        this.statuso=!this.statuso;
        this.statust=false;
        this.statuss=false;
        if(this.statuso){
          this.nameo="Less";
        }
        else{
          this.nameo="More";
        }
        this.namet="More";
        this.names="More";
      }
      if(e==2){
        this.statust=!this.statust;
        this.statuso=false;
        this.statuss=false;
        if(this.statust){
          this.namet="Less";
        }
        else{
          this.namet="More";
        }
        this.nameo="More";
        this.names="More";
      }
      
      if(e==3){
        this.statuss=!this.statuss;
        this.statust=false;
        this.statuso=false;
        this.nameo="More";
        this.namet="More";
        if(this.statuss){
          this.names="Less";
        }
        else{
          this.names="More";
        }
      }
    }
  }
}
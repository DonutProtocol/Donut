import ChainerView from '../../components/Chainer/Chainer.vue'
import ChainserView from '../../components/Chainser/Chainser.vue'
import eighteenView from '../../components/eighteen/eighteen.vue'
import twelveserView from '../../components/twelveser/twelveser.vue'
import eightserView from '../../components/eightser/eightser.vue'
import headerView from '../../components/header-model/header-model.vue'
export default {
    data() {
        return {
            statel:true,
            statec:false,
            stater:false,
            state:0,
            status:1,
            statusso:true,
            statusst:false,
            statusss:false,
            statussf:false,
        }
    },
    components: {
        ChainerView,
        ChainserView,
        eighteenView,
        twelveserView,
        eightserView,
        headerView
    },
    methods: {
        switchl(e){
            this.state=e;
            if(e==1){
                this.statel=true;
                this.statec=false;
                this.stater=false;
                this.status=1;
            }
            if(e==2){
                this.statel=false;
                this.statec=true;
                this.stater=false;
                this.status=2;
            }
            if(e==3){
                this.statel=false;
                this.statec=false;
                this.stater=true;
                this.status=3;
            }
        },
        switchr(e){
            console.log(e)
            if(e==25){
                this.statusso=true;
                this.statusst=false;
                this.statusss=false;
                this.statussf=false;
            }
            if(e==18){
                this.statusso=false;
                this.statusst=true;
                this.statusss=false;
                this.statussf=false;
            }
            if(e==12){
                this.statusso=false;
                this.statusst=false;
                this.statusss=true;
                this.statussf=false;
            }
            if(e==8){
                this.statusso=false;
                this.statusst=false;
                this.statusss=false;
                this.statussf=true;
            }
        }
    }
}
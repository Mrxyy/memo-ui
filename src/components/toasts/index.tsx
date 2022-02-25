import { defineComponent, createApp, h, getCurrentInstance ,Teleport,ref,resolveDirective,withDirectives, Directive} from "vue";
import { autoFocus } from "../../utils/direactives/autoFocus";
import moToasts from "./index.vue"
import moButton from "../buttons/index.vue";
import moInput from "../form/input.vue"
import "./index.scss";

if(!document.querySelector("#toastsRoot")){
  const toastsRoot = document.createElement("div");
  toastsRoot.id = "toastsRoot";
  toastsRoot.className = "mo-toasts-root";
  document.body.appendChild(toastsRoot);
}


interface DataType{
  alertContainer:ToastsData[]
  confirmContainer:ToastsData[]
  messageContainer:ToastsData[]
  promptContainer:ToastsData[]
}

class ToastsData {
  type?:"warning" | "info" | "success" | "danger"
  text:string
  id?:string
  detail?:JSX.Element | string
  onClose?:()=>boolean
  onConfirm?:(value?:any)=>boolean
  onCancel?:()=>boolean
  isAlways:boolean
  duration?:number
  kind?:"alert" | "mesage" | "confirm" | 'prompt'
  constructor({type,text,detail,onClose,id,duration,isAlways,kind,onConfirm,onCancel}:ToastsData) {
    this.kind = kind ?? "mesage"
    this.type = type ?? "info"
    this.text = text ?? ""
    this.detail = detail
    this.onClose = onClose
    this.onConfirm = onConfirm
    this.onCancel = onCancel
    this.id = id ?? Date.now().toString()
    this.duration = duration ?? 5000
    this.isAlways = isAlways ?? false
  }
}

//! https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md#%E6%8F%92%E6%A7%BD jsx中使用有名插槽

const app = createApp({
  data():DataType{
    return {
      alertContainer:[],
      confirmContainer:[],
      messageContainer:[],
      promptContainer:[]
    }
  },
  components:{
    moToasts,
    moButton,
    moInput
  },
  mounted(){

  },
  methods:{
    removeMessage(toastsData:ToastsData,container?:ToastsData[]){
      const containerBox = (container ?? this.messageContainer)
      containerBox.find((v:ToastsData,i:number)=>{
        const flag = ( v.id === toastsData.id);
        if(flag){
          containerBox.splice(i,1)
        }
        return flag;
      })
    },
    addMessage(toastsData:ToastsData,container?:ToastsData[]){
      const containerBox = (container ?? this.messageContainer)
      const {onConfirm,onClose,onCancel} = toastsData;
      toastsData.onClose = ()=>{
        const flag = onClose ? onClose() : true;
        flag && this.$nextTick(()=>this.removeMessage(toastsData,containerBox));
        return flag;
      }
      toastsData.onConfirm = (value?:any)=>{
        const flag = onConfirm ? onConfirm(value) : true;
        flag && this.$nextTick(()=>this.removeMessage(toastsData,containerBox));
        return flag;
      }
      toastsData.onCancel = ()=>{
        const flag = onCancel ? onCancel() : true;
        flag && this.$nextTick(()=>this.removeMessage(toastsData,containerBox));
        return flag;
      }
      containerBox.push(toastsData);
      !toastsData.isAlways && setTimeout(()=>this.removeMessage(toastsData,containerBox),toastsData.duration)
    },
    warnMessage(toastsData:ToastsData){
      toastsData.type = "warning";
      this.addMessage(new ToastsData(toastsData));
    },
    infoMessage(toastsData:ToastsData){
      toastsData.type = "info";
      this.addMessage(new ToastsData(toastsData));
    },
    successMessage(toastsData:ToastsData){
      toastsData.type = "success";
      this.addMessage(new ToastsData(toastsData));
    },
    dangerMessage(toastsData:ToastsData){
      toastsData.type = "danger";
      this.addMessage(new ToastsData(toastsData));
    },
    alert(toastsData:ToastsData){
      toastsData.kind = "alert";
      toastsData.isAlways = true;
      this.addMessage(new ToastsData(toastsData),this.alertContainer);
    },
    confirm(toastsData:ToastsData){
      toastsData.kind = "confirm";
      toastsData.isAlways = true;
      this.addMessage(new ToastsData(toastsData),this.confirmContainer);
    },
    prompt(toastsData:ToastsData){
      const input = ref<string>('');
      toastsData.kind = "prompt";
      toastsData.isAlways = true;
      const Test = defineComponent(function(){
      const autofocus = resolveDirective('autofocus')
        return  ()=>withDirectives(h(moInput,{
          onChange:({target = {value:''}})=>{input.value = target?.value}
        }), [
          [autofocus as Directive]
        ])
      })
      toastsData.detail = <Test/>
      console.log(toastsData.detail,app,App);
      const onConfirmFx = toastsData.onConfirm;
      toastsData.onConfirm = ()=>{
        return onConfirmFx ? onConfirmFx(input.value) : true;
      }
      this.addMessage(new ToastsData(toastsData),this.promptContainer);
    },
  },
  render() {
    return (<template>
      <Teleport to="body">
        <div  class="message-container fixed right-3 top-20">
          <div class="inline-flex flex-col z-50">
            {this.messageContainer.map((v:any)=>(<div key={v.id}>
              <moToasts class="mb-2" v-slots={{
                detail:v.detail
              }} text={v.text} theme={v.type} onClose={v.onClose}>
              </moToasts>
            </div>))}
          </div>
        </div>
        <div v-show={this.confirmContainer.length > 0 || this.alertContainer.length > 0 || this.promptContainer.length > 0} class="inline-flex fixed justify-center items-center inset-0 m-auto flex-col z-50 bg-dark bg-opacity-30 alert-container">
          {/* 确认框 */}
          {this.confirmContainer.map((v:any)=>(<div key={v.id}>
              <moToasts class="mb-2" v-slots={{
              detail:v.detail
            }} text={v.text} theme={v.type} onConfirm={v.onConfirm}  onCancel={v.onCancel} isAlways={true} type={v.kind}>
            </moToasts>
          </div>))}
          {/* alert框 */}
          {this.alertContainer.map((v:any)=>(<div key={v.id}>
              <moToasts class="mb-2" v-slots={{
              detail:v.detail
            }} text={v.text} theme={v.type} onConfirm={v.onConfirm} isAlways={true} type={v.kind} >
            </moToasts>
          </div>))}
          {/* 输入框 */}
          {this.promptContainer.map((v:any)=>(<div key={v.id}>
              <moToasts class="mb-2" v-slots={{
              detail:v.detail
            }} text={v.text} theme={v.type} onConfirm={v.onConfirm}  onCancel={v.onCancel} isAlways={true} type={v.kind}>
            </moToasts>
          </div>))}
        </div>
      </Teleport>
    </template>);
  }
})
app.directive("autofocus",autoFocus);
const App =  app.mount("#toastsRoot");

export default App;

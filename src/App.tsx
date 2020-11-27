import { defineComponent } from 'vue';
import Button from './components/button';
import './assets/antd.css';
import './assets/antd.code.css';
import './assets/template.less';

// vue 3.0也支持函数组件
const App = defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div class='ant-row'>
          <div class='ant-col ant-col-12 code-boxes-col-2-1'>
            <section class='code-box expand' id='components-button-demo-basic'>
                <section class='code-box-demo'>
                    <Button type='primary' class='ant-btn'>Primary Button</Button>
                    <Button type='dashed' class='ant-btn'>Dashed Button</Button>
                    <Button type='link' class='ant-btn'>Link Button</Button>
                    <Button type='text' class='ant-btn'>Text Button</Button>
                    <Button class='ant-btn'>Default Button</Button>
                </section>
            </section> 
          </div>
        </div>
      </>
    );
  },
});

export default App;

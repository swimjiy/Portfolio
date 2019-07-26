import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Button from '../components/Button';
import Header from '../components/Header';

// storiesOf('Button', module)
//   .add('with text', () => '<my-button>with text</my-button>')
//   .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
//   .add('as a component', () => ({
//     components: { MyButton },
//     template: '<my-button :rounded="true">rounded</my-button>'
//   })
// );

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('default', () => '<Button :rounded="false">default</Button>')
  .add('rounded', () => ({
    // components: { Button },
    // template: '<Button :rounded="false">rounded</Button>'
  }))

storiesOf('Header', module)
  .add('default', () => ({
    components: { Header },
    template: '<Header/>'
  }))
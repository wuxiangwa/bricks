import React, { Component } from 'react';
import {CardDemo as BaseCard, Icon, CardFooter} from '../../components';

export default class index extends Component {
  state = {
    list: [
      {
        name: 'BackToTop',
        meta: {
          icon: 'info-circle',
          description: 'Jump component is based on jump.js'
        },
        path: '/components/backToTop'
      }, {
        name: 'Brace',
        path: '/components/brace',
        meta: {
          description: 'Code editor component that based on brace',
          repository: 'https://github.com/vue-bulma/brace',
          link: 'components/Brace'
        }
      }, {
        name: 'Collapse',
        path: '/components/collapse',
        meta: {
          description: 'Collapse component',
          repository: 'https://github.com/vue-bulma/collapse',
          link: 'components/Collapse'
        }
      }, {
        name: 'Datepicker',
        path: '/components/datepicker',
        meta: {
          description: 'Datepicker component is based on flatpickr',
          repository: 'https://github.com/vue-bulma/datepicker',
          link: 'components/Datepicker'
        }
      }, {
        name: 'Emoji',
        path: '/components/emoji',
        meta: {
          description: 'Emoji Component is based on emojione.com',
          repository: 'https://github.com/vue-bulma/emoji',
          link: 'components/Emoji'
        }
      }, {
        name: 'Message',
        path: '/components/message',
        meta: {
          description: 'Message component',
          repository: 'https://github.com/vue-bulma/message',
          link: 'components/Message'
        }
      }, {
        name: 'Modal',
        path: '/components/modal',
        meta: {
          description: 'Modal component',
          repository: 'https://github.com/vue-bulma/modal',
          link: 'components/Modal'
        }
      }, {
        name: 'Notification',
        path: '/components/notification',
        meta: {
          description: 'Notification component',
          repository: 'https://github.com/vue-bulma/notification',
          link: 'components/Notification'
        }
      }, {
        name: 'ProgressBar',
        path: '/components/progress-bar',
        meta: {
          description: 'ProgressBar component',
          repository: 'https://github.com/vue-bulma/progress-bar',
          link: 'components/ProgressBar'
        }
      }, {
        name: 'ProgressTracker',
        path: '/components/progress-tracker',
        meta: {
          description: 'ProgressTracker component is based on progress-tracker',
          repository: 'https://github.com/vue-bulma/progress-tracker',
          link: 'components/ProgressTracker'
        }
      }, {
        name: 'Quill',
        path: '/components/quill',
        meta: {
          description: 'Your powerful, rich text editor',
          repository: 'https://github.com/vue-bulma/quill',
          link: 'components/Quill'
        }
      }, {
        name: 'Rating',
        path: '/components/rating',
        meta: {
          description: 'Rating component is based on starability.css',
          repository: 'https://github.com/vue-bulma/rating',
          link: 'components/Rating'
        }
      }, {
        name: 'Slider',
        path: '/components/slider',
        meta: {
          description: 'Slider component',
          repository: 'https://github.com/vue-bulma/slider',
          link: 'components/Slider'
        }
      }, {
        name: 'Switch',
        path: '/components/switch',
        meta: {
          description: 'Switch component',
          repository: 'https://github.com/vue-bulma/switch',
          link: 'components/Switch'
        },
      }, {
        name: 'Tabs',
        path: '/components/tabs',
        meta: {
          description: 'Tabs component',
          repository: 'https://github.com/vue-bulma/tabs',
          link: 'components/Tabs'
        },
      }, {
        name: 'Tooltip',
        path: '/components/tooltip',
        meta: {
          description: 'Tooltip component is based on hint.css',
          repository: 'https://github.com/vue-bulma/tooltip',
          link: 'components/Tooltip'
        }
      }, {
        name: 'Lory',
        path: '/components/lory',
        meta: {
          description: 'Slider component is based on lory, lory: ☀ Touch enabled minimalistic slider',
          repository: 'https://github.com/vue-bulma/lory',
          link: 'components/Lory'
        }
      }
    ]
  }

  renderFooters() {
    return (<CardFooter>
      <CardFooter.Item><Icon size={'is-small'} prefix='fab' icon={'github'}/>Repository</CardFooter.Item>
      <CardFooter.Item><Icon size={'is-small'} prefix='fas' icon={'link'}/>Demo</CardFooter.Item>
    </CardFooter>)
  }

  onClick() {}

  render() {
    const {list} = this.state
    return (<div className="columns is-mobile is-multiline">
      {
        list.map((vo, key) => (
          <div className="column is-half-mobile  is-one-third-tablet is-one-third-desktop" key={key}>
            <BaseCard
              title={vo.name}
              footers={this.renderFooters()}
              onClick={() => this.onClick()}>{vo.meta.description}
            </BaseCard>
          </div>
        ))
      }
    </div>)
  }
}

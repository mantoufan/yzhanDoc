import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import TreePlugin, { Tree } from '../src/tree'
import PaginationPlugin, { Pagination } from '../src/pagination'
import FormPlugin, { Form } from '../src/form'
import InputPlugin, { Input } from '../src/input'
import ModalPlugin, { Modal } from '../src/modal'
import IconPlugin, { Icon } from '../src/icon'
import TabsPlugin, { Tabs, Tab } from '../src/tabs'
import BasePopoverPlugin, { BasePopover } from '../src/base-popover'
import PopoverPlugin, { Popover } from '../src/popover'
import TablePlugin, { Table } from '../src/table'

const installs = [
  ButtonPlugin,
  TreePlugin,
  PaginationPlugin,
  FormPlugin,
  InputPlugin,
  ModalPlugin,
  IconPlugin,
  TabsPlugin,
  BasePopoverPlugin,
  PopoverPlugin,
  TablePlugin
]

export {
  Button,
  Tree,
  Pagination,
  Form,
  Input,
  Modal,
  Icon,
  Tabs,
  Tab,
  BasePopover,
  Popover,
  Table
}

export default {
  version: '1.0.2',
  install(app: App) {
    installs.forEach(plugin => app.use(plugin))
  }
}

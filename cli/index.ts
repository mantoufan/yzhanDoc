import { Command } from 'commander'
import { onCreate } from './command/create'

//创建命令对象
const cmd = new Command()

// 注册命令、参数，以及用户传入之后的回调函数
// $ tsnd ./src/index.ts create

cmd
  .command('create')
  .description('创建一个组件模板或配置文件')
  .option('-t --type <type>', '创建类型，可选类型：component, lib-entry')
  .action(onCreate)

// execute 命令行解析
cmd.parse()

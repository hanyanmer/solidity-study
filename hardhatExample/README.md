# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# 概述
hardhat是一个编译、部署、测试、调试以太坊应用的开发环境。
围绕着任务和插件的概念设计的。每次在cli运行hardhat的时候会运行一个任务。
例如npx hardhat compile。运行的是内置的compile任务。任务可以调度其他任务，允许定义复杂的工作流程。也可以自定义任务。
## 安装
```shell
npm install --save-dev hardhat
```
## 创建项目
```shell
npx hardhat
```
## 运行任务
可以运行的任务有： accounts，check，clean,compile,console,flatten,help,node,run.

上面是内置的任务列表，当我们使用插件添加更多的功能的时候，插件定义的任务也在这里面显示。这里是我的出发起点。

### 添加一个自定义的任务
```javscript
task("balance","print an account balance").setAction(
  async ()=>{
    console.log('我的任务')
  }
)
```
 添加一个自定义的任务并通过npx hardhat help查看
#### 运行任务
```shell
npx hardhat 任务的名字
```
运行我自定义的任务

npx hardhat balance


## 编译合约
```shell
npx hardhat compile
```
## 测试合约
在test/ 文件夹下面结合etherjs进行测试，也可以使用其他库进行测试。

```shell
npx hardhat test
```
## 部署合约
在script/ 里面，编写部署
```shell
npx hardhat run scripts/deploy.js
```

## 连接钱包或dapp到hardhat网络
hardhat在启动时，默认情况下会启动一个hardhat network的内存实例，你也可以独立的方式运行hardhat network，以便外部客户（可能是metamask或者dapp或者是脚本）可以连接到它。要以独立的方式运行hardhat network，需要执行
```shell
npx hardhat node
#Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```
这将暴露一个JSON-rpc接口链接到hardhat网络，只要将钱包或应用程序连接到http://localhost:8545就可以使用它了

可以试试npx hardhat node启动一个节点之后，在运行
```shell
npx hardhat run scripts/sample-script.js --network localhost
```

至此：我们已经创建了一个项目，运行了一个hardhat任务；编译了一个智能合约；安装了waffle插件，使用waffle和etherjs插件编写并运行了一个测试；并部署了一个合约。

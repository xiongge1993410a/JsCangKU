#### 简易的命令行入门教程:

Git 全局设置:

```
git config --global user.name "熊戈"
git config --global user.email "692508978@qq.com"
```

创建 git 仓库:

```
mkdir xiongge
cd xiongge
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/xiong-ge/xiongge.git
git push -u origin master
git pull origin master
```

已有仓库?

```
cd existing_git_repo
git remote add origin https://gitee.com/xiong-ge/xiongge.git
git push -u origin master
```

```
git config --global user.name  //配置姓名
git config --global user.email  //配置邮箱
git config --list  //查看配置信息
git init 	//初始化本地仓库
git status 	 //查看文件状态
git add 文件名 	//添加某个文件到暂存区，如果写 . 代表当前文件夹下所有的文件、
git commit -m 日志说明   //提交到本地仓库
git log    //查看提交记录
git reflog // 查看所有的提交记录
git checkout 文件名    //撤销，让暂存区文件覆盖工作区间文件
git rm --cached 文件名   	//在暂存区移除相应文件
git reset --hard 提交ID  	//恢复到指定版本
git branch      //查看分支
git branch develop  //创建分支
git checkout 分支名  //切换分支
git merge  //合并分支
git branch -d 分支名称  //删除分支
git clone 地址 //克隆远程仓库
git push 地址 分支名  //往远程仓库推送
git pull 地址  //将远程仓库代码拉取到本地
git remote add 名称 地址 //给地址取别名
git pull origin master  //-u的参数让git记录信息，下次只需要 git push 就能进行提交
ssh-keygen  //生成一对密钥
```


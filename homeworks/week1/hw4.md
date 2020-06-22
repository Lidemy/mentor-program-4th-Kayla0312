# hw4：跟你朋友介紹Git
## 什麼是 Git?
用來管理不同的版本檔案的程式。   

## 為什麼需要 Git ?  
最常見的版本控制方式，通常都使用複製檔案方式，保留每次修改版本來控管，但每個檔案修改後，我們看不出檔案之間修改的差異。如果和他人一起共用修改檔案，檔案被覆蓋掉了，也就救不回來了。使用 git 控管版本，最大的好處就是可以**清楚的紀錄每次修改、方便查看修改差異、可與他人共同開發、分散式的版控系統。**  
  
## 基本 Git觀念  
![](https://i.imgur.com/LN85lkd.png)    

## Git 常用指令  
 
| 指令 | 說明 | 舉例 |備註 |
| :--------:| :--------: | :--------: | :--------: |
| git init | 初始化資料夾開始做版本控制 || 資料夾內會自動新增一個 `.git`資料夾 |  
| git status| 查詢目前 git 狀態 |||  
| git add .| 將檔案加入版本控制，從 Working Directory 移至 Staging Area | 1. `git add .`＋filename  2.`git add .` / `git add .` foldername 將所有檔案一次加入版本控制 ||   
| git commit | 建立一個新版本，將 Staging Area 內容移至 Repo | 1. `add commit` 用在較長的內容編寫（會進入到 vim 裡編寫內容） 2.`git commit -m “filename” `  3.`commit -am “filename” `  適用已存在，修改的檔案，但尚未 commit| 新增的檔案不適用 `add commit -am`，需先使用 `add.`加入 | 
| git log| 查詢歷史紀錄 | 1.`git log`顯示完整版本號 2.`git log --online`顯示簡短 7 碼 || 
| git checkout | 指定回到某個 commit / branch 版本 | `git checkout` +版本號 / 切回到原先版本`git checkout master` || 
| .gitignore | 將想要忽略版本控制的檔案放到這裡面 || 進入到 vim 輸入要忽略版控的檔案 |  
| git diff | 在 commit 之前查看和上次的修改差異 |||

## 為什麼需要 Branch？ 
在不同的 branch 各自做開發，例如 branch 1 開發新功能，branch 2 修正 bug，兩邊各自行動，檔案不互相干擾，最後使用 merge 將 branch 1、2 檔案合併，即可得到修正好 bug 也具有新增功能的檔案。 

## Branch 相關常用指令
| 指令 | 說明 | 舉例 |備註 |
| :-------- | :-------- | :-------- | :-------- |
| git branch -v | 查看目前 branch 有哪些 || 主要 branch 稱作：master | 
| git branch | 新增 branch | `git branch` +branchname ||
| git branch -d | 刪除 branch |||
| git merge | 將分支的 branch 和併進來 master | `git merge filename` | 將 branch 合併進 master 後，就可將分支的 branch 刪除 `git branch -d +branchname` |  
| hook |可以去偵測某些指令，發生某件事件的時通知 | `pre-commit hook`設定指令檢查 | 通常用於 commit、push 前，不需手動去執行指令檢查。例如：程式碼是否符合規範，或放到一些不該放的資訊 |  

## 關於 GitHub  
### Git vs GitHub
Git：版本控制的程式  
GitHub：最主要功能用來放置 git repository  
  
### 如何把 Code 放上 GitHub？  
1. add new repository  
2. 輸入 Repository name > Creating repository  
3. 在終端機輸入 GitHub 上的 `git remote add origin http://github.com/......`、`git push -u orgin master`  
  
### 如何把 Local 端修改的檔案，更新到 GitHub上：  
檔案修改：`git push origin master`  
新增的 branch：先切換到新增的 branch 後，`git push origin newbranch`  
  
### 如何將 GitHub 上最新的 repository 下載下來？ 
`git pull orgin master`
Note：遠端和本地衝突時，同 merge 衝突解決方式，進入到 vim 修改儲存後 > commit > push 回到遠端。  
  
### 下載他人的 repository  
1. Clone or download 直接下載檔案或 copy link 到終端機，下指令 `git clone + SSH link`  
2. 若想修改他人檔案，將檔案 push 到自己的 GitHub 上時。因為沒有權限，需要先 fork 複製一份到自己的 repository，在 clone 到 local 端，即可將自己修改後的版本 push 到自己 GitHub 上的 repo。  
  
## 常見問題  
1. 解決 merge 時 conflict 衝突：若有衝突會標示在檔案內衝突的部分，需手動進行修改要保留的內容，修改後直接存檔在 commit 一次即可解決衝突。  
2. 修改 commit message：`git commit --amend` > 進入到進入到編輯模式修改  
3. 刪除掉已建立的 commit：  
   * `git reset HEAD＾`回到上一個commit 狀態
   * `git reset HEAD＾ --hard`:上一個 commit 所有檔案都不要
   * `git reset HEAD＾ --sofe`:上一個 commit 不需要，但修改的檔案會保留，可以修改完檔案後，在 commit 新的回去
4. 尚未 commit，想回到上個未修改的檔案，`git checkout --filename` 回到修改檔案前版本
5. 修改 branch 名稱：`git branch -m branchname`
6. 將遠端的 branch 抓到 local：`git checkout remotebranchname)`  

參考資料：[參考1](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/)、[參考2](https://gitbook.tw/)
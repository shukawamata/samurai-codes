### 練習問題URL
[https://www.evernote.com/shard/s196/sh/cea24221-d59a-3545-5ef8-e034f0e47b1d/d27a65096b8173e611a670a586bbb58c](https://www.evernote.com/shard/s196/sh/cea24221-d59a-3545-5ef8-e034f0e47b1d/d27a65096b8173e611a670a586bbb58c)
[https://www.evernote.com/shard/s196/sh/e65da4a4-fe33-05c0-0248-60ce86bc010e/08ca4e5e2335896f5080d429887a6089](https://www.evernote.com/shard/s196/sh/e65da4a4-fe33-05c0-0248-60ce86bc010e/08ca4e5e2335896f5080d429887a6089)

### 実装内容 (練習問題の内容になぞり、ログイン画面とパスワードを忘れた際の問いわせフォームぽく書きました)

- login_form.html
  - ユーザ名とパスワードを入力するボックスと登録ボタンを実装
  - "パスワードをお忘れですか？"をクリックするとinquiry_form.htmlに飛びフォーム入力画面に推移する

- inquiry_form.html
  - 問い合わせ内容を入力するボックスと投稿ボタンを実装
  
- functions.js
  - showAlert()
    - ユーザ名とパスワードを入力して登録ボタンを押すと、入力したユーザ名とパスワードと一緒にアラート画面を表示する。
  - able_btn()
    - ユーザ名とパスワードを入力すると登録ボタンが有効化される。両方とも1文字以上入力されていないと無効化される
  - charNum(str)
    - 問いわせフォームに文字を入力すると、入力した文字数を表示する。
  - dis_btn()
    -　問いわせフォームの文字数が20を超えると投稿ボタンを無効化する。
  -　showcontents()
    - 問いわせフォームに入力した文字を別画面で表示して確認画面のような動きにしたかったがわからず中途半端です...ついでに10文字以下ならアラート出すようにしました


### 疑問点

- cssの簡単な設計方法を知りたい。
- 複数同じようなボタンがあるときなどの命名規則を知りたい。
- 以下コードのtrueの意味がよくわからない
```
state_btn.setAttribute("disabled", true);
```
- 以下コードの最後の"/"は必要？？
```
<input type="submit" id="btn" />
```



# オリジナルアプリ作成

## 持たせたい機能について

1.2つの動画を1画面で同時再生する
2.2つの動画にコメントを紐づけて保存する
3.紐付けた動画とコメントをファイル？のようにディレクトリ構成で管理したい。(タグをつけて分別する)
4.ユーザ登録、ログイン機能

## 進捗

### 6/14
フロントエンド側をCSSの動画を参考にしながら実装。
Replay.jsの画面をgridで調整したいが動画のサイズを変更するところで苦戦中...
・うまく動画のサイズが変更できない。
・girdでサイドバー、動画のエリア、コメントのエリアと場所分けできたが、ウィンドウを小さくしたりすると崩れたりするのでmin-widthを使って対処。
ウィンドウを小さくしても大きさを保つことができたがやり方として合っているかどうかは？

バックエンド側はMERNの動画を参考にしながらユーザをMongoDBに登録する機能を実装(POSTでjson形式でName,email,Passward,Passward2を登録する)、
払い出したHashedパスワードを使用してPOSTでログインした際にユーザのメールアドレス、パスワードをjson形式で実装するところまで完了。

一旦フロントエンドからsubmitしてMongoDBにユーザ情報を登録できることを確認しようとしたところ、以下のエラーが発生
Access to XMLHttpRequest at 'http://localhost:8888/api/users' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

調べてAccess-Control-Allow-Originの処理を追加したがエラー解消せず止まっている。書き方が悪い？？

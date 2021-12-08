# Obento Takeout App（弁テク）

拡大する飲食店のテイクアウト業務を効率化し、顧客の注文をオンラインで完結させるアプリ（開発中）
 
# 特徴
 
- 飲食店における、電話や店頭でのテイクアウト注文業務をオンライン注文へ移管し効率化を図る。
- 顧客側からもオンライン上で注文〜決済までを完結することにより、店頭での待ち時間を無くし、利便性を向上させる。

# 開発環境とバージョン
 
* macOS Catalina
* node v14.18.1
* ruby 2.7.2p137
* Rails 6.1.4.1


# インストールした実行環境とバージョン
（バージョン指定ではない）

```zsh
node install v14.18.1
npm 8.1.3
rbenv install 2.7.2
rbenv global 2.7.2
```

# Database

* postgres

# ローカルURL
- Rails URL `localhost:3000`
- React URL `localhost:3001`
 
# Usage
 
```zsh
% git clone https://github.com/takamuu/obento_takeout_app.git
% cd obento_takeout_app
% bundle config set path vendor/bundle --local
% bundle install
% rails db:create
% rails db:migrate
% rails db:seed
% rails server
## ２つ目のターミナルを起動
% cd obento_takeout_app/frontend
% npm install
% npm start
```
 
# Author
 
* 作成者　takamuu
 
# License
 
弁テク is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).




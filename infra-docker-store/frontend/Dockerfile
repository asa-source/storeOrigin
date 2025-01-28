FROM node:20.10-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストールするため、package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# プロジェクトファイルをコンテナにコピー
COPY . .

# コンテナ起動時に開発サーバーを実行
CMD ["sh"]

# ポート3000を公開（Reactのデフォルトポート）
EXPOSE 3000
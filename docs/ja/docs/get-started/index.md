# 初めての使い方
## 使い方
### 直接見積もり

CDNのアドレスを使用して直接ofa.jsをページにインポートすることができます。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.js"></script>
```

### npm経由でインストールする

まず、プロジェクトに ofa.js をインストールします。

```shell
npm install ofa.js --save
```

その後、ofa.jsモジュールをプロジェクトにインポートします：

```javascript
import "ofa.js"; // esm
// or
require("ofa.js"); // cmd
```

### 使い方

資源の引用の後、ofa.js はグローバルスコープに `$` のプロパティを設定します。すべての機能は `$` 上にあり、後のチュートリアルでその使用法を詳しく説明します。

通常の場合は、直接引用する方法で ofa.js を追加することをお勧めしますが、React や Vue などのフレームワークとの互換性を確保する場合には、npm を使用する方法が適しています。

### デバッグモード

ofa.jsのscriptタグに`debug`属性を追加することで、デバッグモードを有効にすることができます。デバッグモードでは、ロードされたコンポーネントモジュールやページモジュールにソースマップ機能が有効になり、ソースファイルから直接デバッグすることができます。

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js" debug></script>
```

デバッグモードを有効にすると、コンポーネントのコードをより簡単に追跡およびデバッグできます。これは、開発プロセスでのエラーのトラブルシューティングやコードのデバッグに非常に役立ちます。
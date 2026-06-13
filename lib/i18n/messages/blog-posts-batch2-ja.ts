/** 第二批博客文章 — 日文正文 */
export const blogPostsBatch2Ja: Record<
  string,
  {
    title: string
    description: string
    category: string
    content: { heading?: string; paragraphs: string[] }[]
  }
> = {
  "what-is-json": {
    title: "JSON とは？初心者向けガイド",
    description: "JSON の概要、仕組み、Web API と設定ファイルの標準形式となった理由。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "JSON（JavaScript Object Notation）は構造化データを保存・交換するための軽量フォーマットです。名称に JavaScript が含まれますが言語非依存で、Python、Java、Go などほぼすべての言語で利用されます。",
        ],
      },
      {
        heading: "JSON の構造",
        paragraphs: [
          "JSON はオブジェクト（波括弧内のキーと値）と配列（角括弧内のリスト）でデータを表現します。値は文字列、数値、真偽値、null、オブジェクト、配列が可能で、キーは二重引用符の文字列です。",
        ],
      },
      {
        heading: "API で JSON が主流の理由",
        paragraphs: [
          "JSON は人間が読みやすく、XML よりコンパクトで、多くの言語のネイティブ構造に自然にマップできます。REST API のリクエスト・レスポンスはほぼ JSON です。",
          "開発時は WaiHub の JSON フォーマッターで検証・整形・デバッグができます。",
        ],
      },
    ],
  },
  "json-vs-xml": {
    title: "JSON vs XML：どちらを選ぶ？",
    description: "API、設定、データ交換における JSON と XML の比較。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "JSON と XML はともに構造化データに使われますが、用途が異なります。トレードオフを理解し、API・設定・連携で適切な形式を選びましょう。",
        ],
      },
      {
        heading: "JSON の利点",
        paragraphs: [
          "JSON は軽量でパースが速く、開発者にとって読みやすいです。JavaScript オブジェクト、Python の dict などに直接マップでき、現代の REST API はほぼ JSON がデフォルトです。",
        ],
      },
      {
        heading: "XML が向く場面",
        paragraphs: [
          "XML は属性、名前空間、混合コンテンツをサポートし、文書型データ、SOAP、レガシー企業システムに適しています。RSS や Office 形式も XML ベースです。",
          "WaiHub の JSON フォーマッターは JSON と XML の相互変換をサポートします。",
        ],
      },
    ],
  },
  "how-jwt-authentication-works": {
    title: "JWT 認証の仕組み",
    description: "JWT の構造、署名、検証——現代 API と OAuth 認証の基礎。",
    category: "セキュリティ",
    content: [
      {
        paragraphs: [
          "JWT（JSON Web Token）認証では、サーバーが署名付きトークンを発行し、クライアントが以降のリクエストで提示します。サーバーは署名を検証し、セッション状態を保持せずにスケーラブルな認証を実現します。",
        ],
      },
      {
        heading: "JWT の 3 部構成",
        paragraphs: [
          "JWT は Header（アルゴリズムとタイプ）、Payload（ユーザー ID、有効期限などのクレーム）、Signature（header+payload+秘密鍵のハッシュ）の 3 部で、Base64URL エンコードされドットで連結されます。",
        ],
      },
      {
        heading: "認証フロー",
        paragraphs: [
          "1. ユーザーがログイン → 2. サーバーが JWT を返却 → 3. クライアントが Authorization ヘッダーで送信 → 4. サーバーが署名を検証してクレームを読み取ります。",
          "開発時は WaiHub の JWT デコーダーで内容を確認できます。本番トークンは信頼できないサイトに貼り付けないでください。",
        ],
      },
    ],
  },
  "uuid-v4-explained": {
    title: "UUID v4 の解説",
    description: "UUID v4 とは何か、ランダム UUID の仕組みと利用シーン。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "UUID v4 は乱数から 128 ビットの識別子を生成します。形式は 8-4-4-4-12 の 16 進（例: f47ac10b-58cc-4372-a567-0e02b2c3d479）。バージョン 4 は純粋な乱数生成を意味します。",
        ],
      },
      {
        heading: "UUID を使う理由",
        paragraphs: [
          "UUID は任意のマシンで独立に生成でき、調整不要です。分散 DB、オフラインアプリ、テストデータ、トレース ID に最適。数十億個生成しても衝突は極めて稀です。",
        ],
      },
      {
        heading: "ベストプラクティス",
        paragraphs: [
          "公開 ID には UUID v4 を推奨し、列挙攻撃を防ぎます。DB 主キーでは UUID v7（時間順）も検討できます。",
          "WaiHub の UUID ジェネレーターでテスト用 UUID を一括生成できます。",
        ],
      },
    ],
  },
  "url-encoding-explained": {
    title: "URL エンコードの解説",
    description: "パーセントエンコード、encodeURIComponent と encodeURI の違い。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "URL は限られた ASCII 文字のみ使用可能です。スペース、Unicode、&、= などは送信前にパーセントエンコード（%20、%3D など）が必要です。",
        ],
      },
      {
        heading: "encodeURIComponent と encodeURI",
        paragraphs: [
          "encodeURIComponent は ?、&、= もエンコードし、単一のクエリ値に使います。encodeURI は / や : など URL 構造を保持し、完全なリンクのエンコードに使います。",
        ],
      },
      {
        heading: "よくある間違い",
        paragraphs: [
          "既にエンコード済みの文字列を再エンコードすると二重エンコードになります。form-urlencoded では + はスペースを意味します。",
          "WaiHub の URL ツールは両関数と Query ↔ JSON 変換をサポートします。",
        ],
      },
    ],
  },
  "understanding-unix-timestamps": {
    title: "Unix タイムスタンプを理解する",
    description: "Unix エポック時間、秒とミリ秒、ログと API での変換。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "Unix タイムスタンプは 1970 年 1 月 1 日 00:00:00 UTC からの秒数またはミリ秒数です。ログ、DB、API、ブロックチェーンで広く使われます。",
        ],
      },
      {
        heading: "秒とミリ秒",
        paragraphs: [
          "10 桁は通常秒（1704067200 = 2024-01-01）、13 桁はミリ秒です。混同すると 1970 年や西暦 50000 年の日付になる典型的なバグです。",
        ],
      },
      {
        heading: "タイムゾーン",
        paragraphs: [
          "Unix タイムスタンプは UTC 基準です。ローカル表示にはタイムゾーン変換が必要。デバッグ時は UTC とローカルを並べて比較してください。",
          "WaiHub のタイムスタンプ変換は精度を自動検出し、UTC・ローカル・ISO 8601 を表示します。",
        ],
      },
    ],
  },
  "md5-vs-sha256": {
    title: "MD5 vs SHA-256：ハッシュ比較",
    description: "チェックサムと整合性検証における MD5 と SHA-256 の比較。",
    category: "セキュリティ",
    content: [
      {
        paragraphs: [
          "ハッシュ関数は任意入力を固定長ダイジェストに変換します。MD5 は 128 ビット、SHA-256 は 256 ビット。データ変更の検出は両方できますが、セキュリティ特性は大きく異なります。",
        ],
      },
      {
        heading: "MD5：高速だが脆弱",
        paragraphs: [
          "MD5 は高速でレガシーシステムに残っていますが、衝突攻撃が実用的です。パスワードや署名などセキュリティ用途には使えません。",
        ],
      },
      {
        heading: "SHA-256：現行標準",
        paragraphs: [
          "SHA-256 は SHA-2 ファミリーで、整合性検証、ブロックチェーン、証明書フィンガープリントの標準です。",
          "WaiHub のハッシュジェネレーターで MD5、SHA-1、SHA-256、SHA-512 を同時比較できます。",
        ],
      },
    ],
  },
  "common-regex-examples": {
    title: "開発者向け正規表現の例",
    description: "メール、URL、電話番号、日付などの実用パターン。",
    category: "チュートリアル",
    content: [
      {
        paragraphs: [
          "正規表現はテキストマッチのパターンです。以下は開発者が毎日使う実績パターンで、WaiHub の正規表現テスターで即座に検証できます。",
        ],
      },
      {
        heading: "実用パターン",
        paragraphs: [
          "メール: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}。URL: https?://[\\w.-]+\\.\\w{2,}[^\\s]*。UUID、整数、IPv4 なども定番です。",
        ],
      },
      {
        heading: "テストのコツ",
        paragraphs: [
          "文字列全体の検証には ^ と $ を使います。空文字、Unicode、境界値を必ずテストしてください。",
        ],
      },
    ],
  },
  "how-qr-codes-work": {
    title: "QR コードの仕組み",
    description: "QR コード技術、エンコード容量、誤り訂正と活用例。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "QR（Quick Response）コードは 2 次元バーコードで、スマートフォンが即座に読み取れます。",
        ],
      },
      {
        heading: "エンコードの仕組み",
        paragraphs: [
          "データをバイナリに変換し、誤り訂正コードと組み合わせて QR マトリックスにマッピングします。誤り訂正レベルにより最大約 30% の損傷でも読み取れます。",
        ],
      },
      {
        heading: "活用例",
        paragraphs: [
          "マーケティング URL、WiFi（WIFI: 形式）、連絡先、決済リンクなど。WiFi コードはスキャンで自動接続できます。",
          "WaiHub の QR ジェネレーターで PNG ダウンロードも可能です。",
        ],
      },
    ],
  },
  "api-debugging-tips": {
    title: "API デバッグのヒント",
    description: "REST API のデバッグ——JSON 検査、JWT 分析、よくあるエラー。",
    category: "チュートリアル",
    content: [
      {
        paragraphs: [
          "API デバッグは開発者の必須スキルです。以下の手法で結合テストや障害対応を加速できます。",
        ],
      },
      {
        heading: "レスポンスの検査",
        paragraphs: [
          "JSON レスポンスは必ず整形してから読みます。1 行に圧縮された JSON は構造エラーを隠します。",
        ],
      },
      {
        heading: "認証の確認",
        paragraphs: [
          "JWT をデコードしてクレームと有効期限を確認。401 は exp 期限切れや aud の不一致が多い原因です。",
        ],
      },
      {
        heading: "ツール連携",
        paragraphs: [
          "JSON フォーマッター → URL エンコーダー → JWT デコーダー → タイムスタンプ変換。WaiHub はブラウザ内で連携し、データをアップロードしません。",
        ],
      },
    ],
  },
  "json-best-practices": {
    title: "JSON API のベストプラクティス",
    description: "命名、ネスト、null 処理、エラーレスポンスの設計規約。",
    category: "チュートリアル",
    content: [
      {
        paragraphs: [
          "一貫した JSON 設計は API の消費と保守を容易にします。以下の規約に従うと連携がスムーズになります。",
        ],
      },
      {
        heading: "命名と構造",
        paragraphs: [
          "camelCase または snake_case を一貫して使用。ネストは 2〜3 レベルまで。配列はリスト、オブジェクトはエンティティに使い分けます。",
        ],
      },
      {
        heading: "null とエラー",
        paragraphs: [
          "null とフィールド欠落を明確に区別。エラーは {\"error\": {\"code\": \"...\", \"message\": \"...\"}} 形式で構造化してください。",
        ],
      },
      {
        heading: "検証",
        paragraphs: [
          "デプロイ前に JSON を検証。CI で JSON Schema を使うと効果的です。",
        ],
      },
    ],
  },
  "secure-password-generation": {
    title: "安全なパスワード生成ガイド",
    description: "強力なパスワードの生成、長さの推奨、暗号学的ランダムの重要性。",
    category: "セキュリティ",
    content: [
      {
        paragraphs: [
          "弱いパスワードは侵害の主因です。十分な長さと多様性のランダムパスワードは、覚えやすいパスワードよりブルートフォースに強いです。",
        ],
      },
      {
        heading: "長さが最重要",
        paragraphs: [
          "一般アカウントは 12 文字以上、重要アカウントは 16 文字以上を推奨。文字を増やすほどブルートフォース難度は指数的に上がります。",
        ],
      },
      {
        heading: "パスワードマネージャー",
        paragraphs: [
          "生成したパスワードはマネージャーに保存し、使い回しは禁止。テスト環境は WaiHub のパスワードジェネレーター（crypto.getRandomValues）が便利です。",
        ],
      },
    ],
  },
  "hash-algorithms-comparison": {
    title: "ハッシュアルゴリズム比較",
    description: "MD5、SHA-1、SHA-256、SHA-512 の概要と使い分け。",
    category: "技術",
    content: [
      {
        paragraphs: [
          "ハッシュアルゴリズムは用途によって選び分けが必要です。誤った選択はセキュリティリスクや互換性問題を招きます。",
        ],
      },
      {
        heading: "アルゴリズム概要",
        paragraphs: [
          "MD5: 128 ビット、高速、セキュリティ用途不可。SHA-256: 256 ビット、現行標準。SHA-512: 512 ビット、長期アーカイブ向け。",
        ],
      },
      {
        heading: "選び方",
        paragraphs: [
          "ファイル整合性は SHA-256。API 署名はバックエンドと一致させる。パスワードはブラウザでハッシュせず、サーバーで bcrypt/Argon2 を使用。",
        ],
      },
    ],
  },
  "regex-for-email-validation": {
    title: "メール検証の正規表現",
    description: "正規表現によるメール検証——パターン、限界、ベストプラクティス。",
    category: "チュートリアル",
    content: [
      {
        paragraphs: [
          "メール検証の正規表現は最も一般的なパターンの一つです。実用的なパターンで明らかな誤りを検出できます。",
        ],
      },
      {
        heading: "実用パターン",
        paragraphs: [
          "基本: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$。実際のメールの 99% をカバーしますが、RFC 5322 の全エッジケースは保証しません。",
        ],
      },
      {
        heading: "限界",
        paragraphs: [
          "正規表現は形式のみ検証し、存在確認はできません。本番では確認メールや SMTP チェックを併用してください。",
        ],
      },
    ],
  },
  "regex-for-url-validation": {
    title: "URL 検証の正規表現",
    description: "HTTP/HTTPS パターン、クエリ文字列、URL パーサーとの使い分け。",
    category: "チュートリアル",
    content: [
      {
        paragraphs: [
          "URL 検証の正規表現は、フォームや API で不正なリンクを早期に検出するのに役立ちます。",
        ],
      },
      {
        heading: "HTTP/HTTPS パターン",
        paragraphs: [
          "基本: ^https?://[\\w.-]+(?:\\.[\\w.-]+)+[\\w._~:/?#[\\]@!$&'()*+,;=%-]*$。一般的な Web URL にマッチします。",
        ],
      },
      {
        heading: "URL パーサーの利用",
        paragraphs: [
          "ポート、IPv6 など複雑な検証は new URL(input) を推奨。正規表現は簡易フォーム検証、URL API は解析・正規化向けです。",
        ],
      },
    ],
  },
}

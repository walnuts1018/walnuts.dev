import {
  chocoMintTheme,
  githubTheme,
  hatenaTheme,
  pinkskyTheme,
  qiitaTheme,
  zennTheme,
  Card,
} from './Card'

export default function Cards({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className='flex flex-wrap justify-center'>
        <Card
          title='walnuts1018/infra'
          description='Kubernetesのインフラ構成を管理するリポジトリです。'
          theme={githubTheme}
          href='https://github.com/walnuts1018/infra'
          icon='github'
        />
        <Card
          title='お絵描き伝言ゲーム'
          description='NF2023で開催したお絵描き伝言ゲームの結果発表ページです。'
          href='https://oekaki.walnuts.dev/public'
          theme={chocoMintTheme}
        />
        <Card
          title='ESP32と赤外線LEDを用いてエアコンを遠隔操作する'
          href='https://zenn.dev/walnuts/articles/300213a4ceee19'
          theme={zennTheme}
          icon='zenn'
        />
        <Card
          title='Walnuts.dev を支える技術 (物理環境/ネットワーク編)'
          theme={hatenaTheme}
          icon='hatena'
          href='https://walnuts.hatenablog.com/entry/a30d4de2-e5cd-4542-bb8b-46ce3983f9ef'
        />
        <Card
          title='HedgeDocをKubernetesに構築する'
          theme={pinkskyTheme}
          href='https://hedgedoc.walnuts.dev/-Arpt4ZFQMC7Sz0acSG8Jg'
        />
        <Card
          title='walnuts1018/machine-status-api'
          description='ラズパイと自作回路を組み合わせ、遠隔でサーバーの電源を操作するAPIです。'
          theme={githubTheme}
          href='https://github.com/walnuts1018/machine-status-api'
          icon='github'
        />
        <Card
          title='walnuts1018/k8s-badge'
          description='README用に、k8sクラスタのstatus badgeを生成するActionです。'
          theme={githubTheme}
          href='https://github.com/walnuts1018/k8s-badge'
          icon='github'
        />

        <Card
          title='walnuts1018/wakatime-to-slack'
          theme={githubTheme}
          href='https://github.com/walnuts1018/wakatime-to-slack-profile'
          icon='github'
          description='Wakatimeから今書いている言語をリアルタイムで取得し、Slackのステータスに反映します。'
        />
        <Card
          title='DIGI-CON HACKATHON 2023'
          theme={chocoMintTheme}
          href='https://x.com/walnuts1018/status/1707774804466823674?s=20'
          description='DIGI-CON HACKATHON 2023でジャンプ+賞をいただきました。'
        />
        <Card
          title='walnuts1018/OpenChokin'
          theme={githubTheme}
          href='https://github.com/walnuts1018/OpenChokin'
          icon='github'
          description='【開発中】貯金を公開するサービスです。 / 鴨川ハッカソンで優秀賞をいただきました。'
        />
        <Card
          title='walnuts | しずかなインターネット'
          theme={pinkskyTheme}
          href='https://sizu.me/walnuts'
          icon='sizu'
        />
      </div>
    </div>
  )
}

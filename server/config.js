const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx84be17593fa77bef',

    // 微信小程序 App Secret
    appSecret: '6d2ef18c76a8b543703e2c3ce5cb3a3c',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,
    /**
     * MySQL生产环境 配置，用来存储 session 和用户信息
     */
    // mysql: {
    //   host: '172.16.164.78',
    //   port: 3306,
    //   user: 'root',
    //   db: 'cAuth',
    //   pass: 'gy110708',
    //   char: 'utf8mb4'
    // },
    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
      host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx84be17593fa77bef',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    // 其他配置 ...
    serverHost: 'https://976008508.meetmin.xyz',
    tunnelServerUrl: 'http://tunnel.ws.qcloud.la',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1253175580',
    qcloudSecretId: 'AKIDrbAYotaaBbS9i7ARK2Zv66uZ3LTrBBAy',
    qcloudSecretKey: 'kJhv68yeBXiiYHsIZfaJqNmcLyQk4IRV',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000
}

module.exports = CONF
